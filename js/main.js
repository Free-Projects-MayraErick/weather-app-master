
const APIKEY = '7fe9d7ced8194f6aaf0619a754b0f7e1';
const weatherAPI = async () => {
    try{
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mérida&appid=${APIKEY}`);
        console.log(respuesta); 
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
    console.log(tempLocale.toFixed(2));
}

function getTemperature(data){

    const tempLocale = data.main.temp - 273.15;
    return tempLocale;
}


weatherAPI();