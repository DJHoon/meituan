<template>
  <div>
    <ul class="navbar">
      <li>
        <nuxt-link to="/myMeituan">我的美团</nuxt-link>
        <dl class="dlStyle">
          <dd>
            <nuxt-link to="/">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/">我的订单</nuxt-link>
          </dd>

        </dl>
      </li>
      <li>
        <nuxt-link to="/moblieApp">手机App</nuxt-link>
      </li>
      <li>
        <span>商家中心</span>
      </li>
      <li>
        <span>美团规则</span>
      </li>
      <li>
        <span>网站导航</span>
        <div class="divStyle">
          <dl class="webnav">
            <dt>酒店旅游1</dt>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
          </dl>
          <dl class="webnav">
            <dt>酒店旅游2</dt>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
          </dl>
          <dl class="webnav">
            <dt>酒店旅游3</dt>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">酒店旅游</nuxt-link>
            </dd>
          </dl>
          <dl class="webnav">
            <dt>手机应用</dt>
            <dd><a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></a></dd>
            <dd><a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></a></dd>
            <dd><a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></a></dd>
            <dd><a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></a></dd>
            <dd><a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></a></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "nav"
  }
</script>

<style  lang="less" scoped>
dl {
  margin: 0;
}
.navbar {
  float: right;
  >li {
    float: left;
    height: 100%;
    margin-left: 20px;
    padding: 0 10px;
    >dl {
      display: none;
      position:absolute;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      padding: 0 10px;
      z-index: 999;
      background-color: #fff;
      transform: translate(-10px);
    }
    .divStyle {
      display: none;
      width: 1250px;
      position: absolute;
      z-index: 999;
      top: 95%;
      right: 0px;
      background-color: #fff;
      box-sizing: border-box;
      /*border: 1px solid #e5e5e5;*/
      box-shadow: 0 3px 5px rgba(0,0,0,0.1);
      padding-top:20px ;
      padding-bottom: 20px;
      dt {
        color: #222222;
        font-size: 14px;
        text-align: center;
      }
      .webnav {
        &:nth-of-type(1) {
          width: 30%;
          dd {
            margin: 0;
            padding: 0;
            display:inline-block;
            width: 32%;
            text-align: center;
          }
        }
        &:nth-of-type(2) {
          width: 20%;
          dd {
            display:inline-block;
            width: 48%;
            text-align: center;
          }
        }
        &:nth-of-type(3) {
          width: 10%;
          dd {
            display: block;
            text-align: center;
          }
        }
        &:nth-of-type(4) {
          width: 40%;
          text-align: center;
          dd {
            width: 15%;
            display: inline-block;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &:hover {
      color: var(--Orangecolors);
      >dl {
        display: block;
      }
    }
    &:hover:not(:nth-of-type(2)) {
      background-color: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    }
    &:hover:nth-of-type(5) {
      background-color: #fff;
      box-shadow: none;
      .divStyle {
        display: flex;
      }
    }
  }
}
@media screen and (max-width:1250px) {
  .navbar>li .divStyle {
    width: 1250px;
  }
}
</style>
