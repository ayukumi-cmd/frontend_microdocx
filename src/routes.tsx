// src/routes.tsx
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import CreatePage from './component/Form';

const routes = (
 <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/create" element={<CreatePage />} />
 </Routes>
);

export default routes;
