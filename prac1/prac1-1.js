"use strict"

let height = window.prompt("身長を記入してください。");

if (height !== "") {
    if (height.match(/^[0-9]+$/)) {
        if (height >= 100) {
            let ticket = window.confirm("プレミアムチケットを持っていますか？");
            if (ticket === true) {
                window.alert("プレミアムシートに乗車可能です");
            } else {
                window.alert("通常のシートに乗車可能です。");
            }
        } else if (height >= 90) {
            window.alert("付き添いありで乗車可能です。");
        } else {
            window.alert("乗車できません。");
        }
    } else window.alert("半角数字で入力してください");
} else window.alert("入力がないと判定できません。");





