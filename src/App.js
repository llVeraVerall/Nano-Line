import './App.css';
import { Quare } from './quare/quare'
import { initialData } from './initial-data'; 

function App() {
  //const data = initialData;
  return (
    <div className="App">
      <header className="App-header">
          <Quare />
          {/* {state.blockOrder.map(blockId => {
            const block = state.block[blockId];
            const quares = block.quareIds.map(quareId => state.quares[quareId]);

            return <div>{ block.title }</div>
          })
        } */}
      </header>
    </div>
  );
}

export default App;
