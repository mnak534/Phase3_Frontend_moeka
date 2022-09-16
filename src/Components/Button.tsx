import {HTMLAttributes, useState} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  link: string;
  text: string;
}

export const Button = ({text, link, ...props} :Props) => {

  const [isHover, setIsHover] = useState(false);
  const [isVisited, setIsVisited] = useState(false);

  const clicked = () => {
    setIsVisited(true);
  };

  const hovered = () => {
    setIsHover(true);
  };

  const unhovered = () => {
    setIsHover(false);
  };

  const buttonStyle = {
    backgroundColor: isHover? 'rgba(255, 0, 0, 0.288)': 'rgb(235, 216, 108)',
    border: 'none',
    borderRadius: 100,
    padding: 10,
    cursor: 'pointer',
    color: 'white',
    fontSize: 'larger',
    fontWeight: 'bolder',
    width:'70%',
    boxShadow: '2px 2px'
  }
  
  return (
    <button {...props} style={buttonStyle}
    onMouseDown={clicked}
    onMouseEnter={hovered}
    onMouseLeave={unhovered}
    data-testid='button-test'
    >
      <a 
      href = {link} 
      target = "_blank" 
      style={{textDecoration: 'none', color: 'white'}}
      data-testid='button-test2'
      >{text}{isVisited? '(visited)': ''}</a>
    </button>
  )
}
