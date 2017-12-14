import * as moment from 'moment';

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
  charges: Array<TimeSlot>;
  rating: number;
}


export interface ChargePerSlot {
  name: string;
  price: number;
  currency: string;
}

export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
  busy?: boolean;
  pending?: boolean;
  available?: boolean;
  partiallyBusy?: boolean;
  thismonth?: boolean;
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  name: string;
  charge: number;
  currency: string;
  booked?: boolean;
  justBooked?: boolean;
}

export interface Booking {
  date: moment.Moment;
  timeSlot: TimeSlot;
}

export interface Skill {
  id: number;
  skill: string;
}
