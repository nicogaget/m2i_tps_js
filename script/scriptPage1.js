function changePlace() {
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");
  let img4 = document.getElementById("img4");

  let oldSrc1 = document.getElementById("img1").src;
  let oldSrc2 = document.getElementById("img2").src;
  let oldSrc3 = document.getElementById("img3").src;
  let oldSrc4 = document.getElementById("img4").src;

  document.getElementById("img1").src = oldSrc3;
  document.getElementById("img2").src = oldSrc1;
  document.getElementById("img4").src = oldSrc2;
  document.getElementById("img3").src = oldSrc4;
}
