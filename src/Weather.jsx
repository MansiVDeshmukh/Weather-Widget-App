import SearchBox from "./searchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react"
export default function Weather(){
const [weatherInfo,setWeatherInfo]=useState({
    City:"Mumbai",
    FeelsLike:26.4,
    Humidity:91,
    Temp:25.43,
    TempMax:25.43,
    TempMin:25.43,
    Weather:"light rain"
})

let updateResult=(newInfo)=>{
    setWeatherInfo(newInfo)
}
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateResult={updateResult}></SearchBox>
            <InfoBox Info={weatherInfo}></InfoBox>
        </div>
    )
}