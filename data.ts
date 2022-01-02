interface Message {
	id: number;
	createdAt: string;
	handle: string;
	image: string;
	score: number;
	text: string;
	replyingTo?: string;
	replies?: Message[];
}

export const MessageData: Message[] = [
	{
		id: 1,
		createdAt: '1 month ago',
		handle: 'amyrobson',
		image: '/assets/avatars/image-amyrobson.webp',
		score: 12,
		text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
		replies: [],
	},
	{
		id: 2,
		createdAt: '2 weeks ago',
		handle: 'maxblagun',
		image: '/assets/avatars/image-maxblagun.webp',
		text: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
		score: 5,
		replies: [
			{
				id: 3,
				text: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
				createdAt: '1 week ago',
				score: 4,
				replyingTo: 'maxblagun',
				handle: 'ramsesmiron',
				image: '/assets/avatars/image-ramsesmiron.webp',
			},
			{
				id: 4,
				text: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
				createdAt: '2 days ago',
				score: 2,
				replyingTo: 'ramsesmiron',
				image: '/assets/avatars/image-juliusomo.webp',
				handle: 'juliusomo',
			},
		],
	},
];