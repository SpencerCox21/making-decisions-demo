/*
    In this file, we'll be starting a new story about 
    Doug the pokemon trainer.
*/

let backpack = ["pokeball", "pokeball", 'potion', 'revive', 'running shoes']

let pokemon = []

backpack.push('oreos')
backpack.push('oreos')

console.log('After buying oreos our backpack looks like this.')
console.log(backpack)

// Oak gives you a pokedex, and a pikachu

backpack.push('Pokedex')
pokemon.push('pikachu')

console.log('After meeting professor oak our backpack and team looks like')
console.log(backpack)
console.log(pokemon)

// enter route 1

for (let i = 0; i < 4; i++) {
    pokemon.push('pidgey')
}

console.log('After finding 4 pidgeys')
console.log(pokemon)

backpack.splice(4,3)

console.log('after we ate our oreos, we lost our shoes')
console.log(backpack)



let newPokemon = 'Charizard'
// crit capture

pokemon.push(newPokemon);

console.log('Our team now looks like this.')
console.log(pokemon)


//someone asked to see pikachu
console.log('here is my pikachu!')
let cutestPokemon = pokemon[0]
console.log(cutestPokemon);


// a scientist asked to clone your pidgeys in exchange for an item

let giftPidgeys = pokemon.slice(1,5)
console.log('here are your cloned pidgeys.')
console.log(giftPidgeys)

//making sure your team is still the same
console.log(pokemon)

backpack.unshift('Big Statue')
console.log('backpack after the scientists gift')
console.log(backpack)


//your backpack is to big and heavy, you deside to get rid of it

backpack.shift()
console.log('You got rid of the Big Statue.')
console.log(backpack)

//encountered a wild butterfree and used 1 pokeball
//you need to get rid of a party member.

let butterfreeEncounter = 'Butterfree'
backpack.shift()
let releasedPokemon = pokemon.splice(3, 1, butterfreeEncounter)

console.log('backpack after catching a butterfree')
console.log(backpack)
console.log('here is my team')
console.log(pokemon)
console.log('here are the released pokemon')
console.log(releasedPokemon)


//you found a stone called a "pidgey stone"
//causes all pidgeys to evolve into pidgeotto
//loop through pokemon, if pidgey then change it to a pidgeotto

for (i = 0; i < pokemon.length; i++){
    let currentPokemon = pokemon[i]
    if (currentPokemon === 'pidgey'){
        pokemon[i] = 'Pidgeotto'
    }
}

console.log('my pidgeys have all evolved and now my team is this')
console.log(pokemon)






