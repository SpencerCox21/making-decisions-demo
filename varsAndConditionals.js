/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let jonSnowAttack = 35;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has better attack than Jamie")
} else if (jamieLannisterAttack > jonSnowAttack){
    console.log("Jamie has better attack than Jon")
} else {
    console.log('The fighters are evenly matched.')
}
