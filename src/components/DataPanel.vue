<template>
  <div class="DataPanel">
    <div v-if="chooseD === '默认'" class="defaultTable" key="1">
      <e-chart
          :option="defaultTable.option"
          :dataset="defaultTable.dataset"
          :series="defaultTable.series"
          width="100%"
          height="100%"
      />
    </div>

    <div v-if="chooseD === '上下'" class="upAndDown" key="2">
      <div class="up">
        <e-chart
            :option="defaultTable.option"
            :dataset="defaultTable.dataset"
            :series="defaultTable.series"
            width="100%"
            height="100%"
        />
      </div>
      <div class="down" >
        <el-table
            :data="tableData"
            height="100%">
          <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="province"
              label="省份"
              width="120">
          </el-table-column>
          <el-table-column
              prop="city"
              label="市区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址"
              width="300">
          </el-table-column>
          <el-table-column
              prop="zip"
              label="邮编"
              width="120">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div v-if="chooseD === '左右'" class="leftAndRight" key="3">
      <div class="left">
        <e-chart
            :option="leftAndRight.option"
            :dataset="leftAndRight.dataset"
            :series="leftAndRight.series"
            width="100%"
            height="100%"
        />
      </div>
      <div class="right">
        <e-chart
            :option="leftAndRight.option"
            :dataset="leftAndRight.dataset"
            :series="leftAndRight.series"
            width="100%"
            height="100%"
        />
      </div>
    </div>

    <div v-if="chooseD === '左-上下'" class="leftAndUpDown" key="4">
      <div class="left">
        <e-chart
            :option="leftAndRight.option"
            :dataset="leftAndRight.dataset"
            :series="leftAndRight.series"
            width="100%"
            height="100%"
        />
      </div>
      <div class="upAndDown">
        <div class="up">
          <e-chart
              :option="up.option"
              :dataset="up.dataset"
              :series="up.series"
              width="100%"
              height="100%"
          />
        </div>
        <div class="down">
          <e-chart
              :option="down.option"
              :dataset="down.dataset"
              :series="down.series"
              width="100%"
              height="100%"
          />
        </div>
      </div>
    </div>

    <div v-if="chooseD === '右-上下'" class="rightAndUpDown" key="5">
      <div class="upAndDown">
        <div class="up">
          <e-chart
              :option="up.option"
              :dataset="up.dataset"
              :series="up.series"
              width="100%"
              height="100%"
          />
        </div>
        <div class="down">
          <el-table
              :data="tableData1"
              height="100%"
              :header-cell-style="{height: '30px',padding: '0',color: '#fff',background: '#000',textAlign: 'center'}"
              :cell-style="{textAlign: 'center',padding: '0'}"
              style=""
              border>
            <el-table-column prop="time" label="小时" :resizable="false" sortable></el-table-column>
            <el-table-column prop="number" label="人数" :resizable="false" sortable></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="right">
        <e-chart
            :option="leftAndRight.option"
            :dataset="leftAndRight.dataset"
            :series="leftAndRight.series"
            width="100%"
            height="100%"
        />
      </div>
    </div>
  </div>
</template>

<script>

import EChart from "@/components/Echarts/eChart";
export default {
  name: "DataPanel",
  components: {EChart},
  props: ['chooseD'],
  data(){
    return{
      defaultTable:{
        series: [{
          type: 'bar',
          colorBy: "data",
          label: {
            show: true,
            position: 'right'
          },
        }],
        option: {
          color: ['#7180c2', '#e7d10c', '#86ace3', '#f7891d', '#01cb94', '#007aff'],
          grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
          xAxis: [
            { type: 'value', show: false },
            {
              //右边百分比部分
              type: 'value',
              position: 'bottom',
              min: 0,
              max: 35, //100
              splitNumber: 7,
              axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value}%'
              },
              show: true
            }
          ],
          yAxis: { type: 'category' }
        },
        dataset:  {
          dimensions: ["范围", "用户"],
          source: [
            { 范围: "[其他]", 用户: 77960},
            { 范围: "40~50", 用户: 15394 },
            { 范围: "190~200", 用户: 23695},
            { 范围: "20~30", 用户: 23932},
            { 范围: "30~40", 用户: 31222},
            { 范围: "250~260", 用户: 47241},
          ]
        },
      },
      leftAndRight:{
        series: [{
          type: 'bar',
          colorBy: "data",
          label: {
            show: true,
            position: 'top'
          },
        }],
        option: {
          color: ['#7180c2', '#e7d10c', '#86ace3', '#f7891d', '#01cb94', '#007aff'],
          grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
          yAxis: [
            { type: 'value', show: false },
            {
              //右边百分比部分
              type: 'value',
              position: 'bottom',
              min: 0,
              max: 35, //100
              splitNumber: 7,
              axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value}%'
              },
              show: true
            }
          ],
          xAxis: { type: 'category' }
        },
        dataset:  {
          dimensions: ["范围", "用户"],
          source: [
            { 范围: "[其他]", 用户: 77960},
            { 范围: "40~50", 用户: 15394 },
            { 范围: "190~200", 用户: 23695},
            { 范围: "20~30", 用户: 23932},
            { 范围: "30~40", 用户: 31222},
            { 范围: "250~260", 用户: 47241},
          ]
        },
      },
      up:{
        series: [{
          type: 'line',
          areaStyle: {
            color:{
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(0,180,100,0.2)'
              }, {
                offset: 0.6, color: 'rgba(255,255,255,0)'
              }],
              global: false
            }
          }
        }],
        option: {
          grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
          yAxis: {
            type: 'value'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
          },
        },
        dataset:  {
          dimensions: ["日期", "用户"],
          source: [
            { 日期: "Mon", 用户: 820 },
            { 日期: "Tue", 用户: 932 },
            { 日期: "Wed", 用户: 901 },
            { 日期: "Thu", 用户: 934 },
            { 日期: "Fri", 用户: 1290 },
            { 日期: "Sat", 用户: 1330 },
            { 日期: "Sun", 用户: 1320 }
          ]
        },
      },
      down:{
        series: [{
          name: 'Access From',
          type: 'pie',
          radius: ['55%', '70%'],
          itemStyle: {
            borderRadius: 100,
            borderColor: 'rgba(157,195,230)',
            borderWidth: 20
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
        }],
        option: {
          grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
          tooltip: {
            trigger: 'item'
          },
        },
        dataset:  {
          dimensions: ["名字", "数值"],
          source: [
            { 名字: 'Search Engine', 数值: 1048 },
            { 名字: 'Direct', 数值: 735},
            { 名字: 'Email', 数值: 580},
            { 名字: 'Union Ads', 数值: 484},
            { 名字: 'Video Ads', 数值: 300}

          ]
        },
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      tableData1: [
        {
          time: '07',
          number: '896835'
        },
        {
          time: '08',
          number: '2151934'
        },
        {
          time: '09',
          number: '1240759'
        },
        {
          time: '10',
          number: '4003273'
        },
        {
          time: '11',
          number: '4421532'
        },
        {
          time: '12',
          number: '3817391'
        },
        {
          time: '13',
          number: '3973673'
        },
        {
          time: '14',
          number: '4512445'
        },
        {
          time: '15',
          number: '647000'
        },
        {
          time: '16',
          number: '1865446'
        },
        {
          time: '17',
          number: '3404623'
        },
        {
          time: '18',
          number: '2598297'
        },
        {
          time: '19',
          number: '4803130'
        },
        {
          time: '20',
          number: '2747134'
        },
        {
          time: '21',
          number: '509599'
        },
        {
          time: '22',
          number: '2518148'
        },
        {
          time: '23',
          number: '896835'
        }
      ],
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  .DataPanel{
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    > .defaultTable{
      background-color: RGB(157,195,230);
      flex: 1;
      display: flex;
    }

    > .upAndDown{
      display: flex;
      flex-direction: column;
      flex: 1;
      .up{
        background-color: RGB(157,195,230);
        margin-bottom: 7px;
        flex: 1;
      }
      .down{
        background-color: RGB(157,195,230);
        padding: 10px;
        overflow: hidden;
        flex: 1;
      }
    }

    > .leftAndRight{
      display: flex;
      flex: 1;
      .left{
        background-color: RGB(157,195,230);
        margin-right: 7px;
        flex: 1;
      }
      .right{
        background-color: RGB(157,195,230);
        flex: 1;
      }
    }

    > .leftAndUpDown{
      display: flex;
      flex: 1;
      .left{
        background-color: RGB(157,195,230);
        flex: 1;
        margin-right: 7px;
      }
      .upAndDown{
        display: flex;
        flex-direction: column;
        width: 50%;
        .up{
          background-color: RGB(157,195,230);
          flex: 1;
          margin-bottom: 7px;
        }
        .down{
          background-color: RGB(157,195,230);
          flex: 1;
        }
      }
    }

    > .rightAndUpDown{
      display: flex;
      flex: 1;
      .upAndDown{
        display: flex;
        flex-direction: column;
        width: 50%;
        .up{
          background-color: RGB(157,195,230);
          flex: 1;
          margin-bottom: 7px;
        }
        .down{
          background-color: RGB(157,195,230);
          padding: 10px;
          overflow: hidden;
          flex: 1;
        }
      }
      .right{
        background-color: RGB(157,195,230);
        flex: 1;
        margin-left: 7px;
      }
    }
  }
</style>