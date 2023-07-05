<template>
  <div class="weather-daily">
    <span class="weather-daily__title">По дням</span>

    <div class="weather-daily__widget-feed">
      <div class="weather-daily__widget-feed__item">
        <span class="weather-daily__widget-feed__item-day">Сегодня</span>

        <div class="weather-daily__widget-feed__item-icon"><img src="@/assets/sun.svg" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
          <span class="weather-daily__widget-feed__item-temp__max">4°</span>
          <span class="weather-daily__widget-feed__item-temp__min">3°</span>
        </div>
      </div>

      <div class="weather-daily__widget-feed__item">
        <span class="weather-daily__widget-feed__item-day">Сегодня</span>

        <div class="weather-daily__widget-feed__item-icon"><img src="@/assets/sun.svg" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
          <span class="weather-daily__widget-feed__item-temp__max">4°</span>
          <span class="weather-daily__widget-feed__item-temp__min">3°</span>
        </div>
      </div>

      <div class="weather-daily__widget-feed__item">
        <span class="weather-daily__widget-feed__item-day">Сегодня</span>

        <div class="weather-daily__widget-feed__item-icon"><img src="@/assets/sun.svg" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
          <span class="weather-daily__widget-feed__item-temp__max">4°</span>
          <span class="weather-daily__widget-feed__item-temp__min">3°</span>
        </div>
      </div>

      <div class="weather-daily__widget-feed__item">
        <span class="weather-daily__widget-feed__item-day">Сегодня</span>

        <div class="weather-daily__widget-feed__item-icon"><img src="@/assets/sun.svg" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
          <span class="weather-daily__widget-feed__item-temp__max">4°</span>
          <span class="weather-daily__widget-feed__item-temp__min">3°</span>
        </div>
      </div>

      <div class="weather-daily__widget-feed__item">
        <span class="weather-daily__widget-feed__item-day">Сегодня</span>

        <div class="weather-daily__widget-feed__item-icon"><img src="@/assets/sun.svg" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
          <span class="weather-daily__widget-feed__item-temp__max">4°</span>
          <span class="weather-daily__widget-feed__item-temp__min">3°</span>
        </div>
      </div>

      <div class="weather-daily__widget-feed__item">
        <span class="weather-daily__widget-feed__item-day">Сегодня</span>

        <div class="weather-daily__widget-feed__item-icon"><img src="@/assets/sun.svg" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
          <span class="weather-daily__widget-feed__item-temp__max">4°</span>
          <span class="weather-daily__widget-feed__item-temp__min">3°</span>
        </div>
      </div>

      <div class="weather-daily__widget-feed__item">
        <span class="weather-daily__widget-feed__item-day">Сегодня</span>

        <div class="weather-daily__widget-feed__item-icon"><img src="@/assets/sun.svg" alt=""></div>

        <div class="weather-daily__widget-feed__item-temp">
          <span class="weather-daily__widget-feed__item-temp__max">4°</span>
          <span class="weather-daily__widget-feed__item-temp__min">3°</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

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

.weather-daily {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 30px;

  &__title {
    @include font(1.5em, 400, 135%);
  }

  &__widget-feed {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    &__item {
      display: flex;
      flex-direction: column;
      padding: 16px;
      align-items: flex-start;
      gap: 16px;
      width: 160px;

      &:hover {
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.25);
      }

      &-day {
        @include font(1.125em, 400, 135%);
      }

      &-icon {
        width: 100%;
        max-width: 48px;
        height: auto;
      }

      &-temp {
        display: flex;
        align-items: flex-end;
        gap: 16px;

        &__max {
          @include font(1.5em, 400, 135%);
        }

        &__min {
          @include font(1.125em, 400, 135%);
          opacity: 0.5;
        }
      }
    }
  }
}

@media screen and (min-aspect-ratio: 16/9) {
  .weather-daily {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
}

@media (max-width: 992px) {
  .weather-daily {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    gap: 30px;

    &__widget-feed {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      &__item {
        display: flex;
        flex-direction: column;
        padding: 16px;
        align-items: flex-start;
        gap: 16px;
        width: 130px;
      }
    }
  }
}

// @media (max-width: 767px) {
//   .weather-daily__widget-feed__item {
//     width:160px;
//   }
// }

// @media screen and (max-width : 420px) {

//   .weather-daily__title {
//     width: 100%;
//     text-align: center;
//   }

//   .weather-daily__widget-feed {
//     justify-content: space-between;
//     gap:0px;
//   }

//   .weather-daily__widget-feed__item {
//     gap: 0px;
//     width: 160px;
//     align-items: center;
//   }
// }

@media screen and (max-width : 585px) {

.weather-daily__title {
  width: 100%;
  text-align: center;
}

.weather-daily__widget-feed {
  justify-content: center;
  gap:30px;
}

.weather-daily__widget-feed__item {
  gap: 0px;
  width: 130px;
  align-items: center;
}
}

@media (max-width: 767px) {
  .weather-daily__widget-feed {
    gap: 15%;
  }
}
</style>