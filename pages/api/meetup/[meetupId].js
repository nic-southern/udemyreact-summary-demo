// /api/meetups
import { db as prisma } from "../../../utils/db.server";

const handler = async (req, res) => {
  const meetup = await prisma.meetup.findUnique({
    where: {
      id: parseInt(req.query.meetupId),
    },
  });
  res.status(200).json(meetup);
};

export default handler;
