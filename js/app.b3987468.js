(function(){"use strict";var e={2696:function(e,t,a){var r=a(9242),i=a(3396);const s={class:"weather-app"};function _(e,t){const a=(0,i.up)("RouterView");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(a)])}var n=a(89);const c={},l=(0,n.Z)(c,[["render",_]]);var o=l;function d(e,t,a,r,s,_){const n=(0,i.up)("WeatherMain"),c=(0,i.up)("WeatherDaily"),l=(0,i.up)("WeatherDetails");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(n,{currentWeather:s.currentWeather},null,8,["currentWeather"]),(0,i.Wm)(c,{weatherData:s.weatherData,onItemSelected:_.selectItem},null,8,["weatherData","onItemSelected"]),(0,i.Wm)(l,{selectedItem:s.selectedItem},null,8,["selectedItem"])])}var p=a(4161),m=a(7139);const h={class:"main-widget"},w=(0,i._)("span",{class:"main-widget__city"},"Москва",-1),u={class:"main-widget__weather"},f={class:"main-widget__weather-icon"},v=["src"],g={class:"main-widget__weather-temp"},y={class:"main-widget__status"};function W(e,t,a,r,s,_){return(0,i.wg)(),(0,i.iD)("div",h,[w,(0,i._)("div",u,[(0,i._)("div",f,[(0,i._)("img",{src:a.currentWeather.icon,alt:""},null,8,v)]),(0,i._)("span",g,(0,m.zw)(a.currentWeather.temperature)+"°",1)]),(0,i._)("span",y,(0,m.zw)(a.currentWeather.status),1)])}var D={name:"WeatherMain",props:{currentWeather:{type:Array,required:!0}}};const b=(0,n.Z)(D,[["render",W]]);var I=b;const T={class:"weather-daily"},M=(0,i._)("span",{class:"weather-daily__title"},"По дням",-1),O={class:"weather-daily__widget-feed"};function x(e,t,a,r,s,_){const n=(0,i.up)("weather-day");return(0,i.wg)(),(0,i.iD)("div",T,[M,(0,i._)("div",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.weatherData,((t,a)=>((0,i.wg)(),(0,i.j4)(n,{key:a,dayWeather:t,onQwe:e.log,onClick:e=>_.selectItem(t)},null,8,["dayWeather","onQwe","onClick"])))),128))])])}const E={class:"weather-daily__widget-feed__item-day"},S={class:"weather-daily__widget-feed__item-icon"},k=["src"],z={class:"weather-daily__widget-feed__item-temp"},F={class:"weather-daily__widget-feed__item-temp__max"},j={class:"weather-daily__widget-feed__item-temp__min"};function A(e,t,a,r,s,_){return(0,i.wg)(),(0,i.iD)("div",{class:(0,m.C_)(["weather-daily__widget-feed__item",{selected:a.dayWeather.selected}])},[(0,i._)("span",E,(0,m.zw)(a.dayWeather.day),1),(0,i._)("div",S,[(0,i._)("img",{src:a.dayWeather.icon,alt:""},null,8,k)]),(0,i._)("div",z,[(0,i._)("span",F,(0,m.zw)(a.dayWeather.maxTemp)+"°",1),(0,i._)("span",j,(0,m.zw)(a.dayWeather.minTemp)+"°",1)])],2)}var N={props:{dayWeather:{type:Object}},methods:{emitMessage(e){this.$emit("qwe",e)}}};const Z=(0,n.Z)(N,[["render",A]]);var H=Z,$={name:"WeatherDaily",components:{WeatherDay:H},props:{weatherData:{type:Array,required:!0}},methods:{selectItem(e){this.weatherData.forEach((e=>{e.selected=!1})),e.selected=!0,this.$emit("item-selected",e)}}};const q=(0,n.Z)($,[["render",x]]);var C=q,P=a.p+"img/sunrise.f6339ac9.svg",R=a.p+"img/sunset.b0dc817c.svg";const U={key:0,class:"weather-details"},G=(0,i._)("span",{class:"weather-details__title"},"Подробности",-1),X={class:"weather-details__wrapper"},Q={class:"weather-details__wrapper__data"},K=(0,i._)("hr",null,null,-1),L={class:"weather-details__wrapper__data__container"},V={class:"weather-details__wrapper__data__container__item"},Y=(0,i._)("span",{class:"weather-details__wrapper__data__container__item-title"},"По ощущениям",-1),B={class:"weather-details__wrapper__data__container__item-data"},J={class:"weather-details__wrapper__data__container__item"},ee=(0,i._)("span",{class:"weather-details__wrapper__data__container__item-title"},"Влажность",-1),te={class:"weather-details__wrapper__data__container__item-data"},ae={class:"weather-details__wrapper__data__container__item"},re=(0,i._)("span",{class:"weather-details__wrapper__data__container__item-title"},"Видимость",-1),ie={class:"weather-details__wrapper__data__container__item-data"},se={class:"weather-details__wrapper__data__container__item"},_e=(0,i._)("span",{class:"weather-details__wrapper__data__container__item-title"},"Давление",-1),ne={class:"weather-details__wrapper__data__container__item-data"},ce={class:"weather-details__wrapper__data__container__item"},le=(0,i._)("span",{class:"weather-details__wrapper__data__container__item-title"},"Ветер",-1),oe={class:"weather-details__wrapper__data__container__item-data"},de={class:"weather-details__wrapper__rise"},pe=(0,i._)("hr",null,null,-1),me={class:"weather-details__wrapper__rise__container"},he={class:"weather-details__wrapper__rise__container__item"},we=(0,i._)("span",{class:"weather-details__wrapper__rise__container__item-title"},"Восход",-1),ue={class:"weather-details__wrapper__rise__container__item-main"},fe=(0,i._)("div",{class:"weather-details__wrapper__rise__container__item-main__icon"},[(0,i._)("img",{src:P,alt:""})],-1),ve={class:"weather-details__wrapper__rise__container__item-main__time"},ge={class:"weather-details__wrapper__rise__container__item"},ye=(0,i._)("span",{class:"weather-details__wrapper__rise__container__item-title"},"Закат",-1),We={class:"weather-details__wrapper__rise__container__item-main"},De=(0,i._)("div",{class:"weather-details__wrapper__rise__container__item-main__icon"},[(0,i._)("img",{src:R,alt:""})],-1),be={class:"weather-details__wrapper__rise__container__item-main__time"};function Ie(e,t,a,r,s,_){return a.selectedItem?((0,i.wg)(),(0,i.iD)("div",U,[G,(0,i._)("div",X,[(0,i._)("div",Q,[K,(0,i._)("div",L,[(0,i._)("div",V,[Y,(0,i._)("span",B,(0,m.zw)(a.selectedItem.feelTemp),1)]),(0,i._)("div",J,[ee,(0,i._)("span",te,(0,m.zw)(a.selectedItem.humidity),1)]),(0,i._)("div",ae,[re,(0,i._)("span",ie,(0,m.zw)(a.selectedItem.visibility),1)]),(0,i._)("div",se,[_e,(0,i._)("span",ne,(0,m.zw)(a.selectedItem.pressure),1)]),(0,i._)("div",ce,[le,(0,i._)("span",oe,(0,m.zw)(a.selectedItem.windSpeed),1)])])]),(0,i._)("div",de,[pe,(0,i._)("div",me,[(0,i._)("div",he,[we,(0,i._)("div",ue,[fe,(0,i._)("span",ve,(0,m.zw)(a.selectedItem.sunrise),1)])]),(0,i._)("div",ge,[ye,(0,i._)("div",We,[De,(0,i._)("span",be,(0,m.zw)(a.selectedItem.sunset),1)])])])])])])):(0,i.kq)("",!0)}var Te={name:"WeatherDetails",props:{selectedItem:{type:Object,required:!0}}};const Me=(0,n.Z)(Te,[["render",Ie]]);var Oe=Me,xe={name:"HomePage",components:{WeatherMain:I,WeatherDaily:C,WeatherDetails:Oe},data(){return{weatherData:[],currentWeather:[],selectedItem:null}},mounted(){this.getWeatherForecast()},methods:{getWeatherForecast(){const e="7ea6b51fc4c36617b6b14b135de3c6f0",t="Moscow",a=`https://api.openweathermap.org/data/2.5/forecast?q=${t}&appid=${e}&lang=ru`;p.Z.get(a).then((e=>{const t=e.data;this.processForecastData(t)})).catch((e=>{console.error(e)}))},processForecastData(e){const t={};console.log(e),e.list.forEach((a=>{const r=new Date(a.dt_txt),[i]=r.toISOString().split("T");t[i]||(t[i]={day:this.formatDate(a.dt_txt),icon:"",maxTemp:Number.MIN_SAFE_INTEGER,minTemp:Number.MAX_SAFE_INTEGER,feelTemp:this.convertTemperature(a.main.feels_like)+"°",humidity:a.main.humidity+"%",visibility:Math.floor(a.visibility/1e3)>0?(a.visibility/1e3).toFixed(0)+" км":a.visibility+" м",pressure:this.convertHPaToMmHg(a.main.pressure)+" мм",windSpeed:Math.round(a.wind.speed)+" м/с",sunrise:Number.MAX_SAFE_INTEGER,sunset:Number.MAX_SAFE_INTEGER});const s=this.convertTemperature(a.main.temp);t[i].maxTemp=Math.max(t[i].maxTemp,s),t[i].minTemp=Math.min(t[i].minTemp,s),t[i].sunrise=this.formatTime(e.city.sunrise),t[i].sunset=this.formatTime(e.city.sunset),""===t[i].icon&&(t[i].icon=this.getWeatherIconUrl(a.weather[0].icon))})),this.weatherData=Object.values(t).slice(0,7),console.log(this.weatherData),this.currentWeather={temperature:this.convertTemperature(e.list[0].main.temp),icon:this.getWeatherIconUrl(e.list[0].weather[0].icon),status:e.list[0].weather[0].description}},formatDate(e){const t=new Date(e),a={weekday:"short",timeZone:"UTC"};return t.toLocaleDateString("ru-RU",a)+", "+t.getDate()},getWeatherIconUrl(e){return`http://openweathermap.org/img/wn/${e}.png`},convertTemperature(e){return Math.round(e-273.15)},convertHPaToMmHg(e){const t=.75006375541921*e;return t.toFixed(2)},formatTime(e){const t=new Date(1e3*e),a=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0"),i=`${a}:${r}`;return i},selectItem(e){this.selectedItem=e}}};const Ee=(0,n.Z)(xe,[["render",d]]);var Se=Ee,ke=a(2483);const ze=[{path:"/",name:"home",component:Se},{path:"/any",name:"Any"}],Fe=(0,ke.p7)({history:(0,ke.PO)(),routes:ze});var je=Fe;const Ae=(0,r.ri)(o);Ae.use(je),Ae.mount("#app")}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,i,s){if(!r){var _=1/0;for(o=0;o<e.length;o++){r=e[o][0],i=e[o][1],s=e[o][2];for(var n=!0,c=0;c<r.length;c++)(!1&s||_>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(n=!1,s<_&&(_=s));if(n){e.splice(o--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var o=e.length;o>0&&e[o-1][2]>s;o--)e[o]=e[o-1];e[o]=[r,i,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/weather_forecast/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,_=r[0],n=r[1],c=r[2],l=0;if(_.some((function(t){return 0!==e[t]}))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(c)var o=c(a)}for(t&&t(r);l<_.length;l++)s=_[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(o)},r=self["webpackChunkweather_forecast"]=self["webpackChunkweather_forecast"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2696)}));r=a.O(r)})();
//# sourceMappingURL=app.b3987468.js.map