// import logo from './logo.svg';
// import Books from './library';
// import Header from './header';
// import HeaderVisitor from './header-visitor';
// import Footer from './footer';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';












// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" component={<Books></Books>} />
//         </Routes>
//       </BrowserRouter>
//     </div>

//   );
// }

// export default App;





import Books from './library';
import Footer from './footer';
import About from './aboutUs';
import Contact from './contact';
import SignUp from './signUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Books />, errorElement: <div>404 Not Found</div> }
    , { path: '/aboutus', element: <About />, errorElement: <div>404 Not Found</div> }
    , { path: '/contact', element: <Contact />, errorElement: <div>404 Not Found</div> }
    , { path: '/signUp', element: <SignUp />, errorElement: <div>404 Not Found</div> }
  ]);
  return (
    <>

      <RouterProvider router={router} />

    </>

  )


}
export default App;
