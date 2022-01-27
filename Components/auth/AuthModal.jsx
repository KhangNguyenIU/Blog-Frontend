import React from "react";
import Modal from "../modal/Modal";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { googleLogin } from "../../api/auth.api";
import { useRouter } from "next/router";

const buttonClass =
  "w-[240px] py-2 border-[1px] border-gray-400 mb-20 flex items-center justify-center rounded-full hover:border-gray-800 cursor-pointer mb-5";
const AuthModal = ({ modalRef }) => {
  const router = useRouter();
  const responseGoogle = (response) => {
    const tokenId = response.tokenId;
    let token = {
      tokenId: tokenId,
    };
    console.log(token)
    googleLogin(token)
      .then((response) => console.log({response}))
      .then((data) => {
        // props.handleClose();
        console.log({data})
        router.reload("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <Modal childRef={modalRef} width={"30rem"} height={"38rem"}>
        <h1 className="text-[28px] font-lora-serif text-black- mt-20 mb-20">
          Welcome back
        </h1>
        <div>
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            buttonText="Login"
            cookiePolicy="single_host_origin"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(renderProps) => (
              <div
                className={buttonClass}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <div className="flex items-center">
                  <FcGoogle />
                  <span className="ml-5">Sign in with Google</span>
                </div>
              </div>
            )}
          />
        </div>

        <div className={buttonClass}>
          <div className="flex items-center">
            <HiOutlineMail />
            <span  className="ml-5">
              Sign in with Email
            </span>
          </div>
        </div>

        <div className="mt-10">
        <p className="small-text-primary">
            No account?
            <span
              className="cursor-pointer text-lime-900 ml-1"
            >
               Create one
            </span>
          </p>
        </div>
        <div className="text-center mt-20 text-gray-600 px-5 ]">
            <p className="text-[12px] text-center">Click “Sign In” to agree to Medium’s <a className="underline-offset-4">Terms of Service</a> and acknowledge that Medium’s <a className="underline-offset-4">Privacy Policy</a> applies to you.</p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AuthModal;
