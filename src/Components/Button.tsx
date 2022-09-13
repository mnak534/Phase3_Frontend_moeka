import {HTMLAttributes} from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  link: string;
  text: string;
}

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
    width:'70%',
    boxShadow: '2px 2px'
    }}
    >
      <a href = {link}>{text}</a>
    </button>
  )
}

//Accessibilities
export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
);
