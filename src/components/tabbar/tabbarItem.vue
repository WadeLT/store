<template>
  <div class="tabBarItem" @click="changeTab">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-iconActive"></slot>
    </div>

    <div :style="activeTex">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: "tabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "rgb(26, 250, 41)"
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeTab() {
      this.$router.replace(this.path).catch(err => { err })
    }
  },
  computed: {
    isActive() {
      //如果当前路由路径包含当前组件名则说明激活
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeTex() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
}
</script>
<style lang="css" scoped>
.tabBarItem {
  flex: 1;
  text-align: center;
  font-size: 10px;
}
.icon {
  width: 20px;
  height: 20px;
  display: block;
  margin: 5px auto;
}
.activeTex {
  color: rgb(26, 250, 41);
}
</style>