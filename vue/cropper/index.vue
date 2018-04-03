<template>
    <div style='width:830px'>
        <canvas id="canvas" class='mis-canvas'></canvas>
        <canvas id='canvas2'class='mis-canvas'></canvas>
    </div>
</template>
<script>
    export default {
         props:{
            src:{
                 type:String,
                 default: ''
            }
        },
        data(){          
            return {
                w:'360',
                h:'640',
                //按比例放大
                scale:1,
                //按比例之后 
                scaleWidth:'',

                scaleHeight:'',
                //剪切大小
                cropWidth:'',

                cropHeight:'',
                //是否开始画矩形
                isDownDrag:false,
                //内容
                context:null,
                //起点坐标
                curPoint:null
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            //提交
            init(){
               let canvas = document.getElementById('canvas')
               this.context = canvas.getContext('2d');
               canvas.height = this.h
               canvas.width = this.w
               let image = new Image()
               image.src = this.src
               image.onload = ()=>{
                   //查看原图与canvas的对比后
                   this.onScale(image)
                    //绘制图片 
                   this.context.drawImage(image,0,0,this.scaleWidth,this.scaleHeight)
               }
               canvas.onmousedown = (e)=>{
                   e.preventDefault();
                   this.isDownDrag = true 
                   //当前坐标
                   this.curPoint = this.windowToCanvous(e.clientX,e.clientY)
               }
               canvas.onmousemove = (e)=>{
                   e.preventDefault();
                   if(this.isDownDrag){
                     let point = this.windowToCanvous(e.clientX,e.clientY)
                      //开始画矩形 
                      this.context.clearRect(0, 0, this.w, this.h)
                      this.context.drawImage(image,0,0,this.scaleWidth,this.scaleHeight)
                      this.dragRect(point)
                   }
                   
               }
               canvas.onmouseup = (e)=>{
                   e.preventDefault();
                   this.isDownDrag = false

               }
               canvas.onmouseout = (e)=>{
                   e.preventDefault();
                   this.isDownDrag = false
              
               }

            },
            //讲屏幕上的坐标转换成cavous图标
            windowToCanvous(x, y){
                //包围canvous
                let bbox = canvas.getBoundingClientRect()
                return {
                    x: x - bbox.x,
                    y: y - bbox.y
                }
            },
            //编画截图范围 （矩形）
            dragRect(point){
                this.cropWidth = point.x - this.curPoint.x 
                this.cropHeight = point.y - this.curPoint.y 
                this.context.beginPath();
                this.context.lineWidth="1";
                this.context.strokeStyle="green";
                this.context.rect(this.curPoint.x, this.curPoint.y, this.cropWidth, this.cropHeight);
                this.context.stroke();
            },
            //等比例缩放图形
            onScale(image){
                let trueWidth = image.width
                let trueHeight = image.height
                	if (trueWidth > this.w) {
						// 如果图片宽度大于容器宽度
						this.scale = this.w / trueWidth
					}
					if (trueHeight * this.scale > this.h) {
						this.scale = this.h / trueHeight
					}
                    this.scaleWidth = trueWidth * this.scale;
                    this.scaleHeight = trueHeight * this.scale 
            },
            getCropData(type,cb){
                let canvas2 = document.getElementById('canvas2')
			    let img = new Image()
                img.src = this.src 
                canvas2.height = this.cropHeight
                canvas2.width = this.cropWidth
                img.onload = () =>{
                    let ctx = canvas2.getContext('2d') 
                    ctx.drawImage(
                        img, 
                        this.curPoint.x / this.scale, 
                        this.curPoint.y / this.scale, 
                        this.cropWidth / this.scale, 
                        this.cropHeight / this.scale,
                        0,
                        0,
                        this.cropWidth,
                        this.cropHeight)  
                    let images = canvas2.toDataURL("image/png") 
                    if(type == 'finsh'){
                        canvas2.toBlob((blob)=>{
                            let formData = new FormData();
                            formData.append('file', blob);
                            let x = this.curPoint.x / this.scale
                            let y = this.curPoint.y / this.scale
                            formData.append('position', x + ',' + y, );
                            cb(formData,images) 
                        })
                    }       
                }
               
          
            },
            //取消预览功能
            clearCanvas(){
                let canvas2 = document.getElementById("canvas2");
                let ctx = canvas2.getContext('2d');
                ctx.clearRect(0,0,canvas2.width,canvas2.height); 
            }
        }
    }
</script>
<style scoped>

</style>