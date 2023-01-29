(self.webpackChunklib=self.webpackChunklib||[]).push([[127],{127:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var n=a(9087),s=a(3772),r=a(379),i=a(5065),o=a(3241),c=a(5645),l=a(3030),u=a(9099),m=a(4546),p=a(4999),h=a(5590),d=a(2547),g=a(404),f=a(457),v=["node","inline","className","children"],b={code:function(e){e.node;var t=e.inline,a=e.className,n=e.children,s=(0,l.Z)(e,v),r=/language-(\w+)/.exec(a||"");return!t&&r?(0,f.jsx)(d.Z,(0,c.Z)({children:String(n).replace(/\n$/,""),style:g.Z,language:r[1],PreTag:"div"},s)):(0,f.jsx)("code",(0,c.Z)((0,c.Z)({className:a},s),{},{children:n}))},image:function(e){var t=e.alt,a=e.src,n=e.title;return(0,f.jsx)("img",{alt:t,src:a,title:n,style:{maxWidth:"48rem"}})}},A=function(e){var t=e.postSlug,l=(0,r.s0)(),d=(0,s.useState)(),g=(0,n.Z)(d,2),v=g[0],A=g[1];return(0,s.useEffect)((function(){function e(){return(e=(0,o.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(1372)("./".concat(t,".json"));case 3:n=e.sent,A((0,c.Z)((0,c.Z)({},n),{},{markdown:n.markdown.join("\n")})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t,l]),v?(0,f.jsxs)("div",{className:"pt-4",children:[(0,f.jsxs)("article",{className:"prose flex flex-col m-auto",children:[(0,f.jsx)("h1",{className:"mb-4",children:v.title}),(0,f.jsx)("span",{className:"w-36 h-[2px]  bg-brown-light"}),(0,f.jsx)("time",{className:"mb-12",children:v.timestamp}),v.banner_url&&(0,f.jsx)("img",{src:v.banner_url,alt:"banner",className:""}),(0,f.jsx)(u.D,{children:v.markdown,remarkPlugins:[m.Z],rehypePlugins:[p.Z],components:b})]}),(0,f.jsxs)("div",{className:"mt-8 flex",children:[(0,f.jsx)("span",{className:"font-medium text-lg mr-4",children:"Category:"}),v.categories&&v.categories.map((function(e){return(0,f.jsxs)(h.rU,{to:"/categories/".concat(e.path),className:"grid place-content-center text-brown-dark font-medium hover:underline mr-4",children:["#",e.name]},"".concat(e.path,"_markdown"))}))]})]}):null},S=function(){var e=(0,r.s0)(),t=(0,r.TH)().pathname,a=(0,s.useState)(""),i=(0,n.Z)(a,2),o=i[0],c=i[1];return(0,s.useEffect)((function(){t&&!t.match(/\/posts\/[A-Z]+\//g)||e("/"),c(t.replace("/posts/",""))}),[t,e]),(0,f.jsxs)("div",{className:"max-w-3xl m-auto",children:[(0,f.jsx)(A,{postSlug:o}),(0,f.jsx)("footer",{children:(0,f.jsxs)("p",{className:"text-center pb-8 pt-12 flex justify-center items-center gap-2",children:[(0,f.jsx)("span",{className:"text-[#BBB]",children:"powered by"}),(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"w-4 h-4 fill-brown-dark",children:(0,f.jsx)("path",{d:"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"})}),(0,f.jsx)("a",{href:"https://github.com/void-kun/void-kun.github.io",className:"font-medium hover:text-brown-dark",children:"zrik"})]})})]})}},1372:function(e,t,a){var n={"./aws-global_infrastructures.json":8355,"./aws-global_infrastructures_1.json":9681,"./categories.json":2792,"./posts.json":29};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=1372},8355:function(e){"use strict";e.exports=JSON.parse('{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - global_infrastructures","slug":"aws-global_infrastructures","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ...","markdown":["***\u1ede tu\u1ea7n \u0111\u1ea7u ti\xean trong l\u1ed9 tr\xecnh h\u1ecdc AWS c\u1ee7a m\xecnh, ch\xfang ta s\u1ebd l\xe0m quen v\u1edbi ki\u1ebfn tr\xfac global c\u1ee7a n\xf3 tr\u01b0\u1edbc.***","Global infrastructure c\u1ee7a AWS bao g\u1ed3m:","- AWS - Data Center","- AWS - Availablility Zones","- AWS - Regions","- AWS - Local Zones","- AWS - Wavelength Zones","- AWS - Edge Location","---","### AWS - Data Center","- Thousands of servers. Typically over 50k","- Not \\"cold\\"","- Up to 102 Tbps provisioned in to a single DC","- AWS custom equipment","\\t- Multi ODM sourced","\\t- Amazon custom network protocol stack","### AWS - Availability Zone","- One or more data centers in a Available Zone","- Isolated locations","- No data center in 2 Available Zones","- DCs in Available Zone less than 1/4ms apart","- AZs <2ms apart & usually < 1ms","- 25 Tbps peak inter-AZs traffic","### AWS - Regions","- Has two or more Available Zones in a Region","### AWS - Local Zones","- Are a type of infrastructure deployment that places compute, storage, database, and other select AWS services close to large population and industry centers.","- Use cases:","\\t- Run low-latency applications at the edge","\\t- Simplify hybrid cloud migrations","\\t- Meet stringent data residency requirements","### AWS - Wavelength","- Embeds AWS compute and storage services within 5G networks, providing mobile edge computing infrastructure for developing, deploying, and scaling untra-low-latency applications.","- Use cases:","\\t- Build media and entertainment applications","\\t- Accelerate ML inference at the edge","\\t- Develop connected vehicle applications","### AWS - Edge Location","- A site that CloudFront uses to cache copies of your content for faster delivery to users at any location."]}')},9681:function(e){"use strict";e.exports=JSON.parse('{"timestamp":"Th 6, 27 thg 1, 2023","title":"AWS - global_infrastructures (1)","slug":"aws-global_infrastructures_1","categories":[{"name":"AWS","path":"aws"},{"name":"V\u1ecdc link tinh","path":"voc-link-tink"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ...","markdown":["***\u1ede tu\u1ea7n \u0111\u1ea7u ti\xean trong l\u1ed9 tr\xecnh h\u1ecdc AWS c\u1ee7a m\xecnh, ch\xfang ta s\u1ebd l\xe0m quen v\u1edbi ki\u1ebfn tr\xfac global c\u1ee7a n\xf3 tr\u01b0\u1edbc.***","Global infrastructure c\u1ee7a AWS bao g\u1ed3m:","- AWS - Data Center","- AWS - Availablility Zones","- AWS - Regions","- AWS - Local Zones","- AWS - Wavelength Zones","---","**Nhi\u1ec1u vl**","### AWS - Data Center","![](./a.png)![](./a.png)"]}')},2792:function(e){"use strict";e.exports=JSON.parse('[{"name":"AWS","path":"aws"}]')},29:function(e){"use strict";e.exports=JSON.parse('[{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - global_infrastructures","slug":"aws-global_infrastructures","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ..."}]')}}]);
//# sourceMappingURL=127.84403a4e.chunk.js.map