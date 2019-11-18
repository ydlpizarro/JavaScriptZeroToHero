const month = Number(prompt("Enter month number : "));
let days = 0;
switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = '28 in a common year or 29 in leap year';
        break;
    default:
        days = `Don\'t exist month ${month}`; 
        break;
}
console.log(`Number of days : ${days}`);