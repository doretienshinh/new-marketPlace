(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{56124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(809),s=t.n(r),c=t(85893),a=t(92447),i=t(5755),u=t(50387),o=t(67294),l=t(3283),d=t.n(l),p=t(9669),f=t.n(p),h=t(42484),w=t.n(h),x=t(82025),m=t(33334),k=t(17391);function g(){var e=(0,o.useState)([]),n=e[0],t=e[1],r=(0,o.useState)("not-loaded"),l=r[0],p=r[1];function h(){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(s().mark((function e(){var n,r,c,o,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new i.Q(window.ethereum),r=new u.CH(x.k,m.Mt,n),c=new u.CH(x.A,k.Mt,n),e.next=5,c.fetchMarketItems();case 5:return o=e.sent,e.next=8,Promise.all(o.map(function(){var e=(0,a.Z)(s().mark((function e(n){var t,c,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,f().get(t);case 5:return c=e.sent,a=d().utils.fromWei(n.price.toString(),"ether"),i={price:a,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,image:c.data.image},e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 8:l=e.sent,console.log("items: ",l),t(l),p("loaded");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(s().mark((function e(n){var t,r,c,a,o,l,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(w())({network:"rinkeby",cacheProvider:!0}),e.next=3,t.connect();case 3:return r=e.sent,c=new i.Q(r),a=c.getSigner(),o=new u.CH(x.A,k.Mt,a),l=d().utils.toWei(n.price.toString(),"ether"),console.log("price: ",l),e.next=11,o.createMarketSale(x.k,n.tokenId,{value:l});case 11:return p=e.sent,e.next=14,p.wait();case 14:h();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){h()}),[]),"loaded"!==l||n.length?(0,c.jsx)("div",{className:"flex justify-center",children:(0,c.jsx)("div",{style:{width:900},children:(0,c.jsx)("div",{className:"grid grid-cols-2 gap-4 pt-8",children:n.map((function(e,n){return(0,c.jsxs)("div",{className:"border p-4 shadow",children:[(0,c.jsx)("img",{src:e.image,className:"rounded"}),(0,c.jsxs)("p",{className:"text-2xl my-4 font-bold",children:["Price: ",e.price]}),(0,c.jsx)("button",{className:"bg-green-600 text-white py-2 px-12 rounded",onClick:function(){return function(e){return v.apply(this,arguments)}(e)},children:"Buy NFT"})]},n)}))})})}):(0,c.jsx)("h1",{className:"p-20 text-4xl",children:"No NFTs!"})}},78581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(56124)}])}},function(e){e.O(0,[482,277,669,694,837,774,888,179],(function(){return n=78581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);