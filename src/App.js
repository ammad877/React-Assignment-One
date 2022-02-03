import "./App.css";
import All from "./component/all";

function App() {
  return (
    <>
      <h1 className="Heading one">First React App</h1>
      <hr />
      <Objective />
     
    </>
  );
}

function Objective() {
  return (
    <>
      <h1>Objective</h1>
      <p>
        "Looking for a challange role in a organisationto utilize my technical,
        development and management skills for the growth of an organization as
        well as to enhance my knowledge about new and emerging it trends im the
        IT program sector.
      </p>
      <All />
    </>
  );
}

export default App;
