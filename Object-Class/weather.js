const weather = () => {

  const url = `https://api.open-meteo.com/v1/forecast?latitude=52.40&longitude=13.07&hourly=temperature_2m&models=best_match&daily=temperature_2m_max&current_weather=true&forecast_days=1&start_date=${new Date().toISOString().slice(0,10)}&end_date=${new Date().toISOString().slice(0,10)}&timezone=Europe%2FBerlin`

  const getData = async () => {
    const data = await fetch(url)
    const result = await data.json()
    const temp = await result.hourly.temperature_2m.reduce((a,b) => Math.round(Math.max(a,b)))
    return temp
  }
  
  return getData
}

export default weather()