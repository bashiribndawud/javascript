class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // function to  class
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge() {
        const year1 = new Date().getFullYear() - this.year;
        return `${this.name} is ${year1} old`
    }

}

const book1 = new Book('book one', 'John Doe', 2019);
console.log(book1);

