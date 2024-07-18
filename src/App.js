import logo from './logo.svg';
import './App.css';
import Marksheet from './coponents/Marksheet';

function App() {
  return (
    <div className="App">
     <Marksheet
     studentname="MadhuNaidu"
     sanskritmarks="94"
     englishmarks="81"
     maths1Amarks="75"
     maths1Bmarks="75"
     physicsmarks="60"
     chemistrymarks="58"
     />
     <Marksheet
     studentname="venkey"
     sanskritmarks="90"
     englishmarks="75"
     maths1Amarks="61"
     maths1Bmarks="70"
     physicsmarks="52"
     chemistrymarks="50"
     />
     <Marksheet
     studentname="nagendra"
     sanskritmarks="96"
     englishmarks="92"
     maths1Amarks="75"
     maths1Bmarks="75"
     physicsmarks="60"
     chemistrymarks="60"
     />
     <Marksheet
     studentname="laxman"
     sanskritmarks="65"
     englishmarks="55"
     maths1Amarks="35"
     maths1Bmarks="20"
     physicsmarks="40"
     chemistrymarks="32"
     />
     <Marksheet
     studentname="ramu"
     sanskritmarks="54"
     englishmarks="46"
     maths1Amarks="13"
     maths1Bmarks="15"
     physicsmarks="40"
     chemistrymarks="23"
     />
     <Marksheet
     studentname="sindhu"
     sanskritmarks="94"
     englishmarks="81"
     maths1Amarks="69"
     maths1Bmarks="68"
     physicsmarks="57"
     chemistrymarks="52"
     />
    </div>
  );
}

export default App;
