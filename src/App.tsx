import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Blog from "./routes/Blog.tsx";
import Overscoping_Blog from "./routes/blogs/Overscoping_Blog.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/overscoping-blog" element={<Overscoping_Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;