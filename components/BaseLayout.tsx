import { Layout, Menu, Breadcrumb } from 'antd';
import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Navbar from './Navbar';
import Location from "./PageLocation";
import Sidebar from './Sidebar';

const { Content } = Layout;
const BaseLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className={styles.siteLayout}>
        <Navbar />
        <Content style={{ margin: "0 16px" }}>
          <Location list={['Home', 'List', 'App']} />
          <div
            className={styles.siteLayoutBackground}
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default BaseLayout