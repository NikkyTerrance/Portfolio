
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Hero } from "./components/Hero";
import { Toast } from "@radix-ui/react-toast";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
