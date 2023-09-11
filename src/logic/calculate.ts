export default function calculate(button: string, state: State): State{
    return state;
}

export interface State {
    currernt: string;//表示してる内容
    operand: number;//計算に使う数値
    operator?: string;//足し算か引き算か
    isNextClear: boolean;//次にクリアすべきか
}