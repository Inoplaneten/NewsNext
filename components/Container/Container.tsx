import React, { FC } from 'react';
import StyledContainer from './StyledContainer';

const Container: FC = props => {
    return (
        <StyledContainer {...props} />
    )
};

export { Container };
