<template>
  <div>
    <h2>购物车</h2>
    <input type="checkbox" v-model="checkAll">全选<br />
    <input type="checkbox" v-model="checkReverse">反选<br />
    <div v-for="(item,index) in orderList" :key="item.id">
      <input type="checkbox" v-model="item.isChecked">{{item.name}} 价格：{{item.prize}} <input type="button" value="+" @click="item.number++"> {{item.number}}
      <input type="button" value="-" @click="reduce(index)"><br />
    </div>
    <input type="text" readonly :value="sum==0?'请选择商品':'合计:'+sum+'元'">
  </div>

</template> 
<script>
export default {
  name: "shoppingCar",
  data() {
    return {
      // isChecked: false,
      orderList: [
        { id: 1, prize: 100, name: "商品1", isChecked: false, number: 1 },
        { id: 2, prize: 200, name: "商品2", isChecked: false, number: 1 },
        { id: 3, prize: 300, name: "商品3", isChecked: false, number: 1 },
        { id: 4, prize: 400, name: "商品4", isChecked: false, number: 1 },
      ]
    }
  },
  methods: {
    reduce(index) {
      if (this.orderList[index].number > 1) {
        this.orderList[index].number--
      }
    }
  },
  computed: {
    //全选
    checkAll: {
      get() {
        //every 遍历数组中属性，所有的都满足条件则返回true
        let val = this.orderList.every(item => {
          return item.isChecked
        })
        //当列表每个选项选中时（v-model实现双向绑定），返回true，全选为选中状态
        console.log(val)
        return val
      },
      set(val) {
        //v-model 改变全选按钮的值，使列表状态等于全选按钮状态
        this.orderList.forEach(item => {
          item.isChecked = val
        })
      }
    },
    checkReverse: {
      get() {

      },
      set(val) {
        return this.orderList.forEach(item => {
          item.isChecked = !item.isChecked
        })
      }

    },
    sum() {
      let count = 0;
      this.orderList.forEach(item => {
        if (item.isChecked) count += item.prize * item.number
      })
      return count
    }
  },
}
</script>
<style lang="css" scoped>
</style>