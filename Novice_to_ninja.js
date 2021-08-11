// // array destructuring
// // taking values out of an array and presenting them as indiviual values
// const [username, age] = ["bashir@dawud", 12];
// const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']
// console.log(avengers[avengers.length -1])
// avengers.length = 8
// avengers[7] = "bashir";
// avengers[6] = "taiwo";
// console.log(avengers[7])
// console.log(avengers)
// avengers.pop();
// console.log(avengers)
// avengers.push("bashir")
// console.log(avengers)
// avengers.unshift("start");
// console.log(avengers)
// avengers.shift();
// console.log(avengers);
// const newAvenger = avengers.concat(["abu", "tosho"])
// console.log(newAvenger);
// // spread operator
// const updatedAvenger = [...newAvenger, ...["Abdul"]]
// console.log(updatedAvenger)

// // Join() method
// console.log(newAvenger.join(','))
// // slice is not destructive
// console.log(newAvenger.slice(2, 4));
// // splice is destrcutive
// console.log(newAvenger.splice(3, 1, "bashir"));
// console.log(newAvenger)
// console.log([7,4,2,2,4,1].sort(function(a, b){
//     return b-a
// }))
// console.log(newAvenger.indexOf('Thor'));

// let isAdmin = true;

// (isAdmin)? "/admin" : "/user"

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
 ];

let score = 0;

// for(const [question, answer] of quiz) {
//     const response = prompt(question);
//     if(response === answer ) {
//         localStorage.setItem(question, answer);
//         score++;
//     }else {
//         window.alert(`Wrong, answer is ${answer}`)
//     }
// }
// window.alert(`Game over, you scored ${score} point${score !== 1? 's' : ''}`)
