import MeetupList from "@/components/meetups/MeetupList";
import { server } from "@/config";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface Meetup {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

interface PageProps {
  meetups: Meetup;
}

const HomePage = (props: PageProps) => {
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

async function getServerSideProps(context: GetServerSidePropsContext) {
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
