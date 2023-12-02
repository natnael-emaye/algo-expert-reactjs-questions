import { useState } from "react";

const COLOR = ["green", "yellow", "sky", "orange", "indigo"];

export default function Memory() {
    const [board, setBoard] = useState(() => shuffle([...COLOR, ...COLOR]));

    return <div className=""></div>;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}
