let hours = Number(prompt("Enter the hours: "));
let minutes = Number(prompt("Enter the minutes: "));
let seconds = Number(prompt("Enter the seconds: "));

if(seconds == 59){
    if(minutes == 59){
        hours++;
        minutes = 0;
        seconds = 0;
    }else{
        minutes++;
        seconds = 0;
    }
}else{
    seconds++;
}
console.log(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds`);