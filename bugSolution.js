import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

//Home.js
export default function Home(){
    return(
        <div>Home</div>
    );
}
//About.js
export default function About(){
    return(
        <div>About</div>
    );
}
//Ensure that the components are exported correctly and the paths match the intended routes.