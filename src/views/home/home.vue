<!--  -->
<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">推荐</div></nav-bar>
        <scroll class="content" ref="scroll" :probe-type = "3" @scroll = 'contentScroll'>
        <home-swiper :banners="homeBanners" />
        <recommend-view :recommends="recommends" />
        <feature-view/>
        <tab-control :titles ="['流行', '新款', '精选']" class="tab-control" @clickTabControl = "clickTabControl" />
        <goods-list :goods= "getCurrentType" />
        </scroll>
        <back-top @click.native="backClick" v-show="showBackTop"/>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import HomeSwiper from '@/views/home/childComps/homeSwiper.vue';
import RecommendView from '@/views/home/childComps/recommendView';
import FeatureView from '@/views/home/childComps/FeatureView';
import TabControl from '@/components/content/TabControl/tabControl';
import GoodsList from '@/components/content/goods/goodsList';
import BackTop from '@/components/content/backtop/backtop';


import {
    getHomeMultidata, 
    getHomeGoods,
    } from '@/network/home.js';
import scroll from '@/components/common/scroll/scroll';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    scroll,
    BackTop


},
//监听属性 类似于data概念
computed: {
    getCurrentType(){
        return this.goods[this.currentType].list
    }
},
data() {
//这里存放数据
return {
    homeBanners: [],//存放axios请求来的轮播图list
    recommends: [],//存放axios请求来的recommed.list
    goods: {
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell': {page: 0, list:[]},
    },
    currentType: 'pop',
    showBackTop: false
};
},

//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //事件监听
    clickTabControl(index){
        switch (index) {
            case 0:
                this.currentType = 'pop'
                break;
            case 1:
                this.currentType = 'new'
                break;
            case 2:
                this.currentType = 'sell'
        }
    },

    //网络请求
    getHomeMultidata(){
        getHomeMultidata().
        then(res => {
            this.homeBanners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        })
    },

    getHomeGoods(type) { //分发式数据模型
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
        })
    },

    backClick(){   //回弹按钮
        this.$refs.scroll.eventScrollTo(0,0,300) //eventScrollTo(x,y,time = 300)
    },
    contentScroll(position){ //动态绑定showBackTop
        this.showBackTop = -(position.y) > 1000
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    //请求多个
    this.getHomeMultidata();
    //请求推荐商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
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
<style scoped>
    #home{
        position: relative;
        height: 100vh;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
    .tab-control{
        position: sticky;
        top: 44px;
        z-index: 9;
    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>