import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Blog from "./routes/Blog.tsx";
import Overscoping_Blog from "./routes/blogs/Overscoping_Blog.tsx";
import Beginning_Blog from "./routes/blogs/Beginning_Blog.tsx";
import Aligned_Goals_Blog from "./routes/blogs/Aligned_Goals_Blog.tsx";
import Second_Game_Jam_Blog from "./routes/blogs/Second_Game_Jam_Blog.tsx";
import Insufficient_Blog from "./routes/blogs/Insufficient_Blog.tsx";
import Itch_Dev_Log_Blog from "./routes/blogs/Itch_Dev_Log_Blog.tsx";
import Fundraising_Blog from "./routes/blogs/Fundraising_Blog.tsx";
import Hot_Reload_Blog from "./routes/blogs/Hot_Reload_Blog.tsx";
import New_Competition_Blog from "./routes/blogs/New_Competition_Blog.tsx";
import Validation_Blog from "./routes/blogs/Validation_Blog.tsx";
import Free_Play_Blog from "./routes/blogs/Free_Play_Blog.tsx";
import Third_Jam_Blog from "./routes/blogs/Free_Play_Blog.tsx";
import Reflection_Blog from "./routes/blogs/Reflection_Blog.tsx";
import Rebuild_Blog from "./routes/blogs/Rebuild_Blog.tsx";
import Identity_Blog from "./routes/blogs/Identity_Blog.tsx";
import Decisions_Blog from "./routes/blogs/Decisions_Blog.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/overscoping-blog" element={<Overscoping_Blog/>}/>
        <Route path="/blog/beginning-blog" element={<Beginning_Blog/>}/>
        <Route path="/blog/aligned-goals-blog" element={<Aligned_Goals_Blog/>}/>
        <Route path="/blog/second-game-jam-blog" element={<Second_Game_Jam_Blog/>}/>
        <Route path="/blog/insufficient-blog" element={<Insufficient_Blog/>}/>
        <Route path="/blog/itch-dev-log-blog" element={<Itch_Dev_Log_Blog/>}/>
        <Route path="/blog/fundraising-blog" element={<Fundraising_Blog/>}/>
        <Route path="/blog/hot-reload-blog" element={<Hot_Reload_Blog/>}/>
        <Route path="/blog/new-competition-blog" element={<New_Competition_Blog/>}/>
        <Route path="/blog/validation-blog" element={<Validation_Blog/>}/>
        <Route path="/blog/free-play-blog" element={<Free_Play_Blog/>}/>
        <Route path="/blog/third-jam-blog" element={<Third_Jam_Blog/>}/>
        <Route path="/blog/reflection-blog" element={<Reflection_Blog/>}/>
        <Route path="/blog/rebuild-blog" element={<Rebuild_Blog/>}/>
        <Route path="/blog/identity-blog" element={<Identity_Blog/>}/>
        <Route path="/blog/decisions-blog" element={<Decisions_Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;