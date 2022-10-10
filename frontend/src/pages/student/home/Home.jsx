export default function Home() {
  return (
    <>
      <nav className="nav">
        <h1 className="nav-logo">EDULAB</h1>
        <a className="nav-link" href="#ds">
          HOME/COURSES
        </a>
        <button className="btn">Logout</button>
      </nav>

      <section className="courses-container">
        <div className="course-card">
          <h1>Course Title</h1>
          <h3>Instructor Name</h3>
          <p className="course-name">
            <span>COURSE NAME: </span>Describe yourself in one sentence” is the other way to ask the short answer question. Take note of the summary above and use the three-word description as part of a summary sentence. This way you’ll have an answer to both questions with the same words.
          </p>
          <p>
            CREDITS: <span className="course-credits">5</span>
          </p>
        </div>
        <div className="course-card">
          <h1>Course Title</h1>
          <h3>Instructor Name</h3>
          <p className="course-name">
            <span>COURSE NAME: </span>Describe yourself in one sentence” is the other way to ask the short answer question. Take note of the summary above and use the three-word description as part of a summary sentence. This way you’ll have an answer to both questions with the same words.
          </p>
          <p>
            CREDITS: <span className="course-credits">5</span>
          </p>
        </div>
      </section>
    </>
  );
}
