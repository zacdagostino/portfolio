import "@styles/globals.css";
import RadialGradient from "@/components/RadielGradient";
import CustomCursor from "@/components/custom-cursor";

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
            <div className="grain" />
            <RadialGradient />
            <CustomCursor />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
