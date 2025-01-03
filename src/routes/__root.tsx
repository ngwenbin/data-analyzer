import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-full grow p-4">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </SidebarProvider>
    </>
  ),
});
