<template>
  <div class="app-container">
    <el-button type="primary" @click="add">新增额度类型</el-button>
    <el-table :data="tableData">
      <el-table-column label="额度名称" prop="name" align="center" />
      <el-table-column label="额度类型" prop="type" align="center" />
      <el-table-column label="数值" prop="value" align="center" />
      <el-table-column label="次数限制" prop="counts" align="center" />
      <el-table-column label="总额限制" prop="total" align="center" />
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
        <el-form-item label="额度名称">
          <el-input v-model.number="ruleForm.name" />
        </el-form-item>
        <el-form-item label="额度类型">
          <el-radio-group v-model="ruleForm.type">
            <el-radio :label="1">浮动额度</el-radio>
            <el-radio :label="2">固定额度</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="ruleForm.type == 1" label="数值">
          <el-input v-model.number="ruleForm.value" />
        </el-form-item>
        <el-form-item label="次数限制">
          <el-input v-model.number="ruleForm.counts" />
        </el-form-item>
        <el-form-item v-if="ruleForm.type == 1" label="总额限制">
          <el-input v-model.number="ruleForm.total" />
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
        name: "",
        type: 1,
        value: "",
        counts: "",
        total: "",
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
          name: "100额度",
          type: "2",
          counts: "1",
          total: "1",
          value: "",
        },
        {
          name: "1000额度",
          type: "2",
          counts: "2",
          total: "3",
          value: "",
        },
        {
          name: "1500额度",
          type: "1",
          counts: "3",
          total: "5",
          value: "1500",
        },
        {
          name: "2000额度",
          type: "1",
          counts: "4",
          total: "10",
          value: "2000",
        },
      ];
    },
    add() {
      this.ruleForm = {
        name: "",
        type: 1,
        counts: "",
        total: "",
        value: "",
      };
      this.dialog_visible = true;
    },
    edit(row) {
      console.log(row);
      this.ruleForm = Object.assign({}, { ...row, type: parseInt(row.type) });
      this.dialog_visible = true;
    },
    del(row) {
      this.$confirm(`是否删除该额度类型?`, "提示", {
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
