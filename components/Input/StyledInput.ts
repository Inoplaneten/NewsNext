import styled, { css } from 'styled-components';
import { Props } from './Input';

const StyledInput = styled.input<Props>`
    ${props => props.backgroundColor && css`
    background-color: ${props.backgroundColor}
    `}
    width: 100%;
	padding: 16px;
	border-radius: 16px;
	border: 1px solid ${props => (props.error && props.isDirty) ? props.theme.colors.red : 'rgba(0,0,0,.1)'};
	font-size: inherit;
	color: inherit;
    &:focus {
        border-color: ${props => (props.error && props.isDirty) ? props.theme.colors.red : props.borderColor || props.theme.colors.primary}
    }
`
export default StyledInput;