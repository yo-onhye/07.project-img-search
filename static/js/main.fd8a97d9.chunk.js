(this["webpackJsonpproject-flickr"]=this["webpackJsonpproject-flickr"]||[]).push([[0],{218:function(e,a,t){},219:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(67),r=t.n(s),o=(t(80),t(68)),l=t(34),i=t.n(l),m=t(69),p=t(70),u=t(71),g=t(73),h=t(74),d=t(35),f=t.n(d),E=t(72),v=t.n(E),b=(t(218),{transitionDuration:0}),k={background:".my-bg-image-el"},N=function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={loading:!1,url:"https://www.flickr.com/services/rest/?",interest:"flickr.interestingness.getList",search:"flickr.photos.search",key:"b27343c07ef22647404873055e1a3b3e",per_page:10,tagmode:"any",privacy_filter:5,format:"json",nojsoncallback:1,tag:"",datas:null},e.getData=Object(m.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e.setState({loading:!0}),t="",""!==e.state.tag){a.next=9;break}return a.next=6,f.a.get("".concat(e.state.url,"method=").concat(e.state.interest,"&api_key=").concat(e.state.key,"&per_page=").concat(e.state.per_page,"&tagmode=").concat(e.state.tagmode,"&privacy_filter=").concat(e.state.privacy_filter,"&format=").concat(e.state.format,"&nojsoncallback=").concat(e.state.nojsoncallback));case 6:t=a.sent,a.next=12;break;case 9:return a.next=11,f.a.get("".concat(e.state.url,"method=").concat(e.state.search,"&api_key=").concat(e.state.key,"&per_page=").concat(e.state.per_page,"&tagmode=").concat(e.state.tagmode,"&privacy_filter=").concat(e.state.privacy_filter,"&format=").concat(e.state.format,"&nojsoncallback=").concat(e.state.nojsoncallback,"&tags=").concat(e.state.tag));case 11:t=a.sent;case 12:e.setState({datas:t.data.photos}),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),console.error(a.t0);case 18:e.setState({loading:!1});case 19:case"end":return a.stop()}}),a,null,[[0,15]])}))),e.handleChange=function(a){var t=a.target,n=t.value,c=t.name;e.setState(Object(o.a)({},c,n))},e.handleInsert=function(a){a.preventDefault(),e.setState({tag:""}),e.getData()},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,a){this.props.datas!==e.datas&&this.getData()}},{key:"render",value:function(){var e=this.state,a=e.datas,t=e.loading;return c.a.createElement("div",{className:"projectMain"},c.a.createElement("header",{className:"projcetLogo"},c.a.createElement("h1",{className:"logo"},c.a.createElement("span",{className:"s1"},"I"),c.a.createElement("span",{className:"s2"},"m"),c.a.createElement("span",{className:"s3"},"g"),c.a.createElement("span",{className:"s4"},"S"),c.a.createElement("span",{className:"s5"},"e"),c.a.createElement("span",{className:"s6"},"a"),c.a.createElement("span",{className:"s7"},"r"),c.a.createElement("span",{className:"s8"},"c"),c.a.createElement("span",{className:"s8"},"h"))),c.a.createElement("section",{className:"projectSearchBox"},c.a.createElement("form",{onSubmit:this.handleInsert},c.a.createElement("input",{type:"text",value:this.state.tag,name:"tag",className:"projectSearchInput",onChange:this.handleChange,placeholder:"\uac80\uc0c9\uc5b4 \uc785\ub825",title:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694"}),c.a.createElement("button",{type:"submit",className:"projectSearchBtn"},"Search"))),c.a.createElement("section",{className:"projectContent"},t&&c.a.createElement("div",{className:"projcetLoader"},c.a.createElement("span",{className:"bar1"}),c.a.createElement("span",{className:"bar2"}),c.a.createElement("span",{className:"bar3"}),c.a.createElement("span",{className:"bar4"}),c.a.createElement("span",{className:"bar5"}),c.a.createElement("span",{className:"bar6"}),c.a.createElement("p",{className:"loadingText"},"Loading...")),c.a.createElement(v.a,{elementType:"ul",className:"projectList",options:b,imagesLoadedOptions:k},!t&&a&&a.photo.map((function(e){return c.a.createElement("li",{key:e.id,className:"item"},c.a.createElement("div",null,c.a.createElement("a",{href:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_b.jpg")},c.a.createElement("img",{src:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_m.jpg"),alt:""})),c.a.createElement("p",null,e.title)))})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,a,t){e.exports=t(219)},80:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.fd8a97d9.chunk.js.map