<template>
  <div>
    <Header/>
    <HeaderCategories/>
    <div class="container">
      <div class="block">
        <router-link to="/checkedbypeople">
          <img src="./../assets/img/login/bg.png" alt="bg-login" class="block__img">
        </router-link>

        <Login/>

        <Registration/>

      </div>
    </div>
    <SocialBlock/>
    <Footer/>
  </div>
</template>

<script>
import Header from "../layouts/Header";
import HeaderCategories from "../layouts/HeaderCategories";
import SocialBlock from "../components/SocialBlock";
import Footer from "../layouts/Footer";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

export default {
  name: "LoginAndRegistration",
  title: "AUTO.RIA - Вхід",
  components: {
    Header,
    HeaderCategories,
    SocialBlock,
    Footer,
    Login,
    Registration
  },
  data() {
    return {
      showRegister: false,
      showLogin: true
    }
  },
}
</script>

<style scoped lang="scss">
.block {
  padding-top: 1rem;
  position: relative;

  &__img {
    width: 94rem;
    height: 75rem;
    z-index: 0;
  }
}


</style>
