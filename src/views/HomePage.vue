<template>
  <div>
    <TopNav class="topNav" />
    <DataPanel />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import DataPanel from "@/components/DataPanel";
export default {
  name: "HomePage",
  components: {DataPanel, TopNav},
}
</script>

<style scoped>
  .topNav{
    margin-bottom: 14px;
  }
</style>