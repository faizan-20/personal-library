const subBtn = document.getElementById('submitBtn');
let bname = document.getElementById('book');
let authname = document.getElementById('authname');
let pages = document.getElementById('pageno');

let myLibrary = [

];

function addError(){
    if(bname === ''){
        bname.classList.add('error');
    }
    if(authname === ''){
        authname.classList.add('error');
    }if(pages === ''){
        authname.classList.add('error');
    }
}

function Book(bookName, author, pages){
    this.bookName = bookName;
    this.author = author;
    this.pages = pages; 
}

function addToLibrary(bookName, author, pages){
    myLibrary.push(new Book(bookName, author, pages));
    displayBooks(myLibrary[myLibrary.length-1], myLibrary.length);
}


function displayBooks(listElement, i){
    const table = document.querySelector('#table');
    
    //for(const key in myLibrary){
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
    //}
}
const form = document.getElementById('form');
form.style.visibility = 'hidden';

const addb = document.querySelector('.addb');
addb.addEventListener('click', () => {

    if (form.style.visibility === 'hidden') {
        // 👇️ this SHOWS the form
        form.style.visibility = 'visible';
    } else {
        // 👇️ this HIDES the form
        form.style.visibility = 'hidden';
    }
})

subBtn.addEventListener('click', () => {
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
    
})