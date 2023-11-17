import { useState } from "react";

export default function TipCalculator() {
    const [tipCalculator, setTipCalculator] = useState({
        bill: 0,
        tipPercentage: 18,
        people: 1,
    });

    function handelChange(id,value) {
        setTipCalculator((prev) => {
            prev[id] = value;
            return {
                ...prev,
            };
        });
    }
    const { bill, tipPercentage, people } = tipCalculator;
    
    let totalTip = ((bill * tipPercentage) / 100).toFixed(2);
    let tiPerPerson = (totalTip / people).toFixed(2);

    return (
        <>
            <h2 className="text-4xl text-teal-500 font-semibold m-4">
                Tip Calculator
            </h2>
            <div className="flex flex-col  bg-green-900 py-12 px-5 rounded-md shadow-lg ">
                <div className="flex justify-between items-center ">
                    <label htmlFor="bill" className="text-2xl text-green-300 ">
                        Price
                    </label>
                    <input
                        id="bill"
                        className="border p-2 text-lg m-2 shadow-sm"
                        type="number"
                        min={0}
                        value={tipCalculator.bill}
                        onChange={(e) => handelChange(e.target.id, e.target.value)}
                    />
                </div>
                <div className="flex justify-between items-center ">
                    <label
                        htmlFor="tipPercentage"
                        className="text-2xl text-green-300 "
                    >
                        tip percentage
                    </label>
                    <input
                        className="border p-2 text-lg m-2 shadow-sm"
                        id="tipPercentage"
                        type="number"
                        min={0}
                        value={tipCalculator.tipPercentage}
                        onChange={(e) => handelChange(e.target.id, e.target.value)}
                    />
                </div>
                <div className="flex justify-between items-center ">
                    <label
                        htmlFor="people"
                        className="text-2xl text-green-300 "
                    >
                        people
                    </label>
                    <input
                        id="people"
                        className="border p-2 text-lg m-2 shadow-sm"
                        type="number"
                        min={1}
                        value={tipCalculator.people}
                        onChange={(e) => handelChange(e.target.id, e.target.value)}
                    />
                </div>
                <p className="flex  justify-end text-xl text-green-500 mr-2 mt-4">
                    total tip :{isNaN(totalTip) ? "-" : totalTip}
                </p>
                <p className="flex  justify-end text-xl text-green-500 mr-2 mt-4">
                    Tip per Person :{isNaN(tiPerPerson) ? "-" : tiPerPerson}
                </p>
            </div>
        </>
    );
}
