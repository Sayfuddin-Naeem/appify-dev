import './App.css'
import { RouterProvider } from 'react-router';
import router from './Routes/Routes';
import Loader from './components/shared/Loader';

function App() {
  const loader = <Loader time={2}/>
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
