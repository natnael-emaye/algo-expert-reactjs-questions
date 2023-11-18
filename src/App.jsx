/* eslint-disable no-unused-vars */
import QuestionList from "./Questions/QuestionList";
import TipCalculator from "./Questions/TipCalculator";

function App() {
    return (
        <div className="max-w-[1440px] w-[80vw] items-center flex pt-14 h-[90vh]  flex-col mx-auto">
          {/* <TipCalculator/> */}
          <QuestionList/>
        </div>
    );
}

export default App;
