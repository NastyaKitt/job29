let popupForm = document.getElementById('popupForm');
let clsForm = document.getElementById('clsForm');
let callForms = document.querySelectorAll('.callForm');

callForms.forEach(function(callForm) {
    callForm.addEventListener('click', function() {
        popupForm.classList.add('show');
    });
});

clsForm.addEventListener('click', function() {
    popupForm.classList.remove('show');
});


// 
let popupPolit = document.getElementById('popupPolit');
let clsPolit = document.getElementById('clsPolit');
let callPolit = document.getElementById('callPolit');


callPolit.addEventListener('click', function() {
    popupPolit.classList.add('show');
});
clsPolit.addEventListener('click', function() {
    popupPolit.classList.remove('show');
});


// 

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, // .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    // Изменяем здесь, если это нужно
    var input = document.querySelector("#tel");
    
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});