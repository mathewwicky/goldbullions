import Notfound from './Components/Notfound/NotFound';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Faqs from "./Components/FAQs/Faqs"
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path='/FAQs' element={<Faqs/>} />
      <Route path="/terms" element={<Terms/>} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='*' element={<Notfound />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
