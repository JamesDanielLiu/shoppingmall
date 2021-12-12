<!-- goods公用商品列表的item组件 -->
<template>
<div class='goodsListItem'>
        <img :src="goodsItem.show.img" alt="">
        <div class="goodsInfo">
            <p>{{ goodsItem.title }}</p>
            <span class="price">{{ `¥ ${goodsItem.price }`}}</span>
            <span class="collect">{{  goodsItem.cfav }}</span>
        </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
    goodsItem:{
        type: Object,
        defaute(){
            return {}
        }
    }
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
.goodsListItem{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}
.goodsListItem img{
    width: 100%;
    border-radius: 5px;
}
.goodsInfo{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
}
.goodsInfo p{
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goodsInfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
.goodsInfo .collect{
    position: relative;
}
.goodsInfo .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(~@/assets/img/common/collect.svg) 0 0/14px 14px no-repeat;
}
</style>