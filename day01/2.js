let name='ls'
let age=18
let gender='女'

let user={
    name,
    age,
    gender,
    eat(food){
        console.log(name+'吃了'+food)
    }
}
console.log(user.eat)