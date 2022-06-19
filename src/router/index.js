import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "首页",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/backend",
    name: "后台",
    component: Layout,
    redirect: "/backend/product_config",
    meta: {
      title: "后台",
      icon: "el-icon-setting",
    },
    children: [
      {
        path: "product_config",
        name: "产品控制",
        component: () => import("@/views/backend/product_config"),
        meta: { title: "产品控制" },
      },
      {
        path: "welfare",
        name: "福利中心",
        component: () => import("@/views/backend/invite"),
        meta: { title: "福利中心" },
        children: [
          {
            path: "invite",
            name: "邀请配置",
            component: () => import("@/views/backend/invite"),
            meta: { title: "邀请配置" },
          },
        ],
      },
    ],
  },
  {
    path: "/grow",
    name: "成长",
    component: Layout,
    redirect: "/grow/product_config",
    meta: {
      title: "成长",
      icon: "el-icon-data-line",
    },
    children: [
      {
        path: "personal_investment",
        name: "个人投资",
        component: () => import("@/views/grow/vip_level"),
        meta: { title: "个人投资" },
        children: [
          {
            path: "vip_level",
            name: "VIP等级",
            component: () => import("@/views/grow/vip_level"),
            meta: { title: "VIP等级" },
          },
        ],
      },
      {
        path: "pull_new",
        name: "拉新",
        component: () => import("@/views/grow/pull_new"),
        redirect: "/pull_new_level",
        meta: { title: "拉新" },
        children: [
          {
            path: "pull_new_level",
            name: "拉新层级关系查询",
            component: () => import("@/views/grow/pull_new_level"),
            meta: { title: "拉新层级关系查询" },
          },
          {
            path: "pull_new_config",
            name: "拉新奖励配置",
            component: () => import("@/views/grow/pull_new_config"),
            meta: { title: "拉新奖励配置" },
          },
        ],
      },
    ],
  },
  {
    path: "/product",
    name: "产品",
    component: Layout,
    redirect: "/product/rebate",
    meta: {
      title: "产品",
      icon: "el-icon-mobile",
    },
    children: [
      {
        path: "rebate",
        name: "投资返利",
        component: () => import("@/views/product/rebate"),
        meta: { title: "投资返利" },
      },
      {
        path: "quota_type",
        name: "额度类型",
        component: () => import("@/views/product/quota_type"),
        meta: { title: "额度类型" },
      },
      {
        path: "product_control",
        name: "产品控制2",
        component: () => import("@/views/product/product_control"),
        meta: { title: "产品控制" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
