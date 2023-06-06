import './App.css';
import {useState} from "react";


function App() {
    const [memory, setMemory] = useState(0);

    const memoryOne = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
        { id: 8, value: 8 },
        { id: 9, value: 9 },
        { id: 10, value: 10}
    ]

    const memoryTwo= [
        { id: 1, value: 11, label: 1 },
        { id: 2, value: 12, label: 2 },
        { id: 3, value: 13, label: 3 },
        { id: 4, value: 14, label: 4 },
        { id: 5, value: 15, label: 5 },
        { id: 6, value: 16, label: 6 },
        { id: 7, value: 17, label: 7 },
        { id: 8, value: 18, label: 8 },
        { id: 9, value: 19, label: 9 },
        { id: 10, value: 20, label: 10}
    ]

    const handleMemory = (val) => {
        setMemory(val);
    }

   return (
      <div>
          <div className="bg"></div>

          <div className="star-field">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
          </div>
          <div className="container">

              <div className="row vh-100 align-items-center">
                  <div className="row">
                      <div className="col-4 d-flex flex-column align-items-center player-one gap-4">
                          {memoryOne.map(memoryOne => (
                              <button
                                  key={memoryOne.id}
                                  className={memoryOne.value === memory ? 'btn btn-light btn-lg' : 'btn btn-outline-light btn-lg'}
                                  onClick={() => handleMemory(memoryOne.value)}
                              >
                                  <span>{memoryOne.value}</span>
                              </button>
                          ))}
                      </div>
                      <div className="col-4 d-flex flex-column align-items-center justify-content-around neutral">
                          <div className="alert alert-primary player-one player-width" role="alert">
                              <span className="player-one-span">Player One</span>
                          </div>
                          <button
                              className={memory === 0 ? 'btn btn-light btn-lg' : 'btn btn-outline-light btn-lg'}
                              onClick={() => handleMemory(0)}
                          >
                              <span>{0}</span>
                          </button>
                          <div className="alert alert-primary player-two player-width" role="alert">
                              <span >Player Two</span>
                          </div>
                      </div>
                      <div className="col-4 d-flex flex-column-reverse align-items-center player-two gap-4">
                          {memoryTwo.map(memoryTwo => (
                              <button
                                  key={memoryTwo.id}
                                  className={memoryTwo.value === memory ?'btn btn-light btn-lg' : 'btn btn-outline-light btn-lg'}
                                  onClick={() => handleMemory(memoryTwo.value)}
                              >
                                  <span>{memoryTwo.label}</span>
                              </button>
                          ))}
                      </div>
                  </div>
              </div>

          </div>
      </div>
   );
}

export default App;
