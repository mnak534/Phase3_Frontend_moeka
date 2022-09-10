import React, {HTMLAttributes} from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  link: string;
  text: string;
}

/*this is a special button */
export const Button = ({text, link, ...props} :Props) => {
  return (
    <button {...props} style={{backgroundColor: 'pink',
    border: 'none',
    borderRadius: 100,
    padding: 10,
    cursor: 'pointer'}}>
      {text}
    </button>
  )
}