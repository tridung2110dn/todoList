(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(26),l=a.n(c),r=(a(38),a(18)),i=a(10),o=a(11),m=a(14),u=a(12),d=a(15),k=a(9),p=(a(39),a(23),a(52)),h=a(28),f=a.n(h),b=a(13),E=a(51),v=a(30),j=a(53),O=a(54),T=(a(40),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.handleSubmit,n=e.handleChange;return s.a.createElement(j.a,{onSubmit:a},s.a.createElement(E.a,null,s.a.createElement(v.a,{xl:8,md:8},s.a.createElement(j.a.Control,{type:"text",placeholder:"Add to do ...",value:t,onChange:n})),s.a.createElement(v.a,{xl:4,md:4},s.a.createElement(O.a,{className:"btn-submit",variant:"primary",type:"submit"},"Add to do"))))}}]),t}(n.Component));a(45);var C=function(e){var t=Object(k.f)().location.pathname,a=e.activeTasks,n=e.task,c=e.handleChange,l=e.handleSubmit;return s.a.createElement(E.a,{className:"header px-3 py-3"},s.a.createElement(v.a,{xl:8,md:8},s.a.createElement("p",{className:"title"}," Todo List "),s.a.createElement("p",{className:"number-of-tasks"},a," active tasks "),s.a.createElement(T,{task:n,handleChange:c,handleSubmit:l})),s.a.createElement(v.a,{xl:4,md:4,className:"nav-bar"},s.a.createElement(b.b,{to:"/",className:"/completed"===t?"":"active"}," Active tasks "),s.a.createElement(b.b,{to:"/completed",className:"/completed"===t?"active":""},"Completed Tasks ")))},N=a(17),g=(a(49),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.completedTask,n=e.deleteTask,c=e.returnTask,l=e.isCompleted;return s.a.createElement(E.a,{className:"active-tasks px-3 py-3"},s.a.createElement(v.a,{className:"tasks"},s.a.createElement("ul",{className:"list-group"},t.map((function(e){return s.a.createElement("li",{className:"list-group-item active-task",key:e.id},l?s.a.createElement(N.a,{className:"return-icon",onClick:function(){return c(e.id)}}):s.a.createElement(N.b,{className:"check-icon",onClick:function(){return a(e.id)}}),s.a.createElement("span",null," ",e.task," "),s.a.createElement(N.c,{className:"trash-icon",onClick:function(){return n(e.id)}}))})))))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){if(e.preventDefault(),console.log("Submit has submitted !"),a.state.task){var t={id:a.state.id,task:a.state.task},n=[].concat(Object(r.a)(a.state.tasks),[t]);a.setState({tasks:n,id:f()(),task:"",isEdit:!1})}},a.handleChange=function(e){a.setState({task:e.target.value})},a.completedTask=function(e){var t=a.state.tasks.find((function(t){return t.id===e})),n=[].concat(Object(r.a)(a.state.completed),[t]),s=a.state.tasks.filter((function(t){return t.id!==e}));a.setState({completed:n,tasks:s})},a.deleteTask=function(e){var t=a.state.tasks.filter((function(t){return t.id!==e}));a.setState({tasks:t})},a.returnTask=function(e){var t=a.state.completed.find((function(t){return t.id===e})),n=a.state.completed.filter((function(t){return t.id!==e})),s=[].concat(Object(r.a)(a.state.tasks),[t]);a.setState({tasks:s,completed:n})},a.state={tasks:[],completed:[],id:0,task:"",isEdit:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(p.a,{className:"justify-content-md-center mt-5"},s.a.createElement(C,{activeTasks:this.state.tasks.length,task:this.state.task,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),s.a.createElement(k.c,null,s.a.createElement(k.a,{exact:!0,path:"/"},s.a.createElement(g,{tasks:this.state.tasks,completedTask:this.completedTask,deleteTask:this.deleteTask})),s.a.createElement(k.a,{exact:!0,path:"/completed"},s.a.createElement(g,{tasks:this.state.completed,returnTask:this.returnTask,deleteTask:this.deleteTask,isCompleted:!0})))))}}]),t}(n.Component);l.a.render(s.a.createElement(b.a,{basename:"/todoList"},s.a.createElement(y,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.001780ab.chunk.js.map