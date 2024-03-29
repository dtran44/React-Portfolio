// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import { MantineProvider } from '@mantine/core';
// import { Footer } from './components/Footer/Footer.jxs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <MantineProvider>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      {/* <Footer /> */}
      </MantineProvider>
      
    </>
  );
}

export default App;
