# ---------- Builder stage ----------
FROM node:20 AS builder

WORKDIR /app

# copy all package.json files
COPY frontend/package*.json ./

RUN npm install

# copy app files from local to builder stage
COPY frontend .

# run npm install
RUN npm run build

# ---------- deploy stage ------------

FROM node:24.6-alpine AS Deploy

# working dir
WORKDIR  /app

# copy app files from builder stage
COPY --from=builder /app ./

# run install with only production dependencies
RUN npm install --production

# expose the application to 3000
EXPOSE 3000

ENTRYPOINT [ "npm" , "start" ]
