// /api/new-meetup
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    const meetup = await prisma.meetup.create({
      data: {
        title: body.title,
        description: body.description,
        address: body.address,
        image: body.image,
      },
    });

    res.status(201).json(meetup);
  }
};

export default handler;
