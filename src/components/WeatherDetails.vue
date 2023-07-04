<template>
    <div class="weather__container">
      <div class="footer__wrapper">
        <div class="weather__title">Подробности</div>

        <div class="weather__block-footer">
          <div class="weather__details">
            <hr>

            <div class="weather__details-wrapper">
              <div class="weather__details__item">
                <div class="weather__item__title">По ощущениям</div>
                <div class="weather__item__main">2°</div>
              </div>

              <div class="weather__details__item">
                <div class="weather__item__title">Влажность</div>
                <div class="weather__item__main">73%</div>
              </div>

              <div class="weather__details__item">
                <div class="weather__item__title">Видимость</div>
                <div class="weather__item__main">10 км</div>
              </div>

              <div class="weather__details__item">
                <div class="weather__item__title">Давление</div>
                <div class="weather__item__main">760,00 мм</div>
              </div>

              <div class="weather__details__item">
                <div class="weather__item__title">Ветер</div>
                <div class="weather__item__main"><img src="@/assets/wind.svg" alt=""> 4 м/с</div>
              </div>
            </div>

            
          </div>

          <div class="weather__rise">
            <hr>

            <div class="weather__rise-wrapper">
              <div class="weather__rise__item">
                <div class="weather__item__title">Восход</div>
                <div class="weather__item__main-rise">
                  <div class="icon"><img src="@/assets/rise.svg" alt=""></div>
                  <div class="time">18:42</div>
                </div>
              </div>

              <div class="weather__rise__item">
                <div class="weather__item__title">Закат</div>
                <div class="weather__item__main-rise">
                  <div class="icon"><img src="@/assets/rise.svg" alt=""></div>
                  <div class="time">18:42</div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
</template>

<script>

</script>

<style>
    .weather__details {
    width: 496px;
    }

    .weather__rise {
    width: 296px;
    }

    .weather__details hr, .weather__rise hr {
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    border-radius: 8px;
    opacity: 0.25;
    background: #FFF;
    
    margin-bottom: 24px;
    }

    .weather__details-wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 32px 116px;
    }

    .weather__details__item {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    }

    .weather__item__title {
    color: #FFF;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    }

    .weather__item__main {
    color: #FFF;
    font-size: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: 135%;
    
    display: flex;
    align-items: stretch;
    gap: 10px;
    align-self: stretch;
    }

    .weather__block-footer{
    display: flex;
    gap: 80px;
    }

    .weather__rise__item {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    }

    .weather__item__main-rise{
    display: flex;
    align-items: center;
    gap: 24px;
    }

    .weather__rise-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    }

    .time {
    color: #FFF;
    font-size: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: 135%;
    }

    .icon {
    width: 48px;
    height: 48px;
    }

    .footer__wrapper{
    padding-top: 107px;
    }
</style>