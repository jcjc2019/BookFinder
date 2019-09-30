(window["webpackJsonpgoogle-book-finder"]=window["webpackJsonpgoogle-book-finder"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/not_available.127dca9a.jpg"},55:function(e,t,a){e.exports=a(69)},60:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),s=(a(60),a(12)),l=a(13),c=a(18),u=a(14),m=a(20),p=a(42),h=a(32),d=a.n(h),f=a(43),b=a(4),g=a(106),v=a(109),E=a(107),k=a(108),x=a(103),y=a(111),w=a(110),j=a(47),O=a.n(j),I=a(44),S=a.n(I),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={expanded:!1},a.handleExpanded=function(){a.setState({expanded:!a.state.expanded})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(x.a,{item:!0,xs:6,sm:3},o.a.createElement(g.a,{className:e.card},o.a.createElement(E.a,null,void 0!==this.props.book.volumeInfo.imageLinks?o.a.createElement("img",{src:this.props.book.volumeInfo.imageLinks.thumbnail,alt:"cover",height:"200px",width:"150px"}):o.a.createElement("img",{src:S.a,alt:"cover",height:"200px",width:"150px"}),o.a.createElement(k.a,{variant:"h6"},this.props.book.volumeInfo.title),o.a.createElement(k.a,{variant:"subtitle1"}),o.a.createElement(k.a,null,"By: ",void 0!==this.props.book.volumeInfo.authors?this.props.book.volumeInfo.authors.join(", "):"Unknown"),o.a.createElement(k.a,null,"Published By: ",this.props.book.volumeInfo.publisher),o.a.createElement(k.a,null,"Published Date: ",void 0!==this.props.book.volumeInfo.publishedDate?this.props.book.volumeInfo.publishedDate:"Unknown")),o.a.createElement(v.a,{disableSpacing:!0},o.a.createElement(w.a,{onClick:this.handleExpanded,"aria-expanded":this.state.expanded,"aria-label":"show more"},o.a.createElement(O.a,null))),o.a.createElement(y.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},o.a.createElement(E.a,null,o.a.createElement(k.a,{paragraph:!0},o.a.createElement("a",{href:this.props.book.volumeInfo.infoLink},"Learn more")))))))}}]),t}(o.a.Component),D=Object(b.a)((function(e){return{root:{flexGrow:1},card:{width:400,maxWidth:500,minHeight:400,maxHeight:500,margin:16,display:"flex",flexDirection:"column",justifyContent:"space-between"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},paper:{padding:e.spacing(2),color:e.palette.text.secondary},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}))(C),L=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(x.a,{container:!0,className:e.root,justify:"space-evenly"},this.props.books.map((function(e){return o.a.createElement(D,{book:e})})))}}]),t}(o.a.Component),N=Object(b.a)((function(e){return{root:{flexGrow:1}}}))(L),P=a(112),q=a(113),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={booksData:[],totalItems:"",query:"",isLoading:!1,totalPages:0,currentPageNo:0},a.fetchData=function(){var e=a.state.query.split(" ").join("+"),t="https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&startIndex=").concat(0,"&maxResults=").concat(20,"&key=").concat("AIzaSyAXJai7q64-kw03ojn8H2XVm8AOoTiUrqM","&max-result=40");function n(){return(n=Object(f.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=8;break}throw new Error("Network response was not ok.");case 8:return e.next=10,a.json();case 10:return n=e.sent,e.abrupt("return",n);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("There has been a problem with your fetch operation: ",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})().then((function(e){var t=Number(e.totalItems),n=a.getPagesCount(t,20);a.setState({booksData:e.items,totalItems:t,isLoading:!1,totalPages:n})}))},a.getPagesCount=function(e,t){var a=e%t===0?0:1;return Math.floor(e/t)+a},a.handleChange=function(e){return function(t){a.setState(Object(p.a)({},e,t.target.value))}},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.query&&(a.setState({isLoading:!0}),a.fetchData())},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.classes;return this.state.isLoading?e=o.a.createElement(k.a,{variant:"h3"},"Searching..."):0===this.state.totalItems?e=o.a.createElement(k.a,{variant:"h3"},"No books found."):""!==this.state.totalItems&&(e=o.a.createElement(k.a,{variant:"h5"},this.state.totalItems," results. Displaying the first 20 results.")),o.a.createElement(x.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(x.a,{item:!0,xs:6},o.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},o.a.createElement(q.a,{id:"search",label:"Search for a book...",className:t.textField,value:this.state.query,onChange:this.handleChange("query"),margin:"normal",variant:"outlined"}),o.a.createElement("br",null),o.a.createElement(P.a,{type:"submit",variant:"contained",size:"medium",color:"primary",className:t.button},"Search"))),o.a.createElement("p",null,e),o.a.createElement("div",null,0===this.state.totalItems||this.state.isLoading?"":o.a.createElement(N,{books:this.state.booksData,totalItems:this.state.totalItems})),o.a.createElement(x.a,{item:!0,xs:6},this.state.totalPages>=1?o.a.createElement(P.a,{variant:"primary"},"Page 1"):""))}}]),t}(o.a.Component),B=Object(b.a)((function(e){return{button:{margin:"100 px auto"},input:{display:"none"},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(2),marginRight:e.spacing(2),flexBasis:200,display:"flex",flexWrap:"wrap"},menu:{width:200}}}))(A),W=(a(68),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"A Simple Book Finder")),o.a.createElement("body",null,o.a.createElement(B,null)))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.caabfa2b.chunk.js.map