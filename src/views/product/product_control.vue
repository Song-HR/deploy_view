<template>
  <div class="app-container">
    <el-card header="申购期">
      <section class="show-box">
        <div>
          <h3 class="h3-title">初始投资人数</h3>
          <p class="txt">{{ mid_counts }} 人</p>
        </div>
        <div>
          <h3 class="h3-title">初始已完成额度</h3>
          <p class="txt">{{ finished_num }} 元</p>
        </div>
      </section>
    </el-card>
    <el-card header="封闭期" class="mgt16">
      <section class="show-box">
        <div>
          <h3 class="h3-title">初始投资人数</h3>
          <p class="txt">{{ close_mid_counts }} 人</p>
        </div>
        <div>
          <h3 class="h3-title">初始已完成额度</h3>
          <p class="txt">{{ close_finished_num }} 元</p>
        </div>
      </section>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mid_counts: 2000,
      finished_num: 200000,
      close_mid_counts: 0,
      close_finished_num: 0,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.show-box {
  display: flex;
  div {
    flex: 1;
    .h3-title {
      font-size: 16px;
      font-weight: 500;
    }
    .txt {
      font-size: 30px;
      font-weight: 700;
      color: #409eff;
      margin: 5px 0;
    }
  }
}
</style>
