import type { ReactNode } from "react";

import { PageFrame } from "@/components/print/page-frame";
import { PAGES, TOTAL, type PageId } from "@/content/pages";

import { Cover } from "@/components/pages/cover";
import { Identity } from "@/components/pages/identity";
import { Positioning } from "@/components/pages/positioning";
import { Team } from "@/components/pages/team";
import { Experience } from "@/components/pages/experience";
import { Divider1 } from "@/components/pages/divider-1";
import { Services } from "@/components/pages/services";
import { Ai } from "@/components/pages/ai";
import { Collaboration } from "@/components/pages/collaboration";
import { Quality } from "@/components/pages/quality";
import { Divider2 } from "@/components/pages/divider-2";
import { Fields } from "@/components/pages/fields";
import { Projects } from "@/components/pages/projects";
import { Clients } from "@/components/pages/clients";
import { Legal } from "@/components/pages/legal";
import { Why } from "@/components/pages/why";

/* id → page body. Order + theme + footer come from content/pages.ts (single source of truth). */
const PAGE_BODY: Record<PageId, () => ReactNode> = {
  cover: Cover,
  identity: Identity,
  positioning: Positioning,
  team: Team,
  experience: Experience,
  "divider-1": Divider1,
  services: Services,
  ai: Ai,
  collaboration: Collaboration,
  quality: Quality,
  "divider-2": Divider2,
  fields: Fields,
  projects: Projects,
  clients: Clients,
  legal: Legal,
  why: Why,
};

export default function Home() {
  return (
    <main>
      {PAGES.map((p, i) => {
        const Body = PAGE_BODY[p.id];
        return (
          <PageFrame
            key={p.id}
            theme={p.theme}
            ambient={p.ambient}
            watermark={p.watermark}
            wave={p.wave}
            footer={p.noFooter ? null : { label: p.label, page: i + 1, total: TOTAL }}
          >
            <Body />
          </PageFrame>
        );
      })}
    </main>
  );
}
