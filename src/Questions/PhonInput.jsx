import { useState } from "react";

const PHONE_NUMBER_MAX_LENGTH = 14;

export default function PhonInput() {
    const [phoneNumber, setPhoneNumber] = useState();
    function handleChange({ target: { value } }) {
        if (value.length > PHONE_NUMBER_MAX_LENGTH) return;
        if (value.length === 1) {
            return setPhoneNumber("(" + value);
        }
        if (value.length == 4) {
            return setPhoneNumber(value + ") ");
        }
        if (value.length == 9) {
            return setPhoneNumber(value + "-");
        }
        setPhoneNumber(value);
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(phoneNumber);
            }}
        >
            <input
                type="tel"
                value={phoneNumber}
                onChange={handleChange}
                placeholder="(555) 555-555"
                className="text-xl p-2 bg-slate-100 rounded-md"
            />
            <button
                disabled={!(phoneNumber == PHONE_NUMBER_MAX_LENGTH)}
                type="submit"
                className=" disabled:bg-slate-400 font-medium text-lg px-4 py-1 rounded-md ml-10 bg-sky-500"
            >
                Submit
            </button>
        </form>
    );
}
