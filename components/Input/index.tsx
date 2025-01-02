import React from "react";

export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline)
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );

  return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

export default function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="relative">
      {label && <label className="absolute pt-1 pl-3 text-xs">{label}</label>}
      <InputOrTextArea
        className={`
        border-2 rounded-md p-3 bg-dark text-gray-primary
        disabled:bg-disabled disabled:border-disabled
        ${label && "pt-5"}
        ${className}
        `}
        {...props}
      />
    </div>
  );
}
