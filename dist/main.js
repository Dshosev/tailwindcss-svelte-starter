!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function a(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function c(e){return document.createTextNode(e)}function m(){return c(" ")}function d(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function f(e,t){t=""+t,e.data!==t&&(e.data=t)}function g(e,t,n){e.classList[n?"add":"remove"](t)}let h;function v(e){h=e}const $=[],b=Promise.resolve();let N=!1;const y=[],_=[],x=[];function j(e){_.push(e)}function I(){const e=new Set;do{for(;$.length;){const e=$.shift();v(e),T(e.$$)}for(;y.length;)y.shift()();for(;_.length;){const t=_.pop();e.has(t)||(t(),e.add(t))}}while($.length);for(;x.length;)x.pop()();N=!1}function T(e){e.fragment&&(e.update(e.dirty),r(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(j))}let k;function C(e,n,i){const{fragment:o,on_mount:s,on_destroy:l,after_render:u}=e.$$;o.m(n,i),j(()=>{const n=s.map(t).filter(a);l?l.push(...n):r(n),e.$$.on_mount=[]}),u.forEach(j)}function w(e,t){e.$$.dirty||($.push(e),N||(N=!0,b.then(I)),e.$$.dirty=n()),e.$$.dirty[t]=!0}function E(t,a,i,o,s,l){const u=h;v(t);const c=a.props||{},m=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let d=!1;var p;m.ctx=i?i(t,c,(e,n)=>{m.ctx&&s(m.ctx[e],m.ctx[e]=n)&&(m.bound[e]&&m.bound[e](n),d&&w(t,e))}):c,m.update(),d=!0,r(m.before_render),m.fragment=o(m.ctx),a.target&&(a.hydrate?m.fragment.l((p=a.target,Array.from(p.childNodes))):m.fragment.c(),a.intro&&t.$$.fragment.i&&t.$$.fragment.i(),C(t,a.target,a.anchor),I()),v(u)}class A{$destroy(){var t,n;n=!0,(t=this).$$&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function F(t){var n,r,a,i,d,p,h,v,$,b,N,y,_,x,j;return{c(){n=u("div"),r=u("header"),a=u("div"),i=u("img"),d=m(),p=u("div"),h=u("h1"),v=c(t.userName),$=m(),b=u("h2"),N=c(t.jobTitle),y=m(),_=u("div"),x=u("p"),j=c(t.description),i.src=t.userImage,i.alt=t.userName,i.className="svelte-juroly",a.className="thumb svelte-juroly",g(a,"thumb-placeholder",!t.userImage),h.className="svelte-juroly",b.className="svelte-juroly",p.className="user-data svelte-juroly",r.className="svelte-juroly",_.className="description svelte-juroly",n.className="contact-card svelte-juroly"},m(e,t){s(e,n,t),o(n,r),o(r,a),o(a,i),o(r,d),o(r,p),o(p,h),o(h,v),o(p,$),o(p,b),o(b,N),o(n,y),o(n,_),o(_,x),o(x,j)},p(e,t){e.userImage&&(i.src=t.userImage),e.userName&&(i.alt=t.userName),e.userImage&&g(a,"thumb-placeholder",!t.userImage),e.userName&&f(v,t.userName),e.jobTitle&&f(N,t.jobTitle),e.description&&f(j,t.description)},i:e,o:e,d(e){e&&l(n)}}}function L(e,t,n){let{userName:r,jobTitle:a,description:i,userImage:o}=t;return e.$set=(e=>{"userName"in e&&n("userName",r=e.userName),"jobTitle"in e&&n("jobTitle",a=e.jobTitle),"description"in e&&n("description",i=e.description),"userImage"in e&&n("userImage",o=e.userImage)}),{userName:r,jobTitle:a,description:i,userImage:o}}class M extends A{constructor(e){super(),E(this,e,L,F,i,["userName","jobTitle","description","userImage"])}}function O(e){var t,n=new M({props:{userName:e.name,jobTitle:e.title,description:e.description,userImage:e.image}});return{c(){n.$$.fragment.c()},m(e,r){C(n,e,r),t=!0},p(e,t){var r={};e.name&&(r.userName=t.name),e.title&&(r.jobTitle=t.title),e.description&&(r.description=t.description),e.image&&(r.userImage=t.image),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function S(e){var t,n,a,i,f,g,h,v,$,b,N,y,_,x,j,I,T,C,w,E,A,F,L,M,S,U,q=toggle&&O(e);return{c(){t=u("div"),n=u("div"),(a=u("label")).textContent="User Name",i=m(),f=u("input"),g=m(),h=u("div"),(v=u("label")).textContent="Job Title",$=m(),b=u("input"),N=m(),y=u("div"),(_=u("label")).textContent="Image URL",x=m(),j=u("input"),I=m(),T=u("div"),(C=u("label")).textContent="Description",w=m(),E=u("textarea"),A=m(),(F=u("button")).textContent="Add Contact Card",L=m(),q&&q.c(),M=c(""),a.htmlFor="userName",p(f,"type","text"),f.id="userName",f.className="svelte-1kgh5y2",n.className="form-control",v.htmlFor="jobTitle",p(b,"type","text"),b.id="jobTitle",b.className="svelte-1kgh5y2",h.className="form-control",_.htmlFor="image",p(j,"type","text"),j.id="image",j.className="svelte-1kgh5y2",y.className="form-control",C.htmlFor="desc",E.className="border mt-2",E.rows="3",E.id="desc",T.className="form-control",t.id="form",t.className="svelte-1kgh5y2",F.className=" mt-2 border-gray-500 border px-4 py-2 bg-blue-600 hover:bg-blue-400\n  text-white",U=[d(f,"input",e.input0_input_handler),d(b,"input",e.input1_input_handler),d(j,"input",e.input2_input_handler),d(E,"input",e.textarea_input_handler),d(F,"click",e.addContact)]},m(r,l){s(r,t,l),o(t,n),o(n,a),o(n,i),o(n,f),f.value=e.name,o(t,g),o(t,h),o(h,v),o(h,$),o(h,b),b.value=e.title,o(t,N),o(t,y),o(y,_),o(y,x),o(y,j),j.value=e.image,o(t,I),o(t,T),o(T,C),o(T,w),o(T,E),E.value=e.description,s(r,A,l),s(r,F,l),s(r,L,l),q&&q.m(r,l),s(r,M,l),S=!0},p(e,t){var n;e.name&&f.value!==t.name&&(f.value=t.name),e.title&&b.value!==t.title&&(b.value=t.title),e.image&&j.value!==t.image&&(j.value=t.image),e.description&&(E.value=t.description),toggle?q?(q.p(e,t),q.i(1)):((q=O(t)).c(),q.i(1),q.m(M.parentNode,M)):q&&(n=(()=>{q.d(1),q=null}),(k={remaining:0,callbacks:[]}).callbacks.push(n),q.o(1),k.remaining||r(k.callbacks))},i(e){S||(q&&q.i(),S=!0)},o(e){q&&q.o(),S=!1},d(e){e&&(l(t),l(A),l(F),l(L)),q&&q.d(e),e&&l(M),r(U)}}}function U(e,t,n){let r="Max",a="",i="",o="",s="empty";return{name:r,title:a,image:i,description:o,addContact:function(){n("formState",s="done")},input0_input_handler:function(){r=this.value,n("name",r)},input1_input_handler:function(){a=this.value,n("title",a)},input2_input_handler:function(){i=this.value,n("image",i)},textarea_input_handler:function(){o=this.value,n("description",o)}}}new class extends A{constructor(e){super(),E(this,e,U,S,i,[])}}({target:document.body})}();
//# sourceMappingURL=main.js.map
