// 1 meter = 3.281 feet 
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound 


const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const lengthP = document.getElementById('length-p')
const massP = document.getElementById('mass-p')
const volumeP = document.getElementById('volume-p')

convertBtn.addEventListener("click", function () {
    const number = Number(inputEl.value)
    lengthConversion(number)
    volumeConversion(number)
    massConversion(number)
})
function lengthConversion(num) {
    const meterToFeet = num * 3.281
    const feetToMeter = (1 / 3.281) * num
    lengthP.textContent = ` ${num} meters = ${meterToFeet.toFixed(3)} feet |
                            ${num} feet = ${feetToMeter.toFixed(3)} meter `
}
function volumeConversion(num) {
    const litrerToGallon = num * 0.264
    const gallonToLiter = (1 / 0.264) * num
    volumeP.textContent = ` ${num} liters = ${litrerToGallon.toFixed(3)} gallons | 
                          ${num} gallons = ${gallonToLiter.toFixed(3)} liters `
}
function massConversion(num) {
    const kgToPounds = num * 2.204
    const poundToKg = (1 / 2.204) * num
    massP.textContent = ` ${num} kilos = ${kgToPounds.toFixed(3)} pounds |
                          ${num} pounds = ${poundToKg.toFixed(3)} kilos`
}

