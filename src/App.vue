<template>
  <div>
    <WeatherMain/>
    <WeatherDaily/>
    <WeatherDetails/>
  </div>
</template>

<script>
    import WeatherMain from '@/components/WeatherMain.vue';
    import WeatherDaily from '@/components/WeatherDaily.vue';
    import WeatherDetails from '@/components/WeatherDetails.vue';

    export default {
    name: 'App',
        components: {
            WeatherMain,
            WeatherDaily,
            WeatherDetails
        },
    }
</script>

<style>
    /* Reset and base styles  */
    * {
        padding: 0px;
        margin: 0px;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Links */

    a, a:link, a:visited  {
        text-decoration: none;
    }

    a:hover  {
        text-decoration: none;
    }

    /* Common */

    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    address {
    font-style: normal;
    }

    /* Form */

    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background-color: transparent;
        background: none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }

    /* roboto-300 - cyrillic_latin */
    @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('@/assets/fonts/roboto-v30-cyrillic_latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* roboto-regular - cyrillic_latin */
    @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('@/assets/fonts/roboto-v30-cyrillic_latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* roboto-500 - cyrillic_latin */
    @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('@/assets/fonts/roboto-v30-cyrillic_latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }

    html {
        box-sizing: border-box;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        background-image: url('@/assets/background.svg');
        background-position: top center;
        background-attachment: fixed;
        background-size: cover;
        /* height: 100%;
        box-sizing: border-box; */
        font-family: 'Roboto';
        font-style: normal;
        line-height: 1.2;
        color: white;
    }

    .weather {
        min-height: 100vh;
    }

    .weather__container{
        max-width: 1312px;
        margin: 0 auto;
    }
</style>