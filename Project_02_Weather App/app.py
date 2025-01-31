from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def index(): 
    weatherData = None
    error = 0
    cityName = ''

    if request.method == "POST":       
        cityName = request.form.get("cityName")  
        
        if cityName:
            weatherApiKey = '352ae85510def91255893564d1ba4c06'
            url = f"https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={weatherApiKey}"
            weatherData = requests.get(url).json()

            # Check if the response contains 'main' data to avoid KeyError
            if 'main' in weatherData:
                # Convert temperature to Celsius and update `weatherData`
                weatherData['main']['temp'] = round(weatherData['main']['temp'] - 273.15, 2)
            else:
                # If no valid response, set error flag
                error = 1
        else:
            error = 1

    return render_template('index.html', data=weatherData, cityName=cityName, error=error)

if __name__ == "__main__":
    app.run(debug=True)
