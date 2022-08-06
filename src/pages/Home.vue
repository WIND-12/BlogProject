<template lang="">
    <div>
        <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img style="width:100%;height:100%" src="public/1.jpg"></img></swiper-slide>
    <swiper-slide><img style="width:100%;height:100%" src="public/2.jpg"></img></swiper-slide>
    <swiper-slide><img style="width:100%;height:100%" src="public/3.jpg"></img></swiper-slide>
  </swiper>
        
    </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";


export default {
    name:'Home',
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
    
}

</script>
<style lang="">
.swiper-slide {
  height: 600px;
  line-height: 300px;
  font-size: 30px;
  text-align: center;
  background-color: pink;
  
}
    
</style>