const books = [
    book1 = {
        id: 1,
        title: "Brisingr",
        author: "Christopher Paolini",
        startPage: 561,
        endPage: 768,
        startDate: new Date(2022, 01, 01),
        endDate: new Date(2022, 01, 07)
    },
    book2 = {
        id: 2,
        title: "The Earthsea Quartet",
        author: "Ursula K Le Guin",
        startPage: 104,
        endPage: 704,
        startDate: new Date(2022, 01, 08),
        endDate: new Date(2022, 01, 14)
    },
    book3 = {
        id: 3,
        title: "Wakenhyrst",
        author: "Michelle Paver",
        startPage: 1,
        endPage: 368,
        startDate: new Date(2022, 01, 15),
        endDate: new Date(2022, 01, 21)
    }
]

function setCurrentBook() {
    let currentDate = new Date();
let currentBook = null;

for (let index = 0; index < books.length; index++) {
    if (books[index].endDate >= currentDate && books[index].startDate <= currentDate) {
        currentBook = books[index];
        printBook(currentBook);
    } else if (currentDate < books[0].startDate) {
        document.getElementById("info").innerHTML = "The Challenge hasn't started yet!";
    } else {
        document.getElementById("info").innerHTML = "The Challenge is over!";
    }
}
}

function printBook(book) {
    document.getElementById("info").innerHTML = book.title + "\n by \n" + book.author;
}

setCurrentBook();


