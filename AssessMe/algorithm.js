// const urlDomainGetter = () => {
//   let url = "";
//   let urlArray = ["h", "t", "t", "p", "s", ":", "/", "/", "c", "o", "m"];
//   // let shortner = url.;
//   return shortner;
// };

// console.log(urlDomainGetter("https://github.com/carbonfive/raygon"));

// const url = "https://github.com/carbonfive/raygon";
const url = "https://www.frontendmentor.io/home";
const address = url.split("/").filter((url) => url.includes("."));

console.log(address[0].split("."));

if (address[0].split(".").length > 2) {
  console.log(address[0].split(".")[1]);
} else {
  console.log(address[0].split(".")[0]);
}

const integers = [2, 6, 89, 55, 1, 0, 8787];

console.log(integers.sort((a, b) => a - b)[integers.length - 1]);

function countBy(x, n) {
  let z = [];

  for (i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(2, 5));
