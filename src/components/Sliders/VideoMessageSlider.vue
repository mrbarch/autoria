<template>
  <div>
    <div class="video">
      <div class="container">
        <div class="video__message">
          <div class="video__message-text">
            <div class="video__message-text-left">
              <p class="video__message-text-new">NEW !</p>
              <div class="video__message-text-category">
                <img src="../../assets/svg/video.svg" alt="" class="video__message-text-category-img">
                <p class="video__message-text-category-title">Відеоповідомлення</p>
              </div>
              <p class="video__message-text-slogan">Переглядай авто онлайн</p>
            </div>
            <div class="video__message-text-right">
              <p class="video__message-text-more blue">Як це працює</p>
            </div>
          </div>
          <div class="video__message-cars">

            <div class="video__message-car">
              <img src="../../assets/img/mercedes-benz-sprinter.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand blue">Mercedes-Benz</p>
                  <p class="video__message-car-info-first-model blue">&nbsp;Sprinter</p>
                  <p class="video__message-car-info-first-year blue">&nbsp;518</p>
                </div>
                <div class="video__message-car-info-second">
                  <p class="video__message-car-info-second-price">26 500 $</p>
                  <p class="video__message-car-info-second-mileage"> &nbsp; &#8226; 267 тис. км</p>
                </div>
              </div>
            </div>

            <div class="video__message-car">
              <img src="../../assets/img/vaz-21099.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand blue">ВАЗ</p>
                  <p class="video__message-car-info-first-model blue">&nbsp;21099</p>
                  <p class="video__message-car-info-first-year blue">&nbsp;2007</p>
                </div>
                <div class="video__message-car-info-second">
                  <p class="video__message-car-info-second-price">3 499 $</p>
                  <p class="video__message-car-info-second-mileage"> &nbsp; &#8226; 150 тис. км</p>
                </div>
              </div>
            </div>

            <div class="video__message-car">
              <img src="../../assets/img/chevrolet-evanda.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand blue">Chevrolet</p>
                  <p class="video__message-car-info-first-model blue">&nbsp;Evanda</p>
                  <p class="video__message-car-info-first-year blue">&nbsp;2005</p>
                </div>
                <div class="video__message-car-info-second">
                  <p class="video__message-car-info-second-price">4 800 $</p>
                  <p class="video__message-car-info-second-mileage"> &nbsp; &#8226; 204 тис. км</p>
                </div>
              </div>
            </div>

            <div class="video__message-car">
              <img src="../../assets/img/kia-optima.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand blue">Kia</p>
                  <p class="video__message-car-info-first-model blue">&nbsp;Optima</p>
                  <p class="video__message-car-info-first-year blue">&nbsp;2016</p>
                </div>
                <div class="video__message-car-info-second">
                  <p class="video__message-car-info-second-price">12 900 $</p>
                  <p class="video__message-car-info-second-mileage"> &nbsp; &#8226; 118 тис. км</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="video__line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoSlider"
}
</script>

<style lang="scss">
.video {
  &__line {
    border-top: .1rem solid #e0e3e4;
    margin-top: 2.1rem;
  }

  &__message {
    &-text {
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      position: relative;

      &-left {
        display: flex;
        justify-content: space-between;
        width: 43rem;
        height: 2rem;
      }

      &-new {
        color: #db5c4c;
        font-size: 1.8rem;
        line-height: 2rem;
      }

      &-category {
        display: flex;
        justify-content: space-between;
        background-color: #db5c4c;
        width: 15.2rem;

        &-img {
          width: 1.3rem;
          height: 1.3rem;
          padding: 0.3rem 0 0 0.7rem;
        }

        &-title {
          font-size: 1.2rem;
          line-height: 1.5rem;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-self: center;
          padding-right: .9rem;
        }
      }

      &-slogan {
        font-size: 1.8rem;
        color: #5f4f40;
        line-height: 2rem;
      }

      &-right {

      }

      &-more {
        font-size: 1.4rem;
        line-height: 1.5rem;
        padding: 0.5rem 2.3rem 0 0;
      }

      &-more:after {
        content: '→';
        position: absolute;
        left: 92.4rem;
        top: 2.4rem;
      }
    }


    &-cars {
      padding-top: 1.8rem;
      display: flex;
      justify-content: space-between;
    }

    &-car {
      &-img {
        width: 22rem;
        height: 14rem;
        object-fit: cover
      }

      &-info {
        &-first {
          padding-top: .2rem;
          display: flex;

          &-brand {
            font-size: 1.4rem;
            line-height: 1.5rem;
          }

          &-model {
            font-size: 1.4rem;
            line-height: 1.5rem;
          }

          &-year {
            font-size: 1.4rem;
            line-height: 1.5rem;
          }
        }

        &-second {
          padding-top: .4rem;
          display: flex;

          &-price {
            color: #56a83b;
            font-family: Arial-Bold, sans-serif;
            font-size: 1.5rem;
            line-height: 1.5rem;
          }

          &-mileage {
            font-size: 1.4rem;
            color: #504f51;
            line-height: 1.5rem;
          }

          &-town {
            font-size: 1.4rem;
            color: #504f51;
            line-height: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
