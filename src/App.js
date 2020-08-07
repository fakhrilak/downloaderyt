import React,{useEffect,useState} from 'react';
import './App.css';
import ReactPlayer from "react-player";

function App() {
  const [download,setDownload]=useState(false)
  const [URL,setURL]=useState('')
  const [Name,setName]=useState('')
  const [Type,setType]=useState('')

  console.log(URL)

  const handleDownload=()=>{
    setDownload(!download)
  }

  const handleSetUrl= (e)=>{
    setURL(e.target.value)
  }

  const handleSetName=(e)=>{
    setName(e.target.value)
  }

  const handleSetType=(e)=>{
    setType(e.target.value)
  }
  return (
    <div className="App">
      <h1>YOUTUBE DOWNLOADER</h1>

      <form action="https://downloaderyt.herokuapp.com/download" method="GET"> 
      
      <div className='form'>
        <div>
          <input
          placeholder="URL"
          type="text"
          name = "URL"
          value={URL}
          onChange={handleSetUrl}
          />
        </div>

        <div style={{paddingTop:5,paddingBottom:5}}>
          <input
        placeholder="Name Download"
        type="text"
        name = "Name"
        value={Name}
        onChange={handleSetName}
        />
        </div>
          {URL!== '' && <button onClick={()=>handleDownload()} type="submit" value="Download">Download</button>}
        </div>
      </form>
      <div style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'50%',paddingTop:20}}>
        <ReactPlayer url={URL}/>
      </div>  
    </div>
  );
}

export default App;
