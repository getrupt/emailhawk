import { useEffect, useMemo, useState } from "react";
import { Edit01, Trash01, CheckCircle, XCircle } from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import {
  Table,
  TableCard,
  TableRowActionsDropdown,
} from "@/components/application/table/table";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeTypes } from "@/components/base/badges/badge-types";
import {
  Badge,
  type BadgeColor,
  BadgeWithDot,
} from "@/components/base/badges/badges";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import axios from "axios";
import Verify from "@/models/Verify";
import Project from "@/models/Project";

export const DashboardTable = ({
  projectId,
  mutate,
}: {
  projectId: Project["_id"];
  mutate?: number;
}) => {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "status",
    direction: "ascending",
  });

  const [verifications, setVerifications] = useState<Verify[]>([]);

  useEffect(() => {
    axios
      .get(`/projects/${projectId}/verify`)
      .then((response) => {
        setVerifications(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [projectId, mutate]);

  return (
    <TableCard.Root>
      <TableCard.Header title="Verifications" />
      <Table
        aria-label="Verifications"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <Table.Header>
          <Table.Head
            id="email"
            label="Email"
            isRowHeader
            className="w-full max-w-1/4"
          />
          <Table.Head id="domain" label="Domain" isRowHeader />
          <Table.Head id="status" label="Status" isRowHeader />
          <Table.Head id="regexp" label="Regexp" />
          <Table.Head id="smtp_server" label="SMTP Server" />
          <Table.Head id="smtp_check" label="SMTP Check" />
          <Table.Head id="mx_records" label="MX Records" />
          <Table.Head id="disposable" label="Disposable" />
          <Table.Head id="webmail" label="Webmail" />
          <Table.Head id="createdAt" label="Date" />
        </Table.Header>

        <Table.Body items={verifications}>
          {(item) => (
            <Table.Row id={item._id}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="whitespace-nowrap">
                    <p className="text-sm font-medium text-primary">
                      {item.email}
                    </p>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>{item.domain}</Table.Cell>
              <Table.Cell>
                <BadgeWithDot
                  type="pill-color"
                  color={item.status === "valid" ? "success" : item.status === "disposable" ? "warning" : "warning"}
                >
                  {item.status}
                </BadgeWithDot>
              </Table.Cell>
              <Table.Cell>
                {item.regexp ? (
                  <CheckCircle />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </Table.Cell>
              <Table.Cell>
                {item.smtp_server ? (
                  <CheckCircle />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </Table.Cell>
              <Table.Cell>
                {item.smtp_check ? (
                  <CheckCircle />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </Table.Cell>
              <Table.Cell>
                {item.mx_records ? (
                  <CheckCircle />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </Table.Cell>
              <Table.Cell>
                {item.disposable ? (
                  <CheckCircle className="text-red-500" />
                ) : (
                  <XCircle />
                )}
              </Table.Cell>
              <Table.Cell>
                {item.webmail ? (
                  <CheckCircle className="text-red-500" />
                ) : (
                  <XCircle />
                )}
              </Table.Cell>
              <Table.Cell>
                <div>
                  <span className="whitespace-nowrap">
                    {new Date(item.createdAt).toLocaleString(undefined, {
                      dateStyle: "medium",
                    })}
                  </span>
                  <span className="text-xs text-gray-500 block">
                    {new Date(item.createdAt).toLocaleString(undefined, {
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <PaginationPageMinimalCenter
        page={1}
        total={10}
        className="px-4 py-3 md:px-6 md:pt-3 md:pb-4"
      />
    </TableCard.Root>
  );
};
