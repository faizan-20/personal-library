const subBtn = document.getElementById('submitBtn');
const readBox = document.getElementById('read');
let bname = document.getElementById('book');
let authname = document.getElementById('authname');
let pages = document.getElementById('pageno');

let myLibrary = [
    {
        bookName: 'War And Peace',
        author: 'Leo Tolstoy',
        pages: '1290',
        status: false
    }
];

function Book(bookName, author, pages, status){
    this.bookName = bookName;
    this.author = author;
    this.pages = pages; 
    this.status = status;
}

function addToLibrary(bookName, author, pages, status){
    let book = new Book(bookName, author, pages, status);
    myLibrary.push(book);
    displayBooks();
}


function displayBooks(){
    const table = document.querySelector('#tbody');
    table.textContent = '';
    
    for(let i = 0; i < myLibrary.length; i++){
        let index = i;
        let trow = document.createElement('tr');
        trow.classList.add('trow');
        table.appendChild(trow);
    
        let sno = document.createElement('td');
        trow.appendChild(sno);
        sno.classList.add('sno');
        sno.textContent = i+1;
            
        let bName = document.createElement('td');
        trow.appendChild(bName);
        bName.classList.add('bName');
        bName.textContent = myLibrary[i].bookName;
            
        let authName = document.createElement('td');
        trow.appendChild(authName);
        authName.classList.add('authName');
        authName.textContent = myLibrary[i].author;
            
        let pages = document.createElement('td');
        trow.appendChild(pages);
        pages.classList.add('pages');
        pages.textContent = myLibrary[i].pages;
            
        let status = document.createElement('td');
        trow.appendChild(status);
        status.classList.add('status');
        const createReadBtn = document.createElement('button');
        status.appendChild(createReadBtn);
        createReadBtn.classList.add('readBtn');
        createReadBtn.setAttribute('data-index', i);

        if(myLibrary[i].status){
            createReadBtn.textContent = 'Read';
        }else{
            createReadBtn.textContent = 'Not Read';
        }

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.setAttribute('data-index', i);
        deleteButton.textContent = 'delete';
        status.appendChild(deleteButton);
    }
    deleteBooks();
    readStatus();
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

    if(readBox.checked){
        addToLibrary(bookKaNaam, authKaNaam, pagesNumber, true);
    }else{
        addToLibrary(bookKaNaam, authKaNaam, pagesNumber, false);
    }
    
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
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    doSomething();
})

function deleteBooks(){
    const delBtn = document.querySelectorAll('.deleteButton');
    delBtn.forEach((button) => {
        button.addEventListener('click', () => {
            let index = button.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayBooks();
        })
    })
}

function readStatus(){
    const readBtn = document.querySelectorAll('.readBtn');
    readBtn.forEach((button) => {
        button.addEventListener('click', () => {
            let index = button.getAttribute('data-index');
            if(myLibrary[index].status){
                myLibrary[index].status = false;
            }else{
                myLibrary[index].status = true;
            }
            displayBooks();
        })
    })
}

displayBooks();