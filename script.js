const myLibrary = [];

function Book(title,author,pages,read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author,pages,read) {
    // take params, create a book then store it in the array
    const book = new Book(title,author,pages,read);
    console.log(book);
    myLibrary.push(book);
    return 'Book Added To Library';
}

function displayBooks(){
    if(myLibrary.length === 0) return;
    // use the book object to create a book and put it onto the page.
    const library = document.querySelector('.library');
    // Call the clearBooks fn to clear the books off the page.
    clearBooks(library);
    myLibrary.forEach(book => {
        // Call the renderBook fn to create the html book passing it details.
        const currentBook = renderBook(book.title,book.author,book.pages,book.read,book.id,library);
        // Append to the page
        library.appendChild(currentBook);
    });
    return 'Books Displayed';
}

function clearBooks(library){
    library.innerHTML = "";
    return 'Cleared Books';
}

function renderBook(t,a,p,r,id,l){
    // Create the elements for the book
    const bookCon = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');
    const del = document.createElement('button');
    // Classes
    bookCon.classList.add(`${id}`,'bookCon');
    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    read.classList.add('read');
    del.classList.add('delete');
    // Content
    title.textContent = `Title: ${t}`;
    author.textContent = `Author: ${a}`;
    pages.textContent = `Pages: ${p}`;
    read.textContent = `Read: ${r}`;
    del.textContent = 'Delete';
    // Functionality
    del.addEventListener('click',(e)=>{
        e.preventDefault();
        // get index
        const index = myLibrary.findIndex(i => i.id === id);
        console.log(index);
        // splice the entry
        myLibrary.splice(index,1);
        // Clear and redisplay
        clearBooks(l);
        displayBooks();
        return 'Book deleted and updated';
    });
    // append everything in proper order
    bookCon.appendChild(title);
    bookCon.appendChild(author);
    bookCon.appendChild(pages);
    bookCon.appendChild(read);
    bookCon.appendChild(del);

    return bookCon;
}

console.log(myLibrary);