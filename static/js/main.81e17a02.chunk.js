(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),i=(n(21),n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(3),u=n(4),h=n(7),d=n(6),f=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?200*200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null," ",n)))},p=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(f,{id:t[n].id,name:t[n].name,email:t[n].email,key:n})}));return r.a.createElement("div",null,n)},b=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",onChange:t,placeholder:"search robots"}))},m=(n(23),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)}),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={haserror:!1},o}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({haserror:!0})}},{key:"render",value:function(){return this.state.haserror?r.a.createElement("h1",null,"An error"):this.props.children}}]),n}(o.Component),E=n(5),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onsearchChange,o=e.robots,a=e.ispending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",{className:"tc"},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("p",{className:"f5"},"Welcome to Soroush Rasti's portfolio website!"),r.a.createElement("p",{className:"f5"},'This website employed CSS, React and Redux technologies to request and wrap the Robots from "https://jsonplaceholder.typicode.com" '),r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:n}),r.a.createElement(m,null,r.a.createElement(g,null,r.a.createElement(p,{robots:c}))))}}]),n}(o.Component),w=Object(E.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,ispending:e.requestRobots.ispending}}),(function(e){return{onsearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAIL",payload:t})}))}(e)}}}))(v),O=n(1),R={ispending:!1,robots:[]},y={searchField:""},S=n(14),j=n(15),C=Object(S.createLogger)(),N=Object(O.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{ispending:!0});case"REQUEST_ROBOTS_SUCCESS":case"REQUEST_ROBOTS_FAIL":return Object.assign({},e,{robots:t.payload,ispending:!1});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),_=Object(O.d)(N,Object(O.a)(j.a,C));c.a.render(r.a.createElement(E.a,{store:_},r.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");i?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):s(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.81e17a02.chunk.js.map