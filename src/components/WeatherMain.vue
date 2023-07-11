<template>
    <div class="main-widget">
        <span class="main-widget__city">Москва</span>

        <div class="main-widget__weather">
            <div class="main-widget__weather-icon"><img :src="currentWeather.icon" alt=""></div>
            <span class="main-widget__weather-temp">{{ currentWeather.temperature }}°</span>
        </div>

        <span class="main-widget__status">{{ currentWeather.status }}</span>
    </div>
</template>

<script>
export default {
    name: 'WeatherMain',
    props: {
        currentWeather: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
@mixin font($size, $weight, $height) {
    font-family: Roboto;
    font-style: normal;
    color: #FFF;

    line-height: $height;
    font-size: $size;
    font-weight: $weight;
}

.main-widget {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 8px;

    &__city {
        @include font(2.25em, 500, 130%);
    }

    &__weather {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 24px;

        &-icon {
            width: 100%;
            max-width: 100px;
            height: auto;

        }

        &-temp {
            @include font(6em, 300, 130%);

        }
    }

    &__status {
        @include font(1.5em, 400, 130%);
    }
}

@media screen and (min-aspect-ratio: 16/9) {
    .main-widget {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        gap: 8px;
    }
}
</style>