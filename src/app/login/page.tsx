"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { selectIsAuthenticated } from "@/features/auth/authSelectors";
import { Input } from "@/components/ui/input";
import { IoIosStats } from "react-icons/io";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthinticated = useSelector(selectIsAuthenticated);
  const [username, setUsername] = useState("admin@demo.com");
  const [password, setPassword] = useState("password123");

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };
  useEffect(() => {
    if (isAuthinticated) {
      router.replace("/dashboard");
    }
  }, [isAuthinticated, router]);

  if (isAuthinticated) return null;
  return (
    <section className="min-h-screen bg-background w-full flex items-center justify-center ">
      <div className="flex flex-col justify-center items-center w-[90%] md:w-[30%] m-auto gap-4 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex w-16 h-16 rounded-2xl bg-primary mb-4">
            <IoIosStats className="text-primary-foreground w-10 h-10 m-auto" />
          </div>
          <h1 className="text-3xl font-bold ">Data Pulse</h1>
          <p className="text-muted-foreground">Analytics Dashboard</p>
        </div>
        <div className="flex flex-col gap-4 bg-primary-foreground w-full rounded-xl shadow-sm border p-6">
          <div>
            <strong className="text-[25px]">sign in</strong>
            <p className="text-muted-foreground">
              Enter your credentials to access the dashboard
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <p>Email</p>
              <Input
                className="h-11"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <p>Password</p>
              <Input
                className="h-11"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="cursor-pointer bg-primary rounded-lg text-primary-foreground h-12"
              onClick={handleLogin}
            >
              Sign in
            </button>
            <small className="text-muted-foreground text-center">
              Demo: admin@demo.com / password123
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
