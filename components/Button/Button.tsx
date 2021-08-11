import React, { FC } from 'react';
import StyledButton from './StyledButton';

export type Props = {
    type: 'button' | 'submit' | 'reset',
    disabled: boolean,
    colorBtn?: string,
    backgroundColorHover?: string,
    backgroundColor?: string,
    maxWidth?: string,
    margin?: string,
    padding?: string
}

const Button: FC<Props> = (props) => {
    return (
        <StyledButton {...props} />
    )
};

export { Button };