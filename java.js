const books = [];
let flag;

class Book {
    constructor(title, author, pages, read, description) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.description = description;
        }
        info() {
            let hasRead;
            this.read == true ? hasRead = "read" : hasRead = "not read yet";
            return(`${this.title} by ${this.author}, ${this.pages} pages, ${hasRead}`);
    }
}

// function Book(title, author, pages, read, description) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.description = description;
//     this.info = function() {
//         let hasRead;
//         this.read == true ? hasRead = "read" : hasRead = "not read yet";
//         return(`${this.title} by ${this.author}, ${this.pages} pages, ${hasRead}`);
//     }
// }
function addToBooks() {
    let bookInfo = [];
    bookInfo[0] = document.getElementById("title").value;
    bookInfo[1] = document.getElementById("author").value;
    bookInfo[2] = document.getElementById("pages").value;
    bookInfo[3] = document.getElementById("read").checked;
    bookInfo[4] = document.getElementById("description").value;
    // verifies atleast name and author entered
    for(let i = 0; i < 2; i++) {
        if(bookInfo[i] == '') {
            flag = true;
            document.getElementById("title").classList.add("requiredField");
            document.getElementById("author").classList.add("requiredField");
            return;
        }
    }
    // checks description is less than 300 characters
    if (bookInfo[4].length > 300) {
        flag = true;
        document.getElementById('description').classList.add("requiredField");
        return;
    }
    // pushes input to books array
    books.push(new Book(bookInfo[0], bookInfo[1], bookInfo[2], bookInfo[3], bookInfo[4]));
}

// submit button
document.getElementById("submit").addEventListener("click", function() {
    flag = false;
    addToBooks();
    if(flag == true) {
        return;
    }
    closeModal();
    addCard();
    readOrNot();
    deleteCard();
})

// open modal
document.getElementById('add').addEventListener("click", function() {
    document.getElementById("modal").classList.add("active");
    document.getElementById("overlay").classList.add("active");
});
// close modal
function closeModal () {
    document.getElementById("modal").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
    document.getElementById("description").value = "";

    document.getElementById("title").classList.remove("requiredField");
    document.getElementById("author").classList.remove("requiredField");
    document.getElementById("description").classList.remove("requiredField");
}
document.getElementById('close-modal').addEventListener("click", function() {
    closeModal();
})

// makeDiv shortcut
function makeDiv(className) {
    let div = document.createElement('div');
    div.classList.add(className);
    return div;
}
//add book to page
function addCard() {
    let bookNumber = (books.length - 1);
    let newBookCard = books[books.length - 1];
    // create card
    let card = makeDiv('card');

    //create header
    let cardHeader = makeDiv('card-header');
    card.appendChild(cardHeader);
    let headerLeft = makeDiv('header-left');
    let headerRight = makeDiv('header-right');
    cardHeader.append(headerLeft, headerRight);
    let h1 = document.createElement('h1');
        // add title
    h1.textContent = newBookCard.title;
    let by = makeDiv('by');
    headerLeft.append(h1, by);
    let byP = document.createElement('p');
    byP.innerHTML = 'by';
    let author = document.createElement('h2');
        // add author
    author.textContent = newBookCard.author;
    by.append(byP, author);
    let pages = document.createElement('p');
        // add pages
    if(!(newBookCard.pages == '')) {
        pages.textContent = `${newBookCard.pages} pages`;
    }
    headerRight.append(pages);

    // create description
    let descriptionBox = makeDiv('card-description');
    card.append(descriptionBox);
    let descriptionP = document.createElement('p');
    descriptionP.innerHTML = "Description";
    let descriptionText = makeDiv('NA');
        // add description
    descriptionText.textContent = newBookCard.description;
    descriptionBox.append(descriptionP, descriptionText);

    // create buttons
    let cardRead = document.createElement('button');
    cardRead.setAttribute('id', `cardRead${bookNumber}`);
    cardRead.classList.add('bookRead');
    if(newBookCard.read == false) {
        cardRead.classList.add('bookNotRead');
        cardRead.textContent = 'Not Read';
    }
    else {
        cardRead.textContent = 'Read';
    }
    let deleteCard = document.createElement('button');
    deleteCard.setAttribute('id', `deleteCard${bookNumber}`);
    deleteCard.classList.add('deleteCard');
    deleteCard.innerHTML = "Delete";
    card.append(cardRead, deleteCard);

    // append card to cards html
    document.getElementById('cards').appendChild(card);
}

function readOrNot() {
    readButtons = document.querySelectorAll(".bookRead");
    k = readButtons.length - 1;
    readButtons[k].addEventListener('click', function() {
        if(event.srcElement.innerHTML == "Not Read") {
            event.srcElement.classList.remove("bookNotRead");
            event.srcElement.innerHTML = "Read"
        }
        else {
            event.srcElement.classList.add("bookNotRead");
            event.srcElement.innerHTML = "Not Read";
        }
    })
}

function deleteCard() {
    let deleteButtons = document.querySelectorAll(".deleteCard");
    let cards = document.querySelectorAll(".card");
    k = deleteButtons.length - 1;
    deleteButtons[k].addEventListener('click', function() {
        while (cards[k].firstChild) {
            cards[k].removeChild(cards[k].firstChild);
        }
        cards[k].remove(cards[k]);
    })
}