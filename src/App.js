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
  SinglePostPage,
  SingleUserPage,
} from "./pages";
import { useEffect } from "react";
import {
  getAllpostsHandler,
  getBookmarkPostsHandler,
} from "./store/features/post-slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state) => state.auth);
  const { postApiCallStatus } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllpostsHandler());
    dispatch(getBookmarkPostsHandler({ token: token }));
  }, [postApiCallStatus]);
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
          <Route path="post/:postId" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
