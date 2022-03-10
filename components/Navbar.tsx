import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, pageViewState } from "../recoil/data";

const { Header } = Layout;

const Navbar = () => {
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  const setPageView = useSetRecoilState(pageViewState);
  const router = useRouter();
  const redirect = (url: any, page: any) => {
    setCurrentPage(url);
    router.push(url);
    setPageView({ page });
  };
  return (
    <Header style={{ padding: 0 }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentPage]}>
        <Menu.Item key="/" onClick={() => redirect("/", "index")}>
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="/redux"
          onClick={() => redirect("/redux", "redux.todos")}
        >
          Redux Tutorial
        </Menu.Item>
        <Menu.Item
          key="/recoil"
          onClick={() => redirect("/recoil", "recoil.todos")}
        >
          Recoil Tutorial
        </Menu.Item>
        <Menu.Item
          key="/native"
          onClick={() => redirect("/native", "native.todos")}
        >
          UseReducer Native
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
