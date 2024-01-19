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


function App() {
  const [message, setMessage] = useState("안녕하세요~");

  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount /> */}
    {/* <UseEffectUpdate /> */}
    {/* <UseEffectCleanUp /> */}
    {/* <Container /> */}
    <Quiz />
    {/* <Counter></Counter> */}
    {/* <UseReducerBasic /> */}
    {/* <ReducerFormControl/> */}
    </>
  );
}
export default App;
