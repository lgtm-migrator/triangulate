(this.webpackJsonpassets=this.webpackJsonpassets||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),c=n.n(r),u=(n(29),n(19)),o=n(20),s=n(24),l=n(22),g=(n(30),n(21));var h=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Triangulate.xyz - Randomly Generated Art"))},d=n(23),f=n(9),m=n.n(f),v=n(3),j=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={queue:null,image:"",timer:null,identifier:""},e.toggleButtonState=function(){m.a.get("/api/v1/generate").then((function(t){console.log(t),e.setState({queue:t.data.queue,identifier:t.data.identifier}),e.poll()})).catch((function(e){console.log(e)}))},e}return Object(o.a)(n,[{key:"poll",value:function(){var e=this;this.state.timer=setInterval((function(){m.a.get("/api/v1/generate/"+e.state.identifier).then((function(t){console.log(t),e.setState({queue:t.data.queue,image:t.data.link}),""!==e.state.image&&clearInterval(e.state.timer)})).catch((function(t){console.log(t),clearInterval(e.state.timer)}))}),1e3)}},{key:"render",value:function(){var e;return""!==this.state.image?e=Object(v.jsx)(g.a,{src:this.state.image,fluid:!0}):this.state.queue>0&&(e=Object(v.jsxs)("div",{children:["Rendering, you are ",this.state.queue," in the queue."]})),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(h,{}),e,Object(v.jsx)(d.a,{onClick:this.toggleButtonState,variant:"primary",children:"Generate some art!"})," "]})}},{key:"componentWillUnmount",value:function(){this.timer=null}}]),n}(i.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(j,{})}),document.getElementById("root")),p()}},[[52,1,2]]]);
//# sourceMappingURL=main.79d1c3b7.chunk.js.map