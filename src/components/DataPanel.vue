<template>
  <div class="DataPanel">
    <div v-if="chooseD === '默认'" class="defaultTable">
      <div>数据表格</div>
    </div>

    <div v-if="chooseD === '上下'" class="upAndDown">
      <div class="up">上</div>
      <div class="down">下</div>
    </div>

    <div v-if="chooseD === '左右'" class="leftAndRight">
      <div class="left">左</div>
      <div class="right">右</div>
    </div>

    <div v-if="chooseD === '左-上下'" class="leftAndUpDown">
      <div class="left">左</div>
      <div class="upAndDown">
        <div class="up">上</div>
        <div class="down">下</div>
      </div>
    </div>

    <div v-if="chooseD === '右-上下'" class="rightAndUpDown">
      <div class="upAndDown">
        <div class="up">上</div>
        <div class="down">下</div>
      </div>
      <div class="right">右</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataPanel",
  props: ['chooseD'],
}
</script>

<style lang="scss" scoped>
  .DataPanel{
    width: 100%;
    height: 100vh;
    display: flex;
    > .defaultTable{
      background-color: RGB(157,195,230);
      flex: 1;
      display: flex;
    }

    > .upAndDown{
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .up{
        background-color: RGB(157,195,230);
        flex: 1;
        width: 100vw;
        margin-bottom: 7px;
      }
      .down{
        background-color: RGB(157,195,230);
        flex: 1;
      }
    }

    > .leftAndRight{
      display: flex;
      overflow: hidden;
      .left{
        background-color: RGB(157,195,230);
        width: 100vw;
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
      overflow: hidden;
      .left{
        background-color: RGB(157,195,230);
        width: 50vw;
        margin-right: 7px;
      }
      .upAndDown{
        display: flex;
        flex-direction: column;
        width: 50vw;
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
      overflow: hidden;
      .upAndDown{
        display: flex;
        flex-direction: column;
        width: 50vw;
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
      .right{
        background-color: RGB(157,195,230);
        width: 50vw;
        margin-left: 7px;
      }
    }
  }
</style>