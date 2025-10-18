import { useState } from "react";
import User from "./components/User"


function App() {
  const [state, setState] = useState<string>("tara");
  return (
    <div className="App">
      <User value={state} onChange={setState} />
     
    </div>
  );
}

export default App;



// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);

//   return (
//     <div>
//       {alertVisible && <Alert onClose={() => setAlertVisible(false)}>I am Tara</Alert>}
//       <Button onClick={() => setAlertVisible(true)}>
//       my Button is
//     </Button>
//     </div>
//   );
// }

// export default App;

