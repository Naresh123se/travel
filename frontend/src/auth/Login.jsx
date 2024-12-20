import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/app/slices/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const login = async (data) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (data.email === "test@gmail.com") {
          resolve({ message: "Login successful!", data });
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000)
    );
  };

  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      dispatch(loginSuccess(res.data));
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className=" flex items-center h-screen justify-center  ">
      <Card className=" p-4 shadow-lg ">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Submit Your Details
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password", { required: "Name is required" })}
                placeholder="Enter your name"
                className="mt-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="w-full border bg-blue-400 text-wh">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
