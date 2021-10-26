<template>
  <div>
    <div class="community">
      <div class="container">
        <p class="community__title">Приєднуйтесь до спільноти автолюбителів AUTO.RIA</p>
        <div class="community__blocks">
          <div class="community__col">
            <a href="https://www.youtube.com/user/AutoRiaUA"><img src="./../assets/img/yt.webp" alt="yt"
                                                                  class="community__col-yt">
              <img class="community__col-round-logo-checked" src="./../assets/img/round-logo-checked.png" alt="checked">
              <p class="community__col-text">AUTO.RIA.com</p>
              <span class="community__col-yt-btn">
                <svg data-tag="symbol" id="svg_social_s_youtube_btn" width="100%" height="100%" viewBox="0 0 24 24"><path
                    d="m21.22 17.798c-0.722 0.8536-2.0549 1.2018-4.6004 1.2018h-9.2404c-2.6038 0-3.9593-0.3707-4.6785-1.2794-0.70123-0.8861-0.70123-2.1917-0.70123-3.9986v-3.444c0-3.5006 0.832-5.278 5.3797-5.278h9.2404c2.2075 0 3.4307 0.30725 4.2221 1.0606 0.8115 0.77249 1.1578 2.0338 1.1578 4.2174v3.444c0 1.9055-0.0543 3.2188-0.7795 4.0762zm-6.3804-6.2737l-4.196-2.1813c-0.0938-0.04877-0.1964-0.07296-0.2989-0.07296-0.116 0-0.2317 0.03106-0.3342 0.09279-0.19306 0.11635-0.31094 0.32445-0.31094 0.54892v4.3485c0 0.2241 0.11755 0.432 0.31024 0.5484 0.1927 0.1164 0.4323 0.1244 0.6323 0.0211l4.196-2.1672c0.2135-0.1103 0.3475-0.3295 0.3479-0.5687 2e-4 -0.2393-0.1333-0.4588-0.3464-0.5696z"
                    fill="#fff"></path></svg>
                YouTube AUTO.RIA
              </span>
            </a>
          </div>
          <div class="community__col">
            <a href="https://www.facebook.com/AUTORIAcom" class="community__col-facebook community__col-btn">
              Facebook AUTO.RIA
            </a>
            <a href="https://t.me/auto_ria_news" class="community__col-telegram community__col-btn">
              Telegram AUTO.RIA
            </a>
            <a href="https://twitter.com/AUTO_RIA_com" class="community__col-twitter community__col-btn">
              Twitter AUTO.RIA
            </a>
            <a href="https://www.instagram.com/auto_ria_com/" class="community__col-instagram community__col-btn">
              Instagram AUTO.RIA
            </a>
            <a href="viber://pa?chatURI=autoriasearchbot" class="community__col-messenger community__col-btn btn-blue-hover">
              Пошук авто • Чат-бот
            </a>
            <a href="https://t.me/AutoRiaSearchBot/" class="community__col-telegram-sign community__col-btn btn-blue-hover">
              Пошук авто • Чат-бот
            </a>
            <router-link to="/checkedByPeople" class="community__col-logo-text community__col-btn"><img
                src="./../assets/svg/socials/logo-text.svg" alt="logo-text" class="community__col-btn-logo-text"></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Community"
}
</script>

<style lang="scss">
.community__col-btn {
  width: 17.3rem !important;
}

.community {
  &__title {
    color: #414047;
    font-size: 1.96rem;
    line-height: 1.7rem;
    padding-top: 2.4rem;
    letter-spacing: .02rem;
  }

  &__blocks {
    padding-top: 2.3rem;
    display: flex;
    justify-content: space-between;
  }

  &__col {
    width: 49%;
    height: 24rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
      position: relative;
    }

    &-yt {
      width: 46rem;

      &-btn {
        position: absolute;
        background-color: red;
        top: 13.7rem;
        height: 3.9rem;
        width: 17rem;
        left: 2rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        padding: 0 0 0 4.8rem;
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: #ffffff;

        svg {
          width: 2.4rem;
          position: absolute;
          left: 1rem;
          top: 0;
        }
      }
    }

    &-round-logo-checked {
      position: absolute;
      left: 2rem;
      top: 3rem;
    }

    &-text {
      font-size: 1.5rem;
      line-height: 1.8rem;
      color: #ffffff;
      position: absolute;
      top: 11rem;
      left: 2rem;
    }

    &-btn {
      width: 22rem;
      height: 4rem;
      border: none;
      outline: none;
      display: flex;
      border-radius: .5rem;
      color: #ffffff;
      padding: 0 0 0 4.5rem;
      font-size: 1.5rem;
      align-items: center;

      &:last-child {
        margin-top: 2rem;
        &:hover {
          border-bottom: none!important;
        }
      }

      &-logo-text {
        width: 46rem;
      }
    }

    &-facebook {
      background: url("./../assets/svg/socials/facebook.svg") 1.6rem 1rem no-repeat, #4267b2;
      background-size: 1.1rem;
    }

    &-telegram {
      background: url("./../assets/svg/socials/telegram.svg") 1.1rem 1rem no-repeat, #3588cc;
      background-size: 2.3rem;
    }

    &-twitter {
      background: url("./../assets/svg/socials/twitter.svg") 1.1rem 1rem no-repeat, #41a1f2;
      background-size: 2.3rem;
    }

    &-instagram {
      background-image: linear-gradient(180deg, #fd1d1d, #833ab4);
      position: relative;

      &:after {
        content: '';
        background: url("./../assets/svg/socials/instagram.svg") 1.1rem 1rem no-repeat;
        background-size: 2.4rem;
        position: absolute;
        width: 13rem;
        height: 4rem;
        left: -1px;
        top: -1px;
      }
    }

    &-messenger {
      background: url("./../assets/svg/socials/messenger.svg") 1.1rem .8rem no-repeat, transparent;
      background-size: 2.3rem;
      border: 1px solid #256799;
      color: #256799;
    }

    &-telegram-sign {
      background: url("./../assets/svg/socials/telegram-sign.svg") 1.1rem .8rem no-repeat, transparent;
      background-size: 2.3rem;
      border: 1px solid #256799;
      color: #256799;
    }

    &-logo-text {
      width: 46rem !important;
      padding: 0;
      height: 2rem;
    }
  }
}
</style>
