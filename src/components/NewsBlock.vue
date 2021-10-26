<template>
  <div>
    <div class="news-block">
      <div class="container">
        <div class="news-block__items">
          <a href="https://auto.ria.com/uk/news/" class="news-block__item ">Автомобільні новини</a>
          <a href="https://auto.ria.com/uk/news/test-drive/" class="news-block__item">Тест-драйви</a>
          <a href="https://auto.ria.com/uk/news/journals/" class="news-block__item">Журнал</a>
          <a href="https://auto.ria.com/uk/car-spring/" class="news-block__item">Як підготувати авто до весни</a>
          <a href="https://auto.ria.com/uk/news/actions/" class="news-block__item">Акції</a>
          <a href="https://auto.ria.com/uk/news/test-drive/" class="news-block__item">Огляди</a>
          <a href="https://autoleader.ria.com/uk/" class="news-block__item">Премія «Авто Лідер» 2021</a>
        </div>
        <div class="news-block__blocks">
          <div class="news-block__column">
            <div class="news-block__block">
              <a href="https://auto.ria.com/uk/journals/453/">
                <img src="./../assets/img/outlander.webp" alt="outlander"
                     class="news-block__block-img news-block__block-img-outlander">
              </a>
              <p class="news-block__block-data">23 липня 2021</p>
            </div>
            <div class="news-block__block">
              <div class="news-block__block-rows">
                <div class="news-block__block-row">
                  <img src="./../assets/img/top-20-bmw.webp" alt="bmw"
                       class="news-block__block-row-img news-block__block-row-img-bmw" width='147;' height='87;'>
                  <a href="https://auto.ria.com/uk/news-block/topnews-block/254522/chto-mozhno-kupit-sejchas-za-5000.html"
                     class="news-block__block-row-text">
                    Що можна купити зараз, маючи $5000? <span>Сьогодні</span>
                  </a>
                </div>
                <div class="news-block__block-row">
                  <img src="./../assets/img/cruiser-300.webp" alt="cruiser"
                       class="news-block__block-row-img news-block__block-row-img-cruiser">
                  <a href="https://auto.ria.com/uk/news-block/auto/254572/toyota-obyavila-ukrainskie-czeny-na-land-cruiser-300-chto-pochem.html"
                     class="news-block__block-row-text">
                    Toyota оголосила українські ціни на Land Cruiser 300. Скільки? <span>Сьогодні</span>
                  </a>
                </div>
                <a href="https://auto.ria.com/uk/news-block/compares/254549/chto-vybrat-hyundai-kona-protiv-volkswagen-t-roc.html"
                   class="news-block__block-row">
                  <img src="./../assets/img/hyundai-role.webp" alt="hyundai"
                       class="news-block__block-row-img news-block__block-row-img-hyundai">
                  <p class="news-block__block-row-text">
                    Що вибрати? Hyundai Kona чи Volkswagen T-Roc<span>Вчора</span>
                  </p>
                </a>
                <div class="news-block__block-row">
                  <a href="https://auto.ria.com/uk/news-block/" class="news-block__block-row-more">Читати більше новин </a>
                </div>
              </div>
            </div>
          </div>

          <div class="news-block__column">
            <div class="news-block__block">
              <a href="https://auto.ria.com/uk/news-block/test-drive/254492/test-drajv-hyundai-tucson-hybrid-pritvorilsya-elektromobilem.html">
                <img src="./../assets/img/suzuki.webp" alt="suzuki" class="news-block__block-img news-block__block-img-suzuki">
              </a>
            </div>
            <div class="news-block__block">
              <div class="news-block__block-imgs">
                <a href="https://auto.ria.com/uk/news-block/test-drive/254336/test-drajv-volkswagen-golf-viii-shire-shag.html">
                  <img src="./../assets/img/vw.webp" alt="vw" class="news-block__block-img news-block__block-img-vw">
                </a>
                <a href="https://auto.ria.com/uk/news-block/test-drive/254381/test-drajv-renault-express-pod-novym-imenem.html">
                  <img src="./../assets/img/renault.webp" alt="renault" class="news-block__block-img news-block__block-img-renault">
                </a>
              </div>
              <a href="https://auto.ria.com/uk/news-block/test-drive/" class="news-block__block-row-another link-underline">Дивитись
                інші тест-драйви</a>
            </div>
          </div>
        </div>
        <div class="news-block__line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News"
}
</script>

<style lang="scss">
.news-block {
  &__line {
    border-top: 1px solid #e0e3e4;
    margin-top: 1.1rem;
    z-index: 1;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    width: 89.5%;
    padding-top: 2rem;
    padding-bottom: .8rem;
  }

  &__item {
    color: #256799;
    font-size: 1.5rem;
    line-height: 1.5rem;
    &:first-child {
      font-family: Arial-Bold, sans-serif;
      font-weight: 700;
    }
    &:before {
      border: none !important;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  &__blocks {
    padding-top: 1rem;
    width: 100%;
    height: 61rem;
    display: flex;
    justify-content: space-between;
  }

  &__column {
    display: flex;
    flex-direction: column;
  }

  &__block {
    width: 46rem;

    &-rows {
      padding-top: 1.3rem;
    }

    &-imgs {
      padding-top: 1.3rem;
      display: flex;
      width: 46rem;
      justify-content: space-between;
    }

    &-img {
      &-outlander {
        width: 46rem;
      }

      &-suzuki {
        width: 46rem;
      }

      &-renault {
        width: 22rem;
      }

      &-vw {
        width: 22rem;
      }
    }

    &-data {
      padding: 0.6rem 0 0 .8rem;
      font-size: 1.2rem;
      color: #767676;;
    }

    &-row {
      display: flex;
      padding-bottom: 1.8rem;

      &-img {

        &-cruiser {
          width: 14rem;
        }

        &-hyundai {
          width: 14rem;
        }
      }

      &-text {
        color: #317ac5;
        font-size: 1.7rem;
        padding-left: 1rem;
        line-height: 1.9rem;

        span {
          font-size: 1.2rem;
          line-height: 1.5rem;
          padding-left: .8rem;
          color: #767676;
        }

        &:hover {
          text-decoration: underline;
        }

        &:hover span {
          text-decoration: none;
          display: inline-block;
        }
      }

      &-more {
        color: #317ac5;
        position: relative;
        font-size: 1.47rem;
        line-height: 1.9rem;
        padding-top: .3rem;

        &:hover {
          border-bottom: 1px solid #256799;
        }

        &:after {
          content: '→';
          position: absolute;
          padding-left: 0.8rem;
          top: 0.2rem;
        }
      }

      &-another {
        color: #317ac5;
        position: relative;
        font-size: 1.47rem;
        line-height: 1.9rem;
        width: 20rem;
        top: .7rem;

        &:after {
          content: '→';
          position: absolute;
          padding-left: 0.2rem;
          left: 18.5rem;
        }
      }
    }
  }
}
</style>
