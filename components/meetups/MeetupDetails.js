import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <div className={classes.container}>
      <h1>Meetup Details - {props.id}</h1>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
  );
};
export default MeetupDetails;
