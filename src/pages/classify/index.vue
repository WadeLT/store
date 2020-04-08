<template>
  <div>
    <img src="" alt="">
    <!-- <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.changeState}}</h2>
    <h2 v-for="item in $store.getters.filtrate" :key="item.id">年龄为:{{item.age}}</h2>
    <div>
      <h3 v-for="item2 in $store.getters.filtrate2(18)" :key="item2.id">经过筛选的姓名为:{{item2.name}}</h3>
    </div>
    <button @click="subtracking">减少</button> -->
    <div v-for="itemType in $store.state.goods" :key="itemType.type">
      {{itemType.type}}<br><br>
      <div class="itemType">
        <img :src="item" alt="" v-for="item in itemType.url" :key="item" class="item">
        <!-- 每一行放三个产品，使用flex布局时如果不满三个会出现布局问题，空白div占位 -->
        <div v-for="box in (3-itemType.url.length%3)" :key="box" style="width:30%;"></div>
      </div><br><br>

    </div>
  </div>
</template>
<script>
export default {
  name: "classify",
  methods: {
    subtracking() {
      this.$store.commit('decrement')
    }
  },
}
</script>
<style lang="css" scoped>
.itemType {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 30%;
  margin-top: 10px;
}
</style>