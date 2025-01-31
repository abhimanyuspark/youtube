import { Dashboard, Notfound, Explore, Watch, SignUp, SignIn } from "./pages";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import { NavigationData as category } from "./utils/constants";
import HomeLayout from "./layout/HomeLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "./redux/server/authServer";
import {Channel} from './pages/__root/channel'

function App() {
  const { appUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (appUser?.id) {
      dispatch(userDetails(appUser?.id));
    }
  }, []);

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Dashboard category={category[0].url} />} />
        {category?.slice(1)?.map((c, i) => (
          <Route key={i} path={c.path} element={<Explore category={c} />} />
        ))}
        <Route path ='/channel' element ={<Channel/>}/>
      </Route>

      <Route element={<Layout />}>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />

        <Route path="/watch/:id" element={<Watch />} />


        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
