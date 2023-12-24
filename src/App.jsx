/* eslint-disable no-unused-vars */
import QuestionList from "./Questions/QuestionList";
import TipCalculator from "./Questions/TipCalculator";
import Quiz from "./Questions/Quiz";
import Memory from "./Questions/Memory";
import PhonInput from "./Questions/PhonInput";

function App() {
    return (
        <div className="max-w-[1440px] w-[80vw] items-center flex pt-14 h-[90vh]  flex-col mx-auto">
          {/* challenging Projects from algo expert */}
          {/* <TipCalculator/> */}
          {/* <QuestionList/> */}
          {/* <Quiz/> */}
          {/* <Memory/> */}
          <PhonInput/>
        </div>
    );
}

export default App;
