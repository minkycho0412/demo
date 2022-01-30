const card1 = document.querySelector('.card1__inner');
const card2 = document.querySelector('.card2__inner');
const card3 = document.querySelector('.card3__inner');

const placeBtn = document.querySelector(".placeBtn");
const productBtn = document.querySelector(".productBtn");
const priceBtn = document.querySelector(".priceBtn");
const packagingBtn = document.querySelector(".packagingBtn");
const propositionBtn = document.querySelector(".propositionBtn");
const promotionBtn = document.querySelector(".promotionBtn");

const bars = document.querySelectorAll(".bar");
const mini = document.querySelectorAll(".mini");

const wwws = document.querySelectorAll(".www");
const ps = document.querySelectorAll(".p");

card1.addEventListener('click', function () {
    card1.classList.toggle('is-flipped');
});
card2.addEventListener('click', function () {
    card2.classList.toggle('is-flipped');
});
card3.addEventListener('click', function () {
    card3.classList.toggle('is-flipped');
});

// var formtag = document.getElementById('formtag');
// formtag.addEventListener('submit', function(event) {
//     event.preventDefault();
// //     const req = {
// //         name: document.getElementById('input_name').value,
// //         email: document.getElementById('input_email').value,
// //         company: document.getElementById('input_company').value,
// //         message: document.getElementById('input_message').value,
// //     };
//     const data = new FormData(form);
//     const action = event.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//     .then(() => {
//       alert("Success!");
//     })
// });

placeBtn.addEventListener("click", () => {
    document.querySelector(".card1.cardtitle").innerHTML = 'How to make your product dangerous to eat; <br> only for adventurers!';
    document.querySelector(".card2.cardtitle").innerHTML = 'How to sell your products at your own product parties?';
    document.querySelector(".card3.cardtitle").innerHTML = 'How to make your product ready to use / consume in a very short time?';
    document.querySelector(".card4.cardtitle").innerHTML = 'How would your "Baby first Product" look like?';

    document.querySelector(".card1.sub").innerText = 'people';
    document.querySelector(".card2.sub").innerHTML = 'own &nbsp distribution';
    document.querySelector(".card3.sub").innerHTML = 'on &nbsp the &nbsp go';
    document.querySelector(".card4.sub").innerText = 'family';

    placeBtn.style.backgroundColor = "black";
    productBtn.style.backgroundColor = "white";
    priceBtn.style.backgroundColor = "white";
    packagingBtn.style.backgroundColor = "white";
    propositionBtn.style.backgroundColor = "white";
    promotionBtn.style.backgroundColor = "white";

    placeBtn.style.color ="white";
    productBtn.style.color ="black";
    priceBtn.style.color ="black";
    packagingBtn.style.color ="black";
    propositionBtn.style.color ="black";
    promotionBtn.style.color ="black";

    document.querySelector(".card1.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card2.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card3.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card4.cardtitle").style.fontSize = "1.96vw";

    for(var i in bars) {
        bars[i].style.backgroundColor = "#892E8D";
        wwws[i].innerText = 'where';
        ps[i].innerText = 'Place';
        mini[i].innerHTML = '<img id="mini" src="../public/image/icon_1.png" alt=""></img>';
    }
});

productBtn.addEventListener("click", () => {
    document.querySelector(".card1.cardtitle").innerHTML = 'How can your product re-vitalize another product?';
    document.querySelector(".card2.cardtitle").innerHTML = 'How to sell your products in layers (like for soup layers of crutons, herbs, water, vegetables)?';
    document.querySelector(".card3.cardtitle").innerHTML = 'How to turn your products into a bar, like chocolate bar, that you can break off pieces?';
    document.querySelector(".card4.cardtitle").innerHTML = 'How do decompose your product in each individual part and recompose it into a totally new product?';

    document.querySelector(".card1.sub").innerHTML = 'shelf &nbsp life';
    document.querySelector(".card2.sub").innerHTML = 'new &nbsp format';
    document.querySelector(".card3.sub").innerHTML = 'new &nbsp format';
    document.querySelector(".card4.sub").innerText = 'creative';

    placeBtn.style.backgroundColor = "white";
    productBtn.style.backgroundColor = "black";
    priceBtn.style.backgroundColor = "white";
    packagingBtn.style.backgroundColor = "white";
    propositionBtn.style.backgroundColor = "white";
    promotionBtn.style.backgroundColor = "white";

    placeBtn.style.color ="black";
    productBtn.style.color ="white";
    priceBtn.style.color ="black";
    packagingBtn.style.color ="black";
    propositionBtn.style.color ="black";
    promotionBtn.style.color ="black";

    document.querySelector(".card1.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card2.cardtitle").style.fontSize = "1.75vw";
    document.querySelector(".card3.cardtitle").style.fontSize = "1.89vw";
    document.querySelector(".card4.cardtitle").style.fontSize = "1.54vw";

    for(var i in bars) {
        bars[i].style.backgroundColor = "#FF8C12";
        wwws[i].innerText = 'what';
        ps[i].innerText = 'Product';
        mini[i].innerHTML = '<img id="mini" src="../public/image/icon_2.png" alt=""></img>';

    }
});

priceBtn.addEventListener("click", () => {
    document.querySelector(".card1.cardtitle").innerHTML = 'How can consumers rent your product?';
    document.querySelector(".card2.cardtitle").innerHTML = 'How to give away your product for free if people are buying a competitor product?';
    document.querySelector(".card3.cardtitle").innerHTML = 'How can you make different varieties (packaging, content, shapes) of your product and ask different prices for each?';
    document.querySelector(".card4.cardtitle").innerHTML = 'How can consumers buy your product as if it is an auction?';

    document.querySelector(".card1.sub").innerText = 'rent';
    document.querySelector(".card2.sub").innerHTML = 'for &nbsp free';
    document.querySelector(".card3.sub").innerText = 'flexible';
    document.querySelector(".card4.sub").innerText = 'flexible';

    placeBtn.style.backgroundColor = "white";
    productBtn.style.backgroundColor = "white";
    priceBtn.style.backgroundColor = "black";
    packagingBtn.style.backgroundColor = "white";
    propositionBtn.style.backgroundColor = "white";
    promotionBtn.style.backgroundColor = "white";

    placeBtn.style.color ="black";
    productBtn.style.color ="black";
    priceBtn.style.color ="white";
    packagingBtn.style.color ="black";
    propositionBtn.style.color ="black";
    promotionBtn.style.color ="black";

    document.querySelector(".card1.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card2.cardtitle").style.fontSize = "1.75vw";
    document.querySelector(".card3.cardtitle").style.fontSize = "1.33vw";
    document.querySelector(".card4.cardtitle").style.fontSize = "1.96vw";
    
    for(var i in bars) {
        bars[i].style.backgroundColor = "#FF604E";
        wwws[i].innerText = 'what';
        ps[i].innerText = 'Price';
        mini[i].innerHTML = '<img id="mini" src="../public/image/icon_3.png" alt=""></img>';

    }
});

packagingBtn.addEventListener("click", () => {
    document.querySelector(".card1.cardtitle").innerHTML = 'How to make a packaging that invites cosumers to share the product?';
    document.querySelector(".card2.cardtitle").innerHTML = 'How to put your product in a straw; <br> suck in (hot) water!';
    document.querySelector(".card3.cardtitle").innerHTML = "Smells 'like the real' thing when you open it!";
    document.querySelector(".card4.cardtitle").innerHTML = 'How to spray (parts of) your product?';
    
    document.querySelector(".card1.sub").innerText = 'portioning';
    document.querySelector(".card2.sub").innerHTML = 'new &nbsp shape';
    document.querySelector(".card3.sub").innerText = 'dispensing';
    document.querySelector(".card4.sub").innerText = 'dispensing';

    placeBtn.style.backgroundColor = "white";
    productBtn.style.backgroundColor = "white";
    priceBtn.style.backgroundColor = "white";
    packagingBtn.style.backgroundColor = "black";
    propositionBtn.style.backgroundColor = "white";
    promotionBtn.style.backgroundColor = "white";

    placeBtn.style.color ="black";
    productBtn.style.color ="black";
    priceBtn.style.color ="black";
    packagingBtn.style.color ="white";
    propositionBtn.style.color ="black";
    promotionBtn.style.color ="black";

    document.querySelector(".card1.cardtitle").style.fontSize = "1.89vw";
    document.querySelector(".card2.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card3.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card4.cardtitle").style.fontSize = "1.96vw";
    
    for(var i in bars) {
        bars[i].style.backgroundColor = "#FF79A5";
        wwws[i].innerText = 'what';
        ps[i].innerText = 'Packaging';
        mini[i].innerHTML = '<img id="mini" src="../public/image/icon_4.png" alt=""></img>';

    }
});

propositionBtn.addEventListener("click", () => {
    document.querySelector(".card1.cardtitle").innerHTML = 'How to link your product to the seasons, e.g. winter.';
    document.querySelector(".card2.cardtitle").innerHTML = 'How to find new consumptions moments during the day or night?';
    document.querySelector(".card3.cardtitle").innerHTML = 'How to visualize the senses in your product (feel, hear, see smell, taste)?';
    document.querySelector(".card4.cardtitle").innerHTML = 'How to make the 11st commandment: "Thou shalt eat this product at least 5 times each week".';

    document.querySelector(".card1.sub").innerHTML = 'new &nbsp moments';
    document.querySelector(".card2.sub").innerHTML = 'new &nbsp moments';
    document.querySelector(".card3.sub").innerText = 'emotions';
    document.querySelector(".card4.sub").innerText = 'claims';

    placeBtn.style.backgroundColor = "white";
    productBtn.style.backgroundColor = "white";
    priceBtn.style.backgroundColor = "white";
    packagingBtn.style.backgroundColor = "white";
    propositionBtn.style.backgroundColor = "black";
    promotionBtn.style.backgroundColor = "white";

    placeBtn.style.color ="black";
    productBtn.style.color ="black";
    priceBtn.style.color ="black";
    packagingBtn.style.color ="black";
    propositionBtn.style.color ="white";
    promotionBtn.style.color ="black";

    document.querySelector(".card1.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card2.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card3.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card4.cardtitle").style.fontSize = "1.67vw";
    
    for(var i in bars) {
        bars[i].style.backgroundColor = "#37BF3D";
        wwws[i].innerText = 'how';
        ps[i].innerText = 'Proposition';
        mini[i].innerHTML = '<img id="mini" src="../public/image/icon_5.png" alt=""></img>';

    }
});

promotionBtn.addEventListener("click", () => {
    document.querySelector(".card1.cardtitle").innerHTML = 'How can your product re-vitalize another product?';
    document.querySelector(".card2.cardtitle").innerHTML = 'How to sell your products in layers (like for soup layers of crutons, herbs, water, vegetables)?';
    document.querySelector(".card3.cardtitle").innerHTML = 'How to turn your products into a bar, like chocolate bar, that you can break off pieces?';
    document.querySelector(".card4.cardtitle").innerHTML = 'How do decompose your product in each individual part and recompose it into a totally new product?';

    document.querySelector(".card1.sub").innerText = 'promotion';
    document.querySelector(".card2.sub").innerText = 'education';
    document.querySelector(".card3.sub").innerText = 'contest';
    document.querySelector(".card4.sub").innerText = 'communication';

    placeBtn.style.backgroundColor = "white";
    productBtn.style.backgroundColor = "white";
    priceBtn.style.backgroundColor = "white";
    packagingBtn.style.backgroundColor = "white";
    propositionBtn.style.backgroundColor = "white";
    promotionBtn.style.backgroundColor = "black";

    placeBtn.style.color ="black";
    productBtn.style.color ="black";
    priceBtn.style.color ="black";
    packagingBtn.style.color ="black";
    propositionBtn.style.color ="black";
    promotionBtn.style.color ="white";

    document.querySelector(".card1.cardtitle").style.fontSize = "1.96vw";
    document.querySelector(".card2.cardtitle").style.fontSize = "1.75vw";
    document.querySelector(".card3.cardtitle").style.fontSize = "1.89vw";
    document.querySelector(".card4.cardtitle").style.fontSize = "1.54vw";

    for(var i in bars) {
        bars[i].style.backgroundColor = "#1898E3";
        wwws[i].innerText = 'how';
        ps[i].innerText = 'Promotion';
        mini[i].innerHTML = '<img id="mini" src="../public/image/icon_6.png" alt=""></img>';

    }
});