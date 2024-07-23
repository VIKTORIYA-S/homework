console.log("Hello world!");

document.querySelector("#btn").onclick = function() {
    let output = document.querySelector("#output");
    let name = "Виктория!"
    output.innerHTML = "Привет," + " " + name ;
    output.style.color = "red";
    output.style.fontSize = 30 + 'px';
}

document.querySelector("#btn_1").onclick = function() {
    let date = document.querySelector("#date");
    date.innerHTML = "Сейчас" + " " + new Date();
    date.style.color = "red";
    date.style.fontSize = 30 + 'px';
}