import React from "react";
type Props = {
    data: any[],
    injectData: (data: string) => void,
}
let selectElem: any;
const InputData: React.FC<Props> = ({data, injectData}) => {
    function onSelect() {
        injectData(selectElem.value)
    }
    React.useEffect(() => {
        selectElem = document.getElementById('selectInputData');
    })
return <div>
    <select id={'selectInputData'} className="form-select mb-2">
        {data.map(dt => <option value={dt.name}>{dt.name}</option> )}
    </select>
    <button type="button" className="btn btn-primary"  onClick={onSelect}>GO</button>
    </div>
}
export default InputData;