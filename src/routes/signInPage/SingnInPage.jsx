import { SignIn } from "@clerk/clerk-react";
import "./signinpage.css";

const SingnInPage = () => {
  return (
    <div className="singnInPage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl={"/dashboard"}
      />
    </div>
  );
};

export default SingnInPage;
