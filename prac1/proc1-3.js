"use strict"


let answer = Math.floor(Math.random() * 101);
let number = parseInt(window.prompt("数当てゲーム！数字を入力してください。"));

while (number !== answer) {
    
    if (number > answer) {
        window.prompt("もう少し小さい数字です");
    } else {
        window.prompt("もう少し大きい数字です");
    }
} window.alert("当たり！");
