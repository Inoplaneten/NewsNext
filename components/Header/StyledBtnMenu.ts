import styled, { css } from 'styled-components';
import { Props } from './Header';

const StyledBtnMenu = styled.button<Props>`
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    line-height: 1.1;
    position: relative;
    z-index: 100;

    span {
        width: 100%;
        height: 4px;
        background-color: ${props => props.isActiveMenu ? 'transparent' : props.theme.colors.primary};
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        &::before,
        ::after {
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            background-color: ${props => props.theme.colors.primary};
            position: absolute;
        }

        &::before {
            top: ${props => props.isActiveMenu ? '0' : '-6px'};
            ${props => props.isActiveMenu && css`
                transform: rotate(45deg);
            `}
            transition: top ${props => props.isActiveMenu ? '.3s' : '.3s .3s'}, 
            transform ${props => props.isActiveMenu ? '.3s .3s' : '.3s'} cubic-bezier(${props => props.isActiveMenu ? '0.68, -0.55, 0.265, 1.55' : '0.23, 1, 0.32, 1'});
        }

        &::after {
            ${props => props.isActiveMenu && css`
                transform: rotate(-45deg);
            `}
            bottom: ${props => props.isActiveMenu ? '0' : '-6px'};
            transition: bottom ${props => props.isActiveMenu ? '.3s' : '.3s .3s'}, 
            transform ${props => props.isActiveMenu ? '.3s .3s' : '.3s'} cubic-bezier(${props => props.isActiveMenu ? '0.68, -0.55, 0.265, 1.55' : '0.23, 1, 0.32, 1'});
        }
    }
`
export default StyledBtnMenu;