import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BottomNav, Navbar } from "./components";
import { Sidebar } from "./components/sidebar";
import { Bookmarks, Explore, Home, PageNotFound, Profile } from "./pages";

function App() {
  return (
    <div className="flex justify-center md:max-w-[1280px] md:mx-auto">
      <Navbar />
      <BottomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
