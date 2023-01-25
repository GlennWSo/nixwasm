const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  let img1 = "images/closed_bevel.png";
  let img2 = "images/cyl_normals.png";

  if (mySrc === img1) {
    myImage.setAttribute("src", img2);
  } else {
    myImage.setAttribute("src", img1);
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    return 
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Hello, ${myName}!`;
}


myButton.onclick = () => {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}`
}
