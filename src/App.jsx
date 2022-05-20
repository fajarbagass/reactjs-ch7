import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, BookList }from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Books" element={<BookList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}