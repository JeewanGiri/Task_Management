import './App.css';
import CustomButton from './Component/CustomButton';
import CustomInput from './Component/CustomInput';
import Header from './Component/Header'
import Card from './Component/Card'
import { useState } from 'react';
function App() {
  const [add,setAdd]=useState(false);
  const handleInput=()=>{
      setAdd(!add)
  }
  const [Tasks,setTasks]=useState([]);
      const [singleDes,setsingleDes]=useState('');
      const handleCustomDes=(event)=>
       {
                setsingleDes(event.target.value);
       } 
  const [SingleTask,setSingleTask]=useState('');
       const handleCustomTask=(event)=>
         {
          setSingleTask(event.target.value);
         }    
  const addToCart =()=>
    {
      const id=Tasks.length===0 ? 1:Tasks.length+1;
     const taskDetails=
      {
        id:id,
        task:SingleTask,
        des:singleDes,
        complete:false
      }
      setTasks(
        [...Tasks,taskDetails]
      )
    }
    // delete function
    const deleteTask =(id)=>
    {
      setTasks(
        Tasks.filter((t)=>(
           t.id===id ?false:true
        ))
      )
    }
    // clear function
    const ClearInput=()=>{
      setSingleTask('');
      setsingleDes('');
    }
    // update function
    const UpdateTask =(id)=>
    {
      setTasks(
        Tasks.map((t)=>(
           t.id===id ?{...t,complete:true}:t
        ))
      )
    }
  return (
  <>
  <div className='main'>
  {/* -------Input section--------- */}
  <div className='inputSection'>
    <Header handleInput={handleInput}/>
    {add===true ?
    <>
    <CustomInput value={SingleTask} placeHolder='Enter Task' label='Task' change={handleCustomTask}/>
    <CustomInput value={singleDes} placeHolder='Enter Description' label='Description' change={handleCustomDes}/>
    <div className='btnWrapper'>
<CustomButton color='white' bg='#1877F2' name='Save Task' click={addToCart}/>
    <CustomButton color='white' bg='red' name='Clear' click={ClearInput}/>
</div>
    </>:null
    }

    </div>
    {/* ----------Cardsection--------- */}
    <div className='cardSection'>
{ 
  Tasks.map((t)=>
  (
    <Card title={t.task} des={t.des} key={t.id} delete={()=>deleteTask(t.id)}
      update={()=>UpdateTask(t.id)} complete={t.complete}
    />

  ))
}
    </div>
    </div>
  </>
  );
}

export default App;
