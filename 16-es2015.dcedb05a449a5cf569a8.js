(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8k80":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var r=u("pMnS"),o=u("oBZk"),a=u("ZZ/e"),i=u("SVse"),c=u("mrSG"),b=u("X+KH");class s{constructor(l,n,u){this.alertCtrl=l,this.router=n,this.userData=u}ngAfterViewInit(){this.getUsername()}updatePicture(){console.log("Clicked to update picture")}changeUsername(){return c.b(this,void 0,void 0,function*(){const l=yield this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:l=>{this.userData.setUsername(l.username),this.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]});yield l.present()})}getUsername(){this.userData.getUsername().then(l=>{this.username=l})}changePassword(){console.log("Clicked to change password")}logout(){this.userData.logout(),this.router.navigateByUrl("/login")}support(){this.router.navigateByUrl("/support")}}var h=u("iInd"),p=t.pb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]],data:{}});function m(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,20,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,0,"img",[["alt","avatar"],["src","https://www.gravatar.com/avatar?d=mm&s=140"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(3,null,["",""])),(l()(),t.rb(4,0,null,null,16,"ion-list",[["inset",""]],null,null,null,o.xb,o.B)),t.qb(5,49152,null,0,a.Q,[t.h,t.k,t.x],{inset:[0,"inset"]},null),(l()(),t.rb(6,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updatePicture()&&t),t},o.ub,o.u)),t.qb(7,49152,null,0,a.J,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Update Picture"])),(l()(),t.rb(9,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeUsername()&&t),t},o.ub,o.u)),t.qb(10,49152,null,0,a.J,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Change Username"])),(l()(),t.rb(12,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changePassword()&&t),t},o.ub,o.u)),t.qb(13,49152,null,0,a.J,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Change Password"])),(l()(),t.rb(15,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.support()&&t),t},o.ub,o.u)),t.qb(16,49152,null,0,a.J,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Support"])),(l()(),t.rb(18,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t},o.ub,o.u)),t.qb(19,49152,null,0,a.J,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Logout"]))],function(l,n){l(n,5,0,"")},function(l,n){l(n,3,0,n.component.username)})}function g(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,10,"ion-header",[],null,null,null,o.mb,o.r)),t.qb(1,49152,null,0,a.D,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.Pb,o.U)),t.qb(3,49152,null,0,a.Eb,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.Z,o.e)),t.qb(5,49152,null,0,a.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.yb,o.E)),t.qb(7,49152,null,0,a.T,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"ion-title",[],null,null,null,o.Nb,o.S)),t.qb(9,49152,null,0,a.Cb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Account"])),(l()(),t.rb(11,0,null,null,3,"ion-content",[],null,null,null,o.fb,o.k)),t.qb(12,49152,null,0,a.w,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,m)),t.qb(14,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,14,0,n.component.username)},null)}function k(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"page-account",[],null,null,null,g,p)),t.qb(1,4243456,null,0,s,[a.b,h.m,b.a],null,null)],null,null)}var d=t.nb("page-account",s,k,{},{},[]);class v{}u.d(n,"AccountModuleNgFactory",function(){return f});var f=t.ob(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[r.a,d]],[3,t.j],t.v]),t.Bb(4608,i.l,i.k,[t.s,[2,i.s]]),t.Bb(4608,a.c,a.c,[t.x,t.g]),t.Bb(4608,a.Jb,a.Jb,[a.c,t.j,t.p]),t.Bb(4608,a.Nb,a.Nb,[a.c,t.j,t.p]),t.Bb(1073742336,i.b,i.b,[]),t.Bb(1073742336,a.Gb,a.Gb,[]),t.Bb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),t.Bb(1073742336,v,v,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,h.k,function(){return[[{path:"",component:s}]]},[])])})}}]);