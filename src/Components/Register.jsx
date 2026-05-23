import icon from "../assets/CodeLensAI-Icon.svg";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="loginForm flex flex-col items-center justify-center sm:border-[#E0E0E0] sm:border sm:p-8 sm:py-15 rounded-lg sm:w-126 w-[80%] sm:bg-[#FFFFFF]">
        <img src={icon} alt="" className="h-16 my-5"/>
        <h1 className="text-lg font-bold">Create Account</h1>
        <h3 className="text-[#888780]">Start reviewing your code</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[90%] gap-3 mt-10">


            {/* Name */}
          <label htmlFor="">Name</label>
          <input type="text" {...register("email", { required: true })} className="border border-[#E0E0E0] p-2 rounded-md focus:outline-none focus:ring-0 focus:border-[#E0E0E0]"/>
          {errors.email && <p>{errors.email.message}</p>}


            {/* Email */}
          <label htmlFor="">Email</label>
          <input type="email" {...register("email", { required: true })} className="border border-[#E0E0E0] p-2 rounded-md focus:outline-none focus:ring-0 focus:border-[#E0E0E0]"/>
          {errors.email && <p>{errors.email.message}</p>}


            {/* Password */}
          <label htmlFor="">Password</label>
          <input type="password" {...register("email", { required: true })} className="border border-[#E0E0E0] p-2 rounded-md focus:outline-none focus:ring-0 focus:border-[#E0E0E0]"/>
          {errors.password && <p>{errors.password.message}</p>}

          <button type="submit" className=" bg-[#185FA5] text-white rounded-md py-2 mt-5">Create Account</button>
        </form>
        <h3 className="py-4 text-sm">Already have an Account? <span className="text-[#185FA5]">Login</span></h3>
      </div>
    </div>
  );
};

export default Register;
