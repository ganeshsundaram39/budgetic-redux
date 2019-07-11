const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getCurrentMonthYear = () =>
  monthNames[new Date().getMonth()] + ' ' + new Date().getFullYear();

export default getCurrentMonthYear;
