import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({Info}){

const INIT_Img="https://images.unsplash.com/photo-1746962321201-2bb6239e2a9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Hot_Img="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
const Cold_Img="https://media.istockphoto.com/id/1040375916/photo/teenage-girl-blowing-nose-on-winter-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=6dQy41KF9LXDAB6JaMm4YaVNlQ8GF4rVOguK_RYc3Mg="
const Rainy_Img="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="


/*let Info={
    City:"Mumbai",
    FeelsLike:26.4,
    Humidity:91,
    Temp:25.43,
    TempMax:25.43,
    TempMin:25.43,
    Weather:"light rain"
}
*/
    return(
        <div className="InfoBox">
      <div className='Container'>       
      <Card sx={{ maxWidth: 345 }}>      
      <CardMedia
        sx={{ height: 140 }}
        image={
          Info.Humidity >80?
          Rainy_Img:Info.Temp>=35?
          Hot_Img:Cold_Img
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.City}
          {
            Info.Humidity > 80? <ThunderstormIcon />: Info.Temp >= 35? <SunnyIcon />: <AcUnitIcon />
          }

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p> Temperature={Info.Temp}&deg;C</p>
          <p> Humidity={Info.Humidity}</p>
          <p>Min Temperature={Info.TempMin}&deg;C</p>
          <p>Max Temperature={Info.TempMax}&deg;C</p>
          <p>The weather can be described <i>{Info.Weather}</i>feels like={Info.FeelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div> 
        </div>
    )
}