function randomMsg(){
    var answers = ['yes','no','maybe','why not?','are you sure?']
    return answers[Math.floor(Math.random() * answers.length)];
}

console.log(randomMsg());