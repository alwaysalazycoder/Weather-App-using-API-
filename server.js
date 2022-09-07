const fs = require('fs');
const http = require('http');
const request = require('requests');

const homefile = fs.readFileSync("home111.html","utf-8");

let replaceVal = (tempVal , orgVal) =>{
    // let newval = orgVal.main.temp;
    // newval = ktoc(newval);
    // let max = ktoc(orgVal.main.temp_max);
    // let min = ktoc(orgVal.main.temp_min);
    
    let temperature = tempVal.replace("{%tempval%}" , orgVal.main.temp);
    // temperature = temperature.replace("{%tempval%}" , );
    temperature = temperature.replace("{%tempmin%}" , orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}" , orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}" , orgVal.name);
    temperature = temperature.replace("{%country%}" , orgVal.sys.country);

    // let pehlatemp = document.getElementById("temp");
    // let maxtemp = document.getElementById("tempmax");
    // let mintemp = document.getElementById("tempmin");
    // maxtemp.innerHTML = max;
    // mintemp.innerHTML = min;
    // pehlatemp.innerHTML = newval;
    
    
    
    // console.log(newval);    
    // console.log(max);    
    // console.log(min);   
    // console.log(newval);
    // console.log(temperature);

    return temperature;
}

function ktoc(tempink){
    let temp = tempink - 273;
    let temporary = temp.toString().split(".");
    temp = temporary[0];
    let tempinc = temp;
    return tempinc
}

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        request("https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&units=metric&appid=0ec2a015681950250c8abaa6b5adc34d")
        .on("data" , (chunk) =>{

            const objData = JSON.parse(chunk);
            const arrData = [objData];

            console.log(objData);
            console.log(arrData);
            console.log(arrData[0].main.temp);
            // let arrval = ((arrData[0].main.temp) - 273);
            // arrval = arrval.toString().split(".");
            // let val = arrval[0];
            // console.log(val);
            // const realTimeData = replaceVal(homefile,val);
            // console.log(val);

            const realTimeData = arrData.map((val) => replaceVal(homefile,val)).join("");
            res.write(realTimeData);
            res.end();
            // console.log("Data is here");
            console.log(realTimeData);


        }).on("end",(err) =>{
            if(err) return console.log("Connection closed due to error");
            console.log("end");
            res.end();
        });
    }
});

server.listen(4500,"127.0.0.1" ,()=>{
    console.log("Server is listening to local host 4500");
})
