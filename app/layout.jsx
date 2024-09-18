import "@styles/globals.css";
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
        <div className="grain" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
