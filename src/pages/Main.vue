<template>
  <div id="app">
    <Header/>
    <HeaderCategories/>
    <FilterBlock/>
    <div class="static">
      <div class="container">
        <router-link to="/checkedByPeople" href="#"><img src="./../assets/img/front-prom.png" alt="add"
                                                         class="advertising"></router-link>
        <div class="static__search">
          <div class="static__search-block">
            <p class="static__search-last">Останні пошуки</p>
            <div class="static__search-item">
              <div>&#8226; &nbsp; &nbsp;</div>
              <p class="static__search-text">за годину <span class="blue">+ 700</span></p>
            </div>
            <div class="static__search-item">
              <div>&#8226; &nbsp; &nbsp;</div>
              <p class="static__search-text">за день <span class="blue">+ 3 988</span></p>
            </div>
            <div class="static__search-item">
              <div>&#8226; &nbsp;</div>
              <p class="static__search-text">перевірено по VIN-коду <span class="blue">+ 124 469</span></p>
            </div>
          </div>
        </div>
        <div class="static__items">
          <div class="static__items-row">
            <p class="static__items-row-text">Легкові</p>
            <p class="static__items-row-btn">+42 &nbsp;510</p>
          </div>
          <div class="static__items-row">
            <p class="static__items-row-text">Toyota Avensis</p>
            <p class="static__items-row-btn">+164</p>
          </div>
          <div class="static__items-more blue">Показати ще</div>
        </div>
        <div class="static__advt">
          <div class="static__advt-cars">
            <div class="static__advt-car">
              <img src="./../assets/img/mazda_5__406563896fx.webp" alt="" class="static__advt-car-img">
              <div class="static__advt-car-info">
                <div class="static__advt-car-info-first static__advt-car-info-first-bigger">
                  <p class="static__advt-car-info-first-brand static__advt-car-info-first-brand-bigger blue">
                    Mazda</p>
                  <p class="static__advt-car-info-first-model static__advt-car-info-first-model-bigger blue">
                    &nbsp;5</p>
                  <p class="static__advt-car-info-first-year static__advt-car-info-first-year-bigger blue">
                    &nbsp;2011</p>
                </div>
                <div class="static__advt-car-info-second static__advt-car-info-second-bigger">
                  <p class="static__advt-car-info-second-price static__advt-car-info-second-price-bigger">7 150
                    $</p>
                  <p class="static__advt-car-info-second-mileage static__advt-car-info-second-mileage-bigger">
                    &nbsp;
                    &#8226; 207 тис. км</p>
                  <p class="static__advt-car-info-second-town static__advt-car-info-second-town-bigger"> &nbsp;
                    &#8226;
                    Рівне</p>
                </div>
              </div>
            </div>
            <div class="static__advt-car">
              <img src="./../assets/img/nissan-maxima.webp" alt="" class="static__advt-car-img">
              <div class="static__advt-car-info">
                <div class="static__advt-car-info-first">
                  <p class="static__advt-car-info-first-brand blue">Nissan</p>
                  <p class="static__advt-car-info-first-model blue">&nbsp;Maxima</p>
                  <p class="static__advt-car-info-first-year blue">&nbsp;2005</p>
                </div>
                <div class="static__advt-car-info-second">
                  <p class="static__advt-car-info-second-price">4 900 $</p>
                  <p class="static__advt-car-info-second-mileage"> &nbsp; &#8226; 197 тис. км</p>
                </div>
              </div>
            </div>
            <div class="static__advt-car">
              <img src="./../assets/img/nissan-murano.webp" alt="" class="static__advt-car-img">
              <div class="static__advt-car-info">
                <div class="static__advt-car-info-first">
                  <p class="static__advt-car-info-first-brand blue">Nissan</p>
                  <p class="static__advt-car-info-first-model blue">&nbsp;Murano</p>
                  <p class="static__advt-car-info-first-year blue">&nbsp;2017</p>
                </div>
                <div class="static__advt-car-info-second">
                  <p class="static__advt-car-info-second-price">11 950 $</p>
                  <p class="static__advt-car-info-second-mileage"> &nbsp; &#8226; 140 тис. км</p>
                </div>
              </div>
            </div>
            <div class="static__advt-car">
              <img src="./../assets/img/toyota-corolla.webp" alt="toyota-corolla" class="static__advt-car-img">
              <div class="static__advt-car-info">
                <div class="static__advt-car-info-first">
                  <p class="static__advt-car-info-first-brand blue">Toyota</p>
                  <p class="static__advt-car-info-first-model blue">&nbsp;Corolla</p>
                  <p class="static__advt-car-info-first-year blue">&nbsp;2008</p>
                </div>
                <div class="static__advt-car-info-second">
                  <p class="static__advt-car-info-second-price">6 250 $</p>
                  <p class="static__advt-car-info-second-mileage"> &nbsp; &#8226; 171 тис. км</p>
                </div>
              </div>
            </div>
            <div class="static__advt-car">
              <img src="./../assets/img/xray.webp" alt="xray" class="static__advt-car-img">
              <div class="static__advt-car-info">
                <div class="static__advt-car-info-first">
                  <p class="static__advt-car-info-first-brand blue">Lada</p>
                  <p class="static__advt-car-info-first-model blue">&nbsp;XRay</p>
                  <p class="static__advt-car-info-first-year blue">&nbsp;2021</p>
                </div>
                <div class="static__advt-car-info-second">
                  <p class="static__advt-car-info-second-price">10 817 $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="static__line"></div>
    </div>

    <VideoSlider/>
    <CarCategories/>
    <Recommendations/>
    <MarketSlider/>
    <News/>
    <Community/>
    <CarCatalog/>
    <div class="info">
      <div class="container">
        <div class="info__ria">
          <p>AUTO.RIA - найбільш великий авто базар України серед всіх вітчизняних сайтів подібного роду. У намірі
            допомогти як покупцям транспортних засобів, так і бажаючим їх продати, ми розробили зручний і масштабний
            ресурс, представлений у вигляді дошки онлайн-оголошень.</p>
        </div>
      </div>
    </div>
    <SocialBlock/>
    <Footer/>
  </div>
</template>

<script>
import Header from "../layouts/Header";
import HeaderCategories from "../layouts/HeaderCategories";
import FilterBlock from "./../components/FilterBlock";
import CarCategories from "./../components/CarCategories";
import CarCatalog from "../components/CarCatalogUsed";
import Footer from "../layouts/Footer";
import SocialBlock from "../components/SocialBlock";
import Community from "../components/Community";
import VideoSlider from "../components/Sliders/VideoMessageSlider";
import Recommendations from "../components/Recommendations";
import News from "../components/NewsBlock";
import MarketSlider from "../components/Sliders/MarketSlider";

export default {
  name: 'mainPage',
  title: 'AUTO.RIA™ — Автобазар №1. Купити і продати авто легко як ніколи',
  components: {
    Header,
    HeaderCategories,
    FilterBlock,
    CarCategories,
    CarCatalog,
    Footer,
    SocialBlock,
    Community,
    VideoSlider,
    Recommendations,
    News,
    MarketSlider
  },
  computed: {},
}
</script>

<style lang="scss">
.advertising {
  width: 94rem;
  padding-top: 1.5rem;
}

.static {
  &__line {
    border-top: .1rem solid #e0e3e4;
    margin-top: 1.8rem;
  }

  &__advt {
    padding-top: 2rem;

    &-cars {
      display: grid;
      grid-template-columns: 45.8rem 22rem 22rem;
      grid-template-rows: 18rem 18rem;
      grid-column-gap: 2rem;
      grid-row-gap: 1.5rem;
    }

    &-car:first-child {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;

      img {
        width: 46rem;
        height: 29rem;
      }
    }

    &-car {
      &-img {
        width: 22rem;
        height: 14rem;
        object-fit: cover
      }

      &-info {
        &-first {
          display: flex;

          &-bigger {
            padding-top: 0.5rem;
          }

          &-brand {
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;

            &-bigger {
              font-size: 1.9rem;
              line-height: 2rem;
            }
          }

          &-model {
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;

            &-bigger {
              font-size: 1.9rem;
              line-height: 2rem;
            }
          }

          &-year {
            font-size: 1.4rem;
            line-height: 1.5rem;

            &-bigger {
              font-size: 1.9rem;
              line-height: 2rem;
            }
          }
        }

        &-second {
          padding-top: .5rem;
          display: flex;

          &-bigger {
            padding-top: 1rem;
            display: flex;
            justify-content: space-between;
            width: 23.8rem;
          }

          &-price {
            color: #56a83b;
            font-family: Arial-Bold, sans-serif;
            font-size: 1.5rem;
            line-height: 1.5rem;
            font-weight: 700;

            &-bigger {
              font-size: 2.6rem;
              line-height: 2rem;
            }
          }

          &-mileage {
            font-size: 1.4rem;
            color: #504f51;
            line-height: 1.5rem;

            &-bigger {
              font-size: 1.4rem;
              line-height: 1.5rem;
              display: flex;
              align-self: flex-end;
            }
          }

          &-town {
            font-size: 1.4rem;
            color: #504f51;
            line-height: 1.5rem;

            &-bigger {
              font-size: 1.4rem;
              line-height: 1.5rem;
              display: flex;
              align-self: flex-end;
            }
          }
        }
      }
    }
  }

  &__items {
    padding-top: .7rem;
    position: relative;

    &-more {
      color: #266799;
      width: 8.8rem;
      font-size: 1.4rem;
      line-height: 1.5rem;
      margin-top: 1.4rem;
      cursor: pointer;
      border-bottom: .1rem dotted #266799;

      &:hover {
        border-bottom: .1rem solid #266799;
      }
    }

    &-more:after {
      content: '';
      position: absolute;
      left: 9.2rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #266799;
      top: 7.9rem;
    }

    &-row {
      display: flex;
      margin-top: 1rem;

      &-text {
        color: #266799;
        font-size: 1.4rem;
        line-height: 1.5rem;
      }

      &-btn {
        background: #db5c4c;
        margin-left: 0.7rem;
        border-radius: 5rem;
        color: white;
        height: 1.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0.9rem;
      }
    }

  }

  &__search {
    padding-top: 1.3rem;

    &-item {
      padding: 0;
      display: flex;
      width: 14rem;
      justify-content: space-between;

      div {
        font-size: 2rem;
        display: flex;
        align-self: center;
        color: #898989;
        height: 2rem;
      }
    }

    &-block {
      display: flex;
      width: 69rem;
      justify-content: space-between;
      height: 1.5rem;

      :nth-child(2) {
        width: 14rem !important;
      }

      :last-child {
        width: 28rem !important;
      }
    }

    &-last {
      color: #5f4f40;
      font-size: 1.6rem;
      line-height: 1.7rem;
      width: 13.3rem;
    }

    &-text {
      color: #5f4f40;
      font-size: 1.6rem;
      line-height: 1.7rem;
    }

    span {
      font-family: Arial-Bold, sans-serif;
      width: 1rem;
      padding-left: 0.9rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
}



.info {
  &__ria {
    padding-top: 1rem;
    font-size: 1.3rem;
    line-height: 1.56rem;
    width: 95rem;

    p {
      color: #9DA6AA;
    }
  }
}


</style>
