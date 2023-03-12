import {Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home/Home";
import {PeoplePage} from "./pages/people-page/PeoplePage";
import {Search} from "./pages/Search/Search";

import {Header} from "./components/Header/Header";
import {Error} from "./pages/Error/Error";
import {Layout} from "./components/Layout/Layout";
import {PersonPage} from "./pages/PersonPage/PersonPage";
import {Favorite} from "./pages/Favorite/Favorite";
import {useContext} from "react";
import {ThemeContext} from "./providers/ThemProvider";

import s from "./App.module.scss";

function App() {
	const { isLight } = useContext(ThemeContext);

  return (
      <div className={[s.App, isLight ? s.light : ''].join(' ')}>
        <Layout>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<PeoplePage />} />
            <Route path='/people/:id' element={<PersonPage />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Layout>
      </div>
  );
}

export default App;
