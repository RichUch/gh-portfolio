import { ChangeEventHandler } from "react"

interface TextareaProps {
  name: string,
  placeholder: string,
  rows?: number,
  cols?: number,
  className?: string,
  id?: string,
  onChange?: ChangeEventHandler<HTMLTextAreaElement>,
  required?: boolean
}

function Textarea ({name, placeholder, rows = 20, cols=20, className, id, onChange, required}: TextareaProps) {
  return (
    <textarea name={name}
    placeholder={placeholder}
    rows={rows}
    cols={cols}
    className={className}
    id={id}
    onChange={onChange}
    required={required}
    />
  )
}

export default Textarea;