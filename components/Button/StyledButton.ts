import styled, { css } from "styled-components";
import { Props } from "./Button";

const StyledButton = styled.button<Props>`
    display: block;
    max-width: ${props => props.maxWidth || props.theme.btn.maxWidth};
    width: 100%;
    background-color: ${props => props.disabled ? '#4bcfa059' : props.backgroundColor || props.theme.colors.primary};
    margin: ${props => props.margin || props.theme.btn.margin};
    border-radius: 16px;
	padding: ${props => props.padding || props.theme.btn.padding};
	text-transform: uppercase;
	font-size: inherit;
	font-weight: 500;
    color: ${props => props.colorBtn || props.theme.btn.colors.white};
    ${props => props.disabled && css`
        cursor: not-allowed;
    `}
    &:hover {
        background-color: ${props => props.disabled ? '#4bcfa059' : props.backgroundColorHover || props.theme.colors.secondary}
    }
`
export default StyledButton;