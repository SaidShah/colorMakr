const randomColorValue = () => {
    return Math.floor(Math.random() * 205) + 50;
}

const randomCircleValue = () => {
    return Math.floor(Math.random() * (50 - 25)) + 25;
}

const totalCircles = () => {
    let randomColor = randomColorValue();
    let circleValue = randomCircleValue();
    let totalCircles = randomColor % circleValue
    let dividedValue = parseInt(randomColor/circleValue)
    console.log('====================================');
    console.log(" circle color => ", circleValue," actual color => ",randomColor," clicks needed => " ,
                 dividedValue," starting color => ",totalCircles);
    console.log('====================================');
}

totalCircles()