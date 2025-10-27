import { BarChartSquare02, LogOut01 } from "@untitledui/icons";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { DashboardTable } from "@/components/custom/dashboard-table";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { DashboardTester } from "@/components/custom/dashboard-tester";
import { DashboardUsage } from "@/components/custom/dashboard-usage";
import axios from "axios";
import Project from "@/models/Project";
import { cx } from "@/utils/cx";

export const Dashboard = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [mutateCount, setMutateCount] = useState<number>(0);

  useEffect(() => {
    axios.get("/auth/user", {
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    })
    .then((response) => {
      setProjects(response.data.projects);
    })
    .catch((err) => {
      console.error(err);
      // navigate("/login?action=expired");
    });
  }, [cookies.get("token")]);

  return (
    <div className={cx("flex flex-col bg-primary lg:flex-row")}>
      <SidebarNavigationSimple
        activeUrl="/dashboard"
        items={[
          {
            label: "Dashboard",
            href: "/dashboard",
            icon: BarChartSquare02,
          },
        ]}
        footerItems={[
          {
            label: "Logout",
            href: "/login?action=logout",
            icon: LogOut01,
          },
        ]}
      />

      <main className={cx("min-w-0 flex-1 bg-primary pt-8 pb-12")}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 px-4 lg:px-8">
            <div className="relative flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-0.5 lg:gap-1">
                  <h1 className="text-xl font-semibold text-primary lg:text-display-xs">
                    Dashboard
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-4 lg:flex-row lg:gap-8 lg:px-8 relative max-w-[calc(100%-120px)]">
            {projects[0] && (
              <DashboardUsage projectId={projects[0]._id} mutate={mutateCount} />
            )}
          </div>

          <div className="flex flex-col gap-6 px-4 lg:flex-row lg:gap-8 lg:px-8 relative max-w-[calc(100%-120px)]">
            {projects[0] && (
              <DashboardTester projectId={projects[0]._id} onSuccess={() => setMutateCount(mutateCount + 1)} />
            )}
          </div>

          <div className="flex flex-col gap-6 px-4 lg:flex-row lg:gap-8 lg:px-8 relative max-w-[calc(100%-120px)]">
            {projects[0] && (
              <DashboardTable projectId={projects[0]._id} mutate={mutateCount} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
