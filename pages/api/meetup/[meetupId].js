// /api/meetups
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const meetup = await prisma.meetup.findUnique({
    where: {
      id: parseInt(req.query.meetupId),
    },
  });
  res.status(200).json(meetup);
};

export default handler;
