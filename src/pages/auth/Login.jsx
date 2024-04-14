import React, { useRef } from 'react';
import useUserAPI from '../../hooks/useUserAPI';
import { Link } from 'react-router-dom';

// The Login component is the login page of the application.
const Login = () => {
  const formRef = useRef();

  const { loading, error, loginUser } = useUserAPI();

  // The handleSubmit function is called when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault();
    const formRefData = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };
    loginUser(formRefData);
  };

  return (
    <>
      <div className="mb-14 text-white inline-flex flex-col  items-start w-[30rem]">
        <h1 className="text-[50px] leading-[73px] font-['poppins'] font-bold mb-4">
          Hi there,
        </h1>
        <h2 className="font-['poppins'] text-[35px] leading-[40px]">
          Welcome to our
          <br />
          contacts portal
        </h2>
      </div>
      <div className="">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e-mail"
            className="mb-7 rounded-full font-['poppins'] text-[25px] leading-[50px]  font-medium p-0.5 pl-10 text-[#083F46]  h-[3.4rem] w-[30rem]"
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="mb-7 rounded-full font-['poppins'] text-[25px] leading-[50px] font-medium p-0.5 pl-10 text-[#083F46]  h-[3.4rem] w-[30rem]"
          />

          <div className="flex flex-row items-center justify-start mt-14 font-['poppins']  text-[1.438rem] leading-[3.125rem]   text-white">
            <button
              type="submit"
              disabled={loading}
              className="px-12 py-1 border-[2px] rounded-full "
            >
              {loading ? 'Wait...' : 'login'}
            </button>{' '}
            <p className="mx-4">or</p>
            <Link to="/register" className="underline cursor-pointer">
              Click here to Register
            </Link>
          </div>
        </form>
      </div>
      {error && <div>{error}</div>}
    </>
  );
};

export default Login;
