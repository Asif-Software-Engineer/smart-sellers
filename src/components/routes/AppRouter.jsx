import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../home/Home';
import { Form } from '../form/Form';
import { About } from '../about/AboutUs';
 
export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='form' element={<Form />} />
            <Route path='about' element={<About />} />
        </Routes>
    </div>
  )
}
