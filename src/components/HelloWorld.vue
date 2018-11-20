<template>
  <div class="hello">
    <div class="scrollContainer" ref="scroll">
      11111111111111111
      <ul>
        <li v-for="(item,index) in student" :key="index" @click="showInfo">
          <label>{{item.name}}</label>
          <label>{{item.sex}}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'hello world',
      student:[
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        },
        {
          name:'tom',
          sex:'mail'
        }
      ],
    }
  },
  computed:{
    ...mapGetters([
      "home_list_top"    //vuex中的存放的滚动条的位置
    ])
  },
  mounted(){
    console.log('test');
  },
  methods:{
    showInfo(){
      this.$router.push({
        path:'/test'
      });
    },
    recordScrollPosition(e) {
      this.$store.dispatch("setHomeListTop",e.target.scrollTop);    //实时存入到vuex中
    }
  },
  activated(){
    let that=this;
    this.$refs.scroll.scrollTop = this.home_list_top;        //this.$refs.scroll拿到滚动的dom，即scrollContainer，this.home_list_top是存入到vuex里的值
    this.$refs.scroll.addEventListener("scroll",that.recordScrollPosition);    //添加绑定事件
  },
  deactivated(){  //keep-alive 的页面跳转时，移除scroll事件
      let that=this;
      this.$refs.scroll.removeEventListener("scroll",that.recordScrollPosition);  //清除绑定的scroll事件
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollContainer{
    width: 100%;
    height: 20rem;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    overflow-x: hidden;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  height:4rem;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
