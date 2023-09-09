const txt = document.getElementById("fname");
const btn = document.getElementById("btn");
const vlue = document.getElementById("demo");

function toCelsius(f){
    return (5 / 9) * (f - 32);
}

function display(){
    let value = toCelsius(txt.value);

    if (Number.isInteger){
        return vlue.innerHTML = value;
    }
    else{
        return vlue.innerHTML = "Enter a numeric value";
    }
}

btn.addEventListener("click", display);