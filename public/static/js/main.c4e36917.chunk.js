(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){},33:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(34),c=n.n(s),r=n(2),l=n(3),o=n(4),h=n(6),j=n(5),d=n(9),u=n.n(d),b=u.a.create({baseURL:"https://my-recipes-diary.herokuapp.com",withCredentials:!0});function p(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var m={service:b,signup:function(e){return b.post("/api/auth/signup",e).then((function(e){return e.data})).catch(p)},signin:function(e){return b.post("/api/auth/signin",e).then((function(e){return e.data})).catch(p)},isLoggedIn:function(){return b.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(p)},logout:function(){return b.get("/api/auth/logout").then((function(e){return e.data})).catch(p)},getItems:function(){return b.get("/api/items").then((function(e){return e.data})).catch(p)}},O=i.a.createContext(),x=n(0),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(x.jsx)(O.Provider,{value:e,children:this.props.children})}}]),n}(a.Component),v=n(7),f=n(15),y=function(e){return function(t){return Object(x.jsx)(O.Consumer,{children:function(n){return Object(x.jsx)(e,Object(f.a)(Object(f.a)({},t),{},{context:n}))}})}},C=(n(60),y((function(e){var t=e.context;return Object(x.jsxs)("nav",{className:"NavMain",children:[Object(x.jsx)(r.c,{exact:!0,to:"/",children:Object(x.jsx)("img",{className:"logo",src:"/images/logo.jpg",alt:"Logo"})}),Object(x.jsxs)("ul",{className:"nav-list",children:[t.isLoggedIn&&Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{to:"/",children:"My Recipes"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{to:"/profile",children:"My Profile"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{to:"/myweek",children:"My Week"})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{onClick:function(){m.logout().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:"Logout"})})]}),!t.isLoggedIn&&Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{to:"/signin",children:"Log in"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{to:"/signup",children:"Create account"})})]})]})]})}))),N=(n(17),function(e){var t=e.searchValue,n=e.handleSearch;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{htmlFor:" searchValue",children:"Search recipe"}),Object(x.jsx)("input",{className:"input",type:"text",placeholder:"Search",value:t,onChange:function(e){return n(e,e.target.value)}})]})}),S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={recipe:null},e.handleDelete=function(){var t=e.props.match.params._id,n="".concat("https://my-recipes-diary.herokuapp.com","/api/recipe/delete/").concat(t);u.a.delete(n).then((function(t){console.log("this is props ",e.props),e.props.history.push("/")})).catch((function(e){return console.log("Err while deleting character: ".concat(e))}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params._id;u.a.get("".concat("https://my-recipes-diary.herokuapp.com","/api/recipe/").concat(t)).then((function(t){e.setState({recipe:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return null===this.state.recipe?Object(x.jsx)("div",{children:"Loading..."}):Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"Welcome to recipe detail"}),Object(x.jsx)("h1",{children:this.state.recipe.title}),Object(x.jsxs)("div",{className:"Recipe-intro",children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:["Level: ",this.state.recipe.level]}),Object(x.jsxs)("p",{children:["Time: ",this.state.recipe.duration,"min"]}),Object(x.jsx)("button",{children:"Add to my week"})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:this.state.recipe.picture,alt:"dish"})})]}),Object(x.jsxs)("div",{className:"Recipe-content",children:[Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:this.state.recipe.instructions})}),Object(x.jsx)("div",{children:this.state.recipe.ingredients.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:[e.quantity," ",e.unit," ",e.value]})},e._id)}))})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{children:Object(x.jsx)(r.b,{to:"/recipe/edit/".concat(this.state.recipe._id),children:"Update recipe"})}),Object(x.jsx)("button",{onClick:this.handleDelete,children:"Delete recipe"})]})]})}}]),n}(i.a.Component),w=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"card-title",children:this.props.recipe.title}),Object(x.jsx)("img",{style:{width:"300px",height:"200"},className:"image-card",src:this.props.recipe.picture,alt:""}),Object(x.jsx)(r.b,{to:"/recipe/".concat(this.props.recipe._id),children:"See more !"})]})})}}]),n}(i.a.Component),F=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={recipes:[],searchValue:""},e.handleSearch=function(t,n){e.setState({searchValue:n})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.a.get("".concat("https://my-recipes-diary.herokuapp.com","/api/recipe")).then((function(t){e.setState({recipes:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"My food diary"}),Object(x.jsx)("img",{className:"image-home",src:"/images/homeBandeau.jpg",alt:"Bandeau"})]}),Object(x.jsx)(N,{handleSearch:this.handleSearch,searchValue:this.state.searchValue}),Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("b",{children:Object(x.jsx)(r.b,{to:"/recipe/create",children:" \ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73 Add a new recipe !"})})]}),this.state.recipes.filter((function(t){return t.title.toLowerCase().includes(e.state.searchValue.toLowerCase())})).map((function(e,t){return Object(x.jsx)(w,{recipe:e},t)}))]})}}]),n}(i.a.Component),L=n(10),k=(n(33),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(L.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),m.signin(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return this.props.context.user?Object(x.jsx)(v.a,{to:"/"}):Object(x.jsxs)("form",{className:"Form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{className:"intro",children:[Object(x.jsx)("h2",{className:"Form__title",children:"Welcome Back !"}),Object(x.jsx)("p",{children:"We've missed you"})]}),Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"email",id:"email",name:"email"}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"password",id:"password",name:"password"}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"Form__button",children:"Submit"}),Object(x.jsxs)("p",{children:["Don't have an account yet? ",Object(x.jsx)("a",{href:"/auth/signin",children:"Signup"})]})]})}}]),n}(a.Component)),_=Object(v.g)(y(k)),I=function(e){return Object(x.jsx)(_,{})},D=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={firstName:"",LastName:"",email:"",password:"",avatar:""},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(L.a)({},a,n))},e.handleImage=function(t){var n=t.target.files[0];console.log(n),e.setState({avatar:n})},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;n.append("email",e.state.email),n.append("password",e.state.password),n.append("firstName",e.state.firstName),n.append("LastName",e.state.LastName),n.append("avatar",e.state.avatar),m.signup(n).then((function(t){e.props.context.setUser(t)})).catch((function(t){e.setState({message:t.response.data.message})}))},e}return Object(o.a)(n,[{key:"render",value:function(){return this.props.context.user?Object(x.jsx)(v.a,{to:"/"}):Object(x.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,enctype:"multipart/form-data",children:[Object(x.jsxs)("div",{className:"intro",children:[Object(x.jsx)("h2",{className:"Form__title",children:"JOIN US!"}),Object(x.jsx)("p",{children:"Create an account for free"})]}),Object(x.jsxs)("div",{className:"formBox",children:[this.state.message&&Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:this.state.message})}),Object(x.jsxs)("div",{className:"Form__field",children:[Object(x.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{id:"firstName",type:"text",name:"firstName",autoComplete:"off",value:this.state.firstName,onChange:this.handleChange})]}),Object(x.jsxs)("div",{className:"Form__field",children:[Object(x.jsx)("label",{htmlFor:"LastName",children:"Last Name"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{id:"LastName",type:"text",name:"LastName",autoComplete:"off",value:this.state.LastName,onChange:this.handleChange})]}),Object(x.jsxs)("div",{className:"Form__field",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{id:"email",type:"email",name:"email",autoComplete:"off",value:this.state.email,onChange:this.handleChange})]}),Object(x.jsxs)("div",{className:"Form__field",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{id:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(x.jsxs)("div",{className:"Form__field",children:[Object(x.jsx)("label",{htmlFor:"avatar",children:"Avatar"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{name:"avatar",id:"avatar",type:"file",onChange:this.handleImage})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"Form__button",children:"Submit"})}),Object(x.jsxs)("p",{children:[" Already have an account? ",Object(x.jsx)("a",{href:"/auth/signup",children:"Signin"})]})]})}}]),n}(a.Component),A=Object(v.g)(y(D)),U=function(e){return Object(x.jsxs)("div",{className:"Signup",children:[Object(x.jsx)("div",{className:"Signup__form",children:Object(x.jsx)(A,{handleLogin:e.handleLogin})}),Object(x.jsx)("div",{className:"Signup__welcome"})]})},M=n(36),E=y((function(e){var t=e.component,n=e.context,a=Object(M.a)(e,["component","context"]);return n.isLoading?null:n.isLoggedIn?Object(x.jsx)(v.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return Object(x.jsx)(t,Object(f.a)({},e))}})):Object(x.jsx)(v.a,{to:"/signin"})})),q=y((function(e){return console.log("props",e),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Welcome to your profile!"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:e.context.user.avatar,alt:"Profile picture"}),Object(x.jsxs)("p",{children:[e.context.user.firstName," ",e.context.user.LastName]}),Object(x.jsx)(r.b,{to:"/profile/edit",children:Object(x.jsx)("button",{children:"Update my account"})}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{children:"Delete my account"})]})]})})),V=n(19),P=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={quantity:0,unit:"",value:"",isDisplayed:!1},e.toggleForm=function(){e.setState({isDisplayed:!e.state.isDisplayed})},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(L.a)({},a,i))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",onClick:this.toggleForm,children:" Add More ingredients"}),this.state.isDisplayed&&Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Quantity"}),Object(x.jsx)("input",{onChange:this.handleChange,type:"number",name:"quantity"}),Object(x.jsx)("p",{children:"Unit"}),Object(x.jsx)("input",{onChange:this.handleChange,type:"text",name:"unit"}),Object(x.jsx)("p",{children:"Value"}),Object(x.jsx)("input",{onChange:this.handleChange,type:"text",name:"value"}),Object(x.jsx)("button",{type:"button",onClick:function(){return e.props.handleClick({quantity:e.state.quantity,unit:e.state.unit,value:e.state.value})},children:"Submit"})]})]})}}]),n}(i.a.Component),B=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={title:"",serving:0,level:"",duration:"",ingredients:[{quantity:0,unit:"",value:""}],instructions:"",creator:"",type:""},e.handleSubmit=function(t){t.preventDefault();var n=e.props.match.params._id;console.log(e.props.match),u.a.patch("".concat("https://my-recipes-diary.herokuapp.com","/api/recipe/edit/").concat(n),{title:e.state.title,serving:e.state.serving,level:e.state.level,duration:e.state.duration,ingredients:e.state.ingredients,instructions:e.state.instructions,creator:e.state.creator,type:e.state.type}).then((function(t){e.props.history.push("/")})).catch((function(e){console.log(e)}))},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(L.a)({},a,i))},e.handleIngredientChange=function(t){var n=e.state.ingredients;n[t.target.id][t.target.name]=t.target.value,console.log(t.target),e.setState({ingredients:n})},e.AddNewIngredient=function(t){console.log(t),e.setState({ingredients:[].concat(Object(V.a)(e.state.ingredients),[t])})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.match.params._id;u.a.get("".concat("https://my-recipes-diary.herokuapp.com","/api/recipe/").concat(t)).then((function(t){var n=t.data;console.log(n),e.setState({title:n.title,serving:n.serving,level:n.level,duration:n.duration,ingredients:n.ingredients,instructions:n.instructions,creator:n.creator,type:n.type})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:["Edit your ",this.state.title," recipe !"]}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"title",children:"Title"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.title,name:"title",type:"text"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"serving",children:"Serving"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.serving,name:"serving",type:"number"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"level",children:"Level"}),Object(x.jsxs)("select",{onChange:this.handleChange,value:this.state.level,name:"level",id:"level",children:[Object(x.jsx)("option",{value:"Easy",children:"Easy"}),Object(x.jsx)("option",{value:"Medium",children:"Medium"}),Object(x.jsx)("option",{value:"Difficult",children:"Difficult"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"",children:"Duration"}),Object(x.jsx)("input",{onChange:this.handleChange,name:"duration",type:"number",value:this.state.duration})]}),Object(x.jsx)("p",{children:"Ingredients:"}),this.state.ingredients.map((function(t,n){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),Object(x.jsx)("input",{id:n,onChange:e.handleIngredientChange,name:"quantity",type:"number",value:e.state.ingredients[n].quantity})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"unit",children:"Unit"}),Object(x.jsx)("input",{id:n,onChange:e.handleIngredientChange,name:"unit",type:"text",value:e.state.ingredients[n].unit})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"value",children:"Value"}),Object(x.jsx)("input",{id:n,onChange:e.handleIngredientChange,name:"value",type:"text",value:e.state.ingredients[n].value})]})]},t._id)})),Object(x.jsx)(P,{handleClick:this.AddNewIngredient}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"instructions",children:"instructions"}),Object(x.jsx)("input",{className:"input_instructions",onChange:this.handleChange,name:"instructions",type:"text",value:this.state.instructions})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"creator",children:"Creator"}),Object(x.jsx)("input",{onChange:this.handleChange,name:"creator",type:"text",value:this.state.creator})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"type",children:"type"}),Object(x.jsx)("input",{onChange:this.handleChange,name:"type",type:"text",value:this.state.type})]}),Object(x.jsx)("button",{children:"Submit"})]}),Object(x.jsx)(r.b,{to:"/recipe/".concat(this.props.match.params._id),children:Object(x.jsx)("button",{children:"Nothing to edit"})})]})}}]),n}(i.a.Component),W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={title:"",serving:0,level:"Easy",duration:"",ingredients:[],instructions:"",creator:"",type:""},e.handleChange=function(t){var n=t.target.name;e.setState(Object(L.a)({},n,t.target.value))},e.AddNewIngredient=function(t){console.log(t),e.setState({ingredients:[].concat(Object(V.a)(e.state.ingredients),[t])})},e.handleSubmit=function(t){t.preventDefault(),console.log("clickty click"),u.a.post("".concat("https://my-recipes-diary.herokuapp.com","/api/recipe/create"),{title:e.state.title,serving:e.state.serving,level:e.state.level,duration:e.state.image,ingredients:e.state.ingredients,instructions:e.state.instructions,creator:e.state.creator,type:e.state.type}).then((function(t){e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{method:"",onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"title",children:"Title"}),Object(x.jsx)("input",{id:"title",onChange:this.handleChange,value:this.state.title,name:"title",type:"text"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"serving",children:"Serving"}),Object(x.jsx)("input",{id:"serving",onChange:this.handleChange,value:this.state.serving,name:"serving",type:"serving"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"level",children:"Level"}),Object(x.jsxs)("select",{onChange:this.handleChange,value:this.state.level,name:"level",id:"level",children:[Object(x.jsx)("option",{value:"Easy",children:"Easy"}),Object(x.jsx)("option",{value:"Medium",children:"Medium"}),Object(x.jsx)("option",{value:"Difficult",children:"Difficult"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"duration",children:"Duration"}),Object(x.jsx)("input",{id:"duration",onChange:this.handleChange,name:"duration",type:"number",value:this.state.duration})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"",children:"Ingredients:"}),Object(x.jsx)("div",{children:this.state.ingredients.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:[e.quantity," ",e.unit," ",e.value]})},e._id)}))}),Object(x.jsx)(P,{handleClick:this.AddNewIngredient})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"",children:"instructions"}),Object(x.jsx)("input",{className:"input_instructions",onChange:this.handleChange,name:"instructions",type:"text",value:this.state.instructions})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"",children:"Creator"}),Object(x.jsx)("input",{onChange:this.handleChange,name:"creator",type:"text",value:this.state.creator})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"",children:"type"}),Object(x.jsx)("input",{onChange:this.handleChange,name:"type",type:"text",value:this.state.type})]}),Object(x.jsx)("button",{children:"Submit"})]})}}]),n}(a.Component),R=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"My week plan!"})})}}]),n}(i.a.Component),J=y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={firstName:"",LastName:"",email:"",password:"",avatar:""},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(L.a)({},a,i))},e.handleSubmit=function(t){t.preventDefault(),console.log("user"),u.a.patch("".concat("https://my-recipes-diary.herokuapp.com","/api/user/edit"),{firstName:e.state.firstName,LastName:e.state.LastName,email:e.state.email},{withCredentials:!0}).then((function(t){e.props.context.setUser(t.data),e.props.history.push("/profile")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);this.props.match.params.id;u.a.get("".concat("https://my-recipes-diary.herokuapp.com","/api/user/profile"),{withCredentials:!0}).then((function(t){var n=t.data;console.log(n),e.setState({firstName:n.firstName,LastName:n.LastName,email:n.email,password:n.password,avatar:n.avatar})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Update your account!"}),Object(x.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.firstName,name:"firstName",type:"text"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"LastName",children:"Last Name"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.LastName,name:"LastName",type:"text"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.email,name:"email",type:"email"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{onChange:this.handleChange,name:"password",type:"password",value:this.state.password})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"avatar",children:"Avatar"}),Object(x.jsx)("input",{onChange:this.handleImage,name:"avatar",type:"file"})]}),Object(x.jsx)("button",{children:"Submit"}),Object(x.jsx)("br",{}),Object(x.jsx)(r.b,{to:"/profile",children:Object(x.jsx)("button",{children:"Nothing to edit"})})]})]})}}]),n}(i.a.Component));var T=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(C,{}),Object(x.jsxs)(v.d,{children:[Object(x.jsx)(v.b,{exact:!0,path:"/",component:F}),Object(x.jsx)(v.b,{exact:!0,path:"/recipe/create",component:W}),Object(x.jsx)(v.b,{exact:!0,path:"/recipe/:_id",component:S}),Object(x.jsx)(v.b,{exact:!0,path:"/recipe/edit/:_id",component:B}),Object(x.jsx)(v.b,{exact:!0,path:"/signin",component:I}),Object(x.jsx)(v.b,{exact:!0,path:"/signup",component:U}),Object(x.jsx)(v.b,{exact:!0,path:"/myweek",component:R}),Object(x.jsx)(E,{exact:!0,path:"/profile",component:q}),Object(x.jsx)(E,{exact:!0,path:"/profile/edit",component:J})]})]})};n(66);c.a.render(Object(x.jsx)(r.a,{children:Object(x.jsx)(g,{children:Object(x.jsx)(T,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c4e36917.chunk.js.map