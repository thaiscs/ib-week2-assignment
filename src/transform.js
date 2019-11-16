
module.exports.groupAdultsByAgeRange = (people) => {


    const ageRange = {
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []
    }

    const adults = people.filter((person) => {
        return person.age >= 18
    })

    const groups = adults.reduce((ageRange, person) => {

        //    console.log('acc:', ageRange, 'curV:', person) 


        if (person.age <= 20) {
            ageRange['20 and younger'].push(person)
            return ageRange

        }

        if (person.age >= 21 && person.age <= 30) {
            ageRange['21-30'].push(person)
            return ageRange

        }


        if (person.age >= 31 && person.age <= 40) {
            ageRange['31-40'].push(person)
            return ageRange

        }

        if (person.age >= 41 && person.age <= 50) {
            ageRange['41-50'].push(person)
            return ageRange

        }

        if (person.age >= 51) {
            ageRange['51 and older'].push(person)
            return ageRange

        }



    }, ageRange)

    Object.keys(groups).forEach(function (item) {

        if (groups[item].length === 0) {
            delete groups[item]
        }

    })

    return groups

}


// MY TESTS:

// console.log(module.exports)

// console.log(groupAdultsByAgeRange([{name: "Anna", age: 20}, {name: "Hank", age: 40}, {name: "Hank", age: 51}, {name: "John", age: 10}]))
