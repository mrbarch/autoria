<template>
  <div>
    <div class="market-section">
      <div class="container">
        <div class="market">
          <div class="market__block">
            <div class="market__block-choose">
              <a class="market__block-choose-link"
                 href="https://market.ria.com/uk/?site=ria&utm_source=auto.ria.com&utm_medium=informer&utm_term=mainPage&utm_content=market_logo&utm_campaign=informer_a">
                <img class="market__block-choose-link-img" src="../../assets/svg/market-ria.svg" alt="market">
              </a>
              <p class="market__block-choose-text">
                Обирай товари <span>для свого авто</span>
              </p>
              <a class="market__block-choose-btn"
                 href="https://market.ria.com/uk/?site=ria&utm_source=auto.ria.com&utm_medium=informer&utm_term=mainPage&utm_content=button&utm_campaign=informer_a">
                Усі автотовари
              </a>
            </div>
            <div class="market__block-slider swiper-container">
              <swiper class="market__block-slider-list" :options="swiperOptions">
                <swiper-slide class="market__block-slider-item swiper-slide" style="width: 13rem!important;">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-sitting"></i>
                    <span>Чохли на сидіння</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-protection"></i>
                    <span>Захист двигуна</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-wheels"></i>
                    <span>Шини</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-disks"></i>
                    <span>Диски</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-hitch"></i>
                    <span>Фаркопи</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-child-sitting"></i>
                    <span>Дитячі автокрісла</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-rugs-salon"></i>
                    <span>Килимки в салон</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-rugs-trunk"></i>
                    <span>Килимки в багажник</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-mudguards"></i>
                    <span>Бризковики</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-window-deflectors"></i>
                    <span>Дефлектори вікон</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-hood-deflectors"></i>
                    <span>Дефлектори капоту</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-cap"></i>
                    <span>Ковпаки</span>
                  </a>
                </swiper-slide>
                <swiper-slide class="market__block-slider-item">
                  <a href="#" class="market__block-slider-link">
                    <i class="market__block-slider-img market__block-slider-img-organizer"></i>
                    <span>Органайзери</span>
                  </a>
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination" slot="pagination"></div>
              <button class="market__block-slider-arrow market__block-slider-arrow-prev" slot="button-prev">❮</button>
              <button class="market__block-slider-arrow market__block-slider-arrow-next" slot="button-next">❯</button>
            </div>
          </div>
          <div class="market__line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "MarketSlider",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: '.market__block-slider-arrow-next',
          prevEl: '.market__block-slider-arrow-prev'
        }
      }
    }
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="scss">
.market-section {
  padding-top: 2rem;
}

.market {
  background-color: #e5f4ff;
  height: 22.5rem;
  border-bottom: 1px solid #e0e3e4;
  margin-bottom: 20px;

  &__block {
    width: 96.7%;
    display: flex;
    max-width: 94rem;
    min-height: 19rem;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    margin: 0 auto;
    justify-content: space-between;

    &-choose {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-link {

        &-img {
          width: 12rem;
        }
      }

      &-text {
        font-size: 2rem;
        width: 15rem;
        line-height: 2.3rem;

        span {
          color: #1270b2;
          font-weight: 700;
          font-family: Arial-Bold, sans-serif;
        }
      }

      &-btn {
        background: #1270b2;
        display: inline-block;
        min-width: 22.6rem;
        padding: 1.1rem;
        color: #fff;
        font-size: 1.6rem;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
      }
    }

    &-slider {
      width: 58.4rem;
      height: 19rem;
      position: relative;
      padding: 0 3.6rem 0 3.6rem;
      overflow: hidden;

      &-link {
        span {
          display: inline-block;
          line-height: 1;
          padding: 1rem .5rem;
          font-size: 1.2rem;
        }
      }

      &-list {
        max-width: 58rem;
        display: flex;
        list-style: none;
        height: 100%;
        overflow: hidden;
      }

      &-item {
        position: relative;
        background: #fff;
        display: inline-block;
        justify-content: center;
        flex-shrink: 0;
        width: 13.4rem !important;
        height: 18.7rem;
        margin: 0 .5rem;
        text-align: center;
        font-size: 1.2rem;
        border: 1px solid transparent;
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;

        &:hover {
          border: 1px dashed #1270b2;
        }
      }

      &-arrow {
        background: 0 0;
        position: absolute;
        top: 0;
        width: 3rem;
        height: 100%;
        font-size: 1.2rem;
        color: #1270b2;
        border: 1px solid transparent;
        border-radius: 10px;
        cursor: pointer;
        outline: 0;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 2;
        transition: .3s border;

        &:hover {
          border: 1px dashed #1270b2;
        }

        &-prev {
          left: 0;
        }

        &-next {
          right: 0;
        }
      }

      &-img {
        display: block;
        width: 12.6rem;
        height: 12.6rem;
        margin: 2.5rem auto 0;

        &-sitting {
          background: url('../../assets/img/avtochehlu.webp') no-repeat 0;
          background-size: 13rem;
        }

        &-protection {
          background: url('../../assets/img/body_protection.webp') no-repeat -.2rem;
          background-size: 13rem;
        }

        &-wheels {
          background: url('../../assets/img/shina.webp') no-repeat 0;
          background-size: 12rem;
        }

        &-disks {
          background: url('../../assets/img/disks.jpg') no-repeat 1rem;
          background-size: 11rem;
        }

        &-hitch {
          background: url('../../assets/img/hetch.webp') no-repeat 0;
          background-size: 13rem;
        }

        &-child-sitting {
          background: url('../../assets/img/child-sitting.webp') no-repeat -1rem;
          background-size: cover;
        }

        &-rugs-salon {
          background: url('../../assets/img/carpet-in-salon.webp') no-repeat 1rem;
          background-size: 11rem;
        }

        &-rugs-trunk {
          background: url('../../assets/img/carpet-in-trunk.webp') no-repeat 1rem;
          background-size: 11rem;
        }

        &-mudguards {
          background: url('../../assets/img/brizgovik.webp') no-repeat 1rem;
          background-size: 11rem;
        }

        &-window-deflectors {
          background: url('../../assets/img/deflector_window.webp') no-repeat 1rem;
          background-size: 11rem;
        }

        &-hood-deflectors {
          background: url('../../assets/img/deflector_hood.webp') no-repeat 0.9rem;
          background-size: 11rem;
        }

        &-cap {
          background: url('../../assets/img/kolpak.webp') no-repeat -1.3rem;
          background-size: 15rem;
        }

        &-organizer {
          background: url('../../assets/img/organizer.webp') no-repeat -1.3rem;
          background-size: 15rem;
        }
      }
    }
  }

  &__line {
    border-top: 1px solid #e0e3e4;
    margin-top: 2rem;
    z-index: 1;
  }
}
</style>
