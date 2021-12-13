(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1SdSw",modal:"Modal_modal__dcfMD"}},16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__yCTBS",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2OvLY"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__30397"}},28:function(e,t,a){e.exports={Button:"Button_Button__2iLfv"}},30:function(e,t,a){e.exports={loader:"Loader_loader__1VLe8"}},35:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(12),o=a.n(c),l=a(9),s=a(4),i=a(5),u=a(7),h=a(6),m=(a(35),a(14)),d=a.n(m),p=a(25),g=a(26),b=a.n(g),f=function(){var e=Object(p.a)(d.a.mark((function e(t,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pixabay.com/api/","23791107-11d3cac259792c6d6696bfd74",e.next=4,b.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23791107-11d3cac259792c6d6696bfd74","&image_type=photo&orientation=horizontal&per_page=12"));case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=f,y=a(8),O=a.n(y),S=a(0),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.search),e.reset()},e.reset=function(){e.setState({search:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(S.jsx)("header",{className:O.a.Searchbar,children:Object(S.jsxs)("form",{className:O.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(S.jsx)("button",{type:"submit",className:O.a.SearchFormButton,children:Object(S.jsx)("span",{className:O.a.SearchFormButtonLabel,children:"Search"})}),Object(S.jsx)("input",{className:O.a.SearchFormInput,type:"text",value:this.state.search,onChange:this.handleInputChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),v=_,x=a(15),I=a.n(x),k=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onEscPress=function(t){"Escape"===t.code&&(console.log("Escape"),e.props.onClose())},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscPress)}},{key:"render",value:function(){var e=this.props.children;return Object(c.createPortal)(Object(S.jsx)("div",{className:I.a.backdrop,onClick:this.handleBackdropClick,children:Object(S.jsx)("div",{className:I.a.modal,children:e})}),k)}}]),a}(r.Component),C=w,F=a(16),M=a.n(F),G=function(e){var t=e.image,a=e.openImg;return Object(S.jsx)("li",{className:M.a.ImageGalleryItem,onClick:function(){a(t.largeImageURL)},children:Object(S.jsx)("img",{src:t.webformatURL,alt:t.tags,className:M.a.ImageGalleryItemImage})})},L=a(27),B=a.n(L),N=function(e){var t=e.gallery,a=e.openImg;return Object(S.jsx)("ul",{className:B.a.ImageGallery,children:t.map((function(e){return Object(S.jsx)(G,{image:e,openImg:a},e.id)}))})},E=a(28),P=a.n(E),D=function(e){var t=e.onClick;return Object(S.jsx)("button",{type:"button",className:P.a.Button,onClick:t,children:"Load more"})},U=a(29),q=a.n(U),A=a(30),T=a.n(A),J=function(){return Object(S.jsx)("div",{className:T.a.loader,children:Object(S.jsx)(q.a,{type:"Circles",color:"#00BFFF",height:80,width:80})})},R={textAlign:"center"},V=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],search:"",page:1,isModalOpen:!1,largeImage:"",total:0,loading:!1,error:null,showLoadMore:!1},e.fetchGallery=function(){var t=e.state,a=t.search,r=t.page;e.setState({loading:!0}),j(a,r).then((function(t){var n=t.hits,c=t.total;if(0===n.length)return Promise.reject(new Error("There is no pictures by ".concat(a," name, please try another request")));Math.ceil(c/12)>r?e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(n)),page:e.page+1,total:c,showLoadMore:!0,error:!1}})):e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(n)),page:e.page+1,total:c,showLoadMore:!1,error:!1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSubmit=function(t){e.setState({search:t,gallery:[],page:1})},e.toggleModal=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e.handleOpenPicture=function(t){console.log(t),e.setState({largeImage:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.fetchGallery()}},{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetchGallery()}},{key:"render",value:function(){var e=this.state,t=e.isModalOpen,a=e.gallery,r=e.largeImage,n=e.loading,c=e.error,o=e.showLoadMore;return Object(S.jsxs)("div",{children:[Object(S.jsx)(v,{onSubmit:this.handleSubmit}),c&&Object(S.jsx)("h2",{style:R,children:c.message}),n&&Object(S.jsx)(J,{}),a.length>0&&Object(S.jsx)(N,{gallery:a,openImg:this.handleOpenPicture}),a.length>0&&!n&&o&&Object(S.jsx)(D,{onClick:this.fetchGallery}),t&&Object(S.jsx)(C,{onClose:this.toggleModal,children:Object(S.jsx)("img",{src:r,alt:r})})]})}}]),a}(r.Component),z=V;o.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(z,{})}),document.querySelector("#root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1BL0G",SearchForm:"Searchbar_SearchForm__1r-99",SearchFormButton:"Searchbar_SearchFormButton__1sn8f",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3k9wQ",SearchFormInput:"Searchbar_SearchFormInput__-twl-","SearchForm-input":"Searchbar_SearchForm-input__B75UV"}}},[[76,1,2]]]);
//# sourceMappingURL=main.95d55e50.chunk.js.map