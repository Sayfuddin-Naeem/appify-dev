import React, { useState } from 'react'
import Navbar from '../../components/sections/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/sections/Footer/Footer';
import Loader from '../../components/shared/Loader';

function Root() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const isLoading = (navigation.state === 'loading');
  return (
    <div>
      {
        loading || isLoading ? <Loader time={1} setLoading={setLoading}/> : (
          <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </>
        )
      }
    </div>
  )
}

export default Root;