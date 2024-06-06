import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="side-bar">
        <img className="logo" src="/happy5.png"></img>
      </div>

      <div className="content">
        <h1 className="title">Product Roadmap</h1>
        <div className="cardSection">

          <div class="card">
              <p1 className="cardTitle">Q1 2019</p1>
              <p1 className="cardMonth">January-March</p1>
              
              <div className="taskCard">
                <div>
                  <p1 className="taskText">Re-designed the zero-g doggie bags. No more spills!</p1>
                </div>
                <div className="weight">
                  <img className="weightLogo"src="Vector.svg"></img>
                  <p1 className="textWeight">64%</p1>
                  <img className="dots" src="Solid.svg"></img>
                </div>
              </div>

              <div className="taskCard">
                <div>
                  <p1 className="taskText">Travel and Relocation Support</p1>
                </div>
                <div className="weight">
                  <img className="weightLogo"src="Vector.svg"></img>
                  <p1 className="textWeight">12%</p1>
                  <img className="dots" src="Solid.svg"></img>
                </div>
              </div>

              <div className="createSection">
                <img className="createLogo" src="add.svg"/>
                <p1 className="createText">Create new task</p1>
              </div>
          </div>

          <div class="card">
              <p1 className="cardTitle">Q2 2019</p1>
              <p1 className="cardMonth">April-June</p1>

              <p1 className="noTask">No Task Available</p1>

              <div className="createSection">
                <img className="createLogo" src="add.svg"/>
                <p1 className="createText">Create new task</p1>
              </div>
          </div>


          <div class="card">
              <p1 className="cardTitle">Q3 2019</p1>
              <p1 className="cardMonth">July-September</p1>
              <div className="taskCard">
                <div>
                  <p1 className="taskText">Bundle interplanetary analytics for improved transmission</p1>
                </div>
                <div className="weight">
                  <img className="weightLogo"src="Vector.svg"></img>
                  <p1 className="textWeight">90%</p1>
                  <img className="dots" src="Solid.svg"></img>
                </div>
              </div>

              <div className="createSection">
                <img className="createLogo" src="add.svg"/>
                <p1 className="createText">Create new task</p1>
              </div>
          </div>
          <div class="card">
              <p1 className="cardTitle">Q4 2019</p1>
              <p1 className="cardMonth">October-December</p1>
              <div className="taskCard">
                <div>
                  <p1 className="taskText">Data Migration: Performance & Culture End Game</p1>
                </div>
                <div className="weight">
                  <img className="weightLogo"src="Vector.svg"></img>
                  <p1 className="textWeight">63%</p1>
                  <img className="dots" src="Solid.svg"></img>
                </div>
              </div>

              <div className="createSection">
                <img className="createLogo" src="add.svg"/>
                <p1 className="createText">Create new task</p1>
              </div>
          </div>

        </div>
        
      </div>

    </div>
    
  );
}

export default App;
