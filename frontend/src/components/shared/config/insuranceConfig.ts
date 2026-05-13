export const insuranceConfig = {
  car: {
    icon: "🚗",
    title: "Car Insurance",

    fuelOptions: [
      {
        label: "Petrol",
        value: "petrol",
        icon: "⛽",
      },
      {
        label: "Diesel",
        value: "diesel",
        icon: "🛢️",
      },
      {
        label: "CNG",
        value: "cng",
        icon: "🌿",
      },
      {
        label: "Electric",
        value: "electric",
        icon: "⚡",
      },
    ],

    policyOptions: [
      {
        label: "Comprehensive",
        value: "comprehensive",
        description:
          "Own damage + Third party",
      },
      {
        label: "Third Party",
        value: "third_party",
        description:
          "Mandatory legal coverage",
      },
      {
        label: "Own Damage",
        value: "own_damage",
        description:
          "Covers damage to your own vehicle",
      },
    ],
  },

  bike: {
    icon: "🏍️",
    title: "Bike Insurance",

    fuelOptions: [
      {
        label: "Petrol",
        value: "petrol",
        icon: "⛽",
      },
      {
        label: "Electric",
        value: "electric",
        icon: "⚡",
      },
    ],

    policyOptions: [
      {
        label: "Comprehensive",
        value: "comprehensive",
        description:
          "Complete protection",
      },
      {
        label: "Third Party",
        value: "third_party",
        description:
          "Mandatory legal coverage",
      },
      {
        label: "Own Damage",
        value: "own_damage",
        description:
          "Covers damage to your own vehicle",
      },
    ],
  },
};