import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
const cookies = new Cookies();

export const RegisterSimple = () => {
  const [password, setPassword] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24 w-[400px]">
      <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative">
            <BackgroundPattern
              pattern="grid"
              className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            />
            <BackgroundPattern
              pattern="grid"
              size="md"
              className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
            />
            {/* <UntitledLogoMinimal className="relative z-10 size-12 max-md:hidden" />
            <UntitledLogoMinimal className="relative z-10 size-10 md:hidden" /> */}
          </div>
          <div className="z-10 flex flex-col gap-2 md:gap-3">
            <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">
              Create an account
            </h1>
            <p className="text-md text-tertiary">
              Welcome! Please enter your details.
            </p>
          </div>
        </div>

        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            setRegisterLoading(true);
            const data = Object.fromEntries(new FormData(e.currentTarget));
            console.log("Form data:", data);
            try {
              const response = await axios.post("/auth/register", data);
              axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
              cookies.set("token", response.data.token, { path: "/", domain: "" });
              navigate("/dashboard");
            } catch (err) {
              console.error(err);
            } finally {
              setRegisterLoading(false);
            }
          }}
          className="z-10 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-5">
            <Input
              isRequired
              hideRequiredIndicator
              label="First Name"
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              size="md"
            />
            <Input
              isRequired
              hideRequiredIndicator
              label="Last Name"
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              size="md"
            />
            <Input
              isRequired
              hideRequiredIndicator
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              size="md"
            />
            <Input
              isRequired
              hideRequiredIndicator
              label="Password"
              type="password"
              name="password"
              size="md"
              placeholder="Create a password"
              onChange={setPassword}
              minLength={8}
            />
          </div>

          <div className="z-10 flex flex-col gap-4">
            <Button type="submit" size="lg" isLoading={registerLoading} showTextWhileLoading>
              Get started
            </Button>
          </div>
        </Form>

        <div className="flex justify-center gap-1 text-center">
          <span className="text-sm text-tertiary">
            Already have an account?
          </span>
          <Button href="/login" color="link-color" size="md">
            Log in
          </Button>
        </div>
      </div>
    </section>
  );
};
