import router from 'next/dist/client/router';
import React, { FC } from 'react';
import StyledCardPost from './StyledCardProduct';
import { Post } from '../../../types/postsType';

type Props = {
    post: Post
};

const CardPost: FC<Props> = ({ post }) => {
    return (
        <StyledCardPost onClick={() => router.push(`/posts/${post.id}`)}>
            <div>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
        </StyledCardPost>
    )
};

export { CardPost };