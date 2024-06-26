/*
 * Write a function that will take a date and compare with today date and return text:
 * - Today: same year, same month, same date
 * - Yesterday: date = today - 1
 * - This week: today - 7 < date < today - 1
 * - Last week: today - 14 < date <= today - 7
 * - This month: same year, same month, date <= today - 14
 * - Last month: month = current month - 1
 * - This year: same year
 * - last year: year = current year - 1
 * - Long time ago: everything else
 *
 * Lastly, please write a unit test for calculateRelativeDate function
 * */

const calculateRelativeDate = (inputDate) => {
  const today = new Date();
  const date = new Date(inputDate);

  const diff = today - date;
  const diffDays = diff / (1000 * 60 * 60 * 24);
  const diffMonths =
    today.getMonth() -
    date.getMonth() +
    12 * (today.getFullYear() - date.getFullYear());
  const diffYears = today.getFullYear() - date.getFullYear();

  if (diffDays < 1) {
    return "Today";
  }

  if (diffDays >= 1 && diffDays < 2) {
    return "Yesterday";
  }

  if (diffDays > 1 && diffDays <= 7) {
    return "This week";
  }

  if (diffDays > 7 && diffDays <= 14) {
    return "Last week";
  }

  if (diffDays > 14 && diffMonths === 0) {
    return "This month";
  }

  if (diffMonths === 1) {
    return "Last month";
  }

  if (diffYears === 0) {
    return "This year";
  }

  if (diffYears === 1) {
    return "Last year";
  }

  return "Long time ago";
};

const View = {
  init: () => {
    document
      .getElementById("relative-date-btn")
      .addEventListener("click", () => {
        const msgElement = document.getElementById("relative-date-msg");
        const inputDateElem = document.getElementById("relative-date-input");
        msgElement.textContent = calculateRelativeDate(inputDateElem.value);
      });
  },
};

document.addEventListener("DOMContentLoaded", View.init);

export { calculateRelativeDate };
