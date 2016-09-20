$(document).ready(function () {

    update(1);

    function update(city) {
        $.ajax({
            url: 'php/weather.php',
            type: 'POST',
            data: {city: city},
            success: function (data) {
                data = JSON.parse(data);
                // console.log(data);
                fill(data);
            }
            
        });
    }

    function fill(data) {

        $('#pic').removeClass();
        $('#pic').addClass('wi');

        var city = data.name;
        var temp = data.main.temp;
        var pres = data.main.pressure;
        var humi = data.main.humidity;
        var update = new Date(data.dt*1000);
        var desc = data.weather[0].description;
        var pic = data.weather[0].id;
        var camp = picture(pic);

        $('#cityname').text(city);
        $('#temp').text(temp);
        $('#pres').text(pres);
        $('#hum').text(humi);
        $('#desc').text(desc);
        $('#update').text(update);
        $('#pic').addClass(camp);

    }

    $('#selectcity').on('change',function () {
        var city = $('input[name="City"]:checked').val();
        update(city);
    });

    function picture(pic) {

        // var id = pic/100;
        var code = pic%100;
        // id = Math.floor(id);

        if (pic >= 200 && pic < 300){
            switch (code){
                case 0:
                case 1:
                    return 'wi-storm-showers';
                    break;
                case 2:
                    return 'wi-thunderstorm';
                    break;
                case 10:
                case 11:
                case 12:
                case 21:
                case 30:
                case 31:
                case 32:
                    return 'wi-lightning';
                    break;
            }
        } else if(pic >= 300 && pic < 400){
            switch (code) {
                case 0:
                case 1:
                case 2:
                case 10:
                    return 'wi-raindrop';
                    break;
                case 11:
                case 12:
                case 13:
                case 14:
                case 21:
                    return 'wi-raindrops';
                    break;
            }
        } else if(pic >= 500 && pic < 600){
            switch (code){
                case 0:
                    return 'wi-raindrop';
                    break;
                case 1:
                    return 'wi-raindrops';
                    break;
                case 2:
                case 3:
                case 4:
                    return 'wi-showers';
                    break;
                case 11:
                    return 'wi-sleet';
                    break;
                case 20:
                case 21:
                case 22:
                case 31:
                    return 'wi-rain';
                    break;
            }
        } else if(pic >= 600 && pic < 700){
            switch (code){
                case 0:
                    return 'wi-snowflake-cold';
                    break;
                case 1:
                case 2:
                    return 'wi-snow';
                    break;
                case 11:
                case 12:
                case 15:
                case 16:
                    return 'wi-sleet';
                    break;
                case 20:
                case 21:
                case 22:
                    return 'wi-snow-wind';
                    break;
            }
        } else if(pic >= 700 && pic < 800){
            switch (code){
                case 1:
                    return 'wi-fog';
                    break;
                case 11:
                    return 'wi-smoke';
                    break;
                case 21:
                    return 'wi-smog';
                    break;
                case 31:
                    return 'wi-dust';
                    break;
                case 41:
                    return 'wi-fog';
                    break;
                case 51:
                case 61:
                case 62:
                    return 'wi-dust';
                    break;
                case 71:
                    return 'wi-strong-wind';
                    break;
                case 81:
                    return 'wi-tornado';
                    break;
            }
        } else if(pic >= 800 && pic < 900){
            switch (code){
                case 0:
                    return 'wi-day-sunny';
                    break;
                case 1:
                    return 'wi-day-cloudy';
                    break;
                case 2:
                    return 'wi-cloud';
                    break;
                case 3:
                    return 'wi-cloudy';
                    break;
                case 4:
                    return 'wi-cloudy';
                    break;
            }
        } else if(pic >= 900 && pic < 1000){
            switch (code){
                case 0:
                    return 'wi-tornado';
                    break;
                case 1:
                    return 'wi-storm-warning';
                    break;
                case 2:
                    return 'wi-hurricane';
                    break;
                case 3:
                    return 'wi-cloud';
                    break;
                case 4:
                    return 'wi-fire';
                    break;
                case 5:
                    return 'wi-strong-wind';
                    break;
                case 6:
                    return 'wi-hail';
                    break;
                case 51:
                    return 'wi-day-sunny';
                    break;
                case 52:
                case 53:
                    return 'wi-small-craft-advisory';
                    break;
                case 54:
                    return 'wi-gale-warning';
                    break;
                case 55:
                    return 'wi-small-craft-advisory';
                    break;
                case 56:
                case 57:
                case 58:
                case 59:
                    return 'wi-gale-warning';
                    break;
                case 60:
                    return 'wi-storm-warning';
                    break;
                case 61:
                    return 'wi-storm-warning';
                    break;
                case 62:
                    return 'wi-hurricane-warning';
                    break;
            }
        }





    }
    
});