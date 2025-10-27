import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { useSearchParams } from "react-router";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router";

export const LoginSimple = () => {
  const [searchParams] = useSearchParams();
  const queryAction = searchParams.get("action");
  const cookies = new Cookies();
  const navigate = useNavigate();

  if (queryAction === "logout") {
    cookies.remove("token", { path: "/", domain: "" });
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24 w-[400px]">
      <div className="relative z-10 mx-auto flex w-full flex-col gap-8 sm:max-w-90">
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
              Log in to your account
            </h1>
            <p className="self-stretch p-0 text-md text-tertiary">
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>

        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            console.log("Form data:", data);
            try {
              const response = await axios.post("/auth/login", data);
              cookies.set("token", response.data.token, { path: "/", domain: "" });
              navigate("/dashboard");
            } catch (err) {
              console.error(err);
            }
          }}
          className="z-10 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-5">
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
              placeholder="••••••••"
            />
          </div>

          {/* <div className="flex items-center">
            <Checkbox label="Remember for 30 days" name="remember" />

            <Button color="link-color" size="md" href="#" className="ml-auto">
              Forgot password
            </Button>
          </div> */}

          <div className="flex flex-col gap-4">
            <Button type="submit" size="lg">
              Sign in
            </Button>
          </div>
        </Form>

        <div className="z-10 flex justify-center gap-1 text-center">
          <span className="text-sm text-tertiary">Don't have an account?</span>
          <Button color="link-color" size="md" href="/register">
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};
