const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
];

const newList = list.map((invite) => {
    const inviteArea = {
        name: invite.name,
        vip: invite.vip,
        sector: invite.vip === true ? "Black" : "Green"
    }

    return inviteArea
})

console.log(newList)


const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2},
    { name: 'Julio', testGrade: 10 },
];

const resultStudents = students.map((note) => {
    const test = {
        name: note.name,
        finalResult: note.testGrade >= 7 ? "approved" : "disapproved"
    }
    return test
})

console.log(resultStudents)

// Outra forma de resolver usando if / else

const resultStudents2 = students.map((note2) => {

    let approvedOrNot

    if(note2.testGrade >= 7) {
        approvedOrNot = "approved"
    } else { approvedOrNot = "disapproved"
    }

    const test2 = {
        name: note2.name,
        finalResult: approvedOrNot
    }
    return test2
})

console.log(resultStudents2)