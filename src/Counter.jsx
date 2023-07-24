import { block } from "million";
import { useState } from "react";

const Counter = block(function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <button
                onClick={() => setCount(count + 1)}
                className='flex border-2 border-red-300 rounded'
            >Count {count}</button>
        </div>
    )
})
export default Counter;