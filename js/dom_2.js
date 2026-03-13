// create Element
//append or prepend kro jha bhi element chahiye wha
//append : Add element at top in body
//prepend : Add element at bottom in the body

let h1 = document.createElement("h1");
h1.innerText = "hello ji";

// console.log(h1);
// document.body.append(h1);
//document.querySelector("body").append(h1);

document.body.prepend(h1);

let h2 = document.createElement("h2");
h2.innerText = "hello mai bahar se aaya hu";

// document.querySelector("div").appendChild(h2);
// document.querySelector("div").append(h2);
document.querySelector("div").prepend(h2);

let h3 = document.querySelector("h3");
// h3.classList.add("hulu");
// h3.classList.remove("hulu");
h3.classList.toggle("hulu"); // Does the opposite 