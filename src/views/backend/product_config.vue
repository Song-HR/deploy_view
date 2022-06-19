<template>
  <div class="app-container">
    <el-form :model="ruleForm" label-width="150px">
      <el-form-item label="初始募集资金数">
        <el-input v-model.number="ruleForm.target_value" clearable />
      </el-form-item>
      <el-form-item label="用户份数范围">
        <el-row type="flex" align="middle">
          <el-col :span="10">
            <el-input v-model.number="ruleForm.min_nums" clearable />
          </el-col>
          <el-col :span="4">
            <div class="center">——</div>
          </el-col>
          <el-col :span="10">
            <el-input v-model.number="ruleForm.max_nums" clearable />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="用户白名单">
        <el-select
          class="w100"
          v-model="ruleForm.white_list"
          multiple
          filterable
          allow-create
          clearable
        >
          <el-option
            v-for="item in ['user_1', 'user_2', 'user_3']"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="募集资金金额">
        <el-input v-model.number="ruleForm.cur_value" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        target_value: 1000,
        min_nums: 0,
        max_nums: 999,
        white_list: [],
        cur_value: 0,
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
