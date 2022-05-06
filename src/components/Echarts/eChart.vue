<template>
  <div class="eChart" ref="main" :style="{width: width, height: height}"></div>
</template>

<script>
export default {
  name: "eChart",
  props:{
    width: {type: String, default: "600px"},
    height: { type: String, default: "400px"},
    option: { type: Object, default: function _default() {return {} } },
    dataset: { type: [Object, Array], default: function _default() {return {} } },
    series: { type: [Object, Array], default: function _default() {return {} } }
  },
  mounted() {
    if (this.$refs.main == null) return
    this.$echarts.dispose(this.$refs.main)
    this.init()
  },
  methods:{
    type_x_y_axis(){
      const arr = ['bar', 'line', 'scatter', 'effectScatter']
      return arr.indexOf(this.series[0].type) > -1
    },
    series_solve(){
      // 当类型传值等于一个时，而传值维度大于1时
      //【'bar', 'line', 'scatter', 'effectScatter'】四个图表类型可在同一图表上绘制多个
      if(this.type_x_y_axis() && this.series.length === 1 && this.dataset.dimensions.length-1 > 1){
        const s = []
        for (let i = 0; i < this.dataset.dimensions.length-1; i++) {
          s.push({type:this.series[0].type})
        }
        return s
      }else{
        return this.series
      }
    },
    init(){
      const myChart = this.$echarts.init(this.$refs.main)
      let option = {
        tooltip: {
          trigger: this.series && this.series[0].type === 'pie' || this.series[0].type === 'funnel' ? 'item' : 'axis'
        },
        dataset: this.dataset,
        xAxis: {
          show: this.type_x_y_axis(),
          type: 'category'
        },
        yAxis: {
          show: this.type_x_y_axis()
        },
        grid: {left: '15%'},
        series: this.series_solve()
      }
      myChart.clear()
      myChart.setOption(option)


      // 判断【this.option】是否有值时才进行设置，优化性能，避免空值时，无效设置
      if (Object.values(this.option).length > 0){
        myChart.setOption(this.option)
      }

      // 让图表随着屏幕大小自适应
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    }
  }
}
</script>

<style scoped>

</style>