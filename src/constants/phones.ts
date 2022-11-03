import { v4 as uuidv4 } from "uuid";
import { Phone } from "../../types";

const phones: Phone[] = [
  {
    id: uuidv4(),
    name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    imgUrl: "/images/phone1.png",
    price: 7300000,
    fromPrice: 2445000,
    times: 24,
  },
  {
    id: uuidv4(),
    name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    imgUrl: "/images/phone1.png",
    price: 7300000,
    fromPrice: 2445000,
    times: 24,
  },
];

export default phones;
