import React from 'react';
import Day from './data';
import './style.css';


class Weekdata extends React.Component {
  state = {
    fullData: [],
    Monday: [],
    sixclock:[],
    twelveclock: [],
    nineclock:[],
  }

  componentDidMount = () => {
    const weatherkey='11102';
    const apiid='972f52e04ad68f029f06d8f48405b6c0'
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=${weatherkey}&units=imperial&appid=${apiid}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const twelveclock = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      const sixclock = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      const nineclock = data.list.filter(reading => reading.dt_txt.includes("21:00:00"))
     
      this.setState({
        fullData: data.list,
        sixclock:sixclock ,
       twelveclock:twelveclock,
       nineclock:nineclock,
      }, () => console.log(this.state))
    })
  }

  
  twelveclock = () => {
    return this.state.twelveclock.map(
        (reading, index) => <Day reading={reading} key={index} />
        
        )   
  }
  sixclock = () => {
    return this.state.sixclock.map(
        (reading, index) => <Day reading={reading} key={index} />
        
        )
  }
  nineclock = () => {
    return this.state.nineclock.map(
        (reading, index) => <Day reading={reading} key={index} />
        
        )
  }
  
  
  render() {
    return (   
     <div className="container"id="fullpage">
    <center><h1>Weather of US</h1></center>
<center>  <table> 
   <center> <thead><tr><th></th></tr></thead> </center>     
        <tbody>
        <td id="title"> {this.twelveclock()}</td>
        <td id="title">{this.sixclock()}</td>
        <td id="title">{this.nineclock()}</td>
        </tbody> 
        </table></center>  
       
      
  

      </div>
    )
  }
}

export default Weekdata;