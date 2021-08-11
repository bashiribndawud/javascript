// Object of protos
const bookProtos ={ 
    getSummary: function (){
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    },
    getAge: function() {
        const year1 = new Date().getFullYear() - this.year;
        return `${this.name} is ${year1} old`
    }
}

const book1 = Object.create(bookProtos, {
    title: {value: "Book one"}
});

console.log(book1)