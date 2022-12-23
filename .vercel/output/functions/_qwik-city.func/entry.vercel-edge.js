import{getNotFound as X}from"./@qwik-city-not-found-paths.js";import{isStaticPath as K}from"./@qwik-city-static-paths.js";import{q as Y}from"./assets/@qwik-city-plan.c8b81063.js";import Z from"./entry.ssr.js";var _={lax:"Lax",none:"None",strict:"Strict"},ee={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},te=(e,t,n)=>{const s=[`${e}=${t}`];return typeof n.domain=="string"&&s.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?s.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?s.push(`Max-Age=${n.maxAge[0]*ee[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?s.push(`Expires=${n.expires}`):n.expires instanceof Date&&s.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&s.push("HttpOnly"),typeof n.path=="string"&&s.push(`Path=${n.path}`),n.sameSite&&_[n.sameSite]&&s.push(`SameSite=${_[n.sameSite]}`),n.secure&&s.push("Secure"),s.join("; ")},ne=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const s of n){const r=s.split("=");if(r.length>1){const o=decodeURIComponent(r[0].trim()),i=decodeURIComponent(r[1].trim());t[o]=i}}}return t},T=Symbol("request-cookies"),N=Symbol("response-cookies"),W,O=class{constructor(e){this[W]={},this[T]=ne(e)}get(e){const t=this[T][e];return t?{value:t,json(){return JSON.parse(t)},number(){return Number(t)}}:null}has(e){return!!this[T][e]}set(e,t,n={}){const s=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[N][e]=te(e,s,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0})}headers(){return Object.values(this[N])}};W=N;var se=(e,t)=>{const n=t.headers();if(n.length>0){const s=new Headers(e);for(const r of n)s.append("Set-Cookie",r);return s}return e},g=Symbol("headers"),j,re=class{constructor(){this[j]={}}[(j=g,Symbol.iterator)](){return this.entries()}*keys(){for(const e of Object.keys(this[g]))yield e}*values(){for(const e of Object.values(this[g]))yield e}*entries(){for(const e of Object.keys(this[g]))yield[e,this.get(e)]}get(e){return this[g][R(e)]||null}set(e,t){const n=R(e);this[g][n]=typeof t!="string"?String(t):t}append(e,t){const n=R(e),s=this.has(n)?`${this.get(n)}, ${t}`:t;this.set(e,s)}delete(e){if(!this.has(e))return;const t=R(e);delete this[g][t]}all(){return this[g]}has(e){return this[g].hasOwnProperty(R(e))}forEach(e,t){for(const n in this[g])this[g].hasOwnProperty(n)&&e.call(t,this[g][n],n,this)}},oe=/[^a-z0-9\-#$%&'*+.^_`|~]/i;function R(e){if(typeof e!="string"&&(e=String(e)),oe.test(e)||e.trim()==="")throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function P(){return new(typeof Headers=="function"?Headers:re)}var A=class extends Error{constructor(e,t){super(t),this.status=e}};function ie(e,t){const s=z(500,t),r=P();return r.set("Content-Type","text/html; charset=utf-8"),e.response(500,r,new O,async o=>{o.write(s)},t)}function ae(e,t){const n=J(t.status,t.message,t.stack),s=P();return s.set("Content-Type","text/html; charset=utf-8"),e.response(t.status,s,new O,async r=>{r.write(n)},t)}function z(e,t){let n="Server Error",s;return t!=null&&(typeof t=="object"?(typeof t.message=="string"&&(n=t.message),t.stack!=null&&(s=String(t.stack))):n=String(t)),J(e,n,s)}function J(e,t,n){const s=typeof t=="string"?"600px":"300px",r=e>=500?le:ce;return e<500&&(n=""),`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}"/>
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p><strong>${e}</strong> <span>${t}</span></p>${n?`
  <pre><code>${n}</code></pre>`:""}
</body>
</html>`}var ce="#006ce9",le="#713fc2";function fe(e,t){const{pendingBody:n,resolvedBody:s,status:r,headers:o,cookie:i}=t,{response:c}=e;if(n===void 0&&s===void 0)return c(r,o,i,de);o.has("Content-Type")||o.set("Content-Type","application/json; charset=utf-8");const l=o.get("Content-Type").includes("json");return c(r,o,i,async({write:f})=>{const h=n!==void 0?await n:s;if(h!==void 0)if(l)f(JSON.stringify(h));else{const d=typeof h;f(d==="string"?h:d==="number"||d==="boolean"?String(h):h)}})}var de=async()=>{},k=class{constructor(e,t,n,s){this.url=e,this.location=e,this.status=V(t)?t:302,this.headers=n!=null?n:P(),this.headers.set("Location",this.location),this.headers.delete("Cache-Control"),this.cookies=s!=null?s:new O}};function ue(e,t){return e.response(t.status,t.headers,t.cookies,async()=>{})}function V(e){return typeof e=="number"&&e>=301&&e<=308}function he(e){if(JSON.stringify(e),!B(e))throw new Error("Unable to serialize value.")}function B(e){if(e==null||typeof e=="string"||typeof e=="boolean"||typeof e=="number")return!0;if(Array.isArray(e)){for(const t of e)if(!B(t))return!1;return!0}if(e.constructor==null||e.constructor===Object){for(const t in e)if(!B(e[t]))return!1;return!0}return!1}async function pe(e,t,n,s,r="/"){if(n.length===0)throw new A(404,"Not Found");const{request:o,url:i,platform:c}=e,{pathname:l}=i,{method:f,headers:h}=o,d=me(n),u=d&&l.endsWith($),p=!u&&ge(f,h.get("Accept"),h.get("Content-Type")),b=new O(h.get("cookie")),a={type:u?"pagedata":d&&!p?"pagehtml":"endpoint",url:i,params:t,status:200,headers:P(),resolvedBody:void 0,pendingBody:void 0,cookie:b,aborted:!1};let S=!1;if(d&&!u&&l!==r&&!l.endsWith(".html")){if(s){if(!l.endsWith("/"))throw new k(l+"/"+i.search,302)}else if(l.endsWith("/"))throw new k(l.slice(0,l.length-1)+i.search,302)}let m=-1;const C=()=>{m=L},D=async()=>{for(m++;m<n.length;){const w=n[m];let y;switch(f){case"GET":{y=w.onGet;break}case"POST":{y=w.onPost;break}case"PUT":{y=w.onPut;break}case"PATCH":{y=w.onPatch;break}case"DELETE":{y=w.onDelete;break}case"OPTIONS":{y=w.onOptions;break}case"HEAD":{y=w.onHead;break}}if(y=y||w.onRequest,typeof y=="function"){S=!0;const F=new ye(a,e),Q={request:o,url:new URL(i),params:{...t},response:F,platform:c,cookie:b,next:D,abort:C},v=y(Q);if(typeof v=="function")a.pendingBody=I(v);else if(v!==null&&typeof v=="object"&&typeof v.then=="function"){const x=await v;typeof x=="function"?a.pendingBody=I(x):a.resolvedBody=x}else a.resolvedBody=v;if(e.mode==="dev"){const x=a.resolvedBody!=null?a.resolvedBody:a.pendingBody!=null?await a.pendingBody:null;try{he(x)}catch(G){throw Object.assign(G,{id:"DEV_SERIALIZE",endpointModule:w,requestHandler:y,method:f})}}}m++}};if(await D(),a.aborted=m>=L,!u&&V(a.status)&&a.headers.has("Location"))throw new k(a.headers.get("Location"),a.status,a.headers,a.cookie);if(S)d&&f==="GET"&&(a.headers.has("Vary")||a.headers.set("Vary","Content-Type, Accept"));else if(p&&!u||!d)throw new A(405,"Method Not Allowed");return a}var E=Symbol("UserResponse"),H=Symbol("RequestContext"),ye=class{constructor(e,t){this[E]=e,this[H]=t}get status(){return this[E].status}set status(e){this[E].status=e}get headers(){return this[E].headers}get locale(){return this[H].locale}set locale(e){this[H].locale=e}redirect(e,t){return new k(e,t,this[E].headers,this[E].cookie)}error(e,t){return new A(e,t)}};function ge(e,t,n){if(e==="GET"||e==="POST"){if(n&&n.includes("application/json"))return!0;if(t){const s=t.indexOf("text/html");if(s===0)return!1;const r=t.indexOf("application/json");if(r>-1)return s>-1?r<s:!0}return!1}else return!0}function I(e){return new Promise((t,n)=>{try{const s=e();s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(t,n):t(s)}catch(s){n(s)}})}function me(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function we(e,t){if(e.endsWith($)){const n=e.length-be+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var $="/q-data.json",be=$.length,L=999999999,U=new WeakMap,ve=async(e,t,n,s)=>{if(Array.isArray(e))for(const r of e){const o=r[0].exec(s);if(o){const i=r[1],c=Ee(r[2],o),l=r[4],f=new Array(i.length),h=[],d=Se(t,s);let u;return i.forEach((p,b)=>{q(p,h,a=>f[b]=a,n)}),q(d,h,p=>u=p==null?void 0:p.default,n),h.length>0&&await Promise.all(h),[c,f,u,l]}}return null},q=(e,t,n,s)=>{if(typeof e=="function"){const r=U.get(e);if(r)n(r);else{const o=e();typeof o.then=="function"?t.push(o.then(i=>{s!==!1&&U.set(e,i),n(i)})):o&&n(o)}}},Se=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(s=>s[0]===t||t.startsWith(s[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},Ee=(e,t)=>{const n={};if(e)for(let s=0;s<e.length;s++)n[e[s]]=t?t[s+1]:"";return n};function xe(e,t,n,s,r){const{status:o,headers:i,cookie:c}=t,{response:l}=e,f=t.type==="pagedata",h={};return e.request.headers.forEach((d,u)=>h[u]=d),f?i.set("Content-Type","application/json; charset=utf-8"):i.has("Content-Type")||i.set("Content-Type","text/html; charset=utf-8"),l(f?200:o,i,c,async d=>{try{const u=await n({stream:f?Ae:d,envData:ke(h,t,e.locale,e.mode),...s});f?d.write(JSON.stringify(await M(t,u,r))):(typeof u).html==="string"&&d.write(u.html),typeof d.clientData=="function"&&d.clientData(await M(t,u,r))}catch(u){const p=z(500,u);d.write(p)}})}async function M(e,t,n){const s=Re(t,n),r=t.isStatic;return{body:e.pendingBody?await e.pendingBody:e.resolvedBody,status:e.status!==200?e.status:void 0,redirect:e.status>=301&&e.status<=308&&e.headers.get("location")||void 0,isStatic:r,prefetch:s.length>0?s:void 0}}function Re(e,t){const n=[],s=c=>{c&&!n.includes(c)&&n.push(c)},r=c=>{if(Array.isArray(c))for(const l of c){const f=l.url.split("/").pop();f&&!n.includes(f)&&(s(f),r(l.imports))}};r(e.prefetchResources);const o=e.manifest||e._manifest,i=e._symbols;if(o&&i)for(const c of i){const l=o.symbols[c];l&&l.ctxName==="component$"&&s(o.mapping[c])}if(t)for(const c of t)s(c);return n}function ke(e,t,n,s){const{url:r,params:o,pendingBody:i,resolvedBody:c,status:l}=t;return{url:r.href,requestHeaders:e,locale:n,qwikcity:{mode:s,params:{...o},response:{body:i||c,status:l}}}}var Ae={write:()=>{}};async function Oe(e,t){try{const{render:n,qwikCityPlan:s}=t,{routes:r,menus:o,cacheModules:i,trailingSlash:c,basePathname:l}=s,f=we(e.url.pathname,c),h=await ve(r,o,i,f);if(h){const[d,u,p,b]=h,a=await pe(e,d,u,c,l);return a.aborted?null:a.type==="endpoint"?await fe(e,a):await xe(e,a,n,t,b)}}catch(n){return n instanceof k?ue(e,n):n instanceof A?ae(e,n):ie(e,n)}return null}function Pe(e){async function t(n){try{const s=new URL(n.url);if(K(s.pathname))return new Response(null,{headers:{"x-middleware-next":"1"}});const r={mode:"server",locale:void 0,url:s,request:n,response:(c,l,f,h)=>new Promise(d=>{let u=!1;const{readable:p,writable:b}=new TransformStream,a=b.getWriter(),S=new Response(p,{status:c,headers:se(l,f)});h({write:m=>{if(u||(u=!0,d(S)),typeof m=="string"){const C=new TextEncoder;a.write(C.encode(m))}else a.write(m)}}).finally(()=>{u||(u=!0,d(S)),a.close()})}),platform:process.env},o=await Oe(r,e);if(o)return o;const i=X(s.pathname);return new Response(i,{status:404,headers:{"Content-Type":"text/html; charset=utf-8","X-Not-Found":s.pathname}})}catch(s){return console.error(s),new Response(String(s||"Error"),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8","X-Error":"vercel-edge"}})}}return t}const Be=Pe({render:Z,qwikCityPlan:Y});export{Be as default};
