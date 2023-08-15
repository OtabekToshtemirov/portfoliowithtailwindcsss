import {useForm} from 'react-hook-form';

export default function Contacts() {
    const {
        register,

        reset,
        handleSubmit, formState: {errors}
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(errors)
        reset();
    }

    



    return (
        <form
            className="container flex flex-col w-3/4 mx-auto my-10 p-10 bg-gray-100 rounded-lg shadow-2xl"
            onSubmit={handleSubmit(onSubmit)}>
            <input
                className={`${errors.Name ? "border-red-500" : ''} w-full p-2 mb-4 rounded focus:outline-none focus:shadow-outline`}
                type="text" placeholder="Name" {...register("Name", {required: true})} />
            <input
                className={`${errors.Company ? "border-red-500" : ''} w-full p-2 mb-4 rounded focus:outline-none focus:shadow-outline`}
                type="text" placeholder="Company" {...register("Company", {required: true})} />
            <input
                className={`${errors.Email ? "border-red-500" : ''} w-full p-2 mb-4 rounded focus:outline-none focus:shadow-outline`}
                type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input
                className={`${errors.Mobilenumber ? "border-red-500" : ''} w-full p-2 mb-4 rounded focus:outline-none focus:shadow-outline`}
                type="tel" placeholder="Mobile number" {...register("Mobilenumber", {
                required: true,
                minLength: 6,
                maxLength: 15
            })} />
            <textarea
                className={`${errors.Message ? "border-red-500" : ''} w-full p-2 mb-4 rounded focus:outline-none  focus:shadow-outline`}
                {...register} />

            <input type="submit"/>
        </form>
    );
}