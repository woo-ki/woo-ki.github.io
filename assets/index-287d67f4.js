(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Mr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function xr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Z(r)?aa(r):xr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Z(t))return t;if(G(t))return t}}const sa=/;(?![^(]*\))/g,ia=/:([^]+)/,oa=/\/\*.*?\*\//gs;function aa(t){const e={};return t.replace(oa,"").split(sa).forEach(n=>{if(n){const r=n.split(ia);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lr(t){let e="";if(Z(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const r=Lr(t[n]);r&&(e+=r+" ")}else if(G(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ca="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",la=Mr(ca);function mi(t){return!!t||t===""}const _s=t=>Z(t)?t:t==null?"":k(t)||G(t)&&(t.toString===yi||!N(t.toString))?JSON.stringify(t,_i,2):String(t),_i=(t,e)=>e&&e.__v_isRef?_i(t,e.value):Et(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:bi(e)?{[`Set(${e.size})`]:[...e.values()]}:G(e)&&!k(e)&&!Ii(e)?String(e):e,K={},It=[],Ie=()=>{},ua=()=>!1,fa=/^on[^a-z]/,Dn=t=>fa.test(t),Ur=t=>t.startsWith("onUpdate:"),ne=Object.assign,Fr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},da=Object.prototype.hasOwnProperty,L=(t,e)=>da.call(t,e),k=Array.isArray,Et=t=>Nn(t)==="[object Map]",bi=t=>Nn(t)==="[object Set]",N=t=>typeof t=="function",Z=t=>typeof t=="string",Br=t=>typeof t=="symbol",G=t=>t!==null&&typeof t=="object",vi=t=>G(t)&&N(t.then)&&N(t.catch),yi=Object.prototype.toString,Nn=t=>yi.call(t),ha=t=>Nn(t).slice(8,-1),Ii=t=>Nn(t)==="[object Object]",Hr=t=>Z(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pn=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pa=/-(\w)/g,Ot=Mn(t=>t.replace(pa,(e,n)=>n?n.toUpperCase():"")),ga=/\B([A-Z])/g,Nt=Mn(t=>t.replace(ga,"-$1").toLowerCase()),Ei=Mn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qn=Mn(t=>t?`on${Ei(t)}`:""),Wt=(t,e)=>!Object.is(t,e),Zn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},En=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bs;const _a=()=>bs||(bs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _e;class ba{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_e,!e&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_e;try{return _e=this,e()}finally{_e=n}}}on(){_e=this}off(){_e=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function va(t,e=_e){e&&e.active&&e.effects.push(t)}function ya(){return _e}const $r=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wi=t=>(t.w&Ze)>0,Ti=t=>(t.n&Ze)>0,Ia=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ze},Ea=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];wi(s)&&!Ti(s)?s.delete(t):e[n++]=s,s.w&=~Ze,s.n&=~Ze}e.length=n}},pr=new WeakMap;let Bt=0,Ze=1;const gr=30;let be;const dt=Symbol(""),mr=Symbol("");class jr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,va(this,r)}run(){if(!this.active)return this.fn();let e=be,n=Je;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=be,be=this,Je=!0,Ze=1<<++Bt,Bt<=gr?Ia(this):vs(this),this.fn()}finally{Bt<=gr&&Ea(this),Ze=1<<--Bt,be=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){be===this?this.deferStop=!0:this.active&&(vs(this),this.onStop&&this.onStop(),this.active=!1)}}function vs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Je=!0;const Ci=[];function Mt(){Ci.push(Je),Je=!1}function xt(){const t=Ci.pop();Je=t===void 0?!0:t}function ce(t,e,n){if(Je&&be){let r=pr.get(t);r||pr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=$r()),Si(s)}}function Si(t,e){let n=!1;Bt<=gr?Ti(t)||(t.n|=Ze,n=!wi(t)):n=!t.has(be),n&&(t.add(be),be.deps.push(t))}function Be(t,e,n,r,s,i){const o=pr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&k(t)){const c=Number(r);o.forEach((f,h)=>{(h==="length"||h>=c)&&a.push(f)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":k(t)?Hr(n)&&a.push(o.get("length")):(a.push(o.get(dt)),Et(t)&&a.push(o.get(mr)));break;case"delete":k(t)||(a.push(o.get(dt)),Et(t)&&a.push(o.get(mr)));break;case"set":Et(t)&&a.push(o.get(dt));break}if(a.length===1)a[0]&&_r(a[0]);else{const c=[];for(const f of a)f&&c.push(...f);_r($r(c))}}function _r(t,e){const n=k(t)?t:[...t];for(const r of n)r.computed&&ys(r);for(const r of n)r.computed||ys(r)}function ys(t,e){(t!==be||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const wa=Mr("__proto__,__v_isRef,__isVue"),Ai=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),Ta=Wr(),Ca=Wr(!1,!0),Sa=Wr(!0),Is=Aa();function Aa(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ce(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(U)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mt();const r=U(this)[e].apply(this,n);return xt(),r}}),t}function Oa(t){const e=U(this);return ce(e,"has",t),e.hasOwnProperty(t)}function Wr(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Va:Di:e?ki:Pi).get(r))return r;const o=k(r);if(!t){if(o&&L(Is,s))return Reflect.get(Is,s,i);if(s==="hasOwnProperty")return Oa}const a=Reflect.get(r,s,i);return(Br(s)?Ai.has(s):wa(s))||(t||ce(r,"get",s),e)?a:te(a)?o&&Hr(s)?a:a.value:G(a)?t?Ni(a):Kr(a):a}}const Ra=Oi(),Pa=Oi(!0);function Oi(t=!1){return function(n,r,s,i){let o=n[r];if(Rt(o)&&te(o)&&!te(s))return!1;if(!t&&(!wn(s)&&!Rt(s)&&(o=U(o),s=U(s)),!k(n)&&te(o)&&!te(s)))return o.value=s,!0;const a=k(n)&&Hr(r)?Number(r)<n.length:L(n,r),c=Reflect.set(n,r,s,i);return n===U(i)&&(a?Wt(s,o)&&Be(n,"set",r,s):Be(n,"add",r,s)),c}}function ka(t,e){const n=L(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Be(t,"delete",e,void 0),r}function Da(t,e){const n=Reflect.has(t,e);return(!Br(e)||!Ai.has(e))&&ce(t,"has",e),n}function Na(t){return ce(t,"iterate",k(t)?"length":dt),Reflect.ownKeys(t)}const Ri={get:Ta,set:Ra,deleteProperty:ka,has:Da,ownKeys:Na},Ma={get:Sa,set(t,e){return!0},deleteProperty(t,e){return!0}},xa=ne({},Ri,{get:Ca,set:Pa}),Vr=t=>t,xn=t=>Reflect.getPrototypeOf(t);function an(t,e,n=!1,r=!1){t=t.__v_raw;const s=U(t),i=U(e);n||(e!==i&&ce(s,"get",e),ce(s,"get",i));const{has:o}=xn(s),a=r?Vr:n?Jr:Vt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function cn(t,e=!1){const n=this.__v_raw,r=U(n),s=U(t);return e||(t!==s&&ce(r,"has",t),ce(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ln(t,e=!1){return t=t.__v_raw,!e&&ce(U(t),"iterate",dt),Reflect.get(t,"size",t)}function Es(t){t=U(t);const e=U(this);return xn(e).has.call(e,t)||(e.add(t),Be(e,"add",t,t)),this}function ws(t,e){e=U(e);const n=U(this),{has:r,get:s}=xn(n);let i=r.call(n,t);i||(t=U(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Wt(e,o)&&Be(n,"set",t,e):Be(n,"add",t,e),this}function Ts(t){const e=U(this),{has:n,get:r}=xn(e);let s=n.call(e,t);s||(t=U(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Be(e,"delete",t,void 0),i}function Cs(){const t=U(this),e=t.size!==0,n=t.clear();return e&&Be(t,"clear",void 0,void 0),n}function un(t,e){return function(r,s){const i=this,o=i.__v_raw,a=U(o),c=e?Vr:t?Jr:Vt;return!t&&ce(a,"iterate",dt),o.forEach((f,h)=>r.call(s,c(f),c(h),i))}}function fn(t,e,n){return function(...r){const s=this.__v_raw,i=U(s),o=Et(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,f=s[t](...r),h=n?Vr:e?Jr:Vt;return!e&&ce(i,"iterate",c?mr:dt),{next(){const{value:_,done:v}=f.next();return v?{value:_,done:v}:{value:a?[h(_[0]),h(_[1])]:h(_),done:v}},[Symbol.iterator](){return this}}}}function je(t){return function(...e){return t==="delete"?!1:this}}function La(){const t={get(i){return an(this,i)},get size(){return ln(this)},has:cn,add:Es,set:ws,delete:Ts,clear:Cs,forEach:un(!1,!1)},e={get(i){return an(this,i,!1,!0)},get size(){return ln(this)},has:cn,add:Es,set:ws,delete:Ts,clear:Cs,forEach:un(!1,!0)},n={get(i){return an(this,i,!0)},get size(){return ln(this,!0)},has(i){return cn.call(this,i,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:un(!0,!1)},r={get(i){return an(this,i,!0,!0)},get size(){return ln(this,!0)},has(i){return cn.call(this,i,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fn(i,!1,!1),n[i]=fn(i,!0,!1),e[i]=fn(i,!1,!0),r[i]=fn(i,!0,!0)}),[t,n,e,r]}const[Ua,Fa,Ba,Ha]=La();function zr(t,e){const n=e?t?Ha:Ba:t?Fa:Ua;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(L(n,s)&&s in r?n:r,s,i)}const $a={get:zr(!1,!1)},ja={get:zr(!1,!0)},Wa={get:zr(!0,!1)},Pi=new WeakMap,ki=new WeakMap,Di=new WeakMap,Va=new WeakMap;function za(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ka(t){return t.__v_skip||!Object.isExtensible(t)?0:za(ha(t))}function Kr(t){return Rt(t)?t:qr(t,!1,Ri,$a,Pi)}function qa(t){return qr(t,!1,xa,ja,ki)}function Ni(t){return qr(t,!0,Ma,Wa,Di)}function qr(t,e,n,r,s){if(!G(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ka(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function wt(t){return Rt(t)?wt(t.__v_raw):!!(t&&t.__v_isReactive)}function Rt(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function Mi(t){return wt(t)||Rt(t)}function U(t){const e=t&&t.__v_raw;return e?U(e):t}function xi(t){return En(t,"__v_skip",!0),t}const Vt=t=>G(t)?Kr(t):t,Jr=t=>G(t)?Ni(t):t;function Li(t){Je&&be&&(t=U(t),Si(t.dep||(t.dep=$r())))}function Ui(t,e){t=U(t);const n=t.dep;n&&_r(n)}function te(t){return!!(t&&t.__v_isRef===!0)}function Ja(t){return Ga(t,!1)}function Ga(t,e){return te(t)?t:new Ya(t,e)}class Ya{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:U(e),this._value=n?e:Vt(e)}get value(){return Li(this),this._value}set value(e){const n=this.__v_isShallow||wn(e)||Rt(e);e=n?e:U(e),Wt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vt(e),Ui(this))}}function Xa(t){return te(t)?t.value:t}const Qa={get:(t,e,n)=>Xa(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return te(s)&&!te(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fi(t){return wt(t)?t:new Proxy(t,Qa)}var Bi;class Za{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Bi]=!1,this._dirty=!0,this.effect=new jr(e,()=>{this._dirty||(this._dirty=!0,Ui(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=U(this);return Li(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Bi="__v_isReadonly";function ec(t,e,n=!1){let r,s;const i=N(t);return i?(r=t,s=Ie):(r=t.get,s=t.set),new Za(r,s,i||!s,n)}function Ge(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ln(i,e,n)}return s}function pe(t,e,n,r){if(N(t)){const i=Ge(t,e,n,r);return i&&vi(i)&&i.catch(o=>{Ln(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(pe(t[i],e,n,r));return s}function Ln(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const f=i.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ge(c,null,10,[t,o,a]);return}}tc(t,n,s,r)}function tc(t,e,n,r=!0){console.error(t)}let zt=!1,br=!1;const ee=[];let Oe=0;const Tt=[];let Me=null,ct=0;const Hi=Promise.resolve();let Gr=null;function nc(t){const e=Gr||Hi;return t?e.then(this?t.bind(this):t):e}function rc(t){let e=Oe+1,n=ee.length;for(;e<n;){const r=e+n>>>1;Kt(ee[r])<t?e=r+1:n=r}return e}function Yr(t){(!ee.length||!ee.includes(t,zt&&t.allowRecurse?Oe+1:Oe))&&(t.id==null?ee.push(t):ee.splice(rc(t.id),0,t),$i())}function $i(){!zt&&!br&&(br=!0,Gr=Hi.then(Wi))}function sc(t){const e=ee.indexOf(t);e>Oe&&ee.splice(e,1)}function ic(t){k(t)?Tt.push(...t):(!Me||!Me.includes(t,t.allowRecurse?ct+1:ct))&&Tt.push(t),$i()}function Ss(t,e=zt?Oe+1:0){for(;e<ee.length;e++){const n=ee[e];n&&n.pre&&(ee.splice(e,1),e--,n())}}function ji(t){if(Tt.length){const e=[...new Set(Tt)];if(Tt.length=0,Me){Me.push(...e);return}for(Me=e,Me.sort((n,r)=>Kt(n)-Kt(r)),ct=0;ct<Me.length;ct++)Me[ct]();Me=null,ct=0}}const Kt=t=>t.id==null?1/0:t.id,oc=(t,e)=>{const n=Kt(t)-Kt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wi(t){br=!1,zt=!0,ee.sort(oc);const e=Ie;try{for(Oe=0;Oe<ee.length;Oe++){const n=ee[Oe];n&&n.active!==!1&&Ge(n,null,14)}}finally{Oe=0,ee.length=0,ji(),zt=!1,Gr=null,(ee.length||Tt.length)&&Wi()}}function ac(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||K;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:_,trim:v}=r[h]||K;v&&(s=n.map(T=>Z(T)?T.trim():T)),_&&(s=n.map(ma))}let a,c=r[a=Qn(e)]||r[a=Qn(Ot(e))];!c&&i&&(c=r[a=Qn(Nt(e))]),c&&pe(c,t,6,s);const f=r[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pe(f,t,6,s)}}function Vi(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!N(t)){const c=f=>{const h=Vi(f,e,!0);h&&(a=!0,ne(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(G(t)&&r.set(t,null),null):(k(i)?i.forEach(c=>o[c]=null):ne(o,i),G(t)&&r.set(t,o),o)}function Un(t,e){return!t||!Dn(e)?!1:(e=e.slice(2).replace(/Once$/,""),L(t,e[0].toLowerCase()+e.slice(1))||L(t,Nt(e))||L(t,e))}let ve=null,Fn=null;function Tn(t){const e=ve;return ve=t,Fn=t&&t.type.__scopeId||null,e}function cc(t){Fn=t}function lc(){Fn=null}function uc(t,e=ve,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xs(-1);const i=Tn(e);let o;try{o=t(...s)}finally{Tn(i),r._d&&xs(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function er(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:f,render:h,renderCache:_,data:v,setupState:T,ctx:M,inheritAttrs:A}=t;let V,F;const se=Tn(t);try{if(n.shapeFlag&4){const W=s||r;V=Ae(h.call(W,W,_,i,T,v,M)),F=c}else{const W=e;V=Ae(W.length>1?W(i,{attrs:c,slots:a,emit:f}):W(i,null)),F=e.props?c:fc(c)}}catch(W){$t.length=0,Ln(W,t,1),V=Ye(Fe)}let P=V;if(F&&A!==!1){const W=Object.keys(F),{shapeFlag:Q}=P;W.length&&Q&7&&(o&&W.some(Ur)&&(F=dc(F,o)),P=et(P,F))}return n.dirs&&(P=et(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),V=P,Tn(se),V}const fc=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dn(n))&&((e||(e={}))[n]=t[n]);return e},dc=(t,e)=>{const n={};for(const r in t)(!Ur(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function hc(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?As(r,o,f):!!o;if(c&8){const h=e.dynamicProps;for(let _=0;_<h.length;_++){const v=h[_];if(o[v]!==r[v]&&!Un(f,v))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?As(r,o,f):!0:!!o;return!1}function As(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Un(n,i))return!0}return!1}function pc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const gc=t=>t.__isSuspense;function mc(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):ic(t)}function _c(t,e){if(X){let n=X.provides;const r=X.parent&&X.parent.provides;r===n&&(n=X.provides=Object.create(r)),n[t]=e}}function gn(t,e,n=!1){const r=X||ve;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&N(e)?e.call(r.proxy):e}}const dn={};function tr(t,e,n){return zi(t,e,n)}function zi(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=K){const a=ya()===(X==null?void 0:X.scope)?X:null;let c,f=!1,h=!1;if(te(t)?(c=()=>t.value,f=wn(t)):wt(t)?(c=()=>t,r=!0):k(t)?(h=!0,f=t.some(P=>wt(P)||wn(P)),c=()=>t.map(P=>{if(te(P))return P.value;if(wt(P))return yt(P);if(N(P))return Ge(P,a,2)})):N(t)?e?c=()=>Ge(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return _&&_(),pe(t,a,3,[v])}:c=Ie,e&&r){const P=c;c=()=>yt(P())}let _,v=P=>{_=F.onStop=()=>{Ge(P,a,4)}},T;if(Jt)if(v=Ie,e?n&&pe(e,a,3,[c(),h?[]:void 0,v]):c(),s==="sync"){const P=hl();T=P.__watcherHandles||(P.__watcherHandles=[])}else return Ie;let M=h?new Array(t.length).fill(dn):dn;const A=()=>{if(F.active)if(e){const P=F.run();(r||f||(h?P.some((W,Q)=>Wt(W,M[Q])):Wt(P,M)))&&(_&&_(),pe(e,a,3,[P,M===dn?void 0:h&&M[0]===dn?[]:M,v]),M=P)}else F.run()};A.allowRecurse=!!e;let V;s==="sync"?V=A:s==="post"?V=()=>ae(A,a&&a.suspense):(A.pre=!0,a&&(A.id=a.uid),V=()=>Yr(A));const F=new jr(c,V);e?n?A():M=F.run():s==="post"?ae(F.run.bind(F),a&&a.suspense):F.run();const se=()=>{F.stop(),a&&a.scope&&Fr(a.scope.effects,F)};return T&&T.push(se),se}function bc(t,e,n){const r=this.proxy,s=Z(t)?t.includes(".")?Ki(r,t):()=>r[t]:t.bind(r,r);let i;N(e)?i=e:(i=e.handler,n=e);const o=X;Pt(this);const a=zi(s,i.bind(r),n);return o?Pt(o):ht(),a}function Ki(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yt(t,e){if(!G(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),te(t))yt(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)yt(t[n],e);else if(bi(t)||Et(t))t.forEach(n=>{yt(n,e)});else if(Ii(t))for(const n in t)yt(t[n],e);return t}function vc(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yi(()=>{t.isMounted=!0}),Xi(()=>{t.isUnmounting=!0}),t}const de=[Function,Array],yc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},setup(t,{slots:e}){const n=il(),r=vc();let s;return()=>{const i=e.default&&Ji(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const A of i)if(A.type!==Fe){o=A;break}}const a=U(t),{mode:c}=a;if(r.isLeaving)return nr(o);const f=Os(o);if(!f)return nr(o);const h=vr(f,a,r,n);yr(f,h);const _=n.subTree,v=_&&Os(_);let T=!1;const{getTransitionKey:M}=f.type;if(M){const A=M();s===void 0?s=A:A!==s&&(s=A,T=!0)}if(v&&v.type!==Fe&&(!lt(f,v)||T)){const A=vr(v,a,r,n);if(yr(v,A),c==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},nr(o);c==="in-out"&&f.type!==Fe&&(A.delayLeave=(V,F,se)=>{const P=qi(r,v);P[String(v.key)]=v,V._leaveCb=()=>{F(),V._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=se})}return o}}},Ic=yc;function qi(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function vr(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:_,onLeave:v,onAfterLeave:T,onLeaveCancelled:M,onBeforeAppear:A,onAppear:V,onAfterAppear:F,onAppearCancelled:se}=e,P=String(t.key),W=qi(n,t),Q=(D,q)=>{D&&pe(D,r,9,q)},Ee=(D,q)=>{const z=q[1];Q(D,q),k(D)?D.every(le=>le.length<=1)&&z():D.length<=1&&z()},ge={mode:i,persisted:o,beforeEnter(D){let q=a;if(!n.isMounted)if(s)q=A||a;else return;D._leaveCb&&D._leaveCb(!0);const z=W[P];z&&lt(t,z)&&z.el._leaveCb&&z.el._leaveCb(),Q(q,[D])},enter(D){let q=c,z=f,le=h;if(!n.isMounted)if(s)q=V||c,z=F||f,le=se||h;else return;let we=!1;const De=D._enterCb=Ut=>{we||(we=!0,Ut?Q(le,[D]):Q(z,[D]),ge.delayedLeave&&ge.delayedLeave(),D._enterCb=void 0)};q?Ee(q,[D,De]):De()},leave(D,q){const z=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return q();Q(_,[D]);let le=!1;const we=D._leaveCb=De=>{le||(le=!0,q(),De?Q(M,[D]):Q(T,[D]),D._leaveCb=void 0,W[z]===t&&delete W[z])};W[z]=t,v?Ee(v,[D,we]):we()},clone(D){return vr(D,e,n,r)}};return ge}function nr(t){if(Bn(t))return t=et(t),t.children=null,t}function Os(t){return Bn(t)?t.children?t.children[0]:void 0:t}function yr(t,e){t.shapeFlag&6&&t.component?yr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ji(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===he?(o.patchFlag&128&&s++,r=r.concat(Ji(o.children,e,a))):(e||o.type!==Fe)&&r.push(a!=null?et(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const mn=t=>!!t.type.__asyncLoader,Bn=t=>t.type.__isKeepAlive;function Ec(t,e){Gi(t,"a",e)}function wc(t,e){Gi(t,"da",e)}function Gi(t,e,n=X){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Hn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bn(s.parent.vnode)&&Tc(r,e,n,s),s=s.parent}}function Tc(t,e,n,r){const s=Hn(e,t,r,!0);Qi(()=>{Fr(r[e],s)},n)}function Hn(t,e,n=X,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),Pt(n);const a=pe(e,n,t,o);return ht(),xt(),a});return r?s.unshift(i):s.push(i),i}}const $e=t=>(e,n=X)=>(!Jt||t==="sp")&&Hn(t,(...r)=>e(...r),n),Cc=$e("bm"),Yi=$e("m"),Sc=$e("bu"),Ac=$e("u"),Xi=$e("bum"),Qi=$e("um"),Oc=$e("sp"),Rc=$e("rtg"),Pc=$e("rtc");function kc(t,e=X){Hn("ec",t,e)}function st(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Mt(),pe(c,n,8,[t.el,a,t,e]),xt())}}const Dc=Symbol(),Ir=t=>t?uo(t)?es(t)||t.proxy:Ir(t.parent):null,Ht=ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ir(t.parent),$root:t=>Ir(t.root),$emit:t=>t.emit,$options:t=>Xr(t),$forceUpdate:t=>t.f||(t.f=()=>Yr(t.update)),$nextTick:t=>t.n||(t.n=nc.bind(t.proxy)),$watch:t=>bc.bind(t)}),rr=(t,e)=>t!==K&&!t.__isScriptSetup&&L(t,e),Nc={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let f;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(rr(r,e))return o[e]=1,r[e];if(s!==K&&L(s,e))return o[e]=2,s[e];if((f=t.propsOptions[0])&&L(f,e))return o[e]=3,i[e];if(n!==K&&L(n,e))return o[e]=4,n[e];Er&&(o[e]=0)}}const h=Ht[e];let _,v;if(h)return e==="$attrs"&&ce(t,"get",e),h(t);if((_=a.__cssModules)&&(_=_[e]))return _;if(n!==K&&L(n,e))return o[e]=4,n[e];if(v=c.config.globalProperties,L(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return rr(s,e)?(s[e]=n,!0):r!==K&&L(r,e)?(r[e]=n,!0):L(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==K&&L(t,o)||rr(e,o)||(a=i[0])&&L(a,o)||L(r,o)||L(Ht,o)||L(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:L(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Er=!0;function Mc(t){const e=Xr(t),n=t.proxy,r=t.ctx;Er=!1,e.beforeCreate&&Rs(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:f,created:h,beforeMount:_,mounted:v,beforeUpdate:T,updated:M,activated:A,deactivated:V,beforeDestroy:F,beforeUnmount:se,destroyed:P,unmounted:W,render:Q,renderTracked:Ee,renderTriggered:ge,errorCaptured:D,serverPrefetch:q,expose:z,inheritAttrs:le,components:we,directives:De,filters:Ut}=e;if(f&&xc(f,r,null,t.appContext.config.unwrapInjectedRef),o)for(const J in o){const H=o[J];N(H)&&(r[J]=H.bind(n))}if(s){const J=s.call(n,n);G(J)&&(t.data=Kr(J))}if(Er=!0,i)for(const J in i){const H=i[J],nt=N(H)?H.bind(n,n):N(H.get)?H.get.bind(n,n):Ie,sn=!N(H)&&N(H.set)?H.set.bind(n):Ie,rt=fl({get:nt,set:sn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Te=>rt.value=Te})}if(a)for(const J in a)Zi(a[J],r,n,J);if(c){const J=N(c)?c.call(n):c;Reflect.ownKeys(J).forEach(H=>{_c(H,J[H])})}h&&Rs(h,t,"c");function ie(J,H){k(H)?H.forEach(nt=>J(nt.bind(n))):H&&J(H.bind(n))}if(ie(Cc,_),ie(Yi,v),ie(Sc,T),ie(Ac,M),ie(Ec,A),ie(wc,V),ie(kc,D),ie(Pc,Ee),ie(Rc,ge),ie(Xi,se),ie(Qi,W),ie(Oc,q),k(z))if(z.length){const J=t.exposed||(t.exposed={});z.forEach(H=>{Object.defineProperty(J,H,{get:()=>n[H],set:nt=>n[H]=nt})})}else t.exposed||(t.exposed={});Q&&t.render===Ie&&(t.render=Q),le!=null&&(t.inheritAttrs=le),we&&(t.components=we),De&&(t.directives=De)}function xc(t,e,n=Ie,r=!1){k(t)&&(t=wr(t));for(const s in t){const i=t[s];let o;G(i)?"default"in i?o=gn(i.from||s,i.default,!0):o=gn(i.from||s):o=gn(i),te(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Rs(t,e,n){pe(k(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zi(t,e,n,r){const s=r.includes(".")?Ki(n,r):()=>n[r];if(Z(t)){const i=e[t];N(i)&&tr(s,i)}else if(N(t))tr(s,t.bind(n));else if(G(t))if(k(t))t.forEach(i=>Zi(i,e,n,r));else{const i=N(t.handler)?t.handler.bind(n):e[t.handler];N(i)&&tr(s,i,t)}}function Xr(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>Cn(c,f,o,!0)),Cn(c,e,o)),G(e)&&i.set(e,c),c}function Cn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cn(t,i,n,!0),s&&s.forEach(o=>Cn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Lc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lc={data:Ps,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:ot,directives:ot,watch:Fc,provide:Ps,inject:Uc};function Ps(t,e){return e?t?function(){return ne(N(t)?t.call(this,this):t,N(e)?e.call(this,this):e)}:e:t}function Uc(t,e){return ot(wr(t),wr(e))}function wr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function oe(t,e){return t?[...new Set([].concat(t,e))]:e}function ot(t,e){return t?ne(ne(Object.create(null),t),e):e}function Fc(t,e){if(!t)return e;if(!e)return t;const n=ne(Object.create(null),t);for(const r in e)n[r]=oe(t[r],e[r]);return n}function Bc(t,e,n,r=!1){const s={},i={};En(i,jn,1),t.propsDefaults=Object.create(null),eo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Hc(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=U(s),[c]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let _=0;_<h.length;_++){let v=h[_];if(Un(t.emitsOptions,v))continue;const T=e[v];if(c)if(L(i,v))T!==i[v]&&(i[v]=T,f=!0);else{const M=Ot(v);s[M]=Tr(c,a,M,T,t,!1)}else T!==i[v]&&(i[v]=T,f=!0)}}}else{eo(t,e,s,i)&&(f=!0);let h;for(const _ in a)(!e||!L(e,_)&&((h=Nt(_))===_||!L(e,h)))&&(c?n&&(n[_]!==void 0||n[h]!==void 0)&&(s[_]=Tr(c,a,_,void 0,t,!0)):delete s[_]);if(i!==a)for(const _ in i)(!e||!L(e,_))&&(delete i[_],f=!0)}f&&Be(t,"set","$attrs")}function eo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pn(c))continue;const f=e[c];let h;s&&L(s,h=Ot(c))?!i||!i.includes(h)?n[h]=f:(a||(a={}))[h]=f:Un(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(i){const c=U(n),f=a||K;for(let h=0;h<i.length;h++){const _=i[h];n[_]=Tr(s,c,_,f[_],t,!L(f,_))}}return o}function Tr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=L(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&N(c)){const{propsDefaults:f}=s;n in f?r=f[n]:(Pt(s),r=f[n]=c.call(null,e),ht())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function to(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!N(t)){const h=_=>{c=!0;const[v,T]=to(_,e,!0);ne(o,v),T&&a.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return G(t)&&r.set(t,It),It;if(k(i))for(let h=0;h<i.length;h++){const _=Ot(i[h]);ks(_)&&(o[_]=K)}else if(i)for(const h in i){const _=Ot(h);if(ks(_)){const v=i[h],T=o[_]=k(v)||N(v)?{type:v}:Object.assign({},v);if(T){const M=Ms(Boolean,T.type),A=Ms(String,T.type);T[0]=M>-1,T[1]=A<0||M<A,(M>-1||L(T,"default"))&&a.push(_)}}}const f=[o,a];return G(t)&&r.set(t,f),f}function ks(t){return t[0]!=="$"}function Ds(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ns(t,e){return Ds(t)===Ds(e)}function Ms(t,e){return k(e)?e.findIndex(n=>Ns(n,t)):N(e)&&Ns(e,t)?0:-1}const no=t=>t[0]==="_"||t==="$stable",Qr=t=>k(t)?t.map(Ae):[Ae(t)],$c=(t,e,n)=>{if(e._n)return e;const r=uc((...s)=>Qr(e(...s)),n);return r._c=!1,r},ro=(t,e,n)=>{const r=t._ctx;for(const s in t){if(no(s))continue;const i=t[s];if(N(i))e[s]=$c(s,i,r);else if(i!=null){const o=Qr(i);e[s]=()=>o}}},so=(t,e)=>{const n=Qr(e);t.slots.default=()=>n},jc=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=U(e),En(e,"_",n)):ro(e,t.slots={})}else t.slots={},e&&so(t,e);En(t.slots,jn,1)},Wc=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=K;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ne(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ro(e,s)),o=e}else e&&(so(t,e),o={default:1});if(i)for(const a in s)!no(a)&&!(a in o)&&delete s[a]};function io(){return{app:null,config:{isNativeTag:ua,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vc=0;function zc(t,e){return function(r,s=null){N(r)||(r=Object.assign({},r)),s!=null&&!G(s)&&(s=null);const i=io(),o=new Set;let a=!1;const c=i.app={_uid:Vc++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pl,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&N(f.install)?(o.add(f),f.install(c,...h)):N(f)&&(o.add(f),f(c,...h))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,h){return h?(i.components[f]=h,c):i.components[f]},directive(f,h){return h?(i.directives[f]=h,c):i.directives[f]},mount(f,h,_){if(!a){const v=Ye(r,s);return v.appContext=i,h&&e?e(v,f):t(v,f,_),a=!0,c._container=f,f.__vue_app__=c,es(v.component)||v.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(f,h){return i.provides[f]=h,c}};return c}}function Cr(t,e,n,r,s=!1){if(k(t)){t.forEach((v,T)=>Cr(v,e&&(k(e)?e[T]:e),n,r,s));return}if(mn(r)&&!s)return;const i=r.shapeFlag&4?es(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,f=e&&e.r,h=a.refs===K?a.refs={}:a.refs,_=a.setupState;if(f!=null&&f!==c&&(Z(f)?(h[f]=null,L(_,f)&&(_[f]=null)):te(f)&&(f.value=null)),N(c))Ge(c,a,12,[o,h]);else{const v=Z(c),T=te(c);if(v||T){const M=()=>{if(t.f){const A=v?L(_,c)?_[c]:h[c]:c.value;s?k(A)&&Fr(A,i):k(A)?A.includes(i)||A.push(i):v?(h[c]=[i],L(_,c)&&(_[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else v?(h[c]=o,L(_,c)&&(_[c]=o)):T&&(c.value=o,t.k&&(h[t.k]=o))};o?(M.id=-1,ae(M,n)):M()}}}const ae=mc;function Kc(t){return qc(t)}function qc(t,e){const n=_a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:f,setElementText:h,parentNode:_,nextSibling:v,setScopeId:T=Ie,insertStaticContent:M}=t,A=(l,u,d,g=null,p=null,y=null,E=!1,b=null,I=!!u.dynamicChildren)=>{if(l===u)return;l&&!lt(l,u)&&(g=on(l),Te(l,p,y,!0),l=null),u.patchFlag===-2&&(I=!1,u.dynamicChildren=null);const{type:m,ref:C,shapeFlag:w}=u;switch(m){case $n:V(l,u,d,g);break;case Fe:F(l,u,d,g);break;case sr:l==null&&se(u,d,g,E);break;case he:we(l,u,d,g,p,y,E,b,I);break;default:w&1?Q(l,u,d,g,p,y,E,b,I):w&6?De(l,u,d,g,p,y,E,b,I):(w&64||w&128)&&m.process(l,u,d,g,p,y,E,b,I,bt)}C!=null&&p&&Cr(C,l&&l.ref,y,u||l,!u)},V=(l,u,d,g)=>{if(l==null)r(u.el=a(u.children),d,g);else{const p=u.el=l.el;u.children!==l.children&&f(p,u.children)}},F=(l,u,d,g)=>{l==null?r(u.el=c(u.children||""),d,g):u.el=l.el},se=(l,u,d,g)=>{[l.el,l.anchor]=M(l.children,u,d,g,l.el,l.anchor)},P=({el:l,anchor:u},d,g)=>{let p;for(;l&&l!==u;)p=v(l),r(l,d,g),l=p;r(u,d,g)},W=({el:l,anchor:u})=>{let d;for(;l&&l!==u;)d=v(l),s(l),l=d;s(u)},Q=(l,u,d,g,p,y,E,b,I)=>{E=E||u.type==="svg",l==null?Ee(u,d,g,p,y,E,b,I):q(l,u,p,y,E,b,I)},Ee=(l,u,d,g,p,y,E,b)=>{let I,m;const{type:C,props:w,shapeFlag:S,transition:R,dirs:x}=l;if(I=l.el=o(l.type,y,w&&w.is,w),S&8?h(I,l.children):S&16&&D(l.children,I,null,g,p,y&&C!=="foreignObject",E,b),x&&st(l,null,g,"created"),ge(I,l,l.scopeId,E,g),w){for(const B in w)B!=="value"&&!pn(B)&&i(I,B,null,w[B],y,l.children,g,p,Ne);"value"in w&&i(I,"value",null,w.value),(m=w.onVnodeBeforeMount)&&Se(m,g,l)}x&&st(l,null,g,"beforeMount");const $=(!p||p&&!p.pendingBranch)&&R&&!R.persisted;$&&R.beforeEnter(I),r(I,u,d),((m=w&&w.onVnodeMounted)||$||x)&&ae(()=>{m&&Se(m,g,l),$&&R.enter(I),x&&st(l,null,g,"mounted")},p)},ge=(l,u,d,g,p)=>{if(d&&T(l,d),g)for(let y=0;y<g.length;y++)T(l,g[y]);if(p){let y=p.subTree;if(u===y){const E=p.vnode;ge(l,E,E.scopeId,E.slotScopeIds,p.parent)}}},D=(l,u,d,g,p,y,E,b,I=0)=>{for(let m=I;m<l.length;m++){const C=l[m]=b?Ve(l[m]):Ae(l[m]);A(null,C,u,d,g,p,y,E,b)}},q=(l,u,d,g,p,y,E)=>{const b=u.el=l.el;let{patchFlag:I,dynamicChildren:m,dirs:C}=u;I|=l.patchFlag&16;const w=l.props||K,S=u.props||K;let R;d&&it(d,!1),(R=S.onVnodeBeforeUpdate)&&Se(R,d,u,l),C&&st(u,l,d,"beforeUpdate"),d&&it(d,!0);const x=p&&u.type!=="foreignObject";if(m?z(l.dynamicChildren,m,b,d,g,x,y):E||H(l,u,b,null,d,g,x,y,!1),I>0){if(I&16)le(b,u,w,S,d,g,p);else if(I&2&&w.class!==S.class&&i(b,"class",null,S.class,p),I&4&&i(b,"style",w.style,S.style,p),I&8){const $=u.dynamicProps;for(let B=0;B<$.length;B++){const Y=$[B],me=w[Y],vt=S[Y];(vt!==me||Y==="value")&&i(b,Y,me,vt,p,l.children,d,g,Ne)}}I&1&&l.children!==u.children&&h(b,u.children)}else!E&&m==null&&le(b,u,w,S,d,g,p);((R=S.onVnodeUpdated)||C)&&ae(()=>{R&&Se(R,d,u,l),C&&st(u,l,d,"updated")},g)},z=(l,u,d,g,p,y,E)=>{for(let b=0;b<u.length;b++){const I=l[b],m=u[b],C=I.el&&(I.type===he||!lt(I,m)||I.shapeFlag&70)?_(I.el):d;A(I,m,C,null,g,p,y,E,!0)}},le=(l,u,d,g,p,y,E)=>{if(d!==g){if(d!==K)for(const b in d)!pn(b)&&!(b in g)&&i(l,b,d[b],null,E,u.children,p,y,Ne);for(const b in g){if(pn(b))continue;const I=g[b],m=d[b];I!==m&&b!=="value"&&i(l,b,m,I,E,u.children,p,y,Ne)}"value"in g&&i(l,"value",d.value,g.value)}},we=(l,u,d,g,p,y,E,b,I)=>{const m=u.el=l?l.el:a(""),C=u.anchor=l?l.anchor:a("");let{patchFlag:w,dynamicChildren:S,slotScopeIds:R}=u;R&&(b=b?b.concat(R):R),l==null?(r(m,d,g),r(C,d,g),D(u.children,d,C,p,y,E,b,I)):w>0&&w&64&&S&&l.dynamicChildren?(z(l.dynamicChildren,S,d,p,y,E,b),(u.key!=null||p&&u===p.subTree)&&oo(l,u,!0)):H(l,u,d,C,p,y,E,b,I)},De=(l,u,d,g,p,y,E,b,I)=>{u.slotScopeIds=b,l==null?u.shapeFlag&512?p.ctx.activate(u,d,g,E,I):Ut(u,d,g,p,y,E,I):fs(l,u,I)},Ut=(l,u,d,g,p,y,E)=>{const b=l.component=sl(l,g,p);if(Bn(l)&&(b.ctx.renderer=bt),ol(b),b.asyncDep){if(p&&p.registerDep(b,ie),!l.el){const I=b.subTree=Ye(Fe);F(null,I,u,d)}return}ie(b,l,u,d,p,y,E)},fs=(l,u,d)=>{const g=u.component=l.component;if(hc(l,u,d))if(g.asyncDep&&!g.asyncResolved){J(g,u,d);return}else g.next=u,sc(g.update),g.update();else u.el=l.el,g.vnode=u},ie=(l,u,d,g,p,y,E)=>{const b=()=>{if(l.isMounted){let{next:C,bu:w,u:S,parent:R,vnode:x}=l,$=C,B;it(l,!1),C?(C.el=x.el,J(l,C,E)):C=x,w&&Zn(w),(B=C.props&&C.props.onVnodeBeforeUpdate)&&Se(B,R,C,x),it(l,!0);const Y=er(l),me=l.subTree;l.subTree=Y,A(me,Y,_(me.el),on(me),l,p,y),C.el=Y.el,$===null&&pc(l,Y.el),S&&ae(S,p),(B=C.props&&C.props.onVnodeUpdated)&&ae(()=>Se(B,R,C,x),p)}else{let C;const{el:w,props:S}=u,{bm:R,m:x,parent:$}=l,B=mn(u);if(it(l,!1),R&&Zn(R),!B&&(C=S&&S.onVnodeBeforeMount)&&Se(C,$,u),it(l,!0),w&&Xn){const Y=()=>{l.subTree=er(l),Xn(w,l.subTree,l,p,null)};B?u.type.__asyncLoader().then(()=>!l.isUnmounted&&Y()):Y()}else{const Y=l.subTree=er(l);A(null,Y,d,g,l,p,y),u.el=Y.el}if(x&&ae(x,p),!B&&(C=S&&S.onVnodeMounted)){const Y=u;ae(()=>Se(C,$,Y),p)}(u.shapeFlag&256||$&&mn($.vnode)&&$.vnode.shapeFlag&256)&&l.a&&ae(l.a,p),l.isMounted=!0,u=d=g=null}},I=l.effect=new jr(b,()=>Yr(m),l.scope),m=l.update=()=>I.run();m.id=l.uid,it(l,!0),m()},J=(l,u,d)=>{u.component=l;const g=l.vnode.props;l.vnode=u,l.next=null,Hc(l,u.props,g,d),Wc(l,u.children,d),Mt(),Ss(),xt()},H=(l,u,d,g,p,y,E,b,I=!1)=>{const m=l&&l.children,C=l?l.shapeFlag:0,w=u.children,{patchFlag:S,shapeFlag:R}=u;if(S>0){if(S&128){sn(m,w,d,g,p,y,E,b,I);return}else if(S&256){nt(m,w,d,g,p,y,E,b,I);return}}R&8?(C&16&&Ne(m,p,y),w!==m&&h(d,w)):C&16?R&16?sn(m,w,d,g,p,y,E,b,I):Ne(m,p,y,!0):(C&8&&h(d,""),R&16&&D(w,d,g,p,y,E,b,I))},nt=(l,u,d,g,p,y,E,b,I)=>{l=l||It,u=u||It;const m=l.length,C=u.length,w=Math.min(m,C);let S;for(S=0;S<w;S++){const R=u[S]=I?Ve(u[S]):Ae(u[S]);A(l[S],R,d,null,p,y,E,b,I)}m>C?Ne(l,p,y,!0,!1,w):D(u,d,g,p,y,E,b,I,w)},sn=(l,u,d,g,p,y,E,b,I)=>{let m=0;const C=u.length;let w=l.length-1,S=C-1;for(;m<=w&&m<=S;){const R=l[m],x=u[m]=I?Ve(u[m]):Ae(u[m]);if(lt(R,x))A(R,x,d,null,p,y,E,b,I);else break;m++}for(;m<=w&&m<=S;){const R=l[w],x=u[S]=I?Ve(u[S]):Ae(u[S]);if(lt(R,x))A(R,x,d,null,p,y,E,b,I);else break;w--,S--}if(m>w){if(m<=S){const R=S+1,x=R<C?u[R].el:g;for(;m<=S;)A(null,u[m]=I?Ve(u[m]):Ae(u[m]),d,x,p,y,E,b,I),m++}}else if(m>S)for(;m<=w;)Te(l[m],p,y,!0),m++;else{const R=m,x=m,$=new Map;for(m=x;m<=S;m++){const ue=u[m]=I?Ve(u[m]):Ae(u[m]);ue.key!=null&&$.set(ue.key,m)}let B,Y=0;const me=S-x+1;let vt=!1,ps=0;const Ft=new Array(me);for(m=0;m<me;m++)Ft[m]=0;for(m=R;m<=w;m++){const ue=l[m];if(Y>=me){Te(ue,p,y,!0);continue}let Ce;if(ue.key!=null)Ce=$.get(ue.key);else for(B=x;B<=S;B++)if(Ft[B-x]===0&&lt(ue,u[B])){Ce=B;break}Ce===void 0?Te(ue,p,y,!0):(Ft[Ce-x]=m+1,Ce>=ps?ps=Ce:vt=!0,A(ue,u[Ce],d,null,p,y,E,b,I),Y++)}const gs=vt?Jc(Ft):It;for(B=gs.length-1,m=me-1;m>=0;m--){const ue=x+m,Ce=u[ue],ms=ue+1<C?u[ue+1].el:g;Ft[m]===0?A(null,Ce,d,ms,p,y,E,b,I):vt&&(B<0||m!==gs[B]?rt(Ce,d,ms,2):B--)}}},rt=(l,u,d,g,p=null)=>{const{el:y,type:E,transition:b,children:I,shapeFlag:m}=l;if(m&6){rt(l.component.subTree,u,d,g);return}if(m&128){l.suspense.move(u,d,g);return}if(m&64){E.move(l,u,d,bt);return}if(E===he){r(y,u,d);for(let w=0;w<I.length;w++)rt(I[w],u,d,g);r(l.anchor,u,d);return}if(E===sr){P(l,u,d);return}if(g!==2&&m&1&&b)if(g===0)b.beforeEnter(y),r(y,u,d),ae(()=>b.enter(y),p);else{const{leave:w,delayLeave:S,afterLeave:R}=b,x=()=>r(y,u,d),$=()=>{w(y,()=>{x(),R&&R()})};S?S(y,x,$):$()}else r(y,u,d)},Te=(l,u,d,g=!1,p=!1)=>{const{type:y,props:E,ref:b,children:I,dynamicChildren:m,shapeFlag:C,patchFlag:w,dirs:S}=l;if(b!=null&&Cr(b,null,d,l,!0),C&256){u.ctx.deactivate(l);return}const R=C&1&&S,x=!mn(l);let $;if(x&&($=E&&E.onVnodeBeforeUnmount)&&Se($,u,l),C&6)ra(l.component,d,g);else{if(C&128){l.suspense.unmount(d,g);return}R&&st(l,null,u,"beforeUnmount"),C&64?l.type.remove(l,u,d,p,bt,g):m&&(y!==he||w>0&&w&64)?Ne(m,u,d,!1,!0):(y===he&&w&384||!p&&C&16)&&Ne(I,u,d),g&&ds(l)}(x&&($=E&&E.onVnodeUnmounted)||R)&&ae(()=>{$&&Se($,u,l),R&&st(l,null,u,"unmounted")},d)},ds=l=>{const{type:u,el:d,anchor:g,transition:p}=l;if(u===he){na(d,g);return}if(u===sr){W(l);return}const y=()=>{s(d),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:E,delayLeave:b}=p,I=()=>E(d,y);b?b(l.el,y,I):I()}else y()},na=(l,u)=>{let d;for(;l!==u;)d=v(l),s(l),l=d;s(u)},ra=(l,u,d)=>{const{bum:g,scope:p,update:y,subTree:E,um:b}=l;g&&Zn(g),p.stop(),y&&(y.active=!1,Te(E,l,u,d)),b&&ae(b,u),ae(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ne=(l,u,d,g=!1,p=!1,y=0)=>{for(let E=y;E<l.length;E++)Te(l[E],u,d,g,p)},on=l=>l.shapeFlag&6?on(l.component.subTree):l.shapeFlag&128?l.suspense.next():v(l.anchor||l.el),hs=(l,u,d)=>{l==null?u._vnode&&Te(u._vnode,null,null,!0):A(u._vnode||null,l,u,null,null,null,d),Ss(),ji(),u._vnode=l},bt={p:A,um:Te,m:rt,r:ds,mt:Ut,mc:D,pc:H,pbc:z,n:on,o:t};let Yn,Xn;return e&&([Yn,Xn]=e(bt)),{render:hs,hydrate:Yn,createApp:zc(hs,Yn)}}function it({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function oo(t,e,n=!1){const r=t.children,s=e.children;if(k(r)&&k(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ve(s[i]),a.el=o.el),n||oo(o,a)),a.type===$n&&(a.el=o.el)}}function Jc(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<f?i=a+1:o=a;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Gc=t=>t.__isTeleport,he=Symbol(void 0),$n=Symbol(void 0),Fe=Symbol(void 0),sr=Symbol(void 0),$t=[];let ye=null;function ao(t=!1){$t.push(ye=t?null:[])}function Yc(){$t.pop(),ye=$t[$t.length-1]||null}let qt=1;function xs(t){qt+=t}function Xc(t){return t.dynamicChildren=qt>0?ye||It:null,Yc(),qt>0&&ye&&ye.push(t),t}function co(t,e,n,r,s,i){return Xc(fe(t,e,n,r,s,i,!0))}function Qc(t){return t?t.__v_isVNode===!0:!1}function lt(t,e){return t.type===e.type&&t.key===e.key}const jn="__vInternal",lo=({key:t})=>t??null,_n=({ref:t,ref_key:e,ref_for:n})=>t!=null?Z(t)||te(t)||N(t)?{i:ve,r:t,k:e,f:!!n}:t:null;function fe(t,e=null,n=null,r=0,s=null,i=t===he?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lo(e),ref:e&&_n(e),scopeId:Fn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return a?(Zr(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Z(n)?8:16),qt>0&&!o&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const Ye=Zc;function Zc(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dc)&&(t=Fe),Qc(t)){const a=et(t,e,!0);return n&&Zr(a,n),qt>0&&!i&&ye&&(a.shapeFlag&6?ye[ye.indexOf(t)]=a:ye.push(a)),a.patchFlag|=-2,a}if(ul(t)&&(t=t.__vccOpts),e){e=el(e);let{class:a,style:c}=e;a&&!Z(a)&&(e.class=Lr(a)),G(c)&&(Mi(c)&&!k(c)&&(c=ne({},c)),e.style=xr(c))}const o=Z(t)?1:gc(t)?128:Gc(t)?64:G(t)?4:N(t)?2:0;return fe(t,e,n,r,s,o,i,!0)}function el(t){return t?Mi(t)||jn in t?ne({},t):t:null}function et(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?tl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lo(a),ref:e&&e.ref?n&&s?k(s)?s.concat(_n(e)):[s,_n(e)]:_n(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==he?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&et(t.ssContent),ssFallback:t.ssFallback&&et(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gt(t=" ",e=0){return Ye($n,null,t,e)}function Ae(t){return t==null||typeof t=="boolean"?Ye(Fe):k(t)?Ye(he,null,t.slice()):typeof t=="object"?Ve(t):Ye($n,null,String(t))}function Ve(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:et(t)}function Zr(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(jn in e)?e._ctx=ve:s===3&&ve&&(ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else N(e)?(e={default:e,_ctx:ve},n=32):(e=String(e),r&64?(n=16,e=[gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function tl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Lr([e.class,r.class]));else if(s==="style")e.style=xr([e.style,r.style]);else if(Dn(s)){const i=e[s],o=r[s];o&&i!==o&&!(k(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Se(t,e,n,r=null){pe(t,e,7,[n,r])}const nl=io();let rl=0;function sl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nl,i={uid:rl++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ba(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:to(r,s),emitsOptions:Vi(r,s),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ac.bind(null,i),t.ce&&t.ce(i),i}let X=null;const il=()=>X||ve,Pt=t=>{X=t,t.scope.on()},ht=()=>{X&&X.scope.off(),X=null};function uo(t){return t.vnode.shapeFlag&4}let Jt=!1;function ol(t,e=!1){Jt=e;const{props:n,children:r}=t.vnode,s=uo(t);Bc(t,n,s,e),jc(t,r);const i=s?al(t,e):void 0;return Jt=!1,i}function al(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xi(new Proxy(t.ctx,Nc));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ll(t):null;Pt(t),Mt();const i=Ge(r,t,0,[t.props,s]);if(xt(),ht(),vi(i)){if(i.then(ht,ht),e)return i.then(o=>{Ls(t,o,e)}).catch(o=>{Ln(o,t,0)});t.asyncDep=i}else Ls(t,i,e)}else fo(t,e)}function Ls(t,e,n){N(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:G(e)&&(t.setupState=Fi(e)),fo(t,n)}let Us;function fo(t,e,n){const r=t.type;if(!t.render){if(!e&&Us&&!r.render){const s=r.template||Xr(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,f=ne(ne({isCustomElement:i,delimiters:a},o),c);r.render=Us(s,f)}}t.render=r.render||Ie}Pt(t),Mt(),Mc(t),xt(),ht()}function cl(t){return new Proxy(t.attrs,{get(e,n){return ce(t,"get","$attrs"),e[n]}})}function ll(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=cl(t))},slots:t.slots,emit:t.emit,expose:e}}function es(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fi(xi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ht)return Ht[n](t)},has(e,n){return n in e||n in Ht}}))}function ul(t){return N(t)&&"__vccOpts"in t}const fl=(t,e)=>ec(t,e,Jt),dl=Symbol(""),hl=()=>gn(dl),pl="3.2.47",gl="http://www.w3.org/2000/svg",ut=typeof document<"u"?document:null,Fs=ut&&ut.createElement("template"),ml={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ut.createElementNS(gl,t):ut.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ut.createTextNode(t),createComment:t=>ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fs.innerHTML=r?`<svg>${t}</svg>`:t;const a=Fs.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bl(t,e,n){const r=t.style,s=Z(n);if(n&&!s){if(e&&!Z(e))for(const i in e)n[i]==null&&Sr(r,i,"");for(const i in n)Sr(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Bs=/\s*!important$/;function Sr(t,e,n){if(k(n))n.forEach(r=>Sr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vl(t,e);Bs.test(n)?t.setProperty(Nt(r),n.replace(Bs,""),"important"):t[r]=n}}const Hs=["Webkit","Moz","ms"],ir={};function vl(t,e){const n=ir[e];if(n)return n;let r=Ot(e);if(r!=="filter"&&r in t)return ir[e]=r;r=Ei(r);for(let s=0;s<Hs.length;s++){const i=Hs[s]+r;if(i in t)return ir[e]=i}return e}const $s="http://www.w3.org/1999/xlink";function yl(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($s,e.slice(6,e.length)):t.setAttributeNS($s,e,n);else{const i=la(e);n==null||i&&!mi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Il(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mi(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function El(t,e,n,r){t.addEventListener(e,n,r)}function wl(t,e,n,r){t.removeEventListener(e,n,r)}function Tl(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Cl(e);if(r){const f=i[e]=Ol(r,s);El(t,a,f,c)}else o&&(wl(t,a,o,c),i[e]=void 0)}}const js=/(?:Once|Passive|Capture)$/;function Cl(t){let e;if(js.test(t)){e={};let r;for(;r=t.match(js);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nt(t.slice(2)),e]}let or=0;const Sl=Promise.resolve(),Al=()=>or||(Sl.then(()=>or=0),or=Date.now());function Ol(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pe(Rl(r,n.value),e,5,[r])};return n.value=t,n.attached=Al(),n}function Rl(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ws=/^on[a-z]/,Pl=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?_l(t,r,s):e==="style"?bl(t,n,r):Dn(e)?Ur(e)||Tl(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kl(t,e,r,s))?Il(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yl(t,e,r,s))};function kl(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ws.test(e)&&N(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ws.test(e)&&Z(n)?!1:e in t}const Dl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ic.props;const Nl=ne({patchProp:Pl},ml);let Vs;function Ml(){return Vs||(Vs=Kc(Nl))}const xl=(...t)=>{const e=Ml().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ll(r);if(!s)return;const i=e._component;!N(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ll(t){return Z(t)?document.querySelector(t):t}const ho=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Wn=t=>(cc("data-v-4b8d1567"),t=t(),lc(),t),Ul={class:"card"},Fl=Wn(()=>fe("p",null,[gt(" Edit "),fe("code",null,"components/HelloWorld.vue"),gt(" to test HMR ")],-1)),Bl=Wn(()=>fe("p",null,[gt(" Check out "),fe("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),gt(", the official Vue + Vite starter ")],-1)),Hl=Wn(()=>fe("p",null,[gt(" Install "),fe("a",{href:"https://github.com/vuejs/language-tools",target:"_blank"},"Volar"),gt(" in your IDE for a better DX ")],-1)),$l=Wn(()=>fe("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),jl={__name:"HelloWorld",props:{msg:String},setup(t){const e=Ja(0);return(n,r)=>(ao(),co(he,null,[fe("h1",null,_s(t.msg),1),fe("div",Ul,[fe("button",{type:"button",onClick:r[0]||(r[0]=s=>e.value++)},"count is "+_s(e.value),1),Fl]),Bl,Hl,$l],64))}},Wl=ho(jl,[["__scopeId","data-v-4b8d1567"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vl=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},go={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,h=i>>2,_=(i&3)<<4|a>>4;let v=(a&15)<<2|f>>6,T=f&63;c||(T=64,o||(v=64)),r.push(n[h],n[_],n[v],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(po(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||f==null||_==null)throw new zl;const v=i<<2|a>>4;if(r.push(v),f!==64){const T=a<<4&240|f>>2;if(r.push(T),_!==64){const M=f<<6&192|_;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kl=function(t){const e=po(t);return go.encodeByteArray(e,!0)},mo=function(t){return Kl(t).replace(/\./g,"")},_o=function(t){try{return go.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=()=>ql().__FIREBASE_DEFAULTS__,Gl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_o(t[1]);return e&&JSON.parse(e)},ts=()=>{try{return Jl()||Gl()||Yl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xl=t=>{var e,n;return(n=(e=ts())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ql=()=>{var t;return(t=ts())===null||t===void 0?void 0:t.config},bo=t=>{var e;return(e=ts())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function tu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ru(){const t=re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function su(){try{return typeof indexedDB=="object"}catch{return!1}}function iu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="FirebaseError";class tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ou,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?au(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tt(s,a,r)}}function au(t,e){return t.replace(cu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cu=/\{\$([^}]+)}/g;function lu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zs(i)&&zs(o)){if(!Sn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zs(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uu(t,e){const n=new fu(t,e);return n.subscribe.bind(n)}class fu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");du(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ar),s.error===void 0&&(s.error=ar),s.complete===void 0&&(s.complete=ar);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function du(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ar(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gu(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pu(t){return t===at?void 0:t}function gu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const _u={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},bu=j.INFO,vu={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},yu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vu[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=bu,this._logHandler=yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_u[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Iu=(t,e)=>e.some(n=>t instanceof n);let Ks,qs;function Eu(){return Ks||(Ks=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wu(){return qs||(qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yo=new WeakMap,Ar=new WeakMap,Io=new WeakMap,cr=new WeakMap,ns=new WeakMap;function Tu(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xe(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yo.set(n,t)}).catch(()=>{}),ns.set(e,t),e}function Cu(t){if(Ar.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ar.set(t,e)}let Or={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ar.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Io.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Su(t){Or=t(Or)}function Au(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lr(this),e,...n);return Io.set(r,e.sort?e.sort():[e]),Xe(r)}:wu().includes(t)?function(...e){return t.apply(lr(this),e),Xe(yo.get(this))}:function(...e){return Xe(t.apply(lr(this),e))}}function Ou(t){return typeof t=="function"?Au(t):(t instanceof IDBTransaction&&Cu(t),Iu(t,Eu())?new Proxy(t,Or):t)}function Xe(t){if(t instanceof IDBRequest)return Tu(t);if(cr.has(t))return cr.get(t);const e=Ou(t);return e!==t&&(cr.set(t,e),ns.set(e,t)),e}const lr=t=>ns.get(t);function Ru(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Xe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xe(o.result),c.oldVersion,c.newVersion,Xe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Pu=["get","getKey","getAll","getAllKeys","count"],ku=["put","add","delete","clear"],ur=new Map;function Js(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ur.get(e))return ur.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ku.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return ur.set(e,i),i}Su(t=>({...t,get:(e,n,r)=>Js(e,n)||t.get(e,n,r),has:(e,n)=>!!Js(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rr="@firebase/app",Gs="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new vo("@firebase/app"),Mu="@firebase/app-compat",xu="@firebase/analytics-compat",Lu="@firebase/analytics",Uu="@firebase/app-check-compat",Fu="@firebase/app-check",Bu="@firebase/auth",Hu="@firebase/auth-compat",$u="@firebase/database",ju="@firebase/database-compat",Wu="@firebase/functions",Vu="@firebase/functions-compat",zu="@firebase/installations",Ku="@firebase/installations-compat",qu="@firebase/messaging",Ju="@firebase/messaging-compat",Gu="@firebase/performance",Yu="@firebase/performance-compat",Xu="@firebase/remote-config",Qu="@firebase/remote-config-compat",Zu="@firebase/storage",ef="@firebase/storage-compat",tf="@firebase/firestore",nf="@firebase/firestore-compat",rf="firebase",sf="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]",of={[Rr]:"fire-core",[Mu]:"fire-core-compat",[Lu]:"fire-analytics",[xu]:"fire-analytics-compat",[Fu]:"fire-app-check",[Uu]:"fire-app-check-compat",[Bu]:"fire-auth",[Hu]:"fire-auth-compat",[$u]:"fire-rtdb",[ju]:"fire-rtdb-compat",[Wu]:"fire-fn",[Vu]:"fire-fn-compat",[zu]:"fire-iid",[Ku]:"fire-iid-compat",[qu]:"fire-fcm",[Ju]:"fire-fcm-compat",[Gu]:"fire-perf",[Yu]:"fire-perf-compat",[Xu]:"fire-rc",[Qu]:"fire-rc-compat",[Zu]:"fire-gcs",[ef]:"fire-gcs-compat",[tf]:"fire-fst",[nf]:"fire-fst-compat","fire-js":"fire-js",[rf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,kr=new Map;function af(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(kr.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;kr.set(e,t);for(const n of An.values())af(n,t);return!0}function Eo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Zt("app","Firebase",cf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=sf;function wo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qe.create("bad-app-name",{appName:String(s)});if(n||(n=Ql()),!n)throw Qe.create("no-options");const i=An.get(s);if(i){if(Sn(n,i.options)&&Sn(r,i.config))return i;throw Qe.create("duplicate-app",{appName:s})}const o=new mu(s);for(const c of kr.values())o.addComponent(c);const a=new lf(n,r,o);return An.set(s,a),a}function uf(t=Pr){const e=An.get(t);if(!e&&t===Pr)return wo();if(!e)throw Qe.create("no-app",{appName:t});return e}function Ct(t,e,n){var r;let s=(r=of[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}Gt(new kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="firebase-heartbeat-database",df=1,Yt="firebase-heartbeat-store";let fr=null;function To(){return fr||(fr=Ru(ff,df,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yt)}}}).catch(t=>{throw Qe.create("idb-open",{originalErrorMessage:t.message})})),fr}async function hf(t){try{return(await To()).transaction(Yt).objectStore(Yt).get(Co(t))}catch(e){if(e instanceof tt)mt.warn(e.message);else{const n=Qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(n.message)}}}async function Ys(t,e){try{const r=(await To()).transaction(Yt,"readwrite");return await r.objectStore(Yt).put(e,Co(t)),r.done}catch(n){if(n instanceof tt)mt.warn(n.message);else{const r=Qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mt.warn(r.message)}}}function Co(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=1024,gf=30*24*60*60*1e3;class mf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=gf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xs(),{heartbeatsToSend:n,unsentEntries:r}=_f(this._heartbeatsCache.heartbeats),s=mo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xs(){return new Date().toISOString().substring(0,10)}function _f(t,e=pf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qs(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qs(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return su()?iu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ys(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ys(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qs(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){Gt(new kt("platform-logger",e=>new Du(e),"PRIVATE")),Gt(new kt("heartbeat",e=>new mf(e),"PRIVATE")),Ct(Rr,Gs,t),Ct(Rr,Gs,"esm2017"),Ct("fire-js","")}vf("");var yf="firebase",If="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(yf,If,"app");function rs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function So(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ef=So,Ao=new Zt("auth","Firebase",So());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new vo("@firebase/auth");function bn(t,...e){Zs.logLevel<=j.ERROR&&Zs.error(`Auth (${Vn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,...e){throw ss(t,...e)}function Re(t,...e){return ss(t,...e)}function Oo(t,e,n){const r=Object.assign(Object.assign({},Ef()),{[e]:n});return new Zt("auth","Firebase",r).create(e,{appName:t.name})}function wf(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ke(t,"argument-error"),Oo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ss(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ao.create(t,...e)}function O(t,e,...n){if(!t)throw ss(e,...n)}function Le(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bn(e),new Error(e)}function He(t,e){t||Le(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Map;function Ue(t){He(t instanceof Function,"Expected a class definition");let e=ei.get(t);return e?(He(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ei.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t,e){const n=Eo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sn(i,e??{}))return s;ke(s,"already-initialized")}return n.initialize({options:e})}function Cf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ue);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sf(){return ti()==="http:"||ti()==="https:"}function ti(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sf()||tu()||"connection"in navigator)?navigator.onLine:!0}function Of(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.shortDelay=e,this.longDelay=n,He(n>e,"Short delay should be less than long delay!"),this.isMobile=eu()||nu()}get(){return Af()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e){He(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new tn(3e4,6e4);function kf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zn(t,e,n,r,s={}){return Po(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=en(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ro.fetch()(ko(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Po(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rf),e);try{const s=new Nf(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,f]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hn(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Oo(t,h,f);ke(t,h)}}catch(s){if(s instanceof tt)throw s;ke(t,"internal-error",{message:String(s)})}}async function Df(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ko(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?is(t.config,s):`${t.config.apiScheme}://${s}`}class Nf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Re(this.auth,"network-request-failed")),Pf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Re(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function xf(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lf(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),s=os(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:jt(dr(s.auth_time)),issuedAtTime:jt(dr(s.iat)),expirationTime:jt(dr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function os(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bn("JWT malformed, contained fewer than 3 sections"),null;try{const s=_o(n);return s?JSON.parse(s):(bn("Failed to decode base64 JWT payload"),null)}catch(s){return bn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Uf(t){const e=os(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tt&&Ff(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ff({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Xt(t,xf(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jf(i.providerUserInfo):[],a=$f(t.providerData,o),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?f:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Do(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,_)}async function Hf(t){const e=Lt(t);await On(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $f(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jf(t){return t.map(e=>{var{providerId:n}=e,r=rs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(t,e){const n=await Po(t,{},async()=>{const r=en({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ko(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ro.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Wf(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qt;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qt,this.toJSON())}_performRefresh(){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Do(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lf(this,e)}reload(){return Hf(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await On(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xt(this,Mf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,f,h;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,M=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(f=n.createdAt)!==null&&f!==void 0?f:void 0,se=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:P,emailVerified:W,isAnonymous:Q,providerData:Ee,stsTokenManager:ge}=n;O(P&&ge,e,"internal-error");const D=Qt.fromJSON(this.name,ge);O(typeof P=="string",e,"internal-error"),We(_,e.name),We(v,e.name),O(typeof W=="boolean",e,"internal-error"),O(typeof Q=="boolean",e,"internal-error"),We(T,e.name),We(M,e.name),We(A,e.name),We(V,e.name),We(F,e.name),We(se,e.name);const q=new pt({uid:P,auth:e,email:v,emailVerified:W,displayName:_,isAnonymous:Q,photoURL:M,phoneNumber:T,tenantId:A,stsTokenManager:D,createdAt:F,lastLoginAt:se});return Ee&&Array.isArray(Ee)&&(q.providerData=Ee.map(z=>Object.assign({},z))),V&&(q._redirectEventId=V),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qt;s.updateFromServerResponse(n);const i=new pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await On(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}No.type="NONE";const ni=No;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e,n){return`firebase:${t}:${e}:${n}`}class St{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vn(this.userKey,s.apiKey,i),this.fullPersistenceKey=vn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new St(Ue(ni),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||Ue(ni);const o=vn(r,e.config.apiKey,e.name);let a=null;for(const f of n)try{const h=await f._get(o);if(h){const _=pt._fromJSON(e,h);f!==i&&(a=_),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new St(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new St(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fo(e))return"Blackberry";if(Bo(e))return"Webos";if(as(e))return"Safari";if((e.includes("chrome/")||xo(e))&&!e.includes("edge/"))return"Chrome";if(Uo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mo(t=re()){return/firefox\//i.test(t)}function as(t=re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xo(t=re()){return/crios\//i.test(t)}function Lo(t=re()){return/iemobile/i.test(t)}function Uo(t=re()){return/android/i.test(t)}function Fo(t=re()){return/blackberry/i.test(t)}function Bo(t=re()){return/webos/i.test(t)}function Kn(t=re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vf(t=re()){var e;return Kn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zf(){return ru()&&document.documentMode===10}function Ho(t=re()){return Kn(t)||Uo(t)||Bo(t)||Fo(t)||/windows phone/i.test(t)||Lo(t)}function Kf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e=[]){let n;switch(t){case"Browser":n=ri(re());break;case"Worker":n=`${ri(re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new si(this),this.idTokenSubscription=new si(this),this.beforeStateQueue=new qf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ao,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ue(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await St.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await On(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Of()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ue(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ue(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await St.create(this,[Ue(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$o(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function qn(t){return Lt(t)}class si{constructor(e){this.auth=e,this.observer=null,this.addObserver=uu(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Gf(t,e,n){const r=qn(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=jo(e),{host:o,port:a}=Yf(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Xf()}function jo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yf(t){const e=jo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ii(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ii(o)}}}function ii(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xf(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Le("not implemented")}_getIdTokenResponse(e){return Le("not implemented")}_linkToIdToken(e,n){return Le("not implemented")}_getReauthenticationResolver(e){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return Df(t,"POST","/v1/accounts:signInWithIdp",kf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="http://localhost";class _t extends Wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return At(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,At(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,At(e,n)}buildRequest(){const e={requestUri:Qf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=en(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends cs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends nn{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";xe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _t._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ze.credential(n,r)}catch{return null}}}ze.GOOGLE_SIGN_IN_METHOD="google.com";ze.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends nn{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com";Ke.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends nn{constructor(){super("twitter.com")}static credential(e,n){return _t._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qe.credential(n,r)}catch{return null}}}qe.TWITTER_SIGN_IN_METHOD="twitter.com";qe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pt._fromIdTokenResponse(e,r,s),o=oi(r);return new Dt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=oi(r);return new Dt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function oi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Rn(e,n,r,s)}}function Vo(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(t,i,e,r):i})}async function Zf(t,e,n=!1){const r=await Xt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Xt(t,Vo(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=os(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Dt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(t,e,n=!1){const r="signIn",s=await Vo(t,r,e),i=await Dt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function nd(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function rd(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}const Pn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pn,"1"),this.storage.removeItem(Pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){const t=re();return as(t)||Kn(t)}const id=1e3,od=10;class Ko extends zo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sd()&&Kf(),this.fallbackToPolling=Ho(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zf()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,od):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},id)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ko.type="LOCAL";const ad=Ko;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends zo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qo.type="SESSION";const Jo=qo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Jn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async f=>f(n.origin,i)),c=await cd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const f=ls("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(_){const v=_;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(v.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function ud(t){Pe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function fd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hd(){return Go()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="firebaseLocalStorageDb",pd=1,kn="firebaseLocalStorage",Xo="fbase_key";class rn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gn(t,e){return t.transaction([kn],e?"readwrite":"readonly").objectStore(kn)}function gd(){const t=indexedDB.deleteDatabase(Yo);return new rn(t).toPromise()}function Nr(){const t=indexedDB.open(Yo,pd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kn,{keyPath:Xo})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kn)?e(r):(r.close(),await gd(),e(await Nr()))})})}async function ai(t,e,n){const r=Gn(t,!0).put({[Xo]:e,value:n});return new rn(r).toPromise()}async function md(t,e){const n=Gn(t,!1).get(e),r=await new rn(n).toPromise();return r===void 0?null:r.value}function ci(t,e){const n=Gn(t,!0).delete(e);return new rn(n).toPromise()}const _d=800,bd=3;class Qo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bd)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Go()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jn._getInstance(hd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fd(),!this.activeServiceWorker)return;this.sender=new ld(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nr();return await ai(e,Pn,"1"),await ci(e,Pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ai(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>md(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ci(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gn(s,!1).getAll();return new rn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_d)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qo.type="LOCAL";const vd=Qo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Id(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Re("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yd().appendChild(r)})}function Ed(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new tn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e){return e?Ue(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,n){return At(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wd(t){return td(t.auth,new us(t),t.bypassAuthState)}function Td(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),ed(n,new us(t),t.bypassAuthState)}async function Cd(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Zf(n,new us(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wd;case"linkViaPopup":case"linkViaRedirect":return Cd;case"reauthViaPopup":case"reauthViaRedirect":return Td;default:ke(this.auth,"internal-error")}}resolve(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new tn(2e3,1e4);async function Ad(t,e,n){const r=qn(t);wf(t,e,cs);const s=Zo(r,n);return new ft(r,"signInViaPopup",e,s).executeNotNull()}class ft extends ea{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ft.currentPopupAction&&ft.currentPopupAction.cancel(),ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){He(this.filter.length===1,"Popup operations only handle one event");const e=ls();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Re(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Sd.get())};e()}}ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="pendingRedirect",yn=new Map;class Rd extends ea{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yn.get(this.auth._key());if(!e){try{const r=await Pd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yn.set(this.auth._key(),e)}return this.bypassAuthState||yn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pd(t,e){const n=Nd(e),r=Dd(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function kd(t,e){yn.set(t._key(),e)}function Dd(t){return Ue(t._redirectPersistence)}function Nd(t){return vn(Od,t.config.apiKey,t.name)}async function Md(t,e,n=!1){const r=qn(t),s=Zo(r,e),o=await new Rd(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=10*60*1e3;class Ld{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ud(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ta(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Re(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xd&&this.cachedEventUids.clear(),this.cachedEventUids.has(li(e))}saveEventToCache(e){this.cachedEventUids.add(li(e)),this.lastProcessedEventTime=Date.now()}}function li(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ta({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ud(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ta(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hd=/^https?/;async function $d(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fd(t);for(const n of e)try{if(jd(n))return}catch{}ke(t,"unauthorized-domain")}function jd(t){const e=Dr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hd.test(n))return!1;if(Bd.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new tn(3e4,6e4);function ui(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vd(t){return new Promise((e,n)=>{var r,s,i;function o(){ui(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ui(),n(Re(t,"network-request-failed"))},timeout:Wd.get()})}if(!((s=(r=Pe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Pe().gapi)===null||i===void 0)&&i.load)o();else{const a=Ed("iframefcb");return Pe()[a]=()=>{gapi.load?o():n(Re(t,"network-request-failed"))},Id(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw In=null,e})}let In=null;function zd(t){return In=In||Vd(t),In}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new tn(5e3,15e3),qd="__/auth/iframe",Jd="emulator/auth/iframe",Gd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xd(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?is(e,Jd):`https://${t.config.authDomain}/${qd}`,r={apiKey:e.apiKey,appName:t.name,v:Vn},s=Yd.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${en(r).slice(1)}`}async function Qd(t){const e=await zd(t),n=Pe().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Xd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gd,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Re(t,"network-request-failed"),a=Pe().setTimeout(()=>{i(o)},Kd.get());function c(){Pe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eh=500,th=600,nh="_blank",rh="http://localhost";class fi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sh(t,e,n,r=eh,s=th){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Zd),{width:r.toString(),height:s.toString(),top:i,left:o}),f=re().toLowerCase();n&&(a=xo(f)?nh:n),Mo(f)&&(e=e||rh,c.scrollbars="yes");const h=Object.entries(c).reduce((v,[T,M])=>`${v}${T}=${M},`,"");if(Vf(f)&&a!=="_self")return ih(e||"",a),new fi(null);const _=window.open(e||"",a,h);O(_,t,"popup-blocked");try{_.focus()}catch{}return new fi(_)}function ih(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="__/auth/handler",ah="emulator/auth/handler";function di(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vn,eventId:s};if(e instanceof cs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(i||{}))o[c]=f}if(e instanceof nn){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ch(t)}?${en(a).slice(1)}`}function ch({config:t}){return t.emulator?is(t,ah):`https://${t.authDomain}/${oh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="webStorageSupport";class lh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jo,this._completeRedirectFn=Md,this._overrideRedirectResult=kd}async _openPopup(e,n,r,s){var i;He((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=di(e,n,r,Dr(),s);return sh(e,o,ls())}async _openRedirect(e,n,r,s){return await this._originValidation(e),ud(di(e,n,r,Dr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(He(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Qd(e),r=new Ld(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hr,{type:hr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hr];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$d(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ho()||as()||Kn()}}const uh=lh;var hi="@firebase/auth",pi="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hh(t){Gt(new kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{O(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const f={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$o(t)},h=new Jf(a,c,f);return Cf(h,n),h})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new kt("auth-internal",e=>{const n=qn(e.getProvider("auth").getImmediate());return(r=>new fh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(hi,pi,dh(t)),Ct(hi,pi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=5*60,gh=bo("authIdTokenMaxAge")||ph;let gi=null;const mh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gh)return;const s=n==null?void 0:n.token;gi!==s&&(gi=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _h(t=uf()){const e=Eo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tf(t,{popupRedirectResolver:uh,persistence:[vd,ad,Jo]}),r=bo("authTokenSyncURL");if(r){const i=mh(r);rd(n,i,()=>i(n.currentUser)),nd(n,o=>i(o))}const s=Xl("auth");return s&&Gf(n,`http://${s}`),n}hh("Browser");const bh={__name:"App",setup(t){wo({apiKey:"AIzaSyC0E5PCkYe9M_HuYrZ0xenmNdCbiMqx-to",authDomain:"testapp-50f72.firebaseapp.com",projectId:"testapp-50f72",storageBucket:"testapp-50f72.appspot.com",messagingSenderId:"381877846474",appId:"1:381877846474:web:3c84164bdb178b891ecf33"});const n=_h();n.languageCode="ko";const r=new xe;r.setCustomParameters({prompt:"select_account",display:"popup"}),r.addScope("public_profile"),r.addScope("email");function s(){Ad(n,r).then(i=>{console.log(i)}).catch(i=>{console.log(i)})}return(i,o)=>(ao(),co(he,null,[fe("div",{onClick:s}," 로그인테스트 "),Ye(Wl,{msg:"Vite + Vue"})],64))}},vh=ho(bh,[["__scopeId","data-v-eedb881b"]]);xl(vh).mount("#app");
