/*! For license information please see Box-Box-stories.1361bac6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkprojeto_alfabit_design_system=self.webpackChunkprojeto_alfabit_design_system||[]).push([[686],{"./components/Box/Box.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxAlert:()=>BoxAlert,BoxError:()=>BoxError,BoxSuccess:()=>BoxSuccess,Default:()=>Default,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Box",component:__webpack_require__("./components/Box/index.tsx").A,argTypes:{children:{type:"string"},type:{type:"string"},rounded:{type:"boolean"},border:{type:"boolean"},filledBackground:{type:"boolean"},className:{type:"string"}}},Primary={args:{}},Default={args:{children:"Este é uma Box Padrão",filledBackground:!0,type:"primary"}},BoxAlert={args:{children:"Este é um alerta!",filledBackground:!0,rounded:!0,type:"alert"}},BoxSuccess={args:{children:"Operação concluída com sucesso!",filledBackground:!0,rounded:!0,type:"success"}},BoxError={args:{children:"Ocorreu um erro durante a operação.",filledBackground:!0,rounded:!0,type:"error"}},__namedExportsOrder=["Primary","Default","BoxAlert","BoxSuccess","BoxError"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Este é uma Box Padrão",\n    filledBackground: true,\n    type: "primary"\n  }\n}',...Default.parameters?.docs?.source}}},BoxAlert.parameters={...BoxAlert.parameters,docs:{...BoxAlert.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Este é um alerta!",\n    filledBackground: true,\n    rounded: true,\n    type: "alert"\n  }\n}',...BoxAlert.parameters?.docs?.source}}},BoxSuccess.parameters={...BoxSuccess.parameters,docs:{...BoxSuccess.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Operação concluída com sucesso!",\n    filledBackground: true,\n    rounded: true,\n    type: "success"\n  }\n}',...BoxSuccess.parameters?.docs?.source}}},BoxError.parameters={...BoxError.parameters,docs:{...BoxError.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Ocorreu um erro durante a operação.",\n    filledBackground: true,\n    rounded: true,\n    type: "error"\n  }\n}',...BoxError.parameters?.docs?.source}}}},"./components/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const boxClassMap={primary:"bg-primary",secondary:"bg-tertiary",dark:"bg-dark",alert:"bg-yellow-100 text-yellow-100",success:"bg-green-100 text-green-100",error:"bg-error-100 text-error-100"},Box=({rounded=!1,border=!1,filledBackground=!1,type="primary",children,className,...rest})=>{const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"rounded-md":rounded,"border border-gray-100":border,"bg-dark":filledBackground,[boxClassMap[type]]:type});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`${className} ${classes}`,...rest,children})},__WEBPACK_DEFAULT_EXPORT__=Box;Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filledBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark" | "alert" | "success" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"alert"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);