import FileFolderList from './Components/FileFolderList';
import FileFolderListData from './Data/FileFolderListData.json'
import './App.css';


function App() {
  return (
    <div className="App">
        <FileFolderList data={FileFolderListData} />
    </div>
  );
}

export default App;
