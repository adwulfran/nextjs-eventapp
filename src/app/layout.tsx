import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../components/fonts";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import DropDown from "@/components/Dropdown";
import { getServerSession } from "next-auth";
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
//to test 3rd commit
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Events Manager
              </Typography>
              { session?.user ? <DropDown initials={session.user.image!}/> : <></>}
            </Toolbar>
          </AppBar>
        </Box>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
