<template>
  <div class="sutra">
    <div class="title"> 
      {{ sutra.name }}  
      
      <a :title="sutra.tip" class="tip info" >
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M512 0.021489c-282.758945 0-511.978511 229.219565-511.978511 511.978511s229.219565 511.978511 511.978511 511.978511c282.752806 0 511.978511-229.219565 511.978511-511.978511S794.752806 0.021489 512 0.021489zM650.535193 799.341311c-30.110785 10.406001-53.770648 18.430768-71.779813 24.12035-17.759479 5.683443-38.609343 8.524141-62.269205 8.524141-36.280298 0-64.599274-8.057513-84.656075-23.679305-20.332071-16.089443-30.366611-35.953863-30.366611-60.573587 0-9.465582 0.76748-18.936281 2.297322-28.869514 1.567705-9.93221 4.121877-21.304212 7.225565-33.617655l37.547151-118.810966c3.353374-11.340279 1.453095-21.74628 3.78828-32.177863 2.316765-9.93221 3.333932-19.397792 3.333932-27.429723 0-15.647375 1.433652-26.053376-5.528923-31.742958-7.219425-6.15007-20.312628-4.383844-40.139186-4.383844-9.804297 0-19.832697 1.408069-29.854958 3.776-10.290367 2.847861-19.032472 0.607844-26.251897 3.455705l10.060123-36.926004c24.427342-8.997931 48.087205-16.562211 70.499657-22.719444 22.39301-6.617721 43.722804-9.458419 63.549362-9.458419 36.274158 0 64.09376 7.583722 83.631746 23.205515 19.551288 15.621792 41.169655 35.960003 41.169655 60.579727 0 5.215792-0.800225 14.213723-2.080382 27.461445-1.274016 12.773931-3.858888 24.613584-7.468089 35.486212L563.843762 673.880901c-2.847861 9.465582-5.65786 20.363793-7.986905 32.677237-2.585895 11.839653-3.858888 21.304212-3.858888 27.455305 0 15.621792 4.114714 26.494421 11.845793 32.184003 7.980765 5.65786 21.618367 8.498558 40.900525 8.498558 9.011234 0 19.321044-1.408069 30.878265-4.224208 11.564383-2.841721 19.800975-5.215792 24.946159-7.589862L650.535193 799.341311zM643.860167 319.355445c-17.240663 14.681374-38.315654 21.771863-62.768579 21.771863-24.434505 0-45.540196-7.090489-63.305815-21.771863-17.496489-14.213723-26.238594-31.710212-26.238594-52.547797 0-20.369933 8.742105-37.893029 26.238594-52.547797 17.765619-14.655791 38.872333-22.245653 63.305815-22.245653 24.421202 0 45.527916 7.55814 62.768579 22.245653 17.496489 14.681374 26.258037 32.209586 26.258037 52.547797C670.118204 287.644209 661.356656 305.141722 643.860167 319.355445z" fill="#ccc"></path></svg>
      </a>  

      <div class="pray"> 
        <a class="color" title="经文颜色">
          <span style="background: #EEEEEE;" @click="color = '#EEEEEE'"></span>

          <!-- <span style="background: #E94829;" @click="color = '#E94829'"></span>           -->
          <!-- <span style="background: #C86149;" @click="color = '#C86149'"></span> -->
          <span style="background: #AF5E53;" @click="color = '#AF5E53'"></span>

          <!-- <span style="background: #617143;" @click="color = '#617143'"></span> -->
          <span style="background: #B4CD93;" @click="color = '#B4CD93'"></span>

          <span style="background: #81B1F7;" @click="color = '#81B1F7'"></span>
        </a>

        <a class="tip player" title="播放 / 暂停"  @click="togglePlayer()" v-if="sutra.audio">
          <svg v-if="!isPlaying" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m-57.782857 268.190476c-21.942857 0-39.740952 17.798095-39.740953 39.740952v209.13981a39.740952 39.740952 0 0 0 61.196191 33.426285l164.352-105.593904a39.740952 39.740952 0 0 0-0.292571-67.047619l-164.352-103.545905a39.740952 39.740952 0 0 0-21.187048-6.119619z" fill="#ccc"></path></svg>
          <svg v-if="isPlaying" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m-48.761905 268.190476h-73.142857v316.952381h73.142857V365.714286z m158.476191 0h-73.142857v316.952381h73.142857V365.714286z" fill="#ccc"></path></svg>
          <audio :src="sutra.audio" id="sutra-player" loop></audio>
        </a>

        礼佛
      </div>
    </div>

    <div class="content"> 
      <div class="text" :style="{ color: color }" v-html="sutra.text.replaceAll('\n', '<br/>')"></div>
    </div>
  </div>
</template>

<script>
import { injectScript } from './utils'

export default {
  name: 'Sutra',
  data() {
    return {
      isPlaying: false,
      color: '#FFFFFF',
      
      sutra: {
        name: '',
        text: '',
        tip: '',
        audio: '',
      }
    }
  },
  mounted() {
    this.loadSutra(this.$route.params.sutra)

    window.addEventListener('hashchange', () => {
      this.loadSutra(location.hash.replace('#/', ''))
    })
  },
  methods: {
    async loadSutra(name) {
      let path = location.pathname + '/sutras/' + name + '/' + name
      let isIndex = !name

      // 未指定经文 则显示序言
      if (isIndex) {
        name = '常颂经咒-序言'
        path = location.pathname + '/sutras/' + name
      }
      
      await injectScript(path + '.js')

      this.sutra = {
        name: decodeURI(name),
        text: window.__buddhism_sutra.text,
        tip: window.__buddhism_sutra.tip,
        audio: isIndex ? '' : path + '.mp3',
      }
    },
    togglePlayer() {
      const player = document.querySelector('#sutra-player')

      if (this.isPlaying) {
        player.pause()
      } else {
        player.play()
      }

      this.isPlaying = !this.isPlaying
    }
  }
}
</script>

<style scoped>

  .sutra {
    padding: 0px 55px;
    height: 85%;
    max-height: 700px;
    width: 90%;
    margin: auto;

    font-family: 'GuYaSong';
    writing-mode: vertical-rl;
    letter-spacing: 5px;
    line-height: 50px;
    font-weight: normal;
    font-size: 25px;
    opacity: 0.8;
    color: #C86149;
        
    position: relative;
    overflow: hidden;
  }
  .sutra:hover {
    opacity: 0.9;
  }

  .sutra .content {
    width: 95%;
    height: 98%;
    overflow: auto;
  }
  .sutra .text {
    width: auto;
  }

  .sutra .title {
    color: burlywood;
    margin: 0px 25px;
    font-size: 30px;
  }

  .sutra .tip {
    cursor: pointer;
    opacity: 0.6;
  }
  .sutra .tip:hover {
    opacity: 1.0;
  }

  .sutra .player {
    margin-top: 5px;
  }

  .sutra .pray {
    display: inline-block;
    font-size: 22px;
    color: #b87838;

    position: absolute;
    bottom: 10px;
    right: 80px;
  }

  .sutra .pray .color {
    cursor: pointer;
    margin-bottom: 10px;
    opacity: 0.2;
  }

  .sutra .pray .color:hover {
    opacity: 0.5;
  }

  .sutra .pray .color span {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .sutra .pray .color span:first-child {
    border-radius: 5px 5px 0 0;
  }
  .sutra .pray .color span:last-child {
    border-radius: 0 0 5px 5px;
  }

  @media screen and (max-width:1024px) {
    .sutra .content {
      width: 80%;
    }
    .sutra .pray .color, .sutra .tip.info{
      display: none;
    }
  }
</style>