import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";
import { MenuProvider } from "./contexts/menu.context";

import { ThemeProvider } from "styled-components";
import ResetCss from "./styles/reset.css.js";
import { theme } from "./styles/theme";
import Posts from "./pages/posts";
import HomePage from "./pages/home";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MenuProvider>
          <BrowserRouter>
            <ResetCss />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/posts" element={<Posts/>}/>
            </Routes>
          </BrowserRouter>
        </MenuProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
