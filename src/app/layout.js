import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from './components/Sidebar';
import styles from './components/Layout.module.css';
import Nav from "./pages/nav/page"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ajay Pabriya",
  description: "Ajay Pabriya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>  <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}><Nav/>{children}</main>
    </div></body>
    </html>
  );
}
