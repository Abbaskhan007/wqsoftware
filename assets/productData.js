import product1 from "./product1.png";
import product2 from "./product2.png";
import product3 from "./product3.png";
import product4 from "./product4.png";
import latest2 from "./latest2.png";
import latest3 from "./latest3.png";
import chair from "./chair.png";

export const latesProducts = [
  {
    id: "1",
    name: "Beautiful Chair made of wood",
    price: 35,
    discountPrice: 25,
    source: latest2,
  },
  {
    id: "2",
    name: "Soft Chairs with Foam Cover",
    price: 35,
    discountPrice: 25,
    source: product2,
  },
  {
    id: "3",
    name: "Rounded Chairs",
    price: 35,
    source: latest3,
  },
  {
    id: "4",
    name: "Beautiful Art Chair",
    price: 25,
    source: product3,
  },
];

const productsData = [
  {
    id: "1",
    name: "Beautiful Chair made of wood",
    price: 35,
    discountPrice: 25,
    source: product1,
  },
  {
    id: "2",
    name: "Soft Chairs with Foam Cover",
    price: 35,
    discountPrice: 25,
    source: product2,
  },
  {
    id: "3",
    name: "Rounded Chairs",
    price: 35,
    source: product4,
  },
  {
    id: "4",
    name: "Beautiful Art Chair",
    price: 25,
    source: product3,
  },
  {
    id: "5",
    name: "Beautiful Chair made of wood",
    price: 35,
    discountPrice: 28,
    source: product1,
  },
  {
    id: "6",
    name: "Beautiful Chair made of wood",
    price: 35,
    discountPrice: 25,
    source: product4,
  },
  {
    id: "7",
    name: "Beautiful Chair made of wood",
    price: 45,
    source: product2,
  },
];

export const carouselData = [chair, latest2, latest3];

export default productsData;
