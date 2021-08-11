import React, { FC } from "react";
import { Post } from "../../types/postsType";
import StyledWrapperSinglePost from "./StyledWrapperSinglePost";

type Props = {
    post: Post
};

const WrapperSinglePost: FC<Props> = ({ post }) => {
    return (
        <StyledWrapperSinglePost>
            <h2>
                {post.title}
            </h2>
            <p>
                {post.body}
            </p>
        </StyledWrapperSinglePost>
    )
};

export { WrapperSinglePost };