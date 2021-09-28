const products = [
  {
    id: 0,
    image: "https://s3-sa-east-1.amazonaws.com/saasargentina/JaFfzVCrjO8t2GS5mQuS/miniatura",
    category: "pc-armada",
    name: "PC Gamer Armada | Intel Core I3 10100F + 8GB + GTX 1650 SUPER 4Gb",
    description: "PC Gamer Armada | Intel Core I3 10100F + 8GB + GTX 1650 SUPER 4Gb",
    price: 143999,
    stock: 5,
  },
  {
    id: 1,
    image: "https://s3-sa-east-1.amazonaws.com/saasargentina/8SWvUfUUKmrNVrakCMaU/imagen",
    category: "laptop",
    name: "Notebook ASUS ZenBook Flip S UX371EA Intel I7 1165 G7",
    description: "Notebook ASUS ZenBook Flip S UX371EA Intel I7 1165 G7 | 16GB RAM | 512Gb NVME | Win10 | 13.3 4K OLED Tactil",
    price: 259999,
    stock: 5,
  },
  {
    id: 2,
    image: "https://s3-sa-east-1.amazonaws.com/saasargentina/Cd3z5qZNIkocPDeEF0xs/imagen",
    category: "laptop",
    name: "Notebook HP Omen Intel I7 10750H ",
    description: "Notebook HP Omen Intel I7 10750H | 16GB DDR4 | GTX 1650 TI 4Gb | 512Gb NVME + Optane 32Gb | Win10 | 15.6 FHD",
    price: 194999,
    stock: 5,
  },
];


 export const getItems = new Promise((res, rej) => {
    let response = "200";
    if (response === "200") {
      setTimeout(() => {
        res(products);
      }, 4000);
    } else {
      rej("404");
    }
  });

  export const getItem = new Promise((res, rej) => {
    const test = products.find(prod => prod.id === 2)
    let response = "200";
    if (response === "200") {
      setTimeout(() => {
        res(test);
      }, 2000);
    } else {
      rej("404");
    }
  });
