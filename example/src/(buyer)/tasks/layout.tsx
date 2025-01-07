import React from "react";

export default function Page({ children }: any) {
    const [count, setCount] = React.useState(0);
    return <div>Page s {children}
        <h1>Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}