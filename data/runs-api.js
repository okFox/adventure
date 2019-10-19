const runsList = [{
    id: 'matrix',
    title: 'Hack The Matrix',
    location: 'heights',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'heights.png',
    audio: '',
    action: '',
    description: `
        A fellow runner tells you she knows of a corrupt businessman keeping a list of runners to eliminate.  You break into his mansion in The Heights in the middle of the night.  You see the data port just begging you to jack into the matrix...
    `,
    choices: [{
        id: 'fight',
        description: 'Enter the Matrix and fight his AI security measures to steal the data',
        result: `
            Getting in is easy.  But he has top of the line IP guarding against data theft.  A couple of dataspikes and some quick thinking and the data is yours.  Those things were tough though.  Lose 25 HP and gain 50 NuYen. 
        `,
        hp: -25,
        nuyen: 35
    }, {
        id: 'fake',
        description: 'Use a script to replace the real data with fake data.  No one will ever know you were there',
        result: `
            You have a reputation for being the invisible decker, time to earn it.  Your script runs flawlessly and you replace the real file with a fake one.  Security measures aren't triggered at all.  Your friends thank you for some extra time to disappear.
        `,
        hp: 0,
        nuyen: 10
    }, {
        id: 'charm',
        description: 'Wake him up and try to charm him.  You have some good names to add to his list, for the right price',
        result: `
            You didn't know this, but you were top of his list.  The biggest rigger you've ever seen turns his drones on you mows you in half on the living room carpet. You're dead.
        `,
        hp: -50,
        nuyen: 0
    }]
}];

export default runsList;