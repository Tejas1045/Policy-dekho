export type InsuranceFormData = {
  brand: string;
  model: string;
  year: string;
  fuelType: string;
  city: string;
  registrationNumber: string;
  policyType: string;

  ownerName: string;
  dob: string;
  mobile: string;
  email: string;

  previousInsurer: string;
  policyExpiry: string;

  ncb: string;

  addOns: string[];
};