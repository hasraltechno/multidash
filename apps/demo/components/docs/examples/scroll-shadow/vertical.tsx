import { ScrollShadow } from "@multidash/ui/components/scroll-shadow"

const releases = Array.from({ length: 24 }, (_, i) => ({ version: `v2.${24 - i}.0`, day: 24 - i }))

export default function ScrollShadowVertical() {
  return (
    // The border goes on a wrapper: the fade applies to everything inside the scroll area, borders included.
    <div className="w-full max-w-xs rounded-lg border">
      <ScrollShadow as="ul" className="h-72 space-y-1 p-2" aria-label="Releases">
        {releases.map((release) => (
          <li key={release.version} className="flex justify-between rounded-md px-3 py-2 text-sm hover:bg-accent">
            <span className="font-medium">{release.version}</span>
            <span className="text-muted-foreground">Oct {release.day}</span>
          </li>
        ))}
      </ScrollShadow>
    </div>
  )
}
