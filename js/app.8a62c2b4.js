(function(t){function a(a){for(var e,r,i=a[0],l=a[1],c=a[2],b=0,v=[];b<i.length;b++)r=i[b],s[r]&&v.push(s[r][0]),s[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(a);while(v.length)v.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,a=0;a<n.length;a++){for(var o=n[a],e=!0,i=1;i<o.length;i++){var l=o[i];0!==s[l]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=o[0]))}return t}var e={},s={app:0},n=[];function r(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,a,o){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(o,e,function(a){return t[a]}.bind(null,e));return o},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,a,o){t.exports=o("56d7")},"034f":function(t,a,o){"use strict";var e=o("64a9"),s=o.n(e);s.a},"03c6":function(t,a,o){},"0b6a":function(t,a,o){"use strict";var e=o("5cc9"),s=o.n(e);s.a},3966:function(t,a,o){},"40f0":function(t,a,o){"use strict";var e=o("588b"),s=o.n(e);s.a},"42df":function(t,a,o){},5233:function(t,a,o){},"56d7":function(t,a,o){"use strict";o.r(a);o("cadf"),o("551c"),o("097d");var e=o("2b0e"),s=o("9f7b"),n=o("5f30"),r=o.n(n),i=o("3f08"),l=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},c=[],u=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"container"},[o("header",[o("b-navbar",{attrs:{toggleable:"md",variant:"light"}},[o("b-navbar-brand",{staticClass:"logo",attrs:{href:"/"}},[o("p",[o("span",{staticClass:"b"},[t._v("B")]),o("span",{staticClass:"book"},[t._v("ook ")]),o("span",{staticClass:"m"},[t._v("M")]),o("span",{staticClass:"market"},[t._v("arket")])])]),o("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),o("b-collapse",{staticClass:"justify-content-end",attrs:{"is-nav":"",id:"nav_collapse"}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{href:"/"}},[t._v("ГОЛОВНА")])],1),o("b-navbar-nav",[o("b-nav-item",{attrs:{href:"/books"}},[t._v("КНИГИ")])],1),o("b-navbar-nav",[o("b-nav-item",{attrs:{href:"/genres"}},[t._v("ЖАНРИ")])],1),o("b-navbar-nav",[o("b-nav-item",{attrs:{href:"/authors"}},[t._v("АВТОРИ")])],1)],1)],1)],1)])},b=[],v={name:"Header"},p=v,f=(o("bf5f"),o("2877")),_=Object(f["a"])(p,u,b,!1,null,"c7fc0246",null);_.options.__file="Header.vue";var g=_.exports,h={components:{Header:g}},d=h,m=(o("034f"),Object(f["a"])(d,l,c,!1,null,null,null));m.options.__file="App.vue";var k=m.exports,C=o("8c4f"),y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"container"},[o("div",{staticClass:"test col-xl-12 col-lg-12 col-md-12 col-sm-12"},[o("p",[t._v("WELCOME")]),o("br"),o("p",[t._v("to")]),o("br"),o("p",[t._v("H E L L")])])])}],w={name:"Home"},j=w,O=(o("6c25"),Object(f["a"])(j,y,x,!1,null,"9a451c8a",null));O.options.__file="HomePage.vue";var E=O.exports,P=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"container"},[o("div",{staticClass:"row-books row no-gutters"},t._l(t.books,function(t,a){return o("Book",{key:a,attrs:{book:t}})}))])},A=[],B=o("59ca"),$=o.n(B),G=(o("66ce"),{apiKey:"AIzaSyCM9VPiNAuS25B4n09GnjezCns3pjP3QFI",authDomain:"portia-lin.firebaseapp.com",databaseURL:"https://portia-lin.firebaseio.com",projectId:"portia-lin",storageBucket:"portia-lin.appspot.com",messagingSenderId:"289165984578"}),S=$.a.initializeApp(G),T=S.database(),H=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("fragment",[o("div",{staticClass:"book-img col-xl-3 col-lg-2 col-md-4 col-sm-4"},[o("img",{staticClass:"iimg",attrs:{src:t.book.image,alt:t.book.title}})]),o("div",{staticClass:"about-itm col-xl-3 col-lg-4 col-md-8 col-sm-8"},[o("h3",{staticClass:"book-title"},[t._v(t._s(t.book.title))]),o("h4",{staticClass:"book-author"},[t._v(t._s(t.book.author))]),o("p",{staticClass:"genre"},[t._v("Жанр: "+t._s(t.book.genre_id))]),o("p",{staticClass:"annotation"},[t._v(t._s(t.book.annotation))]),o("div",{staticClass:"next row no-gutters flex-grow-1 align-items-end"},[o("div",{staticClass:"col-xl-12 col-md-6 col-sm-9 col-lg-9 col-9"},[o("router-link",{staticClass:"btn btn-outline-primary btn-block",attrs:{to:{name:"about-book-page",params:{id:this.book.id}},role:"button"}},[t._v("Детальніше")])],1)])])])},I=[],M={name:"Book",props:["book"]},q=M,L=(o("7c47"),Object(f["a"])(q,H,I,!1,null,"5ca06f41",null));L.options.__file="Book.vue";var z=L.exports,N={name:"Books",data:function(){return{books:[]}},firebase:{books:T.ref("books")},components:{Book:z}},J=N,D=(o("40f0"),Object(f["a"])(J,P,A,!1,null,"25abcc1e",null));D.options.__file="BooksPage.vue";var F=D.exports,K=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"container"},[o("div",{staticClass:"row-genres row"},t._l(t.genres,function(t,a){return o("Genre",{key:a,attrs:{genre:t}})}))])},Q=[],R=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"genre col-xl-3 col-lg-3 col-md-4 col-sm-6"},[o("router-link",{attrs:{to:{name:"about-genre-page",params:{slug:this.genre.slug}}}},[t._v(t._s(t.genre.genre))])],1)},U=[],V={name:"Genre",props:["genre"]},W=V,X=(o("0b6a"),Object(f["a"])(W,R,U,!1,null,"ed35868c",null));X.options.__file="Genre.vue";var Y=X.exports,Z={name:"Genres",data:function(){return{genres:[]}},firebase:{genres:T.ref("genres")},components:{Genre:Y}},tt=Z,at=(o("f4a2"),Object(f["a"])(tt,K,Q,!1,null,"10311398",null));at.options.__file="GenresPage.vue";var ot=at.exports,et=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"container"},t._l(t.authors,function(t,a){return o("Author",{key:a,attrs:{author:t}})}))},st=[],nt=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"author row"},[o("div",{staticClass:"author-img col-xl-3 col-lg-4 col-md-5 col-sm-12"},[o("img",{staticClass:"iimg",attrs:{src:t.author.image,alt:t.author.name}})]),o("div",{staticClass:"about-author col-xl-9 col-lg-8 col-md-7 col-sm-12"},[o("h3",{staticClass:"author-name"},[t._v(t._s(t.author.name))]),o("p",{staticClass:"biography"},[t._v(t._s(t.author.biography))]),o("div",{staticClass:"next row no-gutters flex-grow-1 align-items-end"},[o("div",{staticClass:"col-xl-4 col-lg-6 col-md-8 col-sm-9 col-9"},[o("router-link",{staticClass:"btn btn-outline-primary btn-block",attrs:{to:{name:"about-author-page",params:{id:this.author.id}},role:"button"}},[t._v("Детальніше")])],1)])])])},rt=[],it={name:"Author",props:["author"]},lt=it,ct=(o("a827"),Object(f["a"])(lt,nt,rt,!1,null,"67676ebc",null));ct.options.__file="Author.vue";var ut=ct.exports,bt={name:"Authors",data:function(){return{authors:[]}},firebase:{authors:T.ref("authors")},components:{Author:ut}},vt=bt,pt=(o("b482"),Object(f["a"])(vt,et,st,!1,null,"a7de9420",null));pt.options.__file="AuthorsPage.vue";var ft=pt.exports,_t=function(){var t=this,a=t.$createElement,o=t._self._c||a;return t.book?o("div",{staticClass:"container"},[o("div",{staticClass:"about-book row"},[o("div",{staticClass:"book-img col-xl-4 col-lg-4 col-md-4 col-sm-7"},[o("img",{staticClass:"iimg",attrs:{src:t.book.image,alt:t.book.title}})]),o("div",{staticClass:"book-description col-xl-8 col-lg-8 col-md-8 col-sm-12"},[o("h3",{staticClass:"book-title"},[t._v(t._s(t.book.title))]),o("h4",{staticClass:"book-author"},[t._v(t._s(t.book.author))]),o("p",{staticClass:"original-book-title"},[o("span",{staticClass:"original-book-title-label"},[t._v("Оригінальна назва: ")]),t._v(t._s(t.book.originalTitle))]),o("p",{staticClass:"original-book-language"},[o("span",{staticClass:"original-book-language-label"},[t._v("Мова оригіналу: ")]),t._v(t._s(t.book.language))]),o("p",{staticClass:"genre"},[o("span",{staticClass:"genre-label"},[t._v("Жанр: ")]),t._v(t._s(t.book.genre_id))]),o("p",{staticClass:"book-series"},[o("span",{staticClass:"book-series-label"},[t._v("Серія: ")]),t._v(t._s(t.book.series))]),o("p",{staticClass:"book-series-number"},[o("span",{staticClass:"book-series-number-label"},[t._v("Номер книги в серії: ")]),t._v(t._s(t.book.seriesNumber))]),o("p",{staticClass:"book-year"},[o("span",{staticClass:"book-year-label"},[t._v("Рік: ")]),t._v(t._s(t.book.year))]),o("p",{staticClass:"isbn"},[o("span",{staticClass:"isbn-label"},[t._v("ISBN: ")]),t._v(t._s(t.book.isbn))]),o("p",{staticClass:"book-language"},[o("span",{staticClass:"book-language-label"},[t._v("Переклад: ")]),t._v(t._s(t.book.translate))]),o("p",{staticClass:"book-annotation-label"},[t._v("Короткий опис:")]),o("p",{staticClass:"book-annotation-text",attrs:{id:"book-annotation-last-text"}},[t._v(t._s(t.book.annotation))]),o("div",{staticClass:"taptodwn row no-gutters"},[o("div",{staticClass:"col-xl-5 col-lg-6 col-md-8 col-sm-7 col-9"},[o("a",{staticClass:" btn btn-outline-primary btn-block",attrs:{href:t.book.file,download:"",role:"button"}},[t._v("Завантажити")])])])])])]):t._e()},gt=[],ht=(o("ac6a"),{name:"AboutBookPage",data:function(){return{book:null,id:null}},created:function(){this.id=parseInt(this.$route.params.id)},mounted:function(){var t=this;T.ref("books").orderByChild("id").equalTo(this.id).on("value",function(a){a.forEach(function(a){t.book=a.val()})})}}),dt=ht,mt=(o("7aaf"),Object(f["a"])(dt,_t,gt,!1,null,"7e63fd45",null));mt.options.__file="AboutBookPage.vue";var kt=mt.exports,Ct=function(){var t=this,a=t.$createElement,o=t._self._c||a;return t.genre?o("div",{staticClass:"container"},[o("div",{staticClass:"about-genre row no-gutters"},[o("h3",{staticClass:"book-genre"},[t._v(t._s(t.genre.genre))])]),o("div",{staticClass:"about-genre row"},t._l(t.books,function(t){return o("Book",{key:t["key"],attrs:{book:t}})}))]):t._e()},yt=[],xt={name:"AboutGenrePage",components:{Book:z},data:function(){return{genre:null,books:null}},mounted:function(){var t=this;T.ref("genres").orderByChild("slug").equalTo(this.$route.params.slug).on("value",function(a){a.forEach(function(a){t.genre=a.val(),T.ref("books").orderByChild("genre_id").equalTo(t.genre["id"]).on("value",function(a){t.books=a.val()})})})}},wt=xt,jt=(o("94a2"),Object(f["a"])(wt,Ct,yt,!1,null,"8ef5139e",null));jt.options.__file="AboutGenrePage.vue";var Ot=jt.exports,Et=function(){var t=this,a=t.$createElement,o=t._self._c||a;return t.author?o("div",{staticClass:"container"},[o("div",{staticClass:"about-author row"},[o("div",{staticClass:"author-img col-xl-4 col-lg-4 col-md-4 col-sm-7"},[o("img",{staticClass:"iimg",attrs:{src:t.author.image,alt:t.author.name}})]),o("div",{staticClass:"author-description col-xl-8 col-lg-8 col-md-8 col-sm-12"},[o("h3",{staticClass:"author-title"},[t._v(t._s(t.author.name))]),o("p",{staticClass:"author-birth"},[o("span",{staticClass:"author-birth-label"},[t._v("Дата народження: ")]),t._v(t._s(t.author.birth))]),o("p",{staticClass:"author-location"},[o("span",{staticClass:"author-location-label"},[t._v("Місце народження: ")]),t._v(t._s(t.author.locatian))]),o("p",{staticClass:"author-activity"},[o("span",{staticClass:"author-activity-label"},[t._v("Діяльність: ")]),t._v(t._s(t.author.activity))]),t._m(0),o("p",{staticClass:"author-language"},[o("span",{staticClass:"author-language-label"},[t._v("Мова творі: ")]),t._v(t._s(t.author.language))]),o("h5",{staticClass:"author-biography-label"},[t._v("Біографія:")]),o("p",{staticClass:"author-biography-text"},[t._v(t._s(t.author.biography))]),o("h5",{staticClass:"author-bibliography-label"},[t._v("Бібліографія:")]),o("p",[t._v("(наверное ее не будет, сложнааа...)")])])])]):t._e()},Pt=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("p",{staticClass:"author-genre"},[o("span",{staticClass:"author-genre-label"},[t._v("Жанр: ")]),t._v("(нужно дописать в джава скрипт какую-то херь)")])}],At={name:"AboutAuthorPage",data:function(){return{author:null,id:null}},created:function(){this.id=parseInt(this.$route.params.id)},mounted:function(){var t=this;T.ref("authors").orderByChild("id").equalTo(this.id).on("value",function(a){a.forEach(function(a){t.author=a.val()})})}},Bt=At,$t=(o("f132"),Object(f["a"])(Bt,Et,Pt,!1,null,"7b0495f8",null));$t.options.__file="AboutAuthorPage.vue";var Gt=$t.exports;e["a"].use(C["a"]);var St=new C["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home-page",component:E},{path:"/books",name:"books-page",component:F},{path:"/book/:id",name:"about-book-page",component:kt},{path:"/genres",name:"genres-page",component:ot},{path:"/genres/:slug",name:"about-genre-page",component:Ot},{path:"/authors",name:"authors-page",component:ft},{path:"/authors/:id",name:"about-author-page",component:Gt}]});o("f9e3"),o("2dd8");e["a"].use(s["a"]),e["a"].use(r.a),e["a"].use(i["a"].Plugin),e["a"].config.productionTip=!1,new e["a"]({router:St,render:function(t){return t(k)}}).$mount("#app")},"588b":function(t,a,o){},"5cc9":function(t,a,o){},"64a9":function(t,a,o){},"6c25":function(t,a,o){"use strict";var e=o("b6da"),s=o.n(e);s.a},"7aaf":function(t,a,o){"use strict";var e=o("42df"),s=o.n(e);s.a},"7c47":function(t,a,o){"use strict";var e=o("3966"),s=o.n(e);s.a},"94a2":function(t,a,o){"use strict";var e=o("5233"),s=o.n(e);s.a},"9a3a":function(t,a,o){},a827:function(t,a,o){"use strict";var e=o("b546"),s=o.n(e);s.a},afe2:function(t,a,o){},b482:function(t,a,o){"use strict";var e=o("ba55"),s=o.n(e);s.a},b546:function(t,a,o){},b6da:function(t,a,o){},ba55:function(t,a,o){},bf5f:function(t,a,o){"use strict";var e=o("afe2"),s=o.n(e);s.a},f132:function(t,a,o){"use strict";var e=o("03c6"),s=o.n(e);s.a},f4a2:function(t,a,o){"use strict";var e=o("9a3a"),s=o.n(e);s.a}});
//# sourceMappingURL=app.8a62c2b4.js.map