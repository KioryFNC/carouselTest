import { Routes, Route } from 'react-router-dom';

import { AdmDishDetails } from '../pages/AdmDishDetails';
import { DishDetails } from '../pages/DishDetails';
import { DishEdit } from '../pages/DishEdit';
import { AdmHome } from '../pages/AdmHome';
import { AdmMenu } from '../pages/AdmMenu';
import { NewDish } from '../pages/NewDish';
import { Menu } from '../pages/Menu';
import { Home } from '../pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/admdishdetails/:id" element={<AdmDishDetails/>}/>
      <Route path="/dishdetails/:id" element={<DishDetails/>}/>
      <Route path="/dishedit" element={<DishEdit/>}/>
      <Route path="/admhome" element={<AdmHome/>}/>
      <Route path="/admmenu" element={<AdmMenu/>}/>
      <Route path="/newdish" element={<NewDish/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}