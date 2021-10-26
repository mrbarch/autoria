<template>
  <div>
    <header>
      <div class="container">
        <div class="header__menu">
          <ul class="header__menu-list">
            <li><a href="#">RIA.com</a></li>
            <li><a href="#">Автомобілі</a></li>
            <li><a href="#">Нерухомість</a></li>
            <li><a href="#">Автотовари</a></li>
            <li><a href="#">Автозапчастини</a></li>
          </ul>
          <div class="header__menu-right">
            <a href="https://chrome.google.com/webstore/search/colorpicker?hl=ru" class="header__menu-right-favorites">
              <svg xmlns="http://www.w3.org/2000/svg" id="svg-header_favorite" viewBox="0 0 19 19" width="100%"
                   height="100%">
                <path fill="#7A7A7A"
                      d="M9.5,2.1l2.2,4.5l0.2,0.5l0.5,0.1l4.9,0.7l-3.6,3.5l-0.4,0.4l0.1,0.5l0.8,4.9L10,14.8l-0.5-0.2L9,14.8l-4.4,2.3l0.8-4.9l0.1-0.5l-0.4-0.4L1.6,7.8l4.9-0.7l0.5-0.1l0.2-0.5L9.5,2.1M9.5.5c-0.2,0-0.3,0.1-0.4,0.2L6.4,6.1L0.4,7C0.1,7,0,7.3,0,7.5c0,0.1,0.1,0.2,0.1,0.3L4.5,12l-1,6c0,0.3,0.1,0.5,0.4,0.5c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0l5.4-2.8l5.4,2.8c0.1,0,0.1,0.1,0.2,0c0.2,0,0.5-0.2,0.5-0.4c0,0,0-0.1,0-0.1l-1-6l4.3-4.2c0.2-0.2,0.2-0.5,0-0.7C18.8,7.1,18.7,7,18.6,7l-6-0.9L9.9,0.7C9.8,0.5,9.7,0.5,9.5,0.5z"/>
              </svg>
            </a>
            <a href="https://chrome.google.com/webstore/search/colorpicker?hl=ru" class="header__menu-right-notice">
              <svg xmlns="http://www.w3.org/2000/svg" id="svg-header_notice" viewBox="0 0 19 19">
                <path fill="#7A7A7A"
                      d="M15,10c-2-2-2-3-2-6c0-0.7-0.4-1.4-1-1.7C11.9,1,10.8,0,9.5,0S7.1,1,7,2.3C6.4,2.6,6,3.3,6,4c0,3,0,4-2,6c-1,1-2,2-2,3c0,2,2,3,6,3h3c4,0,6-1,6-3C17,12,16,11,15,10z M9.5,1c0.7,0,1.2,0.4,1.4,1H8.1C8.3,1.4,8.8,1,9.5,1z M11,15H8c-3.3,0-5-0.7-5-2c0-0.6,0.9-1.5,1.7-2.3C7,8.4,7,7,7,4c0-0.6,0.4-1,1-1h3c0.6,0,1,0.5,1,1c0,3,0,4.4,2.3,6.7c0.8,0.8,1.7,1.7,1.7,2.3C16,14.3,14.3,15,11,15z"/>
                <path fill="#7A7A7A"
                      d="M9.5,18c-0.7,0-1.2-0.4-1.4-1h-1c0.2,1.1,1.2,2,2.4,2s2.2-0.9,2.4-2h-1C10.7,17.6,10.2,18,9.5,18z"/>
              </svg>
            </a>
            <a href="https://chrome.google.com/webstore/search/colorpicker?hl=ru" class="header__menu-right-person">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" id="svg-header_person">
                <path fill="#CCCCCC"
                      d="M15.5,0C6.9,0,0,6.9,0,15.5S6.9,31,15.5,31S31,24.1,31,15.5S24.1,0,15.5,0z M15.5,1C23.5,1,30,7.5,30,15.5c0,2.9-0.9,5.6-2.3,7.9c-0.1-0.1-0.2-0.2-0.3-0.2l-6.8-3.4c-0.2-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.6,0.1-0.8,0.4c-1,1.1-2.4,1.9-3.7,1.9c-1.2,0-2.7-0.8-3.7-1.9c-0.2-0.2-0.5-0.4-0.8-0.4c-0.2,0-0.3,0-0.5,0.1l-6.8,3.4c-0.1,0.1-0.2,0.1-0.3,0.2c-1.5-2.3-2.3-5-2.3-7.9C1,7.5,7.5,1,15.5,1z M15.5,30c-4.7,0-8.8-2.2-11.5-5.7v-0.1c0-0.1,0-0.1,0.1-0.1l6.8-3.4c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c1.2,1.3,3,2.2,4.4,2.2c1.5,0,3.2-0.9,4.4-2.2c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0l6.8,3.4c0,0,0.1,0.1,0.1,0.1v0.1C24.3,27.8,20.2,30,15.5,30z"/>
                <path fill="#CCCCCC"
                      d="M15.5,19.6c1.7,0,3.1-1.2,4.1-2.6c0.9-1.4,1.6-3.4,1.6-5.3c0-2-0.7-3.5-1.8-4.4C18.2,6.3,16.8,6,15.5,6s-2.7,0.3-3.9,1.3c-1.2,1-1.8,2.4-1.8,4.4c0,1.9,0.7,3.9,1.6,5.3C12.4,18.4,13.8,19.6,15.5,19.6z M12.3,8c1-0.8,2.3-1,3.2-1s2.2,0.2,3.2,1c1,0.8,1.5,2,1.5,3.6c0,1.6-0.6,3.4-1.4,4.8c-0.4,0.7-1.6,2.2-3.2,2.2s-2.8-1.5-3.2-2.2c-0.9-1.3-1.4-3.2-1.4-4.8C10.8,10.1,11.3,8.8,12.3,8z"/>
              </svg>
              <router-link to="/login" class="header__menu-right-person-text">Особистий кабінет</router-link>
            </a>
            <a class="header__menu-right-languages">
              <p class="header__menu-right-languages-rus">Рус</p>
              <p class="header__menu-right-languages-ua">Укр</p>
            </a>
          </div>

        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

header {
  background: #f0f2fb;
  height: 4rem;
}

#svg-header_notice {
  width: 1.9rem;
}

#svg-header_favorite {
  width: 1.9rem;
}

#svg-header_person {
  width: 3.1rem;
}

.header {
  &__menu {
    display: flex;
    justify-content: space-between;
    height: 4rem;
    width: 94rem;

    &-list {
      display: flex;
      justify-content: space-between;
      width: 49rem;
      padding-top: 1.3rem;

      li {
        a {
          font-size: 1.5rem;
          line-height: 1.8rem;
          color: #4b4b4d;

          &:hover {
            border-bottom: .1rem solid black;
          }
        }
      }
    }

    &-right {
      width: 31.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-favorites {
        svg {
          width: 2rem;
          padding-top: 1rem;
        }
      }

      &-notice {
        height: 2rem;

        svg {
          width: 9.8rem;
        }
      }

      &-person {
        display: flex;
        justify-content: space-between;
        width: 15.4rem;

        &-img {
          width: 3.1rem;
          padding-top: .4rem;

          &:hover path {
            fill: #cfcfd1;
          }
        }

        &-text {
          display: flex;
          align-self: center;
          font-size: 1.3rem;
          line-height: 1.5rem;
          color: #4b4b4d;

          &:hover {
            border-bottom: 1px solid #4b4b4d;
          }
        }
      }

      &-languages {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 5rem;

        p {
          font-size: 1.37rem;
          line-height: 1.5rem;
          color: #4b4b4d;
        }
      }
    }
  }
}
</style>
