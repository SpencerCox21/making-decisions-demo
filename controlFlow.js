let guessMe = 54

while (guessMe < 100) {
    
    console.log('------------------------')

    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        guessMe += 25

        console.log("if was taken")
        console.log(`guessMe is now ${guessMe}`)
        console.log("------------------------")
    } else if (guessMe % 3 == 0) {
        guessMe -= 27

        console.log("else if was taken")
        console.log(`guessMe is now ${guessMe}`)
        console.log("------------------------")
    } else {
        guessMe += 3

        console.log("else was taken")
        console.log(`guessMe is now ${guessMe}`)
        console.log("------------------------")
    }
    guessMe += 22
}


console.log(guessMe)
