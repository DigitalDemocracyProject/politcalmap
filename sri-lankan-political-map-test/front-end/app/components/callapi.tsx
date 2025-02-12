import { useState, useEffect } from 'react';
import Graph from './graph';
export default function CallApi(){
    const [data, setData] = useState([] as { question_id: string; answer_id: string; }[]);
    const [axesData, setAxesData] = useState([] as { axis: string; value: number; }[]);
    const url = "https://localhost:3000";
    //fecthes data
    useEffect(()=>{
        fetch(`${url}/form-data`).then((response)=>{
            try{
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                response.json().then((record)=>{
                    setData(record);
                });
            }catch(error){
                console.log(error);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    //processes data to get data about the graph axes
    useEffect(()=>{
        setAxesData([]);
        data.forEach((row)=>{
            let value;
            let lines = [];
            if (row.answer_id==="1") {
                value = -2;
            } else if (row.answer_id==="2") {
                value = -1;
            } else if (row.answer_id==="3") {
                value = 1;
            } else { //row.answer_id==="4"
                value = 2;
            }
            let axis="";
            if (row.question_id==="1" || row.question_id==="3" || row.question_id==="4"){
                axis="x";
                if (row.question_id==="3"){
                    let line = {"axis": axis, "value": -value};
                    lines.push(line);
                }else{
                    let line = {"axis": axis, "value": value};
                    lines.push(line);
                }
            }
            if (row.question_id==="2" || row.question_id==="3"){
                axis="y";
                let line = {"axis": axis, "value": value};
                lines.push(line);
            }
            if (row.question_id==="5"|| row.question_id==="2") {
                axis="z";
                let line = {"axis": axis, "value": value};
                lines.push(line);
            }
            //console.log(lines);
            setAxesData(prevAxesData=>[...prevAxesData, ...lines]);
        });
        setAxesData((prevAxesData)=>{
            let totalAxesData =[ {axis: "x", value: 0}, {axis: "y", value: 0}, {axis: "z", value: 0}]
            prevAxesData.forEach((axisData)=>{
                if(axisData.axis==="x"){
                    totalAxesData[0].value += axisData.value;
                }
                else if(axisData.axis==="y"){
                    totalAxesData[1].value += axisData.value;
                }else{
                    totalAxesData[2].value += axisData.value;
                }
            })
            return totalAxesData;
        });
    }, [data])

    //use d3 to plot graph
    if (axesData.length!==0){
        return (
            <div className="ms-4">
                <h1>Results</h1>
                {JSON.stringify(axesData)}
                <br/>
                <div style={{display:'inline-flex'}}>
                    <Graph graphData={[axesData[0].value, axesData[1].value]} id="graph1" axis1={axesData[0].axis} axis2={axesData[1].axis}/>
                    <Graph graphData={[axesData[0].value, axesData[2].value]} id="graph1" axis1={axesData[0].axis} axis2={axesData[2].axis}/>
                    <Graph graphData={[axesData[1].value, axesData[2].value]} id="graph1" axis1={axesData[1].axis} axis2={axesData[2].axis}/>
                </div>
            </div>
        );
    }else{
        return <></>
    }
    
}