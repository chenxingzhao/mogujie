import axios from 'axios'

export function request(config) {
  const instance=axios.create({
    baseURL:"http://152.136.185.210:8000/api/n3",
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config  //必须返回config 拦截后要还回去
  },error => {

  });
  return instance(config)
}

