<template>
  <div>
    <div class="menu">
      <div class="container">
        <div class="menu__list">
          <div class="menu__list-info">
            <a href="/"><img src="../assets/img/logo.png" alt="logo" class="menu__list-logo"></a>
            <ul class="menu__list-items">
              <li><a href="#">Вживані авто</a></li>
              <li><router-link to="/newauto">Нові авто</router-link></li>
              <li><a href="#">Новини</a></li>
              <li><a id="dropdown" href="#">Все для авто
                <div class="dropdown dropdown__wrapper">
                  <div class="dropdown__title">
                    Ремонт авто
                  </div>
                  <ul class="dropdown__list">
                    <li><a href="#">Каталог авто <span>(+100)</span></a></li>
                    <li><a href="#">Каталог авторозбірок <span>(800+)</span></a></li>
                    <li><a href="#">Автозапчастини на RIA.com<span>(1 000 000+)</span></a></li>
                    <li><a href="#">Стіл замовлення запчастин</a></li>
                  </ul>
                  <div class="dropdown__title">
                    Послуги для авто
                  </div>
                  <ul class="dropdown__list">
                    <li><a href="#">16 видів перевірок на AUTO.RIA</a></li>
                    <li><a href="#">Каталог автомийок</a></li>
                    <li><a href="#">Автовикуп</a></li>
                    <li><a href="#">Перевірені авто на AUTO.RIA</a></li>
                    <li><a href="#">Підрахунок середньої ціни на авто</a></li>
                    <li><a href="#">Митний калькулятор</a></li>
                  </ul>
                  <div class="dropdown__title">
                    Пошук авто та автотоварів
                  </div>
                  <ul class="dropdown__list">
                    <li><a href="#">Авто з пробігом від Автодилерів</a></li>
                    <li><a href="#">Авто з-за кордону</a></li>
                    <li><a href="#">Відгуки про авто<span>(105 000+)</span></a></li>
                    <li><a href="#">Товари для авто<span>(94 000+)</span></a></li>
                  </ul>
                </div>
              </a></li>
            </ul>
          </div>
          <button class="menu__list-btn">
            <svg viewBox="0 0 30 30">
              <path fill="#FFFFFF"
                    d="M16,7h-5V2c0-1.1-0.9-2-2-2S7,0.9,7,2v5H2C0.9,7,0,7.9,0,9s0.9,2,2,2h5v5c0,1.1,0.9,2,2,2s2-0.9,2-2v-5h5 c1.1,0,2-0.9,2-2S17.1,7,16,7z"></path>
            </svg>
            Продати авто
          </button>
        </div>
      </div>
    </div>
    <RandomPhrase/>
  </div>
</template>

<script>
import RandomPhrase from "../components/Phrase";

export default {
  name: 'MainPageHeader',
  components: {
    RandomPhrase
  }
}

</script>

<style lang="scss">
#dropdown, .menu__list-items :hover .dropdown__wrapper {
  opacity: 1;
  visibility: visible;
}

.menu {
  &__list {
    display: flex;
    justify-content: space-between;

    &-info {
      display: flex;
      justify-content: space-between;
      width: 62rem;
    }

    &-logo {
      width: 16rem;
      padding-top: 0.7rem;
    }

    &-items {
      display: flex;
      justify-content: space-between;
      width: 43rem;
      align-items: center;

      li {
        font-size: 1.75rem;
        line-height: 2.2rem;
        border-bottom: .15rem solid #414042;
        #dropdown {
          position: relative;
          &:before {
            content: "";
            width: 13rem;
            height: 5rem;
            top: 1rem;
            position: absolute;
            cursor: pointer;
          }
        }
        &:hover {
          border-bottom: .15rem solid #DB5C4C;
        }

        a {
          &:hover {
            color: #DB5C4C;
          }
        }
      }
    }

    &-items:after {
      content: "";
      position: absolute;
      top: 7.6rem;
      right: 54.8rem;
      width: 0;
      height: 0;
      border-color: #414042 transparent transparent;
      border-style: solid;
      border-width: .6rem .6rem 0;
    }

    &-btn {
      background-color: #79be00;
      border: none;
      border-radius: .5rem .5rem;
      margin-top: 1.5rem;
      height: 4.8rem;
      width: 22rem;
      color: #ffffff;
      font-size: 1.8rem;
      padding-left: 2rem;
      position: relative;
      &:hover {
        background-color: #84ca08;
      }
    }

    &-btn svg {
      width: 3rem;
      height: 3rem;
      position: absolute;
      left: 4rem;
      top: 1.7rem;
    }
  }
}

.dropdown__wrapper {
  display: block!important;
  height: 64rem;
  width: 32rem;
  position: absolute;
  top: 6rem;
  background-color: #fff;
  z-index: 10;
  border: .1rem solid #eff2f3;
  padding: 1.5rem 1.5rem 0;
  font-size: 1.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all .2s;

  &:before {
    content: "";
    position: absolute;
    top: -6px;
    left: 120px;
    width: 10px;
    height: 10px;
    -webkit-transform: rotate(
            -45deg
    );
    -ms-transform: rotate(-45deg);
    transform: rotate(
            -45deg
    );
    border: solid #eff2f3;
    border-width: 1px 1px 0 0;
    background-color: #fff;
  }
}

.dropdown {

  &__title {
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: #818181;
  }

  &__list {
    margin-bottom: 1.8rem;

    li {
      margin-top: 1rem;
      border-bottom: none !important;

      span {
        color: #9da6aa;
      }

      a {
        color: #256799 !important;

        &:hover {
          border-bottom: .1rem solid #256799;
          color: #256799;
        }
      }
    }
  }
}
</style>
