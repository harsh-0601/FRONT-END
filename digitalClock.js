let indianDate = () => {
    let options= {timeZone:"Asia/Kolkata"};
    let currentDate=new Date().toLocaleDateString("en-US",options);
    let currentTime=new Date().toLocaleTimeString("en-US",options);
    document.querySelector("#indian-time").innerText=currentTime;
    document.querySelector("#indian-date").innerText=currentDate;
};
setInterval(indianDate,1000);

let chinaDate = () => {
    let options= {timeZone:"Asia/Shanghai"};
    let currentDate=new Date().toLocaleDateString("en-US",options);
    let currentTime=new Date().toLocaleTimeString("en-US",options);
    document.querySelector("#china-time").innerText=currentTime;
    document.querySelector("#china-date").innerText=currentDate;
};
setInterval(chinaDate,1000);

let usaDate = () => {
    let options= {timeZone:"America/New_York"};
    let currentDate=new Date().toLocaleDateString("en-US",options);
    let currentTime=new Date().toLocaleTimeString("en-US",options);
    document.querySelector("#usa-time").innerText=currentTime;
    document.querySelector("#usa-date").innerText=currentDate;
};
setInterval(usaDate,1000);