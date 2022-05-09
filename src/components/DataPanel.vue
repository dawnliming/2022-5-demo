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
            height="100%"
            style="flex: none"
            >
          <el-table-column
              fixed
              prop="date"
              label="日期">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名">
          </el-table-column>
          <el-table-column
              prop="province"
              label="省份">
          </el-table-column>
          <el-table-column
              prop="city"
              label="市区">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址">
          </el-table-column>
          <el-table-column
              prop="zip"
              label="邮编">
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
import DP from './DP.js'
import EChart from "@/components/Echarts/eChart";
export default {
  name: "DataPanel",
  components: {EChart},
  props: ['chooseD'],
  computed:{
    defaultTable(){
      return DP.defaultTable
    },
    leftAndRight(){
      return DP.leftAndRight
    },
    up(){
      return DP.up
    },
    down(){
      return DP.down
    },
    tableData(){
      return DP.tableData.tableData
    },
    tableData1(){
      return DP.tableData1.tableData1
    }
  },
  data(){
    return{

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
        display: flex;
        justify-content: center;
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