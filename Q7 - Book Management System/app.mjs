import books from './book.mjs'

const bookSummaries = books.map(book => book.getSummary());

console.log(bookSummaries);
