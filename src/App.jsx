import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyNavbar from "./components/MyNavbar";
import Profile from "./pages/Profile";

import CreateABand from "./pages/CreateABand";
import NotFound from "./pages/NotFound";
import AllBands from "./pages/AllBands";
import AllBandsDetails from "./pages/AllBandsDetails";
import AddForm from "./components/AddForm";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import AllComments from "./pages/AllComments";
import EditBand from "./pages/EditBand";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:userId" element={<Profile />} />
        {/*<OnlyPrivate><Profile /></OnlyPrivate>}*/}
        <Route path="/new-band" element={<CreateABand />} />
        <Route path="/all-bands" element={<AllBands />} />
        <Route path="/add-form" element={<AddForm />} />
        <Route path="/band-details/:bandId" element={<AllBandsDetails />} />
        <Route path="/all-comments" element={<AllComments />} />
        <Route path="/edit-band/:bandId" element={<EditBand />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//<Route path=''element={}/>
