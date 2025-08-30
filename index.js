let pointsEl = document.getElementById("points")
let guestPoints = document.getElementById("guest-points")
let count = 0
let guestCount = 0


function plusone() {
    count += 1
    pointsEl.textContent = count
}

function plustwo() {
    count += 2
    pointsEl.textContent = count
}

function plusthree() {
    count += 3
    pointsEl.textContent = count
}

function plusOne() {
    guestCount += 1
    guestPoints.textContent = guestCount
}

function plusTwo() {
    guestCount += 2
    guestPoints.textContent = guestCount
}

function plusThree() {
    guestCount += 3
    guestPoints.textContent = guestCount
}