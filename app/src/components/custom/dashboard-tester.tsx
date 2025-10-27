import { Copy01, Edit01, Trash01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Input } from "@/components/base/input/input";
import { Form } from "../base/form/form";
import axios from "axios";
import Cookies from "universal-cookie";
import Project from "@/models/Project";
import { useEffect, useState } from "react";
import ApiKey from "@/models/ApiKey";

export const DashboardTester = ({ projectId, onSuccess }: { projectId: Project["_id"], onSuccess?: () => void }) => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);

  useEffect(() => {
    axios.get(`/projects/${projectId}/apiKey`)
    .then((response) => {
      setApiKeys(response.data as ApiKey[]);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [projectId]);

  return (
    <div className="relative flex flex-col gap-4 border rounded-xl border-secondary bg-primary px-4 py-5 md:flex-row md:px-6 items-center w-full">
      <div className="flex flex-col gap-0.5 w-[360px]">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-primary">Verify Email</h2>
        </div>
        <p className="text-sm text-tertiary">
          Test your email verification API with a real email address.
        </p>
      </div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));
          console.log("Form data:", data);
          try {
            const response = await axios.post(`/verify`, {
              email: data.email,
            }, {
              headers: {
                Authorization: `Bearer ${apiKeys[0].key}`,
              },
            });
            console.log("Response:", response.data);
            onSuccess?.();
          } catch (err) {
            console.error(err);
          }
        }}
        className="z-10 flex flex-row gap-6 items-center flex-1"
      >
        <div className="flex flex-1 flex-col gap-0.5">
          <Input
            isRequired
            hideRequiredIndicator
            type="email"
            name="email"
            placeholder="Enter an email"
            size="md"
          />
        </div>
        <div className="flex gap-3">
          <Button type="submit" size="md">Verify</Button>
        </div>
      </Form>
    </div>
  );
};
