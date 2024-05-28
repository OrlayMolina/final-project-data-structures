import { DataRegister } from "../../classes.typescript/interfaces/CustomPropsModal";
import { selectSellerLogged, setSellerLogged } from "../../redux/features/social.media/social.media.slice";
import { useSelector } from "react-redux";
import MessageConfirmation from "./MessageConfirmation";
import { createRef, RefObject, useState, useEffect } from "react";
import Alert from "./Alert";
import { useAuth } from "../../hooks/useAuth";

    export default function PersonalInformation() {

    const userLogged = useSelector(selectSellerLogged);

    const nameRef: RefObject<HTMLInputElement> = createRef();
    const lastnameRef: RefObject<HTMLInputElement> = createRef();
    const IDRef: RefObject<HTMLInputElement> = createRef();
    const addressRef: RefObject<HTMLInputElement> = createRef();
    const usernameRef: RefObject<HTMLInputElement> = createRef();
    const passwordRef: RefObject<HTMLInputElement> = createRef();
    const passwordConfirmationRef: RefObject<HTMLInputElement> = createRef();

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);
    const { register } = useAuth({middleware: 'auth', url: '/wallpost'});

    useEffect(() => {
        if (userLogged) {
            if (nameRef.current) nameRef.current.value = userLogged.name || '';
            if (lastnameRef.current) lastnameRef.current.value = userLogged.lastName || '';
            if (IDRef.current) IDRef.current.value = userLogged.ID || '';
            if (addressRef.current) addressRef.current.value = userLogged.address || '';
            if (usernameRef.current) usernameRef.current.value = userLogged.userName || '';
        }
    }, [userLogged]);

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

        register(datos, setErrors, setSuccess);
    };

    return (
        <>
            <div className='border-2 border-slate-200'>
        
            </div>

            <div className="flex flex-col mx-6 md:mx-16 lg:mx-32 mb-12">
                <h1 className="text-4xl font-black mt-8 mb-5 text-center">Personal Information</h1>

                <div className="bg-white shadow-xl rounded-xl mt-8 px-5">
                    <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 p-5"
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
                        value="Update your Info"
                        className="bg-teal-600 hover:bg-teal-800 text-white rounded-xl shadow-md mt-6 p-3 px-8 uppercase font-bold cursor-pointer w-60 h-12 mx-auto"
                    />
                    </form>
                </div>
            </div>
        </>
    )
}