fetch('header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#add_header");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

let mql = window.matchMedia("id='header' (max-width:100%)");
document.querySelector(".mql-value").innerText = mql.matches;