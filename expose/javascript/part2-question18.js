function printCurrentTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printCurrentTime, 1000);

/**
 * let d = new Date();
 * let time = d.toLocaleTimeString();
 * console.log(time);
 * 
 * The above program only prints out the time once when executed. 
 * Modify this code such that the program prints out the current time every second. 
 */