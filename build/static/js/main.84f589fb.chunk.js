(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(2),c=n.n(a),s=n(5),o=n.n(s),l=(n(15),n(4)),r=n(6),d=n(7),h=n(1),u=n(9),b=n(8),f=(n(16),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},i.fetchTasks=i.fetchTasks.bind(Object(h.a)(i)),i.handleChange=i.handleChange.bind(Object(h.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(h.a)(i)),i.getCookie=i.getCookie.bind(Object(h.a)(i)),i.startEdit=i.startEdit.bind(Object(h.a)(i)),i.deleteItem=i.deleteItem.bind(Object(h.a)(i)),i.strikeUnstrike=i.strikeUnstrike.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"getCookie",value:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var a=n[i].trim();if(a.substring(0,t.length+1)===t+"="){e=decodeURIComponent(a.substring(t.length+1));break}}return e}},{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var t=this;console.log("Fetching"),fetch("http://127.0.0.1:8000/api/task-list").then((function(e){return e.json().then((function(e){return t.setState({todoList:e})}))}))}},{key:"handleChange",value:function(t){var e=t.target.name,n=t.target.value;console.log("Name",e),console.log("Value",n),this.setState({activeItem:Object(l.a)(Object(l.a)({},this.state.activeItem),{},{title:n})})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),console.log("Item",this.state.activeItem);var n=this.getCookie("csrftoken"),i="http://localhost:8000/api/task-create/";!0===this.state.editing&&(i="http://localhost:8000/api/task-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify(this.state.activeItem)}).then((function(t){e.fetchTasks(),e.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(t){console.log("ERROR",t)}))}},{key:"startEdit",value:function(t){this.setState({activeItem:t,editing:!0})}},{key:"deleteItem",value:function(t){var e=this,n=this.getCookie("csrftoken");fetch("http://localhost:8000/api/task-delete/".concat(t.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":n}}).then((function(t){e.fetchTasks()}))}},{key:"strikeUnstrike",value:function(t){var e=this;t.completed=!t.completed;var n=this.getCookie("csrftoken"),i="http://localhost:8000/api/task-update/".concat(t.id,"/");fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:t.completed,title:t.title})}).then((function(){e.fetchTasks()})),console.log("TASK",t.completed)}},{key:"render",value:function(){var t=this.state.todoList,e=this;return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{id:"task-container",children:[Object(i.jsx)("div",{id:"form-wrapper",children:Object(i.jsxs)("form",{onSubmit:this.handleSubmit,id:"form",children:[" ",Object(i.jsxs)("div",{className:"flex-wrapper",children:[Object(i.jsx)("div",{style:{flex:6},children:Object(i.jsx)("input",{onChange:this.handleChange,className:"form-control",id:"title",value:this.state.activeItem.title,type:"text",name:"title",placeholder:"Add task.."})}),Object(i.jsx)("div",{style:{flex:1},children:Object(i.jsx)("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"})})]})]})}),Object(i.jsx)("div",{id:"list-wrapper",children:t.map((function(t,n){return Object(i.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(i.jsx)("div",{onClick:function(){return e.strikeUnstrike(t)},style:{flex:7},children:!1===t.completed?Object(i.jsx)("span",{children:t.title}):Object(i.jsx)("strike",{children:t.title})}),Object(i.jsx)("div",{style:{flex:1},children:Object(i.jsx)("button",{onClick:function(){return e.startEdit(t)},className:"btn btn-sm btn-outline-info",children:"Edit"})}),Object(i.jsx)("div",{style:{flex:1},children:Object(i.jsx)("button",{onClick:function(){return e.deleteItem(t)},className:"btn btn-sm btn-outline-dark delete",children:"Delete"})})]},n)}))})]})})}}]),n}(c.a.Component)),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),c(t),s(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.84f589fb.chunk.js.map