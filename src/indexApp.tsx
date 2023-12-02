import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CRMPage } from './pages/crm';
import { NoPage } from './pages/NoPage';
import { ContactPage } from './pages/contact';
import { Layout } from './components/layout/layout';
import { Success } from './components/success/success';
import {PrivacyPolicy} from "./pages/privacyPolicy";

function IndexApp() {
  return (
    <React.Fragment>
      <Suspense fallback={<div className='container'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/crm' element={<CRMPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/success' element={<Success />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default IndexApp;
