## vuex全家桶
https://vuex.vuejs.org/
### vuex安装
```
npm i vuex -S 或 cnpm i vuex -S
```
### vuex使用

1、在src文件夹中创建store文件夹，

2、进入store文件夹，创建index.js文件

3、在index.js中添加下面的代码：
```
import Vue from 'vue'           //导入vue
import Vuex from 'vuex'         //导入vuex
Vue.use(Vuex)                   //使用vuex
let store = new Vuex.Store({    //创建仓库
    state: {                    //
        num: 100
    },
    mutations: {
        add(state) {
            // 变更状态
            state.num++
        },
        min(state) {
            // 变更状态
            state.num--
        }
    }
})
export default store            //导出仓库
```
4、在main.js中配置使用
```
import store from './store'     //导入
···
new Vue({
    el: '#app',
    router,
    store,                      //添加这一行
    template: '<App/>',
    components: {
        App
    }
})
```
### 测试
computed实时更新数据，与data的类型一样二者不共存
```
computed :{
    num(){
        return this.$store.state.num  //访问store.state里面的数据
    }
},
methods: {
    add(){
        // this.num+=5
        this.$store.commit('add')   //通过commit提交，想要执行的方法
    },
    min(){
        // this.num-=5
        this.$store.commit('min')
    }
}
```
### 参数传递
1、单个参数直接传递
```
this.$store.commit('add',num)
在store中做改动
add(state,payload) {
    // 变更状态
    state.num+=payload
},

```
2、使用对象的方式传递
```
this.$store.commit('add',{num:5,name:'saigsf'})
在store中做改动
add(state,payload) {
    // 变更状态
    state.num+=payload.num
},
```
3、其他方式
```
this.$store.commit({
    type:'add',
    num:5,
    name:'saigsf'
})
在store中做改动
add(state,payload) {
    // 变更状态
    state.num+=payload.num
},
```
### store结构分析
```
let store = new Vuex.Store({    //创建仓库
    state: {                    //
        num: 100
    },
    getters: {
        count: state => {
            return state.num>130?130:state.num
        }
    },
    mutations: {
        add(state) {
            // 变更状态
            state.num++
        },
        min(state) {
            // 变更状态
            state.num--
        }
    },
    actions:{
        addAction(context){
            console.log(context);
        },
        textAction(){
            console.log("textAction执行")
        }
    }
})
```
### state
Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

单状态树和模块化并不冲突——在后面的章节里我们会讨论如何将状态和状态变更事件分布到各个子模块中。
#### 在 Vue 组件中获得 Vuex 状态
```
computed :{
    num(){
        return this.$store.state.num  //访问store.state里面的数据
    }
},
```
#### mapState 辅助函数
当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：

1、方式一
```
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```
2、方法二
```
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
    // ...
    computed:{ 
        ···mapState({
            // 箭头函数可使代码更简练
            count: state => state.count,

            // 传字符串参数 'count' 等同于 `state => state.count`
            countAlias: 'count',

            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState (state) {
            return state.count + this.localCount
            }
        }),
        youdo(){

        }

    }
}
```

### mutation
存放变更状态的方法，直接便跟，同步执行，如果要加入延时器，则会发生混乱
### Action
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
#### 在组件中执行
```
this.$store.dispacth('addAction')
```
#### 在组件中分发 Action
你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：
```
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

### Getter
有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数:
```
computed: {
  doneTodosCount () {
    return this.$store.state.num>130?130:this.num
  }
}
```
Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
```
getters: {
    count: state => {
        return state.num>130?130:state.num
    }
},
```
#### mapGetters 辅助函数
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
```
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```

### Module
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
```
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```
#### 模块的局部状态
对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
```
const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
```
同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
```
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
```
对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
```
const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
```

### 命名空间