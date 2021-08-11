import React, { FC } from 'react';
import StyledFieldBox from '../../styles/StyledFieldBox';
import StyledTextArea from './StyledTextArea';

type PropsTypeDefault = {
    name: string,
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void,
    error: boolean,
    isDirty: boolean
};

export type PropsTypeStyled = {
    heightField?: string,
    color?: string,
    backgroundColor?: string,
    borderColor?: string,
    maxWidth?: string,
    margin?: string,
    padding?: string
};

export type Props = PropsTypeDefault & PropsTypeStyled;

const TextArea: FC<Props> = props => {
    return (
        <StyledFieldBox>
            <StyledTextArea {...props} />
        </StyledFieldBox>
    )
};

export { TextArea };