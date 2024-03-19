"use strict"

let number = parseInt(window.prompt("数当てゲーム！数字を入力してください。"));
let answer = Math.floor(Math.random() * (100 + 1));

while (number !== answer) {
    if (number >= answer) {
        window.prompt("残念！もっと大きい数字です。");
        continue;
    } else {
        window.prompt("残念！もっと小さい数字です。");
    }
} window.alert("あたり！");