/*! For license information please see 17.7eee2f13.chunk.js.LICENSE */
(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[17],{204:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=l.apply(null,n);i&&e.push(i)}else if("object"===r)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(a,[]))||(e.exports=n)}()},212:function(e,a,t){},233:function(e,a,t){e.exports=t.p+"static/media/pngtree-users-vector-icon-png-image_3725294.2ac944bc.jpg"},344:function(e,a,t){e.exports={header:"InfoPlayer_header__glWI3",emptyContainer:"InfoPlayer_emptyContainer__Ii245",containerPlayer:"InfoPlayer_containerPlayer__24cpO",avatar:"InfoPlayer_avatar__21X8o",number:"InfoPlayer_number__zKrCO",name:"InfoPlayer_name__1zsFT",wrap:"InfoPlayer_wrap__1cj3X",info:"InfoPlayer_info__1K9l8",heading:"InfoPlayer_heading__1OSu1",value:"InfoPlayer_value__2LISv",line:"InfoPlayer_line__2bI1i",containerLine:"InfoPlayer_containerLine__1QweE",playerTotalInfoContainer:"InfoPlayer_playerTotalInfoContainer__1J98Q",playerTotalInfo:"InfoPlayer_playerTotalInfo__3JUya",sliderContainer:"InfoPlayer_sliderContainer__167bm",playerWrap:"InfoPlayer_playerWrap__1juWz",otherTitle:"InfoPlayer_otherTitle__2SakG",container:"InfoPlayer_container__2XBzZ"}},345:function(e,a,t){e.exports={app:"SliderPlayers_app__3zf4b",item:"SliderPlayers_item__3YfT7",img:"SliderPlayers_img__3Nytx",text:"SliderPlayers_text__2leDR",wrap:"SliderPlayers_wrap__1SWWL",btn:"SliderPlayers_btn__1oJGP",btnPrev:"SliderPlayers_btnPrev__15h0h",btnNext:"SliderPlayers_btnNext__3MZm4"}},429:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(344),i=t.n(r),s=t(207),c=t(233),u=t.n(c),o=t(33),m=t(34),d=t(36),p=t(35),v=t(37),_=t(345),f=t.n(_),y=t(216),E=t.n(y),g=(t(212),t(244)),h=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).responsive={100:{items:1},600:{items:2},960:{items:3}},t.stagePadding={paddingLeft:50,paddingRight:50},t.state={mouseTrackingEnabled:!0,preventEventOnTouchMove:!0},t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.mouseTrackingEnabled,n=a.preventEventOnTouchMove;return l.a.createElement("div",{className:f.a.app,id:"app"},l.a.createElement("div",{className:f.a.btn},l.a.createElement("button",{className:f.a.btnPrev,onClick:function(){return e.Carousel.slidePrev()}},l.a.createElement("span",null,"Prev")),l.a.createElement("button",{className:f.a.btnNext,onClick:function(){return e.Carousel.slideNext()}},l.a.createElement("span",null,"Next"))),l.a.createElement(E.a,{items:this.props.players,preventEventOnTouchMove:n,mouseTrackingEnabled:t,responsive:this.responsive,infinite:!0,stagePadding:this.stagePadding,buttonsDisabled:!0,autoPlayInterval:3e3,ref:function(a){return e.Carousel=a}},this.props.players.map((function(e){return l.a.createElement("div",{className:f.a.item,key:e.id},l.a.createElement("div",{className:f.a.wrap},l.a.createElement(g.a,{player:e})))}))))}}]),a}(l.a.PureComponent),b=t(55),P=t(62);t.d(a,"default",(function(){return N}));var I=[{heading:"POSITION",value:"Forward"},{heading:"\u041c\u0430\u0442\u0447\u0438",value:"122"},{heading:"\u0413\u043e\u043b\u043e\u0432 \u0437\u0430\u0431\u0438\u0442\u043e",value:"155"},{heading:"\u0416\u0435\u043b\u0442\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",value:"30"},{heading:"\u041a\u0440\u0430\u0441\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",value:"5"},{heading:"\u0414\u0430\u0442\u0430 \u0420\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:"12.01.1997"},{heading:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",value:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441"},{heading:"\u0420\u043e\u0441\u0442",value:"1.8M"},{heading:"\u0412\u0435\u0441",value:"72 KG"}];function N(e){var a=Object(b.c)(),t=Object(b.d)((function(e){return e.teamPage.player})),r=Object(b.d)((function(e){return e.teamPage.players})),c=Object(n.useCallback)((function(){try{a(Object(P.b)(parseInt(e.match.params.userId)))}catch(t){console.log("Error Server")}}));return Object(n.useEffect)((function(){c(),a(Object(P.c)(1,15))}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:i.a.header},l.a.createElement(s.a,{activeLink:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430",title:t.name})),l.a.createElement("div",{className:i.a.emptyContainer}),l.a.createElement("div",{className:i.a.containerPlayer},l.a.createElement("div",{className:i.a.avatar},l.a.createElement("img",{src:u.a,alt:""})),l.a.createElement("div",{className:i.a.number},l.a.createElement("span",null,t.numberPlayer)),l.a.createElement("div",{className:i.a.container},l.a.createElement("div",{className:i.a.name},l.a.createElement("h2",null,t.name)),l.a.createElement("div",{className:i.a.wrap},l.a.createElement("ul",{className:i.a.info},I.map((function(e){return l.a.createElement("li",{key:e.value},l.a.createElement("span",{className:i.a.heading},e.heading),l.a.createElement("span",{className:i.a.value},e.value))})))))),l.a.createElement("div",{className:i.a.line},l.a.createElement("div",{className:i.a.containerLine})),l.a.createElement("div",{className:i.a.playerTotalInfoContainer},l.a.createElement("div",{className:i.a.playerTotalInfo},l.a.createElement("p",null,l.a.createElement("strong",null,"Aenean lobortis eu nibh eu euismod. In ullamcorper, velit sed tincidunt tempor, ante elit euismod magna, vel scelerisque odio velit nec arcu. Nulla dolor sapien, vehicula sit amet augue nec, consequat aliquet velit. Donec euismod interdum mauris id dapibus.")),l.a.createElement("p",null,"Fusce mollis ante dolor, in tincidunt justo vehicula id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec tortor sit amet metus vestibulum sagittis. Donec sed dignissim nisi. Pellentesque ac dolor vestibulum, sollicitudin leo ac, pretium nulla. Mauris sit amet mattis turpis, eu molestie lectus. Donec semper sem ac dolor euismod vulputate. Quisque massa elit, viverra et euismod nec, porta eget elit. Aliquam molestie tempus ex, ut iaculis tortor eleifend ac. Aliquam id massa facilisis, iaculis orci et, ornare augue. Fusce eget sollicitudin est. Fusce ultrices enim ut aliquam sollicitudin."),l.a.createElement("ul",null,l.a.createElement("li",null,"Maecenas a nisl in turpis fermentum imperdiet;"),l.a.createElement("li",null,"Nullam at diam et odio consectetur fermentum;"),l.a.createElement("li",null,"Maecenas volutpat lacus quis sem congue egestas;"),l.a.createElement("li",null,"Quisque sit amet nunc quis quam tincidunt scelerisque;"),l.a.createElement("li",null,"Maecenas vestibulum ligula sed augue dictum, quis tincidunt nulla pellentesque;")))),l.a.createElement("div",{className:i.a.sliderContainer},l.a.createElement("h3",{className:i.a.otherTitle},"Other ",l.a.createElement("span",null,"Players")),l.a.createElement("div",{className:i.a.playerWrap},l.a.createElement(h,{players:r}))))}}}]);
//# sourceMappingURL=17.7eee2f13.chunk.js.map