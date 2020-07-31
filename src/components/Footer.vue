<template>
  <section class="footer">
    <p class="footer__copy">
      Copyright Blblbla 2020 (c)
    </p>
    <div class="footer__icons">
      <a href="#">
        <i class="fab fa-twitter footer_icon"></i>
      </a>
      <a href="#"><i class="fab fa-instagram footer_icon"></i></a>
      <a href="#"><i class="fab fa-vk footer_icon"></i></a>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  .footer {
    height: 80px;
    width: 100%;
    background-color: #514271;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer__copy {
    color: white;
    font-size: 18px;
  }

  .footer_icon {
    color: white;
    font-size: 40px;
  }
</style>
