"use strict";(self.webpackChunklib=self.webpackChunklib||[]).push([[708,554],{7554:function(t,e,a){a.r(e);var n=a(9087),r=a(3772),s=a(5590),c=a(457);e.default=function(){var t=(0,r.useState)([]),e=(0,n.Z)(t,2),l=e[0],i=e[1];return(0,r.useEffect)((function(){try{var t=a(2792);i(t)}catch(e){}}),[]),(0,c.jsx)("div",{className:"w-full flex flex-wrap",children:l.length>0&&l.map((function(t){return(0,c.jsxs)(s.rU,{className:"text-brown-dark font-normal text-lg mr-4 hover:underline",to:"/categories/".concat(t.path),children:["#",t.name]},t.path)}))})}},9708:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(5645),r=a(9087),s=a(3772),c=a(379),l=a(5590),i=a(457),u=function(t){return(0,i.jsx)("div",{className:"pt-3 pb-3 break-inside-avoid",children:(0,i.jsxs)("div",{className:"flex flex-col md:gap-8  md:flex-row",children:[(0,i.jsx)("span",{className:"text-sm text-text-light min-w-fit pt-1",children:t.timestamp}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)(l.rU,{className:"text-text font-medium text-lg hover:text-brown-dark",to:"/posts/".concat(t.slug),children:t.title}),t.categories&&t.categories.map((function(e){return(0,i.jsxs)(l.rU,{to:"/categories/".concat(e.path),className:"text-brown-dark hover:underline",children:["#",e.name]},"".concat(t.slug,"_").concat(e.path))})),(0,i.jsx)("p",{className:"text-[#AAA] font-medium text-base",children:t.summary})]})]})})},o=a(7554),f=function(){var t=(0,s.useState)([]),e=(0,r.Z)(t,2),l=e[0],f=e[1],m=(0,c.UO)().slug;return(0,s.useEffect)((function(){try{var t=a(29);if(!m)return void f(t);var e=t.filter((function(t){return!!t.categories.find((function(t){return t.path===m}))}));f(e)}catch(n){}}),[m]),(0,i.jsxs)("div",{className:"w-full overflow-hidden",children:[(0,i.jsx)(o.default,{}),(0,i.jsx)("div",{className:"columns-1 2xl:columns-3 lg:columns-2 gap-x-4",children:l&&l.map((function(t){return(0,i.jsx)(u,(0,n.Z)({},t),t.slug)}))})]})}},2792:function(t){t.exports=JSON.parse('[{"name":"AWS","path":"aws"}]')},29:function(t){t.exports=JSON.parse('[{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - global_infrastructures","slug":"aws-global_infrastructures","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ..."}]')}}]);
//# sourceMappingURL=708.05e54f3b.chunk.js.map