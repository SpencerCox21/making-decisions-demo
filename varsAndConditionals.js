/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has better attack than Jamie")
} else if (jamieLannisterAttack > jonSnowAttack){
    console.log("Jamie has better attack than Jon")
} else {
    console.log('The fighters are evenly matched.')
}


let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has done died.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow has taken damage, Jon's health is now ${jonSnowHealth} hp.`)
}


jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow has done died.')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow has taken damage, Jon's health is now ${jonSnowHealth} hp.`)
}



let isDead = false

for (let i = 1; i < 3; i++) {
    isDead = Math.random() > .5
    if (isDead === true) {
        console.log(`Jon has died after ${i} rounds`)
        break
    }
}

if (isDead === false) {
    console.log('It is a miracle that Jon has survived.')

    while (jonSnowHealth > 0){
        console.log('Jamie punches Jon')
        jonSnowHealth -= 5;
    }

    console.log(`Jamie killed Jon after punching him a bunch`)
}



