import "./App.css";
import { Router, Route } from "wouter";
import Post from "./Post/post";
import Page from "./page/pageComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Page}></Route>

        <Route path="/post/:slug" component={Post}></Route>
      </Router>
    </div>
  );
}

export default App;
