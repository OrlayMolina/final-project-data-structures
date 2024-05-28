import { DataRegister } from "../../classes.typescript/interfaces/CustomPropsModal";
import { createRef, RefObject, useState } from "react";
import MessageConfirmation from "./MessageConfirmation";
import { useAuth } from "../../hooks/useAuth";
import Alert from "./Alert";
import { Link } from "react-router-dom";

/**
 * Component for user registration.
 * @returns {JSX.Element} The Register component.
 */
function Register() {
  const nameRef: RefObject<HTMLInputElement> = createRef();
  const lastnameRef: RefObject<HTMLInputElement> = createRef();
  const IDRef: RefObject<HTMLInputElement> = createRef();
  const addressRef: RefObject<HTMLInputElement> = createRef();
  const usernameRef: RefObject<HTMLInputElement> = createRef();
  const passwordRef: RefObject<HTMLInputElement> = createRef();
  const passwordConfirmationRef: RefObject<HTMLInputElement> = createRef();

  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const { register } = useAuth({middleware: 'guest', url: '/'});

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const datos: DataRegister = {
      name: nameRef?.current?.value,
      lastname: lastnameRef?.current?.value,
      ID: IDRef?.current?.value,
      address: addressRef?.current?.value,
      username: usernameRef?.current?.value,
      password: passwordRef?.current?.value,
      password_confirmation: passwordConfirmationRef?.current?.value,
    };

    register(datos);
  };

  return (
    <>
      <h1 className="text-4xl font-black mb-5">Create your Account</h1>
      <p>Create your Account by filling out the form</p>

      <div className="bg-white shadow-xl rounded-xl mt-10 px-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 p-5"
          noValidate
        >
          {errors
            ? errors.map((error, i) => <Alert key={i}>{error}</Alert>)
            : null}

          {success && (
            <MessageConfirmation>
              User created successfully{" "}
            </MessageConfirmation>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="text-slate-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-3 bg-gray-50"
              name="name"
              placeholder="Your Name"
              ref={nameRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastname" className="text-slate-800">
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              className="mt-2 w-full p-3 bg-gray-50"
              name="lastname"
              placeholder="Your Last Name"
              ref={lastnameRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="id" className="text-slate-800">
              ID:
            </label>
            <input
              type="text"
              id="id"
              className="mt-2 w-full p-3 bg-gray-50"
              name="id"
              placeholder="Your ID"
              ref={IDRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="text-slate-800">
              Address:
            </label>
            <input
              type="text"
              id="address"
              className="mt-2 w-full p-3 bg-gray-50"
              name="address"
              placeholder="Your Address"
              ref={addressRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="text-slate-800">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="mt-2 w-full p-3 bg-gray-50"
              name="username"
              placeholder="Your Username"
              ref={usernameRef}
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

          <div className="mb-4">
            <label htmlFor="password_confirmation" className="text-slate-800">
              Repeat Password:
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password_confirmation"
              placeholder="Repeat Password"
              ref={passwordConfirmationRef}
            />
          </div>

          <input
            type="submit"
            value="Create Account"
            className="bg-teal-600 hover:bg-teal-800 text-white w-full rounded-xl shadow-md mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/account/login">
          Do you already have an account?, {""}
          <span className="font-medium">Log in</span>
        </Link>
      </nav>
    </>
  );
}

export default Register;
