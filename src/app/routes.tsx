import { Route, Routes } from 'react-router-dom';
import OficinaPage from './oficina/page';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Outras rotas */}
      <Route path="/oficina" element={<OficinaPage />} />
    </Routes>
  );
};

export default AppRoutes;