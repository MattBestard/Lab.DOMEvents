function Mdown(event) {
    console.log('mousedown', event);
}

function Mup (event) {
    console.log('mouseup', event);
}

function Mmove(event) {
    console.log('mousemove', event);
}

document.addEventListener('mousedown', Mdown);
document.addEventListener('mousemove', Mmove);
document.addEventListener('mouseup', Mup);
