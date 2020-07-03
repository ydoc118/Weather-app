$(document).ready(function() {
    var dateTime = moment().format('dddd, MMMM Do YYYY');
    $("#five-day").css("display", "none");


    


    function citySearch() {

        var city = $(".city-search").val();
        var apiKey = "0ec949b8b13f2ad5d8653cd84a541bde"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&appid=" + apiKey + "&cnt=5";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            
            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            var cityName = response.name;
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            var cityHumidity = response.main.humidity;
            var cityWind = response.wind.speed;

            $("#city-name").text(cityName + " " + "(" + dateTime + ")" + " ").append(img)
            $("#temp").text("Temperature (F): " + tempF.toFixed(2));
            $("#humidity").text("Humidity: " + cityHumidity);
            $("#wind-speed").text("Wind Speed: " + cityWind);

            
            savedCity = $("<button>").attr("id", cityName);
            $(savedCity).addClass("saved-cities")
            savedCity.text(cityName)
            $("#saved-cities").prepend(savedCity);

            var buttonText = document.getElementById(cityName).innerHTML;

            $("#" + cityName).on("click", function() {
                console.log(buttonText);
                city = buttonText;


                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function(response) {
                    $("#city-name").text(cityName + " " + "(" + dateTime + ")" + " ").append(img)
                    $("#temp").text("Temperature (F): " + tempF.toFixed(2));
                    $("#humidity").text("Humidity: " + cityHumidity);
                    $("#wind-speed").text("Wind Speed: " + cityWind);


                    $.ajax({
                        url: forecastURL,
                        method: "GET"
                    }).then(function(response) {
                        console.log(response);
            
                        $("#five-day").css("display", "inherit")
                        var fiveDayIcon = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
                        var fiveDayIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
                        var fiveDayIcon3 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
                        var fiveDayIcon4 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
                        var fiveDayIcon5 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
                        
                            var fiveDayForecast = [
                                {date: moment().add(1, 'days').calendar(),
                                temp: "Temp(F): " + ((response.list[0].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                                humidity: "Humidity: " + response.list[0].humidity + "%"},
            
                                {date: moment().add(2, 'days').calendar(),
                                temp: "Temp(F): " + ((response.list[1].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                                humidity: "Humidity: " + response.list[1].humidity + "%"},
            
                                {date: moment().add(3, 'days').calendar(),
                                temp: "Temp(F): " + ((response.list[2].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                                humidity: "Humidity: " + response.list[2].humidity + "%"},
            
                                {date: moment().add(4, 'days').calendar(),
                                temp: "Temp(F): " + ((response.list[3].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                                humidity: "Humidity: " + response.list[3].humidity + "%"},
            
                                {date: moment().add(5, 'days').calendar(),
                                temp: "Temp(F): " + ((response.list[4].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                                humidity: "Humidity: " + response.list[4].humidity + "%"}
                            ]
                        
                                $("#forecast-list").html("5 Day Forecast: ")
                                $("#1").html(fiveDayForecast[0].date + "<br>" + fiveDayForecast[0].temp + "<br>" + fiveDayForecast[0].humidity).append(fiveDayIcon)
                                $("#2").html(fiveDayForecast[1].date + "<br>" + fiveDayForecast[1].temp + "<br>" + fiveDayForecast[1].humidity).append(fiveDayIcon2)
                                $("#3").html(fiveDayForecast[2].date + "<br>" + fiveDayForecast[2].temp + "<br>" + fiveDayForecast[2].humidity).append(fiveDayIcon3)
                                $("#4").html(fiveDayForecast[3].date + "<br>" + fiveDayForecast[3].temp + "<br>" + fiveDayForecast[3].humidity).append(fiveDayIcon4)
                                $("#5").html(fiveDayForecast[4].date + "<br>" + fiveDayForecast[4].temp + "<br>" + fiveDayForecast[4].humidity).append(fiveDayIcon5)
            
                            
                    })
            
                    
                })
            })

            

            

        })

        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            $("#five-day").css("display", "inherit")
            var fiveDayIcon = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
            var fiveDayIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
            var fiveDayIcon3 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
            var fiveDayIcon4 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
            var fiveDayIcon5 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
            
                var fiveDayForecast = [
                    {date: moment().add(1, 'days').calendar(),
                    temp: "Temp(F): " + ((response.list[0].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                    humidity: "Humidity: " + response.list[0].humidity + "%"},

                    {date: moment().add(2, 'days').calendar(),
                    temp: "Temp(F): " + ((response.list[1].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                    humidity: "Humidity: " + response.list[1].humidity + "%"},

                    {date: moment().add(3, 'days').calendar(),
                    temp: "Temp(F): " + ((response.list[2].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                    humidity: "Humidity: " + response.list[2].humidity + "%"},

                    {date: moment().add(4, 'days').calendar(),
                    temp: "Temp(F): " + ((response.list[3].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                    humidity: "Humidity: " + response.list[3].humidity + "%"},

                    {date: moment().add(5, 'days').calendar(),
                    temp: "Temp(F): " + ((response.list[4].temp.day - 273.15) * 1.80 + 32).toFixed(2),
                    humidity: "Humidity: " + response.list[4].humidity + "%"}
                ]
            
                    $("#forecast-list").html("5 Day Forecast: ")
                    $("#1").html(fiveDayForecast[0].date + "<br>" + fiveDayForecast[0].temp + "<br>" + fiveDayForecast[0].humidity).append(fiveDayIcon)
                    $("#2").html(fiveDayForecast[1].date + "<br>" + fiveDayForecast[1].temp + "<br>" + fiveDayForecast[1].humidity).append(fiveDayIcon2)
                    $("#3").html(fiveDayForecast[2].date + "<br>" + fiveDayForecast[2].temp + "<br>" + fiveDayForecast[2].humidity).append(fiveDayIcon3)
                    $("#4").html(fiveDayForecast[3].date + "<br>" + fiveDayForecast[3].temp + "<br>" + fiveDayForecast[3].humidity).append(fiveDayIcon4)
                    $("#5").html(fiveDayForecast[4].date + "<br>" + fiveDayForecast[4].temp + "<br>" + fiveDayForecast[4].humidity).append(fiveDayIcon5)

                
        })

        
        
    }

    $(document).on("click", "#button-addon2", citySearch);

});
