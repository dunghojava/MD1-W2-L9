let c = document.getElementById('cheap');
let g = document.getElementById('good');
let f = document.getElementById('fast');
function good() {
    if (g.checked && f.checked) {
        c.checked = false
    }
}

function fast() {
    if (f.checked && c.checked) {
        g.checked = false
    }
}

function cheap() {
    if (c.checked && g.checked) {
        f.checked = false
    }
}