(this.webpackJsonpickflix=this.webpackJsonpickflix||[]).push([[0],{45:function(e,t,n){e.exports=n(76)},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(36),l=n.n(i),o=n(19),u=n(16),c=n(6),s=n.n(c),p=n(10),m=n(11),d=n(12),f=n(14),g=n(13),v=n(15),h=n(2),b=n(1),E=n(8),x=n.n(E);function y(){var e=Object(h.a)(["\n  font-size: 18px;\n  font-weight: 600;\n"]);return y=function(){return e},e}function j(){var e=Object(h.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return j=function(){return e},e}function O(){var e=Object(h.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return O=function(){return e},e}var _=b.default.div(O()),k=b.default.div(j()),w=b.default.span(y()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(_,null,r.a.createElement(w,null,t),r.a.createElement(k,null,n))};function R(){var e=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  margin-top: 15px;\n"]);return R=function(){return e},e}var T=b.default.div(R()),U=function(){return r.a.createElement(T,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u21ba"))};function M(){var e=Object(h.a)(["\n  color: ",";\n"]);return M=function(){return e},e}function I(){var e=Object(h.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return I=function(){return e},e}var z=b.default.div(I()),C=b.default.span(M(),(function(e){return e.color})),P=function(e){var t=e.text,n=e.color;return r.a.createElement(z,null,r.a.createElement(C,{color:n},t))};function F(){var e=Object(h.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return F=function(){return e},e}function D(){var e=Object(h.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return D=function(){return e},e}function N(){var e=Object(h.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return N=function(){return e},e}function V(){var e=Object(h.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return V=function(){return e},e}function A(){var e=Object(h.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return A=function(){return e},e}function B(){var e=Object(h.a)(["\n  font-size: 12px;\n"]);return B=function(){return e},e}var L=b.default.div(B()),q=b.default.div(A(),(function(e){return"https://image.tmdb.org/t/p/w300".concat(e.bgUrl)})),J=b.default.span(V()),G=b.default.div(N(),q,J),H=b.default.span(D()),K=b.default.span(F()),Q=function(e){var t=e.id,n=e.title,a=e.rating,i=e.year,l=e.isMovie,u=void 0!==l&&l,c=e.imgUrl;return r.a.createElement(o.b,{to:u?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(L,null,r.a.createElement(G,null,r.a.createElement(q,{bgUrl:c},r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"Rating"},"\u2b50\ufe0f")," ",a,"/10"))),r.a.createElement(K,null,n.length>18?"".concat(n.substring(0,18),"..."):n),r.a.createElement(H,null,i)))};function W(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return W=function(){return e},e}var X=b.default.div(W()),Y=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null," Movies | Ickflix")),l?r.a.createElement(U,null):r.a.createElement(X,null,r.a.createElement(x.a,null,r.a.createElement("title",null," Movies | Ickflix")),t&&t.length>0&&r.a.createElement(S,{title:"Now Playing"},t.map((function(e){return r.a.createElement(Q,{title:e.original_title,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(S,{title:"Popular"},a.map((function(e){return r.a.createElement(Q,{title:e.original_title,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"Upcoming"},n.map((function(e){return r.a.createElement(Q,{title:e.original_title,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),i&&r.a.createElement(P,{color:"#e74c3c",text:i})))},Z=n(41),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6cd7c01356b14b1bcfd51b6695e00d32",language:"en-US"}}),ee={topRated:function(){return $.get("tv/top_rated")},popular:function(){return $.get("tv/popular")},airing:function(){return $.get("tv/airing_today")},detail:function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})}},te={nowPlaying:function(){return $.get("movie/now_playing")},upcoming:function(){return $.get("movie/upcoming")},popular:function(){return $.get("movie/popular")},detail:function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})}},ne=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,te.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,te.popular();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movie information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(Y,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:l})}}]),t}(a.Component);function ae(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return ae=function(){return e},e}var re=b.default.div(ae()),ie=function(e){var t=e.topRated,n=e.popular,a=e.airing,i=e.error,l=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null," TV Shows | Ickflix")),l?r.a.createElement(U,null):r.a.createElement(re,null,r.a.createElement(x.a,null,r.a.createElement("title",null," TV Shows | Ickflix")),t&&t.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(Q,{title:e.original_name,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(Q,{title:e.original_name,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(S,{title:"Airing Today"},a.map((function(e){return r.a.createElement(Q,{title:e.original_name,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(P,{color:"#e74c3c",text:i})))},le=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airing:null,error:null,loading:!0},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,ee.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,ee.airing();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airing:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airing,i=e.error,l=e.loading;return r.a.createElement(ie,{topRated:t,popular:n,airing:a,error:i,loading:l})}}]),t}(a.Component);function oe(){var e=Object(h.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return oe=function(){return e},e}function ue(){var e=Object(h.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return ue=function(){return e},e}function ce(){var e=Object(h.a)(["\n  padding: 0px 20px;\n"]);return ce=function(){return e},e}var se=b.default.div(ce()),pe=b.default.form(ue()),me=b.default.input(oe()),de=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading,o=e.handleSubmit,u=e.updateTerm;return r.a.createElement(se,null,r.a.createElement(x.a,null,r.a.createElement("title",null," Search | Ickflix")),r.a.createElement(pe,{onSubmit:o},r.a.createElement(me,{placeholder:"Search Movies or Shows...",value:a,onChange:u})),l?r.a.createElement(U,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"Movie Results"},t.map((function(e){return r.a.createElement(Q,{title:e.original_title,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(Q,{title:e.original_name,key:e.id,id:e.id,imgUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(P,{color:"#e74c3c",text:i}),t&&n&&0===t.length&&0===n.length&&r.a.createElement(P,{color:"#e74c3c",text:"Nothing found : ".concat(a)})))},fe=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(p.a)(s.a.mark((function e(){var t,a,r,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,te.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,ee.search(t);case 9:i=e.sent,l=i.data.results,n.setState({movieResults:r,tvResults:l}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find search results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading;return r.a.createElement(de,{movieResults:t,tvResults:n,searchTerm:a,error:i,loading:l,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(a.Component);function ge(){var e=Object(h.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ge=function(){return e},e}function ve(){var e=Object(h.a)(["\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 5px solid ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return ve=function(){return e},e}function he(){var e=Object(h.a)(["\n  display: flex;\n"]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return be=function(){return e},e}var Ee=b.default.header(be()),xe=b.default.ul(he()),ye=b.default.li(ve(),(function(e){return e.current?"red":"transparent"})),je=Object(b.default)(o.b)(ge()),Oe=Object(u.g)((function(e){var t=e.location.pathname;return r.a.createElement(Ee,null,r.a.createElement(xe,null,r.a.createElement(ye,{current:"/"===t},r.a.createElement(je,{to:"/"}," Movies ")),r.a.createElement(ye,{current:"/tv"===t},r.a.createElement(je,{to:"/tv"}," TV ")),r.a.createElement(ye,{current:"/search"===t},r.a.createElement(je,{to:"/search"}," Search "))))}));function _e(){var e=Object(h.a)(["\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 1.5;\n  width: 50%;\n"]);return _e=function(){return e},e}function ke(){var e=Object(h.a)(["\n  margin: 0 10px;\n"]);return ke=function(){return e},e}function we(){var e=Object(h.a)([""]);return we=function(){return e},e}function Se(){var e=Object(h.a)(["\n  margin: 20px 0;\n"]);return Se=function(){return e},e}function Re(){var e=Object(h.a)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n"]);return Re=function(){return e},e}function Te(){var e=Object(h.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Te=function(){return e},e}function Ue(){var e=Object(h.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return Ue=function(){return e},e}function Me(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return Me=function(){return e},e}function Ie(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  opacity: 0.5;\n  filter: blur(3px);\n  z-index: 0;\n"]);return Ie=function(){return e},e}function ze(){var e=Object(h.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return ze=function(){return e},e}var Ce=b.default.div(ze()),Pe=b.default.div(Ie(),(function(e){return e.bgImage})),Fe=b.default.div(Me()),De=b.default.div(Ue(),(function(e){return e.bgImage})),Ne=b.default.div(Te()),Ve=b.default.h3(Re()),Ae=b.default.div(Se()),Be=b.default.span(we()),Le=b.default.span(ke()),qe=b.default.p(_e()),Je=function(e){var t=e.result;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null," Loading | Ickflix ")),r.a.createElement(U,null)):r.a.createElement(Ce,null,r.a.createElement(x.a,null,r.a.createElement("title",null," ",t.original_title?t.original_title:t.original_name," ","| Ickflix"," ")),r.a.createElement(Pe,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Fe,null,r.a.createElement(De,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.poster_path)}),r.a.createElement(Ne,null,r.a.createElement(Ve,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Ae,null,r.a.createElement(Be,null,t.release_date?t.release_date:t.first_air_date),r.a.createElement(Le,null," \u2219 "),r.a.createElement(Be,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Le,null," \u2219 "),r.a.createElement(Be,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(qe,null,t.overview))))},Ge=function(e){function t(e){var n;Object(m.a)(this,t),n=Object(f.a)(this,Object(g.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,i,l,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,te.detail(i);case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,ee.detail(i);case 16:u=e.sent,l=u.data;case 18:console.log(l),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),this.setState({error:"Can't find Detail information "});case 24:return e.prev=24,this.setState({loading:!1,result:l}),e.finish(24);case 27:case"end":return e.stop()}}),e,this,[[6,21,24,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(Je,{result:t,error:n,loading:a})}}]),t}(a.Component),He=function(){return r.a.createElement(o.a,null,r.a.createElement(Oe,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:ne}),r.a.createElement(u.b,{path:"/tv",component:le}),r.a.createElement(u.b,{path:"/search",component:fe}),r.a.createElement(u.b,{path:"/movie/:id",component:Ge}),r.a.createElement(u.b,{path:"/show/:id",component:Ge}),r.a.createElement(u.a,{from:"*",to:"/"})))},Ke=n(42),Qe=n.n(Ke);function We(){var e=Object(h.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body {\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"]);return We=function(){return e},e}var Xe=Object(b.createGlobalStyle)(We(),Qe.a);var Ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(He,null),r.a.createElement(Xe,null))};l.a.render(r.a.createElement(Ye,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3b3f98a7.chunk.js.map