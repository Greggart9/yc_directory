import Navbar from "../components/Navbar";

import 'easymde/dist/easymde.min.css';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (
        <main className="font-work-sans">
            <Navbar /> 

            {children}
        </main>
    );
}