<template>
  <div>
    <div class="block-login" :class="showLogin === false ? 'login-non-active' : ''">
      <div class="block-login__form">
        <p class="block-login__form-title">
          Вхід на сайт <strong>AUTO.RIA</strong>
        </p>
        <div class="block-login__form-row">
          <p class="block-login__form-row-label">Телефон або e-mail</p>
          <div class="block-login__form-row-field">
            <input type="text" class="block-login__form-row-field-input">
            <i class="phone-input-sign">?</i>
          </div>
        </div>
        <div class="block-login__form-row">
          <p class="block-login__form-row-label">Пароль</p>
          <div class="block-login__form-row-field">
            <input type="text" class="block-login__form-row-field-input">
            <i class="password-input-sign"></i>
          </div>
        </div>
        <div class="block-login__form-remember-me">
          <label class="block-login__form-remember-me-label">
            <input type="checkbox" class="block-login__form-remember-me-checkbox">
            <span class="block-login__form-remember-me-fake"></span>
            <span class="block-login__form-remember-me-text">Запамʼятати мене</span>
          </label>
        </div>
        <div class="block-login__form-btns">
          <button class="block-login__form-btn">Увійти</button>
          <router-link to="#" class="block-login__form-link">Забули пароль?</router-link>
        </div>
        <div class="block-login__form-social">
          <a class="block-login__form-social-fb block-login__form-social-item"
             href="https://www.facebook.com/v4.0/dialog/oauth/LoginAndRegistration.vue?client_id=1518067615176484&redirect_uri=https://login.ria.com/fb-auth&display=popup&response_type=code&scope=email">
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M10 24H15V12H18L18.5 8H15V6C15 4.9 15.9 4 17 4H19V0H15C12.2 0 10 2.2 10 5V8H7.5V12H10V24Z'
                    fill='rgb(58,88,158)'/>
            </svg>
            <span>Увійти через Facebook</span>
          </a>
          <a class="block-login__form-social-google block-login__form-social-item"
             href="https://www.facebook.com/v4.0/dialog/oauth/LoginAndRegistration.vue?client_id=1518067615176484&redirect_uri=https://login.ria.com/fb-auth&display=popup&response_type=code&scope=email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.64 9.20468C17.64 8.5665 17.5827 7.95286 17.4764 7.36377H9V10.8451H13.8436C13.635 11.9701 13.0009 12.9233 12.0477 13.5615V15.8197H14.9564C16.6582 14.2529 17.64 11.9456 17.64 9.20468Z"
                    fill="#4285F4"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z"
                    fill="#34A853"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
                    fill="#FBBC05"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
                    fill="#EA4335"/>
            </svg>

            <span>Увійти через Google</span>
          </a>
          <a class="block-login__form-social-telegram block-login__form-social-item"
             href="https://www.facebook.com/v4.0/dialog/oauth/LoginAndRegistration.vue?client_id=1518067615176484&redirect_uri=https://login.ria.com/fb-auth&display=popup&response_type=code&scope=email">
            <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                  d='M0.353381 8.63014L4.96044 10.4079L6.74725 16.3337C6.8606 16.7127 7.31397 16.8505 7.60733 16.6024L10.1742 14.4388C10.4409 14.2114 10.8276 14.1976 11.1076 14.4113L15.7413 17.8909C16.0614 18.1321 16.5147 17.953 16.5948 17.5533L19.9884 0.67854C20.075 0.24444 19.6617 -0.120755 19.2616 0.037726L0.346714 7.58279C-0.119992 7.76884 -0.113325 8.45099 0.353381 8.63014ZM6.46056 9.46389L15.468 3.73102C15.628 3.62766 15.7947 3.85505 15.6547 3.98597L8.22071 11.1314C7.96069 11.3794 7.79401 11.7171 7.74067 12.0823L7.48732 14.0185C7.45398 14.2803 7.10062 14.301 7.03395 14.0529L6.06053 10.5181C5.95385 10.1185 6.11387 9.68439 6.46056 9.46389Z'
                  fill='rgb(0,136,204)'/>
            </svg>
            <span>Увійти через Telegram</span>
          </a>
        </div>
        <a href="#" class="block-login__form-register" @click="showModal">Зареєструватися на AUTO.RIA</a>
        <div class="block-login__form-questions">
          <span>Виникли питання?</span>
          <br>
          <router-link to="#"> Служба турботи про користувачів:</router-link>
        </div>
        <div class="block-login__form-number">
          <i class="block-login__form-number-icon"></i>
          <div class="block-login__form-number-text">
            <span>(067) 431-82-29,</span>
            <span> 0-800-21-00-12,</span><br>
            <span>(0432) 555-213</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showRegister: false,
      showLogin: true
    }
  },
  methods: {
    showModal() {
      this.showLogin = !this.showLogin
      this.showRegister = !this.showRegister
    }
  }
}
</script>

<style scoped lang="scss">
.login-non-active {
  display: none;
}


.phone-input-sign {
  color: #9d9d9d;
  margin-top: -.8rem;
  border-radius: 50%;
  font-variant: normal;
  font-style: normal;
  font-size: 1.2rem;
  border: 1px solid currentColor;
  line-height: 1.7rem;
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  right: 1rem;
  cursor: pointer;

  &:hover {
    color: #256799;
  }

  &:before {
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    bottom: -.5rem;
    left: -.5rem;
    content: "";
  }
}

.password-input-sign {
  display: inline-block;
  vertical-align: middle;
  background-image: url("../../assets/img/login/passport-symbols.png");
  background-size: 8.7rem 26.7rem;
  background-repeat: no-repeat;
  width: 1.7rem;
  height: 1.1rem;
  background-position: 0 100%;
  position: absolute;
  top: 39%;
  right: 1rem;
  cursor: pointer;

  &:hover {
    background-position: 0 94.55253%;
  }

  &:before {
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    bottom: -.5rem;
    left: -.5rem;
    content: "";
  }
}


.block-login {
  padding-top: 1rem;
  margin-bottom: -.5rem;
  position: absolute;
  top: 3.6rem;
  right: 3rem;
  &__form {
    z-index: 1;
    width: 32rem;
    border-radius: 1rem;
    padding: 3rem;
    background: #fff;
    height: 64.7rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    &-number {
      padding-top: 2rem;

      &-icon {
        float: left;
        margin-top: .2rem;
        width: 1rem;
        height: 1.7rem;
        background-position: -34rem -10rem;
        display: inline-block;
        vertical-align: middle;
        background-image: url('../../assets/img/login/passport-symbols-2.png');
        background-size: 35.4rem 35.2rem;
        background-repeat: no-repeat;
        margin-right: 0.5rem;
      }

      &-text {
        font-size: 1.5rem;
        display: block;
        margin-left: 1.5rem;
      }
    }

    &-register {
      font-size: 1.8rem;
      color: #256799;
      border-bottom: 1px dotted #256799;
    }

    &-questions {
      font-size: 1.3rem;
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;
      padding-top: 2rem;

      a {
        color: #256799;
      }
    }

    &-title {
      font-size: 2rem;
      font-weight: 400;

      strong {
        font-style: inherit;
        font-weight: 700;
        color: #E75E4C !important;
      }
    }

    &-row {
      margin-top: 2rem;

      &-label {
        font-size: 1.5rem;
      }

      &-field {
        margin-top: .3rem;
        position: relative;

        &-input {
          margin: 0;
          padding: 1.2rem;
          line-height: 2.3rem;
          font-family: Arial, Helvetica, sans-serif;
          color: #414042;
          text-align: left;
          text-decoration: none;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-shadow: 1px 0 0 #fff;
          overflow: hidden;
          vertical-align: middle;
          outline: 0 none;
          border: 1px solid #e0e3e4;
          border-radius: 1px;
          width: 100%;
          font-size: 1.8rem;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
      }
    }

    &-remember-me {
      display: flex;
      justify-content: space-between;
      width: 14.7rem;
      position: relative;
      padding-top: 1.9rem;

      &-label {
        display: flex;
        height: 2rem;
      }

      &-label:hover + &-fake {
        border: 1px solid #000;
      }

      &-fake {
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid #e0e3e4;
        position: relative;
        border-radius: 2px;

        &:before {
          content: "";
          background: url("../../assets/svg/advancedSearch/check-grey.svg") no-repeat;
          position: absolute;
          top: 27%;
          left: 20%;
          display: block;
          width: 1rem;
          height: 1rem;
          opacity: 0;
        }
      }

      &-checkbox:checked + &-fake::before {
        opacity: 1;
      }

      &-text {
        padding-left: 0.3rem;
        color: #414042 !important;
        width: 13rem;
        font-size: 1.5rem;
      }

      &-checkbox {
        opacity: 0;
        position: absolute;
      }

      &-warning:hover + &-warning-text {
        opacity: 1;
        visibility: visible;
      }

      &-warning {
        cursor: pointer;

        &-text {
          font-size: 1.2rem;
          line-height: 1.4rem;
          color: #414042;
          border: 1px solid #e0e3e4;
          width: 25rem;
          border-radius: 5px;
          padding: .7rem 0 .7rem .7rem;
          height: 3rem !important;
          position: absolute;
          left: 16rem;
          bottom: -1rem;
          opacity: 0;
          visibility: hidden;
        }
      }
    }

    &-btns {
      margin-top: 2rem;
    }

    &-btn {
      width: 14rem;
      height: 4.8rem;
      border: none;
      color: #ffffff;
      background-color: #70b000;
      border-bottom-color: #5d890c;
      border-radius: 5px;
      text-align: center;
      font-size: 1.8rem;
    }

    &-link {
      color: #256799;
      font-size: 1.5rem;
      margin-left: .3rem;

      &:hover {
        border-bottom: 1px solid #256799;
      }
    }

    &-social {
      margin-top: 1.4rem;

      &-item {
        display: block;
        font-size: 1.5rem;
        padding: .5rem 1rem;
        position: relative;
        border: 1px solid #256799;
        border-radius: 3px;
        -webkit-transition: all .2s;
        -moz-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s;
        line-height: 3.7rem;
        white-space: nowrap;
        margin-bottom: 1rem;

        &:hover {
          text-decoration: none;
          background: #ddf4fb;
        }

        span {
          font-size: 1.5rem;
          line-height: 3.7rem;
          color: #256799;
          margin-left: .3rem;
        }
      }

      &-fb {
        svg {
          display: inline-block;
          vertical-align: middle;
          margin: -.3rem 1rem 0;
          width: 2.4rem;
          height: 2.4rem;
        }
      }

      &-google {
        svg {
          display: inline-block;
          vertical-align: middle;
          margin: 0 1.2rem 0;
          width: 1.8rem;
          height: 1.8rem;
        }
      }

      &-telegram {
        svg {
          display: inline-block;
          vertical-align: middle;
          margin: 0.1rem 1rem 0;
          width: 2rem;
          height: 1.8rem;
        }
      }
    }
  }
}
</style>
