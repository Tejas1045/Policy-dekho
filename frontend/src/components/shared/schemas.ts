import { z, ZodError } from "zod";

export const vehicleSchema = z.object({
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  year: z.string().min(1, "Year is required"),
  fuelType: z.string().min(1, "Fuel type is required"),
  city: z.string().min(1, "City is required"),
  registrationNumber: z
    .string()
    .min(4, "Enter a valid registration number")
    .nonempty("Registration number is required"),
  policyType: z.string().min(1, "Policy type is required"),
});

export const ownerSchema = z.object({
  ownerName: z.string().min(1, "Full name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  mobile: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Enter a valid email"),

  previousInsurer: z.string().optional(),
  policyExpiry: z.string().optional(),

  ncb: z.string().optional(),
  addOns: z.array(z.string()).optional(),
});

export function toErrorMap(err: z.ZodError) {
  const map: Record<string, string> = {};
  const zErr = err as ZodError<any>;
  zErr.issues.forEach((issue) => {
    const key = (issue.path && issue.path[0]) || "_";
    if (!map[key as string]) {
      map[key as string] = issue.message;
    }
  });

  return map;
}
