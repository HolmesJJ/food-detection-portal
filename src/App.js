import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CameraEntry from './scenes/CameraEntry';
import MenusEntry from './scenes/MenusEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CameraEntry />}></Route>
        <Route path="/menus" element={<MenusEntry />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
