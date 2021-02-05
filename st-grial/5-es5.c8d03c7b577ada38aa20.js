!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"99Un":function(t,r,c){"use strict";c.r(r),c.d(r,"HomeModule",(function(){return C}));var a,o,i=c("fXoL"),p=c("ofXK"),s=c("tyNb"),u=c("LRne"),f=c("lJxs"),d=c("JIr8"),b=c("tk/3"),l=((o=function(){function t(e){n(this,t),this.http=e,this.url="/assets/papers/papers.json"}return e(t,[{key:"getAll",value:function(){return this.http.get(this.url).pipe(Object(f.a)((function(n){return n.papers})),Object(d.a)((function(){return Object(u.a)([])})))}}]),t}()).\u0275fac=function(n){return new(n||o)(i.Zb(b.a))},o.\u0275prov=i.Ob({token:o,factory:o.\u0275fac}),o),g=((a=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){this.data.desc=this.truncStr(this.data.desc,180)}},{key:"truncStr",value:function(n,t){return n.length<=t?n:n.slice(0,t)+"..."}}]),t}()).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=i.Mb({type:a,selectors:[["app-card-paper"]],inputs:{data:"data"},decls:10,vars:3,consts:[[1,"card-paper"],[1,"paper-title"],[1,"paper-desc"],[1,"paper-link"],["target","_blank",3,"href"]],template:function(n,t){1&n&&(i.Xb(0,"div",0),i.Xb(1,"div",1),i.Xb(2,"h3"),i.jc(3),i.Wb(),i.Wb(),i.Xb(4,"div",2),i.Xb(5,"p"),i.jc(6),i.Wb(),i.Wb(),i.Xb(7,"div",3),i.Xb(8,"a",4),i.jc(9,"Ver"),i.Wb(),i.Wb(),i.Wb()),2&n&&(i.Jb(3),i.kc(t.data.title),i.Jb(3),i.kc(t.data.desc),i.Jb(2),i.ec("href",t.data.url,i.gc))},styles:["[_nghost-%COMP%]{height:100%}.card-paper[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column}.card-paper[_ngcontent-%COMP%]{flex-grow:1;background-color:#fff;border:1px solid #bdbdbd;padding:.5rem 1rem;margin:.25rem 0;width:100%}.card-paper[_ngcontent-%COMP%]   .paper-title[_ngcontent-%COMP%]{margin-bottom:.5rem}.card-paper[_ngcontent-%COMP%]   .paper-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.card-paper[_ngcontent-%COMP%]   .paper-desc[_ngcontent-%COMP%]{flex-grow:1;overflow:hidden;margin:auto 0 1rem;max-height:9rem}.card-paper[_ngcontent-%COMP%]   .paper-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.card-paper[_ngcontent-%COMP%]   .paper-link[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%}.card-paper[_ngcontent-%COMP%]   .paper-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase}"]}),a);function h(n,t){if(1&n&&(i.Vb(0),i.Xb(1,"div",3),i.Tb(2,"app-card-paper",4),i.Wb(),i.Ub()),2&n){var e=t.$implicit;i.Jb(2),i.ec("data",e)}}var m,O,v,y,P=[{path:"",component:(m=function(){function t(e){n(this,t),this.paperService=e}return e(t,[{key:"ngAfterViewInit",value:function(){var n=this;this.paperService.getAll().subscribe((function(t){n.papers=t}))}}]),t}(),m.\u0275fac=function(n){return new(n||m)(i.Sb(l))},m.\u0275cmp=i.Mb({type:m,selectors:[["app-home"]],decls:3,vars:1,consts:[[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-lg-4"],[3,"data"]],template:function(n,t){1&n&&(i.Xb(0,"div",0),i.Xb(1,"div",1),i.ic(2,h,3,1,"ng-container",2),i.Wb(),i.Wb()),2&n&&(i.Jb(2),i.ec("ngForOf",t.papers))},directives:[p.h,g],styles:[""]}),m)}],w=((y=function t(){n(this,t)}).\u0275mod=i.Qb({type:y}),y.\u0275inj=i.Pb({factory:function(n){return new(n||y)},imports:[[s.a.forChild(P)],s.a]}),y),M=((v=function t(){n(this,t)}).\u0275mod=i.Qb({type:v}),v.\u0275inj=i.Pb({factory:function(n){return new(n||v)},imports:[[p.b]]}),v),C=((O=function t(){n(this,t)}).\u0275mod=i.Qb({type:O}),O.\u0275inj=i.Pb({factory:function(n){return new(n||O)},providers:[l],imports:[[p.b,w,M]]}),O)}}])}();