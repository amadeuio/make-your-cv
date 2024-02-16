```js
educationArray = [
  {
    school: "Cambridge",
    qualification: "Bachelor of Arts",
    startDate: "Jan 2013",
    endDate: "Jan 2017",
    location: "England",
  },
  {
    school: "Cambridge",
    qualification: "Bachelor of Arts",
    startDate: "Jan 2013",
    endDate: "Jan 2017",
    location: "England",
  },
];

function FormSection() {
  const [educationArray, setEducationArray] = useState(initialEducationArray);

  const addEducationForm = () => {
    const newEducationObject = {...};
    setEducationArray({...educationArray, newEducationObject})
  };

  return (
    <aside className="form-section">
      <HeaderForm />

      <div className="form-title">Education</div>

      {map.educationArray((educationObject, index) => (
        <EducationForm educationObject={educationObject} />
      ))}

      <Button className="add-new-button" label={"+ Add new"} onClick={addEducationForm} />

      <div className="form-title">Experiece</div>
      <ExperienceForm />
      <Button className="add-new-button" label={"+ Add new"} onClick={() => {}} />
    </aside>
  );
}

function EducationForm({ educationObject }) {

  // Option 0. Random brainstorming

  // ?
  const [educationObject, setEducationObject] = useState({});
  // or
  const [educationState, setEducationState] = useState(educationObject);
  // ?

  // Option 1. Not using state, just rendering the object

  const { school, qualification, startDate, endDate, location } = educationObject;

  // This will correctly render the forms and the data in the form fields, but it won't
  // have the ability to edit the data from the forms, because it is not controlling the state
  // This is a good option to render the data on the CV, where it is only unidirectional

  // Option 2.

  // Accessing education array

  function EducationForm({ index }) {

    const { educationArray, setEducationArray } = useContext(FormDataContext)!;

  // The index (or id) passed as prop helps know which object in the array
  // should be modified using setEducationArray

  // Option 3.

  // Make the component render the whole list

  // This has the advantadge that acessing the list context, we have all the data we need

  // No need to pass index prop

  // Could potentially be the best method

  // Es cert que les callbacks del form necessiten saber l index per saber quin objecte s ha d editat, els index s han de passar te pinta





  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationData({ ...educationData, [name]: value });
  };

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEducationData({
      school: "",
      qualification: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

  const { school, qualification, startDate, endDate, location } = educationData;

  return (
    <form className="education-form">
    </form>
  )
}
```
