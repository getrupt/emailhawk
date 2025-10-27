import { Copy01, Edit01, Trash01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Input } from "@/components/base/input/input";
import { Form } from "../base/form/form";
import axios from "axios";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import useSWR from "swr";
import Project from "@/models/Project";
import { useEffect, useState } from "react";
import VerifyUsage from "@/models/VerifyUsage";

export const DashboardUsage = ({ projectId, mutate }: { projectId: Project["_id"], mutate?: number }) => {
  const [verifyUsage, setVerifyUsage] = useState<VerifyUsage | undefined>();

  useEffect(() => {
    axios.get(`/projects/${projectId}/verifyUsage`)
    .then((response) => {
      setVerifyUsage(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [projectId, mutate]);

  return (
    <div className="relative flex flex-col gap-4 border rounded-xl border-secondary px-4 py-5 md:flex-row md:px-6 items-center w-full">
      <div className="flex flex-col gap-0.5 w-[360px]">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-primary">API Usage</h2>
        </div>
        <p className="text-sm text-tertiary">
          Track your API usage and stay within your limits.
        </p>
      </div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));
          console.log("Form data:", data);
        }}
        className="z-10 flex flex-grow flex-row gap-6 items-center"
      >
        <div className="flex flex-1 flex-col gap-0.5">
          <ProgressBar
            labelPosition="right"
            value={(verifyUsage?.count ?? 0) / 500 * 100}
            valueFormatter={(value) => `${verifyUsage?.count ?? 0}/500 (${value.toFixed(1)}%)`}
          />
        </div>
        <div className="flex gap-3">
          <Button type="submit" size="md">
            Add API Usage
          </Button>
        </div>
      </Form>
    </div>
  );
};
