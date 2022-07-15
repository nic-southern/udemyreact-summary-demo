// /api/meetups
import { db as prisma } from "../../utils/db.server";

const handler = async (req, res) => {
  const allMeetups = await prisma.meetup.findMany();
  res.status(200).json(allMeetups);
};

export default handler;
