# Jquery 插件

1. 引入`assets/utils`中Jquery
```
<script src="../assets/js/jquery-1.12.4.js"></script>
```
2. 引入`assets/packages`中对应的组件文件
```
<script src="../assets/package/button.js"></script>
```

3. Mackdown中书写对应文档及示例

书写示例可通过直接Mackdown当中书写HTML标签及`<script></script>`

## Example

以下使用Button组件当中文档示例

## Quick Start

<script src="../assets/utils/jquery-1.12.4.js"></script>
<script src="../assets/package/button.js"></script>

通过示例应用组件

### 简单应用
<div id="button_simple"></div>
<script>
  $('#button_simple').button({
    text: '我是按钮',
    css: {

    }
  })
</script>

```javascript
$('#button_simple').button({
  text: '我是按钮'
})
```


### 指定type

<div id="button_type"></div>
<script>
  $('#button_type').button({
    text: '我是特殊按钮',
    css: {
      background: 'blue'
    }
  })
</script>

```javascript
$('#button_type').button({
  text: '我是特殊按钮',
  css: {
    background: 'blue'
  }
})
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **text** | **button中内容** | string | — | — |
| css | 样式 | string | success/warning/info/error | info |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击时触发的事件 | — |
