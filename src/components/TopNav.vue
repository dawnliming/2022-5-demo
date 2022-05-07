<template>
  <div class="topnav">
    <div >
      <el-cascader
          class="cascade"
          placeholder="多选条件"
          v-model="options2"
          :options="options"
          :props="props"
          collapse-tags
          clearable></el-cascader>
    </div>

    <div id="condition">
      <el-select v-model="choose" placeholder="数据模板">
        <el-option
            v-for="item in chooses"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>

      <div v-show="index > selectNumber ? openShow : true" v-for="(select,index) in options2" :key="index" >
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <el-col class="toggle"  >
      <el-button v-show="selectNumber+1<options2.length" type="text" size="small" @click="open">{{ !openShow?'展开':'收起' }}<i :class="[ !openShow?'el-icon-arrow-down':'el-icon-arrow-up', 'el-icon--right']"></i></el-button>
    </el-col>
  </div>
</template>

<script>

export default {
  name: "TopNav",
  props: ['chooseD'],
  data() {
    return {
      props: { multiple: true },
      options2: [],
      value: '',
      choose: '',
      openShow: true, // 展开功能
      windowX: window.innerWidth,
      minNumber: 1,
    }
  },
  computed:{
    selectNumber(){
      if (this.minNumber  >= Math.floor((this.windowX - 350) / 230 - 2)){
        return this.minNumber
      }else {
        return Math.floor((this.windowX - 350) / 230 - 2)
      }
    },
    chooses(){
      return this.$store.state.chooses
    },
    options(){
      return this.$store.state.options
    }
  },
  methods:{
    open(){
      this.openShow = !this.openShow;
    },
  },
  mounted(){
    window.onresize = ()=>{
      return this.windowX = window.innerWidth
    }
  },
  watch:{
    choose(){
      this.$emit('update:chooseD', this.choose)
    },
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 30px 30px 0 30px;
  background: wheat;
  .cascade{
    width: 200px;
    margin-right: 30px;
  }
  #condition{
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    > *{
      margin-right: 30px; margin-bottom: 30px; width: 200px
    }
 }
  .toggle{
    display: flex;
    justify-content: right;
    flex: 0 0 30px;
    margin-bottom: 30px;
  }
}

</style>