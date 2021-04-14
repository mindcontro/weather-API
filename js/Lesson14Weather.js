const KEY = "&appid=4409d3c880a144196cc2633d3c8139c5"

const url = "https://api.openweathermap.org/data/2.5/weather?q="

const getWeather = async(event)=>{
    event.preventDefault()
    output.innerHTML = ''
    let city = document.getElementById('city')
    let api = url + city.value+KEY
    const res = await fetch(api)
    const req = await res.json()
    console.log(req)
    weather(req)
    city.value=''

}

const weather = (weat) =>{
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let h3 = document.createElement('h3')
    let h33 = document.createElement('h3')
    let h333 =document.createElement('h3')


    h1.innerHTML =weat.name
    h3.innerHTML = `Kelvin - ${weat.main.temp} Celsius - ${weat.main.temp - '273.15'}`
    h33.innerHTML = `WIND deg: ${weat.wind.deg}   WIND Speed (km/h): ${weat.wind.speed} `
    h333.innerHTML= `SKY: ${weat.weather[0].description}`

    div.appendChild(h1)
    div.appendChild(h3)
    div.appendChild(h33)
    div.appendChild(h333)
    output.appendChild(div)
}

