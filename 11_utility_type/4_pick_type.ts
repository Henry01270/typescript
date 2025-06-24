/**
 * Pick Type
 * 
 * 포함할 프로퍼티를 입력
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>): Post {
// Pick(포함하고 싶은 property만 고름)
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30 넘어서도 해볼만한가요?',
});
