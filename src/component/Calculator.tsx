import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

export default function Calculator() {
    const buttonHandler = (code: string) => {
        console.log(code);
    }
    return <div>
        <Display/>
        <ButtonPanel buttonHandler={buttonHandler}/>
    </div>
}