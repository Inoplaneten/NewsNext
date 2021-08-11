import React, { FC } from 'react';
import { Comment } from '../../../types/postsType';
import StyledComment from './StyledComment';

type Props = {
    body: string
};

const CommentItem: FC<Props> = ({ body }) => {
    return (
        <StyledComment>
            <p>
                {body}
            </p>
        </StyledComment>
    )
};

export { CommentItem };