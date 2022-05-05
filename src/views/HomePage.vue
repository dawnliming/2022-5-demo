<template>
  <div>
    <TopNav :chooseD.sync="chooseD" class="topNav" />
    <DataPanel :chooseD.sync="chooseD" />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import DataPanel from "@/components/DataPanel";
export default {
  name: "HomePage",
  components: {DataPanel, TopNav},
  data(){
    return{
      chooseD: '上下'
    }
  }
}
</script>

<style scoped>
  .topNav{
    margin-bottom: 14px;
  }
</style>