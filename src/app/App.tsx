import { Outlet } from 'react-router';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
