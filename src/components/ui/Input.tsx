import { ChangeEventHandler } from 'react';

type InputType = "text" | "number" | "tel" | "email" | "password" | "checkbox" | "file"

interface InputProps {
  type: InputType
  placeholder: string,
  className?: string,
  id?: string,
  name?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  required?: boolean,
  disabled?: boolean
}

function Input ({type, placeholder="Enter text here", className, id, name, onChange, required, disabled}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`placeholder-black/50 bg-light dark:bg-dark/90 dark:text-white dark:border-dark dark:placeholder-white/70 ${className}`}
      id={id}
      name={name}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  )
}
export default Input;