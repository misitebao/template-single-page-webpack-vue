import axios from 'axios'
import qs from 'qs'

// 新建httpClient实例
const http = axios.create({
  baseURL: (process.env.VUE_APP_OPEN_PROXY === 'true') ? '/proxyApi' : process.env.VUE_APP_BasePath, // 根据环境变量设置对应的 baseURL
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  transformRequest: [function (data, headers) {
    // 对 data 进行转换处理
    let contentType = headers["Content-Type"]
    if (contentType && contentType.indexOf('application/json') != -1) {
      // 并且设置 content-type 为 json 时 将请求参数json化
      data = JSON.stringify(data)
    }
    else {
      // 否则使用 qs 格式化
      data = qs.stringify(data)
    }
    return data

  }],
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    // 请求携带头信息 language--语言 token--令牌
    config.headers["language"] = localStorage.getItem("CPY_XXX_LANGUAGE") || 'zh_CN'
    config.headers["token"] = (JSON.parse(localStorage.getItem('CPY_XXX_TOKEN') || '{}').token) || ''

    return config

  },
  err => {
    return Promise.reject(err)
  }
)


// 响应拦截器
http.interceptors.response.use(
  res => {
    const resData = res.data

    if (resData.code) {

      return Promise.reject(resData)

    } else {

      return Promise.resolve(resData)

    }

  },
  err => {
    hideGlobalLoading()
    return Promise.reject(err)

  }
)