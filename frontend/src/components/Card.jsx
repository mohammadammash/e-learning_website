import Button from "./Button";
import microsoftword_Icon from "../assets/microsoft-word.png";

export default function Course(props) {
  //show assignment file_url if clicked:
  const showAssignmentFile = (file_url) => {
    console.log(file_url);
  };

  //Course Card
  if (props.card_type === "course") {
    const [{ _id, name, description, credits }, showAssignment] = [props.data, props.showAssignment];
    return (
      <div className="card">
        <h1>Course: {name}</h1>
        <h2 className="course-description-title">Course Description: </h2>
        <p className="course-description">{description}</p>
        <p>
          CREDITS: <span className="course-credits">{credits}</span>
        </p>
        <Button text={"show assignments"} type="showAssignment" changeState={showAssignment} task={{ _id, name }} />
      </div>
    );

    // Assignment Card
  } else if (props.card_type === "assignment") {
    const { name, file_url } = props.data;
    return (
      <div className="card">
        <h2>{name}</h2>
        <div className="assignment-footer"> 
        <img className="show-word" src={microsoftword_Icon} alt="assignment-file" onClick={() => showAssignmentFile(file_url)}></img>
        <Button text={"Submit Assignment"} type="submitAssignment" />
        </div>
      </div>
    );
  }
}
