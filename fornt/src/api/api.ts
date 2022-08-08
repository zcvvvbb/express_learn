import  request from './request'

export function moviesApi(){
  return request({
    method:'get',
    url:'/movie',
  })
}