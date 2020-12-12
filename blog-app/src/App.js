import "./App.css";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article" component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
