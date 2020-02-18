const returnFirstTwoDrivers = function (array) {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = function (array) {
    return [array[array.length - 2], array[array.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function (num2) {
        return num1 * num2
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, functionName){
    return functionName(array)
}