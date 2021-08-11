// const s = "hello"
// console.log(s.toUpperCase())
// console.log(typeof s)
// const s1 = new String('Hello');
// console.log(typeof s1)

// console.log(window.navigator.appVersion)
// Object literal
const Book1 = {
    title : "Book one",
    author : "Jone Doe",
    year: 2013,
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    }
}

const Book2 = {
    title : "Book two",
    author : "Jane Doe",
    year: 2017,
    ISBN: null,
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    }
}
Book2.prototype.ISBN = '2020'

console.log(Object.keys(Book2))