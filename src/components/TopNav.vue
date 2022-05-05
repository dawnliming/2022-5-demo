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
      <el-button type="text" size="small" @click="open">{{ !openShow?'展开':'收起' }}<i :class="[ !openShow?'el-icon-arrow-down':'el-icon-arrow-up', 'el-icon--right']"></i></el-button>
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
      options: [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
      ],
      options2: [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
      ],
      chooses:[
        { value: '默认', label: '默认'},
        { value: '上下', label: '上下'},
        { value: '左右', label: '左右'},
        { value: '左-上下', label: '左-上下'},
        { value: '右-上下', label: '右-上下'},
      ],
      value: '',
      choose: '',
      openShow: false, // 展开功能
      windowX: window.innerWidth,
      minNumber: 1
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
    }
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