import './App.css';
import {Route, Link} from "react-router-dom";

import SideBar from "./components/SideBar";
import MainMenu from "./components/MainMenu";
import EditSurvey from "./components/EditSurvey";
import SurveyList from "./components/SurveyList";

function App() {
    return (
        <div className="App">
            <SideBar></SideBar>

            <hr/>
            <Route path="/" exact component={MainMenu}/>
            <Route path="/SurveyList" component={SurveyList}/>
            <Route path="/EditSurvey" component={EditSurvey}/>
        </div>
    );
}

export default App;
