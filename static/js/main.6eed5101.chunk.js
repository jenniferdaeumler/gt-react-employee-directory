(this["webpackJsonpgt-react-employee-directory"]=this["webpackJsonpgt-react-employee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=a(12),m=a(13),u=a(16),i=a(15),s=a(14),p=a.n(s),E=function(){return p.a.get("https://randomuser.me/api/?results=100")};var d=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("table",{class:"table",key:e.id},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"ID Picture"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Phone"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:e.picture,alt:e.firstName})),l.a.createElement("td",null,e.firstName," ",e.lastName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone)))))},h=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={people:[]},e.getEmployee=function(){E().then((function(t){e.setState({people:t.data.results})})).catch((function(e){console.log(e)}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getEmployee()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,{people:this.state.people}))}}]),a}(n.Component),f=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"Employee Directory"),l.a.createElement("p",{className:"lead"},"Sort or filter the employe directory as needed."))))};var y=function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(h,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6eed5101.chunk.js.map