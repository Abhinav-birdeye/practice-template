export interface CompliancePayload {
  PhoneNumberType: "local" | "mobile" | "national" | "toll_free";
  IsIsvEmbed: "true"|"false";
  FriendlyName: string;
  BusinessIdentityType: "isv_reseller_or_partner";
  IsvRegisteringForSelfOrTenant: "my_customer";
  EndUserType: "business" | "individual";
  NotificationEmail: string;
  // optional 
  StatusCallbackUrl?: string;
  BusinessLegalName?:string;
  BusinessRegistrationAuthority?: "UK:CRN" | "US:EIN" | "CA:CBN" | "AU:ACN" | "Other";
  BusinessRegistrationNumber?: string;
  BusinessWebsiteUrl?: string;
  AddressStreet?: string;
}
