import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    });
    const meetup = await response.json().then((res) => {
      router.push(`/${res.id}`);
    });
  };

  return (
    <div>
      <Head>
        <title>New Meetup</title>
        <meta name="description" content="Create a new meetup" />
      </Head>

      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};
export default NewMeetupPage;
