<template>
    <div class="weather__container">
      <div class="weather__block-main">
        <div class="weather__city">Москва</div>

        <div class="weather__info">
          <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>
          <div class="weather__temp-now">--°</div>        
        </div>

        <div class="weather__status">Солнечно</div>
      </div>    
    </div>
</template>

<script>

</script>

<style>
    .weather__block-main {
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    }

    .weather__info {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    }

    .weather__city {
    color: #FFF;
    font-size: 36px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    }

    .weather__temp-now {
    color: #FFF;
    font-size: 96px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: 130%;
    }

    .weather__status {
    color: #FFF;
    font-size: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    }
</style>