<template>
  <div id="app">

    <nav class="nav">
      <a v-if="!isFullScreen" href="#/" :class="{ selected: isNavSelected('#/') }"> 礼佛 </a>

      <a v-if="!isFullScreen" href="#/阿弥陀佛心咒" :class="{ selected: isNavSelected('#/阿弥陀佛心咒'), show: isShowMenu }"> 阿弥陀佛心咒 </a>
      <a v-if="!isFullScreen" href="#/大悲咒" :class="{ selected: isNavSelected('#/大悲咒'), show: isShowMenu }"> 大悲咒 </a>
      <a v-if="!isFullScreen" href="#/楞严咒" :class="{ selected: isNavSelected('#/楞严咒'), show: isShowMenu }"> 楞严咒 </a>
      <a v-if="!isFullScreen" href="#/六字大明咒" :class="{ selected: isNavSelected('#/六字大明咒'), show: isShowMenu }"> 六字大明咒 </a>
      <a v-if="!isFullScreen" href="#/绿度母心咒" :class="{ selected: isNavSelected('#/绿度母心咒'), show: isShowMenu }"> 绿度母心咒 </a>
      <a v-if="!isFullScreen" href="#/往生咒" :class="{ selected: isNavSelected('#/往生咒'), show: isShowMenu }"> 往生咒 </a>
      <a v-if="!isFullScreen" href="#/药师佛心咒" :class="{ selected: isNavSelected('#/药师佛心咒'), show: isShowMenu }"> 药师佛心咒 </a>
      <a v-if="!isFullScreen" href="#/准提咒" :class="{ selected: isNavSelected('#/准提咒'), show: isShowMenu }"> 准提咒 </a>

      <div class="more">
        <a v-if="!isFullScreen" href="https://www.douyin.com/user/MS4wLjABAAAAp2AMkZZPr5PB1Zng7Q-WB5nHJbZ7RcgOd0eJpnMB0bc" title="购买念珠" target="_blank">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3300" width="30" height="30"><path d="M970.296891 531.869536l-0.793062-245.3745c0 0-3.594875-73.835635-68.066235-73.835635l-682.776502 0.911766-15.051811-36.226063c0 0-15.246239-107.796098-88.63162-107.796098 0 0-88.649016 0-88.649016 106.172111l74.343195-0.109494c0 0 91.01797 517.018294 91.01797 532.596084 0 19.543102 15.910365 70.701249 35.553751 70.701249l671.559019 0c19.652596 0 35.56296-33.478486 35.56296-53.021587 0-19.523659-15.910365-53.038984-35.56296-53.038984l-622.620423 0-17.679661-70.499657 642.199341-2.803859C900.700813 599.546915 970.296891 600.358397 970.296891 531.869536zM329.545528 496.056889c0 19.533892-15.920598 35.368532-35.57217 35.368532l-1.115404 0c-19.652596 0-35.580357-15.835663-35.580357-35.368532l0-35.341926c0-19.531845 15.927761-35.368532 35.580357-35.368532l1.115404 0c19.652596 0 35.57217 15.836687 35.57217 35.368532L329.545528 496.056889zM329.545528 354.62574c0 19.543102-15.920598 35.368532-35.57217 35.368532l-35.582403 0c-19.643386 0-35.580357-15.82543-35.580357-35.368532l0-35.352159c0-19.531845 15.936971-35.359322 35.580357-35.359322l35.582403 0c19.652596 0 35.57217 15.827477 35.57217 35.359322L329.545528 354.62574zM471.852628 496.056889c0 19.533892-15.920598 35.368532-35.57217 35.368532l-35.57217 0c-19.652596 0-35.582403-15.835663-35.582403-35.368532l0-35.341926c0-19.531845 15.929808-35.368532 35.582403-35.368532l35.57217 0c19.652596 0 35.57217 15.836687 35.57217 35.368532L471.852628 496.056889zM471.852628 354.62574c0 19.543102-15.920598 35.368532-35.57217 35.368532l-35.57217 0c-19.652596 0-35.582403-15.82543-35.582403-35.368532l0-35.352159c0-19.531845 15.929808-35.359322 35.582403-35.359322l35.57217 0c19.652596 0 35.57217 15.827477 35.57217 35.359322L471.852628 354.62574zM614.167914 496.056889c0 19.533892-15.927761 35.368532-35.580357 35.368532l-35.582403 0c-19.643386 0-35.57217-15.835663-35.57217-35.368532l0-35.341926c0-19.531845 15.929808-35.368532 35.57217-35.368532l35.582403 0c19.652596 0 35.580357 15.836687 35.580357 35.368532L614.167914 496.056889zM614.167914 354.62574c0 19.543102-15.927761 35.368532-35.580357 35.368532l-35.582403 0c-19.643386 0-35.57217-15.82543-35.57217-35.368532l0-35.352159c0-19.531845 15.929808-35.359322 35.57217-35.359322l35.582403 0c19.652596 0 35.580357 15.827477 35.580357 35.359322L614.167914 354.62574zM756.475014 496.056889c0 19.533892-15.927761 35.368532-35.580357 35.368532l-35.56296 0c-19.652596 0-35.582403-15.835663-35.582403-35.368532l0-35.341926c0-19.531845 15.929808-35.368532 35.582403-35.368532l35.56296 0c19.652596 0 35.580357 15.836687 35.580357 35.368532L756.475014 496.056889zM756.475014 354.62574c0 19.543102-15.927761 35.368532-35.580357 35.368532l-35.56296 0c-19.652596 0-35.582403-15.82543-35.582403-35.368532l0-35.352159c0-19.531845 15.929808-35.359322 35.582403-35.359322l35.56296 0c19.652596 0 35.580357 15.827477 35.580357 35.359322L756.475014 354.62574zM898.783137 496.056889c0 19.533892-15.927761 35.368532-35.56296 35.368532l-35.580357 0c-19.654642 0-35.582403-15.835663-35.582403-35.368532l0-35.341926c0-19.531845 15.927761-35.368532 35.582403-35.368532l35.580357 0c19.635199 0 35.56296 15.836687 35.56296 35.368532L898.783137 496.056889zM898.783137 354.62574c0 19.543102-15.927761 35.368532-35.56296 35.368532l-35.580357 0c-19.654642 0-35.582403-15.82543-35.582403-35.368532l0-35.352159c0-19.531845 15.927761-35.359322 35.582403-35.359322l35.580357 0c19.635199 0 35.56296 15.827477 35.56296 35.359322L898.783137 354.62574zM720.895681 814.288744c-39.895639 0-72.251557 31.04711-72.251557 70.702272 0 39.693024 32.355919 71.845305 72.251557 71.845305 39.913035 0 72.268954-32.152281 72.268954-71.845305C793.163611 845.335854 760.807692 814.288744 720.895681 814.288744zM327.33314 814.288744c-39.915082 0-70.065775 29.940916-70.065775 69.614497s30.150694 71.826885 70.065775 71.826885c39.904849 0 72.268954-32.152281 72.268954-71.826885S367.237989 814.288744 327.33314 814.288744z" fill="#fff" p-id="3301"></path></svg>
        </a>
        <a title="全屏" @click="toggleFullScreen">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2941" width="30" height="30"><path d="M256 874.666667a21.333333 21.333333 0 0 1-21.333333 21.333333H96a53.393333 53.393333 0 0 1-53.333333-53.333333v-138.666667a21.333333 21.333333 0 0 1 42.666666 0v138.666667a10.666667 10.666667 0 0 0 10.666667 10.666666h138.666667a21.333333 21.333333 0 0 1 21.333333 21.333334zM42.666667 320V181.333333a53.393333 53.393333 0 0 1 53.333333-53.333333h138.666667a21.333333 21.333333 0 0 1 0 42.666667H96a10.666667 10.666667 0 0 0-10.666667 10.666666v138.666667a21.333333 21.333333 0 0 1-42.666666 0z m938.666666-138.666667v138.666667a21.333333 21.333333 0 0 1-42.666666 0V181.333333a10.666667 10.666667 0 0 0-10.666667-10.666666h-138.666667a21.333333 21.333333 0 0 1 0-42.666667h138.666667a53.393333 53.393333 0 0 1 53.333333 53.333333z m0 522.666667v138.666667a53.393333 53.393333 0 0 1-53.333333 53.333333h-138.666667a21.333333 21.333333 0 0 1 0-42.666667h138.666667a10.666667 10.666667 0 0 0 10.666667-10.666666v-138.666667a21.333333 21.333333 0 0 1 42.666666 0z" fill="#fff" p-id="2942"></path></svg>
        </a>
      </div>

      <svg @click="isShowMenu = !isShowMenu" viewBox="0 0 16 16" version="1.1" height="24" width="24" class="menu"><path fill="burlywood" fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
    </nav>

    <router-view></router-view>

    <div class="nav copyright"> <a href="https://neil-pan.com" target="_blank">© NEIL PAN 2023</a> </div>
  </div>
</template>

<script>
// import 'font-awesome/css/font-awesome.min.css'
import screenfull from 'screenfull'

export default {
  name: 'App',
  data() {
    return {
      isFullScreen: false,
      isShowMenu: false,
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => this.isShowMenu = false)
  },
  methods: {
    isNavSelected(hash) {
      return location.hash == encodeURI(hash)
    },
    toggleFullScreen() {
      if (screenfull.isEnabled) { 
        screenfull.toggle(document.querySelector('body')); 
        this.isFullScreen = !this.isFullScreen
      }
    }
  },
}
</script>

<style>
  @font-face {
    font-family: 'GuYaSong';
    src: url('/GuYaSong-NC.otf');
  }

  * { padding: 0px; margin: 0px; }

  html,body {
    width: 100%;
    height: 100%;
    background: #000;
  }

  #app {
    font-family: 'GuYaSong', "Microsoft Yahei", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 17px;
    color: #eee;
    width: 100%;
    height: 100%;

    -moz-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    -khtml-user-select:none;
    user-select:none;
    position: relative;
    overflow: hidden;
  }

  .nav {
    font-size: 20px;
    margin: 50px 0px;
    padding-left: 50px;
    min-height: 40px;
  }

  .nav a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    opacity: 0.3;
    font-weight: bold;
    padding: 5px;
    letter-spacing: 2px;
  }

  .nav a:hover {
    opacity: 0.6;
    color: burlywood;
  }

  .nav .menu {
    display: none;
  }
  .nav .show {
    display: block !important;
  }

  .nav .selected {
    opacity: 0.9;
    color: burlywood;
  }

  .more {
    position: fixed;
    top: 50px;
    right: 50px;
    cursor: pointer;
    opacity: 1.0;
  }
  .more a {
    opacity: 0.6;
    padding-left: 10px;
  }
  .more a:hover {
    opacity: 1.0;
  }

  ::-webkit-scrollbar {
    overflow: visible;
    height: 6px;
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,.7) !important;
    background-clip: padding-box;
    border: solid transparent;
    border-width: 0px;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: rgba(255,255,255,.4) !important;
  }
  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background-clip: padding-box;
    border: solid transparent;
    border-width: 0 0 0 6px;
  }

  @media screen and (max-width:1024px) {
    .nav a, .copyright {
      display: none;
    }

    .nav {
      position: relative;
    }
    .nav .menu {
      position: absolute;
      top: 15px;
      right: 20px;
      display: inline-block;
    }

    .nav > a {
      text-align: center;
    }

    .nav > a:first-child {
      display: block;
      
      letter-spacing: 10px;
      line-height: 50px;
      font-weight: normal;
      font-size: 25px;
      opacity: 1.0 !important;
      color: burlywood !important;
    }

    .nav {
      padding: 0px;
      margin: 0px 0px 50px;
    }
  }

  @media screen and (max-height:420px) {
    .nav , .copyright {
      visibility: hidden;
    }

    .nav {
      padding: 0px;
      margin: 0px 0px 0px;
    }
  }
</style>
