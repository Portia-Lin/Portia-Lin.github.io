(function(t){function a(a){for(var s,r,i=a[0],l=a[1],c=a[2],v=0,b=[];v<i.length;v++)r=i[v],o[r]&&b.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(b.length)b.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},o={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("64a9"),o=e.n(s);o.a},"0b6a":function(t,a,e){"use strict";var s=e("5cc9"),o=e.n(s);o.a},"259b":function(t,a,e){},"269b":function(t,a,e){},"26f0":function(t,a,e){"use strict";var s=e("2ecc"),o=e.n(s);o.a},"2ecc":function(t,a,e){},"40f0":function(t,a,e){"use strict";var s=e("588b"),o=e.n(s);o.a},"42df":function(t,a,e){},5233:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),o=e("9f7b"),n=e("5f30"),r=e.n(n),i=e("3f08"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view"),e("Footer")],1)},c=[],u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("header",[e("b-navbar",{attrs:{toggleable:"md",variant:"light"}},[e("b-navbar-brand",{staticClass:"logo",attrs:{href:"/"}},[e("p",[e("span",{staticClass:"b"},[t._v("B")]),e("span",{staticClass:"book"},[t._v("ook ")]),e("span",{staticClass:"m"},[t._v("M")]),e("span",{staticClass:"market"},[t._v("arket")])])]),e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e("b-collapse",{staticClass:"justify-content-end",attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"/"}},[t._v("ГОЛОВНА")])],1),e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"/books"}},[t._v("КНИГИ")])],1),e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"/genres"}},[t._v("ЖАНРИ")])],1),e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"/authors"}},[t._v("АВТОРИ")])],1)],1)],1)],1)])},v=[],b={name:"Header"},p=b,f=(e("60ca"),e("2877")),_=Object(f["a"])(p,u,v,!1,null,"d5d9bc42",null);_.options.__file="Header.vue";var d=_.exports,m=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container navbar-fixed-bottom"},[e("div",{staticClass:"footer row no-gutters align-items-center"},[e("div",{staticClass:"f-el col-xl-3 col-lg-4 col-md-4"},[e("p",[t._v("© 2018 — "),e("a",{attrs:{href:"/"}},[t._v("BookMarket")])])]),e("div",{staticClass:"f-el col-xl-3 col-lg-4 col-md-4"},[e("p",[e("img",{staticClass:"ico",attrs:{src:"/images/instagram.png",alt:""}}),e("a",{attrs:{href:"https://www.instagram.com/jonas.quinn/"}},[t._v("Jonas.Quinn")])])]),e("div",{staticClass:"f-el col-xl-3 col-lg-4 col-md-4"},[e("p",[e("img",{staticClass:"ico",attrs:{src:"/images/tel.png",alt:""}}),t._v(" +3809"),e("span",{staticClass:"devil"},[e("a",{attrs:{href:"/tdmmdi"}},[t._v("6")])]),t._v("4857938")])])])])}],h={name:"Footer"},C=h,k=(e("578d"),Object(f["a"])(C,m,g,!1,null,"6fdc88e6",null));k.options.__file="Footer.vue";var x=k.exports,y={components:{Header:d,Footer:x}},w=y,j=(e("034f"),Object(f["a"])(w,l,c,!1,null,null,null));j.options.__file="App.vue";var O=j.exports,E=e("8c4f"),$=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"test"},[e("p",{staticClass:"w"},[t._v("WELCOME")]),e("p",{staticClass:"t"},[t._v("to")]),e("p",{staticClass:"h"},[t._v("H E L L")]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"devil col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"},[e("img",{attrs:{src:"/images/devil.png",alt:""}})])]),e("p",{staticClass:"m"},[t._v("· the devil made me do it ·")])])])}],A={name:"Devil"},P=A,T=(e("7d48"),Object(f["a"])(P,$,B,!1,null,"1556a270",null));T.options.__file="Tdmmdi.vue";var G=T.exports,M=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:" content col-xl-12"},[e("p",{staticClass:"logo"},[t._v("Ми раді бачити вас на сайті "),e("span",{staticClass:"b"},[t._v("BOOK")]),e("span",{staticClass:"m"},[t._v("MARKET")]),t._v(" — електронній бібліотеці.")]),e("p",[t._v("Тут ви можете безкоштовно завантажувати електронні книги в форматі "),e("span",{staticClass:"desc"},[t._v("*.fb2")]),t._v(" та "),e("span",{staticClass:"desc"},[t._v("*.epub")]),t._v(".")])])])])}],H={name:"Home"},I=H,q=(e("5ff6"),Object(f["a"])(I,M,S,!1,null,"497dc2ec",null));q.options.__file="HomePage.vue";var F=q.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row-books row no-gutters"},t._l(t.books,function(t,a){return e("Book",{key:a,attrs:{book:t}})}))])},z=[],J=e("59ca"),K=e.n(J),N=(e("66ce"),{apiKey:"AIzaSyCM9VPiNAuS25B4n09GnjezCns3pjP3QFI",authDomain:"portia-lin.firebaseapp.com",databaseURL:"https://portia-lin.firebaseio.com",projectId:"portia-lin",storageBucket:"portia-lin.appspot.com",messagingSenderId:"289165984578"}),D=K.a.initializeApp(N),Q=D.database(),R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("fragment",[e("div",{staticClass:"book-img col-xl-3 col-lg-2 col-md-4 col-sm-4"},[e("img",{staticClass:"iimg",attrs:{src:t.book.image,alt:t.book.title}})]),e("div",{staticClass:"about-itm col-xl-3 col-lg-4 col-md-8 col-sm-8"},[e("h3",{staticClass:"book-title"},[t._v(t._s(t.book.title))]),e("h4",{staticClass:"book-author"},[t._v(t._s(t.book.author))]),e("p",{staticClass:"genre"},[t._v("Жанр: "+t._s(t.book.genre_id))]),e("p",{staticClass:"annotation"},[t._v(t._s(t.book.annotation))]),e("div",{staticClass:"next row no-gutters flex-grow-1 align-items-end"},[e("div",{staticClass:"col-xl-12 col-md-6 col-sm-9 col-lg-9 col-9"},[e("router-link",{staticClass:"btn btn-outline-primary btn-block",attrs:{to:{name:"about-book-page",params:{id:this.book.id}},role:"button"}},[t._v("Детальніше")])],1)])])])},U=[],V={name:"Book",props:["book"]},W=V,X=(e("5728"),Object(f["a"])(W,R,U,!1,null,"4f85be9c",null));X.options.__file="Book.vue";var Y=X.exports,Z={name:"Books",data:function(){return{books:[]}},firebase:{books:Q.ref("books")},components:{Book:Y}},tt=Z,at=(e("40f0"),Object(f["a"])(tt,L,z,!1,null,"25abcc1e",null));at.options.__file="BooksPage.vue";var et=at.exports,st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row-genres row"},t._l(t.genres,function(t,a){return e("Genre",{key:a,attrs:{genre:t}})}))])},ot=[],nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"genre col-xl-3 col-lg-3 col-md-4 col-sm-6"},[e("router-link",{attrs:{to:{name:"about-genre-page",params:{slug:this.genre.slug}}}},[t._v(t._s(t.genre.genre))])],1)},rt=[],it={name:"Genre",props:["genre"]},lt=it,ct=(e("0b6a"),Object(f["a"])(lt,nt,rt,!1,null,"ed35868c",null));ct.options.__file="Genre.vue";var ut=ct.exports,vt={name:"Genres",data:function(){return{genres:[]}},firebase:{genres:Q.ref("genres")},components:{Genre:ut}},bt=vt,pt=(e("f4a2"),Object(f["a"])(bt,st,ot,!1,null,"10311398",null));pt.options.__file="GenresPage.vue";var ft=pt.exports,_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},t._l(t.authors,function(t,a){return e("Author",{key:a,attrs:{author:t}})}))},dt=[],mt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"author row"},[e("div",{staticClass:"author-img col-xl-3 col-lg-4 col-md-5 col-sm-12"},[e("img",{staticClass:"iimg",attrs:{src:t.author.image,alt:t.author.name}})]),e("div",{staticClass:"about-author col-xl-9 col-lg-8 col-md-7 col-sm-12"},[e("h3",{staticClass:"author-name"},[t._v(t._s(t.author.name))]),e("p",{staticClass:"biography"},[t._v(t._s(t.author.biography))]),e("div",{staticClass:"next row no-gutters flex-grow-1 align-items-end"},[e("div",{staticClass:"col-xl-4 col-lg-6 col-md-8 col-sm-9 col-9"},[e("router-link",{staticClass:"btn btn-outline-primary btn-block",attrs:{to:{name:"about-author-page",params:{id:this.author.id}},role:"button"}},[t._v("Детальніше")])],1)])])])},gt=[],ht={name:"Author",props:["author"]},Ct=ht,kt=(e("a827"),Object(f["a"])(Ct,mt,gt,!1,null,"67676ebc",null));kt.options.__file="Author.vue";var xt=kt.exports,yt={name:"Authors",data:function(){return{authors:[]}},firebase:{authors:Q.ref("authors")},components:{Author:xt}},wt=yt,jt=(e("b482"),Object(f["a"])(wt,_t,dt,!1,null,"a7de9420",null));jt.options.__file="AuthorsPage.vue";var Ot=jt.exports,Et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.book?e("div",{staticClass:"container"},[e("div",{staticClass:"about-book row"},[e("div",{staticClass:"book-img col-xl-4 col-lg-4 col-md-4 col-sm-7"},[e("img",{staticClass:"iimg",attrs:{src:t.book.image,alt:t.book.title}})]),e("div",{staticClass:"book-description col-xl-8 col-lg-8 col-md-8 col-sm-12"},[e("h3",{staticClass:"book-title"},[t._v(t._s(t.book.title))]),e("h4",{staticClass:"book-author"},[t._v(t._s(t.book.author))]),e("p",{staticClass:"original-book-title"},[e("span",{staticClass:"original-book-title-label"},[t._v("Оригінальна назва: ")]),t._v(t._s(t.book.originalTitle))]),e("p",{staticClass:"original-book-language"},[e("span",{staticClass:"original-book-language-label"},[t._v("Мова оригіналу: ")]),t._v(t._s(t.book.language))]),e("p",{staticClass:"genre"},[e("span",{staticClass:"genre-label"},[t._v("Жанр: ")]),t._v(t._s(t.book.genre_id))]),e("p",{staticClass:"book-series"},[e("span",{staticClass:"book-series-label"},[t._v("Серія: ")]),t._v(t._s(t.book.series))]),e("p",{staticClass:"book-series-number"},[e("span",{staticClass:"book-series-number-label"},[t._v("Номер книги в серії: ")]),t._v(t._s(t.book.seriesNumber))]),e("p",{staticClass:"book-year"},[e("span",{staticClass:"book-year-label"},[t._v("Рік: ")]),t._v(t._s(t.book.year))]),e("p",{staticClass:"isbn"},[e("span",{staticClass:"isbn-label"},[t._v("ISBN: ")]),t._v(t._s(t.book.isbn))]),e("p",{staticClass:"book-language"},[e("span",{staticClass:"book-language-label"},[t._v("Переклад: ")]),t._v(t._s(t.book.translate))]),e("p",{staticClass:"book-annotation-label"},[t._v("Короткий опис:")]),e("p",{staticClass:"book-annotation-text",attrs:{id:"book-annotation-last-text"}},[t._v(t._s(t.book.annotation))]),e("div",{staticClass:"taptodwn row no-gutters"},[e("div",{staticClass:"col-xl-5 col-lg-6 col-md-8 col-sm-7 col-9"},[e("a",{staticClass:" btn btn-outline-primary btn-block",attrs:{href:t.book.file,download:"",role:"button"}},[t._v("Завантажити")])])])])])]):t._e()},$t=[],Bt=(e("ac6a"),{name:"AboutBookPage",data:function(){return{book:null,id:null}},created:function(){this.id=parseInt(this.$route.params.id)},mounted:function(){var t=this;Q.ref("books").orderByChild("id").equalTo(this.id).on("value",function(a){a.forEach(function(a){t.book=a.val()})})}}),At=Bt,Pt=(e("7aaf"),Object(f["a"])(At,Et,$t,!1,null,"7e63fd45",null));Pt.options.__file="AboutBookPage.vue";var Tt=Pt.exports,Gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.genre?e("div",{staticClass:"container"},[e("div",{staticClass:"about-genre row no-gutters"},[e("h3",{staticClass:"book-genre"},[t._v(t._s(t.genre.genre))])]),e("div",{staticClass:"about-genre row"},t._l(t.books,function(t){return e("Book",{key:t["key"],attrs:{book:t}})}))]):t._e()},Mt=[],St={name:"AboutGenrePage",components:{Book:Y},data:function(){return{genre:null,books:null}},mounted:function(){var t=this;Q.ref("genres").orderByChild("slug").equalTo(this.$route.params.slug).on("value",function(a){a.forEach(function(a){t.genre=a.val(),Q.ref("books").orderByChild("genre_id").equalTo(t.genre["id"]).on("value",function(a){t.books=a.val()})})})}},Ht=St,It=(e("94a2"),Object(f["a"])(Ht,Gt,Mt,!1,null,"8ef5139e",null));It.options.__file="AboutGenrePage.vue";var qt=It.exports,Ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.author?e("div",{staticClass:"container"},[e("div",{staticClass:"about-author row"},[e("div",{staticClass:"author-img col-xl-4 col-lg-4 col-md-4 col-sm-7"},[e("img",{staticClass:"iimg",attrs:{src:t.author.image,alt:t.author.name}})]),e("div",{staticClass:"author-description col-xl-8 col-lg-8 col-md-8 col-sm-12"},[e("h3",{staticClass:"author-title"},[t._v(t._s(t.author.name))]),e("p",{staticClass:"author-birth"},[e("span",{staticClass:"author-birth-label"},[t._v("Дата народження: ")]),t._v(t._s(t.author.birth))]),e("p",{staticClass:"author-location"},[e("span",{staticClass:"author-location-label"},[t._v("Місце народження: ")]),t._v(t._s(t.author.locatian))]),e("p",{staticClass:"author-activity"},[e("span",{staticClass:"author-activity-label"},[t._v("Діяльність: ")]),t._v(t._s(t.author.activity))]),t._m(0),e("p",{staticClass:"author-language"},[e("span",{staticClass:"author-language-label"},[t._v("Мова творі: ")]),t._v(t._s(t.author.language))]),e("h5",{staticClass:"author-biography-label"},[t._v("Біографія:")]),e("p",{staticClass:"author-biography-text"},[t._v(t._s(t.author.biography))]),e("h5",{staticClass:"author-bibliography-label"},[t._v("Бібліографія:")]),e("p",[t._v("(наверное ее не будет, сложнааа...)")])])])]):t._e()},Lt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"author-genre"},[e("span",{staticClass:"author-genre-label"},[t._v("Жанр: ")]),t._v("(нужно дописать в джава скрипт какую-то херь)")])}],zt={name:"AboutAuthorPage",data:function(){return{author:null,id:null}},created:function(){this.id=parseInt(this.$route.params.id)},mounted:function(){var t=this;Q.ref("authors").orderByChild("id").equalTo(this.id).on("value",function(a){a.forEach(function(a){t.author=a.val()})})}},Jt=zt,Kt=(e("26f0"),Object(f["a"])(Jt,Ft,Lt,!1,null,"2779c473",null));Kt.options.__file="AboutAuthorPage.vue";var Nt=Kt.exports;s["a"].use(E["a"]);var Dt=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home-page",component:F},{path:"/books",name:"books-page",component:et},{path:"/book/:id",name:"about-book-page",component:Tt},{path:"/genres",name:"genres-page",component:ft},{path:"/genres/:slug",name:"about-genre-page",component:qt},{path:"/authors",name:"authors-page",component:Ot},{path:"/authors/:id",name:"about-author-page",component:Nt},{path:"/tdmmdi",name:"tdmmdi",component:G}]});e("f9e3"),e("2dd8");s["a"].use(o["a"]),s["a"].use(r.a),s["a"].use(i["a"].Plugin),s["a"].config.productionTip=!1,new s["a"]({router:Dt,render:function(t){return t(O)}}).$mount("#app")},5728:function(t,a,e){"use strict";var s=e("7eb1"),o=e.n(s);o.a},"578d":function(t,a,e){"use strict";var s=e("259b"),o=e.n(s);o.a},"588b":function(t,a,e){},"5cc9":function(t,a,e){},"5ff6":function(t,a,e){"use strict";var s=e("a1d0"),o=e.n(s);o.a},"60ca":function(t,a,e){"use strict";var s=e("269b"),o=e.n(s);o.a},"64a9":function(t,a,e){},"7aaf":function(t,a,e){"use strict";var s=e("42df"),o=e.n(s);o.a},"7d48":function(t,a,e){"use strict";var s=e("cf23"),o=e.n(s);o.a},"7eb1":function(t,a,e){},"94a2":function(t,a,e){"use strict";var s=e("5233"),o=e.n(s);o.a},"9a3a":function(t,a,e){},a1d0:function(t,a,e){},a827:function(t,a,e){"use strict";var s=e("b546"),o=e.n(s);o.a},b482:function(t,a,e){"use strict";var s=e("ba55"),o=e.n(s);o.a},b546:function(t,a,e){},ba55:function(t,a,e){},cf23:function(t,a,e){},f4a2:function(t,a,e){"use strict";var s=e("9a3a"),o=e.n(s);o.a}});
//# sourceMappingURL=app.a12a369d.js.map