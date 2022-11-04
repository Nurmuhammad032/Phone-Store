export interface Phone {
  id: number;
  name: string;
  imgUrl: string[];
  price: number;
  fromPrice: number;
  times: number;
}

export interface PhoneInfo extends Phone {
  present: boolean;
  change: boolean;
  discount: boolean;
}
