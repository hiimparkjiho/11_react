import { useState } from 'react';
import UseEffectBasic from './01_useEffect/01_useEffiect_basic';
import UseEffectMount from './01_useEffect/02_useEffrct_mount';
import UseEffectUpdate from './01_useEffect/03_useEffect-update';
import UseEffectCleanUp from './01_useEffect/04_useEffect_cleanup';
import { Container } from './01_useEffect/05_useEffect-cleanup-example';
import Quiz from './01_useEffect/quiz';
import Counter from './02_useReaducer/01_reducer-basic';
import UseReducerBasic from './02_useReaducer/01_reducer-basic';
import ReducerFormControl from './02_useReaducer/02_reducer-form-controll';
import HardCalculator from './03_useMemo/01_hard-calculator';
import ComplexCalculator from './03_useMemo/02_complex-calculator';
import UseMemoComponent from './03_useMemo/03_performance-optimization';
import LocationComponent from './03_useMemo/04_object-type';
import CallbackProblem from './04_useCallback/01_problem';
import FunctionMemorization from "./04_useCallback/02_function_memorization";
import CallbackComponent from "./04_useCallback/03_composited-component";
import CounterRef from './05_useRef/01_problem';
import UseCounter from './05_useRef/02_resolve-as-useRef';
import LoginComponent from './05_useRef/03_inputRef';


function App() {
  const [message, setMessage] = useState("안녕하세요~");

  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount /> */}
    {/* <UseEffectUpdate /> */}
    {/* <UseEffectCleanUp /> */}
    {/* <Container /> */}
    {/* <Quiz /> */}
    {/* <Counter></Counter> */}
    {/* <UseReducerBasic /> */}
    {/* <ReducerFormControl/> */}
    {/* <HardCalculator/> */}
    {/* <ComplexCalculator/> */}
    {/* <UseMemoComponent/> */}
    {/* <LocationComponent/> */}
    {/* <CallbackProblem/> */}
    {/* <FunctionMemorization/> */}
    {/* <CallbackComponent/> */}
    {/* <CounterRef/> */}
    {/* <UseCounter /> */}
    {/* <LoginComponent /> */}
    </>
  );
}
export default App;
