function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

const ExpandMoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill="var(--slate-800)">
    <path
      d="M479.889 713q-8.889 0-17.339-3.545Q454.1 705.909 449 699L250 502q-12-13.25-11.5-32.125T251 437.5q15-14.5 
    33-13t31 13.5l165 165 166-165q12.5-13 31.75-13.5T710 438.429q14 13.428 13 32.5Q722 490 709 502L512 699q-6.167 
    6.909-14.694 10.455Q488.778 713 479.889 713Z"
    />
  </svg>
);

const ExpandLessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill="var(--slate-800)">
    <path
      d="M251 699q-13-13-13.5-32t13.5-32l198-198q5-5 13.5-9t17.5-4q9 0 17.5 4t14.5 9l198 197q13 14 13 32.5T710 
    698q-14 13-33 13t-32-13L480 533 315 700q-13 13-31.5 12.5T251 699Z"
    />
  </svg>
);

function HeaderForm() {
  return (
    <form className="header-form">
      <fieldset>
        <div className="legend-container">
          <legend>Header</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
        </div>
        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" />
        </div>
        <div className="button-container">
          <Button className="clear-button" label="Clear" />
          <Button className="save-button" label="Save" />
        </div>
      </fieldset>
    </form>
  );
}

function EducationForm() {
  return (
    <form className="education-form">
      <fieldset>
        <div className="legend-container">
          <legend>Education</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="school">School</label>
          <input type="text" id="school" name="school" />
        </div>
        <div className="input-container">
          <label htmlFor="qualification">Qualification</label>
          <input type="text" id="qualification" name="qualification" />
        </div>
        <div className="input-container">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
        </div>
        <div className="button-container">
          <Button className="clear-button" label="Clear" />
          <Button className="save-button" label="Save" />
        </div>
      </fieldset>
    </form>
  );
}

function ExperienceForm() {
  return (
    <form className="experience-form">
      <fieldset>
        <div className="legend-container">
          <legend>Experience</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="input-container">
          <label htmlFor="position">Position</label>
          <input type="text" id="position" name="position" />
        </div>
        <div className="input-container">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>
        </div>
        <div className="button-container">
          <Button className="clear-button" label="Clear" />
          <Button className="save-button" label="Save" />
        </div>
      </fieldset>
    </form>
  );
}

function Cv() {
  return <div className="cv"></div>;
}

function CvSection() {
  return (
    <main className="cv-section">
      <Cv />
    </main>
  );
}

function FormSection() {
  return (
    <aside className="form-section">
      <HeaderForm />
      <EducationForm />
      <ExperienceForm />
    </aside>
  );
}

function VerticalLine() {
  return <div className="vertical-line"></div>;
}

function App() {
  return (
    <>
      <FormSection />
      <VerticalLine />
      <CvSection />
    </>
  );
}

export default App;
