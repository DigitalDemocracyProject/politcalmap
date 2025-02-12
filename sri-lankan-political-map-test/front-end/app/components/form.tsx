import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
export default function Form(){
  const [data, setData] = useState([] as {_id:string, question:string, answers:[{_id:string, answer:string}]}[]);
  const [inputs, setInputs] = useState({} as Record<string, string>);
  const url = "https://localhost:3000";
  const effectRan = useRef(false);
  useEffect(()=>{
    if (effectRan.current===false) {
      fetch(url, {credentials: 'include'}).then((response)=>{
        try{
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          response.json().then((record)=>{
            console.log(record);
            setData(record);
          });
        }catch(error){
          console.log(error);
        }
      }).catch((error)=>{
        console.log(error);
      });
      return ()=>{effectRan.current===true};
    }
}, []);
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    //console.log(inputs);
    // ... submit to API or something
    const bodyData: { question_id: string; answer_id: string; }[] = [];
    Object.entries(inputs).forEach(([key, value])=>{bodyData.push({'question_id': key, 'answer_id': value})});
    //console.log(bodyData);
    fetch(`${url}/users` , {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(bodyData),
      credentials: 'include'
    })
    .then((result) => result.json())
    .then((info) => { console.log(info); });
    navigate("/results", {state: {from: location}});
    
  };
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      {data.map((q_item)=>{
        return (
          <div className='bg-light device-margin' style={{padding:"5px"}} key={q_item._id}>
            <div className='card'>
            <div className='card-header bg-primary-subtle'>
            <label htmlFor={q_item._id}>
              {`${q_item._id}. ${q_item.question}`}
            </label>
            </div>
            <div className='card-body bg-info-subtle'>
              <div className='mb-3'>
              {q_item.answers.map((item)=><div className='form-check bg-info-subtle my-0' key={item._id}><input required className='form-check-input' type="radio" name={q_item._id} id={`${q_item._id}.${item._id}`} value={item._id} onChange={handleChange} checked={JSON.stringify(inputs)!=="{}"&&inputs[q_item._id]===item._id}/><label className='form-check-label' htmlFor={`${q_item._id}.${item._id}`}>{item.answer}</label></div>)}
            </div>
            </div>
            </div>
          </div>
        );
      })}
      <div className="device-margin">
          <button className='btn btn-primary mb-3' type="submit"> Submit </button>
        </div>
    </form>
    </>
  );
}
//margin in tablets and phones is set as 12.5vw while larger screens have 25vw margin.
//now what though??