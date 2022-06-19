<template>
  <div class="app-container">
    <el-button type="primary" @click="add">新增等级规则</el-button>
    <el-table :data="tableData">
      <el-table-column label="等级" prop="level" align="center" />
      <el-table-column label="充值金额" prop="coins" align="center" />
      <el-table-column label="升级奖励" prop="up_reward" align="center" />
      <el-table-column label="签到奖励" prop="sign_reward" align="center" />
      <el-table-column label="高APY产品是否开放" prop="is_open" align="center">
        <template slot-scope="scope">
          {{ open_map[scope.row.is_open] }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="edit(scope.row)"
            >编辑</el-link
          >&nbsp;&nbsp;
          <el-link type="danger" :underline="false" @click="del(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialog_visible" :before-close="close" width="80%">
      <el-form :model="ruleForm" label-width="150px">
        <el-form-item label="等级">
          <el-input v-model.number="ruleForm.level" />
        </el-form-item>
        <el-form-item label="充值金额">
          <el-input v-model.number="ruleForm.coins" />
        </el-form-item>
        <el-form-item label="升级奖励">
          <el-input v-model.number="ruleForm.up_reward" />
        </el-form-item>
        <el-form-item label="签到奖励">
          <el-input v-model.number="ruleForm.sign_reward" />
        </el-form-item>
        <el-form-item label="高APY产品是否开放">
          <el-switch
            v-model="ruleForm.is_open"
            :on-value="1"
            :off-value="0"
            on-text="是"
            off-text="否"
          />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      open_map: {
        0: "不开放",
        1: "开放",
      },
      dialog_visible: false,
      ruleForm: {
        level: "",
        coins: "",
        up_reward: "",
        sign_reward: "",
        is_open: 0,
      },
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      this.tableData = [
        {
          level: 1,
          coins: 100,
          up_reward: "",
          sign_reward: "",
          is_open: 0,
        },
        {
          level: 2,
          coins: 300,
          up_reward: "",
          sign_reward: "",
          is_open: 0,
        },
        {
          level: 3,
          coins: 500,
          up_reward: "",
          sign_reward: "",
          is_open: 1,
        },
      ];
    },
    add() {
      this.ruleForm = {
        level: "",
        coins: "",
        up_reward: "",
        sign_reward: "",
        is_open: 0,
      };
      this.dialog_visible = true;
    },
    edit(row) {
      console.log(row);
      this.ruleForm = Object.assign({}, { ...row, is_open: !!row.is_open });
      this.dialog_visible = true;
    },
    del(row) {
      this.$confirm(`是否删除等级${row.level}的配置?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功",
        });
      });
    },
    close() {
      this.ruleForm = {};
      this.dialog_visible = false;
    },
    save() {
      let data = {
        ...this.ruleForm,
        is_open: this.ruleForm.is_open ? 1 : 0,
      };
      console.log(data);
      this.$message.success("保存成功");
      this.query();
    },
  },
};
</script>

<style scoped lang="scss"></style>
