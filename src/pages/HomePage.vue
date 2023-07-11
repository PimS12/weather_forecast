<template>
    <div class="weather-app">
        <WeatherMain :currentWeather="currentWeather" />
        <WeatherDaily :weatherData="weatherData" @item-selected="selectItem" />
        <WeatherDetails :selectedItem="selectedItem" />
    </div>
</template>

<script>
import axios from 'axios';
import WeatherMain from '@/components/WeatherMain.vue';
import WeatherDaily from '@/components/WeatherDaily.vue';
import WeatherDetails from '@/components/WeatherDetails.vue';

export default {
    name: 'HomePage',
    components: {
        WeatherMain,
        WeatherDaily,
        WeatherDetails
    },
    data() {
        return {
            weatherData: [],
            currentWeather: [],
            selectedItem: null
        };
    },
    mounted() {
        this.getWeatherForecast();
    },
    methods: {
        getWeatherForecast() {
            const apiKey = '7ea6b51fc4c36617b6b14b135de3c6f0';
            const city = 'Moscow'; // Замените на нужный город

            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ru`;

            axios.get(url)
                .then(response => {
                    const forecastData = response.data;
                    // console.log(forecastData);
                    this.processForecastData(forecastData);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        processForecastData(data) {
            const dailyData = {};
            console.log(data);
            data.list.forEach(item => {
                const itemDate = new Date(item.dt_txt);
                const [dayKey] = itemDate.toISOString().split('T'); // Используем дату в качестве ключа для массива dailyData
                if (!dailyData[dayKey]) {
                    dailyData[dayKey] = {
                        day: this.formatDate(item.dt_txt),
                        icon: '',
                        maxTemp: Number.MIN_SAFE_INTEGER, // Начальное значение для максимальной температуры
                        minTemp: Number.MAX_SAFE_INTEGER, // Начальное значение для минимальной температуры
                        feelTemp: this.convertTemperature(item.main.feels_like) + '°',
                        humidity: item.main.humidity + '%',
                        visibility: (Math.floor(item.visibility / 1000)) > 0 ? (item.visibility / 1000).toFixed(0) + ' км' : item.visibility + ' м',
                        pressure: this.convertHPaToMmHg(item.main.pressure) + ' мм',
                        windSpeed: Math.round(item.wind.speed) + ' м/с',
                        sunrise: Number.MAX_SAFE_INTEGER,
                        sunset: Number.MAX_SAFE_INTEGER
                    };
                }
                const temperature = this.convertTemperature(item.main.temp);
                dailyData[dayKey].maxTemp = Math.max(dailyData[dayKey].maxTemp, temperature);
                dailyData[dayKey].minTemp = Math.min(dailyData[dayKey].minTemp, temperature);
                dailyData[dayKey].sunrise = this.formatTime(data.city.sunrise);
                dailyData[dayKey].sunset = this.formatTime(data.city.sunset);


                if (dailyData[dayKey].icon === '') {
                    dailyData[dayKey].icon = this.getWeatherIconUrl(item.weather[0].icon);
                }
            });

            this.weatherData = Object.values(dailyData).slice(0, 7);
            console.log(this.weatherData);
            this.currentWeather = {
                temperature: this.convertTemperature(data.list[0].main.temp),
                icon: this.getWeatherIconUrl(data.list[0].weather[0].icon),
                status: data.list[0].weather[0].description,
            }
        },

        formatDate(time) {
            const date = new Date(time);
            const options = { weekday: 'short', timeZone: 'UTC' };
            // console.log(date);
            return date.toLocaleDateString('ru-RU', options) + ', ' + date.getDate();
        },
        getWeatherIconUrl(iconCode) {
            return `http://openweathermap.org/img/wn/${iconCode}.png`;
            // http://openweathermap.org/img/wn/${iconCode}.png
        },
        convertTemperature(temperature) {
            return Math.round(temperature - 273.15); // Конвертируем из Кельвинов в Цельсии
        },
        convertHPaToMmHg(hPa) {
            const mmHg = hPa * 0.75006375541921;
            return mmHg.toFixed(2);
        },
        formatTime(time) {
            const date = new Date(time * 1000); // Умножаем на 1000, так как таймштампы обычно представлены в миллисекундах
            const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы и добавляем ведущий ноль, если нужно
            const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты и добавляем ведущий ноль, если нужно

            const formattedTime = `${hours}:${minutes}`;
            return (formattedTime);
        },
        selectItem(selectedItem) {
            this.selectedItem = selectedItem; // Устанавливаем выбранный элемент в свойство
        },
    },
}

</script>