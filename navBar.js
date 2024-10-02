// fetches html and assigns it to a div element that can call it
fetch('navBar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#add_navBar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})