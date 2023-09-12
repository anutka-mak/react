import './App.css';
import {useState} from "react";
import ColorNumber from "./ColorNumber";
import ModalWindow from "./ModalWindow";

function App() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState(10);
    const [minValue, setMinValue] = useState(0);
    const [step, setStep] = useState(2);
    const [limit, setLimit] = useState(4);
    const [isVisible, setIsVisible] = useState(false);

    function increment() {
        if (count < maxValue) {
            setCount(count + step);
        } else {
            setCount(maxValue);
        }
    }

    function decrement() {
        if (count > minValue) {
            setCount(count - step);
        } else {
            setCount(minValue);
        }
    }

    function closeModal() {
        if (isVisible) {
            setIsVisible(true);
        }
    }

    function inputMaxValue(event) {
        const newValue = parseInt(event.target.value);

        if (count > newValue) {
            setCount(newValue);
        }

        setMaxValue(newValue);
    }

    function inputMinValue(event) {
        const newValue = parseInt(event.target.value);

        if (count < newValue) {
            setCount(newValue);
        }

        setMinValue(newValue);
    }

    function inputStepValue(event) {
        const newValue = parseInt(event.target.value);
        setStep(newValue);
    }

    function inputLimitValue(event) {
        const newValue = parseInt(event.target.value);
        setLimit(newValue);
    }

    return (
        <div className="section">
            <div className="input">
                {limit === count && <ModalWindow clickCallback={() => closeModal}/>}
                <label htmlFor='max'>max value</label>
                <input type="number" id='max' value={maxValue} placeholder="Max value" onChange={inputMaxValue}/>
                <label htmlFor='min'>min value</label>
                <input type="number" id='min' value={minValue} placeholder="Min value" onChange={inputMinValue}/>
                <label htmlFor='step'>step value</label>
                <input type="number" id='step' value={step} placeholder="Step" onChange={inputStepValue}/>
                <label htmlFor='limit'>limit value</label>
                <input type="number" id='limit' value={limit} placeholder="Limit value" onChange={inputLimitValue}/>
            </div>
            <div className="counter">
                <ColorNumber count={count}/>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default App;
