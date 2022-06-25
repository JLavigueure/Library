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