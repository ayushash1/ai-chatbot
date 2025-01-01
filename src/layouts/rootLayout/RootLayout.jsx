import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to={"/"} className="logo">
            <img src="/logo.png" alt="logo" />
            <span>Neo AI</span>
          </Link>
          <div className="user"><header>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header></div>
        </header>
        <main>
          {/* This is where the child routes will be rendered */}
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
