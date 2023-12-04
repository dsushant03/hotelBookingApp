import{d as st,b as pe,n as it,i as me,e as ye,t as ot,f as at,g as Re,h as be,s as ut,k as ct,l as L,S as lt,R as F,m as ft,p as dt}from"./index-t1rrV4Sx.js";var ht=function(e){st(t,e);function t(n,i){var s;return s=e.call(this)||this,s.client=n,s.options=i,s.trackedProps=[],s.selectError=null,s.bindMethods(),s.setOptions(i),s}var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Ee(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return Y(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return Y(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(i,s){var o=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var h=this.hasListeners();h&&Se(this.currentQuery,a,this.options,o)&&this.executeFetch(),this.updateResult(s),h&&(this.currentQuery!==a||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();h&&(this.currentQuery!==a||this.options.enabled!==o.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},r.getOptimisticResult=function(i){var s=this.client.defaultQueryObserverOptions(i),o=this.client.getQueryCache().build(this.client,s);return this.createResult(o,s)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(i,s){var o=this,a={},h=function(l){o.trackedProps.includes(l)||o.trackedProps.push(l)};return Object.keys(i).forEach(function(f){Object.defineProperty(a,f,{configurable:!1,enumerable:!0,get:function(){return h(f),i[f]}})}),(s.useErrorBoundary||s.suspense)&&h("error"),a},r.getNextResult=function(i){var s=this;return new Promise(function(o,a){var h=s.subscribe(function(f){f.isFetching||(h(),f.isError&&(i!=null&&i.throwOnError)?a(f.error):o(f))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(i){return this.fetch(pe({},i,{meta:{refetchPage:i==null?void 0:i.refetchPage}}))},r.fetchOptimistic=function(i){var s=this,o=this.client.defaultQueryObserverOptions(i),a=this.client.getQueryCache().build(this.client,o);return a.fetch().then(function(){return s.createResult(a,o)})},r.fetch=function(i){var s=this;return this.executeFetch(i).then(function(){return s.updateResult(),s.currentResult})},r.executeFetch=function(i){this.updateQuery();var s=this.currentQuery.fetch(this.options,i);return i!=null&&i.throwOnError||(s=s.catch(it)),s},r.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(me||this.currentResult.isStale||!ye(this.options.staleTime))){var s=ot(this.currentResult.dataUpdatedAt,this.options.staleTime),o=s+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},o)}},r.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},r.updateRefetchInterval=function(i){var s=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(me||this.options.enabled===!1||!ye(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(s.options.refetchIntervalInBackground||at.isFocused())&&s.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(i,s){var o=this.currentQuery,a=this.options,h=this.currentResult,f=this.currentResultState,l=this.currentResultOptions,c=i!==o,y=c?i.state:this.currentQueryInitialState,b=c?this.currentResult:this.previousQueryResult,d=i.state,p=d.dataUpdatedAt,E=d.error,O=d.errorUpdatedAt,w=d.isFetching,R=d.status,j=!1,de=!1,v;if(s.optimisticResults){var he=this.hasListeners(),tt=!he&&Ee(i,s),rt=he&&Se(i,o,s,a);(tt||rt)&&(w=!0,p||(R="loading"))}if(s.keepPreviousData&&!d.dataUpdateCount&&(b!=null&&b.isSuccess)&&R!=="error")v=b.data,p=b.dataUpdatedAt,R=b.status,j=!0;else if(s.select&&typeof d.data<"u")if(h&&d.data===(f==null?void 0:f.data)&&s.select===this.selectFn)v=this.selectResult;else try{this.selectFn=s.select,v=s.select(d.data),s.structuralSharing!==!1&&(v=Re(h==null?void 0:h.data,v)),this.selectResult=v,this.selectError=null}catch(_){be().error(_),this.selectError=_}else v=d.data;if(typeof s.placeholderData<"u"&&typeof v>"u"&&(R==="loading"||R==="idle")){var C;if(h!=null&&h.isPlaceholderData&&s.placeholderData===(l==null?void 0:l.placeholderData))C=h.data;else if(C=typeof s.placeholderData=="function"?s.placeholderData():s.placeholderData,s.select&&typeof C<"u")try{C=s.select(C),s.structuralSharing!==!1&&(C=Re(h==null?void 0:h.data,C)),this.selectError=null}catch(_){be().error(_),this.selectError=_}typeof C<"u"&&(R="success",v=C,de=!0)}this.selectError&&(E=this.selectError,v=this.selectResult,O=Date.now(),R="error");var nt={status:R,isLoading:R==="loading",isSuccess:R==="success",isError:R==="error",isIdle:R==="idle",data:v,dataUpdatedAt:p,error:E,errorUpdatedAt:O,failureCount:d.fetchFailureCount,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>y.dataUpdateCount||d.errorUpdateCount>y.errorUpdateCount,isFetching:w,isRefetching:w&&R!=="loading",isLoadingError:R==="error"&&d.dataUpdatedAt===0,isPlaceholderData:de,isPreviousData:j,isRefetchError:R==="error"&&d.dataUpdatedAt!==0,isStale:ie(i,s),refetch:this.refetch,remove:this.remove};return nt},r.shouldNotifyListeners=function(i,s){if(!s)return!0;var o=this.options,a=o.notifyOnChangeProps,h=o.notifyOnChangePropsExclusions;if(!a&&!h||a==="tracked"&&!this.trackedProps.length)return!0;var f=a==="tracked"?this.trackedProps:a;return Object.keys(i).some(function(l){var c=l,y=i[c]!==s[c],b=f==null?void 0:f.some(function(p){return p===l}),d=h==null?void 0:h.some(function(p){return p===l});return y&&!d&&(!f||b)})},r.updateResult=function(i){var s=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!ut(this.currentResult,s)){var o={cache:!0};(i==null?void 0:i.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,s)&&(o.listeners=!0),this.notify(pe({},o,i))}},r.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var s=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(s==null||s.removeObserver(this),i.addObserver(this))}},r.onQueryUpdate=function(i){var s={};i.type==="success"?s.onSuccess=!0:i.type==="error"&&!ct(i.error)&&(s.onError=!0),this.updateResult(s),this.hasListeners()&&this.updateTimers()},r.notify=function(i){var s=this;L.batch(function(){i.onSuccess?(s.options.onSuccess==null||s.options.onSuccess(s.currentResult.data),s.options.onSettled==null||s.options.onSettled(s.currentResult.data,null)):i.onError&&(s.options.onError==null||s.options.onError(s.currentResult.error),s.options.onSettled==null||s.options.onSettled(void 0,s.currentResult.error)),i.listeners&&s.listeners.forEach(function(o){o(s.currentResult)}),i.cache&&s.client.getQueryCache().notify({query:s.currentQuery,type:"observerResultsUpdated"})})},t}(lt);function pt(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Ee(e,t){return pt(e,t)||e.state.dataUpdatedAt>0&&Y(e,t,t.refetchOnMount)}function Y(e,t,r){if(t.enabled!==!1){var n=typeof r=="function"?r(e):r;return n==="always"||n!==!1&&ie(e,t)}return!1}function Se(e,t,r,n){return r.enabled!==!1&&(e!==t||n.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&ie(e,r)}function ie(e,t){return e.isStaleByTime(t.staleTime)}function mt(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var yt=F.createContext(mt()),Rt=function(){return F.useContext(yt)};function bt(e,t,r){return typeof t=="function"?t.apply(void 0,r):typeof t=="boolean"?t:!!e}function Et(e,t){var r=F.useRef(!1),n=F.useState(0),i=n[1],s=ft(),o=Rt(),a=s.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=L.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=L.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=L.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(o.isReset()||(a.retryOnMount=!1));var h=F.useState(function(){return new t(s,a)}),f=h[0],l=f.getOptimisticResult(a);if(F.useEffect(function(){r.current=!0,o.clearReset();var c=f.subscribe(L.batchCalls(function(){r.current&&i(function(y){return y+1})}));return f.updateResult(),function(){r.current=!1,c()}},[o,f]),F.useEffect(function(){f.setOptions(a,{listeners:!1})},[a,f]),a.suspense&&l.isLoading)throw f.fetchOptimistic(a).then(function(c){var y=c.data;a.onSuccess==null||a.onSuccess(y),a.onSettled==null||a.onSettled(y,null)}).catch(function(c){o.clearReset(),a.onError==null||a.onError(c),a.onSettled==null||a.onSettled(void 0,c)});if(l.isError&&!o.isReset()&&!l.isFetching&&bt(a.suspense,a.useErrorBoundary,[l.error,f.getCurrentQuery()]))throw l.error;return a.notifyOnChangeProps==="tracked"&&(l=f.trackResult(l,a)),l}function kr(e,t,r){var n=dt(e,t,r);return Et(n,ht)}function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:St}=Object.prototype,{getPrototypeOf:oe}=Object,$=(e=>t=>{const r=St.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>$(t)===e),z=e=>t=>typeof t===e,{isArray:U}=Array,B=z("undefined");function Ot(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=A("ArrayBuffer");function wt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const gt=z("string"),g=z("function"),Ie=z("number"),J=e=>e!==null&&typeof e=="object",vt=e=>e===!0||e===!1,Q=e=>{if($(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Tt=A("Date"),At=A("File"),Ct=A("Blob"),Pt=A("FileList"),xt=e=>J(e)&&g(e.pipe),Ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=$(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},Nt=A("URLSearchParams"),Ut=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),U(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let a;for(n=0;n<o;n++)a=s[n],t.call(null,e[a],a,e)}}function Le(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const Be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),De=e=>!B(e)&&e!==Be;function ee(){const{caseless:e}=De(this)&&this||{},t={},r=(n,i)=>{const s=e&&Le(t,i)||i;Q(t[s])&&Q(n)?t[s]=ee(t[s],n):Q(n)?t[s]=ee({},n):U(n)?t[s]=n.slice():t[s]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&D(arguments[n],r);return t}const _t=(e,t,r,{allOwnKeys:n}={})=>(D(t,(i,s)=>{r&&g(i)?e[s]=Ue(i,r):e[s]=i},{allOwnKeys:n}),e),It=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Bt=(e,t,r,n)=>{let i,s,o;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=r!==!1&&oe(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Dt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},kt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ie(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),Qt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},Mt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Ht=A("HTMLFormElement"),qt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Oe=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),$t=A("RegExp"),ke=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};D(r,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(n[s]=o||i)}),Object.defineProperties(e,n)},zt=e=>{ke(e,(t,r)=>{if(g(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(g(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Jt=(e,t)=>{const r={},n=i=>{i.forEach(s=>{r[s]=!0})};return U(e)?n(e):n(String(e).split(t)),r},Vt=()=>{},Wt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",we="0123456789",je={DIGIT:we,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+we},Kt=(e=16,t=je.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Gt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Xt=e=>{const t=new Array(10),r=(n,i)=>{if(J(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const s=U(n)?[]:{};return D(n,(o,a)=>{const h=r(o,i+1);!B(h)&&(s[a]=h)}),t[i]=void 0,s}}return n};return r(e,0)},Zt=A("AsyncFunction"),Yt=e=>e&&(J(e)||g(e))&&g(e.then)&&g(e.catch),u={isArray:U,isArrayBuffer:_e,isBuffer:Ot,isFormData:Ft,isArrayBufferView:wt,isString:gt,isNumber:Ie,isBoolean:vt,isObject:J,isPlainObject:Q,isUndefined:B,isDate:Tt,isFile:At,isBlob:Ct,isRegExp:$t,isFunction:g,isStream:xt,isURLSearchParams:Nt,isTypedArray:jt,isFileList:Pt,forEach:D,merge:ee,extend:_t,trim:Ut,stripBOM:It,inherits:Lt,toFlatObject:Bt,kindOf:$,kindOfTest:A,endsWith:Dt,toArray:kt,forEachEntry:Qt,matchAll:Mt,isHTMLForm:Ht,hasOwnProperty:Oe,hasOwnProp:Oe,reduceDescriptors:ke,freezeMethods:zt,toObjectSet:Jt,toCamelCase:qt,noop:Vt,toFiniteNumber:Wt,findKey:Le,global:Be,isContextDefined:De,ALPHABET:je,generateString:Kt,isSpecCompliantForm:Gt,toJSONObject:Xt,isAsyncFn:Zt,isThenable:Yt};function m(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}u.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qe=m.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(m,Me);Object.defineProperty(Qe,"isAxiosError",{value:!0});m.from=(e,t,r,n,i,s)=>{const o=Object.create(Qe);return u.toFlatObject(e,o,function(h){return h!==Error.prototype},a=>a!=="isAxiosError"),m.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const er=null;function te(e){return u.isPlainObject(e)||u.isArray(e)}function He(e){return u.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,r){return e?e.concat(t).map(function(i,s){return i=He(i),!r&&s?"["+i+"]":i}).join(r?".":""):t}function tr(e){return u.isArray(e)&&!e.some(te)}const rr=u.toFlatObject(u,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,r){if(!u.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=u.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,E){return!u.isUndefined(E[p])});const n=r.metaTokens,i=r.visitor||l,s=r.dots,o=r.indexes,h=(r.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(t);if(!u.isFunction(i))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(u.isDate(d))return d.toISOString();if(!h&&u.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(d)||u.isTypedArray(d)?h&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,p,E){let O=d;if(d&&!E&&typeof d=="object"){if(u.endsWith(p,"{}"))p=n?p:p.slice(0,-2),d=JSON.stringify(d);else if(u.isArray(d)&&tr(d)||(u.isFileList(d)||u.endsWith(p,"[]"))&&(O=u.toArray(d)))return p=He(p),O.forEach(function(R,j){!(u.isUndefined(R)||R===null)&&t.append(o===!0?ge([p],j,s):o===null?p:p+"[]",f(R))}),!1}return te(d)?!0:(t.append(ge(E,p,s),f(d)),!1)}const c=[],y=Object.assign(rr,{defaultVisitor:l,convertValue:f,isVisitable:te});function b(d,p){if(!u.isUndefined(d)){if(c.indexOf(d)!==-1)throw Error("Circular reference detected in "+p.join("."));c.push(d),u.forEach(d,function(O,w){(!(u.isUndefined(O)||O===null)&&i.call(t,O,u.isString(w)?w.trim():w,p,y))===!0&&b(O,p?p.concat(w):[w])}),c.pop()}}if(!u.isObject(e))throw new TypeError("data must be an object");return b(e),t}function ve(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ae(e,t){this._pairs=[],e&&V(e,this,t)}const qe=ae.prototype;qe.append=function(t,r){this._pairs.push([t,r])};qe.toString=function(t){const r=t?function(n){return t.call(this,n,ve)}:ve;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function nr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,r){if(!t)return e;const n=r&&r.encode||nr,i=r&&r.serialize;let s;if(i?s=i(t,r):s=u.isURLSearchParams(t)?t.toString():new ae(t,r).toString(n),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class sr{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){u.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Te=sr,ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ir=typeof URLSearchParams<"u"?URLSearchParams:ae,or=typeof FormData<"u"?FormData:null,ar=typeof Blob<"u"?Blob:null,ur={isBrowser:!0,classes:{URLSearchParams:ir,FormData:or,Blob:ar},protocols:["http","https","file","blob","url","data"]},Je=typeof window<"u"&&typeof document<"u",cr=(e=>Je&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),lr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),fr=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Je,hasStandardBrowserEnv:cr,hasStandardBrowserWebWorkerEnv:lr},Symbol.toStringTag,{value:"Module"})),T={...fr,...ur};function dr(e,t){return V(e,new T.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,s){return T.isNode&&u.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function hr(e){return u.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pr(e){const t={},r=Object.keys(e);let n;const i=r.length;let s;for(n=0;n<i;n++)s=r[n],t[s]=e[s];return t}function Ve(e){function t(r,n,i,s){let o=r[s++];const a=Number.isFinite(+o),h=s>=r.length;return o=!o&&u.isArray(i)?i.length:o,h?(u.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a):((!i[o]||!u.isObject(i[o]))&&(i[o]=[]),t(r,n,i[o],s)&&u.isArray(i[o])&&(i[o]=pr(i[o])),!a)}if(u.isFormData(e)&&u.isFunction(e.entries)){const r={};return u.forEachEntry(e,(n,i)=>{t(hr(n),i,r,0)}),r}return null}function mr(e,t,r){if(u.isString(e))try{return(t||JSON.parse)(e),u.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ue={transitional:ze,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,s=u.isObject(t);if(s&&u.isHTMLForm(t)&&(t=new FormData(t)),u.isFormData(t))return i&&i?JSON.stringify(Ve(t)):t;if(u.isArrayBuffer(t)||u.isBuffer(t)||u.isStream(t)||u.isFile(t)||u.isBlob(t))return t;if(u.isArrayBufferView(t))return t.buffer;if(u.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return dr(t,this.formSerializer).toString();if((a=u.isFileList(t))||n.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return V(a?{"files[]":t}:t,h&&new h,this.formSerializer)}}return s||i?(r.setContentType("application/json",!1),mr(t)):t}],transformResponse:[function(t){const r=this.transitional||ue.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&u.isString(t)&&(n&&!this.responseType||i)){const o=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?m.from(a,m.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],e=>{ue.headers[e]={}});const ce=ue,yr=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rr=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!r||t[r]&&yr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Ae=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:u.isArray(e)?e.map(M):String(e)}function br(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Er=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,r,n,i){if(u.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!u.isString(t)){if(u.isString(n))return t.indexOf(n)!==-1;if(u.isRegExp(n))return n.test(t)}}function Sr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Or(e,t){const r=u.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,s,o){return this[n].call(this,t,i,s,o)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function s(a,h,f){const l=I(h);if(!l)throw new Error("header name must be a non-empty string");const c=u.findKey(i,l);(!c||i[c]===void 0||f===!0||f===void 0&&i[c]!==!1)&&(i[c||h]=M(a))}const o=(a,h)=>u.forEach(a,(f,l)=>s(f,l,h));return u.isPlainObject(t)||t instanceof this.constructor?o(t,r):u.isString(t)&&(t=t.trim())&&!Er(t)?o(Rr(t),r):t!=null&&s(r,t,n),this}get(t,r){if(t=I(t),t){const n=u.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return br(i);if(u.isFunction(r))return r.call(this,i,n);if(u.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=I(t),t){const n=u.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||G(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function s(o){if(o=I(o),o){const a=u.findKey(n,o);a&&(!r||G(n,n[a],a,r))&&(delete n[a],i=!0)}}return u.isArray(t)?t.forEach(s):s(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const s=r[n];(!t||G(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const r=this,n={};return u.forEach(this,(i,s)=>{const o=u.findKey(n,s);if(o){r[o]=M(i),delete r[s];return}const a=t?Sr(s):String(s).trim();a!==s&&delete r[s],r[a]=M(i),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return u.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&u.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[Ae]=this[Ae]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=I(o);n[a]||(Or(i,o),n[a]=!0)}return u.isArray(t)?t.forEach(s):s(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(W.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});u.freezeMethods(W);const P=W;function X(e,t){const r=this||ce,n=t||r,i=P.from(n.headers);let s=n.data;return u.forEach(e,function(a){s=a.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function We(e){return!!(e&&e.__CANCEL__)}function k(e,t,r){m.call(this,e??"canceled",m.ERR_CANCELED,t,r),this.name="CanceledError"}u.inherits(k,m,{__CANCEL__:!0});function wr(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const gr=T.hasStandardBrowserEnv?{write(e,t,r,n,i,s){const o=[e+"="+encodeURIComponent(t)];u.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),u.isString(n)&&o.push("path="+n),u.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function vr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Tr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ke(e,t){return e&&!vr(t)?Tr(e,t):t}const Ar=T.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(s){let o=s;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(o){const a=u.isString(o)?i(o):o;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function Cr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Pr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(h){const f=Date.now(),l=n[s];o||(o=f),r[i]=h,n[i]=f;let c=s,y=0;for(;c!==i;)y+=r[c++],c=c%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),f-o<t)return;const b=l&&f-l;return b?Math.round(y*1e3/b):void 0}}function Ce(e,t){let r=0;const n=Pr(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-r,h=n(a),f=s<=o;r=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:h||void 0,estimated:h&&o&&f?(o-s)/h:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const xr=typeof XMLHttpRequest<"u",Fr=xr&&function(e){return new Promise(function(r,n){let i=e.data;const s=P.from(e.headers).normalize();let{responseType:o,withXSRFToken:a}=e,h;function f(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let l;if(u.isFormData(i)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((l=s.getContentType())!==!1){const[p,...E]=l?l.split(";").map(O=>O.trim()).filter(Boolean):[];s.setContentType([p||"multipart/form-data",...E].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+E))}const y=Ke(e.baseURL,e.url);c.open(e.method.toUpperCase(),$e(y,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const p=P.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),O={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:e,request:c};wr(function(R){r(R),f()},function(R){n(R),f()},O),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(n(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const O=e.transitional||ze;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),n(new m(E,O.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},T.hasStandardBrowserEnv&&(a&&u.isFunction(a)&&(a=a(e)),a||a!==!1&&Ar(y))){const p=e.xsrfHeaderName&&e.xsrfCookieName&&gr.read(e.xsrfCookieName);p&&s.set(e.xsrfHeaderName,p)}i===void 0&&s.setContentType(null),"setRequestHeader"in c&&u.forEach(s.toJSON(),function(E,O){c.setRequestHeader(O,E)}),u.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=p=>{c&&(n(!p||p.type?new k(null,e,c):p),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const d=Cr(y);if(d&&T.protocols.indexOf(d)===-1){n(new m("Unsupported protocol "+d+":",m.ERR_BAD_REQUEST,e));return}c.send(i||null)})},re={http:er,xhr:Fr};u.forEach(re,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pe=e=>`- ${e}`,Nr=e=>u.isFunction(e)||e===null||e===!1,Ge={getAdapter:e=>{e=u.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let s=0;s<t;s++){r=e[s];let o;if(n=r,!Nr(r)&&(n=re[(o=String(r)).toLowerCase()],n===void 0))throw new m(`Unknown adapter '${o}'`);if(n)break;i[o||"#"+s]=n}if(!n){const s=Object.entries(i).map(([a,h])=>`adapter ${a} `+(h===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(Pe).join(`
`):" "+Pe(s[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return n},adapters:re};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function xe(e){return Z(e),e.headers=P.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ge.getAdapter(e.adapter||ce.adapter)(e).then(function(n){return Z(e),n.data=X.call(e,e.transformResponse,n),n.headers=P.from(n.headers),n},function(n){return We(n)||(Z(e),n&&n.response&&(n.response.data=X.call(e,e.transformResponse,n.response),n.response.headers=P.from(n.response.headers))),Promise.reject(n)})}const Fe=e=>e instanceof P?e.toJSON():e;function N(e,t){t=t||{};const r={};function n(f,l,c){return u.isPlainObject(f)&&u.isPlainObject(l)?u.merge.call({caseless:c},f,l):u.isPlainObject(l)?u.merge({},l):u.isArray(l)?l.slice():l}function i(f,l,c){if(u.isUndefined(l)){if(!u.isUndefined(f))return n(void 0,f,c)}else return n(f,l,c)}function s(f,l){if(!u.isUndefined(l))return n(void 0,l)}function o(f,l){if(u.isUndefined(l)){if(!u.isUndefined(f))return n(void 0,f)}else return n(void 0,l)}function a(f,l,c){if(c in t)return n(f,l);if(c in e)return n(void 0,f)}const h={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(f,l)=>i(Fe(f),Fe(l),!0)};return u.forEach(Object.keys(Object.assign({},e,t)),function(l){const c=h[l]||i,y=c(e[l],t[l],l);u.isUndefined(y)&&c!==a||(r[l]=y)}),r}const Xe="1.6.2",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ne={};le.transitional=function(t,r,n){function i(s,o){return"[Axios v"+Xe+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return(s,o,a)=>{if(t===!1)throw new m(i(o," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!Ne[o]&&(Ne[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,a):!0}};function Ur(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const s=n[i],o=t[s];if(o){const a=e[s],h=a===void 0||o(a,s,e);if(h!==!0)throw new m("option "+s+" must be "+h,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const ne={assertOptions:Ur,validators:le},x=ne.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=N(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:s}=r;n!==void 0&&ne.assertOptions(n,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),i!=null&&(u.isFunction(i)?r.paramsSerializer={serialize:i}:ne.assertOptions(i,{encode:x.function,serialize:x.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=s&&u.merge(s.common,s[r.method]);s&&u.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),r.headers=P.concat(o,s);const a=[];let h=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(h=h&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});const f=[];this.interceptors.response.forEach(function(p){f.push(p.fulfilled,p.rejected)});let l,c=0,y;if(!h){const d=[xe.bind(this),void 0];for(d.unshift.apply(d,a),d.push.apply(d,f),y=d.length,l=Promise.resolve(r);c<y;)l=l.then(d[c++],d[c++]);return l}y=a.length;let b=r;for(c=0;c<y;){const d=a[c++],p=a[c++];try{b=d(b)}catch(E){p.call(this,E);break}}try{l=xe.call(this,b)}catch(d){return Promise.reject(d)}for(c=0,y=f.length;c<y;)l=l.then(f[c++],f[c++]);return l}getUri(t){t=N(this.defaults,t);const r=Ke(t.baseURL,t.url);return $e(r,t.params,t.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(r,n){return this.request(N(n||{},{method:t,url:r,data:(n||{}).data}))}});u.forEach(["post","put","patch"],function(t){function r(n){return function(s,o,a){return this.request(N(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}q.prototype[t]=r(),q.prototype[t+"Form"]=r(!0)});const H=q;class fe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{n.subscribe(a),s=a}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s,o,a){n.reason||(n.reason=new k(s,o,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new fe(function(i){t=i}),cancel:t}}}const _r=fe;function Ir(e){return function(r){return e.apply(null,r)}}function Lr(e){return u.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const Br=se;function Ze(e){const t=new H(e),r=Ue(H.prototype.request,t);return u.extend(r,H.prototype,t,{allOwnKeys:!0}),u.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return Ze(N(e,i))},r}const S=Ze(ce);S.Axios=H;S.CanceledError=k;S.CancelToken=_r;S.isCancel=We;S.VERSION=Xe;S.toFormData=V;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Ir;S.isAxiosError=Lr;S.mergeConfig=N;S.AxiosHeaders=P;S.formToJSON=e=>Ve(u.isHTMLForm(e)?new FormData(e):e);S.getAdapter=Ge.getAdapter;S.HttpStatusCode=Br;S.default=S;const Ye=S,et="https://hotels-api-4ltr.onrender.com/api",jr=()=>Ye.get(`${et}/hotels`),Qr=e=>Ye.get(`${et}/hotels/${e}`);export{Qr as a,jr as g,kr as u};