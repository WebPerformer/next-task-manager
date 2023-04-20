import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = { email, password };
    console.log(user);
  };

  return (
    <div className="bg-[#18181B] flex justify-center items-center h-screen w-full">
      <div className="flex flex-col gap-10 w-full max-w-xl px-5 sm:px-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl text-white font-bold">Hello Again! 👋</h1>
          <p className="text-xl text-gray-200">
            Welcome back to your digital world.
          </p>
        </div>
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg text-white" htmlFor="email">
              Username or email address
            </label>
            <input
              className="py-2 px-4 text-white w-full rounded-lg bg-transparent border border-[#393941] focus:outline-none"
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg text-white" htmlFor="password">
              Password
            </label>
            <input
              className="py-2 px-4 text-white w-full rounded-lg bg-transparent border border-[#393941] focus:outline-none"
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            className="text-base text-gray-200 border-b w-fit"
            href={"#"}
            passHref
          >
            Forgot Password?
          </Link>
          <div className="flex justify-center w-full mt-2">
            <button
              className="py-2 px-3 text-black bg-[#2AE98C] rounded-lg w-full"
              type="submit"
            >
              Sign in
            </button>
          </div>
          <p className="text-base text-gray-200">
            Don't have any account?{" "}
            <Link
              className="text-[#2AE98C] border-b border-[#2AE98C]"
              href={"#"}
            >
              Stay Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
