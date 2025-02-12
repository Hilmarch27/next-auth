import AppBar from "@/components/AppBar";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Next-Auth Tutorial",
  description: "Generated by Sakura Dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
