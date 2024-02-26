
const APIKEY = '7fe9d7ced8194f6aaf0619a754b0f7e1';
const weatherAPI = async () => {
    try{
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mérida&appid=${APIKEY}`);
        //console.log(respuesta); 
        const data = await respuesta.json(); //Esto permite recuperar la información devuelta por el json
        console.log(data);
        showRelevantData(data);
    }catch(error){
        console.log(error);
    }

  }

function showRelevantData(data){
    const tempLocale = getTemperature(data);
    document.getElementById("principal-temperature").innerHTML = tempLocale.toFixed(2);
    //console.log(tempLocale.toFixed(2));

    const tempLocaleMin = getTemperatureMin(data);
    document.getElementById("temperature-min").innerHTML = tempLocaleMin.toFixed(2);
    //console.log(tempLocaleMin.toFixed(2));

    const tempLocaleMax = getTemperatureMax(data);
    document.getElementById("temperature-max").innerHTML = tempLocaleMax.toFixed(2);
    //console.log(tempLocaleMax.toFixed(2));

    const location = getLocation(data);
    document.getElementById("location").innerHTML = location;

    const fecha = getDate(data); 
    document.getElementById("date-main").innerHTML = fecha;
}

function getTemperature(data){

    const tempLocale = data.main.temp - 273.15;
    return tempLocale;
}

function getTemperatureMin(data){

    const tempLocaleMin = data.main.temp_min - 273.15;
    return tempLocaleMin;
}

function getTemperatureMax(data){

    const tempLocaleMax = data.main.temp_max - 273.15;
    return tempLocaleMax;
}

function getLocation(data){
    const location = data.name;
    return location;
}

function getDate(data){
    const milliseconds = data.dt * 1000; 
    let date = new Date(milliseconds);
    var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    var dayName = days[date.getDay()];
    return dayName;
}

weatherAPI();