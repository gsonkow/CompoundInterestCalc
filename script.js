const principalBox = document.querySelector("#principal")
const interestBox = document.querySelector("#interest")
const timesCompoundedBox = document.querySelector("#timesCompounded")
const yearsBox = document.querySelector("#years")
const earnedSpan = document.querySelector("#earnedCash")
const totalSpan = document.querySelector("#totalCash")
const yearSpan = document.querySelector("#yearPastValue")
const timeSlider = document.querySelector("#timePast")

function calcInterest() {
  const principal = principalBox.value
  const interest = interestBox.value / 100
  const timesCompounded = timesCompoundedBox.value
  const years = yearsBox.value
  const timePast = document.getElementById("timePast").value
  const timePastPercentage = timePast / 100
  const totalCash = principal * ((1 + interest / timesCompounded) ** ((years * (timePastPercentage)) * timesCompounded))
  const earnedCash = totalCash - principal

  yearSpan.textContent = timePast + "%"
  totalSpan.textContent = "$" + totalCash.toFixed(2)
  earnedSpan.textContent = "$" + earnedCash.toFixed(2)
}

principalBox.addEventListener('input', calcInterest)
interestBox.addEventListener('input', calcInterest)
timesCompoundedBox.addEventListener('input', calcInterest)
yearsBox.addEventListener('input', calcInterest)
timeSlider.addEventListener('input', calcInterest)