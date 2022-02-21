function displayToday() {
  return new Date();
}

function isWeekend(date) {

 return date.getDay() === 0 || date.getDay() === 6

}

function displayMonthName(date) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
  "October", "November", "December"]

  let currentMonth = date.getMonth()

  return months[currentMonth]
}