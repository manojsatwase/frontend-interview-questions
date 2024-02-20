import { useState } from "react";

const Folder = ({handleInsertNode,explorer}) => {
    const [expand,setExpand] = useState(false);
    const [showInput,setShowInput] = useState({
        visible:false,
        isFolder: null
    });

    const handleNewFolder = (e,isFolder) =>{
        e.stopPropagation();
        setExpand(true);
        setShowInput({
                    visible:true,
                    isFolder
            })
    }

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
            setShowInput({...showInput,visible:false})
        } 
    }

   if(explorer.isFolder){
    return (
        <div style={{marginTop:"5px"}}>
           <div className="folder" onClick={()=>setExpand(prevState=>!prevState)} >
               <span>🗂 {explorer.name}</span>
               <div>
                  <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
                  <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
               </div>
           </div>
           <div style={{display:expand ? "block":"none",paddingLeft:"25px"}}>
            {
                showInput.visible && (
                    <div className="inputContainer">
                       <span>{showInput.isFolder ? "🗂" :"📄"}</span>
                       <input 
                       onKeyDown={onAddFolder}
                       type="text"
                       onBlur={()=>setShowInput({...showInput,visible:false})}
                       className="inputContainer__input" 
                        autoFocus={true}
                       />
                   </div>
                )
            }
              {explorer.items.map((exp)=>(
                <span key={exp.id}>
                    <Folder handleInsertNode={handleInsertNode} explorer={exp}/>
                </span>
              ))}
           </div>
        </div>
      )
   }else{
     return <p className="file">📄 {explorer.name}</p>
   }
}

export default Folder;