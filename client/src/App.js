import Homepage from "./Homepage";
import Artist from "./Artist";
import Setlists from "./Setlists";
import Setlist from "./Setlist";
import Favorites from "./Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

import Header from "./Header";
import Footer from "./Footer";
import Searchbar from "./Searchbar";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header LoginButton={LoginButton} LogoutButton={LogoutButton} />
      <Routes>
        <Route path="/" element={<Homepage Searchbar={Searchbar} />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/artist/setlists/:id" element={<Setlists />} />
        <Route path="/setlist/:id" element={<Setlist />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
