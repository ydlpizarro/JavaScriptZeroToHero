var data = prompt("Enter Day :").toLowerCase();
var output = '';
switch (data) {
    case "monday":
        output = 'Tuesday';
        break;
    case "tuesday":
        output = 'Wednesday';
        break;
    case "wednesday":
        output = 'Thursday';
        break;
    case "thursday":
        output = 'Friday';
        break;
    case "friday":
        output = 'Saturday';
        break;
    case "saturday":
        output = 'Sunday';
        break;
    case "sunday":
        output = 'Monday';
        break;
    default:
        output = 'Don\'t recognize day';    
}
console.log(`Following day : ${output}`);
