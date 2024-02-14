import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/reduxStore/appStore";

function App() {
  return (
    <div className="App w-screen h-fit">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
