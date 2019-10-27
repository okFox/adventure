const matrix = {
    id: 'matrix',
    title: 'Hack The Matrix',
    location: 'heights',
    map: {
        top: '10%',
        left: '10%'
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
        hp: -100,
        nuyen: 0
    }]
};

const hostage = {
    id: 'hostage',
    title: 'Extract the Hostage',
    location: 'slums',
    map: {
        top: '55%',
        left: '20%'
    },
    image: 'slums.jpg',
    audio: '',
    action: '',
    description: `
        A notorius orc gang has kidnapped the daughter of a prominent police captain. He tried to clean up the slums and they didn't like it one bit.  You could use someone like him to owe you a favor.  Plus this gang just pisses you off.
    `,
    choices: [{
        id: 'pay',
        description: 'Easiest way is to just pay the ransom, deliver the kid.  Favors are worth more than money',
        result: `
            They take your money and dump your body in the river. You should have known better than to trust an orc. You're dead.
        `,
        hp: -100,
        nuyen: +0
    }, {
        id: 'war',
        description: 'A few well placed rumors and you can start quite the gang war.  You know just the trolls to rile up.  ',
        result: `
            Well that escalated quickly.  You barely got out of there with the kid before the building came down on everyone in the fight.  You just hope no one saw you anywhere near that mess.  You gain 50 NuYen and lose 10 HP.
        `,
        hp: -10,
        nuyen: +50
    }, {
        id: 'shoot',
        description: "Take 'em out one by one.  They never saw you coming",
        result: `
            You got a lot of orc blood on your hands now.  But the stash you grabbed on the way out was worth it.  You lose 40 HP and gain 100 Nuyen.
        `,
        hp: -30,
        nuyen: +100
    }]

};

const steal = {
    id: 'steal',
    title: 'Corporate Espionage',
    location: 'towers',
    map: {
        top: '15%',
        left: '70%'
    },
    image: 'towers.png',
    audio: '',
    action: '',
    description: `
        Mr. Johnson has another high paying run.  One shady corp wants to mess with another shady corp.  Same old story.  You can't tell them apart.  But you can count money.  Just waltz in and steal a datapad. Piece of cake.
    `,
    choices: [{
        id: 'guns',
        description: 'Go in guns blazing.  Corp security has guns, you have bigger ones.',
        result: `
            The guns weren't the problem.  The mage was.  One energy ball to the face and you are toast.  You Die. 
        `,
        hp: -100,
        nuyen: 0
    }, {
        id: 'stealth',
        description: 'The stealthy approach is always best.  No one expects the janitor of anything...right?',
        result: `
            You manage to sneak in a loading dock and obtain a maintenance uniform.  A little handy work in the electrical room and they call you right up.  Good thing you set a trigger on the fire alarm.  A little distraction was all you needed.
        `,
        hp: 0,
        nuyen: +100
    }, {
        id: 'magic',
        description: 'Your mage buddy owes you a big favor. Her bag of tricks is as big as they come ',
        result: `
        With her help you get the data with only a scratch.  But you have to split the earnings
        `,
        hp: -10,
        nuyen: +35
    }]
};

const runsList = [matrix, hostage, steal];
export default runsList;