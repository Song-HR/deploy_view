<template>
  <div class="app-container">
    <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="邀请人配置" name="invite" />
      <el-tab-pane label="被邀请人配置" name="invited" />
    </el-tabs>
    <el-form class="mgt16" :model="ruleForm" label-width="150px">
      <el-form-item label="奖品类型">
        <el-select
          class="w100"
          v-model="ruleForm.reward_type"
          filterable
          allow-create
          clearable
        >
          <el-option
            v-for="item in ['类型1', '类型2', '类型3']"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="加息权益">
        <el-input v-model.number="ruleForm.interset" clearable />
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
      activeName: "invite",
      ruleForm: {
        reward_type: "",
        interset: 0,
      },
    };
  },
  mounted() {
    this.handleClick({ name: this.activeName });
  },
  methods: {
    handleClick(tab) {
      console.log(tab.name);
      if (tab.name == "invite") {
        this.ruleForm = {
          reward_type: "类型1",
          interset: 2,
        };
      } else {
        this.ruleForm = {
          reward_type: "类型3",
          interset: 0,
        };
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
