function Updatetime() {
    const now = new Date();
    const timestring = now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: true
    });
    document.getElementById("CurrentTime").innerText = `${timestring}`;
}
Updatetime();
setInterval(Updatetime, 1000);

navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
        const leve = Math.round(battery.level * 100);
        const charging = battery.charging ? "charging" : "🔋";
        document.getElementById("batterystatus").innerText = ` ${leve}% ${charging}`;
    }
    updateBatteryStatus();
    battery.addEventListener('levelchange', updateBatteryStatus);
    battery.addEventListener('chargingchange', updateBatteryStatus);
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getDay() {
    const now = new Date();
    const day = days[now.getDay()];
    document.getElementById("getday").innerText = `${day}`;
}
getDay();

function tempconverter() {
    const temp = parseFloat(document.getElementById("degree").value);
    const unit = document.getElementById("type").value;
    const result = document.getElementById("result");

    if (isNaN(temp)) {
        result.value = "!!Please enter valid number!!";
        return;
    }

    let celsius, fahrenheit, kelvin;
    let output="";
    if (unit == "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
        output = `Fahrenheit: ${fahrenheit.toFixed(2)} °F 
                  Kelvin: ${kelvin.toFixed(2)} K`;
    }
    else if (unit == "fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
        output = `Celsius: ${celsius.toFixed(2)} °C 
                  Kelvin: ${kelvin.toFixed(2)} K`;
    }
    else if (unit === "kelvin") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        output = `Celsius: ${celsius.toFixed(2)} °C 
                  Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    }
    result.value = output;
    // result.style.marginLeft = "2rem";
    // result.style.display = "block";
}

function resetvalue() {
    document.getElementById("degree").value="";
    document.getElementById("type").value="fahrenheit";
    document.getElementById("result").value="";
}