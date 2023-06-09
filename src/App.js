import {
    useState,
    useRef
} from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult(() => result + Number(inputRef.current.value)); //mettre result entre parentèses en cas d'erreur
    };

    function minus(e) {
        e.preventDefault();
        setResult(() => result - Number(inputRef.current.value));
    };

    function times(e) {
        e.preventDefault();
        setResult(() => result * Number(inputRef.current.value));
    };

    function divide(e) {
        e.preventDefault();
        setResult(() => result / Number(inputRef.current.value));
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = null;
    };

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    };

    return (
        <div id="main_container">
            <div className="App">
                <div>
                    <h1>Simplest Working Calculator</h1>
                </div>
                <form>
                    <p ref={resultRef}>
                        {result}
                    </p>
                    <input
                        pattern="[0-9]"
                        ref={inputRef}
                        type="number"
                        placeholder="Type a number"
                    />
                    <button onClick={plus}>add</button>
                    <button onClick={minus}>subtract</button>
                    <button onClick={times}>multiply</button>
                    <button onClick={divide}>divide</button>
                    <button onClick={resetInput}>reset input</button>
                    <button onClick={resetResult}>reset result</button>
                </form>
            </div>
            <p id="my_name_p">By <a href="https://wa.me/237653219096?text=Hello" id="my_name">Kamgang william</a></p>
        </div>
    );
}

export default App; 
