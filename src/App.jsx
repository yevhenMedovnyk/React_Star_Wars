import {Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home/Home";
import {PeoplePage} from "./pages/people-page/PeoplePage";
import {Search} from "./pages/Search/Search";

import s from "./App.module.scss";
import {Header} from "./components/Header/Header";
import {Error} from "./pages/Error/Error";
import {PersonPage} from "./pages/PersonPage/PersonPage";
import { Favorite } from "./pages/Favorite/Favorite";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people' element={<PeoplePage />} />
			  <Route path='/people/:id' element={<PersonPage />} />
			  <Route path='/favorite' element={<Favorite />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
