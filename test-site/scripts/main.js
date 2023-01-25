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
