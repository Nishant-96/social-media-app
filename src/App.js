import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { AppWrapper, RequireAuth } from "./components";

import {
  Bookmarks,
  Explore,
  Home,
  Login,
  PageNotFound,
  Profile,
  Signup,
  SingleUserPage,
} from "./pages";

function App() {
  return (
    <div className="flex justify-center md:max-w-[1280px] md:mx-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route
          element={
            <RequireAuth>
              <AppWrapper />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmark" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="user/:userId" element={<SingleUserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
