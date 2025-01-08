# Nexara-H5
| Developer | yy |
| Designer | cz |
| PM | zy |

## api 拦截器相关
1. 错误默认有 message 提示
2. 除了网络错误，其他都是 resolve，按需控制流程
3. 网络错误会 reject，按需控制流程

## URL 编码
目前除了 redirect 这类参数，会主动编码一次外，其他都不做额外处理

## trim
所有的 表单 都没有 trim，不需要做

## Theme
> 这里考虑主题情况下应该如何书写
1. 首先，需要开启 tailwind 的 theme 功能 dark，主要作用于这三种：
```
	extend: {
		textColor: ['dark'],
		backgroundColor: ['dark'],
		borderColor: ['dark'],
	},
```

2. 优先考虑 tailwind，不行的话，css module
css module 可以都用 tailwind，然后 dark 来处理
mixin 是保留项，主要处理组件和特别定制的一些主题差别


## 其他
sharp 可以不装，先放着（package.json 里未删除），这里在部署的时候，明确说图片不需要优化了
`unoptimized: true,` docker 里多少遇到点问题，所以关闭了


## 年前封版记录：
1. 所有的 font c1 颜色，可以考虑删了，直接用继承
2. 数字币提现，目前流程没走，代码没写完
3. 有几个 todo

