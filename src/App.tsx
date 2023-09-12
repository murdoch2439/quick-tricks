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
import {FaqPage} from "./pages/faq/Faqage";
import Contact from "./pages/contact/Contact";
import {PrivacyPolicy} from "./pages/privacy policy/PrivacyPolicy";



function App() {
  return (
      <div className="App">
        {/*<SharedLayout>*/}
        <Routes>
          <Route path={"/"} element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path={"/about"}  element={<About />} />
            <Route path={"/tricks"}  element={<AllTricks />} />
            <Route path={"/faq"}  element={<FaqPage />} />
            <Route path={"/privacy-policy"}  element={<PrivacyPolicy />} />
            <Route path={"/contact"}  element={<Contact />} />

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
