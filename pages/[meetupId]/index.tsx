import MeetupDetails, {
  meetupValidator,
  MeetupType,
  MeetupDetailPageProps,
  MeetupDetailApiSchema,
} from "@/components/meetups/MeetupDetails";
import { server } from "../../config";
import Head from "next/head";
import zod, { z } from "zod";
import { GetServerSidePropsContext } from "next";

const MeetupDetailPage = (props: MeetupDetailPageProps) => {
  return (
    <>
      <Head>
        <title>Meetup Details - ${props.meetup.title}</title>
        <meta
          name="description"
          content={`Meetup details for ${props.meetup.title}`}
        />
      </Head>
      <MeetupDetails meetup={props.meetup} />
    </>
  );
};

async function getServerSideProps(context: GetServerSidePropsContext) {
  const req = context.req;
  const res = context.res;
  const meetupId = context.params?.meetupId;

  const meetup = await fetch(`${server}/api/meetup/${meetupId}`).then((res) => {
    return res.json() as Promise<MeetupType>;
  });
  return {
    props: {
      meetup: meetup,
    },
  } as MeetupDetailApiSchema;
}

export { getServerSideProps };
export default MeetupDetailPage;
