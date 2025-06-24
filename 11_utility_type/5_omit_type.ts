/**
 * Omit Type
 * 
 * pick type의 반대 type
 */

interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Omit<Post, 'createdAt'>): Post {
// Omit 무시하고 싶은 property, 포함하고 싶지 않은 property
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30 넘어서도 해볼만한가요?',
});