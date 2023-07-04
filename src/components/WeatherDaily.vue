<template>
    <div class="weather__container">
      <div class="weather__wrapper">
        <div class="weather__title">По дням</div>
        
        <div class="weather__block-tape">

          <div class="weather__block-tape__item">
            <div class="weather__day">Понедельник</div>
            
            <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>

            <div class="weather__temp">
              <div class="weather__temp-max">4°</div>
              <div class="weather__temp-min">3°</div>            
            </div>
          </div>

          <div class="weather__block-tape__item">
            <div class="weather__day">Понедельник</div>
            
            <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>

            <div class="weather__temp">
              <div class="weather__temp-max">4°</div>
              <div class="weather__temp-min">3°</div>            
            </div>
          </div>

          <div class="weather__block-tape__item">
            <div class="weather__day">Понедельник</div>
            
            <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>

            <div class="weather__temp">
              <div class="weather__temp-max">4°</div>
              <div class="weather__temp-min">3°</div>            
            </div>
          </div>

          <div class="weather__block-tape__item">
            <div class="weather__day">Понедельник</div>
            
            <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>

            <div class="weather__temp">
              <div class="weather__temp-max">4°</div>
              <div class="weather__temp-min">3°</div>            
            </div>
          </div>

          <div class="weather__block-tape__item">
            <div class="weather__day">Понедельник</div>
            
            <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>

            <div class="weather__temp">
              <div class="weather__temp-max">4°</div>
              <div class="weather__temp-min">3°</div>            
            </div>
          </div>

          <div class="weather__block-tape__item">
            <div class="weather__day">Понедельник</div>
            
            <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>

            <div class="weather__temp">
              <div class="weather__temp-max">4°</div>
              <div class="weather__temp-min">3°</div>            
            </div>
          </div>

          <div class="weather__block-tape__item">
            <div class="weather__day">Понедельник</div>
            
            <div class="weather__icon"><img src="@/assets/sun.svg" alt=""></div>

            <div class="weather__temp">
              <div class="weather__temp-max">4°</div>
              <div class="weather__temp-min">3°</div>            
            </div>
          </div>

          <!-- Остальные блоки с классом "weather__block-tape__item" -->

        </div>
      </div>
    </div>
</template>

<script>

</script>

<style>
    .weather__wrapper {
    padding-top: 81px;
    }

    .weather__title {
    color: #FFF;
    font-size: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;

    margin-bottom: 8px;
    }

    .weather__block-tape {
    display: inline-flex;
    align-items: flex-start;
    gap: 32px;

    padding-top: 33px;
    }

    .weather__block-tape__item {
    display: flex;
    width: 160px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    }

    .weather__block-tape__item:hover {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.25);
    }

    .weather__block-tape__item .weather__icon {
    width: 48px;
    height: 48px;
    }

    .weather__temp {
    display: flex;
    gap: 16px;
    }

    .weather__temp-max {
    color: #FFF;
    font-size: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
    }

    .weather__temp-min {
    display: flex;
    align-items: flex-end;
    color: #FFF;
    font-size: 18px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
    
    opacity: 0.5;
    }
</style>