import axios from 'axios';
import Qs from 'qs';
import config from '@/config/index';
import { useSystemStore } from '@/store/system';

const store = useSystemStore();

import { message } from 'ant-design-vue';
const showMessage = (msg: string): void => {
  message.destroy();
  message.open({
    type: 'error',
    content: msg || '操作失败。',
    duration: 1
  });
};

const axios_ = axios.create({
  baseURL: config.baseURL,
  timeout: 600000, // 请求时间超过600秒视为超时
  paramsSerializer(params) {
    return Qs.stringify(params, { arrayFormat: 'repeat', allowDots: true });
  }
});

axios_.interceptors.request.use(
  (cfg) => {
    return cfg;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios_.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 0;
    let msg;
    // 收集错误信息
    switch (status) {
      case 400:
        msg = '请求无效。';
        break;
      case 401:
        store.clearToken();
        msg = '未登录或登录失败，请重新登录。';
        if (window.location.pathname.endsWith('/login')) {
          // 当前已在登录页
          return Promise.reject(error);
        }
        break;
      case 403:
        msg = '拒绝访问。';
        break;
      case 404:
        msg = `请求地址不存在，${error.config.url}。`;
        break;
      case 405:
        msg = '未授权。';
        break;
      case 408:
        msg = '请求超时。';
        break;
      case 500:
        msg = '服务器内部错误。';
        break;
      case 501:
        msg = '服务未实现。';
        break;
      case 502:
        msg = '网关错误。';
        break;
      case 503:
        msg = '服务不可用。';
        break;
      case 504:
        msg = '网关超时。';
        break;
      case 505:
        msg = 'HTTP版本不受支持。';
        break;
      default:
        msg = '网络波动，请重试。';
    }
    if (axios.isCancel(error)) {
      console.warn('request canceled', error);
      return Promise.reject(error);
    }
    showMessage(msg);
    return Promise.reject(error);
  }
);

export default axios_;

export { axios };
