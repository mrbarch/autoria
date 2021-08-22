<template>
  <div id="app">
    <Header/>
    <HeaderCategories/>
    <FilterBlock/>
    <div class="static">
      <div class="container">
        <a href="#"><img src="./../assets/img/front-prom.png" alt="add" class="advertising"></a>
        <div class="static__search">
          <div class="static__search-block">
            <p class="static__search-last">Останні пошуки</p>
            <div class="static__search-item">
              <div>&#8226; &nbsp; &nbsp;</div>
              <p class="static__search-text">за годину <span>+ 700</span></p>
            </div>
            <div class="static__search-item">
              <div>&#8226; &nbsp; &nbsp;</div>
              <p class="static__search-text">за день <span>+ 3 988</span></p>
            </div>
            <div class="static__search-item">
              <div>&#8226; &nbsp;</div>
              <p class="static__search-text">перевірено по VIN-коду <span>+ 124 469</span></p>
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
          <div class="static__items-more">Показати ще</div>
        </div>
        <div class="static__advt">
          <div class="static__advt-cars">

            <div class="static__advt-car">
              <img src="./../assets/img/mazda_5__406563896fx.webp" alt="" class="static__advt-car-img">
              <div class="static__advt-car-info">
                <div class="static__advt-car-info-first static__advt-car-info-first-bigger">
                  <p class="static__advt-car-info-first-brand static__advt-car-info-first-brand-bigger">Mazda</p>
                  <p class="static__advt-car-info-first-model static__advt-car-info-first-model-bigger">&nbsp;5</p>
                  <p class="static__advt-car-info-first-year static__advt-car-info-first-year-bigger">&nbsp;2011</p>
                </div>
                <div class="static__advt-car-info-second static__advt-car-info-second-bigger">
                  <p class="static__advt-car-info-second-price static__advt-car-info-second-price-bigger">7 150 $</p>
                  <p class="static__advt-car-info-second-mileage static__advt-car-info-second-mileage-bigger"> &nbsp;
                    &#8226; 207 тис. км</p>
                  <p class="static__advt-car-info-second-town static__advt-car-info-second-town-bigger"> &nbsp; &#8226;
                    Рівне</p>
                </div>
              </div>
            </div>

            <div class="static__advt-car">
              <img src="./../assets/img/nissan-maxima.webp" alt="" class="static__advt-car-img">
              <div class="static__advt-car-info">
                <div class="static__advt-car-info-first">
                  <p class="static__advt-car-info-first-brand">Nissan</p>
                  <p class="static__advt-car-info-first-model">&nbsp;Maxima</p>
                  <p class="static__advt-car-info-first-year">&nbsp;2005</p>
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
                  <p class="static__advt-car-info-first-brand">Nissan</p>
                  <p class="static__advt-car-info-first-model">&nbsp;Murano</p>
                  <p class="static__advt-car-info-first-year">&nbsp;2017</p>
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
                  <p class="static__advt-car-info-first-brand">Toyota</p>
                  <p class="static__advt-car-info-first-model">&nbsp;Corolla</p>
                  <p class="static__advt-car-info-first-year">&nbsp;2008</p>
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
                  <p class="static__advt-car-info-first-brand">Lada</p>
                  <p class="static__advt-car-info-first-model">&nbsp;XRay</p>
                  <p class="static__advt-car-info-first-year">&nbsp;2021</p>
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

    <div class="video">
      <div class="container">
        <div class="video__message">
          <div class="video__message-text">
            <div class="video__message-text-left">
              <p class="video__message-text-new">NEW !</p>
              <div class="video__message-text-category">
                <img src="./../assets/svg/video.svg" alt="" class="video__message-text-category-img">
                <p class="video__message-text-category-title">Відеоповідомлення</p>
              </div>
              <p class="video__message-text-slogan">Переглядай авто онлайн</p>
            </div>
            <div class="video__message-text-right">
              <p class="video__message-text-more">Як це працює</p>
            </div>
          </div>
          <div class="video__message-cars">

            <div class="video__message-car">
              <img src="./../assets/img/mercedes-benz-sprinter.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand">Mercedes-Benz</p>
                  <p class="video__message-car-info-first-model">&nbsp;Sprinter</p>
                  <p class="video__message-car-info-first-year">&nbsp;518</p>
                </div>
                <div class="video__message-car-info-second">
                  <p class="video__message-car-info-second-price">26 500 $</p>
                  <p class="video__message-car-info-second-mileage"> &nbsp; &#8226; 267 тис. км</p>
                </div>
              </div>
            </div>

            <div class="video__message-car">
              <img src="./../assets/img/vaz-21099.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand">ВАЗ</p>
                  <p class="video__message-car-info-first-model">&nbsp;21099</p>
                  <p class="video__message-car-info-first-year">&nbsp;2007</p>
                </div>
                <div class="video__message-car-info-second">
                  <p class="video__message-car-info-second-price">3 499 $</p>
                  <p class="video__message-car-info-second-mileage"> &nbsp; &#8226; 150 тис. км</p>
                </div>
              </div>
            </div>

            <div class="video__message-car">
              <img src="./../assets/img/chevrolet-evanda.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand">Chevrolet</p>
                  <p class="video__message-car-info-first-model">&nbsp;Evanda</p>
                  <p class="video__message-car-info-first-year">&nbsp;2005</p>
                </div>
                <div class="video__message-car-info-second">
                  <p class="video__message-car-info-second-price">4 800 $</p>
                  <p class="video__message-car-info-second-mileage"> &nbsp; &#8226; 204 тис. км</p>
                </div>
              </div>
            </div>

            <div class="video__message-car">
              <img src="./../assets/img/kia-optima.webp" alt="" class="video__message-car-img">
              <div class="video__message-car-info">
                <div class="video__message-car-info-first">
                  <p class="video__message-car-info-first-brand">Kia</p>
                  <p class="video__message-car-info-first-model">&nbsp;Optima</p>
                  <p class="video__message-car-info-first-year">&nbsp;2016</p>
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
    <CarCategories/>
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
    <div class="mobile">
      <div class="container">
        <div class="mobile__version">
          <div class="mobile__version-download">
            <div class="mobile__version-download-title">
              AUTO.RIA <br>
              у вашому смартфоні
            </div>
            <div class="mobile__version-download-subtitle">
              Все для купівлі та продажу авто в додатку AUTO.RIA
            </div>
            <div class="mobile__version-download-btns">
              <div class="mobile__version-download-apple">
                <a>
                  <img src="./../assets/svg/socials-btn/apple/logo.svg" class="mobile__version-download-apple-logo"
                       alt="logo">
                  <div class="mobile__version-download-apple-text">
                    <img src="./../assets/svg/socials-btn/apple/title.svg"
                         class="mobile__version-download-apple-text-title" alt="logo">
                    <img src="./../assets/svg/socials-btn/apple/subtitle.svg"
                         class="mobile__version-download-apple-text-subtitle" alt="logo">
                  </div>
                </a>
              </div>

              <div class="mobile__version-download-google-play">
                <a>
                  <img src="./../assets/svg/socials-btn/google-play/logo.svg"
                       class="mobile__version-download-google-play-logo" alt="logo">
                  <div class="mobile__version-download-google-play-text">
                    <img src="./../assets/svg/socials-btn/google-play/title.svg"
                         class="mobile__version-download-google-play-text-title" alt="logo">
                    <img src="./../assets/svg/socials-btn/google-play/subtitle.svg"
                         class="mobile__version-download-google-play-text-subtitle" alt="logo">
                  </div>
                </a>
              </div>

              <div class="mobile__version-download-app-gallery">
                <a>
                  <img src="./../assets/svg/socials-btn/app-gallery/logo.svg"
                       class="mobile__version-download-app-gallery-logo" alt="logo">
                  <div class="mobile__version-download-app-gallery-text">
                    <img src="./../assets/svg/socials-btn/app-gallery/title.svg"
                         class="mobile__version-download-app-gallery-text-title" alt="logo">
                    <img src="./../assets/svg/socials-btn/app-gallery/subtitle.svg"
                         class="mobile__version-download-app-gallery-text-subtitle" alt="logo">
                  </div>
                </a>
              </div>
            </div>
          </div>
          <img src="./../assets/img/mobile-ria.webp" alt="mobile" class="mobile__version-img">
          <div class="mobile__version-socials">
            <p class="mobile__version-socials-title">Приєднуйтесь до спільноти автолюбителів AUTO.RIA</p>
            <div class="mobile__version-socials-btns">
              <a href="#" class="mobile__version-socials-btns-facebook">
                <img src="./../assets/img/facebook-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-instagram">
                <img src="./../assets/img/instagram-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-yt">
                <img src="./../assets/img/yt-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-twitter">
                <img src="./../assets/img/twitter-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-telegram">
                <img src="./../assets/img/telegram-bg.png" alt="" class="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/Header";
import HeaderCategories from "./../components/HeaderCategories";
import FilterBlock from "./../components/FilterBlock";
import CarCategories from "./../components/CarCategories";
import CarCatalog from "../components/CarCatalog";
import Footer from "../components/Footer";

export default {
  name: 'mainPage',
  components: {
    Header,
    HeaderCategories,
    FilterBlock,
    CarCategories,
    CarCatalog,
    Footer,
  }
}
</script>

<style lang="scss">
.advertising {
  width: 94rem;
  padding-top: 2rem;
}

.static {
  &__line {
    border-top: .1rem solid #e0e3e4;
    margin-top: 1.8rem;
  }

  &__advt {
    padding-top: 2.2rem;

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
            padding-top: 1rem;
          }

          &-brand {
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;

            &-bigger {
              font-size: 1.9rem;
              line-height: 2rem;
            }
          }

          &-model {
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;

            &-bigger {
              font-size: 1.9rem;
              line-height: 2rem;
            }
          }

          &-year {
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;

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
          }

          &-price {
            color: #56a83b;
            font-family: Roboto-Bold, sans-serif;
            font-size: 1.5rem;
            line-height: 1.5rem;

            &-bigger {
              font-size: 2.6rem;
              line-height: 2rem;
            }
          }

          &-mileage {
            font-size: 1.4rem;
            color: #504f51;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;

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
            letter-spacing: 0.04rem;

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
    padding-top: .5rem;
    position: relative;

    &-more:before {
      border-bottom: .1rem dotted #266799;
      content: '';
      position: absolute;
      width: 8.8rem;
      padding-bottom: 1.5rem;
    }

    &-more {
      color: #266799;
      font-size: 1.4rem;
      line-height: 1.5rem;
      letter-spacing: 0.04rem;
      margin-top: 1.4rem;
    }

    &-more:after {
      content: '';
      position: absolute;
      left: 9.2rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #266799;
      top: 7.6rem;
    }

    &-row {
      display: flex;
      margin-top: 1rem;

      &-text {
        color: #266799;
        font-size: 1.4rem;
        line-height: 1.5rem;
        letter-spacing: 0.04rem;
      }

      &-btn {
        background: #db5c4c;
        margin-left: 0.5rem;
        border-radius: .8rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .3rem .9rem;
      }
    }

  }

  &__search {
    padding-top: 1.9rem;

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
      color: #266799;
      font-family: Roboto-Bold, sans-serif;
      width: 1rem;
      padding-left: 0.9rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

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
          letter-spacing: .03rem;
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
        letter-spacing: .03rem;
        color: #266799;
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
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;
          }

          &-model {
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;
          }

          &-year {
            color: #266799;
            font-size: 1.4rem;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;
          }
        }

        &-second {
          padding-top: .4rem;
          display: flex;

          &-price {
            color: #56a83b;
            font-family: Roboto-Bold, sans-serif;
            font-size: 1.5rem;
            line-height: 1.5rem;
          }

          &-mileage {
            font-size: 1.4rem;
            color: #504f51;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;
          }

          &-town {
            font-size: 1.4rem;
            color: #504f51;
            line-height: 1.5rem;
            letter-spacing: 0.04rem;
          }
        }
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

.mobile {
  background-color: #F3FAFD;
  margin-top: 1.8rem;
  display: flex;
  height: 25rem;

  &__version {
    display: flex;

    &-img {
      width: 26rem;
      padding: 3rem 0 0 2.4rem
    }

    &-download {
      &-title {
        font-size: 2.4rem;
        line-height: 3.12rem;
        font-weight: 700;
        color: #414042;
        letter-spacing: .09rem;
        padding-top: 3rem;
      }

      &-subtitle {
        color: #414042;
        font-size: 1.6rem;
        line-height: 1.92rem;
        padding-top: 1.1rem;
        width: 25rem;
      }

      &-btns {
        display: flex;
        padding-top: 2.6rem;
        width: 35rem;
        justify-content: space-between;
      }

      &-apple {
        a {
          height: 4rem;
          width: 11rem;
          display: flex;
          background-color: #000;
          justify-content: space-evenly;
          align-items: center;
          border-radius: .5rem;
        }

        &-logo {
          width: 1.6rem;
        }

        &-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 3rem;

          &-title {
            width: 5.6rem;
          }

          &-subtitle {

          }
        }
      }

      &-google-play {
        a {
          height: 4rem;
          width: 11rem;
          display: flex;
          background-color: #000;
          justify-content: space-evenly;
          align-items: center;
          border-radius: .5rem;
        }

        &-logo {
          width: 1.6rem;
        }

        &-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 3rem;
          padding-top: .1rem;

          &-title {
            width: 5.6rem;
          }

          &-subtitle {

          }
        }
      }

      &-app-gallery {
        a {
          height: 4rem;
          width: 11rem;
          display: flex;
          background-color: #000;
          justify-content: space-evenly;
          align-items: center;
          border-radius: .5rem;
        }

        &-logo {
          width: 2.4rem;
        }

        &-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 3rem;
          padding-right: 0.4rem;

          &-title {
            width: 4rem;
          }

          &-subtitle {
            padding-top: .3rem;
          }
        }
      }
    }

    &-socials {
      font-size: 1.6rem;
      line-height: 1.92rem;
      color: #414042;
      padding-left: 2.5rem;

      &-title {
        padding-top: 10.3rem;
      }

      &-btns {
        padding-top: 2.4rem;
        display: flex;
        align-items: center;
        a {
          img {
            padding: .7rem .8rem;
            border: .1rem solid #e0e3e4;
            border-radius: .5rem;
            margin-left: 1rem;
            width: 2.5rem;
          }
        }

        &-facebook {
          img {
            margin: 0 !important;
          }
        }

        &-instagram {

        }

        &-yt {
          img {
            position: relative;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
        }

        &-twitter {
          img {
            padding-top: 1.2rem !important;
            width: 2.5rem !important;
          }
        }

        &-telegram {
          position: relative;
          img {
            padding: 0.8rem !important;
            width: 2.4rem !important;
          }
        }
      }
    }
  }
}
</style>
