const pets = [{
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'Fish',
        age: 1
    }
]

const eMenorQueCinco = (numero) => {
        return numero < 5
    }
    /*
    const newPets = pets.filter(({ age }) => eMenorQueCinco(age))
    console.log(pets)
    console.log(newPets)
    */
    /*
    /* MAP*/
    /*
    const mapPetNames = pets.map((pet) => {
        return pet.name
    })

    console.log(mapPetNames)

    /* FOREACH */
    /*
    const forEachPetNames = []

    pets.forEach((pet) => {
        forEachPetNames.push(pet.name)
    })

    console.log(forEachPetNames)
    */

/* REDUCE */
/*
const totalAge = pets.reduce((total, pet) => {

    if (pet.type !== 'dog') return total

    return {
        totalAge: total.totalAge + pet.age,
        totalName: total.totalName + pet.name
    }
}, { totalAge: 0, totalName: "" })

console.log(totalAge)
*/
/*
const dogs = pets.filter((pet) => {
    return pet.type === 'dog'
})
console.log(dogs)

const totalAgeDogs = dogs.reduce((total, pet) => {
    return total + pet.age
}, 0)
console.log(totalAgeDogs)
*/

const totalAgeDogs2 = pets
    .filter((pet) => { return pet.type === 'dog' })
    .reduce((total, pet) => { return total + pet.age }, 0)
console.log(totalAgeDogs2)