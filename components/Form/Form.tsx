import React, { FC } from 'react';
import StyledForm from './StyledForm';

export type Props = {
    name: string,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    align?: string
};

const Form: FC<Props> = props => {
    return (
        <StyledForm {...props} />
    )
};

export { Form };