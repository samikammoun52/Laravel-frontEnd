import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./components/articles/Listarticles";
import InsertArticle from "./components/articles/InsertArticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";
import Listcategories from "./components/categories/Listcategories";
import Insertcategorie from "./components/categories/Insertcategorie";
import Viewcategorie from "./components/categories/Viewcategorie";
import Editcategorie from "./components/categories/Editcategorie";
import ListsCategories from "./components/sCategorie/ListsCategories";
import ViewsCategorie from "./components/sCategorie/ViewsCategorie";
import InsertsCategorie from "./components/sCategorie/InsertsCategorie";
import EditsCategorie from "./components/sCategorie/EditsCategorie";
import Menu from "./components/menu";

function App() {


  return (
    <>
    <Router>
      <Menu></Menu>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add" element={<InsertArticle/>}/>
        <Route path="/articles/edit/:id" element={<Editarticle/>}/>
        <Route path="/articles/view/:id" element={<Viewarticle/>}/>

        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategorie/>}/>
        <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
        <Route path="/categories/view/:id" element={<Viewcategorie/>}/>

        <Route path="/scategories" element={<ListsCategories/>}/>
        <Route path="/scategories/view/:id" element={<ViewsCategorie/>}/>
        <Route path="/scategories/add" element={<InsertsCategorie/>}/>
        <Route path="/scategories/edit/:id" element={<EditsCategorie/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
