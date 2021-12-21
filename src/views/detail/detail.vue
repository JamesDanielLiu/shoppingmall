<!-- 详情页 -->
<template>
<div id='detail'>
    <detail-nav-bar class="detail-nav-bar"/>
    <scroll class = "content" ref="scroll">
        <detail-swiper :swiper-images ="swiperImgs"/>
        <detail-base-info :goods ="goods"/>
        <detail-shop-info :shop ="shop"/>
        <detail-goods-info :detailInfo = "detailInfo" @goods-info-load = "imageLoad"/>
        <detail-param-info :param-info = "paramInfo"/>
    </scroll>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailNavBar from './childcomps/detailnavbar.vue'
import DetailSwiper from './childcomps/detailswiper.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue'
import DetailParamInfo from './childcomps/DetailParamInfo.vue'

import {GetdetailIid,Goods,Shop,GoodsParam} from '@/network/detail'
import Scroll from '@/components/common/scroll/scroll'


export default {
//import引入的组件需要注入到对象中才能使用
name: "detail",
components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
},
data(){
    return {
        iid : null, //商品id
        swiperImgs: [],   //轮播图片数据
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    imageLoad(){
        this.$refs.scroll.refresh()
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.iid = this.$route.params.iid;
    //
    GetdetailIid(this.iid).then(res=>{ 
        const data = res.result;
        this.swiperImgs = data.itemInfo.topImages  //轮播图数据
        
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services) 

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })
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
activated() {
    
}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
#detail{
    height: 100vh;
    position: relative;
    background-color: #fff;
    z-index: 111;
}
.detail-nav-bar{
    position: relative;
    background-color: #FFf;
    z-index: 9;
}
.content{
    height: calc(100% - 44px);
}

</style>