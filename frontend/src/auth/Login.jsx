import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust import based on your file structure
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { login, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Card className="max-w-md mx-auto p-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          Submit Your Details
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              {...login("name", { required: true })}
              placeholder="Enter your name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...login("email", { required: true })}
              placeholder="Enter your email"
              className="mt-1"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Login;
