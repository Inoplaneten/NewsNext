import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Container } from '../Container/Container';
import StyledNavigation from './StyledNavigation';
import StyledHeader from './StyledHeader';
import StyledMenuList from './StyledMenuList';
import StyledBtnMenu from './StyledBtnMenu';
import router from 'next/dist/client/router';

export type PropsLogoStyle = {
    maxWidth: string
}

export type PropsStatusMenu = {
    isActiveMenu: boolean
};

export type PropsSetActiveMenu = {
    onClick: () => void
};

export type PropsBtnType = {
    type: 'button'
};

export type Props = PropsStatusMenu & PropsSetActiveMenu & PropsBtnType;

const menuItem = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Add post',
        href: '/posts/new'
    }
]

const Header: FC = () => {
    const [isActiveMenu, setActiveMenu] = useState(false);

    return (
        <StyledHeader>
            <Container>
                <StyledNavigation>
                    <Link
                        href='/'
                    >
                        <a className='logo-header'>
                            <img src="/vercel.svg" alt="Vercel Logo" />
                        </a>
                    </Link>
                    <StyledMenuList
                        isActiveMenu={isActiveMenu}
                    >
                        {menuItem.map(({ text, href }, index: number) => {
                            return (
                                <li
                                    onClick={() => { setActiveMenu(false); router.push(href); }}
                                    key={index}
                                >
                                    {text}
                                </li>
                            )
                        })}

                    </StyledMenuList>
                    <StyledBtnMenu
                        type={'button'}
                        onClick={() => setActiveMenu(!isActiveMenu)}
                        isActiveMenu={isActiveMenu}
                    >
                        <span></span>
                    </StyledBtnMenu>
                </StyledNavigation>
            </Container>
        </StyledHeader>
    )
};

export { Header };