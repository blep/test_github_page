"use strict";(self["webpackChunktest_github_page"]=self["webpackChunktest_github_page"]||[]).push([[651],{651:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var o=n(9835);function c(t,e,n,c,u,i){const l=(0,o.up)("example-component"),a=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(a,{class:"row items-center justify-evenly"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{title:"Example component",active:"",todos:t.todos,meta:t.meta},null,8,["todos","meta"])])),_:1})}var u=n(6970);function i(t,e,n,c,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("p",null,(0,u.zw)(t.title),1),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.todos,(n=>((0,o.wg)(),(0,o.iD)("li",{key:n.id,onClick:e[0]||(e[0]=(...e)=>t.increment&&t.increment(...e))},(0,u.zw)(n.id)+" - "+(0,u.zw)(n.content),1)))),128))]),(0,o._)("p",null,"Count: "+(0,u.zw)(t.todoCount)+" / "+(0,u.zw)(t.meta.totalCount),1),(0,o._)("p",null,"Active: "+(0,u.zw)(t.active?"yes":"no"),1),(0,o._)("p",null,"Clicks on todos: "+(0,u.zw)(t.clickCount),1)])}var l=n(499);function a(){const t=(0,l.iH)(0);function e(){return t.value+=1,t.value}return{clickCount:t,increment:e}}function r(t){const e=(0,o.Fl)((()=>t.value.length));return{todoCount:e}}const s=(0,o.aZ)({name:"ExampleComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(t){return Object.assign(Object.assign({},a()),r((0,l.Vh)(t,"todos")))}});var p=n(1639);const d=(0,p.Z)(s,[["render",i]]),m=d,g=(0,o.aZ)({name:"IndexPage",components:{ExampleComponent:m},setup(){const t=(0,l.iH)([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),e=(0,l.iH)({totalCount:1200});return{todos:t,meta:e}}});var w=n(9885),v=n(9984),C=n.n(v);const f=(0,p.Z)(g,[["render",c]]),_=f;C()(g,"components",{QPage:w.Z})}}]);