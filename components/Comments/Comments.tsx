import React, { FC } from 'react';
import StyledComments from './StyledComments';

const Comments: FC = props => {
    return (
        <StyledComments>
            <h3>
                Comments
            </h3>
            {props.children}
        </StyledComments>
    )
};

export { Comments };