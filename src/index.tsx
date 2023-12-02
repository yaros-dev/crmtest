import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import IndexApp from './indexApp';
import './fonts/matter/Matter-Bold.ttf'
import './fonts/matter/Matter-Heavy.ttf'
import './fonts/matter/Matter-Medium.ttf'
import './fonts/matter/Matter-Regular.ttf'
import './fonts/matter/Matter-Light.ttf'
import './fonts/matter/Matter-SemiBold.ttf'
import './fonts/gallerymodern/GalleryModern.ttf'
import { BrowserRouter } from 'react-router-dom';
import { MenuStateContextProvider } from "./components/menu/menuContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <MenuStateContextProvider>
        <BrowserRouter>
            <IndexApp/>
        </BrowserRouter>
    </MenuStateContextProvider>
);


