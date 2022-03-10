import React from "react";
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { pageState, pageViewState } from "../recoil/data";

import styles from "../styles/Home.module.css";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const currentPath = router.asPath;
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  const [pageView, setPageView] = useRecoilState(pageViewState);

  const redirect = (url?: any, page?: any) => {
    setCurrentPage(url);
    if (!page) {
      router.push(url);
    } else {
      setPageView({ page });
    }
  };

  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className={styles.logo} />
      <Menu
        className={styles.disableMenuBorder}
        selectedKeys={[currentPage]}
        mode="inline"
      >
        {currentPath === "/" && (
          <Menu.Item
            key="/"
            icon={<DesktopOutlined />}
            onClick={() => redirect("/", "index")}
          >
            Dashboard
          </Menu.Item>
        )}
        {(currentPath === "/redux" || currentPath === "/redux/counter") && (
          <>
            <Menu.Item
              key="/redux"
              icon={<DesktopOutlined />}
              onClick={() => redirect("/redux", "redux.todos")}
            >
              Todos
            </Menu.Item>
            <Menu.Item
              key="/redux/counter"
              icon={<PieChartOutlined />}
              onClick={() => redirect("/redux/counter", "redux.counter")}
            >
              Counter
            </Menu.Item>
          </>
        )}
        {(currentPath === "/recoil" || currentPath === "/recoil/counter") && (
          <>
            <Menu.Item
              key="/recoil"
              icon={<DesktopOutlined />}
              onClick={() => redirect("/recoil")}
            >
              Todos
            </Menu.Item>
            <Menu.Item
              key="/recoil/counter"
              icon={<PieChartOutlined />}
              onClick={() => redirect("/recoil/counter")}
            >
              Counter
            </Menu.Item>
          </>
        )}
        {currentPath === "/native" && (
          <>
            <Menu.Item
              key="/native"
              icon={<DesktopOutlined />}
              onClick={() => redirect("/native")}
            >
              Todos
            </Menu.Item>
          </>
        )}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
