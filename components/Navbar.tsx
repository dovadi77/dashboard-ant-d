import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const router = useRouter();
  const redirect = (url: string) => {
    setCurrentPage(url);
    router.push(url);
  };
  return (
    <Header style={{ padding: 0 }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentPage]}>
        <Menu.Item key="/" onClick={() => redirect("/")}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/redux" onClick={() => redirect("/redux")}>
          Redux Tutorial
        </Menu.Item>
        <Menu.Item key="/recoil" onClick={() => redirect("/recoil")}>
          Recoil Tutorial
        </Menu.Item>
        <Menu.Item key="/native" onClick={() => redirect("/native")}>
          UseReducer Native
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
