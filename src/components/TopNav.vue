<template>
  <div id="topnav">
    <div class="cascade" >
      <span>主数据源：</span>
      <el-cascader
          style="width: 100%"
          size="mini"
          placeholder="多选条件"
          v-model="options2"
          :options="options"
          :props="props"
          collapse-tags
          clearable></el-cascader>
    </div>

    <div class="choose" >
      <span>数据模板：</span>
      <el-select size="mini" v-model="choose" placeholder="数据模板">
        <el-option
            v-for="item in chooses"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="task">
      <span >任务名称：</span>
      <el-input size="mini" v-model="input" placeholder="请输入内容"></el-input>
    </div>

    <div class="mainNodes" v-show="isShow('主源节点数')">
      <span>主源节点数：</span>
      <el-input size="mini" v-model="input" placeholder="请输入内容" />-<el-input size="mini" v-model="input" placeholder="请输入内容" />
    </div>

    <div class="secondNodes" v-show="isShow('次源节点数')">
      <span>次源节点数：</span>
      <el-input size="mini" v-model="input" placeholder="请输入内容" />-<el-input size="mini" v-model="input" placeholder="请输入内容" />
    </div>

    <div class="mappings" v-show="isShow('已建立映射数')">
      <span>已建立映射数：</span>
      <el-input size="mini" v-model="input" placeholder="请输入内容" />-<el-input size="mini" v-model="input" placeholder="请输入内容" />
    </div>

    <div class="creatTime" v-show="isShow('创建时间')">
      <span>创建时间：</span>
      <div class="block">
        <el-date-picker
            size="mini"
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
        </el-date-picker>
      </div>
    </div>

    <el-col class="toggle"  >
      <el-button v-show="topnavH >= 100 || options2.length > 0" type="text" size="small" @click="open">{{ !openShow?'展开':'收起' }}<i :class="[ !openShow?'el-icon-arrow-down':'el-icon-arrow-up', 'el-icon--right']"></i></el-button>
    </el-col>
  </div>
</template>

<script>

export default {
  name: "TopNav",
  props: ['chooseD'],
  data() {
    return {
      openShow: true, // 展开功能
      windowX: window.innerWidth,
      topnavH: '',

      choose: '',
      input: '',
      value1: '',
      props: { multiple: true },
      options2: [],
    }
  },
  computed:{
    chooses(){
      return this.$store.state.chooses
    },
    options(){
      return this.$store.state.options
    },
  },
  mounted(){
    window.onresize = ()=>{
      return this.windowX = window.innerWidth
    }
  },
  updated() {
    // 获取并更新topnav的高度
    this.topnavH = document.getElementById('topnav').offsetHeight
  },
  watch:{
    choose(){
      this.$emit('update:chooseD', this.choose)
    },
  },
  methods:{
    open(){
      this.openShow = !this.openShow;
    },
    isShow(string){
      return  this.options2.toString().indexOf(string) > -1 ? this.openShow : false
    }
  },
}
</script>

<style lang="scss" scoped>
#topnav {
  display: flex;
  padding: 10px 10px 0 10px;
  background: wheat;
  flex-wrap: wrap;
  > *{
    margin-right: 30px; margin-bottom: 30px;
    display: flex;
    white-space:nowrap;
    align-items: center;
  };
  .cascade{
    width: 30%;
  }
  .task{
    width: 30%
  }
  .mainNodes{
    width: 40%
  }
  .secondNodes{
    width: 40%
  }
  .mappings{
    width: 45%
  }

  position: relative;
  .toggle{
    position: absolute;
    width: 44px;
    right: 0;
  }
}

</style>