<template>
  <article>
    <div class="cart__content" :class="{ cart__content_mobile: mobileView }"
         @click="isClicked = !isClicked">
      <div class="cart__up" :class="{ cart__up_mobile: mobileView }">
        <div class="cart__up_left" :class="{ cart__up_left_mobile: mobileView }">
          <font-awesome-icon class="font-awesome-icon cart__icon "
                             :icon="content.faIcon" :size="faIconSize"/>
          <h3 class="cart_header" :class="{ cart_header_mobile: mobileView }">
            {{ content.header }}</h3>
        </div>

        <font-awesome-icon v-if="mobileView && !isClicked" class="font-awesome-icon fa-arrow"
                           style="margin-right: 12px"
                           icon="angle-down" size="1x"

        />
        <font-awesome-icon v-if="mobileView && isClicked" class="font-awesome-icon fa-arrow"
                           style="margin-right: 12px"
                           icon="angle-up" size="1x"
        />
      </div>
      <p class="cart__description"
         :class="{ cart__description_mobile: mobileView,
          cart__description_mobile_active: isClicked}"
      >
        {{ content.description }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ServiceCart',
  data() {
    return {
      isClicked: false,
    };
  },
  props: ['content'],
  computed: {
    faIconSize() {
      return this.mobileView ? '1x' : '2x';
    },
    mobileView() {
      return (this.$mq === 'mobile');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cart__content {
    padding-top: 24px;
    color: #514271;
    width: 255px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border: 4px solid #514271;
    border-radius: 20px;
    font-size: 32px;
    min-height: 265px;
  }

  .cart__content_mobile {
    padding: 0;
    flex-direction: column;
    min-height: 80px;
    align-items: flex-start;
    justify-content: center;
    width: 255px;
  }

  .cart__up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .cart__up_mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
  .cart__up_left{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
  .cart__up_left_mobile{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .service_cart {
    margin: 8px 8px;
  }
  .cart__icon{
    padding-left: 8px;
    min-width: 48px;
  }
  .service_cart__icon {
    padding: 20px;
    height: 32px;
  }

  .cart__pic {
    font-size: 32px;
    padding-top: 8px;
  }

  .cart_header {
    color: inherit;
    padding: 16px 4px;
    font-size: 20px;
  }
  .cart_header_mobile{
    text-align: left;
    padding-left: 8px;
    padding-right: 4px;
    font-size: 15px;
  }

  .cart__description {
    width: 90%;
    padding: 0 16px;
    font-size: 16px;
    transition: opacity .25s,
      font-size .5s .25s,
      margin .5s .25s,
      padding .5s .25s;
  }

  .cart__description_mobile {
    overflow: hidden;
    font-size: 0;
    padding: 0;
    opacity: 0;
    transition: opacity .25s,
    font-size .5s .25s,
    margin .5s .25s,
    padding .5s .25s;
  }
  .cart__description_mobile_active{
    font-size: 14px;
    padding: 0 10px 16px;
    opacity: 1;
    transition: font-size .25s,
    margin .25s,
    padding .25s,
    opacity .5s .25s;
  }
  .fa-arrow:hover{
    color: #42b983;
  }
</style>
