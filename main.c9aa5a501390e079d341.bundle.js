webpackJsonp([1],{"/fcW":function(n,t){function o(n){throw new Error("Cannot find module '"+n+"'.")}o.keys=function(){return[]},o.resolve=o,n.exports=o,o.id="/fcW"},0:function(n,t,o){n.exports=o("x35b")},"1A80":function(n,t,o){"use strict";function l(n){return r._12(0,[(n()(),r._13(0,null,null,6,"li",[],null,null,null,null,null)),(n()(),r._14(null,["\n\n                  "])),(n()(),r._13(0,null,null,1,"div",[["class","item"],["draggable","true"]],null,[[null,"dragstart"]],function(n,t,o){var l=!0,i=n.component;if("dragstart"===t){l=!1!==i.dragStart(o,n.context.$implicit)&&l}return l},null,null)),(n()(),r._14(null,["\n                    "," | ","\n                  "])),(n()(),r._14(null,["\n                  "])),(n()(),r._13(0,null,null,0,"div",[["class","dropzone"]],null,[[null,"drop"],[null,"dragover"],[null,"dragleave"]],function(n,t,o){var l=!0,i=n.component;if("drop"===t){l=!1!==i.drop(o,n.context.index)&&l}if("dragover"===t){l=!1!==i.dragOver(o)&&l}if("dragleave"===t){l=!1!==i.dragLeave(o)&&l}return l},null,null)),(n()(),r._14(null,["\n                "]))],null,function(n,t){n(t,3,0,t.context.$implicit.name,t.context.$implicit.position)})}function i(n){return r._12(0,[(n()(),r._13(0,null,null,2,"li",[],null,null,null,null,null)),(n()(),r._14(null,["",""])),r._15(0,a.f,[])],null,function(n,t){n(t,1,0,r._16(t,1,0,r._17(t,2).transform(t.context.$implicit)))})}function u(n){return r._12(0,[r._15(0,s.a,[]),(n()(),r._14(null,["\n              "])),(n()(),r._13(0,null,null,5,"ul",[["class","navigator"]],null,null,null,null,null)),(n()(),r._14(null,["\n                "])),(n()(),r._18(16777216,null,null,2,null,l)),r._19(802816,null,0,a.g,[r._2,r._3,r.m],{ngForOf:[0,"ngForOf"]},null),r._20(2),(n()(),r._14(null,["\n              "])),(n()(),r._14(null,["\n\n              "])),(n()(),r._13(0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],function(n,t,o){var l=!0,i=n.component;if("click"===t){l=!1!==i.goBack()&&l}return l},null,null)),(n()(),r._14(null,["Go Back"])),(n()(),r._14(null,["\n              "])),(n()(),r._13(0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],function(n,t,o){var l=!0,i=n.component;if("click"===t){l=!1!==i.goForward()&&l}return l},null,null)),(n()(),r._14(null,["Go Forward"])),(n()(),r._14(null,["\n\n              "])),(n()(),r._13(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),r._14(null,["\n                "])),(n()(),r._18(16777216,null,null,1,null,i)),r._19(802816,null,0,a.g,[r._2,r._3,r.m],{ngForOf:[0,"ngForOf"]},null),(n()(),r._14(null,["\n              "])),(n()(),r._14(null,["\n            "]))],function(n,t){var o=t.component;n(t,5,0,r._16(t,5,0,n(t,6,0,r._17(t,0),o.items,o.positionChanges))),n(t,18,0,o.positionChanges)},function(n,t){var o=t.component;n(t,9,0,!o.positionChanges.length),n(t,12,0,!o.backPositionChanges.length)})}function e(n){return r._12(0,[(n()(),r._13(0,null,null,1,"app-root",[],null,null,null,u,p)),r._19(49152,null,0,c.a,[],null,null)],null,null)}var r=o("3j3K"),a=o("2Je8"),s=o("oZaG"),c=o("YWx4");o.d(t,"a",function(){return g});var d=[".navigator[_ngcontent-%COMP%] { background-color: brown; width: 100px;}",".item[_ngcontent-%COMP%] { background-color: beige; height: 30px;}",".dropzone[_ngcontent-%COMP%] { background-color: brown; height: 10px;}"],p=r._11({encapsulation:0,styles:d,data:{}}),g=r._21("app-root",c.a,e,{},{},[])},Iksp:function(n,t,o){"use strict";o.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},YWx4:function(n,t,o){"use strict";o.d(t,"a",function(){return l});var l=function(){function n(){this.items=[{id:10,position:0,name:"Anastacia"},{id:1,position:1,name:"Sofia"},{id:2,position:2,name:"Mitra"},{id:3,position:3,name:"Kima"},{id:4,position:4,name:"Noa"},{id:5,position:5,name:"Lia"},{id:6,position:6,name:"Bia"},{id:7,position:7,name:"Joana"},{id:8,position:8,name:"Lel"},{id:9,position:9,name:"Lol"}],this.positionChanges=[],this.backPositionChanges=[]}return n.prototype.dragStart=function(n,t){n.dataTransfer.setData("item",JSON.stringify(t))},n.prototype.dragOver=function(n){n.target.style.backgroundColor="black",n.target.style.height="30px",n.preventDefault()},n.prototype.dragLeave=function(n){n.target.style.backgroundColor="brown",n.target.style.height="10px"},n.prototype.drop=function(n,t){n.preventDefault(),n.target.style.backgroundColor="brown",n.target.style.height="10px";var o=JSON.parse(n.dataTransfer.getData("item"));this.positionChanges=this.positionChanges.concat([{oldPosition:o.position,newPosition:t}]),console.log(this.positionChanges)},n.prototype.goBack=function(){var n=this.positionChanges.splice(this.positionChanges.length-1,1)[0];this.positionChanges=this.positionChanges.slice(0),this.backPositionChanges=this.backPositionChanges.concat([n])},n.prototype.goForward=function(){var n=this.backPositionChanges.splice(this.backPositionChanges.length-1,1)[0];this.backPositionChanges=this.backPositionChanges.slice(0),this.positionChanges=this.positionChanges.concat([n])},n}()},kZql:function(n,t,o){"use strict";o.d(t,"a",function(){return l});var l={production:!0}},kke6:function(n,t,o){"use strict";var l=o("3j3K"),i=o("Iksp"),u=o("YWx4"),e=o("1A80"),r=o("2Je8"),a=o("Qbdm");o.d(t,"a",function(){return s});var s=l.b(i.a,[u.a],function(n){return l.c([l.d(512,l.e,l.f,[[8,[e.a]],[3,l.e],l.g]),l.d(5120,l.h,l.i,[[3,l.h]]),l.d(4608,r.a,r.b,[l.h]),l.d(4608,l.j,l.j,[]),l.d(5120,l.k,l.l,[]),l.d(5120,l.m,l.n,[]),l.d(5120,l.o,l.p,[]),l.d(4608,a.b,a.c,[a.d]),l.d(6144,l.q,null,[a.b]),l.d(4608,a.e,a.f,[]),l.d(5120,a.g,function(n,t,o,l){return[new a.h(n),new a.i(t),new a.j(o,l)]},[a.d,a.d,a.d,a.e]),l.d(4608,a.k,a.k,[a.g,l.r]),l.d(135680,a.l,a.l,[a.d]),l.d(4608,a.m,a.m,[a.k,a.l]),l.d(6144,l.s,null,[a.m]),l.d(6144,a.n,null,[a.l]),l.d(4608,l.t,l.t,[l.r]),l.d(4608,a.o,a.o,[a.d]),l.d(4608,a.p,a.p,[a.d]),l.d(512,r.c,r.c,[]),l.d(1024,l.u,a.q,[]),l.d(1024,l.v,function(n,t){return[a.r(n,t)]},[[2,a.s],[2,l.w]]),l.d(512,l.x,l.x,[[2,l.v]]),l.d(131584,l.y,l.y,[l.r,l.z,l.A,l.u,l.e,l.x]),l.d(2048,l.B,null,[l.y]),l.d(512,l.C,l.C,[l.B]),l.d(512,a.t,a.t,[[3,a.t]]),l.d(512,i.a,i.a,[])])})},oZaG:function(n,t,o){"use strict";o.d(t,"a",function(){return l});var l=function(){function n(){}return n.prototype.transform=function(n,t){var o=JSON.parse(JSON.stringify(n));return t.filter(function(n){return n.newPosition!==n.oldPosition}).forEach(function(n){var t=o.splice(n.oldPosition,1)[0];n.newPosition>n.oldPosition&&o.splice(n.newPosition,0,t),n.newPosition<n.oldPosition&&o.splice(n.newPosition+1,0,t)}),o.forEach(function(n,t){n.position=t}),o},n}()},x35b:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o("3j3K"),i=o("kZql"),u=o("Qbdm"),e=o("kke6");i.a.production&&o.i(l.a)(),o.i(u.a)().bootstrapModuleFactory(e.a)}},[0]);