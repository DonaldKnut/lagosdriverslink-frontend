## Prompt: Fix homepage to show Processing Fees and Salary highlights directly under Hero

You are working on a Next.js App Router project. The homepage must show two new sections immediately under the hero:

- ProcessingFeesHighlight: prominent “One-time Processing Fee (Not Salary)” with:
  - Managed Service Plan — ₦50,000
  - Direct Employment Plan — ₦70,000
- SalaryPlansHighlight: bold monthly salaries:
  - Mon–Fri — ₦175,000
  - Mon–Sat — ₦195,000
  - Mon–Sun — ₦220,000

Context

- Repo root: `/Users/user/Desktop/lagosdrivers-frontend`
- App Router with a route group: `app/(site)/`
- Expected homepage file: `app/(site)/page.tsx` (verify this is the route actually rendering `/`)
- Highlight components should exist (or be created) at:
  - `app/components/ProcessingFeesHighlight.tsx`
  - `app/components/SalaryPlansHighlight.tsx`
- These two sections must render immediately under `HeroSection` on the true landing page and be visible regardless of CMS status.

Required actions

1. Verify the actual landing page
   - Confirm the real landing page is `app/(site)/page.tsx` and that there is no `app/page.tsx` overshadowing it.
   - If `app/page.tsx` exists and is the actual homepage, either remove it or also add the highlight components there directly under the hero.

2. Ensure highlight components exist and are client components
   - If missing, create:
     - `app/components/ProcessingFeesHighlight.tsx` ("use client") with header: “One-time Processing Fee (Not Salary)” and the exact bullet lists/prices below.
     - `app/components/SalaryPlansHighlight.tsx` ("use client") with header: “Salary Bands (Separate from Processing Fee)” and the exact salaries below.

   ProcessingFeesHighlight content (exact):
   - Managed Service Plan — ₦50,000
     - LagosDriversLink handles all HR administration
     - Driver remains our qualified staff
     - Includes full training & verification
     - Replacement at subsidized fee
     - Note: Businesses wanting worry-free driver management
   - Direct Employment Plan — ₦70,000
     - Driver becomes your direct employee
     - Complete background checks documentation
     - Full control over driver management
     - Thoroughly verified & background-checked drivers
     - Note: Those wanting complete employment control

   SalaryPlansHighlight content (exact):
   - Mon–Fri — ₦175,000 (Standard weekday placement)
   - Mon–Sat — ₦195,000 (Extended to Saturdays) [mark as Most Requested]
   - Mon–Sun — ₦220,000 (Full week placement)

3. Insert highlights directly under the hero on the homepage
   - Edit the homepage render order to:
     - `<HeroSection ... />`
     - `<ProcessingFeesHighlight />`
     - `<SalaryPlansHighlight />`
     - then existing sections (FreerowSection, promos, etc.)
   - Ensure imports in `app/(site)/page.tsx`:
     ```ts
     import ProcessingFeesHighlight from "../components/ProcessingFeesHighlight";
     import SalaryPlansHighlight from "../components/SalaryPlansHighlight";
     ```

4. Avoid visibility blockers and caching
   - In `app/(site)/page.tsx`, force dynamic rendering and disable ISR cache so changes show immediately:
     ```ts
     export const revalidate = 0;
     export const dynamic = "force-dynamic";
     ```
   - Remove any early return that shows an error UI if CMS fetch fails. The page must render regardless of CMS data.
   - Keep all CMS-driven props optional (use optional chaining) so highlights always render.

5. Confirm the `(site)` group layout is active
   - `app/(site)/layout.tsx` should wrap the homepage. No change needed unless a different layout is taking precedence.

6. Rebuild and hard refresh
   - Restart dev server, hard refresh (Cmd-Shift-R), and confirm the two highlight sections appear immediately under the hero.

7. Acceptance criteria
   - Navigating to `/` shows the hero, then immediately:
     - “One-time Processing Fee (Not Salary)” with ₦50,000 / ₦70,000 plans and bullet points.
     - “Salary Bands (Separate from Processing Fee)” with ₦175k / ₦195k / ₦220k.
   - Sections render even if CMS data fails.
   - No TypeScript or ESLint errors.

Useful quick checks

- `rg "export default async function HomePage" app -n`
- `rg "ProcessingFeesHighlight" app -n`
- `rg "SalaryPlansHighlight" app -n`
- Confirm import lines and component order inside `app/(site)/page.tsx` JSX.

