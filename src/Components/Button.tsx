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
    cursor: 'pointer',
    color: 'white',
    fontSize: 'larger',
    fontWeight: 'bolder',
    width:'75%',
    boxShadow: '2px 2px'
    }}>
      {text}
    </button>
  )
}
export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
);
