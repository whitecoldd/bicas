import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Profile from "./components/Profile/Profile";
import { getGamesByCateg, getNewGames } from "./functions/helpers";
import GameSinglePage from "./pages/gameSinglePage/GameSinglePage";
import AllProviders from "./pages/main/allProviders/AllProviders";
import GamesW from "./pages/main/gamesW/GamesW";
import History from "./pages/main/history/History";
import Main from "./pages/main/Main";
import TopBanner from "./pages/main/topBanner/TopBanner";

function App() {
  let isSidebarShown = useSelector(
    (state) => state.globalReducer.isSidebarShown
  );
  const user = useSelector((state) => state.user?.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} />
        <main className={"main " + (!isSidebarShown && "main_fullWidth")}>
          {/* Вован !!! */}
          {/* Все роуты и комноненты других страниц должны быть внутри main, чтобы сворачивание сайдбара работало нормально */}

          {/* Понял, сделаю */}
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/games/:id"} element={<GameSinglePage />} />
            <Route path={"/profile"} element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
