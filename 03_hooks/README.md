# Hooks

## useEffect
<p>
    didMount && didUpdate와 동일한 라이프 사이클을 갖는 훅스이다.</br>
    해당 컴포넌트는 랜더링 이후 시점에 호출되며 보통 리소를 할당하거나 </br>
    외부 api를 호출할 때 많이 사용한다.
</p>

## useReducer
<p>
    useReducer란 컴포넌트 외부에서 공통 작업을 수행하는 Hooks </br>
    첫 번째 매개변수로 state와 action을 받는다.

    
    [표현식]
    // 외부에 컴포넌트의 상태를 관리하는 함수를 선언
    function reducer = (state, action){
        ... 작업 수행
    }

    [사용]
    const MyComponent = () => {
        const [state, dispatch] = useReducer
        (reducer, {initState});
    }

    리듀서는 할당된 state를 value를 컴포넌트의 state에 넣어주고 dispatch에 전달받은 외부 함수에 선언된 state를 reducer에 첫 번째 매개변수로 전달하여 action에 상태에 따라 동작을 하는 기능을 제공한다.
</p>

## useMemo
<p>
    useMemo가 필요한 이유는 function형 컴포넌트의 특성상 state가 변경되면 업데이트가 되면서, </br>
    오랜 연산이 수행되어야 하는 경우 계속 반복적으로 연산을 처리하게 된다.</br>
    이로 인해 어플리케이션이 랜더링이 좀 늦어지는 현상을 막고자 감지의 대상을 정해 해당 대상이 변경되지 않을 경우 최초 mount 시점에 연산을 했던 값을 저장하여, 다음 랜더링 시에 재활용하게 된다. </br>
    이를 통해 어플리케이션의 랜더링 속도를 더 효율적으로 관리할 수 있게 된다.

    // 상태 변화에 따라 수행 내용이 달라지는 경우 의존성 배열에 상태를 추가한다.
    // 만약 최초의 마운트 시점에만 필요한 경우 의존성 배열에 상태를 추가하지 않는다.

        const location = useMemo(() => {
        return{
        country : isKorea ? "한국" : "와노국"
        }
    }, [isKorea]);
       
</p>

## useCallback
<p>
    useCallback은 의존성 배열에 값이 변하지 않는 경우 마운트 시점의 함수 내부 상태를 스냅샷하여</br>
    useMemo와 같이 메모이제이션을 통해 해당 시점의 함수를 재사용할 때 사용한다.</br>

    [표현식]
    const text = () => {
        const [state, setState] = useState(3);
        const sFun = useCallback(() => {
            // state가 4로 변경되어도 해당 sFun의 결과는 아래와 같다.
            // 현재의 state: 3
            console.log("현재의 state: " + state);
        })
    }
     
</p>

## useRef
<p>
    주로 dom을 지정할 때 사용한다. 랜더링시에 함수가 재호출되는 것을 방지하는 효과가 있다.</br>
    함수가 무한루프에 빠지지 않게 방지해주는 역할을 한다.</br>
    dom 요소는 코드를 해석하고 난 이후에 랜더링이 이루어지게 되며 이 시점은 해당 코드가 이미 컴파일 된 시점으로 해당 엘리먼트를 지시할 수 없는 상태가 되는데 이를 엘리먼트의 ref 속성에 </br>
    useRef hooks를 이용하여 dom을 조작할 수 있다.
 
        const RefComponent = () => {
            const userNameRef = useRef();

            <input
                type="text"
                name="username"
                placeholder="이름"
                onChange={onChangeHandler}
                value={form.username}
                ref={userNameRef}/>
</p>

## useContext

컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록 고안된 방법이다.</br>
    useContext는 자식 컴포넌트들이 props를 내려 받을 때 component트리가 복잡해 질수록</br>
    props 상태를 관리하기 어렵기 때문에 context객체로 연관된 component를 묶어주어</br>
    자식 component들이 해당 context를 구독하여 props를 할당받지 않고도 값을 참조할 수 있도록 하는 hooks이다</br>
    이를 통해 어플리케이션의 유지보수성을 증가시킬 수 있다.</br>
    그러나 리엑트는 component를 재사용할 수 있는 장점이 있는데 context를 잘못 사용하면 이러한 장점을 잃어버릴 수 있다.