<template>
  <div>
    <Header/>
    <HeaderCategories/>
    <div class="checked">
      <div class="container">
        <div class="checked__text">
          <h1>Перевірено людьми</h1>
          <p>Чим більше чесної інфи дасте, тим швидше тачку продасте. Як от продавець Микола, який про авто чесно
            сказав: «Ну трохи крашена». А покупець написав – «Зате ціна реальна» – і домовився про огляд</p>
          <p>Дякуємо за чесність!</p>
          <p>Щоб люди купували саме у вас, перевірених продавців, ми розказали всім,
            де продають перевірені авто</p>
          <div class="checked__text-video">
            <iframe width="854" height="480"
                    src="https://www.youtube-nocookie.com/embed/y-Vj71vSNfM?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer"
                    frameborder="none"
                    allowfullscreen="allowfullscreen">
            </iframe>
          </div>
          <p>Разом із вами ми перевірили вже понад <span>900 000</span> автомобілів,
            <br>
            серед яких мільйони українців роблять свій вибір</p>
          <p>Щоб чесним довіряли, ми перевіряємо й підтверджуємо правдиві дані про авто та продавців
            завдяки перевіркам по VIN-коду, технічним і юридичним</p>
          <p>Дізналися правду про авто чи продавця?</p>
          <p>Розкажіть все, як є. І ми зробимо чесно, як і має бути</p>
          <button class="btn">Стати Інтернет-шнспектором</button>
          <p>Дізнайтесь все про перевірки авто та продавців на AUTO.RIA</p>
        </div>
      </div>
    </div>
    <div class="how">
      <div class="how-check">
        <div class="container">
          <div class="how-check__block">
            <div class="how-check__block-text">
              <p class="how-check__block-text-title title">
                Як AUTO.RIA перевіряє авто
              </p>
              <p class="how-check__block-text-subtitle subtitle">
                Щоб допомогти чесним продавцям продати авто швидко та вигідно, ми перевіряємо кожне авто до того, як
                воно
                з'являється в пошуку.
              </p>
            </div>
            <div class="how-check__block-img">
              <picture>
                <img src="./../assets/img/checkedByPeople/howtocheck.png" alt="howtocheck">
              </picture>
              <div>
                <img class="how-check__block-img-number" src="./../assets/svg/checkedByPeople/number.svg" alt="number"
                     v-scrollanimation-number>
                <img class="how-check__block-img-check" src="../assets/svg/checkedByPeople/check.svg" alt="check"
                     v-scrollanimation-check>
                <img class="how-check__block-img-vin" src="../assets/svg/checkedByPeople/vin.svg" alt="vin"
                     v-scrollanimation-vin>
                <div class="how-check__block-img-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="how-check__body">
        <div class="container">
          <div class="how-check__body-block">
            <div class="how-check__body-line">
              <div class="how-check__body-line-big-number">
                0<span>1</span>
              </div>
              <h4 class="how-check__body-line-title title">
                Перевірка авто до того, як їх побачить покупець</h4>
            </div>
            <p class="subtitle how-check__body-subtitle">Робот-інспектор AUTO.RIA перевіряє кожне
              авто до публікації. Якщо виявлені ознаки шахрайства по фото, опису чи з історії розміщення на AUTO.RIA,
              вже за пів секунди така пропозиція видаляється, а продавець блокується.</p>
          </div>

          <div class="how-check__body-block">
            <div class="how-check__body-line">
              <div class="how-check__body-line-big-number">
                0<span>2</span>
              </div>
              <h4 class="how-check__body-line-title title">
                Перевірка авто <br>за державним номером</h4>
            </div>
            <p class="subtitle how-check__body-subtitle">Відкритий держ.номер — спрощена подача та
              перевірка авто. По фото авто Робот-інспектор AUTO.RIA розпізнає держ.номер, а за ним дізнається VIN-код,
              щоб автоматично додати перевірені дані про авто в оголошення з реєстрів МВС.
            </p>
          </div>

          <div class="how-check__body-block">
            <div class="how-check__body-line">
              <div class="how-check__body-line-big-number">
                0<span>3</span>
              </div>
              <h4 class="how-check__body-line-title title">
                Перевірка даних <br> про авто по VIN-коду</h4>
            </div>
            <ul class="how-check__body-block-list">
              <li><img src="./../assets/img/checkedByPeople/inspector.png" alt="inspector">
                <p class="subtitle how-check__body-block-list-info"><span>Робот-інспектор AUTO.RIA звіряє дані</span>
                  про марку, модель, рік випуску, двигун та <br> колір авто з даними
                  реєстрів МВС, щоб підтвердити опис від продавця, та вказує дату останньої операції в СЦ МВС.</p>
              </li>
              <li><img src="./../assets/img/checkedByPeople/dtp-facts.png" alt="dtp-facts">
                <p class="subtitle how-check__body-block-list-info"><span>Відсутність фактів про ДТП AUTO.RIA</span>
                  перевіряє та підтверджує за 15 базами <br> страхових компаній, дилерських центрів України та країн
                  світу.
                </p>
              </li>
              <li><img src="./../assets/img/checkedByPeople/miles.png" alt="miles">
                <p class="subtitle how-check__body-block-list-info"><span>AUTO.RIA підтверджує вказаний пробіг</span>,
                  звіривши його з останнім зафіксованим <br> показником на СТО, у сервісних та дилерських центрах.</p>
              </li>
              <li><img src="./../assets/img/checkedByPeople/search.png" alt="search">
                <p class="subtitle how-check__body-block-list-info">
                  <span>Перевіряємо на відсутність авто у розшуку</span><br>
                  Якщо за даними реєстрів МВС авто знаходиться у розшуку, воно миттєво видаляється.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="additional">
      <div class="additional-info">
        <div class="container">
          <div class="additional-info__block">
            <div class="additional-info__block-text">
              <p class="additional-info__block-text-title title">
                Перевірте авто додатково і швидко продасте
              </p>
              <p class="additional-info__block-text-subtitle subtitle">
                Показати, що вам варто довіряти, — легко, навіть на відстані сотень кілометрів. З результатами
                поглиблених перевірок на AUTO.RIA ви даєте покупцям додаткові гарантії безпечної купівлі і пришвидшуєте
                продаж.
              </p>
            </div>
            <div class="additional-info__block-img">
              <picture>
                <img src="./../assets/img/checkedByPeople/additional.png" alt="additional">
              </picture>
              <div>
                <img src="./../assets/svg/checkedByPeople/vin-max.svg" class="additional-info__block-img-vin-max"
                     alt="vin-max" v-scrollanimation-vin-max>
                <div class="additional-info__block-img-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="additional-info__body">
        <div class="container">
          <div class="additional-info__body-block">
            <div class="additional-info__body-line">
              <div class="additional-info__body-line-big-number">
                0<span>4</span>
              </div>
              <h4 class="additional-info__body-line-title title">
                Юридична перевірка документів <br> та авто експертною службою <br> МВС</h4>
            </div>
            <p class="subtitle additional-info__body-subtitle">Маркування автомобіля звіряється з інформацією,
              вказаною в технічному паспорті, а документи на авто перевіряються на відповідність офіційно затвердженим
              бланкам.
            </p>
            <a href="#" class="btn">Приклад звіту</a>
            <a href="#" class="link">Детальніше про перевірку →</a>
          </div>

          <div class="additional-info__body-block additional-info__body-block-5">
            <div class="additional-info__body-line">
              <div class="additional-info__body-line-big-number">
                0<span>5</span>
              </div>
              <h4 class="additional-info__body-line-title title">
                VIN Max перевірка повної історії авто за 15 базами даних</h4>
            </div>
            <p class="subtitle additional-info__body-subtitle">Максимальна перевірка для швидкого продажу і
              гарантії безпеки купівлі вашого авто — проходить онлайн. Перевіряємо за даними баз УБКІ, банків, страхових
              компаній та офіційних дилерів України, США, Канади, Європи та СНД:
            </p>
            <ul class="additional-info__body-list subtitle">
              <li>дані про комплектацію</li>
              <li>вся історія пробігу</li>
              <li>дані про викрадення та арешти</li>
              <li>автострахові випадки</li>
              <li>відсутність обтяжень кредиту, застави чи оренди</li>
              <li>дані про державну реєстрацію</li>
              <li>наявність страхового полісу</li>
              <li>історія сервісного обслуговування</li>
              <li>дані про ремонти і заміну деталей</li>
            </ul>
            <a href="#" class="btn additional-info__body-btn">Приклад звіту</a>
            <a href="#" class="link">Детальніше про перевірку →</a>
          </div>
        </div>
      </div>
    </div>

    <div class="technical-check">
      <div class="technical-check-info">
        <div class="container">
          <div class="technical-check-info__block">
            <div class="technical-check-info__block-text">
              <p class="technical-check-info__block-text-title title">
                Технічні перевірки авто на 80 сертифікованих СТО-партнерах AUTO.RIA
              </p>
            </div>
            <div class="technical-check-info__block-img">
              <picture>
                <img src="./../assets/img/checkedByPeople/technical-check.png" alt="technical-check">
              </picture>
              <div>
                <img src="./../assets/svg/checkedByPeople/technical-check.svg"
                     class="technical-check-info__block-img-technical-check" alt="technical-check"
                     v-scrollanimation-technical>
                <div class="technical-check-info__block-img-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="technical-check-info__body">
        <div class="container">
          <div class="technical-check-info__body-block">
            <div class="technical-check-info__body-line">
              <div class="technical-check-info__body-line-big-number">
                0<span>6</span>
              </div>
            </div>
            <div class="technical-check-info__body-col technical-check-info__body-col-6">
              <h4 class="technical-check-info__body-line-title title">
                Техогляд стану авто:</h4>
              <p class="title technical-check-info__body-subtitle">ходової частини, двигуна авто, кузова, салону й
                обладнання, світлових приборів</p>
            </div>
          </div>

          <div class="technical-check-info__body-block technical-check-info__body-block-7">
            <div class="technical-check-info__body-line">
              <div class="technical-check-info__body-line-big-number">
                0<span>7</span>
              </div>
            </div>
            <div class="technical-check-info__body-col">
              <h4 class="technical-check-info__body-line-title title">
                Комп’ютерна діагностика</h4>
              <p class="title technical-check-info__body-subtitle">електронної системи автомобіля</p>
            </div>
          </div>

          <div class="technical-check-info__body-block technical-check-info__body-block-8">
            <div class="technical-check-info__body-line">
              <div class="technical-check-info__body-line-big-number">
                0<span>8</span>
              </div>
            </div>
            <div class="technical-check-info__body-col">
              <h4 class="technical-check-info__body-line-title title">
                Перевірка розвалу-сходження:</h4>
              <p class="title technical-check-info__body-subtitle">оцінка регулювання кута встановлення коліс</p>
            </div>
          </div>

          <div class="technical-check-info__body-block technical-check-info__body-block-9">
            <div class="technical-check-info__body-line">
              <div class="technical-check-info__body-line-big-number">
                0<span>9</span>
              </div>
            </div>
            <div class="technical-check-info__body-col">
              <h4 class="technical-check-info__body-line-title title">
                Тестова поїздка
              </h4>
              <p class="title technical-check-info__body-subtitle">та звіт про експлуатаційні характеристики авто</p>
            </div>
          </div>

          <div class="technical-check-info__body-block technical-check-info__body-block-10">
            <div class="technical-check-info__body-line">
              <div class="technical-check-info__body-line-big-number">
                <span>10</span>
              </div>
            </div>
            <div class="technical-check-info__body-col">
              <h4 class="technical-check-info__body-line-title title">
                Детальний фотозвіт
              </h4>
              <p class="title technical-check-info__body-subtitle">про фактичний стан авто.</p>
              <a href="#" class="btn technical-check-info__body-btn">Приклад звіту</a>
              <a href="#" class="link technical-check-info__body-link">Детальніше про перевірку →</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="new-cars">
      <div class="new-cars-info">
        <div class="container">
          <div class="new-cars-info__block">
            <div class="new-cars-info__block-text">
              <p class="new-cars-info__block-text-title title">
                Як ми перевіряємо нові авто
              </p>
            </div>
            <div class="new-cars-info__block-img">
              <picture>
                <img src="./../assets/img/checkedByPeople/new-cars.png" alt="new-cars">
              </picture>
              <div>
                <img src="./../assets/svg/checkedByPeople/new-cars.svg" class="new-cars-info__block-img-360"
                     alt="new-cars" v-scrollanimation-technical>
                <div class="new-cars-info__block-img-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="new-cars-info__body">
        <div class="container">

          <div class="new-cars-info__body-block">
            <div class="new-cars-info__body-line">
              <div class="new-cars-info__body-line-big-number">
                <span>11</span>
              </div>
              <h4 class="new-cars-info__body-line-title title">
                Перевірка
                автосалонів</h4>
            </div>
            <p class="subtitle new-cars-info__body-subtitle">Інспектори RIA особисто перевіряють документи, адресу,
              контакти та роблять фото автосалонів у 360°</p>
            <div class="new-cars-info__body-amount">
              <p class="new-cars-info__body-amount-count">270</p>
              <p class="new-cars-info__body-amount-text">перевірених <br> автосалонів та</p>
            </div>
            <div class="new-cars-info__body-amount">
              <p class="new-cars-info__body-amount-count">
                <nobr>10 000+</nobr>
              </p>
              <p class="new-cars-info__body-amount-text">пропозицій нових <br> авто</p>
            </div>
          </div>

          <div class="new-cars-info__body-block">
            <div class="new-cars-info__body-line">
              <div class="new-cars-info__body-line-big-number">
                <span>12</span>
              </div>
              <h4 class="new-cars-info__body-line-title title">
                Перевірені
                комплектації</h4>
            </div>
            <p class="subtitle new-cars-info__body-subtitle">Усі деталі комплектації нових авто перевірені на
              відповідність та показані на живих фото.</p>
          </div>

          <div class="new-cars-info__body-block">
            <div class="new-cars-info__body-line">
              <div class="new-cars-info__body-line-big-number">
                <span>13</span>
              </div>
              <h4 class="new-cars-info__body-line-title title">
                Перевірені ціни <br>
                на нові авто
              </h4>
            </div>
            <p class="subtitle new-cars-info__body-subtitle">Кожних три дні AUTO.RIA перевіряє та актуалізує ціни на
              комплектації усіх моделей, що пропонує автосалон.</p>
          </div>

          <div class="new-cars-info__body-block">
            <div class="new-cars-info__body-line">
              <div class="new-cars-info__body-line-big-number">
                <span>14</span>
              </div>
              <h4 class="new-cars-info__body-line-title title">
                Перевірена наявність
                авто в салоні</h4>
            </div>
            <p class="subtitle new-cars-info__body-subtitle">AUTO.RIA перевіряє та підтверджує наявність нових авто в
              автосалонах або період їх доставки під замовлення</p>
            <a href="#" class="btn">Дивитися нові авто</a>
          </div>
        </div>
      </div>
    </div>

    <div class="check-seller">
      <div class="check-seller-info">
        <div class="container">
          <div class="check-seller-info__block">
            <div class="check-seller-info__block-text">
              <p class="check-seller-info__block-text-title title">
                Перевіряємо продавців
              </p>
            </div>
            <div class="check-seller-info__block-img">
              <picture>
                <img src="./../assets/img/checkedByPeople/check-seller.png" alt="check-seller">
              </picture>
              <div>
                <div class="check-seller-info__block-img-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="check-seller-info__body">
        <div class="container">

          <div class="check-seller-info__body-block">
            <div class="check-seller-info__body-line">
              <div class="check-seller-info__body-line-big-number">
                <span>15</span>
              </div>
              <h4 class="check-seller-info__body-line-title title">
                Перевірка дилерів вживаних авто
              </h4>
            </div>
            <p class="subtitle check-seller-info__body-subtitle">Інспектори AUTO.RIA особисто перевіряють майданчики з
              продажу авто з пробігом — підтверджують офіційну реєстрацію, актуальність контактів, реальну адресу та
              роблять фото майданчика у 360°.</p>
          </div>

          <div class="check-seller-info__body-block">
            <div class="check-seller-info__body-line">
              <div class="check-seller-info__body-line-big-number">
                <span>16</span>
              </div>
              <h4 class="check-seller-info__body-line-title title">
                Перевірка кожного продавця-власника авто</h4>
            </div>
            <p class="subtitle check-seller-info__body-subtitle">Робот-інспектор AUTO.RIA підтверджує особу продавця за
              даними банку при першій оплаті замовлених ним послуг та позитивну історію розміщення. Також продавець
              зобов’язаний підтвердити номер телефону і свій намір відповідати покупцям.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="person">
      <div class="person-bg">
        <div class="container">
          <img src="./../assets/img/checkedByPeople/person.png" alt="person" class="person-img">
          <p class="person__title subtitle">
            Автолюбителю, запрошую тебе приєднатися до спільноти Інтернет-інспекторів AUTO.RIA
          </p>
          <p class="person__subtitle subtitle">Якщо помітиш сумнівну інформацію про авто чи продавця, повідом про це. Я
            і моя
            команда Кібер-інспекторів AUTO.RIA, особисто розглянемо твоє звернення. Доповнивши перевірки AUTO.RIA, ти
            допоможеш мільйонам українцям купувати авто безпечно.
          </p>
        </div>
      </div>
    </div>
    <div class="auto">
      <div class="container">
        <div class="auto__sale">
          <p class="auto__sale-title title">Авто продаються швидко і вигідно покупцям, які довіряють</p>
          <img src="./../assets/img/checkedByPeople/phone.png" alt="phone" class="auto__sale-img">
          <p class="subtitle auto__sale-subtitle">Гарантуйте якість вашого авто завдяки перевіркам технічній, юридичній
            та по VIN-коду.</p>
          <a href="#" class="auto__sale-btn">
            <svg width="47" height="30" viewBox="0 0 47 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
              <path
                  d="M45.0293 5.70588C42.7109 5.70588 42.9486 5.70588 42.2353 5.70588C41.5219 5.70588 40.333 8.05882 40.333 8.05882C40.333 8.05882 39.2035 6.35294 38.0145 4.52941L22.0826 20.1176C21.9637 20.2353 21.7259 20.2353 21.5475 20.1176L13.0465 12.2353C12.8682 12.1176 12.8682 11.8824 13.0465 11.7059L15.9595 8.64706C16.0784 8.47059 16.3161 8.47059 16.4945 8.64706L21.607 13.4118L34.9827 0.294118C34.8043 0.117647 34.6854 0 34.626 0C34.3882 0 29.2163 0 25.4711 0C25.4711 0 23.6876 0 21.4286 0C17.624 0 12.5115 0 12.2737 0C11.8576 0 6.62619 8.05882 6.62619 8.05882C6.62619 8.05882 5.43724 5.70588 4.72387 5.70588C4.0105 5.70588 4.18884 5.70588 1.92983 5.70588C-0.329176 5.70588 -0.21028 7.47059 0.324748 8.70588C0.919223 10 4.18884 9.82353 4.18884 9.82353C4.18884 9.82353 1.75149 11.8235 1.75149 13.7059C1.75149 15.6471 1.75149 30 1.75149 30H11.6198V26.4706H21.4881H25.4711H35.3394V30H45.2077C45.2077 30 45.2077 15.5882 45.2077 13.7059C45.2077 11.7647 42.7703 9.82353 42.7703 9.82353C42.7703 9.82353 46.0994 9.94118 46.6344 8.70588C47.2289 7.47059 47.3478 5.70588 45.0293 5.70588Z"
                  fill="white" style=""></path>
            </svg>
            Перевірити мої авто</a>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="footer">
      <div class="container">
        <div class="footer__items">
          <div class="footer__logo">
            <img src="./../assets/svg/logo-bottom.svg" alt="logo" class="footer__logo-img">
            <p class="footer__logo-text">
              © 2014-2021 RIA.com</p>
          </div>
          <ul class="footer__list">
            <li><a href="#">Політика приватності &nbsp; <span>&#8226;</span> &nbsp;</a></li>
            <li><a href="#">Угода про надання онлайн-сервісів &nbsp; <span>&#8226;</span> &nbsp;</a></li>
            <li><a href="#">Допомога по сайту AUTO.RIA</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../layouts/Header";
import HeaderCategories from "../layouts/HeaderCategories";

export default {
  name: "CheckedByPeople",
  title: 'AUTO.RIA - Перевірено людьми',
  components: {
    Header,
    HeaderCategories
  }
}
</script>

<style lang="scss">
.checked h1, .checked p, .checked button, .checked__text-video {
  font-size: 1.8rem;
  line-height: 2.4rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding-top: 2rem;
}

.title {
  font-weight: 700;
  font-family: Arial-Bold, sans-serif;
  font-size: 2.4rem;
  line-height: 2.8rem;
}

.subtitle {
  padding-top: 2rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
}

.btn {
  font-size: 1.6rem;
  line-height: 4rem;
  border: .1rem solid #246799;
  border-radius: .5rem;
  display: block;
  color: #246799;
  text-align: center;
  transition: all .2s;
  margin: 2rem 0 2rem 10rem;
  width: 35.7rem;
}

.link {
  color: #246799;
  font-size: 1.6rem;
  line-height: 1.92rem;
  margin: 0 17.7rem;
}

.checked {
  padding-top: 5.5rem;

  &__text {
    :nth-child(1) {
      color: #256799;
      font-size: 3.2rem;
      line-height: 3.84rem;
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;
      padding-top: 0;
    }

    :nth-child(3) {
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;
    }

    :nth-child(4) {
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;
      width: 66rem;

    }

    &-video {
      display: flex;
      justify-content: center;

      iframe {
        width: 85.4rem;
        height: 48rem;
      }
    }

    :nth-child(6) {
      padding-top: 2.5rem !important;
      width: 66rem;
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;


      span {
        font-size: 2.4rem;
        line-height: 1.9rem;
        width: 15rem;
        height: 1rem;
        color: #256799;
        display: contents;
      }
    }

    :nth-child(7) {
      width: 80rem;
    }

    :nth-child(8) {
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;

    }

    :nth-child(9) {
      padding-top: 2.1rem !important;

    }

    :nth-child(10) {
      outline: none;
      border: none;
      background-color: #256799;
      border-radius: .5rem;
      margin-top: 2rem;
      height: 4.4rem;
      width: 32rem;
      color: #ffffff;
      display: flex;
      align-items: center;

      padding-top: 0;
    }

    :nth-child(11) {
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;
    }
  }
}

.how {
  &-check {
    background-color: #F3FAFD;
    margin-top: 3rem;
    height: 36.5rem;

    &__block {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      &-text {
        padding-top: 11.3rem;

        &-title {
          width: 35rem;
        }

        &-subtitle {
          width: 43rem;;
        }
      }

      &-img {
        padding-top: 1.7rem;
        background-color: transparent;
        position: relative;

        picture {
          img {
            width: 40.2rem;
          }
        }

        &:before {
          position: absolute;
          border-radius: 50%;
          content: ""
        }

        &-number {
          width: 11.9rem;
          top: 12.1rem;
          right: 0.2rem;
          position: absolute;
          z-index: 1;
        }

        &-check {
          width: 19rem;
          top: 15.1rem;
          left: 28rem;
          position: absolute;
          z-index: 1;
        }

        &-vin {
          width: 20.2rem;
          top: 18.1rem;
          left: 28rem;
          position: absolute;
          z-index: 1;
        }

        &-bg {
          background-color: #F3FAFD;
          width: 24rem;
          height: 10rem;
          position: absolute;
          left: 40.1rem;
          top: 11rem;
          z-index: 2;
        }
      }
    }

    &__body {
      padding-top: 8.7rem;

      &-block {
        padding: 0 !important;
        margin-bottom: 3rem;

        &-list {
          padding: 2.4rem 0 0 10rem;

          &-info {
            span {
              font-weight: 700;
              font-family: Arial-Bold, sans-serif;
            }
          }

          li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
            height: 9.8rem;
            width: 85rem;

            p {
              width: 73.5rem;
              padding: 0;
              z-index: 3;
            }

            img {
              width: 9.3rem;
            }
          }
        }
      }

      &-line {
        display: flex;
        justify-content: space-between;
        width: 41rem;

        &-title {
          width: 31rem;
        }

        &-big-number {
          font-size: 7.2rem;
          line-height: 6rem;
          color: #D9DDED;

          span {
            color: #E45F4C;
            font-weight: 700;
            font-family: Arial-Bold, sans-serif;
          }
        }
      }

      &-subtitle {
        padding: 1.5rem 0 0 9.9rem;
      }
    }
  }
}

.before-enter-number {
  opacity: 0;
  transform: translateX(10rem);
  transition: all .7s ease-out;
}

.enter-number {
  opacity: 1;
  transform: translateX(-20.1rem);
}

.before-enter-check {
  opacity: 0;
  transform: translateX(10rem);
  transition: all .9s ease-out;
}

.enter-check {
  opacity: 1;
  transform: translateX(-20.1rem);
}

.before-enter-vin {
  opacity: 0;
  transform: translateX(10rem);
  transition: all 1.1s ease-out;
}

.enter-vin {
  opacity: 1;
  transform: translateX(-20.1rem);
}

.before-enter-vin-max {
  opacity: 0;
  transform: translateY(0rem);
  transition: all .5s ease-out;
}

.enter-vin-max {
  opacity: 1;
  transform: translateY(18.2rem);
}

.before-enter-technical {
  opacity: 0;
  transform: scale(0.1);
  transition: all .8s ease-out;
}

.enter-technical {
  opacity: 1;
  transform: scale(1);
}

.additional {
  &-info {
    background-color: #F3FAFD;
    margin-top: 3rem;
    height: 36.5rem;

    &__block {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      &-text {
        padding-top: 7.6rem;

        &-title {
          width: 50rem;
        }

        &-subtitle {
          width: 43rem;
        }
      }

      &-img {
        padding-top: 1.7rem;
        background-color: transparent;
        position: relative;

        &-vin-max {
          width: 10rem;
          position: absolute;
          left: 15rem;
          top: -9rem;
        }

        picture {
          img {
            width: 40.2rem;
          }
        }

        &:before {
          position: absolute;
          border-radius: 50%;
          content: ""
        }

        &-bg {
          background: linear-gradient(180deg, #ffffff 87.5%, #F3FAFD 12.5%);
          width: 25rem;
          height: 13.7rem;
          position: absolute;
          left: 7.1rem;
          top: -12rem;
          z-index: 2;
        }
      }
    }

    &__body {
      padding-top: 9rem;

      &-btn {
        margin-top: 1rem;
      }

      &-list {
        padding-left: 10rem;

        li {
          background: url(./../assets/svg/checkedByPeople/tick.svg) no-repeat 0 .6rem;
          padding: 0 0 1rem 3.5rem;
        }
      }

      &-block {
        padding: 0 !important;
        margin-bottom: 3rem;
      }

      &-line {
        display: flex;
        justify-content: space-between;
        width: 50rem;

        &-title {
          width: 40rem;
        }

        &-big-number {
          font-size: 7.2rem;
          line-height: 6rem;
          color: #D9DDED;

          span {
            color: #E45F4C;
            font-weight: 700;
            font-family: Arial-Bold, sans-serif;
          }
        }
      }

      &-subtitle {
        padding: 1.5rem 0 0 9.9rem;

      }
    }
  }
}

.technical-check {
  &-info {
    background-color: #F3FAFD;
    margin-top: 3rem;
    height: 36.5rem;

    &__block {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      &-text {
        padding-top: 13rem;

        &-title {
          width: 47rem;
        }

        &-subtitle {
          width: 43rem;
        }
      }

      &-img {
        padding-top: 1.7rem;
        background-color: transparent;
        position: relative;

        &-technical-check {
          width: 25.7rem;
          position: absolute;
          left: 7.1rem;
          top: 16.5rem;
        }

        picture {
          img {
            width: 40.2rem;
          }
        }

        &:before {
          position: absolute;
          border-radius: 50%;
          content: ""
        }
      }
    }

    &__body {
      padding-top: 9rem;

      &-col {
        display: flex;
        flex-direction: column;

        &-6 {
          padding: 0 0 0 .5rem !important;
        }
      }

      &-btn {
        margin: 3rem 0 2rem 0;
      }

      &-link {
        margin: 0 7.7rem;
      }

      &-list {
        padding-left: 10rem;

        li {
          background: url(./../assets/svg/checkedByPeople/tick.svg) no-repeat 0 .6rem;
          padding: 0 0 1rem 3.5rem;
        }
      }

      &-block {
        padding: 0 !important;
        margin-bottom: 2.9rem;
        display: flex;
      }

      &-line {
        width: 10rem;

        &-title {
          width: 39rem;
        }

        &-big-number {
          font-size: 7.2rem;
          line-height: 6rem;
          color: #D9DDED;

          span {
            color: #E45F4C;
            font-weight: 700;
            font-family: Arial-Bold, sans-serif;
          }
        }
      }

      &-subtitle {

        font-weight: 200;
      }
    }
  }
}

.new-cars {
  &-info {
    background-color: #F3FAFD;
    margin-top: 3rem;
    height: 36.5rem;

    &__block {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-right: 5rem;

      &-text {
        padding-top: 16rem;

        &-title {
          width: 47rem;
        }

        &-subtitle {
          width: 43rem;
        }
      }

      &-img {
        padding-top: 1.7rem;
        background-color: transparent;
        position: relative;

        &-360 {
          width: 10.8rem;
          position: absolute;
          top: 16.3rem;
          left: 15rem;
        }

        picture {
          img {
            width: 40.2rem;
          }
        }

        &:before {
          position: absolute;
          border-radius: 50%;
          content: ""
        }
      }
    }

    &__body {
      padding-top: 9rem;

      &-amount {
        width: 10rem;
        padding-left: 10rem;
        display: flex;
        align-items: center;
        margin-bottom: .5rem;

        &-count {
          font-size: 4rem;
          line-height: 4.8rem;
          font-weight: 700;
          font-family: Arial-Bold, sans-serif;
          color: #316799;
        }

        &-text {
          font-size: 1.6rem;
          line-height: 2rem;
          font-weight: 700;
          min-width: 15rem;
          padding-left: 1rem;
          font-family: Arial-Bold, sans-serif;
        }
      }

      &-col {
        display: flex;
        flex-direction: column;

        &-6 {
          padding: 0 0 0 .5rem !important;
        }
      }

      &-btn {
        margin: 2rem 0 2rem 0;
      }

      &-link {
        margin: 0 7.7rem;
      }

      &-list {
        padding-left: 10rem;

        li {
          background: url(./../assets/svg/checkedByPeople/tick.svg) no-repeat 0 .6rem;
          padding: 0 0 1rem 3.5rem;
        }
      }

      &-block {
        padding: 0 !important;
        margin-bottom: 2.9rem;
      }

      &-line {
        width: 10rem;
        display: flex;

        &-title {
          padding-left: 2rem;
          min-width: 27rem !important;
        }

        &-big-number {
          font-size: 7.2rem;
          line-height: 6rem;
          color: #D9DDED;

          span {
            color: #E45F4C;
            font-weight: 700;
            font-family: Arial-Bold, sans-serif;
          }
        }
      }

      &-subtitle {
        padding: 1.5rem 0 0 9.9rem;
        font-weight: 200;
      }
    }
  }
}

.check-seller {
  &-info {
    background-color: #F3FAFD;
    margin-top: 3rem;
    height: 36.5rem;

    &__block {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-right: 8rem;

      &-text {
        padding-top: 16rem;
        width: 45rem;

        &-title {
          width: 47rem;
        }

        &-subtitle {
          width: 43rem;
        }
      }

      &-img {
        padding-top: 1.7rem;
        background-color: transparent;
        position: relative;

        &-360 {
          width: 10.8rem;
          position: absolute;
          top: 16.3rem;
          left: 15rem;
        }

        picture {
          img {
            width: 40.2rem;
          }
        }

        &:before {
          position: absolute;
          border-radius: 50%;
          content: ""
        }
      }
    }

    &__body {
      padding-top: 9rem;

      &-amount {
        width: 10rem;
        padding-left: 10rem;
        display: flex;
        align-items: center;
        margin-bottom: .5rem;

        &-count {
          font-size: 4rem;
          line-height: 4.8rem;
          font-weight: 700;
          font-family: Arial-Bold, sans-serif;
          color: #316799;
        }

        &-text {
          font-size: 1.6rem;
          line-height: 2rem;
          font-weight: 700;
          min-width: 15rem;
          padding-left: 1rem;
          font-family: Arial-Bold, sans-serif;
        }
      }

      &-col {
        display: flex;
        flex-direction: column;

        &-6 {
          padding: 0 0 0 .5rem !important;
        }
      }

      &-btn {
        margin: 2rem 0 2rem 0;
      }

      &-link {
        margin: 0 7.7rem;
      }

      &-list {
        padding-left: 10rem;

        li {
          background: url(./../assets/svg/checkedByPeople/tick.svg) no-repeat 0 .6rem;
          padding: 0 0 1rem 3.5rem;
        }
      }

      &-block {
        padding: 0 !important;
        margin-bottom: 2.9rem;
      }

      &-line {
        width: 10rem;
        display: flex;

        &-title {
          padding-left: 2rem;
          min-width: 36rem !important;
        }

        &-big-number {
          font-size: 7.2rem;
          line-height: 6rem;
          color: #D9DDED;

          span {
            color: #E45F4C;
            font-weight: 700;
            font-family: Arial-Bold, sans-serif;
          }
        }
      }

      &-subtitle {
        padding: 1.5rem 0 0 9.9rem;
        font-weight: 200;
      }
    }
  }
}

.person {
  background-color: #F3FAFD;
  height: 43.5rem;

  &-img {
    margin: auto;
    width: 43.1rem;
    display: flex;
    padding-top: 2.5rem;
  }

  &__title {
    font-family: Arial-Bold, sans-serif;
    font-weight: 700;
    text-align: center;
  }

  &__subtitle {
    text-align: center;
  }
}

.auto {
  padding-top: 2.1rem;

  &__sale {
    &-title {
      margin: auto;
      width: 72rem;
    }

    &-img {
      margin: auto;
      display: flex;
      padding-top: 1.9rem;
    }

    &-subtitle {
      margin: auto;
      display: flex;
      width: 74rem;
    }

    &-btn {
      border: none;
      color: #ffffff;
      background-color: #256799;
      font-size: 1.6rem;
      line-height: 4rem;
      height: 4.1rem;
      width: 33rem;
      display: flex;
      margin: 2rem auto;
      border-radius: 5px;
      align-items: center;
      justify-content: center;

      svg {
        width: 2rem;
        padding-right: 1rem;
      }
    }
  }
}

.line {
  border-top: .1rem solid #e0e3e4;
  margin-top: 3.9rem;
}

.footer {
  &__items {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    justify-content: space-between;
    width: 21rem;
    align-items: center;

    &-text {
      color: #9B9B9B;
      font-size: 1.3rem;
      line-height: 1.56rem;
      width: 16rem;
    }

    &-img {
      width: 4rem;
    }
  }
  &__list {
    display: flex;
    align-items: center;
    li {
      a {
        font-size: 1.4rem;
        line-height: 1.68rem;
        color: #256799;
        span {
          color: #9B9B9B;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
