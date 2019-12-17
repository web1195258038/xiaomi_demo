<template>
  <div>
    <van-tree-select height="150vw" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <leeches></leeches>
      </template>
    </van-tree-select>
  </div>
</template>
<script type="text/javascript">
import Tabbar from "../../components/Tabbar.vue";
import Leeches from "./leeches.vue";
export default {
  components: {
    Tabbar,
    Leeches
  },
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "手机"},
        { text: "电视"},
        { text: "电脑"},
        { text: "家电"},
        { text: "路由"},
        { text: "出行"},
        { text: "出行"},
        { text: "智能"},
        { text: "灯具"},
        { text: "家电"},
        { text: "电脑"}
      ]
    };
  }
};
</script>
<style type="text/css">
</style>