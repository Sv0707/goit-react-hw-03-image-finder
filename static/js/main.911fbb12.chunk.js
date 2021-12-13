(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1SdSw",modal:"Modal_modal__dcfMD"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__yCTBS",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2OvLY"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__30397"}},28:function(e,t,a){e.exports={Button:"Button_Button__2iLfv"}},30:function(e,t,a){e.exports={loader:"Loader_loader__1VLe8"}},35:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(11),c=a.n(o),l=a(16),s=a(4),i=a(5),u=a(7),h=a(6),m=(a(35),a(13)),d=a.n(m),p=a(25),g=a(26),b=a.n(g),f=function(){var e=Object(p.a)(d.a.mark((function e(t,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pixabay.com/api/","23791107-11d3cac259792c6d6696bfd74",e.next=4,b.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23791107-11d3cac259792c6d6696bfd74","&image_type=photo&orientation=horizontal&per_page=12"));case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=f,y=a(8),S=a.n(y),O=a(0),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.search),e.reset()},e.reset=function(){e.setState({search:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsx)("header",{className:S.a.Searchbar,children:Object(O.jsxs)("form",{className:S.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(O.jsx)("button",{type:"submit",className:S.a.SearchFormButton,children:Object(O.jsx)("span",{className:S.a.SearchFormButtonLabel,children:"Search"})}),Object(O.jsx)("input",{className:S.a.SearchFormInput,type:"text",value:this.state.search,onChange:this.handleInputChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),v=_,x=a(14),I=a.n(x),w=document.querySelector("#modal-root"),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).onEscPress=function(t){"Escape"===t.code&&(console.log("Escape"),e.props.onClose())},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscPress)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(O.jsx)("div",{className:I.a.backdrop,onClick:this.handleBackdropClick,children:Object(O.jsx)("div",{className:I.a.modal,children:e})}),w)}}]),a}(r.Component),M=k,C=a(15),L=a.n(C),G=function(e){var t=e.image,a=e.openImg;return Object(O.jsx)("li",{className:L.a.ImageGalleryItem,onClick:function(){a(t.largeImageURL)},children:Object(O.jsx)("img",{src:t.webformatURL,alt:t.tags,className:L.a.ImageGalleryItemImage})})},B=a(27),F=a.n(B),N=function(e){var t=e.gallery,a=e.openImg;return Object(O.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){return Object(O.jsx)(G,{image:e,openImg:a},e.id)}))})},E=a(28),P=a.n(E),D=function(e){var t=e.onClick;return Object(O.jsx)("button",{type:"button",className:P.a.Button,onClick:t,children:"Load more"})},U=a(29),q=a.n(U),A=a(30),T=a.n(A),J=function(){return Object(O.jsx)("div",{className:T.a.loader,children:Object(O.jsx)(q.a,{type:"Circles",color:"#3f51b5",height:200,width:200})})},R={textAlign:"center"},V=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],search:"",page:1,isModalOpen:!1,largeImage:"",total:0,loading:!1,error:null,showLoadMore:!1},e.fetchGallery=function(){var t=e.state,a=t.search,r=t.page;e.setState({loading:!0}),j(a,r).then((function(t){var n=t.hits,o=t.total;if(0===n.length)return Promise.reject(new Error("There is no pictures by ".concat(a," name, please try another request")));e.showLoadMore(o,r),e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(n)),page:e.page+1,total:o,error:!1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSubmit=function(t){e.setState({search:t,gallery:[],page:1})},e.showLoadMore=function(t,a){Math.ceil(t/12)>a?e.setState({showLoadMore:!0}):e.setState({showLoadMore:!1})},e.toggleModal=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e.handleOpenPicture=function(t){console.log(t),e.setState({largeImage:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.fetchGallery()}},{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetchGallery()}},{key:"render",value:function(){var e=this.state,t=e.isModalOpen,a=e.gallery,r=e.largeImage,n=e.loading,o=e.error,c=e.showLoadMore;return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{onSubmit:this.handleSubmit}),o&&Object(O.jsx)("h2",{style:R,children:o.message}),n&&Object(O.jsx)(J,{}),a.length>0&&Object(O.jsx)(N,{gallery:a,openImg:this.handleOpenPicture}),c&&!n&&Object(O.jsx)(D,{onClick:this.fetchGallery}),t&&Object(O.jsx)(M,{onClose:this.toggleModal,children:Object(O.jsx)("img",{src:r,alt:r})})]})}}]),a}(r.Component),z=V;c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.querySelector("#root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1BL0G",SearchForm:"Searchbar_SearchForm__1r-99",SearchFormButton:"Searchbar_SearchFormButton__1sn8f",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3k9wQ",SearchFormInput:"Searchbar_SearchFormInput__-twl-","SearchForm-input":"Searchbar_SearchForm-input__B75UV"}}},[[76,1,2]]]);
//# sourceMappingURL=main.911fbb12.chunk.js.map