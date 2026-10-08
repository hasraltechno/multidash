export default function TypographyList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <ul className="ml-6 list-disc space-y-2 [&>li]:pl-1">
        <li>Light and dark mode</li>
        <li>Accessible charts</li>
        <li>Responsive layout</li>
      </ul>
      <ol className="ml-6 list-decimal space-y-2 [&>li]:pl-1">
        <li>Clone the repository</li>
        <li>Install dependencies</li>
        <li>Run the dev server</li>
      </ol>
    </div>
  )
}
