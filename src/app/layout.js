import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manabendra – Full-Stack Developer Portfolio",
  description:
    "Portfolio of Manabendra Bisoyi, a full-stack developer skilled in React.js, Next.js, Node.js, and PostgreSQL.",
  keywords: [
    "Manabendra Bisoyi",
    "Full Stack Developer",
    "Next.js",
    "React.js",
    "Portfolio",
    "PostgreSQL",
    "Node.js",
  ],
};

const noFlashScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <main style={{ paddingTop: "80px" }}>
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
