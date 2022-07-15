import classes from "./MeetupDetails.module.css";
import zod, { z } from "zod";

export const meetupValidator = zod.object({
  id: zod.string(),
  title: zod.string(),
  description: zod.string(),
  image: zod.string(),
  address: zod.string(),
  date: zod.string(),
});
export type MeetupType = z.infer<typeof meetupValidator>;
export const MeetupApiResponse = zod.object({
  meetup: meetupValidator,
});
export type MeetupDetailPageProps = z.infer<typeof MeetupApiResponse>;

export const MeetupDetailPageSchema = zod.object({
  props: MeetupApiResponse,
});
export type MeetupDetailApiSchema = z.infer<typeof MeetupDetailPageSchema>;

const MeetupDetails: React.FC<MeetupDetailPageProps> = (props) => {
  return (
    <div className={classes.container}>
      <h1>Meetup Details - {props.meetup.id}</h1>
      <img src={props.meetup.image} alt={props.meetup.title} />
      <h3>{props.meetup.title}</h3>
      <address>{props.meetup.address}</address>
      <p>{props.meetup.description}</p>
    </div>
  );
};
export default MeetupDetails;
