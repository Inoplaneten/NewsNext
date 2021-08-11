import styled, { css } from 'styled-components';
import { PropsStatusMenu } from './Header';

const StyledMenuList = styled.ul<PropsStatusMenu>`
    max-width: 200px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px 0 0 5px;
    overflow-y: auto;
    position: absolute;
    bottom: 0;
    right: ${props => props.isActiveMenu ? '0' : '-100%'};
    z-index: 100;
    transform: translateY(calc(100% - 30px));
    transition-duration: .7s;
    display: flex;
    flex-direction: column;

    li {
		display: block;
		padding: 15px 30px;
		color: #fff;
		font-weight: 700;
		text-transform: uppercase;
        cursor: pointer;
        transition-duration: .7s;
		&:hover {
			background-color: rgba(255, 255, 255, .2);
		}
	}
`
export default StyledMenuList;