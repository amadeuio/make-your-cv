function HeaderForm() {
  return (
    <form className="header-form">
      <fieldset>
        <legend>Header</legend>
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
      </fieldset>
    </form>
  );
}

function EducationForm() {
  return (
    <form className="education-form">
      <fieldset>
        <legend>Education</legend>
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
      </fieldset>
    </form>
  );
}

function ExperienceForm() {
  return (
    <form className="experience-form">
      <fieldset>
        <legend>Experience</legend>
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

function App() {
  return (
    <>
      <FormSection />
      <CvSection />
    </>
  );
}

export default App;
