function formatDate(dateObject) {
    const parts = {
        date: dateObject.getMonth(),
        month: dateObject.getDate() + 1,
        year: dateObject.getFullYear(),
        hour: (dateObject.getHours() % 12) || 12,
    };

    return `${parts.month}/${parts.date}/${parts.year} 
    {parts.hour}`
}

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
const currentDay = new Date();
const myDateFormatted = formatDate(currentDay);