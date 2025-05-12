export interface PropertyListing {
  statusCode: string;
  dated: string;
  status: string;
  agent: string;
  approvedStatus: number;
  address: string;
  propertyType: string;
  listingPrice: string;
  description: string;
  Id: string;
}
export interface GetAllPropertyListingsResponse {
  status: number;
  message: string;
  data: PropertyListing[];
}
