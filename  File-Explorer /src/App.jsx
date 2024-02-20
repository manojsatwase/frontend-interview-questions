import React, { useState } from 'react'
import explorer from './data/folderData';
import Folder from './components/Folder/Folder';

import "./App.css";
import useTraverseTree from './hooks/use-tracerse-tree';

const App = () => {
  const [explorerData,setExploreData] = useState(explorer);
  const {insertNode} = useTraverseTree();
  
  const handleInsertNode = (folderId,item,isFolder) => {
   const finalTree = insertNode(explorerData,folderId,item,isFolder);
   setExploreData(finalTree);
  }
  return (
    <div className='app'>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  )
}

export default App;