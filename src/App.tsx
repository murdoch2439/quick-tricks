import React from 'react';
import './App.css';
import {Route, Routes}  from "react-router-dom"
import SharedLayout from "./components/layout/layOut";
import {Home} from "./pages";
import ArticleDetail from "./pages/articleDetail";
import SignUp from "./pages/authentication/signup";
import AllTricks from "./pages/allTricks/AllTricks";
import About from "./pages/about/About";
import Error from "./pages/errors/Error";



function App() {
  return (
      <div className="App">
        {/*<SharedLayout>*/}
        <Routes>
          <Route path={"/"} element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path={"/about"}  element={<About />} />
            <Route path={"/tricks"}  element={<AllTricks />} />
            <Route path={"/faq"}  element={<h1>Faq</h1>} />
            <Route path={"/privacy-policy"}  element={<h1>Privacy-policy</h1>} />
            <Route path={"/contact"}  element={<h1>Contact</h1>} />

            <Route path={"/articles/article/:id"}  element={<ArticleDetail />} />

          </Route>
          <Route path={"/authentication"}  element={<SignUp />} />
          <Route path={"*"} element={<Error/>}  />
        </Routes>
        {/*</SharedLayout>*/}

      </div>
  );
}

export default App;
