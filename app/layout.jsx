import "@styles/globals.css";
import RadialGradient from "@/components/RadielGradient";

export const metadata = {
  title: "Zac's Portfolio",
  description:
    "Welcome to Zac's Portfolio - showcasing projects, achievements, and expertise in computer science and software engineering.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <main className="app">
            <RadialGradient />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
