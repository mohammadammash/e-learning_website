export default function Course(data) {
    const {name, description, credits} = data.data;
  return (
    <div className="course-card" >
      <h1>Course: {name}</h1>
      <h2 className="course-description-title">Course Description: </h2>
      <p className="course-description">{description}</p>
      <p>
        CREDITS: <span className="course-credits">{credits}</span>
      </p>
      <button className="btn">Show assignments</button>
    </div>
  );
}
