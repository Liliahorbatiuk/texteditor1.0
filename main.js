'use strict'
//Кнопки
let editBtn = document.querySelector('#edit-btn');
let styleBtn = document.querySelector('#style-btn');
let saveBtn = document.querySelector('#save')
let addBtn = document.querySelector('#add')
let textBtn = document.querySelector('#textBtn')
let backBtn = document.querySelector('#backBtn')

let textarea = document.querySelector('#editTA')

//Редагування
editBtn.onclick = function () {
    textarea.value = document.querySelector('.box-p').innerHTML
    document.querySelector('.box-textarea').style.display = 'block'
    document.querySelector('.box-style').style.display = 'none'

}

saveBtn.onclick = function () {
    document.querySelector('.box-p').innerHTML = textarea.value
    document.querySelector('.box-textarea').style.display = 'none'
}

//Стилі
styleBtn.onclick = function () {
    document.querySelector('.box-style').style.display = 'block'
    document.querySelector('.box-textarea').style.display = 'none'
}

// Font Size
function fontSize(){
    console.log(event.target.value);
    document.querySelector('.box-p').style.fontSize = event.target.value;
}

 // Font Family
document.querySelector('select').addEventListener('change', function(){
    document.querySelector('.box-p').style.fontFamily = event.target.value
})


// Font Style
document.querySelector('#t1').addEventListener('click', function () {
    if (document.querySelector('#t1').checked) {
        document.querySelector('.box-p').style.fontWeight = 'bold'
    }
    else {
        document.querySelector('.box-p').style.fontWeight = 'normal'
    }
});

document.querySelector('#t2').addEventListener('click', function () {
    if (document.querySelector('#t2').checked) {
        document.querySelector('.box-p').style.fontStyle = 'italic'
    }
    else {
        document.querySelector('.box-p').style.fontStyle = 'normal'
    }
});

// Зміна кольору тексту 
document.querySelector('.containerColors').addEventListener('click', function (event) {
    event.target.classList.contains('color');
    document.querySelector('.box-p').style.color = event.target.style.backgroundColor
    console.log(event.target);
    console.log(event.target.classList.contains('color'));
});

document.querySelector('.containerBackgrounds').addEventListener('click', function (event) {
    event.target.classList.contains('background');
    document.querySelector('.box-p').style.backgroundColor = event.target.style.backgroundColor
});
textBtn.onclick = function () {
    document.querySelector('.containerColors').style.display = 'flex'
    document.querySelector('.containerBackgrounds').style.display = 'none'
}

// Зміна кольору фону 
function backColor() {
    let backgrounds = this.style.backgroundColor;
    document.querySelector('.box-p').style.backgroundColor = `${backgrounds}`
    document.querySelector('.containerBackgrounds').style.display = 'none'
}
backBtn.onclick = function () {
    document.querySelector('.containerBackgrounds').style.display = 'flex'
    document.querySelector('.containerColors').style.display = 'none'
}

// Кнопка add для вибору table і list
addBtn.onclick = function () {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.create').style.display = 'block'
}

// Вибір таблиці
document.forms['title'].addEventListener('click', function () {
    if (document.querySelector('#table').checked) {
        document.querySelector('.formTable').style.display = 'block'
        document.querySelector('.wrapList').style.display = 'none'
    }
})

let createTable = document.querySelector('#tableBtn');
createTable.onclick = function () {
    document.querySelector('.create').style.display = 'none';
    document.querySelector('.container').style.display = 'block'
    document.querySelector('.box-textarea').style.display = 'block'
    tblCreate()
}

//Створення таблиці
// debugger
function tblCreate() {
    let tr = document.querySelector('#tr-inp');
    let td = document.querySelector('#td-inp')

    let tbl = document.createElement('table');
    for (let i = 0; i < tr.value; i++) {
        let tagTr = document.createElement('tr');
        for (let a = 0; a < td.value; a++) {
            let tagTd = document.createElement('td');
            tagTd.textContent = 'TD';
            tagTd.style.width = document.querySelector('#widthTR').value + 'px';
            tagTd.style.height = document.querySelector('#widthTD').value + 'px';
            tagTd.style.borderWidth = document.querySelector('#widthBrd').value + 'px';
            tagTd.style.borderStyle = `${document.querySelector('#typeBorder').value}`;
            tagTd.style.borderColor = `${document.querySelector('#colBorder').value}`;
            tagTr.appendChild(tagTd);
        }
        tbl.appendChild(tagTr);
    }
    textarea.value += tbl.outerHTML;
    // Чистка полів 

    // tr.value = '';
    // td.value = '';
    // document.querySelector('#widthTR').value = '';
    // document.querySelector('#widthTD').value = '';
    // document.querySelector('#widthBrd').value = '';
}

// Вибір списку
document.forms['title'].addEventListener('click', function () {
    if (document.querySelector('#list').checked) {
        document.querySelector('.formTable').style.display = 'none';
        document.querySelector('.wrapList').style.display = 'block';
    }
})

// Створення маркованого списку
let listBtn = document.querySelector('#listBtn');
listBtn.onclick = function () {
    document.querySelector('.create').style.display = 'none';
    document.querySelector('.container').style.display = 'block'
    document.querySelector('.box-textarea').style.display = 'block'
    createList()
}

function createList() {
    let list = document.querySelector('#countLI');
    let marks = document.querySelector('#marks')
    let li = document.createElement('ol')
    for (var i = 1; i <= list.value; i++) {
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(`item ${i}`));
        li.appendChild(listItem);
        listItem.style.listStyleType = `${marks.value}`;
    }
    textarea.value += li.innerHTML;

}