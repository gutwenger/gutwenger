import './App.css';
import { HashRouter } from "react-router-dom";

import Main from "./components/Main";
import { PageProvider } from "./contexts/PageContext";

function App() {
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
