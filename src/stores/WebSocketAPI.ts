import Pusher from 'pusher-js';
import { useForumStore, Comment } from 'stores/ForumStore';

const forumStore = useForumStore();

const pusher = new Pusher(import.meta.env.VITE_APP_PUSHER_KEY, {
	cluster: import.meta.env.VITE_APP_PUSHER_CLUSTER,
});

export const addNewCommentSocket = (postId: number) => {
	const channel = pusher.subscribe(`post-comments-${postId}`);
	console.log(postId);

	channel.bind('new-comment', (data: any) => {
		// Handle the received data
		console.log('Received data:', data);
		const newComment: Comment = {
			...data.commentData,
			username: data.user.name,
		};
		forumStore.postComments.unshift(newComment);
	});
};
