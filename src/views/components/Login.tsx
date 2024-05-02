import { Link } from "react-router-dom";
import Alert from "./Alert";
import { createRef, RefObject, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { DataLogin } from "../../classes.typescript/interfaces/CustomPropsModal";

export default function Login() {
  const emailRef: RefObject<HTMLInputElement> = createRef();
  const passwordRef: RefObject<HTMLInputElement> = createRef();

  const [errors, setErrors] = useState<string[]>([]);
  const { login } = useAuth({middleware: 'guest', url: '/'});

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const datos: DataLogin = {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };

    login(datos, setErrors);

  };

  return (
    <>
      <h1 className="text-4xl font-black mb-5">Log In</h1>
      <p>To create an order you must log in</p>

      <div className="bg-white shadow-lg rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit} noValidate>
          {errors
            ? errors.map((error, i) => <Alert key={i}>{error}</Alert>)
            : null}
          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-3 bg-gray-50"
              name="email"
              placeholder="Your Email"
              ref={emailRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-slate-800">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password"
              placeholder="Your Password"
              ref={passwordRef}
            />
          </div>

          <input
            type="submit"
            value="Log in"
            className="bg-teal-600 hover:bg-teal-800 text-white w-full rounded-xl shadow-md mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/account/register">
          You do not have an account?, {""}
          <span className="font-medium">Create an Account</span>
        </Link>
      </nav>
    </>
  );
}
