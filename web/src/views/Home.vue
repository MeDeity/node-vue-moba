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
    <div class="nav-icons text-center text-dark-1 bg-white m-3 d-flex flex-wrap">
      <!-- <div class="d-flex flex-wrap mb-3"> -->
        <div class="nav-item mb-3"
          v-for="n in 10" :key=n>
          <div class="sprite sprite-news"></div>
          <div class="py-2">爆料站</div>
        </div>
      <!-- </div> -->
    </div>
    <div class="bg-light py2 fs-sm">
        <i class="sprite sprite-arrow mr-1 "></i>
        <span>收起</span>
    </div>
    <!--end of nav icons-->
    <m-card icon ="hero" title="新闻资讯">
      absdddd
    </m-card>
    <!-- <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex">
        <i class="iconfont icon-hero"></i>
        <div class="fs-xxl flex-1">新闻资讯</div>
        <i class="iconfont icon-hero"></i>
      </div>
      <div class="card-body pt-3">
          <div class="nav jc-between">
            <div class="nav-item active">
              <div class="nav-link">热门</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">新闻</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">新闻</div>
            </div>
          </div>
      </div>
      <div class="pt-3 jc-start">
        <swiper>
        <swiper-slide v-for="m in 5" :key="m">
          <div class="py-2" v-for="n in 5" :key="n">
            <span>[新闻]</span>
            <span>|</span>
            <span>夏日新版本'褊下星之队'即将6月份上线</span>
            <span>06/02</span>
          </div>
        </swiper-slide>
      </swiper>
      </div>
      
    </div> -->
    <m-card icon ="hero" title="英雄列表"></m-card>
    <m-card icon ="hero" title="精彩视频"></m-card>
    <m-card icon ="hero" title="图文攻略"></m-card>
    
    
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
      border-right: 1px solid $border-color;
      &:nth-child(4n+1) {
        border-left:none;
      }
    }
  }
</style>
