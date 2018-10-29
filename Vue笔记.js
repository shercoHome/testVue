// //<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
// 生产版本
// //<script src="https://vuejs.org/js/vue.min.js"></script>

// 插值-文本
// <span>Message: {{ msg }}</span>
// 插值-原始 HTML
// <span v-html="rawHtml"></span>
// 插值-特性
// <div v-bind:id="'list-' + id"></div>

// 指令
//  <p v-if="seen">现在你看到我了</p> //销毁和重建
// <h1 v-show="ok">Hello!</h1>  //初始渲染 基于 CSS 进行切换
// //   <li v-for="todo in todos" :key="todo.id">//无key不按索引重排
// //     {{ todo.text }}
// //    </li>

// 指令-参数（在指令名称之后以冒号表示）
// <span v-bind:title="message"></span>
// <a v-on:click="doSomething">...</a>
// <a v-bind:href="url">...</a>
// 指令-修饰符
// <form v-on:submit.prevent="onSubmit">...</form>
// 事件修饰符
// .stop
// .prevent
// .capture
// .self
// .once  //只会触发一次
// .passive //告诉浏览器你不想阻止事件的默认行为，一般用于滚动事件的监听
// 按键修饰符
// .enter   //<input @keyup.enter="submit">
// .tab
// .delete (捕获“删除”和“退格”键)
// .esc
// .space
// .up
// .down
// .left
// .right
// 鼠标按钮修饰符
// .left
// .right
// .middle
// 指令-缩写
// <a :href="url">...</a>           //v-bind 缩写
// <a @click="doSomething">...</a>  //v-on 缩写

//   <ul>
//     <li
//       is="todo-item" //这样做实现的效果与 <todo-item> 相同
//       v-for="(todo, index) in todos"
//       v-bind:key="todo.id"
//       v-bind:title="todo.title"
//       v-on:remove="todos.splice(index, 1)"
//     ></li>
//   </ul>

// <div v-bind:class="classObject"  v-bind:style="styleObject"></div>

// 表单输入绑定

// v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定
// 单个复选框，绑定到布尔值：
// 多个复选框，绑定到同一个数组
// 单选按钮 <input type="radio" id="one" value="One" v-model="picked"> picked=value
// .trim    自动过滤用户输入的首尾空白字符
// .number  自动将用户的输入值转为数值类型


// 单向数据流
// Prop camelCase (驼峰命名法) <!-- 在 HTML 中是 kebab-case 的 -->在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
// 父级 prop 的更新会向下流动到子组件中，反过来则不行
// ////////////////////////////////////////////////////////////////////////////////////////////////////
// //////对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态。//
// ////////////////////////////////////////////////////////////////////////////////////////////////////
// Prop 定义应该尽量详细。props: {status: String} 至少定义类型（初如值，可选值）
// 1、将其作为一个本地的 prop 数据来使用，定义一个本地的 data 属性并将这个 prop 用作其初始值
Vue.component('component-name', {
      props: ['initialCounter'],
      data: function () {
        return {
          counter: this.initialCounter
        }
      }
    })
// 2、这个 prop 以一种原始的值传入且需要进行转换，最好使用这个 prop 的值来定义一个计算属性
Vue.component('component-name', {
      props: ['size'],
      computed: {
        normalizedSize: function () {
          return this.size.trim().toLowerCase()
        }
      }
    })
// 自定义事件
// 始终使用 kebab-case 的事件名。
// 自定义组件的 v-model可能会将 value 特性用于不同的目的。model 选项可以用来避免这样的冲突

// 将原生事件绑定到组件可以使用 v-on 的 .native 修饰符：
// <base-input v-on:focus.native="onFocus"></base-input>

Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
})

// 对一个 prop 进行“双向绑定”，以 update:myPropName 的模式触发

// <text-document                       //父组件
//   v-bind:title="doc.title"
//   v-on:update:title="doc.title = $event"
// ></text-document>

// <text-document v-bind:title.sync="doc.title"></text-document>  .sync 修饰符 缩写

// this.$emit('update:title', newTitle) //子组件触发事件赋新值


// 插槽

// 假设的 <base-layout> 组件的模板如下：
// <div class="container">
//   <header>
//     <slot name="header"> 插槽的默认内容 </slot> //具名插槽
//   </header>
//   <main>
//     <slot> 插槽的默认内容 </slot>               //默认插槽
//   </main>
//   <footer>
//     <slot name="footer"> 插槽的默认内容 </slot> //具名插槽
//   </footer>
// </div>

// HTML应用如下：
// <base-layout>
//   <template slot="header">              //在一个父组件的 <template> 元素上使用 slot 特性
//     <h1>Here might be a page title</h1>
//   </template>

//   <p>A paragraph for the main content.</p>
//   <p>And another one.</p>

//   <p slot="footer">Here's some contact info</p> //直接用在一个普通的元素上使用 slot 特性
// </base-layout>


// 动态组件
// 当在这些组件之间切换的时候，你有时会想保持这些组件的状态,用一个 <keep-alive> 元素将其动态组件包裹起来

// 【未】异步组件 及 处理加载状态


// 处理边界情况

// 访问根实例             this.$root
// 访问父级组件实例       this.$parent
// 访问子组件实例或子元素 this.$refs
// 依赖注入：
// 	新的实例选项：provide 和 inject。
Vue.component('component-name', {
	provide: function () { //指定我们想要提供给后代组件的数据/方法
  		return {
 		   getMap: this.getMap
 		 }
		}
  });

  {
  inject: ['getMap'] //在任何后代组件里
  }
// 你可以把依赖注入看作一部分“大范围有效的 prop”，除了：

// 祖先组件不需要知道哪些后代组件使用它提供的属性
// 后代组件不需要知道被注入的属性来自哪里

// 程序化的事件侦听器

// 控制更新 强制更新$forceUpdate ,静态组件根元素上添加 v-once 特性
//////////////////////
//单元素 / 组件的过渡//
/////////////////////
//transition :  封装组件，可以给任何元素和组件添加进入/离开过渡
// 1、条件渲染(使用 v -if)
// 2、条件展示(使用 v - show)
// 3、动态组件
// 4、组件根节点
//在进入 / 离开的过渡中，会有 6 个 class 切换。需要自定义class动画，vue负责切换
//v-enter          进入过渡的开始状态
//v-enter-active   进入过渡的生效状态
//v-enter-to       进入过渡的结束状态
//v-leave          离开---开始
//v-leave-active   离开---过渡
//v-leave-to       离开---结束
//如果你使用一个没有名字的 < transition >，则 v - 是这些类名的默认前缀。如果你使用了 < transition name = "my-transition" >，那么 v - enter 会替换为 my - transition - enter。
//:duration="1000" 显性的过渡持续时间
/* <transition
  v-on: before-enter="beforeEnter"
  v-on: enter="enter"
  v-on: after-enter="afterEnter"
  v-on: enter-cancelled="enterCancelled"

  v-on: before-leave="beforeLeave"
  v-on: leave="leave"
  v-on: after-leave="afterLeave"
  v-on: leave-cancelled="leaveCancelled"

  appear                                                  //表示是否开启此特性,当前transition元素第一次渲染时的过渡动画
  appear - class = "custom-appear-class"                  //表示元素渲染完毕后应用的css样式， 它里面的css样式会参与整个动画的过渡
  appear - active - class = "custom-appear-active-class"  //也表示元素渲染完毕后应用的css样式， 它不参与整个动画的过渡
>
钩子函数， 定义在methods（ 可尝试与Velocity.js这个JS动画库结合使用）
</transition> */

//多个元素的过渡 v-if/v-else
/* < transition
  name = "fade"
  mode = "out-in"
  >
        < button
              v-bind:key = "isEditing"
              @click="isEditing = !isEditing"
        >
        {{isEditing ? 'Save' : 'Edit'}}
        </button>
  </transition> */

//多个组件的过渡     v-bind: is=
/* <transition name="component-fade" mode="out-in">
  <component v-bind: is="view"></component>
</transition > */

//列表过渡

/*
  <transition-group name="list" tag="p">
  <span v-for="item in items" v-bind: key="item" class="list-item">
        {{ item }}
      </span>
  </transition - group >

  v- move特性， 它会在元素的改变定位的过程中应用
   lodashjs 库 费雪耶茨洗牌， 重排的方法

列表的交错过渡 jQuery 遍历 - filter() 方法
              通过 data 属性与 JavaScript 通信
可复用的过渡
         < slot > < /slot>，或使用 函数组件
动态过渡
        <transition v-bind:name = "transitionName" ></transition>
        事件钩子
        组件通过接受 props 来动态修改之前的过渡

   */

// 混入
// 混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

// 选项合并：当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。
// 	同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
// 	值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。

// 全局混入：也可以全局注册混入对象。注意使用！ 一旦使用全局混入对象，将会影响到 所有 之后创建的 Vue 实例。使用恰当时，可以为自定义对象注入处理逻辑。



//////////////////////////////////////////
/////////创建一个新的 Vue 实例/////////////
//////////////////////////////////////////

// 我们的数据对象
var data = {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
    message:'Foo Bar is a good man',
    isActive: true,
    error: null,

    arr:["a","b","c"], //data.arr[1] = 'x'   // 不是响应性的,应用 data.arr.splice(indexOfArr, 1, newValue)
                       //data.arr.length = 2 // 不是响应性的,应用 data.arr.splice(newLength)
                       //data.arr2=2         // 不是响应性的,应向嵌套对象添加响应式属性 data.$set(vm.styleObject, 'width', '16px')
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  el: '#example',
  data: data,
  created: function () { //生命周期钩子的函数
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  },
  computed: { //计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    },
    evenNumbers: function () {  //创建返回过滤或排序数组的计算属性
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },


    //或以下添加setter
     fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
  },
  watch: {//侦听属性
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})


////////////////////////////////
/////全局注册  Vue.component////
////////////////////////////////

//在注册之后可以用在任何新创建的 Vue 根实例 (new Vue) 的模板中
//组件是可复用的 Vue 实例，且带有一个名字,我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用
//它们与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。
//////////////////////////////////////////////////////////////////////////////////////////////
/////一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：/////
//////////////////////////////////////////////////////////////////////////////////////////////
Vue.component('component-a', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })

new Vue({ el: '#app' })

// 应用在html如下

// <div id="app">
//   <component-a></component-a>
//   <component-b></component-b>
//   <component-c></component-c>
// </div>

////////////////////////////////////////////////////
///// 局部注册   var ComponentA = { /* ... */ } ////
////////////////////////////////////////////////////

//局部注册的组件在其子组件中不可用

var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})














// 风格指南
// 组件名应该始终是多个单词的. 如 Vue.component('todo-item', {   })；export default {name: 'TodoItem',  }
// 组件的 data 必须是一个函数。 除了 Vue 的根实例
// 总是用 key 配合 v-for。
// 永远不要把 v-if 和 v-for 同时用在同一个元素上。计算属性或将 v-if 移动至容器元素

// 为组件样式设置作用域。这条规则只和单文件组件有关。你不一定要使用 scoped 特性。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。
// 在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
// 把每个组件单独分成文件
// 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
// 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。
// 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。TheHeading.vue     TheSidebar.vue
// 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。TodoListItem.vue  TodoListItemButton.vue
// 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾  SearchButtonClear SearchButtonRun SearchInputQuery
// 在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。
// 对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。
// 只通过 Vue.component 定义全局组件的应用来说，我们推荐 kebab-case 作为替代
// 组件名应该倾向于完整单词而不是缩写。

// 多个特性的元素应该分多行撰写，每个特性一行。
// 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
// 应该把复杂计算属性分割为尽可能多的更简单的属性。





