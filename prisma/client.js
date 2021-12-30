import {PrismaClient} from '@prisma/client';

const {user, message} = new PrismaClient();

export {user, message};
