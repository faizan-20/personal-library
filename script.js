const subBtn = document.getElementById('submitBtn');
const readBox = document.getElementById('read');
let bname = document.getElementById('book');
let authname = document.getElementById('authname');
let pages = document.getElementById('pageno');

let myLibrary = [

];

function Book(bookName, author, pages){
    this.bookName = bookName;
    this.author = author;
    this.pages = pages; 
}

Book.prototype.data = myLibrary.length;

function addToLibrary(bookName, author, pages){
    myLibrary.push(new Book(bookName, author, pages));
    displayBooks(myLibrary[myLibrary.length-1], myLibrary.length);
}

function readStatus(){
    
    if(readBox.checked){
        return 'Read';
    }else{
        return 'Not Read';
    }
}


function displayBooks(listElement, i){
    const table = document.querySelector('#table');
    
    const trow = document.createElement('tr');
    trow.classList.add('trow');

    table.appendChild(trow);
        
    const sno = document.createElement('td');
    trow.appendChild(sno);
    sno.classList.add('sno');
    sno.textContent = i;

    const bName = document.createElement('td');
    trow.appendChild(bName);
    bName.classList.add('bName');
    bName.textContent = listElement.bookName;

    const authName = document.createElement('td');
    trow.appendChild(authName);
    authName.classList.add('authName');
    authName.textContent = listElement.author;

    const pages = document.createElement('td');
    trow.appendChild(pages);
    pages.classList.add('pages');
    pages.textContent = listElement.pages;

    const status = document.createElement('td');
    trow.appendChild(status);
    status.classList.add('status');
    const createReadBtn = document.createElement('button');
    status.appendChild(createReadBtn);
    createReadBtn.classList.add('readBtn');
    createReadBtn.textContent = readStatus();
}
const form = document.getElementById('form');
form.style.visibility = 'hidden';

const addb = document.querySelector('.addb');
addb.addEventListener('click', () => {
    
    if (form.style.visibility === 'hidden') {
        // 👇️ this SHOWS the form
        form.style.visibility = 'visible';
        addb.textContent = '- Cancel';
    } else {
        // 👇️ this HIDES the form
        form.style.visibility = 'hidden';
        addb.textContent = "+ Add Books"
    }

})


function doSomething(){
    let bookKaNaam = bname.value;
    let authKaNaam = authname.value;
    let pagesNumber = pages.value;
    addToLibrary(bookKaNaam, authKaNaam, pagesNumber);
    
    bname.value = "";
    authname.value = "";
    pages.value = "";
    
    if (form.style.visibility === 'hidden') {
        // 👇️ this SHOWS the form
        form.style.visibility = 'visible';
    } else {
        // 👇️ this HIDES the form
        form.style.visibility = 'hidden';
    }

    addb.textContent = "+ Add Books"

    const readBtn = document.querySelectorAll('.readBtn');
    console.log(readBtn);
    readBtn.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.textContent !== 'Read'){
                console.log("yipee"); 
            }else {
                console.log("yipee"); 
            }
        })
    })
}
