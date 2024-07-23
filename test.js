console.log("Hello world!");

document.querySelector("#btn").onclick = function() {
    let output = document.querySelector("#output");
    output.innerHTML = "Hello, my name is Victoriia!";
    output.style.color = "red";
    output.style.fontSize = 36 + 'px';
}

document.querySelector("#btn_1").onclick = function() {
    let date = document.querySelector("#date");
    date.innerHTML = "Сейчас" + " " + new Date();
}