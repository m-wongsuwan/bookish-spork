let count = 0;
const oneRepBtn = document.getElementById("button")
const tenRepBtn = document.getElementById("button10")
const hundredRepBtn = document.getElementById("button100")
const thousandRepBtn = document.getElementById("button1000")
const checkBtn = document.getElementById("buttonCheck")
const moreInfoMouseOvr = document.getElementsByClassName("moreInfo")

oneRepBtn.addEventListener("click", function () {
    count++
    document.getElementById("clickCount").innerText = `${count} reps`;
    let calCount = Math.floor(count/10000);
    if (calCount < 1) {
        document.getElementById("calorieCount").innerText = "Keep clicking to burn your first calorie."
    } else if (Math.floor(count/1000) === 1) {
        document.getElementById("calorieCount").innerText = "You have burned one calorie.";
    } else {
        document.getElementById("calorieCount").innerText = `You have burned ${calCount} calories.`
    }
})

tenRepBtn.addEventListener("click", function () {
    count += 10
    document.getElementById("clickCount").innerText = `${count} reps`;
    let calCount = Math.floor(count/10000);
    if (calCount < 1) {
        document.getElementById("calorieCount").innerText = "Keep clicking to burn your first calorie."
    } else if (Math.floor(count/10000) === 1) {
        document.getElementById("calorieCount").innerText = "You have burned one calorie.";
    } else {
        document.getElementById("calorieCount").innerText = `You have burned ${calCount} calories.`
    }
})

hundredRepBtn.addEventListener("click", function () {
    count += 100
    document.getElementById("clickCount").innerText = `${count} reps`;
    let calCount = Math.floor(count/10000);
    if (calCount < 1) {
        document.getElementById("calorieCount").innerText = "Keep clicking to burn your first calorie."
    } else if (Math.floor(count/10000) === 1) {
        document.getElementById("calorieCount").innerText = "You have burned one calorie.";
    } else {
        document.getElementById("calorieCount").innerText = `You have burned ${calCount} calories.`
    }
})

thousandRepBtn.addEventListener("click", function () {
    count += 1000
    document.getElementById("clickCount").innerText = `${count} reps`;
    let calCount = Math.floor(count/10000);
    if (calCount < 1) {
        document.getElementById("calorieCount").innerText = "Keep clicking to burn your first calorie."
    } else if (Math.floor(count/10000) === 1) {
        document.getElementById("calorieCount").innerText = "You have burned one calorie.";
    } else {
        document.getElementById("calorieCount").innerText = `You have burned ${calCount} calories.`
    }
})

const textTest = document.getElementById("inTextTest")
const activityArray = ["Swimming", "Rock Climbing", "Yoga"]
let arrayCount = -1;
textTest.addEventListener("click", function ( ) {
    if (arrayCount < activityArray.length-1) {
        arrayCount += 1
        document.getElementById("inTextTest").innerText = `${activityArray[arrayCount]}`
    } else {
        arrayCount = 0
        document.getElementById("inTextTest").innerText = `${activityArray[arrayCount]}`
    }
})

const marathonBtn = document.getElementById("marathonBtn")

marathonBtn.addEventListener("click", function () {
    for (let i = 0; i <27; i++) {
        console.log(i)
    }
})
