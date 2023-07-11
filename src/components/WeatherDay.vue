<template>
    <div :class="['weather-daily__widget-feed__item', { 'selected': dayWeather.selected }]">
        <span class="weather-daily__widget-feed__item-day">{{ dayWeather.day }}</span>

        <div class="weather-daily__widget-feed__item-icon"><img :src="dayWeather.icon" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
            <span class="weather-daily__widget-feed__item-temp__max">{{ dayWeather.maxTemp }}°</span>
            <span class="weather-daily__widget-feed__item-temp__min">{{ dayWeather.minTemp }}°</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dayWeather: {
            type: Object,
        }
    },
    methods: {
        emitMessage(msg) {
            this.$emit('qwe', msg);
        },

    }
}
</script>