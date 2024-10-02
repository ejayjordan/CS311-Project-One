// fetches html and assigns it to a div element that can call it
fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#add_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})