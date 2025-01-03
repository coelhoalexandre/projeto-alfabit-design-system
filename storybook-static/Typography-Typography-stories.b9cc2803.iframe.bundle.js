"use strict";(self.webpackChunkprojeto_alfabit_design_system=self.webpackChunkprojeto_alfabit_design_system||[]).push([[170],{"./components/Typography/Typography.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,TextHeadingH1:()=>TextHeadingH1,TextHeadingH2:()=>TextHeadingH2,TextHeadingH3:()=>TextHeadingH3,TextParagraph:()=>TextParagraph,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Typography",component:__webpack_require__("./components/Typography/index.tsx").A,argTypes:{children:{type:"string"},className:{type:"string"},variant:{type:"string"}}},Primary={args:{children:"Texto"}},TextHeadingH1={args:{children:"Texto",element:"h1",size:"title1",className:"font-extrabold"}},TextHeadingH2={args:{children:"Texto",element:"h2",size:"title2",className:"font-extrabold"}},TextHeadingH3={args:{children:"Texto",element:"h3",size:"title3",className:"font-extrabold"}},TextParagraph={args:{children:"Texto",element:"p",size:"md",className:"text-primary"}},__namedExportsOrder=["Primary","TextHeadingH1","TextHeadingH2","TextHeadingH3","TextParagraph"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto"\n  }\n}',...Primary.parameters?.docs?.source}}},TextHeadingH1.parameters={...TextHeadingH1.parameters,docs:{...TextHeadingH1.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "h1",\n    size: "title1",\n    className: "font-extrabold"\n  }\n}',...TextHeadingH1.parameters?.docs?.source}}},TextHeadingH2.parameters={...TextHeadingH2.parameters,docs:{...TextHeadingH2.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "h2",\n    size: "title2",\n    className: "font-extrabold"\n  }\n}',...TextHeadingH2.parameters?.docs?.source}}},TextHeadingH3.parameters={...TextHeadingH3.parameters,docs:{...TextHeadingH3.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "h3",\n    size: "title3",\n    className: "font-extrabold"\n  }\n}',...TextHeadingH3.parameters?.docs?.source}}},TextParagraph.parameters={...TextParagraph.parameters,docs:{...TextParagraph.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "p",\n    size: "md",\n    className: "text-primary"\n  }\n}',...TextParagraph.parameters?.docs?.source}}}},"./components/Typography/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const textVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)("text-gray-primary text-sm font-normal",{variants:{variant:{primary:"text-gray-primary",secondary:"text-gray-secondary",tertiary:"text-gray-tertiary"},size:{xs:"text-xs",sm:"text-sm",md:"text-md",xl:"text-xl",title1:"text-txl",title2:"text-tlg",title3:"text-tmd"},defaultVariants:{variant:"primary",size:"md"}}});function Typography({children,element="p",className,...props}){const Element=element;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Element,{className:`${textVariants(props)}${className}`,...props,children})}Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},element:{required:!1,tsType:{name:"union",raw:'"p" | TitleLevels',elements:[{name:"literal",value:'"p"'},{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]}]},description:"",defaultValue:{value:'"p"',computed:!1}}}}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);