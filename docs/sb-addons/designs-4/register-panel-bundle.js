try{
(()=>{var cr=Object.defineProperty;var dr=(o,e)=>{for(var t in e)cr(o,t,{get:e[t],enumerable:!0})};var m={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."};var $e={};dr($e,{Children:()=>ur,Component:()=>ze,Fragment:()=>x,Profiler:()=>fr,PureComponent:()=>gr,StrictMode:()=>mr,Suspense:()=>Ye,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>vr,cloneElement:()=>yr,createContext:()=>br,createElement:()=>$r,createFactory:()=>_r,createRef:()=>xr,default:()=>pr,forwardRef:()=>wr,isValidElement:()=>Ar,lazy:()=>We,memo:()=>Sr,startTransition:()=>Er,unstable_act:()=>Cr,useCallback:()=>P,useContext:()=>Mr,useDebugValue:()=>Tr,useDeferredValue:()=>Pr,useEffect:()=>R,useId:()=>kr,useImperativeHandle:()=>Nr,useInsertionEffect:()=>Rr,useLayoutEffect:()=>Br,useMemo:()=>J,useReducer:()=>Or,useRef:()=>Hr,useState:()=>k,useSyncExternalStore:()=>Lr,useTransition:()=>Ir,version:()=>Ur});var pr=__REACT__,{Children:ur,Component:ze,Fragment:x,Profiler:fr,PureComponent:gr,StrictMode:mr,Suspense:Ye,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:vr,cloneElement:yr,createContext:br,createElement:$r,createFactory:_r,createRef:xr,forwardRef:wr,isValidElement:Ar,lazy:We,memo:Sr,startTransition:Er,unstable_act:Cr,useCallback:P,useContext:Mr,useDebugValue:Tr,useDeferredValue:Pr,useEffect:R,useId:kr,useImperativeHandle:Nr,useInsertionEffect:Rr,useLayoutEffect:Br,useMemo:J,useReducer:Or,useRef:Hr,useState:k,useSyncExternalStore:Lr,useTransition:Ir,version:Ur}=__REACT__;var Zi=__STORYBOOK_THEMING__,{CacheProvider:qi,ClassNames:Xi,Global:Ki,ThemeProvider:Ji,background:Qi,color:es,convert:ts,create:os,createCache:rs,createGlobal:is,createReset:ss,css:N,darken:ns,ensure:as,ignoreSsrWarning:ls,isPropValid:cs,jsx:p,keyframes:ds,lighten:hs,styled:ps,themes:us,typography:fs,useTheme:gs,withTheme:ms}=__STORYBOOK_THEMING__;var _s=__STORYBOOK_COMPONENTS__,{A:xs,ActionBar:ws,AddonPanel:Bt,Badge:As,Bar:Ss,Blockquote:Es,Button:Cs,ClipboardCode:Ms,Code:Ts,DL:Ps,Div:ks,DocumentWrapper:Ns,EmptyTabContent:Rs,ErrorFormatter:Bs,FlexBar:Ot,Form:Os,H1:Hs,H2:Ls,H3:Is,H4:Us,H5:Fs,H6:js,HR:Ds,IconButton:_e,IconButtonSkeleton:Vs,Icons:xe,Img:zs,LI:Ys,Link:ne,ListItem:Ws,Loader:Gs,Modal:Zs,OL:qs,P:Xs,Placeholder:I,Pre:Ks,ProgressSpinner:Js,ResetWrapper:Qs,ScrollArea:en,Separator:Ht,Spaced:tn,Span:on,StorybookIcon:rn,StorybookLogo:sn,Symbols:nn,SyntaxHighlighter:an,TT:ln,TabBar:cn,TabButton:dn,TabWrapper:hn,Table:pn,Tabs:Lt,TabsState:un,TooltipLinkList:fn,TooltipMessage:gn,TooltipNote:mn,UL:vn,WithTooltip:yn,WithTooltipPure:bn,Zoom:$n,codeCommon:_n,components:xn,createCopyToClipboardFunction:wn,getStoryHref:An,icons:Sn,interleaveSeparators:En,nameSpaceClassNames:Cn,resetComponents:Mn,withReset:Tn}=__STORYBOOK_COMPONENTS__;var we=window,Ae=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),It=new WeakMap,ae=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ae&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=It.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&It.set(t,e))}return e}toString(){return this.cssText}},Ut=o=>new ae(typeof o=="string"?o:o+"",void 0,Ge),C=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new ae(t,o,Ge)},Ze=(o,e)=>{Ae?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=we.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},Se=Ae?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Ut(t)})(o):o;var qe,Ee=window,Ft=Ee.trustedTypes,Fr=Ft?Ft.emptyScript:"",jt=Ee.reactiveElementPolyfillSupport,Ke={toAttribute(o,e){switch(e){case Boolean:o=o?Fr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Dt=(o,e)=>e!==o&&(e==e||o==o),Xe={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Dt},Je="finalized",H=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=Xe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Xe}static finalize(){if(this.hasOwnProperty(Je))return!1;this[Je]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(Se(i))}else e!==void 0&&t.push(Se(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ze(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Xe){var i;let s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){let n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Ke).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Ke;this._$El=s,this[s]=d.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Dt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};H[Je]=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},jt?.({ReactiveElement:H}),((qe=Ee.reactiveElementVersions)!==null&&qe!==void 0?qe:Ee.reactiveElementVersions=[]).push("1.6.3");var Qe,Ce=window,Q=Ce.trustedTypes,Vt=Q?Q.createPolicy("lit-html",{createHTML:o=>o}):void 0,tt="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,Xt="?"+U,jr=`<${Xt}>`,Y=document,Me=()=>Y.createComment(""),ce=o=>o===null||typeof o!="object"&&typeof o!="function",Kt=Array.isArray,Dr=o=>Kt(o)||typeof o?.[Symbol.iterator]=="function",et=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Yt=/>/g,V=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,Gt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Qt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),zn=Qt(1),Yn=Qt(2),W=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Zt=new WeakMap,z=Y.createTreeWalker(Y,129,null,!1);function eo(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vt!==void 0?Vt.createHTML(e):e}var Vr=(o,e)=>{let t=o.length-1,r=[],i,s=e===2?"<svg>":"",n=le;for(let d=0;d<t;d++){let a=o[d],c,l,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,l=n.exec(a),l!==null);)u=n.lastIndex,n===le?l[1]==="!--"?n=zt:l[1]!==void 0?n=Yt:l[2]!==void 0?(Jt.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=V):l[3]!==void 0&&(n=V):n===V?l[0]===">"?(n=i??le,h=-1):l[1]===void 0?h=-2:(h=n.lastIndex-l[2].length,c=l[1],n=l[3]===void 0?V:l[3]==='"'?Gt:Wt):n===Gt||n===Wt?n=V:n===zt||n===Yt?n=le:(n=V,i=void 0);let f=n===V&&o[d+1].startsWith("/>")?" ":"";s+=n===le?a+jr:h>=0?(r.push(c),a.slice(0,h)+tt+a.slice(h)+U+f):a+U+(h===-2?(r.push(void 0),d):f)}return[eo(o,s+(o[t]||"<?>")+(e===2?"</svg>":"")),r]},de=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,n=0,d=e.length-1,a=this.parts,[c,l]=Vr(e,t);if(this.el=o.createElement(c,r),z.currentNode=this.el.content,t===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=z.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith(tt)||u.startsWith(U)){let f=l[n++];if(h.push(u),f!==void 0){let g=i.getAttribute(f.toLowerCase()+tt).split(U),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?rt:b[1]==="?"?it:b[1]==="@"?st:te})}else a.push({type:6,index:s})}for(let u of h)i.removeAttribute(u)}if(Jt.test(i.tagName)){let h=i.textContent.split(U),u=h.length-1;if(u>0){i.textContent=Q?Q.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],Me()),z.nextNode(),a.push({type:2,index:++s});i.append(h[u],Me())}}}else if(i.nodeType===8)if(i.data===Xt)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(U,h+1))!==-1;)a.push({type:7,index:s}),h+=U.length-1}s++}}static createElement(e,t){let r=Y.createElement("template");return r.innerHTML=e,r}};function ee(o,e,t=o,r){var i,s,n,d;if(e===W)return e;let a=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,c=ce(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(o),a._$AT(o,t,r)),r!==void 0?((n=(d=t)._$Co)!==null&&n!==void 0?n:d._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=ee(o,a._$AS(o,e.values),a,r)),e}var ot=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:Y).importNode(r,!0);z.currentNode=s;let n=z.nextNode(),d=0,a=0,c=i[0];for(;c!==void 0;){if(d===c.index){let l;c.type===2?l=new Te(n,n.nextSibling,this,e):c.type===1?l=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(l=new nt(n,this,e)),this._$AV.push(l),c=i[++a]}d!==c?.index&&(n=z.nextNode(),d++)}return z.currentNode=Y,s}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Te=class o{constructor(e,t,r,i){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),ce(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Dr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==w&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.$(Y.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=de.createElement(eo(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{let n=new ot(s,this),d=n.u(this.options);n.v(r),this.$(d),this._$AH=n}}_$AC(e){let t=Zt.get(e.strings);return t===void 0&&Zt.set(e.strings,t=new de(e)),t}T(e){Kt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let s of e)i===t.length?t.push(r=new o(this.k(Me()),this.k(Me()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},te=class{constructor(e,t,r,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let s=this.strings,n=!1;if(s===void 0)e=ee(this,e,t,0),n=!ce(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{let d=e,a,c;for(e=s[0],a=0;a<s.length-1;a++)c=ee(this,d[r+a],t,a),c===W&&(c=this._$AH[a]),n||(n=!ce(c)||c!==this._$AH[a]),c===w?e=w:e!==w&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}n&&!i&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},rt=class extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},zr=Q?Q.emptyScript:"",it=class extends te{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,zr):this.element.removeAttribute(this.name)}},st=class extends te{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=ee(this,e,t,0))!==null&&r!==void 0?r:w)===W)return;let i=this._$AH,s=e===w&&i!==w||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==w&&(i===w||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},nt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}};var qt=Ce.litHtmlPolyfillSupport;qt?.(de,Te),((Qe=Ce.litHtmlVersions)!==null&&Qe!==void 0?Qe:Ce.litHtmlVersions=[]).push("2.8.0");var at,Pe=window,oe=Pe.trustedTypes,to=oe?oe.createPolicy("lit-html",{createHTML:o=>o}):void 0,ct="$lit$",F=`lit$${(Math.random()+"").slice(9)}$`,lo="?"+F,Yr=`<${lo}>`,q=document,pe=()=>q.createComment(""),ue=o=>o===null||typeof o!="object"&&typeof o!="function",co=Array.isArray,Wr=o=>co(o)||typeof o?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oo=/-->/g,ro=/>/g,G=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),io=/'/g,so=/"/g,ho=/^(?:script|style|textarea|title)$/i,po=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),$=po(1),M=po(2),X=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),no=new WeakMap,Z=q.createTreeWalker(q,129,null,!1);function uo(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return to!==void 0?to.createHTML(e):e}var Gr=(o,e)=>{let t=o.length-1,r=[],i,s=e===2?"<svg>":"",n=he;for(let d=0;d<t;d++){let a=o[d],c,l,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,l=n.exec(a),l!==null);)u=n.lastIndex,n===he?l[1]==="!--"?n=oo:l[1]!==void 0?n=ro:l[2]!==void 0?(ho.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=G):l[3]!==void 0&&(n=G):n===G?l[0]===">"?(n=i??he,h=-1):l[1]===void 0?h=-2:(h=n.lastIndex-l[2].length,c=l[1],n=l[3]===void 0?G:l[3]==='"'?so:io):n===so||n===io?n=G:n===oo||n===ro?n=he:(n=G,i=void 0);let f=n===G&&o[d+1].startsWith("/>")?" ":"";s+=n===he?a+Yr:h>=0?(r.push(c),a.slice(0,h)+ct+a.slice(h)+F+f):a+F+(h===-2?(r.push(void 0),d):f)}return[uo(o,s+(o[t]||"<?>")+(e===2?"</svg>":"")),r]},fe=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,n=0,d=e.length-1,a=this.parts,[c,l]=Gr(e,t);if(this.el=o.createElement(c,r),Z.currentNode=this.el.content,t===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=Z.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith(ct)||u.startsWith(F)){let f=l[n++];if(h.push(u),f!==void 0){let g=i.getAttribute(f.toLowerCase()+ct).split(F),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?ht:b[1]==="?"?pt:b[1]==="@"?ut:ie})}else a.push({type:6,index:s})}for(let u of h)i.removeAttribute(u)}if(ho.test(i.tagName)){let h=i.textContent.split(F),u=h.length-1;if(u>0){i.textContent=oe?oe.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],pe()),Z.nextNode(),a.push({type:2,index:++s});i.append(h[u],pe())}}}else if(i.nodeType===8)if(i.data===lo)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(F,h+1))!==-1;)a.push({type:7,index:s}),h+=F.length-1}s++}}static createElement(e,t){let r=q.createElement("template");return r.innerHTML=e,r}};function re(o,e,t=o,r){var i,s,n,d;if(e===X)return e;let a=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,c=ue(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(o),a._$AT(o,t,r)),r!==void 0?((n=(d=t)._$Co)!==null&&n!==void 0?n:d._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=re(o,a._$AS(o,e.values),a,r)),e}var dt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:q).importNode(r,!0);Z.currentNode=s;let n=Z.nextNode(),d=0,a=0,c=i[0];for(;c!==void 0;){if(d===c.index){let l;c.type===2?l=new ge(n,n.nextSibling,this,e):c.type===1?l=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(l=new ft(n,this,e)),this._$AV.push(l),c=i[++a]}d!==c?.index&&(n=Z.nextNode(),d++)}return Z.currentNode=q,s}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ge=class o{constructor(e,t,r,i){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),ue(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Wr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(q.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=fe.createElement(uo(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{let n=new dt(s,this),d=n.u(this.options);n.v(r),this.$(d),this._$AH=n}}_$AC(e){let t=no.get(e.strings);return t===void 0&&no.set(e.strings,t=new fe(e)),t}T(e){co(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let s of e)i===t.length?t.push(r=new o(this.k(pe()),this.k(pe()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ie=class{constructor(e,t,r,i,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let s=this.strings,n=!1;if(s===void 0)e=re(this,e,t,0),n=!ue(e)||e!==this._$AH&&e!==X,n&&(this._$AH=e);else{let d=e,a,c;for(e=s[0],a=0;a<s.length-1;a++)c=re(this,d[r+a],t,a),c===X&&(c=this._$AH[a]),n||(n=!ue(c)||c!==this._$AH[a]),c===A?e=A:e!==A&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}n&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ht=class extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Zr=oe?oe.emptyScript:"",pt=class extends ie{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Zr):this.element.removeAttribute(this.name)}},ut=class extends ie{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=re(this,e,t,0))!==null&&r!==void 0?r:A)===X)return;let i=this._$AH,s=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==A&&(i===A||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ft=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}};var ao=Pe.litHtmlPolyfillSupport;ao?.(fe,ge),((at=Pe.litHtmlVersions)!==null&&at!==void 0?at:Pe.litHtmlVersions=[]).push("2.8.0");var fo=(o,e,t)=>{var r,i;let s=(r=t?.renderBefore)!==null&&r!==void 0?r:e,n=s._$litPart$;if(n===void 0){let d=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new ge(e.insertBefore(pe(),d),d,void 0,t??{})}return n._$AI(o),n};var gt,mt;var B=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return X}};B.finalized=!0,B._$litElement$=!0,(gt=globalThis.litElementHydrateSupport)===null||gt===void 0||gt.call(globalThis,{LitElement:B});var go=globalThis.litElementPolyfillSupport;go?.({LitElement:B});((mt=globalThis.litElementVersions)!==null&&mt!==void 0?mt:globalThis.litElementVersions=[]).push("3.3.3");var qr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},Xr=(o,e,t)=>{e.constructor.createProperty(t,o)};function S(o){return(e,t)=>t!==void 0?Xr(o,e,t):qr(o,e)}var vt,il=((vt=window.HTMLSlotElement)===null||vt===void 0?void 0:vt.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var L=({title:o,children:e})=>$`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,mo=C`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`;var vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yo=o=>(...e)=>({_$litDirective$:o,values:e}),ke=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var bo="important",Kr=" !"+bo,K=yo(class extends ke{constructor(o){var e;if(super(o),o.type!==vo.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ht===void 0){this.ht=new Set;for(let r in e)this.ht.add(r);return this.render(e)}this.ht.forEach(r=>{e[r]==null&&(this.ht.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];if(i!=null){this.ht.add(r);let s=typeof i=="string"&&i.endsWith(Kr);r.includes("-")||s?t.setProperty(r,s?i.slice(0,-11):i,s?bo:""):t[r]=i}}return W}});function $o(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function xo(o,e){let t=$o(o),r=$o(e),i=!(t.top>r.bottom||t.bottom<r.top),s=!(t.left>r.right||t.right<r.left);if(s&&i){let l={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:l.y},{x:r.left,y:l.y}]},{points:[{x:t.right,y:l.y},{x:r.right,y:l.y}]},{points:[{y:t.top,x:l.x},{y:r.top,x:l.x}]},{points:[{y:t.bottom,x:l.x},{y:r.bottom,x:l.x}]}]}let n=t.left>r.right,d=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[s?null:{points:[{x:n?t.left:t.right,y:a.y},{x:n?r.right:r.left,y:a.y}],bisector:i?void 0:[{x:n?r.right:r.left,y:a.y},{x:n?r.right:r.left,y:d?r.bottom:r.top}]},i?null:{points:[{y:d?t.top:t.bottom,x:a.x},{y:d?r.bottom:r.top,x:a.x}],bisector:s?void 0:[{y:d?r.bottom:r.top,x:a.x},{y:d?r.bottom:r.top,x:n?r.right:r.left}]}].filter(l=>!!l)}function ve(o){return Math.round(o*100)/100}function Ne(o,e){return[..._o(o),..._o(e)]}function _o(o){return o?o instanceof Array?o:[o]:[]}var Jr=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},wo=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return Jr([S({attribute:!1})],e.prototype,"selectedNode",void 0),e};function Re(o){return o.touches.length===0||o.touches.length>2}function Qr(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var Ao=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{Re(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{Re(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{Re(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(Re(r))return;let i=Array.from(this.previousTouches||[]),s=Array.from(r.touches);if(this.previousTouches=r.touches,!(s.length!==i.length||!s.every(n=>i.some(d=>d.identifier===n.identifier)))){if(s.length===1){this.onTouchPan({x:s[0].pageX-i[0].pageX,y:s[0].pageY-i[0].pageY});return}this.onTouchPinch(Qr({x:s[0].pageX,y:s[0].pageY},{x:i[0].pageX,y:i[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}};var ye=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},O=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},So=function(o,e,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!i:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,t):i?i.value=t:e.set(o,t),t},Eo=o=>{var e,t,r,i,s;class n extends Ao(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(l,h)=>{this.panX+=l/this.scale/window.devicePixelRatio,this.panY+=h/this.scale/window.devicePixelRatio}),r.set(this,l=>{l.code==="Space"&&!O(this,e,"f")&&(So(this,e,!0,"f"),document.body.style.cursor="grab")}),i.set(this,l=>{l.code==="Space"&&O(this,e,"f")&&(So(this,e,!1,"f"),document.body.style.cursor="auto")}),s.set(this,()=>{document.addEventListener("keyup",O(this,i,"f")),document.addEventListener("keydown",O(this,r,"f"))}),this.addEventListener("wheel",l=>{if(this.isMovable)if(l.preventDefault(),l.ctrlKey){let{deltaY:h}=l;l.deltaMode===1&&(h*=15);let u=this.scale;this.scale*=1-h/((1e3-this.zoomSpeed)*.5);let f=l.offsetX-this.offsetWidth/2,g=l.offsetY-this.offsetHeight/2;this.panX+=f/this.scale-f/u,this.panY+=g/this.scale-g/u}else{let h=this.panSpeed*.002;this.panX-=l.deltaX*h/this.scale,this.panY-=l.deltaY*h/this.scale}},{passive:!1});let c=1;this.addEventListener("gesturestart",l=>{l.preventDefault(),c=this.scale}),this.addEventListener("gesturechange",l=>{let h=l;h.preventDefault(),this.scale=c*h.scale}),this.addEventListener("pointermove",l=>{l.buttons&4&&(l.preventDefault(),O(this,t,"f").call(this,l.movementX,l.movementY))}),O(this,s,"f").call(this),this.onmousedown=()=>{O(this,e,"f")&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:l,movementY:h})=>{O(this,t,"f").call(this,l,h)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",O(this,i,"f")),document.removeEventListener("keydown",O(this,r,"f")),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,ye([S({attribute:!1})],n.prototype,"panX",void 0),ye([S({attribute:!1})],n.prototype,"panY",void 0),ye([S({attribute:!1})],n.prototype,"scale",void 0),ye([S({type:Number,attribute:"zoom-speed"})],n.prototype,"zoomSpeed",void 0),ye([S({type:Number,attribute:"pan-speed"})],n.prototype,"panSpeed",void 0),n};var ei=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:M`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&M`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${K({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},ti=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),i=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&i===0)return null;let s=ve(Math.max(r,i)).toString(10),n=s.length*t*.5,d=t*.25,a=t*.25,c=t*.5,l=r>i?(o.points[0].x+o.points[1].x)/2-n/2:o.points[0].x,h=r>i?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,u=[`scale(${e})`,r>i?`translate(0, ${d+a})`:`translate(${d+c}, 0)`].join(" "),f=l+n/2,g=h+t/2,b=r>i?`${f} ${h}`:`${l} ${g}`;return M`
    <g class="distance-tooltip">
      <rect
        x=${l-c}
        y=${h-a}
        rx="2"
        width=${n+c*2}
        height=${t+a*2}
        transform=${u}
        transform-origin=${b}
        stroke="none"
      />

      <text
        x=${f}
        y=${h+t-a/2}
        text-anchor="middle"
        transform=${u}
        transform-origin=${b}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${s}
      </text>
    </g>
  `},Co=new Map,Mo=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let i=o.id+`
`+e.id,s=Co.get(i);return s||(s=xo(o.absoluteBoundingBox,e.absoluteBoundingBox),Co.set(i,s)),[...s.map(n=>ei({guide:n,reverseScale:t})),...s.map(n=>ti({guide:n,reverseScale:t,fontSize:r}))]},To=C`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`;var Po=({onClick:o=()=>{}})=>M`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,bt=({onClick:o=()=>{}})=>M`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,ko=()=>M`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,No=()=>M`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Ro=()=>M`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`;var se=o=>o.a===0?"transparent":o.a<1?`rgba(${Bo(o).join(", ")}, ${o.a.toFixed(2)})`:ii(o),ri=o=>new $t(o).cssColor,$t=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>se(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},Be=class{constructor(e){var t,r,i;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(n=>n===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let n=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=se(n)}let s=(i=e.fills)===null||i===void 0?void 0:i[0];if(s&&s.visible!==!1&&(e.type==="TEXT"?this.color=se(s.color):s.type.includes("GRADIENT")?this.backgroundImage=ri(s):s.type==="SOLID"&&(this.background=se(s.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=se(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:n,radius:d,color:a}=e.effects[0];this.boxShadowColor=se(a),this.boxShadow=`${n?.x||0}px ${n?.y||0}px 0 ${d} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(_t).join(`
`)}},Bo=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],ii=o=>{let[e,t,r]=Bo(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},_t=({property:o,value:e})=>`${o}: ${e};`;var si=function(o,e,t,r){function i(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function d(l){try{c(r.next(l))}catch(h){n(h)}}function a(l){try{c(r.throw(l))}catch(h){n(h)}}function c(l){l.done?s(l.value):i(l.value).then(d,a)}c((r=r.apply(o,e||[])).next())})},xt=o=>si(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),Oo=({node:o,onClose:e})=>{if(!o)return null;let t=new Be(o),r=i=>i.stopPropagation();return $`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${Po({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?$`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?$`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&$`<p class="inspector-property">
              ${ko()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&$`<p class="inspector-property">
              ${No()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?$`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${bt({onClick:()=>xt(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${ni(t)}
    </div>
  `},ni=o=>{let e=()=>xt(o.getStyleSheet()),t=o.getStyles();return $`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${bt({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(ai)}
    </div>
  </div>`},ai=o=>{let{property:e,value:t,color:r}=o,i=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":i=$`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":i=$`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return $`<div class="css-property" @click=${()=>xt(_t(o))}>
    <span>${e}:</span>${i}<span class="css-value">${t}</span>;</span>
  </div>`},Ho=C`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`;var wt=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:i,y:s,width:n,height:d}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},c=t/2,l=(g,b)=>`M${g},${b}`,h=(g,b)=>`L${g},${b}`,u=(g,b,E)=>`A${g},${g} 0 0 1 ${b},${E}`,f=[l(a.topLeft+c,c),h(n-a.topRight,c),u(a.topRight-c,n-c,a.topRight),h(n-c,d-a.bottomRight),u(a.bottomRight-c,n-a.bottomRight,d-c),h(a.bottomLeft,d-c),u(a.bottomLeft-c,c,d-a.bottomLeft),h(c,a.topLeft),u(a.topLeft-c,a.topLeft,c),"Z"].join(" ");return M`
    <path
      class="guide"
      d=${f}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${i}, ${s})"
      ?data-selected=${e}
      @click=${r}
    />
  `},Lo=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:i,offsetY:s,reverseScale:n})=>{let d={top:`${s+e+r}px`,left:`${i+o+t/2}px`,transform:`translateX(-50%) scale(${n}) translateY(0.25em)`};return $`
    <div class="tooltip" style="${K(d)}">
      ${ve(t)} x ${ve(r)}
    </div>
  `},Io=C`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`;var di=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],Uo=o=>(typeof o=="object"?o:new Date(o)).getTime(),Fo=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let i=Uo(e)-Uo(o),s=Math.abs(i);for(let n of di)if(s>=n.gte){let d=Math.round(Math.abs(i)/n.divisor),a=i<0,c=n.unit;return c?t.format(a?d:-d,c):n.text}};var jo=C`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,Do=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return $`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${Ro()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Fo(t)}
    </span>
  </a>`};var Vo=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},T=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},At=function(o,e,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!i:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,t):i?i.value=t:e.set(o,t),t},He=o=>{var e,t,r,i,s;class n extends wo(Eo(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),i.set(this,c=>l=>{l.preventDefault(),l.stopPropagation(),this.selectedNode=c}),s.set(this,c=>{var l,h;return(h=(l=T(this,r,"f"))===null||l===void 0?void 0:l.find(u=>u.id===c))!==null&&h!==void 0?h:null})}static get styles(){let a=super.styles;return Ne(a,[C`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Io,mo,To,Ho,jo])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!T(this,e,"f")||!T(this,r,"f")?L({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?L({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?L({title:"Error",children:this.error}):this.error;let a=T(this,e,"f"),c=1/this.scale,l=`calc(var(--guide-thickness) * ${c})`,h=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),u=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return $`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([f,g])=>{var b;let E=T(this,s,"f").call(this,f);if(!E||!("absoluteBoundingBox"in E)||!(!((b=T(this,t,"f"))===null||b===void 0)&&b[E.id]))return null;let _=T(this,t,"f")[E.id];return $`
                <img
                  class="rendered-image"
                  src="${g}"
                  style=${K({top:`${E.absoluteBoundingBox.y-a.y}px`,left:`${E.absoluteBoundingBox.x-a.x}px`,marginTop:`${-_.top}px`,marginLeft:`${-_.left}px`,width:E.absoluteBoundingBox.width+_.left+_.right+"px",height:E.absoluteBoundingBox.height+_.top+_.bottom+"px"})}
                />
              `})}
            ${this.selectedNode&&Lo({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:c})}
            ${M`
            <svg
              class="guides"
              viewBox="0 0 ${a.width} ${a.height}"
              width=${a.width}
              height=${a.height}
              style=${K({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:l})}
            >
              ${this.selectedNode&&wt({node:this.selectedNode,selected:!0,computedThickness:h*c})}

              ${T(this,r,"f").map(f=>{var g;return f.id===((g=this.selectedNode)===null||g===void 0?void 0:g.id)?null:M`
                  <g>
                    ${wt({node:f,computedThickness:h*c,onClick:T(this,i,"f").call(this,f)})}
                    ${this.selectedNode&&Mo({node:f,distanceTo:this.selectedNode,reverseScale:c,fontSize:u})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Oo({node:this.selectedNode,onClose:this.deselectNode})}
          ${Do(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");At(this,e,a.type==="CANVAS"?pi(a):a.absoluteBoundingBox,"f"),At(this,r,Oe(a),"f"),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(T(this,s,"f")).filter(c=>!!c);At(this,t,a.reduce((c,l)=>"absoluteBoundingBox"in l?Object.assign(Object.assign({},c),{[l.id]:ui(l,Oe(l))}):c,{}),"f"),this.requestUpdate()}resetZoom(){if(T(this,e,"f")){let{width:a,height:c}=T(this,e,"f"),{width:l,height:h}=this.getBoundingClientRect(),u=l/(a+this.zoomMargin*2),f=h/(c+this.zoomMargin*2);this.scale=Math.min(u,f,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,Vo([S({type:Number,attribute:"zoom-margin"})],n.prototype,"zoomMargin",void 0),Vo([S({type:String,attribute:"link"})],n.prototype,"link",void 0),n};function pi(o){let e=[],t=[],r=[],i=[];for(let d of o.children){if(d.type!=="FRAME"&&d.type!=="COMPONENT")continue;let{x:a,y:c,width:l,height:h}=d.absoluteBoundingBox;e.push(a),t.push(a+l),r.push(c),i.push(c+h)}let s=Math.min(...e),n=Math.min(...r);return{x:s,y:n,width:Math.abs(Math.max(...t)-s),height:Math.abs(Math.min(...i)-n)}}function ui(o,e){let t=e.map(i=>{if(!("effects"in i))return{top:i.absoluteBoundingBox.y,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height,left:i.absoluteBoundingBox.x};let s=i.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),n=i.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),d={top:Math.max(0,...s,...n.map(a=>a.top)),right:Math.max(0,...s,...n.map(a=>a.right)),bottom:Math.max(0,...s,...n.map(a=>a.bottom)),left:Math.max(0,...s,...n.map(a=>a.left))};return{top:i.absoluteBoundingBox.y-d.top,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width+d.right,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height+d.bottom,left:i.absoluteBoundingBox.x-d.left}}),r={top:Math.min(...t.map(i=>i.top)),right:Math.max(...t.map(i=>i.right)),bottom:Math.max(...t.map(i=>i.bottom)),left:Math.min(...t.map(i=>i.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function Oe(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>Oe(t,e+1)).flat()]:o.children.map(t=>Oe(t,e+1)).flat()}var zo=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},j=class extends He(B){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return L({title:"Parameter error",children:$`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return L({title:"Parameter Error",children:$`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};zo([S({type:Object})],j.prototype,"nodes",void 0);zo([S({type:String,attribute:"rendered-image"})],j.prototype,"renderedImage",void 0);var Yo=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},St=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},Le,Et,D=class extends He(B){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,Le.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Et.set(this,e=>{var t,r;let i=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(s=>s.id===i.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return L({title:"Parameter error",children:$`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return Ne(super.styles,[C`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return $`
      <div class="controls">
        <select @change=${St(this,Et,"f")}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>$`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(St(this,Le,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(St(this,Le,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};Le=new WeakMap,Et=new WeakMap;Yo([S({type:Object,attribute:"document-node"})],D.prototype,"documentNode",void 0);Yo([S({type:Object,attribute:"rendered-images"})],D.prototype,"renderedImages",void 0);customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",D);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",j);var fi=new Set(["children","localName","ref","style","className"]),Wo=new WeakMap,gi=(o,e,t,r,i)=>{let s=i?.[e];s===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((n,d,a)=>{let c=Wo.get(n);c===void 0&&Wo.set(n,c=new Map);let l=c.get(d);a!==void 0?l===void 0?(c.set(d,l={handleEvent:a}),n.addEventListener(d,l)):l.handleEvent=a:l!==void 0&&(c.delete(d),n.removeEventListener(d,l))})(o,s,t)},mi=(o,e)=>{typeof o=="function"?o(e):o.current=e};function Ie(o=window.React,e,t,r,i){let s,n,d;if(e===void 0){let f=o;({tagName:n,elementClass:d,events:r,displayName:i}=f),s=f.react}else s=o,d=t,n=e;let a=s.Component,c=s.createElement,l=new Set(Object.keys(r??{}));class h extends a{constructor(){super(...arguments),this.o=null}t(g){if(this.o!==null)for(let b in this.i)gi(this.o,b,this.props[b],g?g[b]:void 0,r)}componentDidMount(){var g;this.t(),(g=this.o)===null||g===void 0||g.removeAttribute("defer-hydration")}componentDidUpdate(g){this.t(g)}render(){let{_$Gl:g,...b}=this.props;this.h!==g&&(this.u=_=>{g!==null&&mi(g,_),this.o=_,this.h=g}),this.i={};let E={ref:this.u};for(let[_,Ve]of Object.entries(b))fi.has(_)?E[_==="className"?"class":_]=Ve:l.has(_)||_ in d.prototype?this.i[_]=Ve:E[_]=Ve;return E.suppressHydrationWarning=!0,c(n,E)}}h.displayName=i??d.name;let u=s.forwardRef((f,g)=>c(h,{...f,_$Gl:g},f?.children));return u.displayName=h.displayName,u}var Go=Ie($e,"figspec-frame-viewer",j,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),Zo=Ie($e,"figspec-file-viewer",D,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var zd=__STORYBOOK_API__,{ActiveTabs:Yd,Consumer:Wd,ManagerContext:Gd,Provider:Zd,RequestResponseError:qd,addons:Ue,combineParameters:Xd,controlOrMetaKey:Kd,controlOrMetaSymbol:Jd,eventMatchesShortcut:Qd,eventToShortcut:eh,experimental_MockUniversalStore:th,experimental_UniversalStore:oh,experimental_requestResponse:rh,experimental_useUniversalStore:ih,isMacLike:sh,isShortcutTaken:nh,keyToSymbol:ah,merge:lh,mockChannel:ch,optionOrAltSymbol:dh,shortcutMatchesShortcut:hh,shortcutToHumanString:ph,types:Ct,useAddonState:uh,useArgTypes:fh,useArgs:gh,useChannel:mh,useGlobalTypes:vh,useGlobals:yh,useParameter:Mt,useSharedState:bh,useStoryPrepared:$h,useStorybookApi:_h,useStorybookState:qo}=__STORYBOOK_API__;var vi=Object.defineProperty,Nt=(o,e)=>()=>(o&&(e=o(o=0)),e),yi=(o,e)=>{for(var t in e)vi(o,t,{get:e[t],enumerable:!0})},De,Xo,Ko,Jo,Rt=Nt(()=>{De=({config:o,defer:e=!1})=>{let[t,r]=k(e?void 0:o.url),[i,s]=k(!1);return R(()=>{if(!e)return;let n=requestAnimationFrame(()=>{r(o.url)});return()=>cancelAnimationFrame(n)},[e,o.url]),R(()=>{s(!1)},[t]),p("div",{css:Xo},!i&&p(I,{css:Ko},"Loading..."),p("iframe",{css:Jo,src:t,allowFullScreen:o.allowFullscreen,onLoad:()=>s(!0)}))},Xo=N`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,Ko=N`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,Jo=N`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`}),Pt,Qo,rr,ir=Nt(()=>{Rt(),Pt=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,Qo=o=>Pt.test(o),rr=({config:o})=>{let e=J(()=>Qo(o.url)?{url:`https://www.figma.com/embed?embed_host=${o.embedHost||location.hostname}&url=${o.url}`,allowFullscreen:o.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),o),[o.url,o.allowFullscreen,o.embedHost]);return p(De,{defer:!0,config:e})}}),sr={};yi(sr,{Figspec:()=>kt,default:()=>ar});function Fe(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function bi(o){if(o.accessToken)return o.accessToken;try{return m.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function nr(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(nr).reduce((e,t)=>e.concat(t),[])}var Tt,kt,ar,$i=Nt(()=>{ir(),Tt=N`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,kt=({config:o})=>{let[e,t]=k({state:"loading"}),r=async i=>{t({state:"loading"});try{let s=o.url.match(Pt);if(!s)throw new Error(o.url+" is not a valid Figma URL.");let[,,n]=s,d=new URL(o.url).searchParams.get("node-id"),a=bi(o);if(!a)throw new Error("Personal Access Token is required.");let c={"X-FIGMA-TOKEN":a},l=new URL(`https://api.figma.com/v1/files/${n}`),h=new URL(`https://api.figma.com/v1/images/${n}`);if(h.searchParams.set("format","svg"),!d){let g=await fetch(l.href,{headers:c,signal:i}).then(_=>Fe(_)),b=nr(g.document);h.searchParams.set("ids",b.map(_=>_.id).join(","));let E=await fetch(h.href,{headers:c,signal:i}).then(_=>Fe(_));t({state:"fetched",value:{type:"file",props:{documentNode:g,renderedImages:E.images,link:o.url}}});return}l.pathname+="/nodes",l.searchParams.set("ids",d),h.searchParams.set("ids",d);let[u,f]=await Promise.all([fetch(l.href,{headers:c,signal:i}).then(g=>Fe(g)),fetch(h.href,{headers:c,signal:i}).then(g=>Fe(g))]);t({state:"fetched",value:{type:"frame",props:{nodes:u,renderedImage:Object.values(f.images)[0],link:o.url}}})}catch(s){if(s instanceof DOMException&&s.code===DOMException.ABORT_ERR)return;console.error(s),t({state:"failed",error:s instanceof Error?s.message:String(s)})}};switch(R(()=>{let i=!1,s=()=>{i=!0},n=new AbortController;return r(n.signal).then(s,s),()=>{i||n.abort()}},[o.url]),e.state){case"loading":return p(I,null,p(x,null,"Loading Figma file..."));case"failed":return p(I,null,p(x,null,"Failed to load Figma file"),p(x,null,e.error));case"fetched":return e.value.type==="file"?p(Zo,{css:Tt,...e.value.props}):p(Go,{css:Tt,...e.value.props})}},ar=kt}),lr="STORYBOOK_ADDON_DESIGNS",er=lr+"/panel",je="design",tr=class extends ze{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,e){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(o),console.log("--- React Component Stack ---"),console.error(e.componentStack),console.groupEnd()}render(){return this.state.hasError?p(I,null,p(x,null,"Failed to render addon UI"),p(x,null,p("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),p("pre",null,String(this.state.error)),p("p",null,"See console log for more details. To clear the error state, please reload the page."," ",p(ne,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children}};ir();Rt();var _i=(o,e)=>{let[t,r]=k([0,0]),[i,s]=k(!1),n=P(u=>{u.button===0&&(r([u.screenX,u.screenY]),s(!0))},[s,r]),d=P(u=>{let f=u.touches[0];r([f.screenX,f.screenY]),s(!0)},[s,r]),a=P(u=>{i&&r(f=>(o([u[0]-f[0],u[1]-f[1]]),u))},[r,i,...e]),c=P(u=>{let{screenX:f,screenY:g}=u;a([f,g])},[a]),l=P(u=>{let{screenX:f,screenY:g}=u.touches[0];a([f,g])},[r,i,...e]),h=P(()=>{r([0,0]),s(!1)},[s,r]);return{onMouseDown:n,onMouseMove:c,onMouseUp:h,onMouseLeave:h,onTouchStart:d,onTouchMove:l,onTouchCancel:h,onTouchEnd:h}},xi=({children:o,className:e,style:t,defaultValue:r,value:i,onChange:s})=>{let[n,d]=k([0,0]);R(()=>{d(r||i||[0,0])},[r]);let a=_i(l=>{s&&s(l),d(h=>[h[0]+l[0],h[1]+l[1]])},[d,s]),c=J(()=>{let l=i||n;return{transform:`translate(${l[0]}px, ${l[1]}px)`}},[i,n]);return p("div",{css:wi,className:e,style:t,...a},p("div",{css:Ai,style:c},o))},wi=N`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,Ai=N`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Si=({onZoomIn:o,onZoomOut:e,onReset:t})=>p(x,null,p(_e,{onClick:o},p(xe,{icon:"zoom"})),p(_e,{onClick:e},p(xe,{icon:"zoomout"})),p(_e,{onClick:t},p(xe,{icon:"zoomreset"}))),Ei=(o,e)=>{let[t,r]=k(1);R(()=>{r(o)},e);let i=P(()=>{r(d=>d+.1)},[r]),s=P(()=>{r(d=>Math.max(d-.1,.1))},[r]),n=P(()=>{r(1)},[r]);return{scale:t,zoomIn:i,zoomOut:s,resetZoom:n}},Ci=({config:o})=>{let e=Ei(o.scale||1,[o.scale]),t=J(()=>({transform:`scale(${e.scale})`}),[e.scale]);return p("div",{css:Mi},p(Ot,{border:!0},p(x,{key:"left"},p("p",null,p("b",null,"Image")),p(Ht,null),p(Si,{onReset:e.resetZoom,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut}))),p(xi,{css:Ti,defaultValue:o.offset},p("img",{css:Pi,src:o.url,style:t})))},Mi=N`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Ti=N`
  flex-grow: 1;
`,Pi=N`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`,ki=({config:o})=>p("div",{css:Ni},p(ne,{cancel:!1,href:o.url,target:o.target??"_blank",rel:o.rel??"noopener",withArrow:o.showArrow??!0},o.label||o.url)),Ni=N`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;Rt();var Ri=o=>{if(o.protocol!=="https:")return{valid:!1,error:p(x,null,"Expected HTTPS link, received ",p("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:p(x,null,"Expected a hostname ",p("code",null,"www.sketch.com"),", received"," ",p("code",null,o.hostname))};let e=p(x,null,"Expected pathname ",p("code",null,"/s/<string>/a/<string>"),", received"," ",p("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};let[r,i,s,n]=t;return r!=="s"||!i||s!=="a"||!n?{valid:!1,error:e}:{valid:!0,data:{url:`https://www.sketch.com/embed/s/${i}/a/${n}`,offscreen:!1}}},Bi=({config:o})=>{let e=J(()=>{let t=Ri(new URL(o.url));return t.valid?{...t,data:{...o,...t.data}}:t},[o]);return e.valid?p(De,{defer:!0,config:e.data}):p(I,null,p(x,null,"Invalid Sketch URL"),p(x,null,e.error))},Oi=({tabs:o,deps:e=[]})=>{let[t,r]=k(o[0].id);return R(()=>{r(o[0].id)},e),p(Lt,{absolute:!0,selected:t,actions:{onSelect:r}},o.map(i=>p("div",{key:i.id,id:i.id,title:i.name},i.offscreen||t===i.id?i.content:null)))},Hi=We(()=>Promise.resolve().then(()=>($i(),sr))),Li=({config:o})=>{if(!o||"length"in o&&o.length===0)return p(I,null,p(x,null,"No designs found"),p(x,null,"Learn how to"," ",p(ne,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let e=[...o instanceof Array?o:[o]].map(t=>{let r={id:JSON.stringify(t),name:t.name||t.type?.toUpperCase()||"ERROR",offscreen:t.offscreen??!0};switch(t.type){case"iframe":return{...r,content:p(De,{config:t})};case"figma":return{...r,content:p(rr,{config:t}),offscreen:!1};case"sketch":return{...r,content:p(Bi,{config:t})};case"figspec":case"experimental-figspec":return t.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),{...r,content:p(Ye,{fallback:"Preparing Figspec viewer..."},p(Hi,{config:t})),offscreen:!1};case"image":return{...r,content:p(Ci,{config:t})};case"link":return{...r,content:p(ki,{config:t})}}return{...r,content:p(I,null,p(x,null,"Invalid config type"),p(x,null,"Config type you set is not supported. Please choose one from"," ",p(ne,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))}});return e.length===1?p("div",null,e[0].content):p(Oi,{tabs:e,deps:[o]})},or=({active:o})=>{let e=qo(),t=Mt(je),[r,i]=k(o);return R(()=>{i(o)},[t]),R(()=>{o&&i(!0)},[o]),r?p(Li,{key:e.storyId,config:t}):null},be="Design";function Ii(o){Ue.register(lr,e=>{let t=function(){let r=Mt(je);return r?Array.isArray(r)?r.length>0?`${be} (${r.length})`:be:(r.name||be)+" (1)":be};o==="tab"?Ue.add(er,{title:be,render({active:r}){return r?p(tr,null,p(or,{active:!0})):p("noscript",null)},type:Ct.TAB,paramKey:je}):Ue.add(er,{type:Ct.PANEL,title:t,paramKey:je,render({active:r}){return p(Bt,{active:!!r},p(tr,null,p(or,{active:!!r})))}})})}Ii("panel");})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
