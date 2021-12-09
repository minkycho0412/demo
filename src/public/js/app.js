const placeBtn = document.querySelector(".place");
const productBtn = document.querySelector(".product");
const priceBtn = document.querySelector(".price");
const packagingBtn = document.querySelector(".packaging");
const propositionBtn = document.querySelector(".proposition");
const promotionBtn = document.querySelector(".promotion");

placeBtn.addEventListener("click", () => {
    placeBtn.style.backgroundColor = "#892E8D";
    placeBtn.style.color ="white";
});

productBtn.addEventListener("click", () => {
    productBtn.style.backgroundColor = "#FF8C12";
    productBtn.style.color ="white";
});

priceBtn.addEventListener("click", () => {
    priceBtn.style.backgroundColor = "#FF604E";
    priceBtn.style.color ="white";
});

packagingBtn.addEventListener("click", () => {
    packagingBtn.style.backgroundColor = "#FF79A5";
    packagingBtn.style.color ="white";
});

propositionBtn.addEventListener("click", () => {
    propositionBtn.style.backgroundColor = "#37BF3D";
    propositionBtn.style.color ="white";
});

promotionBtn.addEventListener("click", () => {
    promotionBtn.style.backgroundColor = "#1898E3";
    promotionBtn.style.color ="white";
});