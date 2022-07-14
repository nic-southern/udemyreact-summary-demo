import MeetupDetails from "../../components/meetups/MeetupDetails";
import { server } from "../../config";
import Head from "next/head";

const MeetupDetailPage = (props) => {
  const { id, image, title, description, address } = props.meetup;
  return (
    <>
      <Head>
        <title>Meetup Details - {title}</title>
        <meta name="description" content={`Meetup details for ${title}`} />
      </Head>
      <MeetupDetails
        id={id}
        image={image}
        title={title}
        description={description}
        address={address}
      />
    </>
  );
};

async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  const meetupId = context.params.meetupId;

  const meetup = await fetch(`${server}/api/meetup/${meetupId}`).then((res) => {
    return res.json();
  });
  return {
    props: {
      meetup: meetup,
    },
  };
}

export { getServerSideProps };
export default MeetupDetailPage;
