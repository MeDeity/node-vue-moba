<template>
    <!--end of nav icons-->
    <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xxl flex-1">{{title}}</div>
        <i class="iconfont" :class="`icon-${icon}`"></i>
      </div>
      <div class="card-body pt-3">
          <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
    }
}
</script>

<style lang='scss'>
@import '../scss/_variables.scss';
.card {
    .card-header {
        border-bottom: 1px solid $border-color;
    }
    border-bottom: 1px solid $border-color;
}
</style>