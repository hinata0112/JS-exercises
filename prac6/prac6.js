`use sprict`

function btnClick() {
    let wordValue = document.getElementById(`word`).value;
    let result = document.getElementById(`result`);
    result.textContent = wordValue;
}

function btnClick1() {
    btnClick();
    result.style.cssText = null;
}

function btnClick2() {
    btnClick();
    result.style.cssText = "color: red; font-size: 40px; font-family: 'Noto Sans JP', sans-serif;";
}

function btnClick3() {
    btnClick();
    result.style.cssText = "color: green; font-size: 20px; font-family: serif";
}

function btnClick4() {
    btnClick();
    result.style.cssText = "color: blue; font-size: 30px";
}


function btnClick5() {
    btnClick();
    result.style.cssText = "color: aqua; font-size: 40px";
}