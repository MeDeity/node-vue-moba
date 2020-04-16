<template>
  <div class="home">
     <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/banner-1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/banner-1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/banner-1.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination  pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!--end of swiper-->
    <div class="nav-icons text-center text-dark-1 bg-white mt-3 d-flex flex-wrap">
      <div class="nav-item mb-3"
        v-for="n in 10" :key=n>
        <div class="sprite sprite-news"></div>
        <div>爆料站</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
      swiperOption:{
        pagination:{
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/variables';
  .pagination-home {
    opacity: 1;
    .swiper-pagination-bullet {
      background: #fff;
      &.swiper-pagination-bullet-active { 
        background: map-get($map: $colors, $key: 'info');
      }
    }
  }
  .nav-icons {
    .nav-item {
      width:25%;
    }
  }
</style>
