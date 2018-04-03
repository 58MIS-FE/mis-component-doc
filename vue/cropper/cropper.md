# cropper 截图插件 + 预览功能

## 组件地址

http://gitlab.58corp.com/mis-bigdata/common/tree/master/src/common

## 项目地址

http://gitlab.58corp.com/misfe/mobile-record/blob/master/src/index/views/replay/subpage/on.vue

## 例子

```
  import misCropper from '@/common/cropper';

```

```
<mis-cropper
    ref="cropper"
    :src="'/screenshot?'+ Math.random()"
></mis-cropper>

<div class='operation-btn'>
    <button @click='handleClick(1)' class='mis-success-btn warning'>预览</button>
    <button @click='handleCanel()' class='mis-success-btn'>取消</button>
    <button @click='handleFinsh()' class='mis-success-btn success'>保存</button>
</div>

```

```

handleClick(){
    this.$refs.cropper.getCropData()
},
handleFinsh(){
    this.$refs.cropper.getCropData('finsh',(formData,images)=>{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", 'url'); //注意跨域问题
          xmlHttp.send(formData);
          xmlHttp.onreadystatechange = ()=> {
              if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    this.imgList.push(images)            
              } else {　　　　　　
                  console.log(xmlHttp.statusText);　　
              }
          };
    })
},
handleCanel(){
  this.$refs.cropper.clearCanvas()
}

```

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| src | 路径 | Boolean | false/true | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| clearCanvas | 重置画布 |  |



## 版本修改
1.0 发布