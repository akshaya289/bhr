import FileFolderList from './Components/FileFolderList';
import FileFolderListData from './Data/FileFolderListData.json'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FileFolderList data={FileFolderListData} />
      </header>
    </div>
  );
}

export default App;
