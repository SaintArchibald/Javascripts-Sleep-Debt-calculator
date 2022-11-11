function getSleepHours(day) {
  day = day.toLowerCase()
if (day === 'monday') {
    return 21
} else if (day === 'tuesday') {
    return 6
} else if (day === 'wednesday') {
    return 6
} else if (day === 'thursday') {
    return 6
} else if (day === 'friday') {
    return 6
} else if (day === 'saturday') {
    return 6
} else if (day === 'sunday') {
    return 6
} else {
    return 'Please list a day in the week: Monday - Sunday'
}
    
}

console.log(getSleepHours('Monday'))

const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +
    getSleepHours('thursday') + getSleepHours('friday') +
    getSleepHours('saturday') + getSleepHours('sunday')


console.log(getActualSleepHours())

const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
}

console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log( `The user got the perfect amount of sleep`)
    } else if (actualSleepHours > idealSleepHours) {
        console.log( `The user got ${actualSleepHours - idealSleepHours}hrs of extra sleep.`)
    } else {
        console.log( `The user slept for ${idealSleepHours - actualSleepHours} less hours this week. Go catch some sleep!`)
    }
}

console.log(calculateSleepDebt(1))