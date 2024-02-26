import React from "react"

interface ToggleProps {
  checked: boolean
  onChange: () => void
  className?: string
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  className = "",
}) => {
  return (
    <label
      className={`relative inline-block h-8 w-14 ${className}`}
      htmlFor="toggle"
    >
      <input
        id="toggle"
        type="checkbox"
        className="peer h-0 w-0 opacity-0"
        checked={checked}
        onChange={onChange}
      />
      <span className="slider bg-custom-gradient absolute bottom-0 left-0 right-0 top-0 block cursor-pointer rounded-full transition-colors duration-300 ease-in-out before:absolute before:left-1 before:top-1 before:h-6 before:w-6 before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[''] peer-checked:bg-blue-500 peer-checked:before:translate-x-6"></span>
    </label>
  )
}

export default Toggle
