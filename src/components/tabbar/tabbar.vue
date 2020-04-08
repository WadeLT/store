<template>
  <div id="tabBox">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabbar"
}
</script>
<style lang="css" scoped>
/* @import url("../../assets/css/base.css"); */

#tabBox {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
  height: 49px;
}
</style>