<!-- tabBarItem -->
<template>
    <div class="tab-bar-item" @click="itemClick()">
        <div v-if='!isActive'>
          <slot name="tabBar_icon"></slot>
          </div>
        <div v-else>
          <slot name='tabBar_icon_active'></slot>
          </div>
        <div :style="isActiveColor">
        <slot name="tabBar_txt"></slot>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name: 'tabBarItem',
components: {},
data() {
//这里存放数据
return {
  //isActive : true,
};
},
//监听属性 类似于data概念
computed: {
  isActive(){
    return this.$route.path.includes(this.path)
  },
  isActiveColor(){
    return this.isActive ? {color:this.activeColor} : {}
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  itemClick(){
    this.$router.replace(this.path)//.catch(err=>{})
  }
},
props: {
  path : String ,

  activeColor : {
    type: String,
    default: 'red'
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>
.tab-bar-item { 
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

.tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }

</style>