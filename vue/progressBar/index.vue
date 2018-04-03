<template>
    <span>
        <span class='mis-progress-time'>{{startTime}}</span>
        <span class='mis-progress-wrap' v-bind:style="{width:maxWidth +'px'}">
            <span class='mis-progress-bar progress-icon' v-bind:style="{width:styleWidth +'px'}"></span>
        </span>

    </span>
</template>

<script>
    export default {
        props:{
            start:{
                 type:Boolean,
                 default: false
            },
            maxTime:{
                type: Number,
                default: 0
            },
            maxWidth:{
                type: Number,
                default: 1
            },
        },
        data(){
            return{
                startTime:'',
                timeIndex:0,
                styleWidth:0
            }
        },
        mounted(){
            this.startTime = `00: 00: 00`;
        },
        watch:{
            start(start){
               start ? this.startCount() : this.stopCount()
            }
        },
        methods:{
            counter(){
                this.timeIndex++;
                let hour = parseInt(this.timeIndex / 3600);
                let minutes = parseInt((this.timeIndex % 3600) / 60);
                let seconds = parseInt(this.timeIndex % 60);
                hour = hour < 10 ? "0" + hour : hour;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                this.startTime = `${hour}: ${minutes}: ${seconds}`;
                this.progress()
                if(this.maxTime == this.timeIndex){
                    this.stopCount()
                    return this.$emit('stopFn',true);
                }
            },
            progress(){
                this.styleWidth = (this.timeIndex/this.maxTime) * this.maxWidth 
            },
            startCount(){
                let timer = setInterval(() => {
                    this.counter()
                }, 1000)
                this.globalTimer = timer
            },
            stopCount(){
                window.clearInterval(this.globalTimer)
            }

        }
    }
</script>
<style scoped>
  .mis-progress-time{
      display: inline-block;
      vertical-align: middle;
      width:100px;
      font-size: 18px;
      color: #F6CB00;
      letter-spacing: -0.38px;
  }
  .mis-progress-wrap{
      padding: 0 5px;
      display: inline-block;
      vertical-align: middle;

  }
  .mis-progress-bar{
        border-radius: 0 5.5px 5.5px 0;
        display: inline-block;
        height: 13px;
        vertical-align: middle
  }
</style>