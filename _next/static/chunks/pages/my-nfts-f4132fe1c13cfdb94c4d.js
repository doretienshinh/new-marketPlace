(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{95930:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(809),s=t.n(r),a=t(85893),c=t(92447),i=t(5755),o=t(50387),u=t(67294),l=t(3283),d=t.n(l),p=t(9669),f=t.n(p),h=t(42484),m=t.n(h),x=t(82025),w=t(17391),N=t(33334);function g(){var e=(0,u.useState)([]),n=e[0],t=e[1],r=(0,u.useState)("not-loaded"),l=r[0],p=r[1];function h(){return(h=(0,c.Z)(s().mark((function e(){var n,r,a,u,l,h,g,k;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(m())({network:"rinkeby",cacheProvider:!0}),e.next=3,n.connect();case 3:return r=e.sent,a=new i.Q(r),u=a.getSigner(),l=new o.CH(x.A,w.Mt,u),h=new o.CH(x.k,N.Mt,a),e.next=10,l.fetchMyNFTs();case 10:return g=e.sent,e.next=13,Promise.all(g.map(function(){var e=(0,c.Z)(s().mark((function e(n){var t,r,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,f().get(t);case 5:return r=e.sent,a=d().utils.fromWei(n.price.toString(),"ether"),c={price:a,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,image:r.data.image},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 13:k=e.sent,console.log("items: ",k),t(k),p("loaded");case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return"loaded"!==l||n.length?"not-loaded"!==l||n.length?(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("div",{style:{width:900},children:(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 pt-8",children:n.map((function(e,n){return(0,a.jsxs)("div",{className:"border p-4 shadow",children:[(0,a.jsx)("img",{src:e.image,className:"rounded"}),(0,a.jsxs)("p",{className:"text-2xl my-4 font-bold",children:["Price paid: ",e.price]})]},n)}))})})}):(0,a.jsx)("button",{onClick:function(){return h.apply(this,arguments)},className:"rounded bg-blue-600 py-2 px-12 text-white m-16",children:"Fetch NFTs"}):(0,a.jsx)("h1",{className:"p-20 text-4xl",children:"No NFTs!"})}},16074:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-nfts",function(){return t(95930)}])}},function(e){e.O(0,[482,277,694,669,837,774,888,179],(function(){return n=16074,e(e.s=n);var n}));var n=e.O();_N_E=n}]);