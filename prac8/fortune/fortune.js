"use strict";


function click2() {

    let unnsei = ["大吉", "中吉", "末吉", "吉", "凶"];
    let unnsei_jpg = ["大吉.webp", "中吉.webp", "末吉.webp", "吉.webp", "凶.webp"];
    let fortune = Math.floor(Math.random() * unnsei.length);

    let user_name = document.getElementById("name").value;
    const addHtml = `<img src = "img/${unnsei_jpg[fortune]}">`;

    createElement.textContent = user_name + "さんの今日の運勢は" + unnsei[fortune];
    link.innerHTML = addHtml;
}
