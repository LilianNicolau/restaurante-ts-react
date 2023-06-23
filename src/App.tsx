import Header from "./components/Header"
import '../global.scss'
import Router from "./router/Router"
import GlobalStateProvider from "./globalState/GlobalState"

function App() {

  return (
    <div className="App">
      <GlobalStateProvider>
        <Header/>
        <Router/>
      </GlobalStateProvider>
    </div>
  )
}

export default App
