const products = [
  {
    name: "Micheal kors red-bag",
    image: "../ProductMap/Img/redmichealkloinsbag.jpg",
    brand: "Micheal Kors",
    price: `10,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Jacquemeus",
    image: "../ProductMap/Img/aromateec--q9tuxLn4hA-unsplash.jpg",
    brand: "Jacquemeus",
    price: `15,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Valentine",
    image: "../ProductMap/Img/valentbag.jpg",
    brand: "Valentino",
    price: `50,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Parfum De colouge",
    image: "../ProductMap/Img/Perfume.jpg",
    brand: "Dior",
    price: `110,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Tasty Waffles",
    image: "../ProductMap/Img/alexandra-tran-waffles.jpg",
    brand: "alexandra-tran",
    price: `10,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Velvet cake",
    image: "../ProductMap/Img/alex-lvrs-cake.jpg",
    brand: "alex-lvrs",
    price: `100,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Chicken Burger",
    image: "../ProductMap/Img/amin-ramezani-burger.jpg",
    brand: "amin-ramezani",
    price: `500`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Jenn-lopez-watch",
    image: "../ProductMap/Img/jenn-lopez-watch.jpg",
    brand: "jenn-lopez",
    price: `20,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Necklace",
    image: "../ProductMap/Img/jewellry.jpg",
    brand: "Felicia dum",
    price: `60,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "Pat-taylor-watch",
    image: "../ProductMap/Img/pat-taylor-watch.jpg",
    brand: "pat-taylo",
    price: `10,000,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    name: "darya-VovK-cake",
    image: "../ProductMap/Img/darya-VovK-cake.jpg",
    brand: "darya-VovK",
    price: `600,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
  {
    id: "78",
    name: "Gucci-analogue-watch",
    image: "../ProductMap/Img/watch.jpg",
    brand: "gucci",
    price: `1,000,000`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim
        facere quos porro ad maxime, sequi incidunt, est eaque assumenda
        vitae. Illo molestiae iste quidem, asperiores tempora aspernatur sed
        expedita.`,
  },
];

// console.log(products);
// console.log(products.map((product) => product.description));

const productList = products
  .map((product, index) => {
    return `
    <div key="${index}" class="product-box">
    <div class="product-image">
    <img src= '${product.image}' alt="" />
    </div>
    <div class="product-name">
      <h3>${product.name}</h3>
    </div>
    <div class="priceNdBrand">
      <span><b>$ ${product.price}</b></span>
      <span><b>Brand </b> ${product.brand}</span>
    </div>
    <div class="description">
      <span
        >${product.description}</span
      >
    </div>
  </div>
  `;
  })
  .join(" ");

document.getElementById("productDetails").innerHTML = productList;
