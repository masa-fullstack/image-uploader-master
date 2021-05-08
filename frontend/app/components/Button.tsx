import React from 'react'

type Props = {
  title: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      className="bg-blue-500 text-white py-3 px-5 rounded-xl"
    >
      {props.title}
    </button>
  )
}

export default Button
