export const Weatherday =({min,max,weathertype,weatherkey,dateweather,dt}) => {
    return(
    <div>
       

<div>{dt}</div>
<div>
<h2>{dateweather}</h2>
 <img 
    alt={weathertype}
    src={`http://openweathermap.org/img/wn/${weatherkey}@2x.png`}/>  
</div>

<div>{weathertype}</div>

<div>Min: {min} Max: {max}</div>
</div>
    );
  };
