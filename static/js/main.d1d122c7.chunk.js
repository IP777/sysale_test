(this.webpackJsonpsysale_test=this.webpackJsonpsysale_test||[]).push([[0],{11:function(e,t,c){e.exports={wrapper:"HomePage_wrapper__1A29Z",list:"HomePage_list__35O7S",item:"HomePage_item__MGgmO"}},12:function(e,t,c){e.exports={wrapper:"Select_wrapper__2axXD",defaultSelect:"Select_defaultSelect__1Xnkp"}},17:function(e,t,c){e.exports={saleBtn:"SwitchBtn_saleBtn__GuYmJ",saleBtnClick:"SwitchBtn_saleBtnClick__1tw1Q"}},19:function(e,t,c){e.exports={nsBtn:"NSbutton_nsBtn__xVyjN"}},2:function(e,t,c){e.exports={background:"ModalPage_background__3liKZ",wrapper:"ModalPage_wrapper__3e6FS",headCard:"ModalPage_headCard__30WYd",headcard_product:"ModalPage_headcard_product__1tq6g",nsBtn:"ModalPage_nsBtn__2swf1",nsBtnNot:"ModalPage_nsBtnNot__19NCR",cardText:"ModalPage_cardText__2cp5w",centralBlock:"ModalPage_centralBlock__2TQJ2",footer:"ModalPage_footer__2gAah"}},22:function(e){e.exports=JSON.parse('[{"id":1,"new":false,"title":"\u0428\u0430\u043c\u043f\u0443\u043d\u044c","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","imageSrc":"/images/image 22.jpg","price":200},{"id":2,"new":true,"title":"\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","imageSrc":"/images/image 23.jpg","price":180},{"id":3,"new":true,"title":"\u041e\u043f\u043e\u043b\u0430\u0441\u043a\u0438\u0432\u0430\u0442\u0435\u043b\u044c","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","imageSrc":"/images/image 24.jpg","price":250},{"id":4,"new":false,"title":"\u0428\u0430\u043c\u043f\u0443\u043d\u044c+\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","imageSrc":"/images/image 25.jpg","price":300}]')},32:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c(9),i=c.n(r),s=(c(32),c(4)),o=c(11),l=c.n(o);var d="MODAL_IS_OPEN",u="FAKE_FETCH_DATA",p="ACCESS_TO_DB",m="SELECT_PRODUCT",h=function(e){return{type:d,payload:{bool:e}}},b=Object(s.b)((function(e){return{productData:e.fetchData}}),(function(e){return{modalaIsOpen:function(t){return e(h(t))},selectedProduct:function(t){return e(function(e){return{type:m,payload:{data:e}}}(t))}}}))((function(e){var t=e.modalaIsOpen,c=e.productData,n=e.selectedProduct,r=function(e){var a=e.target.attributes.value.value;t(!0);var r=c.find((function(e){return e.id==a}));n(r)};return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)("ul",{className:l.a.list,children:c.map((function(e){return Object(a.jsx)("li",{className:l.a.item,onClick:r,children:Object(a.jsx)("img",{value:e.id,src:"https://raw.githubusercontent.com/IP777/sysale_test/master/src/assets"+e.imageSrc,alt:"product",className:l.a.wrapper})},e.id)}))})})})),j=c(6),x=c(2),_=c.n(x),f=c(19),O=c.n(f),g=function(e){var t=e.name,c=e.fontSize,n=e.widthIn,r=e.heightIn;return Object(a.jsx)("button",{className:O.a.nsBtn,style:{width:n,height:r,fontSize:c},children:t})},v=c(25),k=c(20),w=c(21),N=c(26),C=c(24),S=c(5),B=c.n(S),y=function(e){Object(N.a)(c,e);var t=Object(C.a)(c);function c(){var e;Object(k.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={checkbox:[{name:1,price:100,checked:!0},{name:2,price:200,checked:!1},{name:3,price:300,checked:!1}],btnChecked:""},e.handleChange=function(t){var c=t.target.attributes.name.value,a=Object.assign([],e.state.checkbox);a.map((function(e){e.name.toString()===c?e.checked=!0:e.checked=!1})),e.setState({checkbox:Object(v.a)(a),btnChecked:c});var n=a.find((function(e){if(e.name.toString()===c)return e.price}));e.props.volumePrice(n.price)},e}return Object(w.a)(c,[{key:"render",value:function(){var e=this,t=this.state.checkbox;return Object(a.jsx)("div",{className:B.a.wrapper,children:Object(a.jsx)("ul",{className:B.a.chbxList,children:t.map((function(t){var c=t.name,n=t.checked,r=t.price;return Object(a.jsxs)("li",{className:B.a.chbxItem,children:[Object(a.jsx)("div",{name:c,className:n?B.a.checkboxChecked:B.a.checkbox,checked:n,onClick:e.handleChange}),Object(a.jsxs)("span",{className:B.a.chbxText,children:[r," \u0433\u0440\u043d"]})]},c)}))})})}}]),c}(n.Component),P=c(12),I=c.n(P),T=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:I.a.defaultSelect}),Object(a.jsxs)("select",{defaultValue:"\u0446\u0432\u0435\u0442",className:I.a.wrapper,children:[Object(a.jsx)("option",{value:"\u0446\u0432\u0435\u0442",selected:!0,disabled:!0,hidden:!0,children:"\u0426\u0432\u0435\u0442"}),Object(a.jsx)("option",{value:"yellow",className:I.a.option,children:"\u0416\u0435\u043b\u0442\u044b\u0439"}),Object(a.jsx)("option",{value:"red",children:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"}),Object(a.jsx)("option",{value:"green",children:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"})]})]})},M=c(17),D=c.n(M),q=function(){var e=Object(n.useState)({switch:!0}),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(a.jsx)("button",{className:c.switch?D.a.saleBtn:D.a.saleBtnClick,onClick:function(){r({switch:!c.switch})}})},A=c(8),E=c.n(A);function L(e){var t=e.count,c=e.increment,n=e.decriment;return Object(a.jsxs)("div",{className:E.a.wrapper,children:[Object(a.jsx)("button",{className:E.a.btn,onClick:n,children:"-"}),Object(a.jsx)("span",{className:E.a.count,children:t}),Object(a.jsx)("button",{className:E.a.btn,onClick:c,children:"+"})]})}var H=function(e){var t=e.modalaIsOpen,c=e.product,r=c.price,i=Object(n.useState)(1),s=Object(j.a)(i,2),o=s[0],l=s[1],d=Object(n.useState)(c.price),u=Object(j.a)(d,2),p=u[0],m=u[1],h=Object(n.useState)(100),b=Object(j.a)(h,2),x=(b[0],b[1]);return Object(a.jsx)("div",{className:_.a.background,onClick:function(e){e.target.className.includes("background")&&t(!1)},children:Object(a.jsxs)("div",{className:_.a.wrapper,children:[Object(a.jsxs)("div",{className:_.a.headCard,children:[Object(a.jsx)("div",{className:c.new?_.a.nsBtn:_.a.nsBtnNot,children:"NEW"}),Object(a.jsx)("img",{src:"https://raw.githubusercontent.com/IP777/sysale_test/master/src/assets"+c.imageSrc,alt:"product",className:_.a.headcard_product}),Object(a.jsx)(q,{})]}),Object(a.jsxs)("span",{className:_.a.cardText,children:[Object(a.jsx)("h3",{children:c.title}),Object(a.jsx)("p",{children:c.text})]}),Object(a.jsxs)("div",{className:_.a.centralBlock,children:[Object(a.jsx)(T,{}),Object(a.jsxs)("span",{className:_.a.cost,children:[p," \u0433\u0440\u043d"]})]}),Object(a.jsx)(y,{volumePrice:function(e){x(e),m(e/100*o*r)}}),Object(a.jsxs)("div",{className:_.a.footer,children:[Object(a.jsx)(L,{count:o,increment:function(){var e=o+1;m(e*r),l(e)},decriment:function(){if(o>1){var e=o-1;m(e*r),l(e)}}}),Object(a.jsx)(g,{name:"\u041a\u0443\u043f\u0438\u0442\u044c",fontSize:"18px",widthIn:"302px",heightIn:"40px"})]})]})})},F=Object(s.b)((function(e){return{product:e.selected}}),(function(e){return{modalaIsOpen:function(t){return e(h(t))}}}))(H);c(39);var J=c(22),U={fetchProduct:function(){return function(e){e({type:p}),e({type:u,payload:{data:J}})}}},V=Object(s.b)((function(e){return{modalIsOpenBool:e.modalIsOpen}}),U)((function(e){var t=e.modalIsOpenBool,c=e.fetchProduct;return Object(n.useEffect)((function(){c()}),[c]),Object(a.jsxs)(a.Fragment,{children:[t&&Object(a.jsx)(F,{}),Object(a.jsx)(b,{})]})})),z=c(3),R=c(23),W=Object(z.combineReducers)({modalIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case d:return a.bool;default:return e}},fetchData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case u:return a.data;default:return e}},fetchAccess:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,c=t.type;t.payload;switch(c){case p:return!0;default:return e}},selected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case m:return a.data;default:return e}}}),Y=[function(e){var t=e.dispatch,c=e.getState;return function(e){return function(a){return"function"===typeof a?a(t,c):e(a)}}}],Z=z.applyMiddleware.apply(void 0,Y),G=Object(z.createStore)(W,Object(R.composeWithDevTools)(Z));i.a.render(Object(a.jsx)(s.a,{store:G,children:Object(a.jsx)(V,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={wrapper:"CheckboxBlock_wrapper__2H0HT",chbxList:"CheckboxBlock_chbxList__uIuud",chbxItem:"CheckboxBlock_chbxItem__2n5gj",checkbox:"CheckboxBlock_checkbox__31dYb",checkboxChecked:"CheckboxBlock_checkboxChecked__2eshi",chbxText:"CheckboxBlock_chbxText__3pidM"}},8:function(e,t,c){e.exports={wrapper:"Counter_wrapper__3VvnZ",btn:"Counter_btn__1TV25",count:"Counter_count__1otaf"}}},[[40,1,2]]]);
//# sourceMappingURL=main.d1d122c7.chunk.js.map