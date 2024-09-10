import Sidebar from './Sidebar';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div  className="container" >
      <Sidebar />
      <main className="container">{children}</main>
    </div>
  );
}
