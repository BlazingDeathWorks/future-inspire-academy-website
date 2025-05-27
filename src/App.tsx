import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Blog from "./routes/Blog.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;