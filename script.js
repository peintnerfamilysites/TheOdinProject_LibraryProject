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
        const currentBook = renderBook(book.title,book.author,book.pages,book.read,book.id);
        // Append to the page
        library.appendChild(currentBook);
    });
    return 'Books Displayed';
}

function clearBooks(library){
    library.innerHTML = "";
    return 'Cleared Books';
}

function renderBook(title,author,pages,read,id){
    // Create the elements for the book
    const bookCon = document.createElement('div');
    
}

console.log(myLibrary);