(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(0)),d=function(e){var t="https://robohash.org/"+e.monster.id+"?set=set2&size=180x180";return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:t,alt:"description of image"}),Object(l.jsx)("h2",{children:e.monster.name})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(l.jsx)(d,{monster:e})}))})},f=(n(16),n(17),function(e){var t=e.placeholder,n=e.changeHandler;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).changeHandler=function(t){e.setState({searchField:t.target.value},(function(){return console.log(e.state)}))},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Robo Finder"}),Object(l.jsx)(f,{changeHandler:this.changeHandler,placeholder:"Search...."}),Object(l.jsx)(j,{monster:r})]})}}]),n}(r.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.c29a5378.chunk.js.map