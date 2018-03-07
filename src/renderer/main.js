import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false;
Vue.use(ElementUI);

router.beforeEach((to , from , next) => {
    //历史路径 修改修改更新方式 跳转到reload组件 再由保存的历史路径跳转回去
    localStorage.setItem('history', from.path);
    next();
});

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
//支持跨域cookie
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
