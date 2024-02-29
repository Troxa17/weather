import React,{ useState } from 'react';
import axios from 'axios';
import CurrentConditions from './components/CurrentConditions';
import Day from './components/Day';

const App = () => {

  const [data,setData] = useState(null);
  const [isloading,setIsLoading] = useState(false);
  const [city,setCity] = useState("");

  const loadData = () => {
    setIsLoading (true)
    const baseURL = "http://api.weatherapi.com/v1";
    const apikey = "e2fbebcf76164ca5b90112356242602" 
    axios.get(`${baseURL}/forecast.json?key=${apikey}&q=${city}&days=7&aqi=no&alerts=no`)
    .then(res => {
      setData(res.data);
      //console.log(res.data)
      setIsLoading(false)
    })
    .catch(err => console.log(err.message))
    setIsLoading(false)
  }
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 appbox">
            
            <div className="row">
              <div className="col-lg-10">
                <input className='form-control'
                placeholder='Type your city...'
                value={city}
                onChange={(e) => {setCity(e.target.value)}}
                type="text" />
              </div>
              <div className="col-lg-2" style={{textAlign:'center'}}>
                {
                  isloading ? (<> <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                </>) : (<><button onClick={loadData} className='btn-info btn'>Search</button></>)
                } 
              </div>
            </div>
          
        {
          data ? (<>
          <div className="row">
        <div className="col-lg-12 nodata-container">
          <h1>{data.location.name},{data.location.country}</h1>
        </div>
      </div>
      <div className="row info_box">
         <div className="col-lg-4"><CurrentConditions currentcondition = {data.current.condition}/></div>
        <div  className="col-lg-4 temp">
          <h2>{data.current.temp_c}&#176;c</h2>
        </div>
        <div className="col-lg-4 info">
          <p>Wind: {data.current.wind_kph}</p>
          <p>Precip: {data.current.precip_mm}</p>
          <p>Pressure: {data.current.pressure_mb}</p>
        </div>
      </div>
    
      <div className="row">
            {
              data.forecast.forecastday.map((day,index) => (
                <Day key={index} day={day}/>
              ))
            }
      </div>
          </>) 
          
          
          : (<>
            <div className="row">
            <div className="col-lg-12 nodata-container">
              <p style={{color:'#ffffff'}}>Please enter some value in search section</p>
            </div>
          </div>
          </>)
            }

          </div>
        </div>

      </div>
    </>
    )
}

export default App