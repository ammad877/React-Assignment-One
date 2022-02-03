import { Skillslist, Edulist, Hobbylist, Infolist } from "./list";

function All() {
  return (
    <>
      <h1>Skills And Ability</h1>
      <Skillslist />
      <h1>Education</h1>
      <Edulist />
      <h1>Interest And Hobbies</h1>
      <Hobbylist />
      <h1>Persional Information</h1>
      <Infolist />
    </>
  );
}

export default All;
