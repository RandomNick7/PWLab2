function extendStrips(){
    strip = document.getElementsByClassName("ticker-body");
    // For both strips, copy their contents until reaching their width
    Array.from(strip).forEach(elem => {
        let instanceWidth = Array.from(elem.children).reduce(
            (total, i) => total + i.offsetWidth, 0
        )

        let repeatCount = Math.ceil(elem.offsetWidth / instanceWidth)
        let repeatText = elem.innerHTML;
        elem.innerHTML = repeatText.repeat(repeatCount);
    })
}


window.onload = extendStrips;
window.onresize = extendStrips;