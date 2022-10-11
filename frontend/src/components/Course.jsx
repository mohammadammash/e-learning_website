import Button from "./Button";

export default function Course(props) {
  const [{ _id, name, description, credits },showAssignment] = [props.data,props.showAssignment];

  return (
    <div className="course-card">
      <h1>Course: {name}</h1>
      <h2 className="course-description-title">Course Description: </h2>
      <p className="course-description">{description}</p>
      <p>
        CREDITS: <span className="course-credits">{credits}</span>
      </p>
      <Button text={'show assignments'} type='showAssignment' changeState={showAssignment} task={{_id,name}}/>
    </div>
  );
}
