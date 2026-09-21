import { HomeLayout } from "fumadocs-ui/layouts/home";
import { PageForceField } from "@/components/page-force-field";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  const options = baseOptions();

  return (
    <PageForceField>
      <HomeLayout
        {...options}
        className="flex min-h-full flex-col"
        nav={{
          ...options.nav,
          transparentMode: "always",
        }}
      >
        {children}
      </HomeLayout>
    </PageForceField>
  );
}
