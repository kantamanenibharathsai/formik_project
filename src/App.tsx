import React from 'react';
import './App.css';
import FormikForm from './pages/formik_form/FormkForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuccessComponent from './pages/success_page/SuccessPage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={ <FormikForm />} path="/register"/>
      <Route element={<SuccessComponent/>} path="/success"/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
