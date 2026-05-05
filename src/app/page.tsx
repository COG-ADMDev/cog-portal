import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex flex-col">
            <span className="font-sans text-sm font-semibold tracking-tight text-foreground">
              Command Ops Group
            </span>
            <span className="font-sans text-xs text-muted-foreground">
              Client Portal
            </span>
          </div>
          <Button variant="outline" size="sm" disabled>
            Sign in
          </Button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <h1>Client portal coming online.</h1>

          <p className="text-body mt-8 max-w-2xl">
            This is the secure operating surface for Command Ops Group LLC
            engagements. Authenticated stakeholders will see live task status,
            active projects, scheduled deliverables, and downloadable reports —
            scoped to your engagement only.
          </p>

          <p className="text-secondary mt-4 max-w-2xl">
            Sign-in is opening for whitelisted stakeholders soon. If you are
            expecting access, you will receive an invitation to the email on
            file.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-md border border-border bg-card p-6">
            <h3 className="mb-3">Task visibility</h3>
            <p className="text-secondary">
              Real-time status on every workstream relevant to your engagement.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-6">
            <h3 className="mb-3">Reports &amp; deliverables</h3>
            <p className="text-secondary">
              Monthly progress reports and signed documents available for
              download.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-6">
            <h3 className="mb-3">Action items</h3>
            <p className="text-secondary">
              See what is pending on your side and prioritize accordingly.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-sans text-xs text-muted-foreground">
            © Command Ops Group LLC
          </span>
          <span className="font-sans text-xs text-muted-foreground">
            commandopsgroup.com
          </span>
        </div>
      </footer>
    </div>
  );
}
