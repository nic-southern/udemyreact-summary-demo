// /api/meetups
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const allMeetups = await prisma.meetup.findMany();
  res.status(200).json(allMeetups);
};

export default handler;
