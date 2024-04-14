import React, { useRef } from 'react';
import useUserAPI from '../../hooks/useUserAPI';
import { Link } from 'react-router-dom';

// The Register component is a page that allows users to register for an account.
const Register = () => {
  const formRef = useRef(null);

  const { loading, error, registerUser } = useUserAPI();

  // The handleSubmit function is called when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('formRef   ', formRef);
    console.log('formRef.current.email  ', formRef.current.email.value);
    const formRefData = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
      confirmPassword: formRef.current.confirmPassword.value,
    };
    registerUser(formRefData);
  };

  return (
    <>
      <div className="w-[30rem]">
        <h1 className="text-[50px] leading-[73px] font-['poppins'] font-bold mb-14 text-white">
          Register Now!
        </h1>

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
              className="mb-7 rounded-full font-['poppins'] text-[25px] leading-[50px]  font-medium p-0.5 pl-10 text-[#083F46]  h-[3.4rem] w-[30rem]"
            />

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              className="mb-7 rounded-full font-['poppins'] text-[25px] leading-[50px]  font-medium p-0.5 pl-10 text-[#083F46]  h-[3.4rem] w-[30rem]"
            />

            <div className=" mt-10 font-['poppins']  text-[1.438rem] leading-[3.125rem]   text-white">
              <button
                disabled={loading}
                className="px-12 py-1 border-[2px] rounded-full "
              >
                {loading ? 'Submitting...' : 'register'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <div>{error}</div>}
      <Link
        to=".."
        className="font-['poppins']  text-[1.438rem] leading-[3.125rem]   text-white underline cursor-pointer mt-16 w-[30rem]"
      >
        {'< '}Back to login
      </Link>
    </>
  );
};

export default Register;
