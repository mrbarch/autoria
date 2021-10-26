<template>
  <div>
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

              <a href="https://apps.apple.com/app/id1083363297" class="mobile__version-download-general">
                <img src="./../assets/svg/socials-btn/apple/logo.svg" class="mobile__version-download-apple-logo"
                     alt="logo">
                <div class="mobile__version-download-apple-text mobile__version-download-general-text">
                  <img src="./../assets/svg/socials-btn/apple/title.svg"
                       class="mobile__version-download-apple-text-title" alt="logo">
                  <img src="./../assets/svg/socials-btn/apple/subtitle.svg"
                       class="mobile__version-download-apple-text-subtitle" alt="logo">
                </div>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.ria.auto&&"
                 class="mobile__version-download-general">
                <img src="./../assets/svg/socials-btn/google-play/logo.svg"
                     class="mobile__version-download-google-play-logo" alt="logo">
                <div class="mobile__version-download-google-play-text mobile__version-download-general-text">
                  <img src="./../assets/svg/socials-btn/google-play/title.svg"
                       class="mobile__version-download-google-play-text-title" alt="logo">
                  <img src="./../assets/svg/socials-btn/google-play/subtitle.svg"
                       class="mobile__version-download-google-play-text-subtitle" alt="logo">
                </div>
              </a>

              <a href="https://appgallery.huawei.com/app/C101464449?sharePrepath=ag&channelId=web+promo+page+auto.ria&referrer=web+promo+page+auto.ria&id=f38e9c2560d14c838d3ace0bc8181cde&s=B74C645CC50E67106596D2317A69B95E41D5314063944F021532BE6F6EBE0BF5&detailType=0&v="
                 class="mobile__version-download-general">
                <img src="./../assets/svg/socials-btn/app-gallery/logo.svg"
                     class="mobile__version-download-app-gallery-logo" alt="logo">
                <div class="mobile__version-download-app-gallery-text mobile__version-download-general-text">
                  <img src="./../assets/svg/socials-btn/app-gallery/title.svg"
                       class="mobile__version-download-app-gallery-text-title" alt="logo">
                  <img src="./../assets/svg/socials-btn/app-gallery/subtitle.svg"
                       class="mobile__version-download-app-gallery-text-subtitle" alt="logo">
                </div>
              </a>
            </div>
          </div>
          <a href="https://auto.ria.com/uk/mobile_app/" class="mobile__version-img-link">
            <img src="./../assets/img/mobile-ria.webp" alt="mobile" class="mobile__version-img">
          </a>
          <div class="mobile__version-socials">
            <p class="mobile__version-socials-title">Приєднуйтесь до спільноти автолюбителів AUTO.RIA</p>
            <div class="mobile__version-socials-btns">
              <a href="#" class="mobile__version-socials-btns-facebook non-hover">
                <img src="./../assets/img/facebook-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-instagram non-hover">
                <img src="./../assets/img/instagram-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-yt non-hover">
                <img src="./../assets/img/yt-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-twitter non-hover">
                <img src="./../assets/img/twitter-bg.png" alt="" class="">
              </a>
              <a href="#" class="mobile__version-socials-btns-telegram non-hover">
                <img src="./../assets/img/telegram-bg.png" alt="" class="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialBlock"
}
</script>

<style lang="scss">
.non-hover {
  &:hover {
    border-bottom: 1px solid transparent !important;
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
      width: 22.9rem;
      &-link {
        padding: 3rem 0 0 2.4rem;
        &:hover{
          border-bottom: none;
        }
      }
    }

    &-download {
      &-title {
        font-size: 2.4rem;
        line-height: 3.12rem;
        font-weight: 700;
        font-family: Arial-Bold, sans-serif;
        padding-top: 2.5rem;
      }

      &-subtitle {
        font-size: 1.6rem;
        line-height: 1.92rem;
        padding-top: 2.1rem;
        width: 25rem;
      }

      &-btns {
        display: flex;
        padding-top: 2.6rem;
        width: 35rem;
        justify-content: space-between;
      }

      &-general {
        height: 4rem;
        width: 11rem;
        display: flex;
        background-color: #000;
        justify-content: space-evenly;
        align-items: center;
        border-radius: .5rem;
        cursor: pointer;

        &:hover {
          background: #262626;
        }

        &-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 3rem;
        }
      }

      &-apple {

        &-logo {
          width: 1.6rem;
        }

        &-text {
          &-title {
            width: 5.6rem;
          }

          &-subtitle {

          }
        }
      }

      &-google-play {

        &-logo {
          width: 1.6rem;
        }

        &-text {
          padding-top: .1rem;

          &-title {
            width: 5.6rem;
          }
        }
      }

      &-app-gallery {

        &-logo {
          width: 2.4rem;
        }

        &-text {
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
      padding-left: 2.5rem;

      &-title {
        padding-top: 10.3rem;
        width: 31rem;
      }

      &-btns {
        padding-top: 2.5rem;
        display: flex;
        align-items: center;
        width: 25.5rem;
        justify-content: space-between;

        a {
          img {
            border: 1px solid #e0e3e4;
            border-radius: .5rem;
            width: 2.5rem;
          }
        }

        &-facebook {
          img {
            margin: 0 !important;
            padding: .7rem .8rem;

            &:hover {
              border: 1px solid #256799;
              padding: .7rem .8rem;
            }
          }
        }

        &-instagram {
          img {
            padding: .7rem .8rem;

            &:hover {
              border: 1px solid #256799;
              padding: .7rem .8rem;
            }
          }
        }

        &-yt {
          img {
            padding: 1rem .8rem !important;

            &:hover {
              border: 1px solid #256799;
              padding: 1rem .8rem !important;
            }
          }
        }

        &-twitter {
          img {
            padding: .9rem;
            width: 2.5rem !important;

            &:hover {
              border: 1px solid #256799;
              padding: .9rem;
            }
          }
        }

        &-telegram {
          img {
            padding: 0.8rem;
            width: 2.4rem !important;

            &:hover {
              border: 1px solid #256799;
              padding: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
