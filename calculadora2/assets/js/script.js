let string = "";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button) =>{
    button.addEventListener("click",(e)=>{
        // muestra resultado al hacer click
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("textarea").innerText = string;
        }
        // limpia pantalla
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("textarea").innerText = string;
        }
        // elimina el ultimo elemento con el metodo slice
        else if(e.target.innerHTML == "←"){
            string = string.slice(0,-1)
            document.querySelector("textarea").innerText = string;
        }
        else{
            string = string + e.target.innerText;
            document.querySelector("textarea").innerText = string;
        }
    })
})


//  titulos multiples

let titleText = ["Calculadora", "by", "s3codecL"];
let counter = 0;

setInterval(function () {
    document.title = titleText[counter % titleText.length];
    counter++;
}, 1300);