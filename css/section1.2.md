# 通用布局
<link rel="stylesheet" type="text/css" media="screen" href="../assets/mobile/index.css"/>

## 普通列表

<div class="recommond__wrap">
    <p class="recommond__title">
      热门推荐
    </p>
    <ul>
      <li class="recommond__item">
        <div class="recommond__left">
          <img src="" alt="">
        </div>
        <div class="recommond__right">
          <p class="recommond__right__title">过了腊八就是年，你的家乡有哪些喇叭习惯</p>
          <p class="recommond__right__detail">
            <span class="recommond__right__detail__span">集团制度</span>
            <span class="recommond__right__detail__span">阅读 12345</span>
            <span class="recommond__right__detail__application">打开应用</span>
          </p>
        </div>
      </li>
    </ul>
  </div>

```html
<div class="recommond__wrap">
    <p class="recommond__title">
      热门推荐
    </p>
    <ul>
      <li class="recommond__item">
        <div class="recommond__left">
          <img src="" alt="">
        </div>
        <div class="recommond__right">
          <p class="recommond__right__title">过了腊八就是年，你的家乡有哪些喇叭习惯</p>
          <p class="recommond__right__detail">
            <span class="recommond__right__detail__span">集团制度</span>
            <span class="recommond__right__detail__span">阅读 12345</span>
            <span class="recommond__right__detail__application">打开应用</span>
          </p>
        </div>
      </li>
    </ul>
  </div>

<style>
.recommond__wrap {}

.recommond__title {
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  color: #1A1F25;
}

.recommond__title::before {
  display: inline-block;
  content: '';
  width: 5px;
  height: 16px;
  vertical-align: sub;
  background-color: #FF6214
}

.recommond__item {
  width: 345px;
  height: 105px;
  margin: 0 8px 0 15px;
  padding: 15px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #E5E5E5;
  /*no*/
}

.recommond__left {
  float: left;
  width: 112px;
  height: 75px;
  box-sizing: border-box;
  background-color: red;
}

.recommond__left__img {
  width: 112px;
  height: 75px;
}

.recommond__right {
  box-sizing: border-box;
  padding-left: 122px;
}

.recommond__right__title {
  width: 230px;
  height: 46px;
  font-size: 16px;
  color: #1A1F25;
  line-height: 23px;
}

.recommond__right__detail {
  margin-top: 13px;
}

.recommond__right__detail__span {
  font-size: 11px;
  color: #888888;
  letter-spacing: -0.27px;
}

.recommond__right__detail span:nth-child(2) {
  margin-left: 20px;
}

.recommond__right__detail__application {
  width: 56px;
  height: 18px;
  font-size: 11px;
  color: #FF6214;
  letter-spacing: -0.27px;
  margin-left: 18px;
  padding: 1px 6px 1px 7px;
  border: 1px solid #FF6214;
  /*no*/
  border-radius: 3px;
  /*no*/
  box-sizing: border-box;
}
</style>
```