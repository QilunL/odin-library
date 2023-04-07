/* eslint-disable prefer-const */
const myLibrary = [];
const submitBook = document.getElementById('submit-book');
const newBookButton = document.getElementById('new-book-button');
const newBookForm = document.getElementById('new-book-form');
const checkReadButton = document.getElementById('read');
let bookCount = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read === 1) {
    this.read = 1;
  } else {
    this.read = 0;
  }
}

function makeCard(book) {
  const bookContainer = document.getElementById('book-container');
  const bookDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pagesDiv = document.createElement('div');
  const readDiv = document.createElement('div');
  const readButton = document.createElement('button');
  const unreadButton = document.createElement('button');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove Book';
  readButton.textContent = 'Read';
  unreadButton.textContent = 'Unread';

  bookDiv.setAttribute('data', `count : ${bookCount}`);
  bookCount += 1;

  bookDiv.classList.add('book');
  titleDiv.classList.add('title');
  authorDiv.classList.add('author');
  pagesDiv.classList.add('pages');
  readButton.classList.add('read-button');
  unreadButton.classList.add('unread-button');
  removeButton.classList.add('remove-button');

  readButton.addEventListener('click', () => {
    readButton.parentElement.read = 1;
    readDiv.textContent = 'Status: Read';
  });
  unreadButton.addEventListener('click', () => {
    unreadButton.parentElement.read = 0;
    readDiv.textContent = 'Status: Unread';
  });
  removeButton.addEventListener('click', () => {
    removeButton.parentElement.remove();
  });

  titleDiv.textContent = book.title;
  authorDiv.textContent = book.author;
  pagesDiv.textContent = book.pages;
  if (book.read == 1) {
    readDiv.textContent = 'Status: Read';
  } else {
    readDiv.textContent = 'Status: Unread';
  }
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);
  bookDiv.appendChild(readDiv);
  bookDiv.appendChild(readButton);
  bookDiv.appendChild(unreadButton);
  bookDiv.appendChild(removeButton);
  bookContainer.appendChild(bookDiv);
}

function populateLibrary() {
  let lastBook = myLibrary.length - 1;
  makeCard(myLibrary[lastBook]);
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

newBookButton.addEventListener('click', () => {
  newBookForm.style.display = 'flex';
});

function handleForm(event) {
  event.preventDefault();
  let title = this.title.value;
  let author = this.author.value;
  let pages = this.pages.value;
  let read;
  if (checkReadButton.checked) {
    read = 1;
  } else {
    read = 0;
  }
  let book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  populateLibrary();
  newBookForm.reset();
}

// submitBook.addEventListener('submit', handleForm);
