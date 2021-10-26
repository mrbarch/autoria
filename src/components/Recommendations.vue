<template>
  <div>
    <div class="recommendations">
      <div class="container">
        <p class="recommendations__title">
          AUTO.RIA рекомендує
        </p>
        <div class="recommendations__blocks">
          <div class="recommendations__block">
            <p class="recommendations__block-title">Можливості розміщення</p>
            <ul>
              <li class="recommendations__block-item"><a href="#">Просування авто в пошуку</a></li>
              <li class="recommendations__block-item"><a href="#">Рівні ТОП оптом</a></li>
              <li class="recommendations__block-item"><a href="#">Вигоди на публікації до -15%</a></li>
            </ul>
          </div>

          <div class="recommendations__block">
            <p class="recommendations__block-title">Пошук автомобілів</p>
            <ul>
              <li class="recommendations__block-item"><a href="#">Пошук перевірених авто</a></li>
              <li class="recommendations__block-item"><a href="#">Пошук нових авто</a></li>
              <li class="recommendations__block-item"><a href="#">Пошук авто з-за кордону</a></li>
            </ul>
          </div>

          <div class="recommendations__block">
            <p class="recommendations__block-title">Автомобільні компанії</p>
            <ul>
              <li class="recommendations__block-item"><a href="#">Автосалони всієї України</a></li>
              <li class="recommendations__block-item"><a href="#">Автодилери вживаних авто</a></li>
              <li class="recommendations__block-item"><a href="#">Авто під замовлення з-за кордону</a></li>
            </ul>
          </div>

          <div class="recommendations__block">
            <p class="recommendations__block-title">Товари для авто</p>
            <ul>
              <li class="recommendations__block-item"><a href="#">Нові та б/у запчастини</a></li>
              <li class="recommendations__block-item"><a href="#">Шини, диски та інші автотовари</a></li>
              <li class="recommendations__block-item"><a href="#">Гаражі по Всій Україні</a></li>
            </ul>
          </div>

          <div class="recommendations__block">
            <p class="recommendations__block-title">Перед купівлею авто</p>
            <ul>
              <li class="recommendations__block-item"><a href="#">Відгуки власників авто</a></li>
              <li class="recommendations__block-item"><a href="#">Перевірені авто на AUTO.RIA</a></li>
              <li class="recommendations__block-item"><a href="#">Поради для успішної покупки авто</a></li>
            </ul>
          </div>

          <div class="recommendations__block">
            <p class="recommendations__block-title">Автомобільні послуги</p>
            <ul>
              <li class="recommendations__block-item"><a href="#">Авторозбірка</a></li>
              <li class="recommendations__block-item"><a href="#">СТО</a></li>
              <li class="recommendations__block-item"><a href="#">Автомийки</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendations"
}
</script>

<style lang="scss">
.recommendations {
  &__title {
    color: #414565;
    font-size: 2.05rem;
    line-height: 2.5rem;
    padding-top: 2rem;
  }

  &__blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__block {
    flex: 0 0 27rem;
    border: 1px solid #e0e3e4;
    border-radius: .3rem;
    height: 10rem;
    width: 25rem;
    margin-top: 1.6rem;
    padding: 1.6rem 1rem 1rem 1.9rem;

    &-title {
      line-height: 1.8rem;
      font-size: 1.73rem;
      color: #414047;
    }

    ul {
      padding-top: 1.4rem;
      position: relative;
    }
    &-item {
      padding: 0 0 1rem 1.5rem;
      font-size: 1.48rem;
      line-height: 1.5rem;
      &:before {
        background: #e0e3e4;
        position: absolute;
        left: 0;
        width: .7rem;
        height: .7rem;
        margin-top: 0.3rem;
        content: "";
      }
      a {
        color: #256799;
      }
      &:hover {
        text-decoration: underline;
      }
      &:hover:before  {
          background: #256799;
          position: absolute;
          left: 0;
          width: .7rem;
          height: .7rem;
          margin-top: 0.3rem;
          content: "";
        }
      }
  }
}
</style>
