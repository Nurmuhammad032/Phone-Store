// import {} from "";
import { v4 as uuidv4 } from "uuid";
import { IoBagHandleOutline, IoCartOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SlHome } from "react-icons/sl";
import { TiStarOutline } from "react-icons/ti";

const links = [
  {
    id: uuidv4(),
    path: "/",
    icon: <SlHome />,
    name: "Главная",
  },
  {
    id: uuidv4(),
    path: "/order",
    icon: <HiOutlineClipboardList />,
    name: "Заказы",
  },
  {
    id: uuidv4(),
    path: "/product",
    icon: <IoBagHandleOutline />,
    name: "Товары",
  },
  {
    id: uuidv4(),
    path: "/reviews",
    icon: <TiStarOutline />,
    name: "Отзывы",
  },
  {
    id: uuidv4(),
    path: "/checkout",
    icon: <IoCartOutline />,
    name: "Оформить заказ",
  },
];

export default links;
