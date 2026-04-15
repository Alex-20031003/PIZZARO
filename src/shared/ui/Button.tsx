type ButtonProps ={
  title: string;
  type?: 'submit' | 'reset' | 'button'
  paddingY: string
  paddingX: string
  className?: string
}

export default function Button({title, type, paddingY, paddingX, className}: ButtonProps){
  return <button type={type} className={`bg-(--primary) text-(--white) py-${paddingY} px-${paddingX} ${className}`}>{title}</button>
}