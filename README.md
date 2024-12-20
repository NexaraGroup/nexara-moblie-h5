# Nexara-H5
| Developer | yy |
| Designer | cz |
| PM | zy |

## api 拦截器相关
1. 错误默认 message
2. 除了网络错误，其他都是 resolve，按需控制流程
3. 网络错误会 reject，按需控制流程

## Theme
> 这里考虑主题情况下应该如何书写
1. 首先，需要开启 tailwind 的 theme 功能 dark，全都归结于这三种
```
	extend: {
		textColor: ['dark'],
		backgroundColor: ['dark'],
		borderColor: ['dark'],
	},
```

2. 原则上，都用 css module 写，灵活的用 tailwind 写
css module 可以都用 tailwind，然后 dark 来处理
mixin 是保留项，主要处理组件和特别定制的一些主题差别

TODO，我这边处理具体 antd 已经特别定制的主题，在平常的地方，暗色主题已经写进去了，需要等 cz 确认完，直接改 tailwind 就行了
