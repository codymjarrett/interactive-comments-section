import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

interface User {
	username: string;
	image: string;
}
const seedUsers: User[] = [
	{username: 'amyrobson', image: './images/avatars/image-amyrobson.webp'},
	{username: 'maxblagun', image: './images/avatars/image-maxblagun.webp'},
	{username: 'ramsesmiron', image: './images/avatars/image-ramsesmiron.webp'},
	{username: 'juliusomo', image: './images/avatars/image-juliusomo.webp'},
];

async function createUsers() {
	for (const user of seedUsers) {
		await prisma.user.create({data: user});
	}

	const allUsers = await prisma.user.findMany();
	console.dir(allUsers, {depth: null});
}

// createUsers()
// 	.catch((e) => {
// 		throw e;
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect();
// 	});

const messages = [
	{
		content:
			"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
		score: 4,
		userId: '1620ca68-7cbe-4010-9d1a-6a2722179468',
		replyId: 'some id',
	},
];

async function createMessages() {
	await prisma.message.create({
		data: {
			content:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
			score: 4,
			userId: '1620ca68-7cbe-4010-9d1a-6a2722179468',
			replyId: 'some id',
		},
	});

	const allMessages = await prisma.message.findMany();
	console.dir(allMessages, {depth: null});
}

createMessages()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
