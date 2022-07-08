import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CameraEntry from './scenes/CameraEntry';
import MenusEntry from './scenes/MenusEntry';

function App() {
  const appName = 'food-detection-portal';
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appName + "/"} element={<CameraEntry />}></Route>
        <Route path={appName + "/menus"} element={<MenusEntry />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
