<!-- scroll封装组件 -->
<template>
<div class='warpper' ref="warpper">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import BScroll from 'better-scroll'

export default {
name: 'Scroll',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    scroll: null
};
},
props:{
    probeType:{ //父组件传递probeType，0||1为不监听，2只监听手势滑动，3全部监听包括手势放开后的自动滑动距离
        type: Number,
        default: 0
    },
    pullUpLoad:{
        type: Boolean,
        default: false
    }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    eventScrollTo(x,y,time = 300){ //于当前位置偏移滚动 x,y 的距离，第三个参数为滚动时间，单位ms
        this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){ //更新可视区域
        this.scroll.finishPullUp()
    },
    refresh(){ //重新计算BetterScroll
        this.scroll && this.scroll.refresh()
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //创建scroll对象
    this.scroll = new BScroll(this.$refs.warpper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
    })
    //监听滚动位置
    if(this.probeType === 2 || this.probeType === 3){
            this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position);
        })
    }
    //上拉加载
    if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=> {
            this.$emit('pullingUp');
        })
    }
    
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
<style scoped>


</style>