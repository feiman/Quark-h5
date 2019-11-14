// 组件入口
import Text from "./text";
// 所有组件列表
const components = [Text];

// 定义install 方法，接收 vue 作为参数

const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册组件
  components.map(component => Vue.component(component.name, component));
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Text
};
