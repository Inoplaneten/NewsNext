import { Post, Comment } from "../types/postsType";
import { instance } from "./api-root";

export const postsAPI = {
    async getPosts() {
        const response = await instance.get<Post[]>('/posts');

        return response;
    },
    async getPost(id: string | string[]) {
        const response = await instance.get<Post>(`/posts/${id}?_embed=comments`);

        return response;
    },
    async addPost(post: Post) {
        const response = await instance.post<Post>('/posts', post);

        return response;
    },
    async addComment(comment: Comment) {
        const response = await instance.post<Comment>('/comments', comment);

        return response;
    }
};