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
import ApiKey from "@/models/ApiKey";

export const APITable = ({
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

  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);

  useEffect(() => {
    axios
      .get(`/projects/${projectId}/apiKey`)
      .then((response) => {
        setApiKeys(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [projectId, mutate]);

  return (
    <TableCard.Root className="w-full">
      <TableCard.Header title="API Keys" />
      <Table
        aria-label="API Keys"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <Table.Header>
          <Table.Head
            id="key"
            label="Key"
            isRowHeader
          />
          <Table.Head id="createdAt" label="Created At" />
        </Table.Header>

        <Table.Body items={apiKeys}>
          {(item) => (
            <Table.Row id={item._id}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="whitespace-nowrap">
                    <p className="text-sm font-medium text-primary font-mono">
                      {item.key}
                    </p>
                  </div>
                </div>
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

      {/* <PaginationPageMinimalCenter
        page={page}
        total={Math.ceil(total/per)}
        className="px-4 py-3 md:px-6 md:pt-3 md:pb-4"
      /> */}
    </TableCard.Root>
  );
};
