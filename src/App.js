import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import {useEffect, useState} from 'react'
function App() {
  const [formClass, setFormClass] = useState('modal-content two')
  const [modalClass, setModalClass] = useState('modal')
  const handleForm = () => {
    console.log(formClass)
    if(String(formClass).includes('two')) {
      setFormClass('modal-content')
    }else {
      setFormClass('modal-content two')
    }
  }
  
  const handleModal = () => {
    setModalClass('one')
  }

  useEffect(()=>{
    let root2 = document.getElementById('root');
    root2.onclick(()=>{
      console.log('root clicked')
      handleForm()
    })
  },[])
  return (
    <div className="App">
      <Modal formClass={formClass} handleForm={handleForm} modalClass={modalClass} hanldeModal={handleModal}/>
    </div>
  );
}

export default App;
