(this["webpackJsonpefarn-admin-frontend"]=this["webpackJsonpefarn-admin-frontend"]||[]).push([[0],{166:function(e,t,a){e.exports={profileCard:"FarmProfile_profileCard__tNcTI"}},187:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(42),i=a.n(r),o=(a(187),a(21)),s=a(20),l=a(291),d=a(297),j=a(283),b=a(275),u=a(289),p=a(282),m=a(93),x=a.n(m),h=a.p+"static/media/navLogo.1bf254b4.png",O=a(1);var f=function(){var e=localStorage.getItem("user_name");return Object(O.jsx)(j.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"nav-bg",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a.Brand,{href:"",className:x.a.NavBrand,children:Object(O.jsx)("img",{src:h,alt:"logo",style:{maxHeight:"55px"}})}),Object(O.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(u.a,{className:"me-auto",children:[Object(O.jsx)(o.c,{to:"/dashboard",className:x.a.navList,children:"Dashboard"}),Object(O.jsx)(o.c,{to:"/vegetables",className:x.a.navList,children:"Vegetables"}),Object(O.jsx)(o.c,{to:"/trees",className:x.a.navList,children:"Trees"})]}),Object(O.jsxs)(p.a,{title:e,id:"basic-nav-dropdown",children:[Object(O.jsx)(p.a.Item,{as:o.c,to:"/profile",style:{textAlign:"center"},children:"Edit profile"}),Object(O.jsx)(p.a.Divider,{}),Object(O.jsx)(p.a.Item,{href:"#action/3.1",children:Object(O.jsx)(d.a,{color:"error",fullWidth:!0,size:"small",children:"Logout"})})]})]})]})})};var g=function(e){return Object(O.jsxs)("section",{className:"layout-section",children:[Object(O.jsx)(f,{}),Object(O.jsx)(l.a,{container:!0,children:Object(O.jsx)(b.a,{children:e.children})})]})};var v=function(){return Object(O.jsx)(g,{children:Object(O.jsx)("p",{children:"This is the dashboard page"})})},y=a(7),_=a(299),A=a(302),N=a(301),F=a(304),I=a(305),S=a(303),C=a(294),E=a(285),w=a(298),T=a(56),L=a.n(T),k=a(117),q=a.n(k),D=a(29),P=a.n(D),R="https://efarm.ml/api",B={headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}},W={checkLogin:function(e){return P.a.post("".concat(R,"/login"),e)},checkSignup:function(e){return P.a.post("".concat(R,"/register"),e)},getFarmerVegetables:function(){return P.a.get("".concat(R,"/get_vegetables"),B)},getFarmerTrees:function(){return P.a.get("".concat(R,"/get_trees"),B)},getFarmerProfile:function(){return P.a.get("".concat(R,"/profile"),B)},editFarmerProfile:function(e){return P.a.post("".concat(R,"/edit_profile"),e,B)},addVegetable:function(e){return P.a.post("".concat(R,"/add_vegetables"),e,B)},deleteVegetable:function(e){return P.a.post("".concat(R,"/delete_vegetable"),e,B)},addTree:function(e){return P.a.post("".concat(R,"/add_trees"),e,B)},deleteTree:function(e){return P.a.post("".concat(R,"/delete_tree"),e,B)},getCustomerFarms:function(){return P.a.get("".concat(R,"/user_get_farms"),B)},getCustomerTrees:function(e){return P.a.post("".concat(R,"/user_get_trees"),e,B)},getCustomerVegetables:function(e){return P.a.post("".concat(R,"/user_get_vegetables"),e,B)},adoptTree:function(e){return P.a.post("".concat(R,"/user_adopt_trees"),e,B)},orderVegetable:function(e){return P.a.post("".concat(R,"/user_order_vegetables"),e,B)}};var z=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(n.useRef)();return Object(O.jsx)("div",{className:L.a.formContainer,children:Object(O.jsxs)("form",{className:L.a.form,onSubmit:function(n){n.preventDefault();var i={farm_name:t.current.value,location:a.current.value,image:c.current.value,description:r.current.value};console.log(i),W.editFarmerProfile(i,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&(e.submitAction(),e.action())})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data")}))},children:[Object(O.jsx)("div",{className:L.a.formTitle,children:Object(O.jsx)("h4",{children:"EDIT PROFILE"})}),Object(O.jsx)("div",{className:L.a.closeAction,children:Object(O.jsx)(w.a,{onClick:e.action,"aria-label":"close",sx:{position:"absolute",top:"1rem",right:"1rem",padding:"0px"},color:"error",size:"small",children:Object(O.jsx)(q.a,{fontSize:"small",sx:{width:"30px",height:"30px"}})})}),Object(O.jsxs)("div",{className:L.a.control,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Farm Name"}),Object(O.jsx)("input",{type:"text",required:!0,id:"name",placeholder:"Enter farm name",ref:t})]}),Object(O.jsxs)("div",{className:L.a.control,children:[Object(O.jsx)("label",{htmlFor:"location",children:"Farm Location"}),Object(O.jsx)("input",{type:"text",required:!0,id:"location",placeholder:"Enter farm location",ref:a})]}),Object(O.jsxs)("div",{className:L.a.control,children:[Object(O.jsx)("label",{htmlFor:"picture",children:"Farm Picture"}),Object(O.jsx)("input",{type:"text",required:!0,id:"picture",ref:c})]}),Object(O.jsxs)("div",{className:L.a.control,children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("textarea",{id:"description",required:!0,rows:"5",placeholder:"Enter farm description",ref:r})]}),Object(O.jsx)("div",{className:L.a.actions,children:Object(O.jsx)("button",{type:"submit",children:"EDIT PROFILE"})})]})})},V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",maxWidth:"800px",bgcolor:"background.paper",borderRadius:"5px",boxShadow:24,p:4};var H=function(e){var t=n.useState(!1),a=Object(y.a)(t,2),c=a[0],r=a[1],i=function(){return r(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{"aria-label":"Add",color:"success",size:"large",onClick:function(){return r(!0)},children:"Edit"}),Object(O.jsx)(E.a,{open:c,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(O.jsx)(C.a,{sx:V,children:Object(O.jsx)(z,{action:i,submitAction:e.editAction})})})]})};var U=function(e){return Object(O.jsx)(l.a,{item:!0,xs:12,children:Object(O.jsxs)(_.a,{elevation:7,children:[Object(O.jsx)(N.a,{component:"img",height:"194",image:e.image,alt:e.farm_name}),Object(O.jsx)(A.a,{title:e.farm_name,subheader:e.owner,action:Object(O.jsx)(S.a,{style:{paddingTop:"34px",paddingRight:"15px"},children:e.location})}),Object(O.jsx)(F.a,{children:Object(O.jsx)(S.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(O.jsx)(I.a,{children:Object(O.jsx)(H,{editAction:e.getFunction})})]})})};var G=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(y.a)(r,2),o=i[0],s=i[1],l=function(){W.getFarmerProfile().then((function(e){c(e.data[0]),s(e.data.owner_name)})).catch((function(e){console.log(e)}))};return Object(n.useEffect)((function(){l()}),[]),Object(O.jsx)(g,{children:Object(O.jsx)(U,{description:a?a.description:"Description",farm_name:a?a.farm_name:"Farm name",image:a?a.image:"Image",location:a?a.location:"Location",owner:o,getFunction:l})})},J=a(292);var K=function(e){return Object(O.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(O.jsxs)(_.a,{elevation:7,children:[Object(O.jsx)(N.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(O.jsx)(A.a,{title:e.name,subheader:"$"+e.price,action:Object(O.jsx)(J.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(O.jsx)(S.a,{children:e.quantity})})}),Object(O.jsx)(F.a,{children:Object(O.jsx)(S.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(O.jsx)(I.a,{children:Object(O.jsx)(d.a,{size:"medium",color:"error",fullWidth:!0,variant:"contained",onClick:function(){console.log(e.type),console.log(parseInt(e.id));var t={id:parseInt(e.id)};"1"===e.type?W.deleteVegetable(t,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&e.deleteAction()})):W.deleteTree(t,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&e.deleteAction()}))},children:"Delete"})})]})})};var Q=function(e){return Object(O.jsx)(l.a,{container:!0,spacing:3,children:e.items.map((function(t){return Object(O.jsx)(K,{id:t.id,image:t.image,description:t.description,price:t.price,quantity:t.quantity,name:t.name,type:e.itemType,deleteAction:e.getFunction},t.id)}))})},X=a(165),Y=a.n(X),Z=a(50),$=a.n(Z);var M=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)(),o=e.itemData.isVegetable;return Object(O.jsx)("div",{className:$.a.formContainer,children:Object(O.jsxs)("form",{className:$.a.form,onSubmit:function(n){n.preventDefault();var s={name:t.current.value,quantity:a.current.value,price:c.current.value,description:r.current.value,image:i.current.value};"1"===o?W.addVegetable(s,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&(e.addAction(),e.closeAction())})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data")})):W.addTree(s,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&(e.addAction(),e.closeAction())})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data")}))},children:[Object(O.jsx)("div",{className:$.a.formTitle,children:Object(O.jsx)("h4",{children:e.itemData.title})}),Object(O.jsx)("div",{className:$.a.closeAction,children:Object(O.jsx)(w.a,{onClick:e.closeAction,"aria-label":"close",sx:{position:"absolute",top:"1rem",right:"1rem",padding:"0px"},color:"error",size:"small",children:Object(O.jsx)(q.a,{fontSize:"small",sx:{width:"30px",height:"30px"}})})}),Object(O.jsxs)("div",{className:$.a.control,children:[Object(O.jsx)("label",{htmlFor:"name",children:e.itemData.nameLabel}),Object(O.jsx)("input",{placeholder:e.itemData.namePlaceHolder,type:"text",required:!0,id:"name",ref:t})]}),Object(O.jsxs)("div",{className:$.a.control,children:[Object(O.jsx)("label",{htmlFor:"quantity",children:e.itemData.quantityLabel}),Object(O.jsx)("input",{placeholder:e.itemData.quantityPlaceHolder,type:"quantity",required:!0,id:"quantity",ref:a})]}),Object(O.jsxs)("div",{className:$.a.control,children:[Object(O.jsx)("label",{htmlFor:"price",children:e.itemData.priceLabel}),Object(O.jsx)("input",{placeholder:e.itemData.pricePlaceHolder,type:"number",required:!0,id:"price",ref:c})]}),Object(O.jsxs)("div",{className:$.a.control,children:[Object(O.jsx)("label",{htmlFor:"picture",children:e.itemData.pictureLabel}),Object(O.jsx)("input",{type:"text",required:!0,id:"picture",ref:i})]}),Object(O.jsxs)("div",{className:$.a.control,children:[Object(O.jsx)("label",{htmlFor:"description",children:e.itemData.descriptionLabel}),Object(O.jsx)("textarea",{placeholder:e.itemData.descriptionPlaceHolder,id:"description",required:!0,rows:"5",ref:r})]}),Object(O.jsx)("div",{className:$.a.actions,children:Object(O.jsx)("button",{type:"submit",children:e.itemData.buttonLabel})})]})})},ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",maxWidth:"800px",bgcolor:"background.paper",borderRadius:"5px",boxShadow:24,p:4};var te=function(e){var t=n.useState(!1),a=Object(y.a)(t,2),c=a[0],r=a[1],i=function(){return r(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(w.a,{sx:{color:"#72B750",position:"fixed",bottom:"10%",right:"10%"},"aria-label":"Add",color:"success",size:"large",onClick:function(){return r(!0)},children:Object(O.jsx)(Y.a,{sx:{width:"2.2em",height:"2.2em"},fontSize:"large"})}),Object(O.jsx)(E.a,{open:c,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(O.jsx)(C.a,{sx:ee,children:Object(O.jsx)(M,{itemData:e.data,closeAction:i,addAction:e.getFunction})})})]})};var ae=function(){var e=Object(s.g)(),t=Object(n.useState)([]),a=Object(y.a)(t,2),c=a[0],r=a[1],i=function(){W.getFarmerTrees().then((function(e){r(e.data)})).catch((function(t){console.log(t),e.push("/")}))};return Object(n.useEffect)((function(){i()}),[e]),Object(O.jsxs)(g,{children:[Object(O.jsx)(Q,{items:c,getFunction:i}),Object(O.jsx)(te,{data:{title:"ADD TREES",nameLabel:"Tree Name",namePlaceHolder:"Insert tree name",quantityLabel:"Available Quantity",quantityPlaceHolder:"Insert number of trees",priceLabel:"Price per tree",pricePlaceHolder:"Insert price per tree",pictureLabel:"Tree Picture",descriptionLabel:"Description",descriptionPlaceHolder:"Insert a brief description",buttonLabel:"ADD TREE"},getFunction:i})]})};var ne=function(){var e=Object(s.g)(),t=Object(n.useState)([]),a=Object(y.a)(t,2),c=a[0],r=a[1],i=function(){W.getFarmerVegetables().then((function(e){r(e.data)})).catch((function(t){console.log(t),e.push("/")}))};Object(n.useEffect)((function(){i()}),[e]);var o={title:"ADD VEGETABLES",nameLabel:"Vegetable Name",namePlaceHolder:"Insert vegetable name",quantityLabel:"Box Weight",quantityPlaceHolder:"Insert vegetable weight per box",priceLabel:"Price per Kg",pricePlaceHolder:"Insert price per box",pictureLabel:"Vegetable Picture",descriptionLabel:"Description",descriptionPlaceHolder:"Insert a brief description",buttonLabel:"ADD VEGETABLE",isVegetable:"1"};return Object(O.jsxs)(g,{children:[Object(O.jsx)(Q,{items:c,itemType:o.isVegetable,getFunction:i}),Object(O.jsx)(te,{data:o,getFunction:i})]})},ce=(a(218),a(94)),re=a.n(ce);var ie=function(){var e=localStorage.getItem("user_name");return Object(O.jsx)(j.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"nav-bg",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a.Brand,{href:"",className:re.a.NavBrand,children:Object(O.jsx)("img",{src:h,alt:"logo",style:{maxHeight:"60px"}})}),Object(O.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(u.a,{className:"me-auto",children:[Object(O.jsx)(o.c,{to:"/home",className:re.a.navList,children:"Home"}),Object(O.jsx)(o.c,{to:"/adoptions",className:re.a.navList,children:"Adoptions"}),Object(O.jsx)(o.c,{to:"/orders",className:re.a.navList,children:"Orders"})]}),Object(O.jsx)(p.a,{title:e,id:"basic-nav-dropdown",children:Object(O.jsx)(p.a.Item,{href:"#action/3.1",children:Object(O.jsx)(d.a,{color:"error",fullWidth:!0,size:"small",children:"Logout"})})})]})]})})};var oe=function(e){return Object(O.jsxs)("section",{children:[Object(O.jsx)(ie,{}),Object(O.jsx)(l.a,{container:!0,style:{padding:"0px"},children:Object(O.jsx)(b.a,{children:e.children})})]})},se=a(306);var le=function(e){var t=Object(s.g)();return Object(O.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(O.jsx)(_.a,{elevation:7,children:Object(O.jsxs)(se.a,{onClick:function(){var a=e.id;t.push(Object(s.e)("/farm/:farmId",{farmId:a}))},children:[Object(O.jsx)(N.a,{component:"img",image:e.image,alt:e.farm_name}),Object(O.jsx)(A.a,{title:e.farm_name,subheader:e.owner,action:Object(O.jsx)(S.a,{style:{paddingTop:"34px"},children:"Tannourine"})})]},e.id)})})};var de=function(e){return Object(O.jsx)(l.a,{container:!0,spacing:3,children:e.farms.map((function(e){return Object(O.jsx)(le,{id:e.id,image:e.image,description:e.description,farm_name:e.farm_name,location:e.location,owner:e.first_name+" "+e.last_name},e.id)}))})};var je=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(s.g)();return Object(n.useEffect)((function(){W.getCustomerFarms().then((function(e){c(e.data)})).catch((function(e){r.push("/")}))}),[r]),Object(O.jsx)(oe,{children:Object(O.jsx)(de,{farms:a})})},be=a(80),ue=a(5),pe=a(15),me=a(119),xe=a.n(me),he=a(38),Oe=a(295),fe=a(286),ge=a(296);var ve=function(e){return Object(O.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(O.jsxs)(_.a,{elevation:7,children:[Object(O.jsx)(N.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(O.jsx)(A.a,{title:e.name,subheader:e.price,action:Object(O.jsx)(J.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(O.jsx)(S.a,{children:e.quantity})})}),Object(O.jsx)(F.a,{children:Object(O.jsx)(S.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(O.jsx)(I.a,{children:Object(O.jsx)(d.a,{color:"success",variant:"contained",disableRipple:!1,size:"medium",fullWidth:!0,sx:{bgcolor:"#72B750"},onClick:function(){var t={tree_id:e.id};console.log(t),W.adoptTree(t,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&(console.log(e),alert("Tree was successfully adopted"))})).catch((function(e){console.log(e)}))},children:"Adopt Tree"})})]})})};var ye=function(e){return Object(O.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(O.jsxs)(_.a,{elevation:7,children:[Object(O.jsx)(N.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(O.jsx)(A.a,{title:e.name,subheader:e.price,action:Object(O.jsx)(J.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(O.jsx)(S.a,{children:e.quantity})})}),Object(O.jsx)(F.a,{children:Object(O.jsx)(S.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(O.jsx)(I.a,{children:Object(O.jsx)(d.a,{color:"success",variant:"contained",size:"medium",fullWidth:!0,sx:{bgcolor:"#72B750"},onClick:function(){var t={vegetable_id:e.id};console.log(t),W.orderVegetable(t,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&(console.log(e),alert("Vegetable was successfully ordered"))})).catch((function(e){console.log(e)}))},children:"Order Box"})})]})})},_e=["children","value","index"];function Ae(e){var t=e.children,a=e.value,n=e.index,c=Object(pe.a)(e,_e);return Object(O.jsx)("div",Object(ue.a)(Object(ue.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),{},{children:a===n&&Object(O.jsx)(C.a,{sx:{p:3},children:Object(O.jsx)(S.a,{component:"div",children:t})})}))}function Ne(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Fe=function(e){var t=Object(he.a)(),a=n.useState(0),c=Object(y.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)([]),d=Object(y.a)(o,2),j=d[0],b=d[1],u=Object(s.g)(),p={owner_id:e.farmId};Object(n.useEffect)((function(){W.getCustomerTrees(p,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){b(e.data)})).catch((function(e){u.push("/")}))}),[u]);var m=Object(n.useState)([]),x=Object(y.a)(m,2),h=x[0],f=x[1],g={owner_id:e.farmId};return console.log(g),Object(n.useEffect)((function(){W.getCustomerVegetables(g,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){f(e.data)})).catch((function(e){u.push("/")}))}),[u]),Object(O.jsxs)(C.a,{sx:{bgcolor:"background.black",width:"100%"},children:[Object(O.jsx)(Oe.a,{position:"sticky",children:Object(O.jsxs)(fe.a,{value:r,onChange:function(e,t){i(t)},textColor:"inherit",variant:"fullWidth","aria-label":"full width tab",children:[Object(O.jsx)(ge.a,Object(ue.a)({label:"Adopt Trees"},Ne(0))),Object(O.jsx)(ge.a,Object(ue.a)({label:"Shop Vegetables"},Ne(1)))]})}),Object(O.jsxs)(xe.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){i(e)},children:[Object(O.jsx)(Ae,{value:r,index:0,dir:t.direction,children:Object(O.jsx)(l.a,{container:!0,spacing:3,children:j.map((function(e){return Object(O.jsx)(ve,{id:e.id,image:e.image,description:e.description,price:e.price,quantity:e.quantity,name:e.name},e.id)}))})}),Object(O.jsx)(Ae,{value:r,index:1,dir:t.direction,children:Object(O.jsx)(l.a,{container:!0,spacing:3,children:h.map((function(e){return Object(O.jsx)(ye,{id:e.id,image:e.image,description:e.description,price:e.price,quantity:e.quantity,name:e.name},e.id)}))})})]})]})},Ie=a(166),Se=a.n(Ie);var Ce=function(e){return console.log(e.data),Object(O.jsx)(l.a,{item:!0,xs:12,children:Object(O.jsxs)(_.a,{className:Se.a.profileCard,children:[Object(O.jsx)(N.a,{component:"img",height:"194",image:e.data.image,alt:e.data.farm_name}),Object(O.jsx)(A.a,{title:Object(O.jsx)(S.a,{variant:"h3",children:e.data.farm_name}),subheader:e.data.first_name+" "+e.data.last_name,action:Object(O.jsx)(S.a,{style:{paddingTop:"25px"},children:"Tannourine"})}),Object(O.jsx)(F.a,{children:Object(O.jsx)(S.a,{variant:"body2",color:"text.secondary",children:e.data.description})})]})})};var Ee=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(s.g)();Object(n.useEffect)((function(){W.getCustomerFarms().then((function(e){c(e.data)})).catch((function(e){console.log(e),r.push("/")}))}),[r]);var i,o=Object(s.h)().farmId,l=parseInt(o),d=[],j=Object(be.a)(a);try{for(j.s();!(i=j.n()).done;){var b=i.value;b.id===l&&(d=b)}}catch(u){j.e(u)}finally{j.f()}return Object(O.jsxs)(oe,{children:[Object(O.jsx)(Ce,{data:d}),Object(O.jsx)(Fe,{farmId:l})]})},we=a(300),Te=a(284),Le=a.p+"static/media/loginLogo.bba5023c.png";var ke=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(s.g)();return Object(O.jsxs)(we.a,{elevation:10,style:{padding:20,height:"70vh",maxWidth:380},children:[Object(O.jsxs)(l.a,{align:"center",children:[Object(O.jsx)("img",{src:Le,alt:"logo",style:{maxHeight:"100px",marginTop:"-25px"}}),Object(O.jsx)("h3",{style:{color:"#516C66"},children:"Efarm"}),Object(O.jsx)("h2",{style:{marginTop:10,color:"#72B750"},children:"Sign in"})]}),Object(O.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value,r=t.current.value,i={email:c,password:r};W.checkLogin(i,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){var t=e.data.user.first_name+" "+e.data.user.last_name;1===e.data.user.user_type_id?(localStorage.setItem("user_name",t),localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user_type",e.data.user.user_type_id),a.push("/profile")):(localStorage.setItem("user_name",t),localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user_type",e.data.user.user_type_id),a.push("/home"))})).catch((function(e){console.log(e),""===c||""===r?alert("Please Enter your information"):alert("incorrect email or password")}))},children:[Object(O.jsx)(Te.a,{sx:{paddingBottom:"10px"},label:"Email",type:"email",placeholder:"Enter email address",inputRef:e,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(O.jsx)(Te.a,{sx:{paddingBottom:"15px"},label:"Password",type:"password",placeholder:"Enter password",inputRef:t,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(O.jsx)(d.a,{color:"success",sx:{backgroundColor:"#72b750",margin:"10px 0px"},variant:"contained",type:"submit",fullWidth:!0,children:"Sign in"})]})]})},qe=a(288),De=a(293),Pe=a(308),Re=a(307),Be=a(281);var We=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),r=n.useState("0"),i=Object(y.a)(r,2),o=i[0],s=i[1];return Object(O.jsxs)(we.a,{elevation:20,style:{padding:20,maxWidth:380},children:[Object(O.jsxs)(l.a,{align:"center",children:[Object(O.jsx)("img",{src:Le,alt:"logo",style:{maxHeight:"100px",marginTop:"-25px"}}),Object(O.jsx)("h3",{style:{color:"#516C66"},children:"Efarm"}),Object(O.jsx)("h2",{style:{marginTop:10,color:"#72B750"},children:"Sign Up"})]}),Object(O.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=e.current.value,i=t.current.value,s=a.current.value,l=c.current.value,d={first_name:r,last_name:i,user_type_id:o,email:s,password:l};W.checkSignup(d,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&alert("Account is successfully created")})).catch((function(e){console.log(e),""===s||""===l?alert("Please Enter your information"):alert("Email exists already")}))},children:[Object(O.jsx)(Te.a,{sx:{paddingBottom:"10px"},label:"First Name",type:"text",placeholder:"Enter your first name",inputRef:e,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(O.jsx)(Te.a,{sx:{paddingBottom:"10px"},label:"Last Name",type:"text",placeholder:"Enter your last name",inputRef:t,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(O.jsxs)(Re.a,{component:"fieldset",children:[Object(O.jsx)(Be.a,{color:"success",component:"legend",style:{margin:"0px"},children:"Register as:"}),Object(O.jsxs)(De.a,{style:{display:"initial"},"aria-label":"user type",defaultValue:"Customer",name:"user-type",value:o,onChange:function(e){s(e.target.value)},children:[Object(O.jsx)(Pe.a,{value:"0",control:Object(O.jsx)(qe.a,{color:"success",size:"small"}),label:"Customer"}),Object(O.jsx)(Pe.a,{value:"1",control:Object(O.jsx)(qe.a,{color:"success",size:"small"}),label:"Farmer"})]})]}),Object(O.jsx)(Te.a,{sx:{paddingBottom:"10px"},label:"Email",type:"email",placeholder:"Enter your email",inputRef:a,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(O.jsx)(Te.a,{sx:{paddingBottom:"10px"},label:"Password",type:"password",placeholder:"Create a password",inputRef:c,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(O.jsx)(d.a,{color:"success",sx:{backgroundColor:"#72b750",margin:"10px 0px"},variant:"contained",type:"submit",fullWidth:!0,children:"Sign Up"})]})]})},ze=["children","value","index"];function Ve(e){var t=e.children,a=e.value,n=e.index,c=Object(pe.a)(e,ze);return Object(O.jsx)("div",Object(ue.a)(Object(ue.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),{},{children:a===n&&Object(O.jsx)(C.a,{children:t})}))}function He(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Ue=function(){var e=Object(he.a)(),t=c.a.useState(0),a=Object(y.a)(t,2),n=a[0],r=a[1];return Object(O.jsx)(we.a,{style:{maxWidth:380,margin:"6vh auto"},elevation:7,children:Object(O.jsxs)(C.a,{sx:{bgcolor:"background.paper",maxWidth:380},children:[Object(O.jsx)(Oe.a,{position:"static",children:Object(O.jsxs)(fe.a,{value:n,onChange:function(e,t){r(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(O.jsx)(ge.a,Object(ue.a)({label:"Sign In"},He(0))),Object(O.jsx)(ge.a,Object(ue.a)({label:"Sign Up"},He(1)))]})}),Object(O.jsxs)(xe.a,{axis:"rtl"===e.direction?"x-reverse":"x",index:n,onChangeIndex:function(e){r(e)},children:[Object(O.jsx)(Ve,{value:n,index:0,dir:e.direction,children:Object(O.jsx)(ke,{})}),Object(O.jsx)(Ve,{value:n,index:1,dir:e.direction,children:Object(O.jsx)(We,{})})]})]})})};var Ge=function(e){return Object(O.jsxs)(l.a,{container:!0,sx:{marginTop:"-25px"},children:[e.items.map((function(e){return Object(O.jsx)(l.a,{item:!0,xs:12,children:Object(O.jsxs)(_.a,{sx:{display:"flex"},elevation:7,children:[Object(O.jsx)(N.a,{component:"img",sx:{width:"35%"},image:e.image,alt:"Live from space album cover"}),Object(O.jsxs)(C.a,{sx:{width:"65%",display:"flex",flexDirection:"column"},children:[Object(O.jsx)(A.a,{sx:{backgroundColor:"#ffffff"},title:e.name,subheader:e.price,action:Object(O.jsx)(J.a,{sx:{bgcolor:"#F2AB50",marginTop:"70%"},"aria-label":"recipe",children:Object(O.jsx)(S.a,{children:e.quantity})})}),Object(O.jsxs)(F.a,{sx:{flex:"1 0 auto",backgroundColor:"#ffffff"},children:[Object(O.jsx)(S.a,{component:"div",style:{color:"#516c66"},variant:"h6",children:e.farm_name}),Object(O.jsx)(S.a,{variant:"body1",color:"text.secondary",component:"div",children:e.description})]})]})]})},e.id)})),";"]})};var Je=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(s.g)();return console.log(a),Object(n.useEffect)((function(){W.getCustomerOrders().then((function(e){console.log(e),c(e.data)})).catch((function(e){console.log(e),r.push("/")}))}),[r]),Object(O.jsx)(oe,{children:Object(O.jsx)(Ge,{items:a})})};var Ke=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(s.g)();return Object(n.useEffect)((function(){W.getCustomerAdoptions().then((function(e){c(e.data)})).catch((function(e){r.push("/")}))}),[r]),Object(O.jsx)(oe,{children:Object(O.jsx)(Ge,{items:a})})},Qe=["component"];var Xe=function(e){var t=e.component,a=Object(pe.a)(e,Qe),n=localStorage.getItem("user_type");return Object(O.jsx)(s.b,Object(ue.a)(Object(ue.a)({},a),{},{render:function(e){return"1"===n?Object(O.jsx)(t,Object(ue.a)({},e)):Object(O.jsx)(s.a,{to:"/"})}}))},Ye=["component"];var Ze=function(e){var t=e.component,a=Object(pe.a)(e,Ye),n=localStorage.getItem("user_type");return Object(O.jsx)(s.b,Object(ue.a)(Object(ue.a)({},a),{},{render:function(e){return"0"===n?Object(O.jsx)(t,Object(ue.a)({},e)):Object(O.jsx)(s.a,{to:"/"})}}))};var $e=function(){return Object(O.jsxs)(o.b,{children:[Object(O.jsx)(s.b,{path:"/",exact:!0,component:Ue}),Object(O.jsx)(Xe,{path:"/profile",component:G}),Object(O.jsx)(Xe,{path:"/dashboard",component:v}),Object(O.jsx)(Xe,{path:"/vegetables",component:ne}),Object(O.jsx)(Xe,{path:"/trees",component:ae}),Object(O.jsx)(Ze,{path:"/home",component:je}),Object(O.jsx)(Ze,{path:"/farm/:farmId",component:Ee}),Object(O.jsx)(Ze,{path:"/orders",component:Je}),Object(O.jsx)(Ze,{path:"/adoptions",component:Ke})]})};i.a.render(Object(O.jsx)(o.a,{basename:"/efarm",children:Object(O.jsx)($e,{})}),document.getElementById("root"))},50:function(e,t,a){e.exports={actions:"AddItemForm_actions__27gYe",control:"AddItemForm_control__1PH2q",form:"AddItemForm_form__2paK7",formTitle:"AddItemForm_formTitle__1anUS",formContainer:"AddItemForm_formContainer__xDTdA"}},56:function(e,t,a){e.exports={actions:"EditProfileForm_actions__FRjVb",control:"EditProfileForm_control__2e7fW",form:"EditProfileForm_form__13Giy",formTitle:"EditProfileForm_formTitle__3EPoB",formContainer:"EditProfileForm_formContainer__n7f2g"}},93:function(e,t,a){e.exports={logoutLink:"AdminNavigation_logoutLink__En7Fw",navList:"AdminNavigation_navList__1ryNN",active:"AdminNavigation_active__2TV8j",NavBrand:"AdminNavigation_NavBrand___PmO8",profileLink:"AdminNavigation_profileLink__2fQrw"}},94:function(e,t,a){e.exports={navList:"UserNavigation_navList__3pzkG",active:"UserNavigation_active__2zZ_o",NavBrand:"UserNavigation_NavBrand__1WNjX"}}},[[238,1,2]]]);
//# sourceMappingURL=main.b9cbce5e.chunk.js.map