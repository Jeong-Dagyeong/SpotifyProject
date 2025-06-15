"use strict";(self.webpackChunkspotify_demo=self.webpackChunkspotify_demo||[]).push([[726],{3526:(e,t,n)=>{n.d(t,{A:()=>L});var r=n(6540),i=n(4164),o=n(1362);function s(e){try{return e.matches(":focus-visible")}catch(e){}return!1}var a=n(6739),l=n(3202),u=n(301);const c=n(8854).A;var p=n(5870);class d{static create(){return new d}static use(){const e=(0,p.A)(d.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then((()=>this.ref.current?.start(...e)))}stop(...e){this.mount().then((()=>this.ref.current?.stop(...e)))}pulsate(...e){this.mount().then((()=>this.ref.current?.pulsate(...e)))}}var h=n(8587),f=n(8168),m=n(5540),b=n(7241);function v(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function g(e,t,n){var i=v(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var s in e)s in t?o.length&&(i[s]=o,o=[]):o.push(s);var a={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var u=i[l][r];a[i[l][r]]=n(u)}a[l]=n(l)}for(r=0;r<o.length;r++)a[o[r]]=n(o[r]);return a}(t,i);return Object.keys(o).forEach((function(s){var a=o[s];if((0,r.isValidElement)(a)){var l=s in t,u=s in i,c=t[s],p=(0,r.isValidElement)(c)&&!c.props.in;!u||l&&!p?u||!l||p?u&&l&&(0,r.isValidElement)(c)&&(o[s]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:c.props.in,exit:y(a,"exit",e),enter:y(a,"enter",e)})):o[s]=(0,r.cloneElement)(a,{in:!1}):o[s]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:y(a,"exit",e),enter:y(a,"enter",e)})}})),o}var x=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},k=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,m.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,i=s,v(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):g(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,f.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,h.A)(e,["component","childFactory"]),o=this.state.contextValue,s=x(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(b.A.Provider,{value:o},s):r.createElement(b.A.Provider,{value:o},r.createElement(t,i,s))},t}(r.Component);k.propTypes={},k.defaultProps={component:"div",childFactory:function(e){return e}};const A=k;var M=n(5117),R=n(7437),S=n(4848);var E=n(6148);const w=(0,E.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),C=R.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,P=R.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,$=R.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,T=(0,a.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),V=(0,a.Ay)((function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:s,rippleY:a,rippleSize:l,in:u,onExited:c,timeout:p}=e,[d,h]=r.useState(!1),f=(0,i.A)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:l,height:l,top:-l/2+a,left:-l/2+s},b=(0,i.A)(n.child,d&&n.childLeaving,o&&n.childPulsate);return u||d||h(!0),r.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,S.jsx)("span",{className:f,style:m,children:(0,S.jsx)("span",{className:b})})}),{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${w.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${C};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${w.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${w.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${w.childLeaving} {
    opacity: 0;
    animation-name: ${P};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${w.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${$};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,D=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:a,...u}=n,[c,p]=r.useState([]),d=r.useRef(0),h=r.useRef(null);r.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[c]);const f=r.useRef(!1),m=(0,M.A)(),b=r.useRef(null),v=r.useRef(null),y=r.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:a}=e;p((e=>[...e,(0,S.jsx)(V,{classes:{ripple:(0,i.A)(s.ripple,w.ripple),rippleVisible:(0,i.A)(s.rippleVisible,w.rippleVisible),ripplePulsate:(0,i.A)(s.ripplePulsate,w.ripplePulsate),child:(0,i.A)(s.child,w.child),childLeaving:(0,i.A)(s.childLeaving,w.childLeaving),childPulsate:(0,i.A)(s.childPulsate,w.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},d.current)])),d.current+=1,h.current=a}),[s]),g=r.useCallback(((e={},t={},n=()=>{})=>{const{pulsate:r=!1,center:i=o||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const a=s?null:v.current,l=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-l.left),c=Math.round(n-l.top)}if(i)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((a?a.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===b.current&&(b.current=()=>{y({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},m.start(80,(()=>{b.current&&(b.current(),b.current=null)}))):y({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[o,y,m]),x=r.useCallback((()=>{g({},{pulsate:!0})}),[g]),k=r.useCallback(((e,t)=>{if(m.clear(),"touchend"===e?.type&&b.current)return b.current(),b.current=null,void m.start(0,(()=>{k(e,t)}));b.current=null,p((e=>e.length>0?e.slice(1):e)),h.current=t}),[m]);return r.useImperativeHandle(t,(()=>({pulsate:x,start:g,stop:k})),[x,g,k]),(0,S.jsx)(T,{className:(0,i.A)(w.root,s.root,a),ref:v,...u,children:(0,S.jsx)(A,{component:null,exit:!0,children:c})})}));var j=n(1908);function N(e){return(0,j.Ay)("MuiButtonBase",e)}const B=(0,E.A)("MuiButtonBase",["root","disabled","focusVisible"]),I=(0,a.Ay)("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${B.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function z(e,t,n,r=!1){return c((i=>(n&&n(i),r||e[t](i),!0)))}const L=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:p=!1,children:h,className:f,component:m="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:y=!1,focusRipple:g=!1,focusVisibleClassName:x,LinkComponent:k="a",onBlur:A,onClick:M,onContextMenu:R,onDragLeave:E,onFocus:w,onFocusVisible:C,onKeyDown:P,onKeyUp:$,onMouseDown:T,onMouseLeave:V,onMouseUp:j,onTouchEnd:B,onTouchMove:L,onTouchStart:F,tabIndex:O=0,TouchRippleProps:X,touchRippleRef:Y,type:H,...U}=n,W=r.useRef(null),K=d.use(),q=(0,u.A)(K.ref,Y),[_,G]=r.useState(!1);b&&_&&G(!1),r.useImperativeHandle(a,(()=>({focusVisible:()=>{G(!0),W.current.focus()}})),[]);const J=K.shouldMount&&!v&&!b;r.useEffect((()=>{_&&g&&!v&&K.pulsate()}),[v,g,_,K]);const Q=z(K,"start",T,y),Z=z(K,"stop",R,y),ee=z(K,"stop",E,y),te=z(K,"stop",j,y),ne=z(K,"stop",(e=>{_&&e.preventDefault(),V&&V(e)}),y),re=z(K,"start",F,y),ie=z(K,"stop",B,y),oe=z(K,"stop",L,y),se=z(K,"stop",(e=>{s(e.target)||G(!1),A&&A(e)}),!1),ae=c((e=>{W.current||(W.current=e.currentTarget),s(e.target)&&(G(!0),C&&C(e)),w&&w(e)})),le=()=>{const e=W.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ue=c((e=>{g&&!e.repeat&&_&&" "===e.key&&K.stop(e,(()=>{K.start(e)})),e.target===e.currentTarget&&le()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&le()&&"Enter"===e.key&&!b&&(e.preventDefault(),M&&M(e))})),ce=c((e=>{g&&" "===e.key&&_&&!e.defaultPrevented&&K.stop(e,(()=>{K.pulsate(e)})),$&&$(e),M&&e.target===e.currentTarget&&le()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let pe=m;"button"===pe&&(U.href||U.to)&&(pe=k);const de={};"button"===pe?(de.type=void 0===H?"button":H,de.disabled=b):(U.href||U.to||(de.role="button"),b&&(de["aria-disabled"]=b));const he=(0,u.A)(t,W),fe={...n,centerRipple:p,component:m,disabled:b,disableRipple:v,disableTouchRipple:y,focusRipple:g,tabIndex:O,focusVisible:_},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,o.A)(s,N,i);return n&&r&&(a.root+=` ${r}`),a})(fe);return(0,S.jsxs)(I,{as:pe,className:(0,i.A)(me.root,f),ownerState:fe,onBlur:se,onClick:M,onContextMenu:Z,onFocus:ae,onKeyDown:ue,onKeyUp:ce,onMouseDown:Q,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:ie,onTouchMove:oe,onTouchStart:re,ref:he,tabIndex:b?-1:O,type:H,...de,...U,children:[h,J?(0,S.jsx)(D,{ref:q,center:p,...X}):null]})}))},4587:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(1092).A},8861:(e,t,n)=>{n.d(t,{A:()=>M});var r=n(6540),i=n(4164),o=n(1362),s=n(7437),a=n(6739),l=n(9241),u=n(3202),c=n(9407),p=n(1321),d=n(6148),h=n(1908);function f(e){return(0,h.Ay)("MuiCircularProgress",e)}(0,d.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=n(4848);const b=s.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=s.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,y="string"!=typeof b?s.AH`
        animation: ${b} 1.4s linear infinite;
      `:null,g="string"!=typeof v?s.AH`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,x=(0,a.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${(0,c.A)(n.color)}`]]}})((0,l.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:y||{animation:`${b} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,p.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})))]})))),k=(0,a.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),A=(0,a.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${(0,c.A)(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})((0,l.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:g||{animation:`${v} 1.4s ease-in-out infinite`}}]})))),M=r.forwardRef((function(e,t){const n=(0,u.b)({props:e,name:"MuiCircularProgress"}),{className:r,color:s="primary",disableShrink:a=!1,size:l=40,style:p,thickness:d=3.6,value:h=0,variant:b="indeterminate",...v}=n,y={...n,color:s,disableShrink:a,size:l,thickness:d,value:h,variant:b},g=(e=>{const{classes:t,variant:n,color:r,disableShrink:i}=e,s={root:["root",n,`color${(0,c.A)(r)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(n)}`,i&&"circleDisableShrink"]};return(0,o.A)(s,f,t)})(y),M={},R={},S={};if("determinate"===b){const e=2*Math.PI*((44-d)/2);M.strokeDasharray=e.toFixed(3),S["aria-valuenow"]=Math.round(h),M.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,R.transform="rotate(-90deg)"}return(0,m.jsx)(x,{className:(0,i.A)(g.root,r),style:{width:l,height:l,...R,...p},ownerState:y,ref:t,role:"progressbar",...S,...v,children:(0,m.jsx)(k,{className:g.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,m.jsx)(A,{className:g.circle,style:M,ownerState:y,cx:44,cy:44,r:(44-d)/2,fill:"none",strokeWidth:d})})})}))}}]);
//# sourceMappingURL=726.js.map?ver=602957cdbcb07ced2739