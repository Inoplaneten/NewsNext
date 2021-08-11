import React, { FC } from 'react';
import Head from 'next/head';
import MainLayout from '../../layouts/MainLayout';
import { Section } from '../../components/Section/Section';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { TextArea } from '../../components/TextArea/TextArea';
import { Button } from '../../components/Button/Button';
import { useInput } from '../../hooks/useInput';
import { postsAPI } from '../../api/api-posts';
import { Post } from '../../types/postsType';
import { Container } from '../../components/Container/Container';

const NewPostPage: FC = () => {
    const postTitle = useInput('', {
        isEmpty: true,
        minLength: 10,
        maxLength: 80,
    });

    const postDesc = useInput('', {
        isEmpty: true,
        minLength: 10,
        maxLength: 700,
    });

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        postsAPI.addPost({
            id: Math.round(Math.random() * 10000),
            title: postTitle.value,
            body: postDesc.value
        } as Post);

        postTitle.onClearValue();
        postDesc.onClearValue();
    };

    return (
        <>
            <Head>
                <title>New Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <Section>
                    <Container>
                        <Form
                            name='formAddPost'
                            onSubmit={(e: React.FormEvent<HTMLFormElement>) => onHandleSubmit(e)}
                            align={'center'}
                        >
                            <Input
                                type='text'
                                name='postTitle'
                                placeholder='Enter post title'
                                value={postTitle.value}
                                error={!postTitle.inputValid}
                                isDirty={postTitle.isDirty}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => postTitle.onChange(e)}
                                onBlur={(e: React.FocusEvent<HTMLInputElement>) => postTitle.onBlur(e)}
                            />
                            <TextArea
                                name='postDesc'
                                placeholder='Enter post description'
                                value={postDesc.value}
                                error={!postDesc.inputValid}
                                isDirty={postDesc.isDirty}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => postDesc.onChange(e)}
                                onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => postDesc.onBlur(e)}

                            />
                            <Button
                                type='submit'
                                disabled={!postTitle.inputValid || !postDesc.inputValid}
                            >
                                Add Post
                            </Button>
                        </Form>
                    </Container>
                </Section>
            </MainLayout>
        </>
    )
};

export default NewPostPage;