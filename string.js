const currentValue = document.getElementById("currentValue"),
      toValue      = document.getElementById("toValue"),
      convert      = document.getElementById("convert"),
      copy         = document.getElementById("copy"),
      text         = document.getElementById("text");

convert.onclick = () =>{
    let textValu = text.value;
    let t = textValu.match(currentValue.textContent);
    let f = textValu.replace(t , toValue.textContent);

    text.value = f;
}

copy.onclick = () =>{
    if(navigator.clipboard.writeText(text.value)){
        copy.lastElementChild.setAttribute("class", "copyed")
        copy.lastElementChild.removeAttribute("no")
    }
}
