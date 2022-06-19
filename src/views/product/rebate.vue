<template>
  <div class="app-container">
    <el-form :model="ruleForm" label-width="150px">
      <el-form-item label="申购期时间范围">
        <el-date-picker
          class="w100"
          type="daterange"
          v-model="ruleForm.date_range"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        />
      </el-form-item>
      <el-form-item label="每日返利金额">
        <el-input v-model.number="ruleForm.rebate" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        date_range: [],
        rebate: 0,
      },
    };
  },
  methods: {
    save() {
      console.log(this.ruleForm);
    },
  },
};
</script>

<style scoped lang="scss"></style>
