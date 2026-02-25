import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/public/Home";
import Articles from "../pages/public/Articles";
import ArticleDetail from "../pages/public/ArticleDetail";
import Videos from "../pages/public/Videos";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:id" element={<ArticleDetail />} />
        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;