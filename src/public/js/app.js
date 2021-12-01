const placeBtn = document.querySelector(".place");
const productBtn = document.querySelector(".product");
const priceBtn = document.querySelector(".price");
const packagingBtn = document.querySelector(".packaging");
const propositionBtn = document.querySelector(".proposition");
const promotionBtn = document.querySelector(".promotion");

placeBtn.addEventListener("click", () => {
    placeBtn.style.backgroundColor = "#892E8D";
});

productBtn.addEventListener("click", () => {
    productBtn.style.backgroundColor = "#FF8C12";
});

priceBtn.addEventListener("click", () => {
    priceBtn.style.backgroundColor = "#FF604E";
});

packagingBtn.addEventListener("click", () => {
    packagingBtn.style.backgroundColor = "#FF79A5";
});

propositionBtn.addEventListener("click", () => {
    propositionBtn.style.backgroundColor = "#37BF3D";
});

promotionBtn.addEventListener("click", () => {
    promotionBtn.style.backgroundColor = "#1898E3";
});