(this["webpackJsonpplatzi-badges"]=this["webpackJsonpplatzi-badges"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/platziconf-logo.f246f5f1.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/badge-header.973f5842.svg"},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/twitter.182d5ef4.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/astronauts.71addf45.svg"},function(e,a,t){e.exports=t.p+"static/media/logo.0026b862.svg"},function(e,a,t){e.exports=t(62)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),s=t.n(l);t(38),t(39),t(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(41);var c=t(3),o=t(13),i=t(1),m=t.n(i),u=t(4),d=t(5),g=t(7),p=t(6),h=t(8),f=(t(43),t(18)),E=t.n(f),v=t(23),b=(t(44),t(27)),N=t.n(b),w=t(28),y=t.n(w),O=function(e){var a=e.email,t=y()(a);return r.a.createElement("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(t,"?d=identicon"),alt:"Avatar"})};var j=function(e){var a=function(e){var a=r.a.useState(""),t=Object(v.a)(a,2),n=t[0],l=t[1],s=r.a.useState(e),c=Object(v.a)(s,2),o=c[0],i=c[1];return r.a.useMemo((function(){var a=e.filter((function(e){for(var a=0,t=Object.keys(e);a<t.length;a++){if(e[t[a]].toLowerCase().includes(n.toLowerCase()))return e}}));i(a)}),[e,n]),{query:n,setQuery:l,filteredBadges:o}}(e.badges),t=a.query,n=a.setQuery,l=a.filteredBadges;return 0===l.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){n(e.target.value)}})),r.a.createElement("h3",null,"Badges not found"),r.a.createElement(c.b,{to:"/badges/new",className:"btn btn-primary"},"Create new badge")):r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){n(e.target.value)}})),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("ul",{className:"list-unstyled"},l.map((function(e){return r.a.createElement("li",{key:e.id,className:"BadgesListItem"},r.a.createElement(c.b,{className:"text-reset text-decoration-none w-100",to:"/badges/".concat(e.id)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(O,{className:"BadgesListItem__avatar",email:e.email})),r.a.createElement("div",{className:"col-9"},r.a.createElement("b",null,e.firstName," ",e.lastName),r.a.createElement("br",null),r.a.createElement("img",{width:"20",height:"20",src:N.a,alt:"twitter"}),r.a.createElement("span",{className:"twitter-color"},"@",e.twitter),r.a.createElement("br",null),r.a.createElement("small",null,e.jobTitle)))))})))))},x=(t(52),function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center loader"},r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-secondary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-danger",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-warning",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-info",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-light",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-dark",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}),_="http://localhost:3001",C=function(e){return new Promise((function(a){return setTimeout(a,e)}))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(a-e+1))+e},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return C(B(e,a))};function k(e){var a,t,n,r,l=arguments;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},s.next=3,m.a.awrap(S());case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},t=_+e,s.next=7,m.a.awrap(fetch(t,a));case 7:return n=s.sent,s.next=10,m.a.awrap(n.json());case 10:return r=s.sent,s.abrupt("return",r);case 12:case"end":return s.stop()}}))}var D={badges:{list:function(){return k("/badges")},create:function(e){return k("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return k("/badges/".concat(e))},update:function(e,a){return k("/badges/".concat(e),{method:"PUT",body:JSON.stringify(a)})},remove:function(e){return k("/badges/".concat(e),{method:"DELETE"})}}},T=(t(53),function(e){return r.a.createElement("div",{className:"PageError"},r.a.createElement("span",{role:"img","aria-label":"error"},e.error.message,"\u274c"),r.a.createElement(c.b,{to:"/badges"},"Go to badges list"))}),M=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(g.a)(this,Object(p.a)(a).call(this,e))).fetchData=function(){var e;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({loading:!0,error:null}),a.prev=1,a.next=4,m.a.awrap(D.badges.list());case 4:e=a.sent,t.setState({data:e,loading:!1}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t.setState({loading:!1,error:a.t0});case 11:case"end":return a.stop()}}),null,null,[[1,8]])},t.state={data:null,loading:!0,error:null},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData(),this.interval=setInterval(this.fetchData,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.data&&this.state.data.length>0&&r.a.createElement("div",null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:E.a,alt:"logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(c.b,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),r.a.createElement(j,{badges:this.state.data})))),this.state.loading&&!this.state.data&&r.a.createElement(x,null),this.state.error&&r.a.createElement(T,{error:this.state.error}))}}]),a}(r.a.Component),I=t(15),F=t(19),L=t(12),A=t.n(L),U=(t(54),t(55),function(e){function a(){return Object(u.a)(this,a),Object(g.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement(O,{className:"Badge__avatar",email:this.props.email}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null)," ",this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("div",null,"@",this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},"#platziconf"))}}]),a}(r.a.Component)),P=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){},t.handleSubmit=function(e){e.preventDefault()},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"jobTitle",value:this.props.formValues.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"twitter"})),r.a.createElement("div",{className:"d-flex justify-content-center mb-3"},r.a.createElement("button",{type:"submit",onClick:this.handleClick,className:"btn btn-primary"},"Save")),this.props.error&&r.a.createElement("p",{className:"text-danger"},this.props.error.message)))}}]),a}(r.a.Component),J=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"Gleycer",lastName:"Parra",email:"gleycerparra@gmail.com",jobTitle:"Javascript Fullstack Developer",twitter:"gleycerparra",avatarUrl:"https://www.gravatar.com/avatar/402320a069647b54726603ea54bd8e13"}},t.handleChange=function(e){t.setState({form:Object(F.a)({},t.state.form,Object(I.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(e){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t.setState({loading:!0,error:null}),a.prev=2,a.next=5,m.a.awrap(D.badges.create(t.state.form));case 5:t.setState({loading:!1}),t.props.history.push("/badges"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),t.setState({loading:!1,error:a.t0});case 12:case"end":return a.stop()}}),null,null,[[2,9]])},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"BadgeNew__hero-image img-fluid",src:A.a,alt:"header"})),!this.state.loading&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(U,{firstName:this.state.form.firstName,lastName:this.state.form.lastName,email:this.state.form.email,jobTitle:this.state.form.jobTitle,twitter:this.state.form.twitter,avatarUrl:this.state.form.avatarUrl})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"New Attendant"),r.a.createElement(P,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error})))),this.state.loading&&r.a.createElement(x,null),this.state.error&&r.a.createElement(T,{error:this.state.error}))}}]),a}(r.a.Component),z=(t(56),t(57),function(e){return e.isOpen?s.a.createPortal(r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"Modal__container"},r.a.createElement("button",{onClick:e.onClose,className:"Modal__close-button"},"X"),e.children)),document.getElementById("modal")):null}),V=(t(58),function(e){return r.a.createElement(z,{isOpen:e.modalIsOpen,onClose:e.onCloseModal},r.a.createElement("div",{className:"DeleteBadgeModal"},r.a.createElement("h1",null,"Are you sure?"),r.a.createElement("p",null,"You are about to delete this badge."),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-3"},"Delete"),r.a.createElement("button",{onClick:e.onCloseModal,className:"btn btn-primary"},"Cancel"))))}),G=function(e){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeDetails__hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-center"},r.a.createElement("img",{src:A.a,alt:"logo"})),r.a.createElement("div",{className:"col-6 text-center BadgeDetails__hero-attendant-name"},r.a.createElement("h1",null,e.badge.firstName," ",e.badge.lastName))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(U,{firstName:e.badge.firstName,lastName:e.badge.lastName,email:e.badge.email,jobTitle:e.badge.jobTitle,twitter:e.badge.twitter})),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Actions"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(c.b,{className:"btn btn-primary mb-3",to:"/badges/".concat(e.badge.id,"/edit")},"Edit")),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onOpenModal,className:"btn btn-danger"},"Delete"),r.a.createElement(V,{onDeleteBadge:e.onDeleteBadge,modalIsOpen:e.modalIsOpen,onCloseModal:e.onCloseModal}))))))))},H=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0,modalIsOpen:!1},t.fetchData=function(){var e;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({loading:!0,error:null}),a.prev=1,a.next=4,m.a.awrap(D.badges.read(t.props.match.params.id));case 4:e=a.sent,t.setState({loading:!1,data:e}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t.setState({loading:!1,error:a.t0});case 11:case"end":return a.stop()}}),null,null,[[1,8]])},t.handleDeleteBadge=function(e){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({modalIsOpen:!1,loading:!0,error:null}),e.prev=1,e.next=4,m.a.awrap(D.badges.remove(t.props.match.params.id));case 4:t.setState({loading:!1}),t.props.history.push("/badges"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),null,null,[[1,8]])},t.handleModal=function(e){t.setState({modalIsOpen:!t.state.modalIsOpen})},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement(r.a.Fragment,null,this.state.loading&&r.a.createElement(x,null),this.state.error&&r.a.createElement(T,{error:this.state.error}),this.state.data&&!this.state.loading&&r.a.createElement(G,{onDeleteBadge:this.handleDeleteBadge,onOpenModal:this.handleModal,onCloseModal:this.handleModal,modalIsOpen:this.state.modalIsOpen,badge:e}))}}]),a}(r.a.Component),W=(t(59),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"Gleycer",lastName:"Parra",email:"gleycerparra@gmail.com",jobTitle:"Javascript Fullstack Developer",twitter:"gleycerparra",avatarUrl:"https://www.gravatar.com/avatar/402320a069647b54726603ea54bd8e13"}},t.fetchData=function(e){var a;return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,m.a.awrap(D.badges.read(t.props.match.params.id));case 4:a=e.sent,t.setState({loading:!1,form:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),null,null,[[1,8]])},t.handleChange=function(e){t.setState({form:Object(F.a)({},t.state.form,Object(I.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(e){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t.setState({loading:!0,error:null}),a.prev=2,a.next=5,m.a.awrap(D.badges.update(t.props.match.params.id,t.state.form));case 5:t.setState({loading:!1}),t.props.history.push("/badges"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),t.setState({loading:!1,error:a.t0});case 12:case"end":return a.stop()}}),null,null,[[2,9]])},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeEdit__hero"},r.a.createElement("img",{className:"BadgeEdit__hero-image img-fluid",src:A.a,alt:"header"})),!this.state.loading&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(U,{firstName:this.state.form.firstName,lastName:this.state.form.lastName,email:this.state.form.email,jobTitle:this.state.form.jobTitle,twitter:this.state.form.twitter,avatarUrl:this.state.form.avatarUrl})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Edit Attendant"),r.a.createElement(P,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error})))),this.state.loading&&r.a.createElement(x,null))}}]),a}(r.a.Component)),q=(t(60),t(31)),Q=t.n(q);var R=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"col-6 Home__col"},r.a.createElement("img",{src:A.a,alt:"platzi-conf"}),r.a.createElement("h1",null,"PRINT YOUR BADGES"),r.a.createElement("h4",null,"The easiest way to manage your conference"),r.a.createElement(c.b,{to:"/badges"},r.a.createElement("h5",null,"Go to Badges List"))),r.a.createElement("div",{className:"col-6 Home__col"},r.a.createElement("img",{width:"80%",src:Q.a,alt:"astronauts"})))};var Y=function(){return r.a.createElement("h1",null,"404 NOT FOUND")},X=t(32),$=t.n(X),K=(t(61),function(e){function a(){return Object(u.a)(this,a),Object(g.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(c.b,{className:"Navbar__brand",to:"/badges"},r.a.createElement("img",{className:"Navbar__brand-logo",src:$.a,alt:"logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf"))))}}]),a}(r.a.Component)),Z=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),e.children)};var ee=function(){return r.a.createElement(c.a,null,r.a.createElement(Z,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/badges",component:M}),r.a.createElement(o.b,{exact:!0,path:"/badges/new",component:J}),r.a.createElement(o.b,{exact:!0,path:"/badges/:id/edit",component:W}),r.a.createElement(o.b,{exact:!0,path:"/badges/:id/",component:H}),r.a.createElement(o.b,{exact:!0,path:"/",component:R}),r.a.createElement(o.b,{path:"/404",component:Y}),r.a.createElement(o.a,{from:"*",to:"/404"}))))};s.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[33,1,2]]]);
//# sourceMappingURL=main.290ce8cb.chunk.js.map