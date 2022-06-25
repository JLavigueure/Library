function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let hasRead;
        this.read == true ? hasRead = "read" : hasRead = "not read yet";
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${hasRead}`);
    }
}

document.getElementById('add').addEventListener("click", function() {
    document.getElementById("modal").classList.add("active");
    document.getElementById("overlay").classList.add("active");
});

function closeModal () {
    document.getElementById("modal").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

document.getElementById('close-modal').addEventListener("click", function() {
    closeModal();
})