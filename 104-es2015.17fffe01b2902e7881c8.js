(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{pdqh:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",function(){return d}),o.d(t,"shadow",function(){return s}),o("HWnG");var a=o("Elhb");const r=(e,t="top")=>`calc(${e}px + var(--ion-safe-area-${t}))`,n=e=>document.querySelector(`${e}.ion-cloned-element`),s=e=>e.shadowRoot||e,l=e=>e.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]"),c=(e,t)=>{const o=e.querySelectorAll("ion-buttons");for(const a of o){const e=a.closest("ion-header"),o=e&&!e.classList.contains("header-collapse-condense-inactive"),r=a.querySelector("ion-back-button"),n=a.classList.contains("buttons-collapse");if(null!==r&&(n&&o&&t||!n))return r}return null},i=(e,t,o,s)=>{const l=t?"7px":"-7px",c=t?"-4px":"4px",i=t?"-4px":"4px",f=t?"right":"left",d=t?"left":"right",m=[{offset:0,opacity:0,transform:`translate(${l}, ${r(8)}) scale(2.1)`},{offset:1,opacity:1,transform:`translate(${c}, ${r(-40)}) scale(1)`}],y=[{offset:0,opacity:1,transform:`translate(${c}, ${r(-40)}) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate(${l}, ${r(8)}) scale(2.1)`}],b=o?y:m,p=[{offset:0,opacity:0,transform:`translate3d(${i}, ${r(-35)}, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${i}, ${r(-40)}, 0) scale(1)`}],u=[{offset:0,opacity:1,transform:`translate(${i}, ${r(-40)}) scale(1)`},{offset:.2,opacity:0,transform:`translate(${i}, ${r(-35)}) scale(0.6)`},{offset:1,opacity:0,transform:`translate(${i}, ${r(-35)}) scale(0.6)`}],S=o?u:p,$=Object(a.a)(),T=Object(a.a)(),E=n("ion-back-button"),h=E.querySelector(".button-text"),q=E.querySelector("ion-icon");E.text=s.text,E.mode=s.mode,E.icon=s.icon,E.color=s.color,E.disabled=s.disabled,E.style.setProperty("display","block"),E.style.setProperty("position","fixed"),T.addElement(q),$.addElement(h),$.beforeStyles({"transform-origin":`${f} center`}).beforeAddWrite(()=>{s.style.setProperty("display","none")}).afterAddWrite(()=>{s.style.setProperty("display",""),E.style.setProperty("display","none")}).keyframes(b),T.beforeStyles({"transform-origin":`${d} center`}).keyframes(S),e.addAnimation([$,T])},f=(e,t,o,s)=>{const l=t?"-18px":"18px",c=t?"right":"left",i=[{offset:0,opacity:0,transform:`translate(${l}, ${r(0)}) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate(0, ${r(49)}) scale(1)`}],f=[{offset:0,opacity:.99,transform:`translate(0, ${r(49)}) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate(${l}, ${r(0)}) scale(0.5)`}],d=o?i:f,m=n("ion-title"),y=Object(a.a)();m.innerText=s.innerText,m.size=s.size,m.color=s.color,y.addElement(m),y.beforeStyles({"transform-origin":`${c} center`,height:"46px",display:"",position:"relative"}).beforeAddWrite(()=>{s.style.setProperty("display","none")}).afterAddWrite(()=>{s.style.setProperty("display",""),m.style.setProperty("display","none")}).keyframes(d),e.addAnimation(y)},d=(e,t)=>{try{const r="cubic-bezier(0.32,0.72,0,1)",n="opacity",d="transform",m="0%",y=.8,b="rtl"===e.ownerDocument.dir,p=b?"-99.5%":"99.5%",u=b?"33%":"-33%",S=t.enteringEl,$=t.leavingEl,T="back"===t.direction,E=S.querySelector(":scope > ion-content"),h=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),q=S.querySelectorAll(":scope > ion-header > ion-toolbar"),X=Object(a.a)(),A=Object(a.a)();if(X.addElement(S).duration(t.duration||540).easing(t.easing||r).fill("both").beforeRemoveClass("ion-page-invisible"),$&&e){const t=Object(a.a)();t.addElement(e),X.addAnimation(t)}if(E||0!==q.length||0!==h.length?(A.addElement(E),A.addElement(h)):A.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(A),T?A.beforeClearStyles([n]).fromTo("transform",`translateX(${u})`,`translateX(${m})`).fromTo(n,y,1):A.beforeClearStyles([n]).fromTo("transform",`translateX(${p})`,`translateX(${m})`),E){const e=s(E).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),r=Object(a.a)(),s=Object(a.a)(),l=Object(a.a)();r.addElement(e).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),s.addElement(t).beforeClearStyles([n]).fromTo(n,0,.1),l.addElement(o).beforeClearStyles([n]).fromTo(n,.03,.7),r.addAnimation([s,l]),A.addAnimation([r])}}const g=S.querySelector("ion-header.header-collapse-condense"),{forward:j,backward:O}=((e,t,o,a,r)=>{const n=c(a,o),s=l(r),d=l(a),m=c(r,o),y=null!==n&&null!==s&&!o,b=null!==d&&null!==m&&o;return y?(f(e,t,o,s),i(e,t,o,n)):b&&(f(e,t,o,d),i(e,t,o,m)),{forward:y,backward:b}})(X,b,T,S,$);if(q.forEach(e=>{const t=Object(a.a)();t.addElement(e),X.addAnimation(t);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const r=Object(a.a)(),l=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),c=e.closest("ion-header"),i=c&&c.classList.contains("header-collapse-condense-inactive");let f;f=l.filter(T?e=>{const t=e.classList.contains("buttons-collapse");return t&&!i||!t}:e=>!e.classList.contains("buttons-collapse")),r.addElement(f);const d=Object(a.a)();d.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const y=Object(a.a)();y.addElement(s(e).querySelector(".toolbar-background"));const S=Object(a.a)(),$=e.querySelector("ion-back-button");if($&&S.addElement($),t.addAnimation([o,r,d,y,S]),r.fromTo(n,.01,1),d.fromTo(n,.01,1),T)i||o.fromTo("transform",`translateX(${u})`,`translateX(${m})`).fromTo(n,.01,1),d.fromTo("transform",`translateX(${u})`,`translateX(${m})`),S.fromTo(n,.01,1);else if(g||o.fromTo("transform",`translateX(${p})`,`translateX(${m})`).fromTo(n,.01,1),d.fromTo("transform",`translateX(${p})`,`translateX(${m})`),y.beforeClearStyles([n]).fromTo(n,.01,1),j||S.fromTo(n,.01,1),$&&!j){const e=Object(a.a)();e.addElement(s($).querySelector(".button-text")).fromTo("transform",b?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}),$){const e=Object(a.a)(),t=$.querySelector(":scope > ion-content");if(e.addElement(t),e.addElement($.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),X.addAnimation(e),T?e.beforeClearStyles([n]).fromTo("transform",`translateX(${m})`,b?"translateX(-100%)":"translateX(100%)"):e.fromTo("transform",`translateX(${m})`,`translateX(${u})`).fromTo(n,1,y),t){const o=s(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),s=Object(a.a)(),l=Object(a.a)(),c=Object(a.a)();s.addElement(o).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),l.addElement(t).beforeClearStyles([n]).fromTo(n,.1,0),c.addElement(r).beforeClearStyles([n]).fromTo(n,.7,.03),s.addAnimation([l,c]),e.addAnimation([s])}}$.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(e=>{const t=Object(a.a)();t.addElement(e);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const r=Object(a.a)(),l=e.querySelectorAll("ion-buttons,[menuToggle]"),c=e.closest("ion-header"),i=c&&c.classList.contains("header-collapse-condense-inactive"),f=Array.from(l).filter(e=>{const t=e.classList.contains("buttons-collapse");return t&&!i||!t});r.addElement(f);const y=Object(a.a)(),p=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");p.length>0&&y.addElement(p);const S=Object(a.a)();S.addElement(s(e).querySelector(".toolbar-background"));const $=Object(a.a)(),E=e.querySelector("ion-back-button");if(E&&$.addElement(E),t.addAnimation([o,r,y,$,S]),X.addAnimation(t),$.fromTo(n,.99,0),r.fromTo(n,.99,0),y.fromTo(n,.99,0),T){if(i||o.fromTo("transform",`translateX(${m})`,b?"translateX(-100%)":"translateX(100%)").fromTo(n,.99,0),y.fromTo("transform",`translateX(${m})`,b?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([n]).fromTo(n,1,.01),E&&!O){const e=Object(a.a)();e.addElement(s(E).querySelector(".button-text")).fromTo("transform",`translateX(${m})`,`translateX(${(b?-124:124)+"px"})`),t.addAnimation(e)}}else i||o.fromTo("transform",`translateX(${m})`,`translateX(${u})`).fromTo(n,.99,0).afterClearStyles([d,n]),y.fromTo("transform",`translateX(${m})`,`translateX(${u})`).afterClearStyles([d,n]),$.afterClearStyles([n]),o.afterClearStyles([n]),r.afterClearStyles([n])})}return X}catch(o){throw o}}}}]);