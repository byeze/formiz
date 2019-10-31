(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));n(167),n(170),n(169),n(171),n(172),n(0);var r=n(178);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={id:"formiz-step",title:"<FormizStep> component"},i=[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[{value:"name *",id:"name-",children:[]},{value:"as",id:"as",children:[]},{value:"label",id:"label",children:[]},{value:"isEnabled",id:"isenabled",children:[]},{value:"order",id:"order",children:[]}]}],p={rightToc:i},l="wrapper";function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(l,o({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { FormizStep } from '@formiz/core'\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"name-"},Object(r.b)("inlineCode",{parentName:"h3"},"name")," *"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Required")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The name is required to register the step in the form.")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(r.b)("h3",{id:"as"},Object(r.b)("inlineCode",{parentName:"h3"},"as")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can pass the tag for the step container. Default is ",Object(r.b)("inlineCode",{parentName:"p"},"'div'"),".")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1" as={View}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" as={View}>\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(r.b)("h3",{id:"label"},Object(r.b)("inlineCode",{parentName:"h3"},"label")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A label can be passed to the step and then used for display when getting the steps with the ",Object(r.b)("inlineCode",{parentName:"p"},"useForm()")," hook.")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1" label="First step">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" label="Second step">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(r.b)("h3",{id:"isenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isEnabled")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Set if the step should be enabled or not (default is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),")")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'{/* Display: `step1` > `step3`. */}\n<Formiz>\n  <FormizStep name="step1">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" isEnabled={false}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step3">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(r.b)("h3",{id:"order"},Object(r.b)("inlineCode",{parentName:"h3"},"order")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Order is a number to display the steps in the correct order. (default is ",Object(r.b)("inlineCode",{parentName:"p"},"0"),")"),Object(r.b)("br",null),"If you use order, all steps should get an order property to prevent unexpected behavior."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'{/* Display order: `step2` > `step3` > `step1`. */}\n<Formiz>\n  <FormizStep name="step1" order={3}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" order={1}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step3" order={2}>\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')))}b.isMDXComponent=!0}}]);