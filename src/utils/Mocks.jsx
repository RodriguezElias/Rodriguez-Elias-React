const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/51H06jjz45L._AC_UX569_.jpg",
    name: "Pantalon Mujer Levis",
    description: "Vaqueros ajustados Signature by Levi Strauss & Co.",
    price: 1200,
    stock: 5,
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/51H06jjz45L._AC_UX569_.jpg",
    name: "Pantalon Mujer Levis",
    description: "Vaqueros ajustados Signature by Levi Strauss & Co.",
    price: 1200,
    stock: 5,
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/51H06jjz45L._AC_UX569_.jpg",
    name: "Pantalon Mujer Levis",
    description: "Vaqueros ajustados Signature by Levi Strauss & Co.",
    price: 1200,
    stock: 5,
  },
];

const getFetch = ()=>{
  const myPromise = new Promise((res, rej) => {
    let response = "200";
    if (response === "200") {
      setTimeout(() => {
        res(products);
      }, 3000);
    } else {
      rej("404");
    }
  });
  
  return myPromise
}

export default getFetch