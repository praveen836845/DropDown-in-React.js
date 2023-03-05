import React, { useEffect } from 'react'
import './App.css'
import { AiOutlineDown ,AiOutlineUp  } from 'react-icons/ai'
import DropDownComponent from './components/DropDownComponent';

function App() {

  const [isOpen , setIsOpen] = React.useState(false);
  const [value , setValue] = React.useState("");

  const DropDownArray = ['Yes',  'Probably not']

  useEffect(() => {
    function bodyClick(){
      setIsOpen(false)
    }

    document.body.addEventListener('click' ,bodyClick )
    
    return () => {
      document.body.removeEventListener('click' ,bodyClick )
      
    }
  }, [])

  const clearHandler = () => {
    setValue("")
    setIsOpen(false);
  }
  

  return (
    <div className="app">
      <div className="app_dropdown_body">
        <h1>Should you use a dropdown ?</h1>
        <div className="app_dropdown_body--sub-body" onClick={e => e.stopPropagation()}>
          <div className="app_dropdown_body_sub-body--info" onClick={() => setIsOpen(prev => !prev)}>
            <abbr>Select</abbr>
            { isOpen ? <AiOutlineUp className="app_dropdown_body_sub-body_info--icon" /> : <AiOutlineDown className="app_dropdown_body_sub-body_info--icon" /> }
          </div>
          {
            isOpen && 
            <div className="app_dropdown_body_sub-body--dropdown">
              { DropDownArray.map(el => <DropDownComponent key={el} text={el} setIsOpen={setIsOpen } setValue={setValue} isSelect={el === value} />) }
              <div className='app_dropdown_body_sub-body_dropdown--clear' onClick={clearHandler}>
                clear selection
              </div>


            </div>
          }

        </div>
        <div className={`app_dropdown_body--value ${!value && 'opacity-0'}`}>
          <p>You selected : </p>
          <span>{ value }</span>
        </div>
      </div>
    </div>
  )
}

export default App
