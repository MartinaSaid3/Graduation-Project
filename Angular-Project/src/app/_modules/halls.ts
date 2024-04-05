export interface Halls {
  id:number;
  name:string;
  location:string;
  description:string;
  openBuffet:string;
  setMenu:string;
  highTea:string;
  maxCapacity:number;
  minCapacity:number;
  priceStartingFrom:number;
  images:[];
  reservationDates:Date[];
}
