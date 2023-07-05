<template>
  <div class="weather-details">
    <span class="weather-details__title">Подробности</span>

    <div class="weather-details__wrapper">
      <div class="weather-details__wrapper__data">
        <hr>

        <div class="weather-details__wrapper__data__container">

          <div class="weather-details__wrapper__data__container__item">
            <span class="weather-details__wrapper__data__container__item-title">По ощущениям</span>
            <span class="weather-details__wrapper__data__container__item-data">2°</span>
          </div>

          <div class="weather-details__wrapper__data__container__item">
            <span class="weather-details__wrapper__data__container__item-title">Влажность</span>
            <span class="weather-details__wrapper__data__container__item-data">2°</span>
          </div>

          <div class="weather-details__wrapper__data__container__item">
            <span class="weather-details__wrapper__data__container__item-title">Видимость</span>
            <span class="weather-details__wrapper__data__container__item-data">2°</span>
          </div>

          <div class="weather-details__wrapper__data__container__item">
            <span class="weather-details__wrapper__data__container__item-title">Давление</span>
            <span class="weather-details__wrapper__data__container__item-data">2°</span>
          </div>

          <div class="weather-details__wrapper__data__container__item">
            <span class="weather-details__wrapper__data__container__item-title">Ветер</span>
            <span class="weather-details__wrapper__data__container__item-data">2°</span>
          </div>

        </div>

      </div>

      <div class="weather-details__wrapper__rise">
        <hr>

        <div class="weather-details__wrapper__rise__container">

          <div class="weather-details__wrapper__rise__container__item">
            <span class="weather-details__wrapper__rise__container__item-title">Восход</span>

            <div class="weather-details__wrapper__rise__container__item-main">
              <div class="weather-details__wrapper__rise__container__item-main__icon"><img src="@/assets/rise.svg" alt=""></div>
              <span class="weather-details__wrapper__rise__container__item-main__time">7:23</span>
            </div>

          </div>

          <div class="weather-details__wrapper__rise__container__item">
            <span class="weather-details__wrapper__rise__container__item-title">Закат</span>

            <div class="weather-details__wrapper__rise__container__item-main">
              <div class="weather-details__wrapper__rise__container__item-main__icon"><img src="@/assets/rise.svg" alt=""></div>
              <span class="weather-details__wrapper__rise__container__item-main__time">18:42</span>
            </div>

          </div>          
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

    .weather-details {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 8px;

        &__title {
            @include font(1.5em, 400, 130%);
        }

        hr {
            width: 100%;
            height: 1px;
            border-radius: 8px;
            opacity: 0.25;
            background: #FFF;
        }

        &__wrapper {
            width: 100%;
            display: flex;
            gap: 80px;

            &__data {
                width: 496px;
                display: flex;
                flex-direction: column;
                gap: 24px;

                &__container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 32px 116px;

                    &__item {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 16px;

                        &-title {
                            @include font(0.875em, 400, 130%);
                        }

                        &-data {
                            @include font(1.5em, 300, 135%);
                        }
                    }
                }
            }

            &__rise {
                width: 296px;
                display: flex;
                flex-direction: column;
                gap: 24px;

                &__container {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    
                    &__item {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;

                        &-title {
                            @include font(0.875em, 400, 130%);
                        }

                        &-main {
                            display: flex;
                            gap: 24px;
                            align-items: center;

                            &__icon {
                              width: 100%;
                              max-width: 48px;
                              height: auto;
                            }

                            &__time {
                              @include font(1.5em, 300, 135%);
                            }
                        }
                    }                    
                }
                
            }
        }
    }

    @media screen and (min-aspect-ratio: 16/9) {
        .weather-details {
          margin-top: 50px;
          gap: 8px;

          &__wrapper {
              justify-content: space-between;
              gap: 0px;

              &__data {
                  width: 626px;
                  gap: 24px;

                  &__container {
                      flex-wrap: wrap;
                      gap: 32px 58px;

                      &__item {
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          gap: 16px;
                      }
                  }
              }

              &__rise {
                  width: 296px;
                  display: flex;
                  flex-direction: column;
                  gap: 24px;

                  &__container {
                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;
                      gap: 0;

                      &__item {
                          display: flex;
                          // flex-direction: row;
                          gap: 8px;

                          &-main {
                              display: flex;
                              gap: 24px;
                              align-items: center;
                          }
                      }                    
                  }
                  
              }
          }
        }
    }

    @media (max-width: 992px) {
        .weather-details {
            margin-top: 120px;
            gap: 8px;

            &__wrapper__data__container {
                gap: 32px 58px;
            }
        }
      
    }

    @media screen and (max-width : 420px) {
      .weather-details {
        margin-top: 80px;

        &__title {
          text-align: center;
        }

        &__wrapper {
          flex-direction: column;
          gap : 16px;
          
          &__data {
            width: 100%;

            &__container {
              gap: 20px 10px;
              justify-content: center;
              align-items: center; 
              
              &__item {
                align-items: center;
                width: 30%;                
              }
            }
          }

          &__rise {
            width: 100%;

            &__container {
              gap: 0px 20%;
              flex-direction: row;
              justify-content: center;
              align-items: center;              
            }

            &__item-title {
              text-align: center;
            }
          }
        }
      }
    }
</style>