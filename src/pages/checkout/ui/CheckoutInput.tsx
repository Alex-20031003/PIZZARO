import type {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from 'react'
import type { CheckoutFormValues } from '../model/checkoutValidation'

interface CheckoutInputProps {
  name: keyof CheckoutFormValues
  label: string
  autoComplete?: HTMLInputAutoCompleteAttribute
  error?: string
  maxLength: number
  placeholder: string
  required?: boolean
  type?: HTMLInputTypeAttribute
}

export default function CheckoutInput({
  name,
  label,
  autoComplete,
  error,
  maxLength,
  placeholder,
  required = true,
  type = 'text',
}: CheckoutInputProps) {
  const errorId = `${name}-error`

  return (
    <div className='w-full flex flex-col gap-2'>
      <label
        htmlFor={name}
        className='text-sm pl-1 capitalize'
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`py-3 pl-3 bg-[#E6E6E6] rounded-lg text-lg border-2 ${error ? 'border-red-600 focus:border-red-600' : 'border-transparent focus:border-(--primary)'} outline-none transition-colors`}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p id={errorId} className='text-sm text-red-600 pl-1' role='alert'>
          {error}
        </p>
      )}
    </div>
  )
}
