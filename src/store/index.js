import Vue from "vue"
import Vuex from "vuex"
//安装插件
Vue.use(Vuex)
    //创建对象
const store = new Vuex.Store({
        state: {
            counter: 100,
            students: [{
                    id: 1,
                    name: 'qwe',
                    age: 16,
                    sex: '男'
                },
                {
                    id: 2,
                    name: 'rwe',
                    age: 6,
                    sex: '女'
                },
                {
                    id: 3,
                    name: 'qee',
                    age: 36,
                    sex: '男'
                },
                {
                    id: 4,
                    name: 'qqe',
                    age: 26,
                    sex: '男'
                },
                {
                    id: 5,
                    name: 'qwe',
                    age: 19,
                    sex: '女'
                },
                {
                    id: 6,
                    name: 'ewe',
                    age: 46,
                    sex: '男'
                }
            ],
            actionCount: "",
            goods: [{
                    type: "衣服",
                    url: [require("assets/images/clothes1.png"), require("assets/images/clothes2.png"), require("assets/images/clothes3.png"), require("assets/images/clothes4.png"), require("assets/images/clothes5.png")]
                },
                {
                    type: "裤子",
                    url: [require("assets/images/pants1.png"), require("assets/images/pants2.png"), require("assets/images/pants3.png"), require("assets/images/pants4.png"), require("assets/images/pants5.png")]
                },
            ]
        },
        mutations: {
            increment(state) {
                state.counter++
            },
            decrement(state) {
                state.counter--;
                Vue.set(state.students[2], 'age', '10')
            },
            updateInfo(state, payload) {
                state.counter += payload

            }
        },
        //一步操作，拿到数据之后再通过mutations改变数据
        actions: {
            action(context, payload) {

                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        context.commit('updateInfo', payload)
                    }, 1000);
                    // resolve('success')
                    reject('error')
                })
            }
        },
        //类似于计算属性
        getters: {
            changeState: state => state.counter * state.counter, //只有一个语句可以省略return
            filtrate: (state) => { //接受两个参数，state和getters
                return state.students.filter(item => item.age > 16)
            },
            //动态传入参数
            filtrate2(state) {
                return age => {
                    return state.students.filter(item => item.age > age)
                }
            }
        },
        //
        modules: {

        }
    })
    //导出store独享
export default store