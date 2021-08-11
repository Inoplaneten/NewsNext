import React, { FC } from 'react';
import StyledFieldBox from '../../styles/StyledFieldBox';
import StyledInput from './StyledInput';

type PropsTypeDefault = {
    type: 'text' | 'email' | 'password',
    name: string,
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
    error: boolean,
    isDirty: boolean,
}

type PropsTypeStyled = {
    color?: string,
    backgroundColor?: string,
    borderColor?: string,
    maxWidth?: string,
    margin?: string,
    padding?: string
}

export type Props = PropsTypeDefault & PropsTypeStyled;

const Input: FC<Props> = props => {
    return (
        <StyledFieldBox>
            <StyledInput {...props} />
        </StyledFieldBox>
    )
};

export { Input };