<template>
  <div id="app">
    <keep-alive>
      <!-- 购物车页面路由添加meta属性，保持页面keepAlive -->
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <tabbar>
      <tabbarItem v-for="item in tabbarArray" :key="item.text" :path="item.path" activeColor="rgb(26, 250, 41)">
        <img slot="item-icon" :src="item.icon" class="icon" alt="">
        <img slot="item-iconActive" :src="item.iconActive" class="icon" alt="">
        <div slot="item-text">{{item.text}}</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar/tabbar"
import tabbarItem from "./components/tabbar/tabbarItem"
export default {
  name: 'App',
  components: {
    tabbar,
    tabbarItem
  },
  data() {
    return {
      tabbarArray: [
        {
          path: '/home',
          icon: require("./assets/images/icon2.png"),
          iconActive: require("./assets/images/iconActive2.png"),
          text: "首页"
        },
        {
          path: '/classify',
          icon: require("./assets/images/icon1.png"),
          iconActive: require("./assets/images/iconActive1.png"),
          text: "分类"
        },
        {
          path: '/shoppingCar',
          icon: require("./assets/images/icon4.png"),
          iconActive: require("./assets/images/iconActive4.png"),
          text: "购物车"
        },
        {
          path: '/mine',
          icon: require("./assets/images/icon3.png"),
          iconActive: require("./assets/images/iconActive3.png"),
          text: "我的"
        }
      ]
    }
  },

}
</script>
 <style lang="css">
@import "./assets/css/base.css";
</style>