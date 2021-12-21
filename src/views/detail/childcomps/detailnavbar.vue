<template>
  <div class="">
      <nav-bar>
        <div slot="left">
          <img src="~@/assets/img/common/back.svg" alt="" class="img-style" @click="goBack">
        </div>
        <div slot="center" class="title-style">
          <div v-for="(item , index) in title" :key="index" 
               class="titleItem-style" :class="{actived : index === activedState}"
               @click="itemClick(index)">
            {{ item }}
          </div>
        </div>
      </nav-bar>
  </div>
</template>


<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
components:{
  NavBar
},
data() {
  return {
    title: ['商品','参数','评论','推荐'],
    activedState : 0
  }
},
methods: {
  itemClick(index){
    this.activedState = index;
  },
  goBack(){
    this.$router.back();
  }
},
}
</script>

<style scoped>
.title-style{
  display: flex;
  font-size: 14px;
}
.titleItem-style{
  flex: 1;
}
.img-style{
  vertical-align: middle;
}
.actived{
  color: var(--color-high-text);
}
</style>