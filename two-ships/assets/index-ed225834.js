(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var Cn=(t,e)=>{let n=0;return e.map(o=>{t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}),t},$o=t=>{const e=[],n=[];return t.faces.map(o=>{e.push(t.vertices[o.a],t.vertices[o.b],t.vertices[o.c]);const{color:r,vertexColors:i}=o;i.length===3?n.push(...i):n.push(r,r,r)}),{position:Cn(new Float32Array(e.length*3),e),color:Cn(new Float32Array(n.length*3),n)}},m=(t=0,e=0,n=0)=>({x:t,y:e,z:n}),M=(t,e,n,o)=>(t.x=e,t.y=n,t.z=o,t),b=(t,e)=>(t.x=e,t.y=e,t.z=e,t),$t=t=>m(t.x,t.y,t.z),K=(t,e)=>(t.x+=e.x,t.y+=e.y,t.z+=e.z,t),Zo=(t,e,n)=>(t.x=e.x+n.x,t.y=e.y+n.y,t.z=e.z+n.z,t),P=(t,e,n)=>(t.x+=e.x*n,t.y+=e.y*n,t.z+=e.z*n,t),Qn=(t,e)=>(t.x-=e.x,t.y-=e.y,t.z-=e.z,t),$=(t,e,n)=>(t.x=e.x-n.x,t.y=e.y-n.y,t.z=e.z-n.z,t),Jn=(t,e)=>(t.x*=e.x,t.y*=e.y,t.z*=e.z,t),G=(t,e)=>(t.x*=e,t.y*=e,t.z*=e,t),_n=(t,e)=>{const{x:n,y:o,z:r}=t,i=1/(e[3]*n+e[7]*o+e[11]*r+e[15]);return t.x=(e[0]*n+e[4]*o+e[8]*r+e[12])*i,t.y=(e[1]*n+e[5]*o+e[9]*r+e[13])*i,t.z=(e[2]*n+e[6]*o+e[10]*r+e[14])*i,t},Pt=(t,e)=>{const{x:n,y:o,z:r}=t,i=e.x,s=e.y,c=e.z,a=e.w,l=a*n+s*r-c*o,v=a*o+c*n-i*r,f=a*r+i*o-s*n,d=-i*n-s*o-c*r;return t.x=l*a+d*-i+v*-c-f*-s,t.y=v*a+d*-s+f*-i-l*-c,t.z=f*a+d*-c+l*-s-v*-i,t},Ko=(t,e)=>{const{x:n,y:o,z:r}=t;return t.x=e[0]*n+e[4]*o+e[8]*r,t.y=e[1]*n+e[5]*o+e[9]*r,t.z=e[2]*n+e[6]*o+e[10]*r,R(t)},to=(t,e)=>G(t,1/e),Qo=(t,e)=>(t.x=Math.min(t.x,e.x),t.y=Math.min(t.y,e.y),t.z=Math.min(t.z,e.z),t),Jo=(t,e)=>(t.x=Math.max(t.x,e.x),t.y=Math.max(t.y,e.y),t.z=Math.max(t.z,e.z),t),Q=(t,e)=>t.x*e.x+t.y*e.y+t.z*e.z,W=t=>Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z),R=t=>to(t,W(t)||1),ce=(t,e)=>G(R(t),e),tr=(t,e,n,o)=>K(G($(t,n,e),o),e),rn=(t,e)=>{const{x:n,y:o,z:r}=t;return t.x=o*e.z-r*e.y,t.y=r*e.x-n*e.z,t.z=n*e.y-o*e.x,t},Le=(t,e,n)=>{const o=e.x,r=e.y,i=e.z,s=n.x,c=n.y,a=n.z;return t.x=r*a-i*c,t.y=i*s-o*a,t.z=o*c-r*s,t},eo=(t,e)=>Math.sqrt(er(t,e)),er=(t,e)=>{const n=t.x-e.x,o=t.y-e.y,r=t.z-e.z;return n*n+o*o+r*r},Ve=(t,e)=>(t.x=e[12],t.y=e[13],t.z=e[14],t),nr=m(1,0,0),Nt=m(0,1,0),ae=m(0,0,1),V=1.001,it=(t,e,n)=>{let o=Q(t,e);return o<0?o*=n:o/=n,P(t,e,-o)};const oe=m(),Ce=m(),ut=m();var at=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),or=(t,e)=>(t.set(e),t),gn=(t,e,n,o)=>(W($(ut,e,n))||(ut.z=1),W(Le(oe,o,R(ut)))||(Math.abs(o.z)===1?ut.x+=1e-4:ut.z+=1e-4,Le(oe,o,R(ut))),Le(Ce,ut,R(oe)),t[0]=oe.x,t[4]=Ce.x,t[8]=ut.x,t[1]=oe.y,t[5]=Ce.y,t[9]=ut.y,t[2]=oe.z,t[6]=Ce.z,t[10]=ut.z,t),be=(t,e,n)=>{const[o,r,i,s,c,a,l,v,f,d,p,_,x,h,w,S]=e,[X,B,C,E,Lt,Tt,Zt,Kt,gt,Qt,At,wt,Jt,te,y,g]=n;return t.set([o*X+c*B+f*C+x*E,r*X+a*B+d*C+h*E,i*X+l*B+p*C+w*E,s*X+v*B+_*C+S*E,o*Lt+c*Tt+f*Zt+x*Kt,r*Lt+a*Tt+d*Zt+h*Kt,i*Lt+l*Tt+p*Zt+w*Kt,s*Lt+v*Tt+_*Zt+S*Kt,o*gt+c*Qt+f*At+x*wt,r*gt+a*Qt+d*At+h*wt,i*gt+l*Qt+p*At+w*wt,s*gt+v*Qt+_*At+S*wt,o*Jt+c*te+f*y+x*g,r*Jt+a*te+d*y+h*g,i*Jt+l*te+p*y+w*g,s*Jt+v*te+_*y+S*g]),t},rr=(t,e)=>(t[12]=e.x,t[13]=e.y,t[14]=e.z,t),no=t=>{const[e,n,o,r,i,s,c,a,l,v,f,d,p,_,x,h]=t,w=v*x*a-_*f*a+_*c*d-s*x*d-v*c*h+s*f*h,S=p*f*a-l*x*a-p*c*d+i*x*d+l*c*h-i*f*h,X=l*_*a-p*v*a+p*s*d-i*_*d-l*s*h+i*v*h,B=p*v*c-l*_*c-p*s*f+i*_*f+l*s*x-i*v*x,C=e*w+n*S+o*X+r*B;if(C===0)return t.fill(0);const E=1/C;return t.set([w*E,(_*f*r-v*x*r-_*o*d+n*x*d+v*o*h-n*f*h)*E,(s*x*r-_*c*r+_*o*a-n*x*a-s*o*h+n*c*h)*E,(v*c*r-s*f*r-v*o*a+n*f*a+s*o*d-n*c*d)*E,S*E,(l*x*r-p*f*r+p*o*d-e*x*d-l*o*h+e*f*h)*E,(p*c*r-i*x*r-p*o*a+e*x*a+i*o*h-e*c*h)*E,(i*f*r-l*c*r+l*o*a-e*f*a-i*o*d+e*c*d)*E,X*E,(p*v*r-l*_*r-p*n*d+e*_*d+l*n*h-e*v*h)*E,(i*_*r-p*s*r+p*n*a-e*_*a-i*n*h+e*s*h)*E,(l*s*r-i*v*r-l*n*a+e*v*a+i*n*d-e*s*d)*E,B*E,(l*_*o-p*v*o+p*n*f-e*_*f-l*n*x+e*v*x)*E,(p*s*o-i*_*o-p*n*c+e*_*c+i*n*x-e*s*x)*E,(i*v*o-l*s*o+l*n*c-e*v*c-i*n*f+e*s*f)*E]),t},ir=(t,e,n,o)=>{const{x:r,y:i,z:s,w:c}=n,a=r+r,l=i+i,v=s+s,f=r*a,d=r*l,p=r*v,_=i*l,x=i*v,h=s*v,w=c*a,S=c*l,X=c*v,B=o.x,C=o.y,E=o.z;return t.set([(1-(_+h))*B,(d+X)*B,(p-S)*B,0,(d-X)*C,(1-(f+h))*C,(x+w)*C,0,(p+S)*E,(x-w)*E,(1-(f+_))*E,0,e.x,e.y,e.z,1]),t},wn=(t,e,n)=>Math.min(Math.max(t,e),n),D=(t,e)=>t+Math.random()*(e-t),xt=t=>t*(.5-Math.random()),Ee=(t=0,e=0,n=0,o=1)=>({x:t,y:e,z:n,w:o}),Nn=(t,e)=>(t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t),Ue=(t,e)=>{const{x:n,y:o,z:r}=e,i=Math.cos(n/2),s=Math.cos(o/2),c=Math.cos(r/2),a=Math.sin(n/2),l=Math.sin(o/2),v=Math.sin(r/2);return t.x=a*s*c+i*l*v,t.y=i*l*c-a*s*v,t.z=i*s*v+a*l*c,t.w=i*s*c-a*l*v,t},sn=(t,e,n)=>{const o=n/2,r=Math.sin(o);return t.x=e.x*r,t.y=e.y*r,t.z=e.z*r,t.w=Math.cos(o),t},oo=(t,e)=>{const n=e[0],o=e[4],r=e[8],i=e[1],s=e[5],c=e[9],a=e[2],l=e[6],v=e[10],f=n+s+v;let d;return f>0?(d=.5/Math.sqrt(f+1),t.w=.25/d,t.x=(l-c)*d,t.y=(r-a)*d,t.z=(i-o)*d):n>s&&n>v?(d=2*Math.sqrt(1+n-s-v),t.w=(l-c)/d,t.x=.25*d,t.y=(o+i)/d,t.z=(r+a)/d):s>v?(d=2*Math.sqrt(1+s-n-v),t.w=(r-a)/d,t.x=(o+i)/d,t.y=.25*d,t.z=(c+l)/d):(d=2*Math.sqrt(1+v-n-s),t.w=(i-o)/d,t.x=(r+a)/d,t.y=(c+l)/d,t.z=.25*d),t},sr=(t,e)=>2*Math.acos(Math.abs(wn(cr(t,e),-1,1))),jn=(t,e,n)=>{const o=sr(t,e);if(!o)return t;const r=Math.min(1,n/o);return dr(t,e,r),t},cr=(t,e)=>t.x*e.x+t.y*e.y+t.z*e.z+t.w*e.w,ar=t=>Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w),lr=t=>{let e=ar(t);return e?(e=1/e,t.x=t.x*e,t.y=t.y*e,t.z=t.z*e,t.w=t.w*e):(t.x=0,t.y=0,t.z=0,t.w=1),t},ro=(t,e)=>{const n=t.x,o=t.y,r=t.z,i=t.w,s=e.x,c=e.y,a=e.z,l=e.w;return t.x=n*l+i*s+o*a-r*c,t.y=o*l+i*c+r*s-n*a,t.z=r*l+i*a+n*c-o*s,t.w=i*l-n*s-o*c-r*a,t},dr=(t,e,n)=>{if(n===0)return t;if(n===1)return Nn(t,e);const{x:o,y:r,z:i,w:s}=t;let c=s*e.w+o*e.x+r*e.y+i*e.z;if(c<0?(t.w=-e.w,t.x=-e.x,t.y=-e.y,t.z=-e.z,c=-c):Nn(t,e),c>=1)return t.w=s,t.x=o,t.y=r,t.z=i,t;const a=1-c*c;if(a<=Number.EPSILON){const p=1-n;return t.w=p*s+n*t.w,t.x=p*o+n*t.x,t.y=p*r+n*t.y,t.z=p*i+n*t.z,lr(t)}const l=Math.sqrt(a),v=Math.atan2(l,c),f=Math.sin((1-n)*v)/l,d=Math.sin(n*v)/l;return t.w=s*f+t.w*d,t.x=o*f+t.x*d,t.y=r*f+t.y*d,t.z=i*f+t.z*d,t};const fr=Ee(),ur=at();var yt=()=>({parent:void 0,children:[],components:[],position:m(),quaternion:Ee(),scale:m(1,1,1),matrix:at(),matrixWorld:at(),modelViewMatrix:at(),visible:!0,castShadow:!1,receiveShadow:!1}),De=(t,e)=>{oo(t.quaternion,gn(ur,e,t.position,Nt))},F=(t,e)=>(e.parent=t,t.children.push(e),t),Vt=(t,e)=>{const n=t.children.indexOf(e);n>=0&&t.children.splice(n,1)},zn=(t,e,n)=>(ro(t.quaternion,sn(fr,e,n)),t),vr=(t,e)=>zn(t,nr,e),mr=(t,e)=>zn(t,Nt,e),pr=(t,e)=>zn(t,ae,e),ye=(t,e)=>{e(t),t.children.map(n=>ye(n,e))},hr=t=>{ir(t.matrix,t.position,t.quaternion,t.scale)},Oe=t=>{hr(t),t.parent?be(t.matrixWorld,t.parent.matrixWorld,t.matrix):or(t.matrixWorld,t.matrix),t.children.map(Oe)};const xr=Math.PI/180,yr=at();var _r=(t=60,e=1,n=.1,o=2e3)=>{const r={...yt(),fov:t,near:n,far:o,aspect:e,up:$t(Nt),matrixWorldInverse:at(),projectionMatrix:at()};return io(r),r},gr=(t,e)=>{oo(t.quaternion,gn(yr,t.position,e,t.up))},io=t=>{const{near:e,far:n}=t,o=e*Math.tan(xr*.5*t.fov),r=-o,i=r*t.aspect,s=o*t.aspect,c=2*e/(s-i),a=2*e/(o-r),l=(s+i)/(s-i),v=(o+r)/(o-r),f=-(n+e)/(n-e),d=-2*n*e/(n-e);t.projectionMatrix.set([c,0,0,0,0,a,0,0,l,v,f,-1,0,0,d,0])},wr=t=>{Oe(t),t.matrixWorldInverse.set(t.matrixWorld),no(t.matrixWorldInverse)};const zr=Ee(),Mr=Ee();var Er=t=>{const e=m(),n=m();var o={object:t,sensitivity:.002,enabled:!1,onMouseMove(r){o.enabled&&(e.x=wn(e.x-r.movementY*o.sensitivity,-Math.PI/2,Math.PI/2),n.y-=r.movementX*o.sensitivity,Object.assign(t.quaternion,ro(Ue(Mr,n),Ue(zr,e))))}};return addEventListener("mousemove",o.onMouseMove),o},Tr=(t=-1,e=1,n=1,o=-1,r=.1,i=2e3)=>{const s={...yt(),left:t,right:e,top:n,bottom:o,near:r,far:i,up:$t(Nt),matrixWorldInverse:at(),projectionMatrix:at()};return Mn(s),s},Mn=t=>{const{left:e,right:n,top:o,bottom:r,near:i,far:s}=t,c=1/(n-e),a=1/(o-r),l=1/(s-i),v=(n+e)*c,f=(o+r)*a,d=(s+i)*l;t.projectionMatrix.set([2*c,0,0,0,0,2*a,0,0,0,0,-2*l,0,-v,-f,-d,1])};const Ar=m();var Sr=()=>({camera:Tr(-5,5,5,-5,.5,500),matrix:at()}),so=(t,e)=>{const{camera:n,matrix:o}=t;Ve(n.position,e.matrixWorld),gr(n,Ve(Ar,e.target.matrixWorld)),wr(n),o.set([.5,0,0,0,0,.5,0,0,0,0,.5,0,.5,.5,.5,1]),be(o,be(o,o,n.projectionMatrix),n.matrixWorldInverse)},Ut=(t,e)=>({parent:void 0,update:t,...e}),Gt=(t,e)=>(e.parent=t,t.components.push(e),t),br=(t,e)=>t.components.find(e),Pr=(t,e)=>t.components.filter(e),Rr=(t,...e)=>t.components.map(n=>n.update(...e));const Or=m(),Fr=m(),Cr=64;var cn=0,co=1,ao=2,lo=3,an=(t,e)=>{const n=eo(t.position,e.position);return n<Cr?cn:n<512?co:n<1024?ao:lo},Nr=(t,e)=>Q(R($(Fr,e.position,t.position)),Pt(Object.assign(Or,ae),t.quaternion))>.3,re=(t,e)=>{const n=an(t,e);return!(n===lo||(n===co||n===ao)&&!Nr(t,e))};const _t=new AudioContext,{sampleRate:Se}=_t,Pe=t=>2**((t-69)/12)*440,jr=(t,e=_t.destination)=>{const n=new AudioBufferSourceNode(_t,{buffer:t});n.connect(e),n.start()},fo=(t,e,n)=>{const o=e*Se,r=new AudioBuffer({length:o,sampleRate:Se}),i=r.getChannelData(0);for(let s=0;s<o;s++)i[s]=t(s/Se,s,i)*n;return r},En=(t,e,n)=>new Proxy({},{get(o,r){const i=o[r]||fo(t(Pe(r)),e,n);return o[r]=i,i}}),uo=t=>e=>-1+2*(e%(1/t)*t%1),ln=t=>e=>e%(1/t)*t%1>.5?1:-1,Lr=t=>()=>e=>Math.exp(-e*t),vo=()=>{let t=0;return()=>{const e=xt(1),n=(t+.02*e)/1.02;return t=n,n*3.5}},_e=(t,e)=>n=>{const o=t(n),r=e(n);return(i,s,c)=>o(i,s,c)*r(i,s,c)},mo=(t,e,n)=>o=>(r,i,s)=>t(o+(r>n?e:0))(r,i,s),po=(t,e,n,o,r)=>{const i=t+e+n+o;return()=>s=>s<t?s/t:s<t+e?1-(s-t)/e*(1-r):s<i-o?r:s<i?(i-s)/o*r:0},ho=new GainNode(_t,{gain:.3}),Dr=new GainNode(_t,{gain:1-ho.gain.value}),xo=new ConvolverNode(_t),Tn=new GainNode(_t);Tn.connect(Dr).connect(_t.destination);Tn.connect(xo).connect(ho).connect(_t.destination);(async()=>{const o=new OfflineAudioContext(1,1.51*Se,Se),r=new GainNode(o,{gain:0});r.gain.setValueAtTime(1,.01).exponentialRampToValueAtTime(.01,1.51);const i=new AudioBufferSourceNode(o,{buffer:fo(vo(),1.51,1)});i.connect(r).connect(o.destination),i.start(),xo.buffer=await o.startRendering()})();const An=t=>jr(t,Tn),Br=En(_e(_e(uo,vo),Lr(24)),.5,1);var Ir=()=>An(Br[16]);const Hr=En(_e(_e(ln,mo(ln,Pe(36)-Pe(31),.1)),po(.003,.05,.01,.03,.5)),.3,.2);var Vr=()=>An(Hr[31]);const Ur=En(_e(_e(uo,mo(ln,Pe(27)-Pe(15),.1)),po(.001,.3,.4,.3,.7)),1,.4);var Gr=()=>An(Ur[15]);addEventListener("click",()=>_t.resume(),{once:!0});var Wr=(t,e,n)=>({a:t,b:e,c:n,color:m(1,1,1),vertexColors:[]}),kr=t=>({a:t.a,b:t.b,c:t.c,color:$t(t.color),vertexColors:t.vertexColors.map($t)}),Ft=(...t)=>e=>t.reduce((n,o)=>o(n),e),lt=t=>(...e)=>n=>t(n,...e),Xr=t=>t[Math.random()*t.length|0];const Ln=m();var yo=()=>({vertices:[],faces:[]}),qr=(t,e,n)=>{const o=t.vertices.length;for(var r=0;r<e.length;)t.vertices.push(m(e[r++],e[r++],e[r++]));for(r=0;r<n.length;)t.faces.push(Wr(o+n[r++],o+n[r++],o+n[r++]));return t},_o=(t,e)=>(t.vertices.map(n=>Pt(n,e)),t),Sn=(t,e,n,o)=>(M(Ln,e,n,o),t.vertices.map(r=>K(r,Ln)),t),Yr=(t,e)=>{const n=t.vertices.length;return t.vertices.push(...e.vertices.map($t)),t.faces.push(...e.faces.map(o=>{const r=kr(o);return r.a+=n,r.b+=n,r.c+=n,r})),t},bn=lt(Sn),$r=lt(Yr),ue=(t,e,n)=>{const o=t/2,r=e/2,i=n/2,s=[o,r,i,o,r,-i,o,-r,i,o,-r,-i,-o,r,-i,-o,r,i,-o,-r,-i,-o,-r,i],c=[0,2,1,2,3,1,4,6,5,6,7,5,4,5,1,5,0,1,7,6,2,6,3,2,5,7,0,7,2,0,1,3,4,3,6,4];return qr(yo(),s,c)},Zr=[0],Kr=[1],Qr=[2],Jr=[4],ti=[5],ei=[7],Ge=[0,1],Dn=[2,3],dn=[4,5],fn=[6,7],Rt=[0,2],It=[1,3],Ht=[4,6],Ot=[5,7],un=[0,5],go=[1,4],ve=[2,7],Mt=[0,1,2,3],Et=[4,5,6,7],ge=[0,1,4,5],Re=[2,3,6,7],rt=[0,2,5,7],pt=[1,3,4,6],qt=[0,1,2,3,4,5,6,7],Wt=[0,1],le=[2,3],vn=[4,5],de=[6,7],kt=[8,9],Ae=[10,11];const k=m(),Bn=m(),In=m();var We=(t,e,n)=>{Array.isArray(e)?M(t,...e):typeof e=="object"?Object.assign(t,n,e):typeof e=="number"&&b(t,e)};const mn=(t,e,n)=>(b(n,0),e.map(o=>K(n,t.vertices[o])),to(n,e.length),n),ni=(t,e)=>(mn(t,e,k),Sn(t,-k.x,-k.y,-k.z)),oi=(t,e,n,o)=>(mn(t,e,Bn),mn(n,o,In),$(k,Bn,In),Sn(t,-k.x,-k.y,-k.z));var ct=lt(ni),et=lt(oi);const wo=(t,e=m())=>(n,...o)=>(o.map(([r,i])=>{We(k,i,e),r.map(s=>t(n.vertices[s],k))}),n);var Y=lt(wo(K)),Hn=lt(wo(Jn,m(1,1,1)));const ri=(t,e=m())=>n=>(o,...r)=>(r.map(([i,s=e[n]])=>{Object.assign(k,e),k[n]=s,i.map(c=>t(o.vertices[c],k))}),o),zo=ri(K);var Ct=lt(zo("x")),Vn=lt(zo("z")),fe=(()=>{const t=m(),e=new Map([[Mt,Et],[ge,Re],[rt,pt],[Et,Mt],[Re,ge],[pt,rt]]);return(n,o,r)=>{We(k,r,t);const i=e.get(o),s=ue();return o.map((c,a)=>{const l=i[a];Object.assign(s.vertices[i===Mt||i===Et?l^1:l],n.vertices[c]),K(Object.assign(s.vertices[c],n.vertices[c]),k)}),s}})(),U=lt((t,...e)=>(e.flat().sort((n,o)=>n-o).reverse().map(n=>t.faces.splice(n,1)),t)),Mo=m(0,-800,0),ii=(t=m(),e=1)=>({...yt(),color:t,intensity:e,target:yt(),shadow:Sr()});const pn=new WeakMap;var Ke=(t,e,n)=>{const o=pn.get(t)||{};return pn.set(t,o),o[e]=o[e]||[],o[e].push(n),t},Un=(t,e,n)=>{var o,r;return(r=(o=pn.get(t))==null?void 0:o[e])==null||r.map(i=>i(n)),t},Te=t=>{let e=0,n=t;return(o,r=!0)=>{if(n+=o,n-e>t)return r&&(e=n),r}},si=()=>{const t={};return addEventListener("keydown",e=>t[e.code]=!0),addEventListener("keyup",e=>t[e.code]=!1),t},nt=()=>({color:m(1,1,1),specular:m(1/15,1/15,1/15),shininess:30,emissive:m(),fog:!0}),ot=(t,e)=>({...yt(),geometry:t,material:e});const ci=m();var Yt=(t=m(1/0,1/0,1/0),e=m(-1/0,-1/0,-1/0))=>({min:t,max:e}),Be=(t,e)=>(Object.assign(t.min,e.min),Object.assign(t.max,e.max),t),ai=t=>(t.min.x=t.min.y=t.min.z=1/0,t.max.x=t.max.y=t.max.z-=1/0,t),Eo=t=>t.max.x<t.min.x||t.max.y<t.min.y||t.max.z<t.min.z,li=(t,e)=>Eo(t)?b(e,0):G(Zo(e,t.min,t.max),.5),di=(t,e)=>Eo(t)?b(e,0):$(e,t.max,t.min),hn=(t,e)=>(Qo(t.min,e),Jo(t.max,e),t),fi=(t,e)=>(Oe(e),ye(e,n=>{var o;return(o=n.geometry)==null?void 0:o.vertices.map(r=>hn(t,_n(Object.assign(ci,r),n.matrixWorld)))}),t),ui=(t,e)=>(ai(t),fi(t,e),t),vi=(t,e)=>t.min.x<=e.x&&e.x<=t.max.x&&t.min.y<=e.y&&e.y<=t.max.y&&t.min.z<=e.z&&e.z<=t.max.z,Pn=(t,e)=>!(t.max.x<=e.min.x||t.min.x>=e.max.x||t.max.y<=e.min.y||t.min.y>=e.max.y||t.max.z<=e.min.z||t.min.z>=e.max.z),mi=(t,e)=>hn(hn(t,e.min),e.max),Ie=(t,e)=>(K(t.min,e),K(t.max,e),t),pi=(t,e,n)=>{t.a===e&&(t.vertexColors[0]=n),t.b===e&&(t.vertexColors[1]=n),t.c===e&&(t.vertexColors[2]=n)},hi=(t,...e)=>(e.map(([n,o])=>{const r=m();We(r,o),t.faces.map(i=>n.map(s=>pi(i,s,r)))}),t),xi=lt(hi),yi=(t,...e)=>(e.map(([n,o])=>n.map(r=>We(t.faces[r].color,o))),t),To=lt(yi);const Ao=.01,So=Ee(),me=m();var T=(t,...e)=>Ft(...e)(ue(...t)),jt=(...t)=>Ft(...t.map($r))(yo()),_i=(t,e,n)=>{const o=(e-t)/(n+1);return[...Array(n)].map((r,i)=>t+o*(i+1))},gi=(t,e,n,o)=>{$(me,e,t);const r=me.x,i=me.z;return T(r?[r,o,n]:[n,o,i],ct(r?dn:go),bn(t.x,t.y,t.z))},wi=(t,e,n=t)=>{const o=T([n,.1875*e,t],ct(Re)),r=Ft(()=>fe(o,ge,{y:3/4*e}),Ct([Ge,-n/2]),U(de))(),i=Ft(()=>fe(r,ge,{y:1/16*e}),Ct([Ge,-n/2]),U(de))();return jt(o,r,i)};const Gn=ue(1,1,1),bo=nt();b(bo.emissive,1);const Po=nt();b(Po.color,0);var zi=(t,e)=>{const n=yt(),o=5,r=li(t,m()),i=di(t,m()),s=2,c=[...Array(e)].map(()=>{const a=ot(Gn,bo);a.castShadow=!0,M(a.scale,D(4,i.x),D(4,2*i.y),D(4,i.z)),M(a.position,xt(.5),xt(.5),xt(.5));const l=ot(Gn,Po);return M(l.scale,1-s/a.scale.x,1-s/a.scale.y,1-s/a.scale.z),a.scale.x*=-1,F(a,l),K(Jn(a.position,i),r),F(n,a),m(0,D(32,256),0)});return Gt(n,Ut(a=>{let l=0;n.children.map((v,f)=>{P(v.position,c[f],a),G(v.scale,1-o*a),W(v.scale)>Ao&&l++}),l||Vt(n.parent,n)}))},Mi=()=>{const s=1066.6666666666667,c=1.5*512,a=.75*512,l=3072,v=T([1280,128,12288],ct(Mt),Ct([Ot,s],[qt,-512/2]),Y([ve,{y:128}]),U(vn)),f=Ft(()=>fe(v,ge,{y:512}),Y([Ht,{x:s}],[un,{y:-512}]),U(le,de))(),d=Ft(()=>fe(f,Et,{x:-s}),Y([Ot,{x:s}],[Jr,{y:-512}]),U(Wt,de))(),p=T([1280,128,12288],ct(Et),Ct([Rt,-s],[qt,512/2]),Y([ve,{y:128}]),U(vn)),_=Ft(()=>fe(p,ge,{y:512}),Y([It,{x:-s}],[un,{y:-512}]),U(Wt,de))(),x=Ft(()=>fe(_,Mt,{x:s}),Y([Rt,{x:-s}],[Kr,{y:-512}]),U(le,de))(),h=jt(v,f,d,p,_,x,T([c,a,l],ct(ve),Y([qt,{z:-12288/3}],[go,{y:-a/3}])));return jt(h,Si(h,2048,()=>T([D(16,128),D(16,128),D(16,64)],ct(rt))))};const Ei=T([.5,.5,1]),Ti=[[1,1,1],[1,.75,0],[1,.5,0]].map(t=>{const e=nt();return M(e.color,...t),M(e.emissive,...t),e});var Ai=t=>{const e=yt(),n=8,o=[...Array(t)].map(()=>{const r=ot(Ei,Xr(Ti));r.castShadow=!0,b(r.scale,D(1,8)),M(r.position,xt(4),xt(4),xt(4)),F(e,r);const i=ce($t(r.position),D(64,128));return De(r,i),i});return Gt(e,Ut(r=>{let i=0;e.children.map((s,c)=>{P(s.position,P(o[c],Mo,r),r),G(s.scale,1-n*r),W(s.scale)>Ao&&i++}),i||Vt(e.parent,e)}))},Si=(()=>{const t=m(),e=m(),n=at(),o=m(),r=(c,a,l)=>W(rn($(t,l,a),$(e,c,a)))*.5,i=(c,a,l)=>R(rn($(t,l,a),$(e,c,a))),s=(c,a,l)=>{let v=Math.random(),f=Math.random();v+f>1&&(v=1-v,f=1-f);const d=1-v-f;return P(P(P(b(me,0),c,v),a,f),l,d)};return(c,a,l)=>{let v=0;const f=c.faces.map(p=>(v+=r(c.vertices[p.a],c.vertices[p.b],c.vertices[p.c]),v)),d=p=>{let _=0,x=f.length-1;for(;_<=x;){const h=Math.ceil((_+x)/2);if(!h||f[h-1]<=p&&f[h]>p)return h;p<f[h]?x=h-1:_=h+1}return-1};return jt(...[...Array(a)].map(()=>{const p=Math.random()*v,_=d(p),x=c.faces[_],h=c.vertices[x.a],w=c.vertices[x.b],S=c.vertices[x.c],X=s(h,w,S),B=i(h,w,S);rr(gn(n,o,B,Nt),X);const C=l();return C.vertices.map(E=>_n(E,n)),C}))}})(),bi=()=>{const s=m(16,1,1),c=8,a=T([40,72-56-4,16],ct(Re),Y([qt,{y:56+4}],[Ge,{x:-40/2}],[dn,{x:40/2}],[un,{z:-16}],[Qr,{x:-40/2}],[ei,{x:40/2}],[ve,{y:-2*4}])),l=T([18,56,16],ct(Dn),Y([qt,{x:-4/2}],[fn,{x:18}],[Ge,{y:-2*4}],[ve,{z:-16}],[ti,{z:-16}])),v=T([18,56,16],ct(fn),Y([qt,{x:4/2}],[Dn,{x:-18}],[dn,{y:-2*4}],[ve,{z:-16}],[Zr,{z:-16}])),f=T([c,c,c],d=>_o(d,Ue(So,M(me,Math.PI/4,-Math.PI/4,0))),To([Wt,s],[vn,s],[kt,s]),bn(0,56-4/2,-16/4));return jt(a,l,v,f)},Pi=(t,e,n,o)=>{const r=t-4*o,i=n-4*o,s=U(Wt,le,kt,Ae),c=T([t-2*o,e,i],s),a=T([r,e,o],et(pt,c,rt),Ct([Ht,-o],[It,o]),s),l=T([r,e,o],et(rt,c,pt),Ct([Ot,-o],[Rt,o]),s),v=[o,e,o],f=xi([qt,[.4,.4,.5]]),d=o/2;return jt(c,a,l,T([r,e,o],et(pt,a,rt),Ct([Ot,-d],[Rt,d]),U(Wt,le,Ae),f),T([r,e,o],et(rt,l,pt),Ct([Ht,-d],[It,d]),U(Wt,le,kt),f),T([o,e,i],et(Et,c,Mt),Vn([It,-d],[Rt,d]),U(le,kt,Ae),f),T([o,e,i],et(Mt,c,Et),Vn([Ht,-d],[Ot,d]),U(Wt,kt,Ae),f),T(v,et(Ht,c,Rt),Y([Mt,{z:d}],[rt,{x:-o}],[Rt,{x:-d,z:d}]),f),T(v,et(It,c,Ot),Y([Et,{z:d}],[rt,{x:o}],[Ot,{x:d,z:d}]),f),T(v,et(Ot,c,It),Y([Mt,{z:-d}],[pt,{x:-o}],[It,{x:-d,z:-d}]),f),T(v,et(Rt,c,Ht),Y([Et,{z:-d}],[pt,{x:o}],[Ht,{x:d,z:-d}]),f))},Ri=()=>{const o=m(16,1,1),r=T([16,16,6],Hn([rt,{x:.5,y:.5}]),To([kt,o]),U(Ae));return _o(jt(r,T([16,16,32-6],et(rt,r,pt),Hn([pt,{x:0,y:0}]),U(kt))),Ue(So,M(me,0,0,Math.PI/4)))},Oi=(t,e)=>{const n=[];for(let o=0;o<e;o++){const r=2*Math.PI*Math.random(),i=2*Math.random()-1,s=Math.sqrt(1-i*i),c=D(8,32);n.push(T([c,c,c],bn(t*s*Math.cos(r),t*s*Math.sin(r),t*i)))}return jt(...n)},we=1,Qe=2,st=4,Fi=(t,e)=>{const n={physics:e,boundingBox:ui(Yt(),t),velocity:m(),collide(){}};return Ut(o=>P(t.position,n.velocity,o),n)},ie=(t,e)=>Gt(t,Fi(t,e)),vt=t=>br(t,Ro),Ro=t=>t.physics,Oo=t=>{const e=[];return ye(t,n=>{e.push(...Pr(n,Ro))}),e};const Ci=(()=>{const t=m();return(e,n,o,r)=>{const i=r.max.x-o.min.x,s=o.max.x-r.min.x,c=r.max.y-o.min.y,a=o.max.y-r.min.y,l=r.max.z-o.min.z,v=o.max.z-r.min.z;let f=0;i>0&&s>0&&(f=i<s?i:-s);let d=0;c>0&&a>0&&(d=c<a?c:-a);let p=0;l>0&&v>0&&(p=l<v?l:-v);const _=Math.abs(f),x=Math.abs(d),h=Math.abs(p);_<x&&_<h?M(t,f,0,0):x<h?M(t,0,d,0):M(t,0,0,p);const w=e.parent,S=n.parent;e.physics===we?(P(S.position,t,-V),it(n.velocity,R(t),V)):n.physics===we?(P(w.position,t,V),it(e.velocity,R(t),V)):(G(t,.5),W(t)<V&&ce(t,V),K(w.position,t),Qn(S.position,t))}})();var Ni=(()=>{const t=m(),e=m();return(n,o,r,i,s)=>{if(Pn(i,s)){n.allsolid=!0,n.fraction=0;return}b(t,1/0),$(e,r.velocity,o.velocity);const c=e.x,a=e.y,l=e.z,v=s.max.x-i.min.x,f=i.max.x-s.min.x,d=s.max.y-i.min.y,p=i.max.y-s.min.y,_=s.max.z-i.min.z,x=i.max.z-s.min.z;let h=0,w=1/0;if(c<0){if(v<0)return;v>0&&(w=Math.min(-v/c,w)),f<0&&(t.x=f/c,h=Math.max(t.x,h))}else if(c>0){if(f<0)return;f>0&&(w=Math.min(f/c,w)),v<0&&(t.x=-v/c,h=Math.max(t.x,h))}if(!(h>w)){if(a<0){if(d<0)return;d>0&&(w=Math.min(-d/a,w)),p<0&&(t.y=p/a,h=Math.max(t.y,h))}else if(a>0){if(p<0)return;p>0&&(w=Math.min(p/a,w)),d<0&&(t.y=-d/a,h=Math.max(t.y,h))}if(!(h>w)){if(l<0){if(_<0)return;_>0&&(w=Math.min(-_/l,w)),x<0&&(t.z=x/l,h=Math.max(t.z,h))}else if(l>0){if(x<0)return;x>0&&(w=Math.min(x/l,w)),_<0&&(t.z=-_/l,h=Math.max(t.z,h))}h>w||(n.fraction=h,t.x<t.y&&t.x<t.z?M(n.normal,Math.sign(c),0,0):t.y<t.z?M(n.normal,0,Math.sign(a),0):M(n.normal,0,0,Math.sign(l)))}}}})();const Je=(t,e)=>Ie(Be(t,e.boundingBox),e.parent.position);var ji=(()=>{const t=Yt(),e=Yt(),n=Yt();return o=>{for(let s=0;s<o.length;s++){const c=o[s];for(let a=s+1;a<o.length;a++){const l=o[a];if(!(c.physics===we&&l.physics===we)&&!(c.physics===st&&l.physics===st)){var r,i;if(!((c.physics===st||l.physics===st)&&(c.physics===st?(r=c,i=l):(r=l,i=c),vi(Je(t,i),r.parent.position)&&r.collide(i.parent)===!1))&&Pn(Je(e,c),Je(n,l))){if(c.collide(l.parent)===!1||l.collide(c.parent)===!1)continue;Un(c.parent,"collide",l.parent),Un(l.parent,"collide",c.parent),Ci(c,l,e,n)}}}}}})();const Li=270,Wn=100,Di=10,Bi=1,Ii=6,Hi=320,Vi=800,pe=$t(Nt);var Ui=(t,e)=>({object:t,body:e,scene:void 0,command:m(),dt:0,gravity:Vi,speed:Hi,viewForward:m(),viewRight:m(),jump:0,walking:!1}),Gi=t=>{t.command.y<10&&(t.jump=!1),qn(t),t.walking?ki(t):jo(t),qn(t)},ze=()=>({allsolid:!1,fraction:1,endpos:m(),normal:m()});const Fo=(t,e)=>(t.allsolid=e.allsolid,t.fraction=e.fraction,Object.assign(t.endpos,e.endpos),Object.assign(t.normal,e.normal),t),kn=(()=>{const t=ze();return e=>(Fo(e,t),e)})();var xn=(()=>{const t=Yt(),e=Yt(),n=Yt(),o=m(),r=m(),i=ze();return(s,c,a,l,v)=>{kn(a),Object.assign(o,c.velocity),Object.assign(c.velocity,$(r,v,l)),mi(Ie(Be(n,c.boundingBox),v),Ie(Be(t,c.boundingBox),l));for(let f=0;f<s.length;f++){const d=s[f];Pn(n,Ie(Be(e,d.boundingBox),d.parent.position))&&(Ni(kn(i),c,d,t,e),i.fraction<a.fraction&&Fo(a,i))}Object.assign(c.velocity,o),tr(a.endpos,l,v,a.fraction)}})();const Co=(t,e,n,o)=>{const r=Oo(t.scene).filter(i=>i!==t.body&&i.physics!==st);xn(r,t.body,e,n,o)},Xn=5,No=(()=>{const t=m();let e;const n=[...Array(Xn)].map(()=>m()),o=m(),r=ze(),i=m(),s=m(),c=m();return(a,l)=>{l&&(Object.assign(s,a.body.velocity),s.y-=a.gravity*a.dt,a.body.velocity.y=(a.body.velocity.y+s.y)*.5,a.walking&&it(a.body.velocity,pe,V));let v=a.dt;a.walking?(e=1,Object.assign(n[0],pe)):e=0,R(Object.assign(n[e],a.body.velocity)),e++;let f;const d=4;for(f=0;f<d;f++){if(P(Object.assign(i,a.object.position),a.body.velocity,v),Co(a,r,a.object.position,i),r.allsolid)return a.body.velocity.y=0,!0;if(r.fraction>0&&Object.assign(a.object.position,r.endpos),r.fraction===1)break;if(v-=v*r.fraction,e>=Xn)return b(a.body.velocity,0),!0;for(var p=0;p<e;p++)if(Q(r.normal,n[p])>.99){K(a.body.velocity,r.normal);break}if(!(p<e)){for(Object.assign(n[e],r.normal),e++,p=0;p<e;p++)if(!(Q(a.body.velocity,n[p])>=.1)){it(Object.assign(o,a.body.velocity),n[p],V),l&&it(Object.assign(c,s),n[p],V);for(let x=0;x<e;x++)if(x!==p&&!(Q(o,n[x])>=.1)&&(it(o,n[x],V),l&&it(c,n[x],V),!(Q(o,n[p])>=0))){G(Object.assign(o,R(Le(t,n[p],n[x]))),Q(t,a.body.velocity)),l&&G(Object.assign(c,t),Q(t,s));for(let h=0;h<e;h++)if(!(h===p||h===x)&&!(Q(o,n[h])>=.1))return b(a.body.velocity,0),!0}Object.assign(a.body.velocity,o),l&&Object.assign(s,c);break}}}return l&&Object.assign(a.body.velocity,s),f!==0}})(),Wi=t=>t.command.y<10?!1:t.jump?(t.command.y=0,!1):(t.walking=!1,t.jump=!0,t.body.velocity.y=Li,Vr(),!0);var ki=(()=>{const t=m(),e=m();return n=>{if(Wi(n)){jo(n);return}Lo(n);const o=n.command.z,r=n.command.x,i=Do(n);n.viewForward.y=0,n.viewRight.y=0,P(P(b(t,0),R(it(n.viewForward,pe,V)),o),R(it(n.viewRight,pe,V)),r);let s=W(Object.assign(e,t));R(e),s*=i,Bo(n,e,s,Di),it(n.body.velocity,pe,V),!(!n.body.velocity.x&&!n.body.velocity.z)&&No(n,!1)}})(),jo=(()=>{const t=m(),e=m();return n=>{Lo(n);const o=n.command.z,r=n.command.x,i=Do(n);n.viewForward.y=0,n.viewRight.y=0,P(P(b(t,0),R(n.viewForward),o),R(n.viewRight),r),t.y=0,Object.assign(e,t);let s=W(e);R(e),s*=i,Bo(n,e,s,Bi),n.walking&&it(n.body.velocity,pe,V),No(n,!0)}})(),Lo=(()=>{const t=m();return e=>{const n=e.body.velocity;Object.assign(t,n),e.walking&&(t.y=0);const o=W(t);if(o<1){n.x=0,n.z=0;return}let r=0;if(e.walking){const s=o<Wn?Wn:o;r+=s*Ii*e.dt}let i=o-r;i<0&&(i=0),i/=o,G(n,i)}})(),Do=t=>{const e=Math.max(Math.abs(t.command.x),Math.abs(t.command.y),Math.abs(t.command.z));if(!e)return 0;const n=W(t.command);return t.speed*e/(127*n)},Bo=(t,e,n,o)=>{const r=Q(t.body.velocity,e),i=n-r;if(i<=0)return;let s=o*t.dt*n;s>i&&(s=i),P(t.body.velocity,e,s)},qn=(()=>{const t=m(),e=ze();return n=>{if(Object.assign(t,n.object.position),t.y-=.25,Co(n,e,n.object.position,t),e.fraction===1){n.walking=!1;return}n.walking=!0}})();const zt=si();let tn=!1;const Ne=Ee(),Bt=m(),se=m();var Xi=(t,e,n)=>{const o=yt();F(e,o);const r=m(.2,.2,.3),i=ii(m(1,1,1));M(i.position,64,256,-64),F(o,i),n.far=16384;const s=yt();F(s,n),F(o,s);const c=30,a=56,l=ie(ot(ue(c,a,c),nt()),Qe);l.position.y+=a/2,l.visible=!1,Object.assign(s.position,l.position),F(o,l);const v=vt(l);v.update=()=>{};const f=Ui(l,v);f.scene=o;let d=100,p=0;const _=()=>{const g=_n(Object.assign(Bt,s.position),i.shadow.camera.matrixWorldInverse);Object.assign(i.shadow.camera,{left:g.x-512,right:g.x+512,top:g.y+512,bottom:g.y-512}),Mn(i.shadow.camera)};Oe(i),so(i.shadow,i),_();const x=y=>{const g=nt();M(g.color,.7,.7,.75);const z=ie(ot(y,g),we);return z.castShadow=!0,z.receiveShadow=!0,F(o,z),z};[[[160,128,256],[-512,0,128],[ct(fn)]]].map(([y,g,z=[ct(Re)]])=>M(x(T(y,...z)).position,...g)),[[[1024,16,768,8],[0,0,0]],[[128,8,256,8],[256,48,-240]],[[128,8,172,8],[-256,16,-192]],[[160,8,246,8],[128,160,0]],[[512,8,352,8],[0,32,-544]],[[128,8,128,8],[256,64,0]],[[128,8,160,8],[320,96,144]],[[480,8,128,8],[0,128,256]],[[128,24,128,8],[-160,12,0]],[[128,24,128,8],[-160,96,0]]].map(([y,g])=>M(x(Pi(...y)).position,...g)),[].map(([y,g,z,N])=>x(gi(m(...y),m(...g),z,N))),_i(256,0,4).map(y=>[-340,0,y]).map(y=>M(x(wi(24,128)).position,...y));const h=nt();b(h.emissive,1),h.fog=!1,F(s,ot(Oi(15360,512),h));const w=nt();b(w.specular,1),w.fog=!1;const S=ot(Mi(),w);M(S.position,512,1536,-6144),mr(S,-Math.PI/2),vr(S,-Math.PI/8),pr(S,-Math.PI/4),F(o,S);const X=()=>{const y=nt(),g=ot(bi(),y);return b(y.color,.5),b(y.specular,1),g.castShadow=!0,g.receiveShadow=!0,g},B=(y,g)=>{let z=g,N;const O=vt(y);return Ke(y,"collide",Z=>{if(vt(Z).physics===st)if(z--,clearTimeout(N),z<=0){Gr(),gt(y.position);const tt=zi(O.boundingBox,16);Object.assign(tt.position,y.position),Object.assign(tt.quaternion,y.quaternion),F(o,tt),Vt(o,y)}else y.material.emissive.x=1,N=setTimeout(()=>y.material.emissive.x=0,48)}),y},C=(y,g)=>{let z=0;return Gt(y,Ut(N=>{z+=N,z>g&&Vt(y.parent,y)}))},E=()=>{const y=nt();b(y.color,.5),b(y.specular,1);const g=ot(Ri(),y);return g.castShadow=!0,g.receiveShadow=!0,g},Lt=()=>{const y=ue(2,2,8),g=nt();M(g.emissive,2,.5,.5);const z=C(ie(ot(y,g),st));return z.castShadow=!0,z},Tt=(y=2)=>{d-=y,d<=0&&(document.exitPointerLock(),document.querySelector(".e").hidden=!1)},Zt=()=>{let N=0;const O=m(),Z=m(),dt=ze(),tt=160,Xe=10,qe=100,Ye=6,$e=Te(1.1);var H=Gt(B(ie(X(),Qe),5),Ut(ft=>{N===0&&re(H,l);const A=vt(H);P(A.velocity,Mo,ft);const St=an(H,l),j=N===2||re(H,l)?$(Bt,l.position,H.position):b(Bt,0);if(j.y=0,R(j),W(j)&&(sn(Ne,Nt,Math.atan2(j.x,j.z)),jn(H.quaternion,Ne,Math.PI*ft),ce(Object.assign(se,j),tt),Object.assign(O,H.position),P(Object.assign(Z,O),se,16*ft),Object.assign(O,Z),Z.y-=.25,xn(wt,A,dt,O,Z)),St!==cn){const L=A.velocity.y;A.velocity.y=0;const bt=W(A.velocity),ee=Math.max(bt,qe),q=Math.max(bt-ee*Ye*ft,0);ce(A.velocity,q);const ne=Q(A.velocity,j);A.velocity.y=L;const Dt=tt-ne;if(Dt>0){const Ze=Math.min(Xe*ft*tt,Dt);P(A.velocity,j,Ze)}}const Fe=Object.assign(se,H.position);if(Fe.y+=52,$e(ft,re(H,l))){const L=Lt();Object.assign(L.position,Fe),De(L,l.position);const bt=vt(L);G(Pt(Object.assign(bt.velocity,ae),L.quaternion),400),F(o,L),bt.collide=ee=>{if(ee.isEnemy)return!1;ee===l&&Tt(),gt(L.position),Vt(o,L)}}}));return H.isEnemy=!0,H.isPhantom=!0,Ke(H,"collide",ft=>{vt(ft).physics===st&&(N=2)}),H},Kt=()=>{let z=0;const N=m(),O=m(),Z=m(),dt=ze(),tt=400,Xe=10,qe=20,Ye=.3,$e=Te(1.3),H=D(64,128),ft=32;var A=Gt(B(ie(E(),Qe),2),Ut(St=>{z===0&&re(A,l)&&(z=2);const j=vt(A);G(Object.assign(N,j.velocity),-.5);const Fe=an(A,l),L=z===2||re(A,l)?$(Bt,l.position,A.position):b(Bt,0);R(L),W(L)&&(sn(Ne,Nt,Math.atan2(L.x,L.z)),jn(A.quaternion,Ne,Math.PI*St),ce(Object.assign(se,L),tt));const bt=j.velocity.y;if(bt<=32&&(Object.assign(O,A.position),Object.assign(Z,O),Z.y-=ft,xn(wt,j,dt,O,Z),dt.fraction!==1)){const q=Math.max(16,-bt*.5);N.y+=q*(1-dt.fraction)}if(Fe!==cn&&eo(A.position,l.position)>H){const q=W(j.velocity),ne=Math.max(q,qe),Dt=Math.max(q-ne*Ye*St,0);ce(j.velocity,Dt);const Ze=Q(j.velocity,L),Fn=tt-Ze;if(Fn>0){const Yo=Math.min(Xe*St*tt,Fn);P(j.velocity,L,Yo)}}const ee=Object.assign(se,A.position);if($e(St,re(A,l))){const q=Lt();Object.assign(q.position,ee),De(q,l.position);const ne=vt(q);G(Pt(Object.assign(ne.velocity,ae),q.quaternion),400),F(o,q),ne.collide=Dt=>{if(Dt.isEnemy)return!1;Dt===l&&Tt(),gt(q.position),Vt(o,q)}}K(j.velocity,N)}));return A.isEnemy=!0,A.isScanner=!0,Ke(A,"collide",St=>{vt(St).physics===st&&(z=2)}),A};var gt=y=>{const g=Ai(4);Object.assign(g.position,y),F(o,g)};const Qt=Te(.1);let At,wt;const Jt=Te(7),te=Te(3);return Gt(o,Ut(y=>{At=Oo(o),wt=At.filter(z=>z.physics===we),wt.map(z=>z.parent),ji(At),f.dt=y,b(f.command,0),(zt.KeyW||zt.ArrowUp)&&f.command.z++,(zt.KeyS||zt.ArrowDown)&&f.command.z--,(zt.KeyA||zt.ArrowLeft)&&f.command.x--,(zt.KeyD||zt.ArrowRight)&&f.command.x++,zt.Space&&f.command.y++;const g=127;if(G(f.command,g),M(f.viewForward,0,0,-1),M(f.viewRight,1,0,0),Pt(M(f.viewForward,0,0,-1),n.quaternion),R(rn(M(f.viewRight,0,-1,0),f.viewForward)),Gi(f),Object.assign(s.position,l.position),_(),d=wn(d+1*y,0,100),document.querySelector(".h").textContent=Math.round(d),document.querySelector(".s").textContent=p,l.position.y<=-2048&&Tt(100),Qt(y,tn)){Ir();const z=ue(2,2,8),N=nt();M(N.emissive,.5,.5,2);const O=C(ie(ot(z,N),st),4);O.castShadow=!0,De(O,P(M(Bt,xt(1),xt(1),xt(1)),Pt(Object.assign(se,ae),n.quaternion),-16));const Z=vt(O);P(Z.velocity,Pt(Object.assign(Bt,ae),O.quaternion),800),K(Pt(M(O.position,c/4,-a/8,0),n.quaternion),l.position),F(o,O),Z.collide=dt=>{if(dt===l)return!1;gt(O.position),Vt(o,O),dt.isPhantom&&(p+=100),dt.isScanner&&(p+=50)}}if(Jt(y)){const z=Zt();M(z.position,D(-160,150),D(128,32),D(-512,-640)),F(o,z)}if(te(y)){const z=Kt();M(z.position,D(-160,160),D(128,32),D(-512,-720)),F(o,z)}})),addEventListener("mousedown",()=>tn=!0),addEventListener("mouseup",()=>tn=!1),{ambient:r,directional:i}},qi=(t,e)=>{document.addEventListener("pointerlockchange",()=>t.enabled=e===document.pointerLockElement),addEventListener("click",()=>e.requestPointerLock())},Io=(t,e,n)=>{const o=t.createProgram(),r=(i,s)=>{const c=t.createShader(i);t.shaderSource(c,s),t.compileShader(c),t.attachShader(o,c)};return r(t.VERTEX_SHADER,e),r(t.FRAGMENT_SHADER,n),t.linkProgram(o),o},Yi=(t,e)=>{const n=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),n},$i=(t,e,n,o)=>{t.bindBuffer(t.ARRAY_BUFFER,n),t.enableVertexAttribArray(e),t.vertexAttribPointer(e,o,t.FLOAT,!1,0,0)},he=(t,e,n)=>t.uniformMatrix4fv(e,!1,n),Xt=(t,e,n)=>t.uniform3f(e,n.x,n.y,n.z),Ho=(t,e)=>{const n={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<o;r++){const i=t.getActiveAttrib(e,r),{name:s}=i;n[s]=t.getAttribLocation(e,s)}return n},Vo=(t,e)=>{const n={},o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<o;r++){const i=t.getActiveUniform(e,r),{name:s}=i;n[s]=t.getUniformLocation(e,s)}return n};const Zi=`
#version 300 es

precision highp float;
precision highp int;

vec4 packDepthToRGBA(float v) {
  vec4 r = vec4(
    fract(
      v *
      // PackFactors
      vec3(256 * 256 * 256, 256 * 256, 256)
    ),
    v
  );
  r.yzw -=
    r.xyz *
    // ShiftRight8
    1. / 256.;
  return
    r *
    // PackUpscale
    256. / 255.;
}

in vec2 vHighPrecisionZW;

out vec4 color;

void main() {
  color = packDepthToRGBA(
    // fragCoordZ
    .5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + .5
  );
}
`.trim(),Ki=`
#version 300 es

precision highp float;
precision highp int;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
in vec3 position;

out vec2 vHighPrecisionZW;

void main() {
  gl_Position =
    projectionMatrix *
    // mvPosition
    modelViewMatrix * vec4(position, 1);
  vHighPrecisionZW = gl_Position.zw;
}
`.trim(),Qi=`
#version 300 es

precision highp float;
precision highp int;

#define saturate(a) clamp(a, 0., 1.)

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;

in vec3 vColor;

uniform bool fog;
uniform vec3 fogColor;
in vec3 vFogPosition;
uniform float fogNear;
uniform float fogFar;

uniform bool receiveShadow;
uniform vec3 ambient;

struct DirectionalLight {
  vec3 direction;
  vec3 color;
};

uniform DirectionalLight directionalLight;

in vec3 vViewPosition;

uniform sampler2D directionalShadowMap;
in vec4 vDirectionalShadowCoord;

out vec4 color;

void main() {
  vec3 diffuseColor = diffuse * vColor;

  vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  vec3 viewDir = normalize(vViewPosition);

  vec4 shadowCoord = vDirectionalShadowCoord;
  shadowCoord.xyz /= shadowCoord.w;
  vec3 irradiance =
    // dotNL
    saturate(dot(normal, directionalLight.direction)) *
    directionalLight.color *
    // getShadow
    (receiveShadow &&
    all(
      bvec2(
        all(
          bvec4(
            shadowCoord.x >= 0.,
            shadowCoord.x <= 1.,
            shadowCoord.y >= 0.,
            shadowCoord.y <= 1.
          )
        ),
        shadowCoord.z <= 1.
      )
    )
      ? // texture2DCompare
        step(
          shadowCoord.z,
          // unpackRGBAToDepth
          dot(
            texture(directionalShadowMap, shadowCoord.xy),
            // UnpackFactors
            // UnpackDownscale
            255. / 256. /
            // PackFactors
            vec4(256 * 256 * 256, 256 * 256, 256, 1.)
          )
        )
      : 1.);
  vec3 halfDir = normalize(directionalLight.direction + viewDir);
  float dotVH = saturate(dot(viewDir, halfDir));
  float fresnel = exp2((-5.55473 * dotVH - 6.98316) * dotVH);

  color = vec4(
    mix(
      // outgoingLight
      // directDiffuse
      irradiance * diffuseColor +
      // indirectDiffuse
      ambient * diffuseColor +
      // directSpecular
      irradiance *
        // F_Schlick
        (specular * (1. - fresnel) + fresnel) *
        // G_BlinnPhong_Implicit
        .25 *
        // D_BlinnPhong
        (shininess * .5 + 1.) *
        pow(
          // dotNH
          saturate(dot(normal, halfDir)),
          shininess
       ) +
      emissive,
      fogColor,
      // fogFactor
      fog
        ? smoothstep(
            fogNear,
            fogFar,
            // fogDepth
            length(vFogPosition)
          )
        : 0.
    ),
    1
  );
}
`.trim(),Ji=`
#version 300 es

precision highp float;
precision highp int;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
in vec3 position;
out vec3 vViewPosition;

in vec3 color;
out vec3 vColor;

out vec3 vFogPosition;

uniform mat4 directionalShadowMatrix;
out vec4 vDirectionalShadowCoord;

void main() {
  vColor.xyz = color.xyz;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1);

  gl_Position = projectionMatrix * mvPosition;
  vViewPosition = -mvPosition.xyz;

  vDirectionalShadowCoord =
    directionalShadowMatrix *
    // worldPosition
    modelMatrix * vec4(position, 1);

  vFogPosition = mvPosition.xyz;
}
`.trim(),u=canvas.getContext("webgl2");u.clearColor(0,0,0,0);u.enable(u.DEPTH_TEST);u.enable(u.CULL_FACE);u.depthFunc(u.LEQUAL);let xe=!1;const J=yt();J.fogColor=m();J.fogNear=1;J.fogFar=1e3;const ht=_r(90);qi(Er(ht),canvas);const{ambient:ts,directional:mt}=Xi(u,J,ht),Rn=Io(u,Ji,Qi),On=Io(u,Ki,Zi),Yn=Ho(u,Rn),I=Vo(u,Rn),es=Ho(u,On),$n=Vo(u,On),Uo=u.createTexture(),Me=1024;u.bindTexture(u.TEXTURE_2D,Uo);u.texImage2D(u.TEXTURE_2D,0,u.RGBA8,Me,Me,0,u.RGBA,u.UNSIGNED_BYTE,null);u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.NEAREST);u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.NEAREST);u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE);u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE);const Go=u.createFramebuffer();u.bindFramebuffer(u.FRAMEBUFFER,Go);u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,Uo,0);const Wo=u.createRenderbuffer();u.bindRenderbuffer(u.RENDERBUFFER,Wo);u.renderbufferStorage(u.RENDERBUFFER,u.DEPTH_COMPONENT16,Me,Me);u.framebufferRenderbuffer(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.RENDERBUFFER,Wo);const He=1/60;let en=He,je;const ns=()=>{const t=(performance.now()||0)*.001;je||(je=t);const e=Math.min(t-je,.1);for(en+=e,je=t;en>=He;)ye(J,n=>{Rr(n,He,J)}),en-=He},Zn=new WeakMap,yn=(t,e,n,o)=>{const r=Zn.get(n)||{};Zn.set(n,r);const i=r[t]||Yi(u,n[t]);r[t]=i,$i(u,e,i,o)},Kn=new WeakMap,ko=t=>{const e=Kn.get(t)||$o(t);return Kn.set(t,e),e},os=t=>{const{geometry:e}=t;he(u,$n.modelViewMatrix,be(t.modelViewMatrix,mt.shadow.camera.matrixWorldInverse,t.matrixWorld)),he(u,$n.projectionMatrix,mt.shadow.camera.projectionMatrix);const n=ko(e);yn("position",es.position,n,3),u.drawArrays(u.TRIANGLES,0,n.position.length/3)},rs=t=>{const{geometry:e,material:n}=t;u.uniform1i(I.fog,n.fog),Xt(u,I.fogColor,J.fogColor),u.uniform1f(I.fogNear,J.fogNear),u.uniform1f(I.fogFar,J.fogFar),Xt(u,I.diffuse,n.color),Xt(u,I.specular,n.specular),u.uniform1f(I.shininess,n.shininess),Xt(u,I.emissive,n.emissive),u.uniform1i(I.receiveShadow,t.receiveShadow),he(u,I.modelMatrix,t.matrixWorld),he(u,I.modelViewMatrix,be(t.modelViewMatrix,ht.matrixWorldInverse,t.matrixWorld)),he(u,I.projectionMatrix,ht.projectionMatrix);const o=ko(e);yn("position",Yn.position,o,3),yn("color",Yn.color,o,3),u.drawArrays(u.TRIANGLES,0,o.position.length/3)},nn=m(),on=m(),Xo=()=>{Oe(J),ht.matrixWorldInverse.set(ht.matrixWorld),no(ht.matrixWorldInverse),u.useProgram(On),u.bindFramebuffer(u.FRAMEBUFFER,Go),u.viewport(0,0,Me,Me),u.clearColor(1,1,1,1),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.frontFace(u.CW),so(mt.shadow,mt),Mn(mt.shadow.camera),ye(J,e=>{e.visible&&e.geometry&&e.castShadow&&os(e)}),u.bindFramebuffer(u.FRAMEBUFFER,null),u.useProgram(Rn),u.viewport(0,0,canvas.width,canvas.height),u.clearColor(0,0,0,0),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.frontFace(u.CCW),Xt(u,I.ambient,ts),Ve(on,mt.matrixWorld),Ve(nn,mt.target.matrixWorld),Ko(Qn(on,nn),ht.matrixWorldInverse);const t=G(Object.assign(nn,mt.color),mt.intensity);Xt(u,I["directionalLight.direction"],on),Xt(u,I["directionalLight.color"],t),he(u,I.directionalShadowMatrix,mt.shadow.matrix),ye(J,e=>{e.visible&&e.geometry&&e.material&&rs(e)})};var ke=()=>{ns(),Xo(),xe&&requestAnimationFrame(ke)};const qo=(t,e)=>{canvas.width=t*devicePixelRatio,canvas.height=e*devicePixelRatio,canvas.style.width=t+"px",canvas.style.height=e+"px",u.viewport(0,0,canvas.width,canvas.height),ht.aspect=t/e,io(ht)};qo(innerWidth,innerHeight);ke();addEventListener("resize",()=>{qo(innerWidth,innerHeight),Xo()});addEventListener("keypress",t=>{t.code==="KeyP"&&(xe=!xe,xe?ke():document.exitPointerLock())});addEventListener("click",()=>{xe||(xe=!0,ke())});
