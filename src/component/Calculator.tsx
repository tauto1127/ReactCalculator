import { useState } from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate, { State } from "../logic/calculate";

export default function Calculator() {
    const [state, setState] = useState<State>({//分割代入？
        current: '0',
        operand: 0,
        operator: undefined,
        isNextClear: false,
    })//useStateにStateのオブジェクトを渡してる
    //そしたら、setState関数とstateが帰ってくる
    const buttonHandler = (code: string) => {
        const nextState = calculate(code, state);
        setState(nextState);
    }
    return <div>
        <Display value={state.current}/>
        <ButtonPanel buttonHandler={buttonHandler}/>
    </div>
}