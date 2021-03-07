const home = {
    template: `<ul class='works'>
    <li v-for='item in items'>
        <div class="out">
            <div class="img">
                <img :src=item.imgUrl>
            </div>
            <div class="text">
                <h4>{{item.title}}</h4>
                <p><b>{{toolTitle}}</b> {{item.tool}}</p>
                <p><b>{{contentTitle}}</b> {{item.content}}</p>
            </div>
            <div class="link">
                <a v-if='item.linkUrl' :href="item.linkUrl" target="_blank">{{linkUrlText}}</a>
                <a v-if='item.codeUrl' :href="item.codeUrl" target="_blank">{{codeUrlText}}</a>
            </div>
        </div>
    </li>
  </ul>`,
    data: function() {
        return {
            items: [{
                    title: "投資隨筆",
                    tool: "HTML、CSS、Javascript、php",
                    content: "設計、切版、RWD、FB註冊留言分享、金流綠界、文章權限",
                    imgUrl: "./images/web34s.jpg",
                    linkUrl: "../investment",
                    codeUrl: "",
                },
                {
                    title: "投資隨筆後台",
                    tool: "HTML、CSS、Javascript、php",
                    content: "設計、切版、付款紀錄、會員管理、文章發布上下架、站內公告、後台登入",
                    imgUrl: "./images/web35s.jpg",
                    linkUrl: "../investment/balogin",
                    codeUrl: "",
                },
                {
                    title: "明郅資訊",
                    tool: "HTML、CSS、Javascript、php",
                    content: "設計、切版、RWD、Email",
                    imgUrl: "https://i.imgur.com/el3zvtt.jpg",
                    linkUrl: "../mjapp/simplify.html",
                    codeUrl: "",
                },
                {
                    title: "明郅資訊後台",
                    tool: "HTML、CSS、Javascript、php",
                    content: "設計、切版、文章發布上下架、後台登入",
                    imgUrl: "./images/web36s.jpg",
                    linkUrl: "../mjapp/admin/paLogin.php",
                    codeUrl: "",
                },
                {
                    title: "自動訂場地",
                    tool: "python、selenium",
                    content: "自動登入、自動訂場地",
                    imgUrl: "https://i.imgur.com/n3Sikay.jpg",
                    linkUrl: "https://i.imgur.com/BIzjMM6.gif",
                    codeUrl: "",
                },
                {
                    title: "股票回測",
                    tool: "python、pandas_datareader、Flask、heroku",
                    content: "自訂回測",
                    imgUrl: "https://i.imgur.com/6PzlsFF.jpg",
                    linkUrl: "https://python-blacktest.herokuapp.com/",
                    codeUrl: "",
                },
                {
                    title: "國豐當舖",
                    tool: "HTML、CSS、Javascript",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/3o3tSFt.jpg",
                    linkUrl: "../loan",
                    codeUrl: "",
                },
                {
                    title: "Valeno",
                    tool: "HTML、CSS、Javascript、php",
                    content: "設計、切版、RWD",
                    imgUrl: "./images/web32s.jpg",
                    linkUrl: "../valeno",
                    codeUrl: "",
                },
                {
                    title: "Racecourse",
                    tool: "HTML、CSS、Javascript、php",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/FZBribP.jpg",
                    linkUrl: "../horse",
                    codeUrl: "",
                },
                // {
                //   title: "ChineseStyle",
                //   tool: "HTML、CSS、Javascript",
                //   content: "設計、切版、RWD",
                //   imgUrl: "./images/web26s.jpg",
                //   linkUrl: "../Chinesestyle",
                //   codeUrl: "",
                // },
                {
                    title: "firebase chat",
                    tool: "HTML、CSS、Javascript、firebase",
                    content: "設計、切版、FB登入、firebase應用",
                    imgUrl: "./images/web24s.jpg",
                    linkUrl: "../chat",
                    codeUrl: "",
                },
                // {
                //   title: "Pantone",
                //   tool: "HTML、CSS、Javascript",
                //   content: "設計、切版、RWD",
                //   imgUrl: "./images/web28s.jpg",
                //   linkUrl: "../pantone/",
                //   codeUrl: "",
                // },
                // {
                //   title: "kid",
                //   tool: "HTML、CSS、Javascript",
                //   content: "設計、切版、RWD",
                //   imgUrl: "./images/web29s.jpg",
                //   linkUrl: "../kid",
                //   codeUrl: "",
                // },
                // {
                //   title: "極上寓",
                //   tool: "HTML、CSS、Javascript、Krpano",
                //   content: "設計、切版、RWD、360環景",
                //   imgUrl: "./images/web21s.jpg",
                //   linkUrl: "../krpano",
                //   codeUrl: "",
                // },
                {
                    title: "維加斯",
                    tool: "HTML、CSS、Javascript",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/NgSO1XY.jpg",
                    linkUrl: "../vegas03/login.html",
                    codeUrl: "",
                },
                {
                    title: "貼圖一版",
                    tool: "HTML、CSS、Javascript",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/FwoxXUt.jpg",
                    linkUrl: "../Textures",
                    codeUrl: "",
                },
                // {
                //   title: "貼圖二版",
                //   tool: "HTML、CSS、Javascript",
                //   content: "設計、切版、RWD",
                //   imgUrl: "https://i.imgur.com/LszKwVA.jpg",
                //   linkUrl: "../pictrue",
                //   codeUrl: "",
                // },
                {
                    title: "明郅資訊2",
                    tool: "HTML、CSS、Javascript",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/Xkhkna2.jpg",
                    linkUrl: "../mjapp2",
                    codeUrl: "",
                },
                // {
                //   title: "ibow",
                //   tool: "HTML、CSS、Javascript",
                //   content: "設計、切版、RWD",
                //   imgUrl: "https://i.imgur.com/wbFRpBn.jpg",
                //   linkUrl: "../ibow",
                //   codeUrl: "",
                // },
                {
                    title: "打地鼠",
                    tool: "HTML、CSS、Javascript",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/nrPw2xY.jpg",
                    linkUrl: "../game_playMouse",
                    codeUrl: "",
                },
                {
                    title: "搶紅包",
                    tool: "HTML、CSS、Javascript",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/28yq63x.jpg",
                    linkUrl: "../game_red",
                    codeUrl: "",
                },
                {
                    title: "跑跑",
                    tool: "HTML、CSS、Javascript",
                    content: "設計、切版、RWD",
                    imgUrl: "https://i.imgur.com/llrlu8T.jpg",
                    linkUrl: "../game_run",
                    codeUrl: "",
                },
            ],
            toolTitle: "使用軟體 :",
            contentTitle: "製作內容 :",
            linkUrlText: "前往此網頁",
            codeUrlText: "觀看原始碼",
        };
    },
};
const capital = {
    template: `<div class="capital">
  <div class="info">
      <div class="flex">
          <div class="left">
              <ul>
                  <li><p>聯絡電話：0968513187</p></li>
                  <li><p>通訊地址：台南市東區</p></li>
                  <li><p>line帳號：boyinginline</p></li>
                  <li><p>電子信箱：sstudentr900@gmail.com</p></li>
              </ul>
          </div>
          <div class="right">
              <div class="img"><img src="https://i.imgur.com/xOOv0Aj.jpg" alt=""></div>
          </div>
      </div>
  </div>
  <div class="education">
      <div class="title">
          <h3>學歷</h3>
      </div>
      <div class="centent flex">
          <div class="date"><h4>2005/06 ～ 2009/06</h4></div>
          <div class="text">
              <h4>私立高苑科技大學(畢業)</h4>
              <p>科系名稱：資訊傳播(四技)</p>
          </div>
      </div>
  </div>
  <div class="experience">
      <div class="title">
          <h3>經歷</h3>
      </div>
      <ul class='centent'>
          <li>
              <div class="flex">
                  <div class="date"><h4>2015/05 ～ 仍在職</h4></div>
                  <div class="text">
                      <h4>明郅資訊</h4>
                      <p>職務類別：前後端工程師</p>
                      <p>工作地點：台南市安平區</p>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="date"><h4>2013/07 ～ 2015/05</h4></div>
                  <div class="text">
                      <h4>安普國際資訊有限公司</h4>
                      <p>職務類別：網頁設計師</p>
                      <p>工作地點：台南市中西區</p>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="date"><h4>2011/03 ～ 2013/06</h4></div>
                  <div class="text">
                      <h4>永新行</h4>
                      <p>職務類別：多媒體動畫設計師</p>
                      <p>工作地點：台南市安平區</p>
                  </div>
              </div>
          </li>
      </ul>
  </div>
  <div class="Talent">
      <div class="title">
          <h3>技能專長</h3>
      </div>
      <ul class='centent'>
          <li>
              <div class="flex">
                  <div class="text"><p>html</p></div>
                  <div class="points">
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="text"><p>css</p></div>
                  <div class="points">
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="text"><p>javascript</p></div>
                  <div class="points">
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="text"><p>vue</p></div>
                  <div class="points">
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="text"><p>php</p></div>
                  <div class="points">
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="text"><p>mysql</p></div>
                  <div class="points">
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                  </div>
              </div>
          </li>
          <li>
              <div class="flex">
                  <div class="text"><p>python</p></div>
                  <div class="points">
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                      <div class="point"></div>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</div>`,
};

const router = new VueRouter({
    routes: [
        { path: "/", component: home },
        { path: "/capital", component: capital },
    ],
});

const app = new Vue({
    router,
}).$mount("#app");