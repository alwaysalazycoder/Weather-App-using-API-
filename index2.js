let weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
let months = ["Jan" , "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

const currDate = document.getElementById('date');

const getCurrentTime = () =>{
    
    let now = new Date();
    let date = now.getDate();
    let day = weekday[now.getDay()];
    let month = months[now.getMonth()];
    let hours = now.getHours();
    let min = now.getMinutes();
    let periods = "AM";
    
    if(hours > 11){
        periods = "PM";
        if(hours > 12){
            hours = hours - 12;
        }
        if(hours < 10){
            hours = "0"+hours;
        }
        
    }
    
    if(min < 10){
        mins = "0" + mins;
    }
    
    let dateformat =month +" " + date;
    let timeformat = hours +":"+min+""+periods;


    console.log(`Month is : ${month} || Date is : ${date} ||  Month is : ${month} || Day is : ${day} || Time : ${hours}:${min}${periods} || Date Format is : ${dateformat}  || Time format : ${timeformat}`);
    
    return `${day} | ${dateformat} | ${timeformat}`
    
}

currDate.innerHTML = getCurrentTime();
const tempStatus = "clouds";