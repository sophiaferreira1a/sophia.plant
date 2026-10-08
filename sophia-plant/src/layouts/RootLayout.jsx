//Casca externa: Header + Outlet + Footer

import{Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function RootLayout() {
     return (
        <div className="min-h-screen flex flex-col bg-cream text-leaf">
            <Header />
            <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8"> 
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}