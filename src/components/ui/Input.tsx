import { ChangeEventHandler } from 'react';

type InputType = "text" | "number" | "tel" | "email" | "password" | "checkbox"

interface InputProps {
  type: InputType
  placeholder: string,
  className?: string,
  id?: string,
  name?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  required?: boolean
}

function Input ({type, placeholder, className, id, name, onChange, required}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`placeholder-black/50 dark:bg-dark/90 dark:text-white dark:border-dark dark:placeholder-white/70 ${className}`}
      id={id}
      name={name}
      onChange={onChange}
      required={required}
    />
  )
}
export default Input;