"use strict"

let station = window.prompt(`目的の駅を入力してください。
1:A駅
2:B駅
3:c駅`);

if (station === "1") {
    window.alert("快速列車が停まります。");
} else if (station === "2") {
    window.alert("快速列車と急行列車が停まります。");
} else if (station === "3") {
    window.alert("特急列車が停まります。");
} else {

}
