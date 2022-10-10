export default function Course({name, description, credits}) {
  return (
    <div className="course-card" >
      <h1>Course: {name}</h1>
      <h2>Course Description: </h2>
      <p className="course-description">{description}</p>
      <p>
        CREDITS: <span className="course-credits">{credits}</span>
      </p>
      <button className="btn">Show assignments</button>
    </div>
  );
}
