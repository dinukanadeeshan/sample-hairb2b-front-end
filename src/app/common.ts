
export interface Stylist {
  id: number;
  user_id: number;
  is_active: boolean;
  created_date: Date;
  first_name: string;
  last_name: string;
  job_role: string;
  profile_pic: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  telephone: number;
  description: string;
  terms_and_condition: string;
  skills: Array<string>;
  pref_locations: Array<string>;
  charges: Array<ChargePerSlot>;
  rating: number;
}


export interface ChargePerSlot {
  name: string;
  price: number;
  currency: string;
}
