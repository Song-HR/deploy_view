<template>
  <div class="app-container">
    <el-button type="primary" @click="add">新增拉新奖励规则</el-button>
    <el-table :data="tableData">
      <el-table-column label="拉取人数" prop="mid_counts" align="center" />
      <el-table-column label="加息券" prop="rate" align="center" />
      <el-table-column label="现金券" prop="cash" align="center" />
      <el-table-column label="返点奖励" prop="rebate" align="center" />
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
        <el-form-item label="拉取人数">
          <el-input v-model.number="ruleForm.mid_counts" />
        </el-form-item>
        <el-form-item label="加息券">
          <el-input v-model.number="ruleForm.rate" />
        </el-form-item>
        <el-form-item label="现金券">
          <el-input v-model.number="ruleForm.cash" />
        </el-form-item>
        <el-form-item label="返点奖励">
          <el-input v-model.number="ruleForm.rebate" />
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
      dialog_visible: false,
      ruleForm: {
        mid_counts: "",
        rate: "",
        cash: "",
        rebate: "",
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
          mid_counts: "1",
          rate: "1",
          cash: "1",
          rebate: "1",
        },
        {
          mid_counts: "3",
          rate: "2",
          cash: "2",
          rebate: "3",
        },
        {
          mid_counts: "5",
          rate: "3",
          cash: "3",
          rebate: "5",
        },
        {
          mid_counts: "10",
          rate: "4",
          cash: "4",
          rebate: "10",
        },
      ];
    },
    add() {
      this.ruleForm = {
        mid_counts: "",
        rate: "",
        cash: "",
        rebate: "",
      };
      this.dialog_visible = true;
    },
    edit(row) {
      console.log(row);
      this.ruleForm = Object.assign({}, { ...row });
      this.dialog_visible = true;
    },
    del(row) {
      this.$confirm(`是否删除该拉新规则配置?`, "提示", {
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
      };
      console.log(data);
      this.$message.success("保存成功");
      this.query();
    },
  },
};
</script>

<style scoped lang="scss"></style>
