import './App.css'
import { RouterProvider } from 'react-router';
import router from './Routes/Routes';
import Loader from './components/shared/Loader';

function App() {
  const loader = <Loader />
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={loader}
        HydrateFallback={loader}
      />
    </>
  )
}

export default App
