import { Provider } from 'react-redux'
import './App.css'
import HomePage from './page/HomePage'
import { store } from './store/store'
import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PatchJs from './page/patchJs'
import LanguageFlags from './page/languageFlags'



// i18n
//     .use(initReactI18next)
//     .use(LanguageDetector)
//     .use(HttpApi)
//     .init({
//         supportedLings: ['en', 'ru'],
//         fallbackLng: 'en',
//         detection: {
//             order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//             caches: ['cookie']
//         },
//         backend: {
//             loadPath: './asset/locales/{{lng}}/translation.json',
//         },
//     });

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/flag' element={<LanguageFlags/>}/>
            <Route path='/:id' element={<PatchJs/>}/>
          </Routes> 
        </BrowserRouter>
          
      </Provider>
    </div>
  )
}

export default App
