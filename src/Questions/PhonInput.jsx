export default function PhonInput() {
    return (
        <>
            <input
                type="tel"
                placeholder="(555) 555-555"
                className="text-xl p-2 bg-slate-100 rounded-md"
            />
            <button
                type="submit"
                className=" disabled:bg-slate-400 font-medium text-lg px-4 py-1 rounded-md ml-10 bg-sky-500"
            >
                Submit
            </button>
        </>
    );
}
