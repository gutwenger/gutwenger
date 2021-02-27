import './App.css';
import { HashRouter } from "react-router-dom";

import Main from "./components/Main";
import { PageProvider } from "./contexts/PageContext";

function App() {

    console.log(process.env.REACT_APP_GOOGLE)

    return (
        <div className="App">
            <HashRouter className="router" basename="">
                <PageProvider >
                    <Main />
                </PageProvider>
            </HashRouter>
        </div>
    );
}

export default App;
