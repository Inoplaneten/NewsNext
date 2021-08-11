import React, { FC } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers';
import { getInitializedApp } from '../redux/selectors/appInitializedSelector';
import { initializeApp } from '../redux/reducers/appInitializedReducer';
import { NextThunkDispatch, wrapper } from '../redux/store';
import { getPosts } from '../redux/selectors/postsSelector';
import MainLayout from '../layouts/MainLayout';
import { Section } from '../components/Section/Section';
import { Container } from '../components/Container/Container';
import { Post } from '../types/postsType';
import { CardsPosts } from '../components/CardsPosts/CardsPosts';
import { CardPost } from '../components/CardsPosts/CardPost/CardPost';

type MapStatePropsType = {
  initialized: boolean,
  posts: Post[]
};

type Props = MapStatePropsType;

const Home: FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Section>
          <Container>
            <CardsPosts>
              {posts.map((post: Post, index: number) => {
                return (
                  <CardPost
                    key={post.id}
                    post={posts[index]}
                  >
                  </CardPost>
                )
              })}
            </CardsPosts>
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  initialized: getInitializedApp(state),
  posts: getPosts(state),
});

export default connect<MapStatePropsType, RootState>(mapStateToProps)(Home);

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;

  return await dispatch(initializeApp());
});