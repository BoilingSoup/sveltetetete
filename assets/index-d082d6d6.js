var ht=Object.defineProperty;var gt=(t,e,n)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var q=(t,e,n)=>(gt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function h(){}const _t=t=>t;function Q(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function W(){return Object.create(null)}function S(t){t.forEach(Z)}function tt(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function bt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null){for(const r of e)r(void 0);return h}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function et(t,e,n){t.$$.on_destroy.push(yt(e,n))}const nt=typeof window<"u";let V=nt?()=>window.performance.now():()=>Date.now(),rt=nt?t=>requestAnimationFrame(t):h;const O=new Set;function st(t){O.forEach(e=>{e.c(t)||(O.delete(e),e.f())}),O.size!==0&&rt(st)}function ot(t){let e;return O.size===0&&rt(st),{promise:new Promise(n=>{O.add(e={c:t,f:n})}),abort(){O.delete(e)}}}function y(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function P(){return M(" ")}function D(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function it(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function N(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let G;function k(t){G=t}const v=[],X=[];let C=[];const Y=[],xt=Promise.resolve();let F=!1;function Et(){F||(F=!0,xt.then(ft))}function H(t){C.push(t)}const B=new Set;let E=0;function ft(){if(E!==0)return;const t=G;do{try{for(;E<v.length;){const e=v[E];E++,k(e),At(e.$$)}}catch(e){throw v.length=0,E=0,e}for(k(null),v.length=0,E=0;X.length;)X.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];B.has(n)||(B.add(n),n())}C.length=0}while(v.length);for(;Y.length;)Y.pop()();F=!1,B.clear(),k(t)}function At(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function vt(t){const e=[],n=[];C.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),C=e}const j=new Set;let Ot;function ct(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Ct(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),Ot.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Lt(t){t&&t.c()}function ut(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),H(()=>{const o=t.$$.on_mount.map(Z).filter(tt);t.$$.on_destroy?t.$$.on_destroy.push(...o):S(o),t.$$.on_mount=[]}),s.forEach(H)}function lt(t,e){const n=t.$$;n.fragment!==null&&(vt(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(v.push(t),Et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(t,e,n,r,s,o,f,u=[-1]){const c=G;k(t);const i=t.$$={fragment:null,ctx:[],props:o,update:h,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:W(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};f&&f(i.root);let a=!1;if(i.ctx=n?n(t,e.props||{},(l,m,...d)=>{const p=d.length?d[0]:m;return i.ctx&&s(i.ctx[l],i.ctx[l]=p)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](p),a&&Pt(t,l)),m}):[],i.update(),a=!0,S(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const l=$t(e.target);i.fragment&&i.fragment.l(l),l.forEach(_)}else i.fragment&&i.fragment.c();e.intro&&ct(t.$$.fragment),ut(t,e.target,e.anchor),ft()}k(c)}class dt{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){lt(this,1),this.$destroy=h}$on(e,n){if(!tt(n))return h;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kt);const St="./assets/svelte-a39f39b7.svg",jt="./vite.svg",A=[];function zt(t,e){return{subscribe:J(t,e).subscribe}}function J(t,e=h){let n;const r=new Set;function s(u){if(U(t,u)&&(t=u,n)){const c=!A.length;for(const i of r)i[1](),A.push(i,t);if(c){for(let i=0;i<A.length;i+=2)A[i][0](A[i+1]);A.length=0}}}function o(u){s(u(t))}function f(u,c=h){const i=[u,c];return r.add(i),r.size===1&&(n=e(s,o)||h),u(t),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:s,update:o,subscribe:f}}function I(t){return Object.prototype.toString.call(t)==="[object Date]"}function K(t,e,n,r){if(typeof n=="number"||I(n)){const s=r-n,o=(n-e)/(t.dt||1/60),f=t.opts.stiffness*s,u=t.opts.damping*o,c=(f-u)*t.inv_mass,i=(o+c)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(s)<t.opts.precision?r:(t.settled=!1,I(n)?new Date(n.getTime()+i):n+i)}else{if(Array.isArray(n))return n.map((s,o)=>K(t,e[o],n[o],r[o]));if(typeof n=="object"){const s={};for(const o in n)s[o]=K(t,e[o],n[o],r[o]);return s}else throw new Error(`Cannot spring ${typeof n} values`)}}function Mt(t,e={}){const n=J(t),{stiffness:r=.15,damping:s=.8,precision:o=.01}=e;let f,u,c,i=t,a=t,l=1,m=0,d=!1;function p(x,g={}){a=x;const pt=c={};return t==null||g.hard||w.stiffness>=1&&w.damping>=1?(d=!0,f=V(),i=x,n.set(t=a),Promise.resolve()):(g.soft&&(m=1/((g.soft===!0?.5:+g.soft)*60),l=0),u||(f=V(),d=!1,u=ot(L=>{if(d)return d=!1,u=null,!1;l=Math.min(l+m,1);const T={inv_mass:l,opts:w,settled:!0,dt:(L-f)*60/1e3},mt=K(T,i,t,a);return f=L,i=t,n.set(t=mt),T.settled&&(u=null),!T.settled})),new Promise(L=>{u.promise.then(()=>{pt===c&&L()})}))}const w={set:p,update:(x,g)=>p(x(a,t),g),subscribe:n.subscribe,stiffness:r,damping:s,precision:o};return w}function R(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((s,o)=>R(t[o],s));return s=>r.map(o=>o(s))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(I(t)&&I(e)){t=t.getTime(),e=e.getTime();const o=e-t;return f=>new Date(t+f*o)}const r=Object.keys(e),s={};return r.forEach(o=>{s[o]=R(t[o],e[o])}),o=>{const f={};return r.forEach(u=>{f[u]=s[u](o)}),f}}if(n==="number"){const r=e-t;return s=>t+s*r}throw new Error(`Cannot interpolate ${n} values`)}function Nt(t,e={}){const n=J(t);let r,s=t;function o(f,u){if(t==null)return n.set(t=f),Promise.resolve();s=f;let c=r,i=!1,{delay:a=0,duration:l=400,easing:m=_t,interpolate:d=R}=Q(Q({},e),u);if(l===0)return c&&(c.abort(),c=null),n.set(t=s),Promise.resolve();const p=V()+a;let w;return r=ot(x=>{if(x<p)return!0;i||(w=d(t,f),typeof l=="function"&&(l=l(t,f)),i=!0),c&&(c.abort(),c=null);const g=x-p;return g>l?(n.set(t=f),!1):(n.set(t=w(m(g/l))),!0)}),r.promise}return{set:o,update:(f,u)=>o(f(s,t),u),subscribe:n.subscribe}}function It(){const{subscribe:t,set:e,update:n}=Nt(0);return{subscribe:t,increment(){n(r=>r+=10)},decrement(){n(r=>r-=5)},reset(){e(0)}}}const z=It(),Tt=zt(20,function(e){let s=20;const o=Mt(20),f=o.subscribe(c=>{e(c)}),u=setInterval(()=>{s===20?(o.set(60),s=60):(o.set(20),s=20)},500);return function(){f(),clearInterval(u)}});function qt(t){let e,n,r=Math.floor(t[0])+"",s,o,f,u,c,i,a,l,m;return{c(){e=$("div"),n=M("count is "),s=M(r),o=P(),f=$("button"),f.textContent="inc",u=P(),c=$("button"),c.textContent="dec",i=P(),a=$("button"),a.textContent="reset",N(e,"font-size",t[0]+"px"),it(e,"class","svelte-n9t0km")},m(d,p){b(d,e,p),y(e,n),y(e,s),b(d,o,p),b(d,f,p),b(d,u,p),b(d,c,p),b(d,i,p),b(d,a,p),l||(m=[D(f,"click",z.increment),D(c,"click",z.decrement),D(a,"click",z.reset)],l=!0)},p(d,[p]){p&1&&r!==(r=Math.floor(d[0])+"")&&wt(s,r),p&1&&N(e,"font-size",d[0]+"px")},i:h,o:h,d(d){d&&(_(e),_(o),_(f),_(u),_(c),_(i),_(a)),l=!1,S(m)}}}function Dt(t,e,n){let r;return et(t,z,s=>n(0,r=s)),[r]}class Bt extends dt{constructor(e){super(),at(this,e,Dt,qt,U,{})}}function Vt(t){let e,n,r,s,o,f,u,c,i;return c=new Bt({}),{c(){e=$("main"),n=$("div"),n.innerHTML=`<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${jt}" class="logo svelte-bl7fmt" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${St}" class="logo svelte svelte-bl7fmt" alt="Svelte Logo"/></a>`,r=P(),s=$("h1"),o=M("Vite + Svelte + tweens"),f=P(),u=$("div"),Lt(c.$$.fragment),N(s,"font-size",t[0]+"px"),it(u,"class","card")},m(a,l){b(a,e,l),y(e,n),y(e,r),y(e,s),y(s,o),y(e,f),y(e,u),ut(c,u,null),i=!0},p(a,[l]){(!i||l&1)&&N(s,"font-size",a[0]+"px")},i(a){i||(ct(c.$$.fragment,a),i=!0)},o(a){Ct(c.$$.fragment,a),i=!1},d(a){a&&_(e),lt(c)}}}function Ft(t,e,n){let r;return et(t,Tt,s=>n(0,r=s)),[r]}class Ht extends dt{constructor(e){super(),at(this,e,Ft,Vt,U,{})}}new Ht({target:document.getElementById("app")});
