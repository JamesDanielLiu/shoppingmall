<template>
    <swiper class="banner-style">
        <swiper-item v-for="(item,index) in swiperImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>

import {Swiper,SwiperItem} from '@/components/common/swiper'


export default {
    components:{
       Swiper,
       SwiperItem,
    },
    props:{
        swiperImages:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.banner-style{
    height: 300px;
    overflow:hidden;
}
</style>