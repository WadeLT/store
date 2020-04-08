<template>
  <div>
    <!-- <h2>{{$store.state.counter}}</h2> -->
    <!-- <button @click="addition">增加</button>
    <button @click="Action">异步操作</button> -->
    <h2>产品</h2>
    <div class="itemType">
      <!-- <img :src="item" alt="" v-for="item in itemType.url" :key="item" class="item"> -->
      <img v-for="itemType in [...$store.state.goods[0].url,...$store.state.goods[1].url]" :key="itemType" :src="itemType" alt="" class="item">
      <!-- 每一行放三个产品，使用flex布局时如果不满三个会出现布局问题，空白div占位 -->
      <div v-for="box in (3-[...$store.state.goods[0].url,...$store.state.goods[1].url].length%3)" :key="box" style="width:30%;"></div>
    </div>
  </div>

</template>
<script>
export default {
  name: "home",
  methods: {
    // addition() {
    //   this.$store.commit('increment')
    // },
    // Action() {//异步操作必须经过action去commit mutations里的方法
    //   this.$store.dispatch('action', 500).then(res => {
    //     console.log(res)
    //   }, err => {
    //     console.log(err)
    //     return new Promise((resolve, reject) => {
    //       reject(1111)
    //     })
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
  },

  async mounted() {

    // let instance = await this.$axios({
    //   url: "http://123.207.32.32:8000/home/multidata",
    //   methods: 'get'
    // })
    // .then(res => {
    //   // return new Promise((resolve, reject) => {
    //   //   if (res.status == 200) {
    //   //     resolve(res.data.data)
    //   //   } else {
    //   //     reject(res.data.returnCode)
    //   //   }
    //   // })
    //   // console.log(res)
    //   return res
    // }).catch(err => {
    //   return err
    // })
    // console.log(instance)
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