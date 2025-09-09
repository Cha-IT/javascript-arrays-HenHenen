// Oppgave 1

let primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67];
function primtall2() {
    console.log(primtall)
}
primtall2()

primtall.push(2, 3, 5, 29, 71, 73, 79, 83, 89, 97)

primtall2()

// Oppgave 5

let heltall = [1]
let oppTil = prompt('Skriv et tall')
oppTil = oppTil++

for (i = 2; i <= oppTil; i++) {
    heltall.push(i)
    
}

let trekkFra = Math.floor(Math.random() * oppTil)

console.log(heltall)
console.log('Vi trekker fra ', trekkFra)

for (i = trekkFra; i > 0; i--){
    heltall.pop()
}

console.log('Nå er arrayen ', heltall)

let trukketFra = []
for (i = oppTil + 1 - trekkFra; i <=oppTil; i++){
    trukketFra.push(i)
}

console.log('Tallene som ble trukket ut var ', trukketFra)