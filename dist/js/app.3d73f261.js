(function(e){function t(t){for(var r,u,o=t[0],i=t[1],l=t[2],p=0,b=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&b.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01aa":function(e,t,n){},"323f":function(e,t,n){"use strict";n("01aa")},4796:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}n("323f");const c={};c.render=a;var u=c,o=n("6c02"),i={class:"welcome container"},l=Object(r["g"])("p",null,"Welcome",-1),s={key:0},p=Object(r["g"])("h2",null,"Login",-1),b=Object(r["f"])("No account yet? "),d=Object(r["f"])(" instead"),f={key:1},v=Object(r["g"])("h2",null,"Sign Up",-1),O=Object(r["f"])("Already registered? "),j=Object(r["f"])(" instead");function m(e,t,n,a,c,u){var o=Object(r["x"])("LoginForm"),m=Object(r["x"])("SignUpForm");return Object(r["q"])(),Object(r["d"])("div",i,[l,a.showLogin?(Object(r["q"])(),Object(r["d"])("div",s,[p,Object(r["g"])(o,{onLogin:a.enterChat},null,8,["onLogin"]),Object(r["g"])("p",null,[b,Object(r["g"])("span",{onClick:t[1]||(t[1]=function(e){return a.showLogin=!1})},"Signup"),d])])):(Object(r["q"])(),Object(r["d"])("div",f,[v,Object(r["g"])(m,{onSignup:a.enterChat},null,8,["onSignup"]),Object(r["g"])("p",null,[O,Object(r["g"])("span",{onClick:t[2]||(t[2]=function(e){return a.showLogin=!0})},"Login"),j])]))])}var g={class:"error"},h=Object(r["g"])("button",null,"Sign Up",-1);function w(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=Object(r["G"])((function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{type:"text",required:"",placeholder:"display name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.displayName=e})},null,512),[[r["B"],a.displayName]]),Object(r["E"])(Object(r["g"])("input",{type:"email",required:"",placeholder:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.email=e})},null,512),[[r["B"],a.email]]),Object(r["E"])(Object(r["g"])("input",{type:"password",required:"",placeholder:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.password=e})},null,512),[[r["B"],a.password]]),Object(r["g"])("div",g,Object(r["z"])(a.error),1),h],32)}n("96cf");var y=n("1da1"),x=n("260b"),S=(n("e71f"),n("ea7b"),{apiKey:"AIzaSyC0NgoDRtPLcdDw9IcNJCa0TivboIfMnKY",authDomain:"vue-trial-n1.firebaseapp.com",projectId:"vue-trial-n1",storageBucket:"vue-trial-n1.appspot.com",messagingSenderId:"927660770686",appId:"1:927660770686:web:b45ece4d490b3d3a0d1f2f"});x["a"].initializeApp(S);var k=x["a"].auth(),q=x["a"].firestore(),C=x["a"].firestore.FieldValue.serverTimestamp,R=Object(r["v"])(null),L=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return R.value=null,e.prev=1,e.next=4,k.createUserWithEmailAndPassword(t,n);case 4:if(a=e.sent,a){e.next=7;break}throw new Error("Could not complete the signup");case 7:return e.next=9,a.user.updateProfile({displayName:r});case 9:return R.value=null,e.abrupt("return",a);case 13:e.prev=13,e.t0=e["catch"](1),console.log(e.t0.message),R.value=e.t0.message;case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n,r){return e.apply(this,arguments)}}(),U=function(){return{error:R,signup:L}},A=U,N={setup:function(e,t){var n=Object(r["v"])(""),a=Object(r["v"])(""),c=Object(r["v"])(""),u=A(),o=u.error,i=u.signup,l=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i(a.value,c.value,n.value);case 2:o.value||t.emit("signup");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{displayName:n,email:a,password:c,handleSubmit:l,error:o}}};N.render=w;var E=N,z={class:"error"},P=Object(r["g"])("button",null,"Login",-1);function B(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=Object(r["G"])((function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{type:"email",required:"",placeholder:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[r["B"],a.email]]),Object(r["E"])(Object(r["g"])("input",{type:"password",required:"",placeholder:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e}),autocomplete:"on"},null,512),[[r["B"],a.password]]),Object(r["g"])("div",z,Object(r["z"])(a.error),1),P],32)}var D=Object(r["v"])(null),I=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return D.value=null,e.prev=1,e.next=4,k.signInWithEmailAndPassword(t,n);case 4:return r=e.sent,D.value=null,e.abrupt("return",r);case 9:e.prev=9,e.t0=e["catch"](1),D.value="Incorrect login credentials";case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){return{error:D,login:I}},F=_,W={setup:function(e,t){var n=Object(r["v"])(""),a=Object(r["v"])(""),c=F(),u=c.error,o=c.login,i=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(n.value,a.value);case 2:u.value||t.emit("login");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{email:n,password:a,handleSubmit:i,error:u}}};W.render=B;var V=W,T={components:{SignUpForm:E,LoginForm:V},setup:function(){var e=Object(r["v"])(!0),t=Object(o["c"])(),n=function(){t.push({name:"Chatroom"})};return{showLogin:e,enterChat:n}}};n("7512");T.render=m;var M=T,H={class:"chatroom container"};function G(e,t,n,a,c,u){var o=Object(r["x"])("NavBar"),i=Object(r["x"])("ChatWindow"),l=Object(r["x"])("NewChatForm");return Object(r["q"])(),Object(r["d"])("div",H,[Object(r["g"])(o),Object(r["g"])(i),Object(r["g"])(l)])}var J={key:0},K=Object(r["f"])("Hey there "),Y={class:"name"},Q={class:"email"};function X(e,t,n,a,c,u){return a.user?(Object(r["q"])(),Object(r["d"])("nav",J,[Object(r["g"])("div",null,[Object(r["g"])("p",null,[K,Object(r["g"])("span",Y,Object(r["z"])(a.user.displayName),1)]),Object(r["g"])("p",Q,"Currently logged in as "+Object(r["z"])(a.user.email),1)]),Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return a.handleLogout&&a.handleLogout.apply(a,arguments)})},"Logout")])):Object(r["e"])("",!0)}var Z=Object(r["v"])(null),$=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Z.value=null,e.prev=1,e.next=4,k.signOut();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0.message),Z.value=e.t0.value;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){return{logout:$,error:Z}},te=ee,ne=Object(r["v"])(k.currentUser);k.onAuthStateChanged((function(e){ne.value=e}));var re=function(){return{user:ne}},ae=re,ce={setup:function(){var e=te(),t=e.logout,n=(e.error,ae()),r=n.user,a=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleLogout:a,user:r}}};n("5c2d");ce.render=X;var ue=ce,oe=Object(r["H"])("data-v-281e1f43");Object(r["t"])("data-v-281e1f43");var ie={key:0,class:"error"};Object(r["r"])();var le=oe((function(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",null,[Object(r["E"])(Object(r["g"])("textarea",{placeholder:"Type a message and hit enter to send..","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.message=e}),onKeypress:t[2]||(t[2]=Object(r["F"])(Object(r["G"])((function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),["prevent"]),["enter"]))},null,544),[[r["B"],a.message]]),a.error?(Object(r["q"])(),Object(r["d"])("div",ie,Object(r["z"])(a.error),1)):Object(r["e"])("",!0)])})),se=function(e){var t=Object(r["v"])(null),n=function(){var n=Object(y["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.value=null,n.prev=1,n.next=4,q.collection(e).add(r);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),t.value="could not send the message";case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}();return{error:t,addDoc:n}},pe=se,be={setup:function(){var e=Object(r["v"])(""),t=ae(),n=t.user,a=pe("messages"),c=a.error,u=a.addDoc,o=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={name:n.value.displayName,message:e.value,createdAt:C()},t.next=3,u(r);case 3:c.value||(e.value="");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{message:e,handleSubmit:o,error:c}}};n("ccf6");be.render=le,be.__scopeId="data-v-281e1f43";var de=be,fe=(n("b0c0"),Object(r["H"])("data-v-23f78880"));Object(r["t"])("data-v-23f78880");var ve={class:"chat-window"},Oe={key:0},je={key:1,class:"messages",ref:"messages"},me={class:"created-at"},ge={class:"name"},he={class:"message"};Object(r["r"])();var we=fe((function(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("div",ve,[a.error?(Object(r["q"])(),Object(r["d"])("div",Oe,Object(r["z"])(a.error),1)):Object(r["e"])("",!0),a.formattedDocuments?(Object(r["q"])(),Object(r["d"])("div",je,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.formattedDocuments,(function(e){return Object(r["q"])(),Object(r["d"])("div",{key:e.id,class:"single"},[Object(r["g"])("span",me,Object(r["z"])(e.createdAt),1),Object(r["g"])("span",ge,Object(r["z"])(e.name),1),Object(r["g"])("span",he,Object(r["z"])(e.message),1)])})),128))],512)):Object(r["e"])("",!0)])})),ye=(n("d81d"),n("5530")),xe=(n("4160"),n("159b"),function(e){var t=Object(r["v"])(null),n=Object(r["v"])(null),a=q.collection(e).orderBy("createdAt"),c=a.onSnapshot((function(e){var r=[];e.docs.forEach((function(e){e.data().createdAt&&r.push(Object(ye["a"])(Object(ye["a"])({},e.data()),{},{id:e.id}))})),n.value=r,t.value=null}),(function(e){n.value=null,t.value="could not fecth the data"}));return Object(r["D"])((function(e){e((function(){return c()}))})),{error:t,documents:n}}),Se=xe,ke=n("ef1b"),qe={setup:function(){var e=Se("messages"),t=e.error,n=e.documents,a=Object(r["b"])((function(){if(n.value)return n.value.map((function(e){var t=Object(ke["a"])(e.createdAt.toDate());return Object(ye["a"])(Object(ye["a"])({},e),{},{createdAt:t})}))})),c=Object(r["v"])(null);return Object(r["p"])((function(){c.value.scrollTop=c.value.scrollHeight})),{error:t,documents:n,formattedDocuments:a,messages:c}}};n("6c8b");qe.render=we,qe.__scopeId="data-v-23f78880";var Ce=qe,Re={components:{NavBar:ue,NewChatForm:de,ChatWindow:Ce},setup:function(){var e=Object(o["c"])(),t=ae(),n=t.user;Object(r["C"])(n,(function(){n.value||e.push({name:"Welcome"})}))}};Re.render=G;var Le,Ue=Re,Ae=function(e,t,n){var r=k.currentUser;r?n():n({name:"Welcome"})},Ne=function(e,t,n){var r=k.currentUser;r?n({name:"Chatroom"}):n()},Ee=[{path:"/",name:"Welcome",component:M,beforeEnter:Ne},{path:"/chatroom",name:"Chatroom",component:Ue,beforeEnter:Ae}],ze=Object(o["a"])({history:Object(o["b"])("/"),routes:Ee}),Pe=ze;n("845f");k.onAuthStateChanged((function(){Le||(Le=Object(r["c"])(u).use(Pe).mount("#app"))}))},"5c2d":function(e,t,n){"use strict";n("ef98")},"6c8b":function(e,t,n){"use strict";n("4796")},7512:function(e,t,n){"use strict";n("909b")},"845f":function(e,t,n){},"909b":function(e,t,n){},ccf6:function(e,t,n){"use strict";n("d018")},d018:function(e,t,n){},ef98:function(e,t,n){}});
//# sourceMappingURL=app.3d73f261.js.map