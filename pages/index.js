import MeetupList from "../components/meetups/MeetupList";
import { server } from "../config";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Home page for a simple meetup website"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  const allMeetups = await fetch(`${server}/api/meetups`).then((res) => {
    return res.json();
  });

  return {
    props: {
      meetups: allMeetups,
    },
  };
}

export { getServerSideProps };
export default HomePage;
