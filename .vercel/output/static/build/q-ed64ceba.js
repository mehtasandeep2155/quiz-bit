import{a as w,z as Y,R as d,_ as y,g as P,K as p,f as h,S as m,X as B}from"./q-2a88489c.js";function Q(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const u in n)if(u!=="default"&&!(u in e)){const s=Object.getOwnPropertyDescriptor(n,u);s&&Object.defineProperty(e,u,s.get?s:{enumerable:!0,get:()=>n[u]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const K=e=>{const[t]=w();t.value=e.target.value},X=()=>alert("click");function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _={exports:{}},o={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.element"),J=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),ne=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),se=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),T=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,M={};function v(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||L}v.prototype.isReactComponent={};v.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=v.prototype;function x(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||L}var $=x.prototype=new U;$.constructor=x;V($,v.prototype);$.isPureReactComponent=!0;var D=Array.isArray,H=Object.prototype.hasOwnProperty,j={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,r){var n,u={},s=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)H.call(t,n)&&!z.hasOwnProperty(n)&&(u[n]=t[n]);var c=arguments.length-2;if(c===1)u.children=r;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)u[n]===void 0&&(u[n]=c[n]);return{$$typeof:E,type:e,key:s,ref:l,props:u,_owner:j.current}}function le(e,t){return{$$typeof:E,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function I(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function ae(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var A=/\/+/g;function C(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ae(""+e.key):t.toString(36)}function g(e,t,r,n,u){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case E:case J:l=!0}}if(l)return l=e,u=u(l),e=n===""?"."+C(l,0):n,D(u)?(r="",e!=null&&(r=e.replace(A,"$&/")+"/"),g(u,t,r,"",function(f){return f})):u!=null&&(I(u)&&(u=le(u,r+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(A,"$&/")+"/")+e)),t.push(u)),1;if(l=0,n=n===""?".":n+":",D(e))for(var c=0;c<e.length;c++){s=e[c];var i=n+C(s,c);l+=g(s,t,r,i,u)}else if(i=ce(e),typeof i=="function")for(e=i.call(e),c=0;!(s=e.next()).done;)s=s.value,i=n+C(s,c++),l+=g(s,t,r,i,u);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function S(e,t,r){if(e==null)return e;var n=[],u=0;return g(e,n,"","",function(s){return t.call(r,s,u++)}),n}function fe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},R={transition:null},pe={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:R,ReactCurrentOwner:j};o.Children={map:S,forEach:function(e,t,r){S(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return S(e,function(){t++}),t},toArray:function(e){return S(e,function(t){return t})||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};o.Component=v;o.Fragment=Z;o.Profiler=te;o.PureComponent=x;o.StrictMode=ee;o.Suspense=ue;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe;o.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=V({},e.props),u=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=j.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)H.call(t,i)&&!z.hasOwnProperty(i)&&(n[i]=t[i]===void 0&&c!==void 0?c[i]:t[i])}var i=arguments.length-2;if(i===1)n.children=r;else if(1<i){c=Array(i);for(var f=0;f<i;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:E,type:e.type,key:u,ref:s,props:n,_owner:l}};o.createContext=function(e){return e={$$typeof:ne,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:re,_context:e},e.Consumer=e};o.createElement=F;o.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t};o.createRef=function(){return{current:null}};o.forwardRef=function(e){return{$$typeof:oe,render:e}};o.isValidElement=I;o.lazy=function(e){return{$$typeof:ie,_payload:{_status:-1,_result:e},_init:fe}};o.memo=function(e,t){return{$$typeof:se,type:e,compare:t===void 0?null:t}};o.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}};o.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};o.useCallback=function(e,t){return a.current.useCallback(e,t)};o.useContext=function(e){return a.current.useContext(e)};o.useDebugValue=function(){};o.useDeferredValue=function(e){return a.current.useDeferredValue(e)};o.useEffect=function(e,t){return a.current.useEffect(e,t)};o.useId=function(){return a.current.useId()};o.useImperativeHandle=function(e,t,r){return a.current.useImperativeHandle(e,t,r)};o.useInsertionEffect=function(e,t){return a.current.useInsertionEffect(e,t)};o.useLayoutEffect=function(e,t){return a.current.useLayoutEffect(e,t)};o.useMemo=function(e,t){return a.current.useMemo(e,t)};o.useReducer=function(e,t,r){return a.current.useReducer(e,t,r)};o.useRef=function(e){return a.current.useRef(e)};o.useState=function(e){return a.current.useState(e)};o.useSyncExternalStore=function(e,t,r){return a.current.useSyncExternalStore(e,t,r)};o.useTransition=function(){return a.current.useTransition()};o.version="18.2.0";(function(e){e.exports=o})(_);const _e=G(_.exports),Ce=Q({__proto__:null,default:_e},[_.exports]);var de=Object.defineProperty,ye=(e,t,r)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t,r)=>(ye(e,typeof t!="symbol"?t+"":t,r),r);const W=_.exports.createContext({scopeId:""});function Oe(e,t,r,n){const u=ve(n);return he(e,t,r,u)}function he(e,t,r,n){return _.exports.createElement(W.Provider,{value:{el:e,scopeId:t,attachedEl:void 0},children:_.exports.createElement(r,{...n,children:_.exports.createElement(N,null)})})}class N extends _.exports.Component{constructor(){super(...arguments),q(this,"slotC",_.exports.createRef())}shouldComponentUpdate(){return!1}componentDidMount(){const t=this.slotC.current;if(t){const{attachedEl:r,el:n}=this.context;if(n){if(!r)t.appendChild(n);else if(r!==t)throw new Error("already attached")}}}render(){return _.exports.createElement("q-slotc",{class:this.context.scopeId,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:"<!--SLOT-->"},ref:this.slotC})}}q(N,"contextType",W);const ve=e=>{const t={};return Object.keys(e).forEach(r=>{if(!r.startsWith("client:")&&!r.startsWith(O)){const n=r.endsWith("$")?r.slice(0,-1):r;t[n]=e[r]}}),t},we=e=>{const t={};return Object.keys(e).forEach(r=>{r.startsWith(O)&&(t[r.slice(O.length)]=e[r])}),t},xe=(e,t={})=>{const r=P(!1);d(()=>y(()=>import("./q-974d416e.js"),["build/q-974d416e.js","build/q-2a88489c.js"]),"s_6LYztwGzxAA",[r]);const n=!!(e["client:only"]||(t==null?void 0:t.clientOnly));return[r,n]},O="host:";function k(e,t){return Y(d(()=>y(()=>import("./q-9f55fd20.js"),["build/q-9f55fd20.js","build/q-2a88489c.js","build/q-6311be3a.js"]),"s_zH94hIe0Ick",[t,e]))}const me=k(d(()=>y(()=>import("./q-01f425a1.js"),["build/q-01f425a1.js","build/q-8d1406f9.js","build/q-04cf537f.js","build/q-2a88489c.js"]),"s_Hd8r0YexMcY")),Ee=k(d(()=>y(()=>import("./q-d60be200.js"),["build/q-d60be200.js","build/q-04cf537f.js","build/q-c349703f.js","build/q-2a88489c.js"]),"s_2XxI5peAEOQ"),{eagerness:"hover"}),Se=k(d(()=>y(()=>import("./q-a4a9cf6f.js"),["build/q-a4a9cf6f.js","build/q-04cf537f.js","build/q-8d1406f9.js","build/q-6311be3a.js","build/q-c349703f.js","build/q-2a88489c.js"]),"s_LQzPP0B5Rtk")),be=()=>{const e=P(!1),t=P(0),r=P("contained");return p(B,{children:[p("h1",{children:"Qwik/React mother of all demos"}),p("select",{get value(){return r.value},onChange$:d(()=>y(()=>Promise.resolve().then(()=>b),void 0),"s_ajMyuRH1aws",[r]),children:[p("option",{children:"text"}),p("option",{children:"outlined"}),p("option",{selected:!0,children:"contained"})],[h]:{value:m(r,"value")}}),p(Ee,{get value(){return t.value},onChange$:d(()=>y(()=>Promise.resolve().then(()=>b),void 0),"s_CwHr1soCFpo",[t]),[h]:{value:m(t,"value"),onChange$:h}},"U8_0"),p(me,{get variant(){return r.value},"host:onClick$":d(()=>y(()=>Promise.resolve().then(()=>b),void 0),"s_0TpDEaIm2Eg"),children:["Slider is ",m(t,"value")],[h]:{variant:m(r,"value"),"host:onClick$":h}},"U8_1"),p("button",{onClick$:d(()=>y(()=>Promise.resolve().then(()=>b),void 0),"s_DVMPoyljbY8",[e]),children:"Show table"}),e.value&&p(Se,{"client:visible":!0,children:["Slider is ",m(t,"value")],[h]:{"client:visible":h}},"U8_2")],[h]:{children:!1}},"U8_3")},Pe=()=>{const[e]=w();return e.value=!0},ge=(e,t)=>{const[r]=w();r.value=t},b=Object.freeze(Object.defineProperty({__proto__:null,s_ajMyuRH1aws:K,s_0TpDEaIm2Eg:X,s_i4frY0Pt5lk:be,s_DVMPoyljbY8:Pe,s_CwHr1soCFpo:ge},Symbol.toStringTag,{value:"Module"}));export{_e as R,Ce as a,we as b,he as c,b as e,G as g,Oe as m,_ as r,xe as u};