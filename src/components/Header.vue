<template>
  <div class="nav">
    <div class="nav__shadow"></div>
    <div class="nav__main" :class="{ nav__main_mobile: mobileView}"
    >
      <div class="logo"></div>
      <div class="navbar">
        <div class="navbar__button" v-if="mobileView"
             @click="navMenuActive = !navMenuActive">
          <font-awesome-icon class="font-awesome-icon nav__icon" icon="bars" />
        </div>
        <ul class="nav-menu"
            :class="{ navmenu_mobile: mobileView,
            navmenu_mobile_active : (navMenuActive && mobileView) }"
            >
          <li class="nav-menu__item"
              :class="{navmenu__item_mobile : mobileView}"
              @click.prevent="navMenuActive = !navMenuActive; scrollIntoView('header0')">
            <a href="#" class="nav-menu__link">
              Главная
            </a>
          </li>
          <li class="nav-menu__item"
              :class="{navmenu__item_mobile : mobileView}"
              @click.prevent="navMenuActive = !navMenuActive;  scrollIntoView('header1')">
            <a href="#" class="nav-menu__link">
              Услуги
            </a>
          </li>
          <li class="nav-menu__item"
              :class="{navmenu__item_mobile : mobileView}"
              @click.prevent="navMenuActive = !navMenuActive;  scrollIntoView('header2')">
          <a href="#" class="nav-menu__link">Доп. услуги</a></li>
          <li class="nav-menu__item"
              :class="{navmenu__item_mobile : mobileView}"
              @click.prevent="navMenuActive = !navMenuActive;  scrollIntoView('header3')">
          <a href="#" class="nav-menu__link">Контакты</a></li>
        </ul>
        <div class="nav-menu__modal" v-if="(navMenuActive && mobileView)"
             @click="navMenuActive = !navMenuActive">
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      navMenuActive: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    scrollIntoView(id) {
      const y = document.getElementById(id).offsetTop;
      window.scrollTo({
        top: y - 20,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
  computed: {
    mobileView() {
      return (this.$mq === 'mobile');
    },

  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$nav__mainHeight: 100px;
.nav__shadow{
  display: block;
  width: 100%;
  height: 100px;
}
.nav__main {
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
    width: 100%;
    height: $nav__mainHeight;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 10px #ccc;
}
.nav__main_mobile{
  justify-content: space-between;
  max-width: 750px;
}
.logo {
  background-image: url("../assets/gcdp-logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 65px;
  width: 65px;
  margin-left: 16px;
  margin-top: 5px;
}
.navbar{
    display: flex;
}

.navbar__button{
    position: relative;
    height: $nav__mainHeight - 47px;
    width: $nav__mainHeight - 47px;
    z-index: 1000;
    border: 3px solid #514271;
    border-radius: 10%;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.navbar__button:hover{
  cursor: pointer;
  color: white;
  background-color: #514271;
}

.nav-menu {
    list-style-type: none;
    z-index: 2000;
    display: flex;
    justify-content: center;
    -webkit-transition: left 0.3s;
    -moz-transition: left 0.3s;
    transition: left 0.3s;
    background-color: #fff;
    width: calc(100% - 100px);

}
.navmenu_mobile{
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  left: 100%;
  top: $nav__mainHeight;
  height: 100vh;
}

.navmenu_mobile_active{
  left: 100px;
  height: 100vh;
}
.nav-menu__item{
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 0 #ccc;
  height: 50px;
  color: #514271;
  text-align: center;
  margin: 0 4px;
}
.nav-menu__item:hover{
//  outline: 1px solid #514271;

}
.navmenu__item_mobile{
  border-bottom: 1px solid black;
  height: 60px;
  width: 100%;
  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: bold;
}
.navmenu__item_mobile:hover{
  background-color: #faf7f7;
  box-shadow: 0 0 10px #ccc;
}
.navmenu__item_mobile:first-child{
  border-top: 1px solid black;
}
.nav-menu__link{
  color: #514271;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.nav-menu__link:hover{
}
.nav-menu__modal{
  position: fixed;
  height: 100%;
  left: 0;
  width: 100%;
  top: $nav__mainHeight;
  z-index: 1000;
  background-color: #000;
  opacity: 0.2;
}
.nav__icon{
  font-size: 50px;
  color: #514271;
}
.nav__icon:hover{
  color: white;
}
a {
  text-decoration: none;
  color: #514271;
  }
a:hover{
  color: #42b983;
}
</style>
