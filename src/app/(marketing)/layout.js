//import Mainheader from "@/components/main-header"
import '../globals.css'

export const metadata = {
  title: "NextNews",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-black to-gray-800 text-white">
        {children}
      </body>
    </html>
  );
}
