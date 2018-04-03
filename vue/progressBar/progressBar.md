# progressBar 计时器+进度条

## 组件地址

http://gitlab.58corp.com/mis-bigdata/common/tree/master/src/common

## 项目地址

http://gitlab.58corp.com/misfe/mobile-record/blob/master/src/index/views/replay/subpage/on.vue

## 例子
```
import misProgressBar from '@/common/progressBar';

```

```
<mis-progressBar 
:start='progressFlag'
:maxTime = 'max'
:maxWidth='maxWidth'
@stopFn='handleStop'
></mis-progressBar>

```

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| start | 开始时间 | Boolean | false/true | false |
| maxTime | 最大时间 | Number | 0,1,2 | 0 |
| maxWidth | 进度条最大宽度 | Number | 0,1,2 | 1 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| stopFn |计时完成后回调函数 | — |



## 版本修改
1.0 发布