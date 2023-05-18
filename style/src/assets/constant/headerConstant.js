import styled from 'styled-components';
import { border, borderStyle, darken, position,size } from 'polished'

export const Title = styled.h2`
font-size: 1.5em;
text-align: center;
color: palevioletred;
${border('4px', 'dotted', 'gray')}
${borderStyle('solid', 'dashed', 'dotted', 'double')}
`;

export const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

export const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.$primary ? "palevioletred" : "white"};
color: ${props => props.$primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;

text-decoration: ${props => props.as ? 'none' : 'none'};
`;

export const OverideButton = styled(Button)`
  color: lightblue;
  border-color: lightblue;
  &:hover {
    color: red; // <Thing> when hovered
  }
`;

export const Link = ({ className, linkText, href }) => (
    <a className={className} href={href}>{linkText}</a>
);

export const Div = styled.div`
background-color: ${props => props.theme.background};
color: ${props => props.theme.color};
&:hover {
    background-color: ${darken(0.1, '#4CAF50')};
    ${position('absolute', '120px', '0px', '0px', '480px')}
    ${size('300px', '250px')}
  }
`;

Div.defaultProps= {
    theme: {
        background: 'skyblue',
        color: 'blue'
    }
}

export const newTheme = {
    background: 'white',
    color: 'red'
}

export const Center = styled.section`
text-align: center;
justify-content: center;
background-color: lightyellow;
`