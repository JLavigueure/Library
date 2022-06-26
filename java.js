const books = [];
let flag;

function Book(title, author, pages, read, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.description = description;
    this.info = function() {
        let hasRead;
        this.read == true ? hasRead = "read" : hasRead = "not read yet";
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${hasRead}`);
    }
}

function addToBooks() {
    let bookInfo = [];
    bookInfo[0] = document.getElementById("title").value;
    bookInfo[1] = document.getElementById("author").value;
    bookInfo[2] = document.getElementById("pages").value;
    bookInfo[3] = document.getElementById("read").checked;
    bookInfo[4] = document.getElementById("description").value;
    for(let i = 0; i < 2; i++) {
        if(bookInfo[i] == '') {
            flag = true;
            document.getElementById("title").classList.add("requiredField");
            document.getElementById("author").classList.add("requiredField");
            return;
        }
    }
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

    document.getElementById("title").classList.remove("requiredField");
    document.getElementById("author").classList.remove("requiredField");
}
document.getElementById('close-modal').addEventListener("click", function() {
    closeModal();
})

function displayBooks() {
    for(let i = 0; i > books.length; i++) {

    }
}

