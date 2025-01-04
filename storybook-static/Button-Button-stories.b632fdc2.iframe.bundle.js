"use strict";(self.webpackChunkprojeto_alfabit_design_system=self.webpackChunkprojeto_alfabit_design_system||[]).push([[96],{"./components/Button/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,Secondary:()=>Secondary,SecondaryDisabled:()=>SecondaryDisabled,Tertiary:()=>Tertiary,TertiaryDisabled:()=>TertiaryDisabled,Violet:()=>Violet,VioletSecondary:()=>VioletSecondary,VioletTertiary:()=>VioletTertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Button",component:__webpack_require__("./components/Button/index.tsx").A,argTypes:{children:{type:"string"},className:{type:"string"},disabled:{type:"boolean"},onClick:{action:"clicked"}}},Primary={args:{children:"Botão"}},Disabled={args:{children:"Botão",disabled:!0}},Secondary={args:{children:"Botão",variant:"secondary"}},SecondaryDisabled={args:{children:"Botão",variant:"secondary",disabled:!0}},Tertiary={args:{children:"Botão",variant:"tertiary"}},TertiaryDisabled={args:{children:"Botão",variant:"tertiary",disabled:!0}},Violet={args:{children:"Botão",className:"theme-violet"}},VioletSecondary={args:{children:"Botão",className:"theme-violet",variant:"secondary"}},VioletTertiary={args:{children:"Botão",className:"theme-violet",variant:"tertiary"}},__namedExportsOrder=["Primary","Disabled","Secondary","SecondaryDisabled","Tertiary","TertiaryDisabled","Violet","VioletSecondary","VioletTertiary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão"\n  }\n}',...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    variant: "secondary"\n  }\n}',...Secondary.parameters?.docs?.source}}},SecondaryDisabled.parameters={...SecondaryDisabled.parameters,docs:{...SecondaryDisabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    variant: "secondary",\n    disabled: true\n  }\n}',...SecondaryDisabled.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    variant: "tertiary"\n  }\n}',...Tertiary.parameters?.docs?.source}}},TertiaryDisabled.parameters={...TertiaryDisabled.parameters,docs:{...TertiaryDisabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    variant: "tertiary",\n    disabled: true\n  }\n}',...TertiaryDisabled.parameters?.docs?.source}}},Violet.parameters={...Violet.parameters,docs:{...Violet.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    className: "theme-violet"\n  }\n}',...Violet.parameters?.docs?.source}}},VioletSecondary.parameters={...VioletSecondary.parameters,docs:{...VioletSecondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    className: "theme-violet",\n    variant: "secondary"\n  }\n}',...VioletSecondary.parameters?.docs?.source}}},VioletTertiary.parameters={...VioletTertiary.parameters,docs:{...VioletTertiary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Botão",\n    className: "theme-violet",\n    variant: "tertiary"\n  }\n}',...VioletTertiary.parameters?.docs?.source}}}},"./components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const getVariant=(variant,isDisabled)=>{switch(variant){case"primary":return isDisabled?"bg-disabled text-disabled":"bg-primary text-white";case"secondary":return isDisabled?"bg-disabled text-disabled":"bg-quaternary text-primary";default:return isDisabled?"text-disabled":"text-primary"}};function Button({variant="primary",children,className,disabled,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:`rounded-md py-2 px-6 ${getVariant(variant,disabled)} ${className}`,disabled,...props,children})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);