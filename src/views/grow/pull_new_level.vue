<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="用户名" width="180" align="center" />
      <el-table-column prop="date" label="拉新日期" sortable width="180" align="center" />
      <el-table-column prop="coins" label="投资金额" align="center" />
      <el-table-column prop="rebate" label="返点奖励" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "用户1",
          coins: 100,
          rebate: 0,
        },
        {
          id: 2,
          date: "2016-05-01",
          name: "用户2",
          coins: 100,
          rebate: 2,
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "用户21",
              coins: 100,
              rebate: 0,
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "用户22",
              coins: 100,
              rebate: 0,
            },
          ],
        },
        {
          id: 3,
          date: "2016-05-03",
          name: "用户3",
          coins: 100,
          rebate: 0,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
