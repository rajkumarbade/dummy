import store from "../src/store/store";
import { Provider } from "react-redux";
import Counter from "../src/components/Counter";
import Login from "../src/components/Login";
import "./styles.css";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter /> */}
        <Login />
      </div>
    </Provider>
  );
}

export default App;
