(function(){"use strict";var e={544:function(e,t,a){var r=a(963),i=a(252),s=a(577);const n={class:"search-box"},l={key:0,class:"box"},c={class:"card"},h={class:"weather-wrap"},u={class:"location-box"},o={class:"location"},d={class:"date"},w={class:"weather-box"},f={class:"temp"},p={class:"weather-feelsLike"},m=(0,i.Uk)(" Feels like "),_={class:"weather"},v={class:"weather-info"},y={class:"weather-item",title:"Wind(風)"},b=["src"],g={class:"value"},k={class:"weather-item",title:"Humidity(湿度)"},D=["src"],z={class:"value"},W={class:"weather-item",title:"Cloud(雲)"},$=["src"],x={class:"value"},M={class:"card"},O={class:"weather-wrap"},C={class:"location-box"},j={class:"location"},P={class:"date"},q={class:"weather-box"},A={class:"temp"},F={class:"weather-feelsLike"},I=(0,i.Uk)(" Feels like "),S={class:"weather"},T={class:"weather-info"},R={class:"weather-item",title:"Wind(風)"},U=["src"],B={class:"value"},H={class:"weather-item",title:"Humidity(湿度)"},J=["src"],K={class:"value"},E={class:"weather-item",title:"Cloud(雲)"},L=["src"],G={class:"value"},N=(0,i._)("div",{class:"footer-text"},[(0,i.Uk)(" Developed by "),(0,i._)("span",null,"Mursalin Islam"),(0,i._)("a",{href:"https://github.com/mursalinir/Weathear-Report",target:"_blank",class:"link"}," Github Repository ")],-1);function V(e,t,V,Y,Z,Q){return(0,i.wg)(),(0,i.iD)("div",{id:"app",class:(0,s.C_)([{"weather-rain":"Rain"==Z.weather.weather[0].main},{"weather-snow":"Snow"==Z.weather.weather[0].main},{"weather-clear":"Clear"==Z.weather.weather[0].main||"Mist"==Z.weather.weather[0].main},{"weather-clouds":"Clouds"==Z.weather.weather[0].main||"Haze"==Z.weather.weather[0].main}])},[(0,i._)("main",null,[(0,i._)("div",n,[(0,i.wy)((0,i._)("input",{type:"text",class:"search-bar",placeholder:"Search city...","onUpdate:modelValue":t[0]||(t[0]=e=>Z.query=e),onKeypress:t[1]||(t[1]=(...e)=>Q.fetchWeather&&Q.fetchWeather(...e))},null,544),[[r.nr,Z.query]])]),"undefined"!=typeof Z.weather.main?((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",c,[(0,i._)("div",h,[(0,i._)("div",u,[(0,i._)("div",o,(0,s.zw)(Z.weather.name)+", "+(0,s.zw)(Z.weather.sys.country),1),(0,i._)("div",d,(0,s.zw)(Q.dateBuilder()),1)]),(0,i._)("div",w,[(0,i._)("div",f,(0,s.zw)(Math.round(Z.weather.main.temp))+"°C",1),(0,i._)("div",p,[m,(0,i._)("strong",null,(0,s.zw)(Math.round(Z.weather.main.feels_like))+"°C ",1)]),(0,i._)("div",_,(0,s.zw)(Z.weather.weather[0].main),1)])]),(0,i._)("div",v,[(0,i._)("div",y,[(0,i._)("img",{src:a(324),width:"40"},null,8,b),(0,i._)("span",g,(0,s.zw)(Z.weather.wind.speed)+"KM/h",1)]),(0,i._)("div",k,[(0,i._)("img",{src:a(133),width:"40"},null,8,D),(0,i._)("span",z,(0,s.zw)(Z.weather.main.humidity)+"%",1)]),(0,i._)("div",W,[(0,i._)("img",{src:a(664),width:"40"},null,8,$),(0,i._)("span",x,(0,s.zw)(Z.weather.clouds.all)+"%",1)])])]),(0,i._)("div",M,[(0,i._)("div",O,[(0,i._)("div",C,[(0,i._)("div",j,(0,s.zw)(Z.DefaultWeather.name)+", "+(0,s.zw)(Z.DefaultWeather.sys.country),1),(0,i._)("div",P,(0,s.zw)(Q.dateBuilder()),1)]),(0,i._)("div",q,[(0,i._)("div",A,(0,s.zw)(Math.round(Z.DefaultWeather.main.temp))+"°C",1),(0,i._)("div",F,[I,(0,i._)("strong",null,(0,s.zw)(Math.round(Z.DefaultWeather.main.feels_like))+"°C ",1)]),(0,i._)("div",S,(0,s.zw)(Z.DefaultWeather.weather[0].main),1)])]),(0,i._)("div",T,[(0,i._)("div",R,[(0,i._)("img",{src:a(324),width:"40"},null,8,U),(0,i._)("span",B,(0,s.zw)(Z.DefaultWeather.wind.speed)+"KM/h",1)]),(0,i._)("div",H,[(0,i._)("img",{src:a(133),width:"40"},null,8,J),(0,i._)("span",K,(0,s.zw)(Z.DefaultWeather.main.humidity)+"%",1)]),(0,i._)("div",E,[(0,i._)("img",{src:a(664),width:"40"},null,8,L),(0,i._)("span",G,(0,s.zw)(Z.DefaultWeather.clouds.all)+"%",1)])])])])):(0,i.kq)("",!0),N])],2)}var Y={name:"App",components:{},data(){return{api_key:"85c1d88ec81c35f0c480a491e3562bc3",url_base:"https://api.openweathermap.org/data/2.5/",query:"",default:"Tokyo",default2:"Dhaka",weather:{},DefaultWeather:{}}},methods:{async fetchWeather(e){if("Enter"==e.key){const e=await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`),t=await e.json();this.weather=t;const a=await fetch(`${this.url_base}weather?q=${this.default}&units=metric&APPID=${this.api_key}`),r=await a.json();this.DefaultWeather=r}},dateBuilder(){let e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=a[e.getDay()],i=e.getDate(),s=t[e.getMonth()],n=e.getFullYear();return`${r}, ${i} ${s} ${n}`}},async created(){const e=await fetch(`${this.url_base}weather?q=${this.default2}&units=metric&APPID=${this.api_key}`),t=await e.json();this.weather=t;const a=await fetch(`${this.url_base}weather?q=${this.default}&units=metric&APPID=${this.api_key}`),r=await a.json();this.DefaultWeather=r}},Z=a(744);const Q=(0,Z.Z)(Y,[["render",V]]);var X=Q;(0,r.ri)(X).mount("#app")},664:function(e,t,a){e.exports=a.p+"img/cloud.aec55812.png"},133:function(e,t,a){e.exports=a.p+"img/humidity.d11a35d5.png"},324:function(e,t,a){e.exports=a.p+"img/wind.32fc93e6.png"}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,i,s){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],s=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(l=!1,s<n&&(n=s));if(l){e.splice(u--,1);var h=i();void 0!==h&&(t=h)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,i,s]}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/Weathear-Report/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,n=r[0],l=r[1],c=r[2],h=0;if(n.some((function(t){return 0!==e[t]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(c)var u=c(a)}for(t&&t(r);h<n.length;h++)s=n[h],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self["webpackChunkvue_weather"]=self["webpackChunkvue_weather"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(544)}));r=a.O(r)})();
//# sourceMappingURL=app.39b4e8ac.js.map