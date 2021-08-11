import React, { FC } from 'react';
import StyledCardsPosts from './StyledCardsProducts';

const CardsPosts: FC = props => {
    return (
        <StyledCardsPosts>
            {props.children}
        </StyledCardsPosts>
    )
};

export { CardsPosts };