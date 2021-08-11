import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Post } from '../../types/postsType';
import MainLayout from '../../layouts/MainLayout';
import { Section } from '../../components/Section/Section';
import { actionsPost, requestPost } from '../../redux/reducers/postReducer';
import Head from 'next/head';
import { RootState } from '../../redux/reducers';
import { getPost } from '../../redux/selectors/postSelector';
import { NextThunkDispatch, wrapper } from "../../redux/store";
import { WrapperSinglePost } from '../../components/WrapperSinglePost/WrapperSinglePost';
import { Form } from '../../components/Form/Form';
import { TextArea } from '../../components/TextArea/TextArea';
import { Button } from "../../components/Button/Button";
import { useInput } from '../../hooks/useInput';
import { postsAPI } from '../../api/api-posts';
import { Comment } from '../../types/postsType';
import { Container } from '../../components/Container/Container';
import { Comments } from '../../components/Comments/Comments';
import { CommentItem } from '../../components/Comments/Comment/CommentItem';

type MapStatePropsType = {
    post: Post
};

type MapDispatchToProps = {
    setAddCommentOfPost: (comment: Comment) => void
};

type NextPropsType = {
    currentPostId: string
};

type Props = MapStatePropsType & MapDispatchToProps & NextPropsType;

const SinglePostPage: FC<Props> = ({ post, currentPostId, setAddCommentOfPost }) => {
    const commentOfPost = useInput('', {
        isEmpty: true,
        minLength: 5,
        maxLength: 100
    });

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let comment = {
            postId: Number(currentPostId),
            body: commentOfPost.value,
            id: Math.round(Math.random() * 10000)
        } as Comment;

        postsAPI.addComment(comment);

        setAddCommentOfPost(comment);

        commentOfPost.onClearValue();
        commentOfPost.onClearValue();
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <Section>
                    <Container>
                        <WrapperSinglePost
                            post={post}
                        />
                        <Comments>
                            {post.comments.map((comment: Comment) => {
                                return (
                                    <CommentItem
                                        key={comment.id}
                                        body={comment.body}
                                    />
                                )
                            })}
                        </Comments>
                        <Form
                            name='formAddComment'
                            onSubmit={(e: React.FormEvent<HTMLFormElement>) => onHandleSubmit(e)}
                        >
                            <TextArea
                                name='coomentOfPost'
                                placeholder='Enter comment'
                                value={commentOfPost.value}
                                error={!commentOfPost.inputValid}
                                isDirty={commentOfPost.isDirty}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => commentOfPost.onChange(e)}
                                onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => commentOfPost.onBlur(e)}
                                heightField={'100px'}

                            />
                            <Button
                                type='submit'
                                disabled={!commentOfPost.inputValid}
                                maxWidth={'max-content'}
                            >
                                Add Comment
                            </Button>
                        </Form>
                    </Container>
                </Section>
            </MainLayout>
        </>
    )
};

const mapStateToProps = (state: RootState): MapStatePropsType => ({
    post: getPost(state),
});

const mapDispatchToProps = {
    setAddCommentOfPost: actionsPost.setAddCommentOfPost
}

export default connect<MapStatePropsType, MapDispatchToProps>(mapStateToProps, mapDispatchToProps)(SinglePostPage);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(requestPost(params.id));

    return {
        props: {
            currentPostId: params.id
        }
    };
});