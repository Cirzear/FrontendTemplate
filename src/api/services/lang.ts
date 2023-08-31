/**
 * 国际化/语言相关接口
 */
import { AxiosResponse } from 'axios'
import axios from '../axios'
import config from '@/config/index'

const baseURL = config.langApiURL

export default {
  /**
   * 获取语种列表
   * @param {AxiosRequestConfig} args
   */
  getLangs: (config: object): Promise<AxiosResponse<object | string>> =>
    axios.get('/language', { baseURL, ...config })
}
