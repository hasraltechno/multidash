// Component docs registry. `slug` matches the file in packages/ui/src/components and
// each example id matches a file in components/docs/examples/<slug>/.

export type ComponentDoc = {
  slug: string
  name: string
  description: string
  /** "full" for wide components (tables) — previews fill the box instead of centering. */
  layout?: "centered" | "full"
  examples: { id: string; title: string; description?: string }[]
}

export const componentDocs: ComponentDoc[] = [
  {
    slug: "accordion",
    name: "Accordion",
    description: "Vertically stacked sections that expand to reveal content.",
    examples: [
      { id: "basic", title: "Single", description: "Only one section open at a time; collapsible lets it close fully." },
      { id: "multiple", title: "Multiple open" },
    ],
  },
  {
    slug: "alert",
    name: "Alert",
    description: "A callout that draws attention to important information.",
    examples: [
      { id: "basic", title: "Default" },
      { id: "variants", title: "Variants", description: "Always pair the color with an icon and a clear title." },
    ],
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing a user.",
    examples: [
      { id: "basic", title: "Image and fallback", description: "The fallback shows while the image loads or if it fails." },
      { id: "group", title: "Stacked group" },
    ],
  },
  {
    slug: "badge",
    name: "Badge",
    description: "A small label for statuses, counts and categories.",
    examples: [
      { id: "variants", title: "Variants" },
      { id: "with-icon", title: "With icon", description: "Pair status colors with an icon so meaning never relies on color alone." },
    ],
  },
  {
    slug: "button",
    name: "Button",
    description: "Triggers an action. Twelve variants — solid, soft, outline, ghost and link — five sizes, and can render as a link.",
    examples: [
      { id: "variants", title: "Variants" },
      { id: "status", title: "Status colors", description: "Solid success, warning and destructive buttons for confirm and danger actions." },
      { id: "soft", title: "Soft", description: "A tinted background with colored text — for secondary actions that still carry meaning." },
      { id: "sizes", title: "Sizes" },
      { id: "with-icon", title: "With icon and loading state" },
      { id: "as-link", title: "As a link", description: "Use asChild to apply button styles to another element." },
    ],
  },
  {
    slug: "card",
    name: "Card",
    description: "A container that groups related content and actions — from simple panels to image-rich product, article and profile cards.",
    examples: [
      { id: "basic", title: "Header, content and footer" },
      { id: "with-action", title: "With header action" },
      { id: "image-top", title: "Article with cover image", description: "Remove the top padding with pt-0 and let the image bleed to the edges with overflow-hidden." },
      { id: "product", title: "Product", description: "Badge and wishlist button positioned over the image." },
      { id: "horizontal", title: "Horizontal", description: "Image beside the content from the sm breakpoint; stacked on mobile." },
      { id: "image-overlay", title: "Image overlay", description: "A gradient keeps text readable on top of any photo." },
      { id: "profile", title: "Profile with cover", description: "A negative margin pulls the avatar up over the cover image." },
    ],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "A control that toggles between checked and unchecked.",
    examples: [{ id: "basic", title: "With label" }],
  },
  {
    slug: "data-table",
    layout: "full",
    name: "Data Table",
    description: "A full-featured table built on TanStack Table v9: search, faceted filters, sorting, column visibility, row selection and pagination.",
    examples: [
      { id: "basic", title: "Sorting and search", description: "Define columns with createDataTableColumnHelper and pass your data." },
      { id: "advanced", title: "Filters, selection and actions", description: "Faceted filters need filterFn: \"oneOf\" on the column. The toolbar prop receives the table for bulk actions." },
    ],
  },
  {
    slug: "dialog",
    name: "Dialog",
    description: "A modal window that focuses the user on a single task.",
    examples: [
      { id: "basic", title: "Form dialog" },
      { id: "confirm", title: "Confirmation", description: "Hide the close button so the user makes an explicit choice." },
    ],
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description: "A menu of actions or options, opened by a button.",
    examples: [
      { id: "basic", title: "Actions menu" },
      { id: "radio-group", title: "Radio group", description: "A controlled single-choice menu." },
    ],
  },
  {
    slug: "input",
    name: "Input",
    description: "A text field for forms and search.",
    examples: [
      { id: "basic", title: "With label and hint" },
      { id: "with-icon", title: "With icon" },
      { id: "states", title: "Invalid, disabled and file", description: "Set aria-invalid to show the error style." },
    ],
  },
  {
    slug: "label",
    name: "Label",
    description: "An accessible label associated with a form control.",
    examples: [{ id: "basic", title: "Basic" }],
  },
  {
    slug: "native-select",
    name: "Native Select",
    description: "A styled native <select> — fully accessible and mobile-friendly.",
    examples: [{ id: "basic", title: "Basic" }],
  },
  {
    slug: "popover",
    name: "Popover",
    description: "Rich content in a floating panel, anchored to a trigger.",
    examples: [
      { id: "basic", title: "Settings form" },
      { id: "share", title: "Share link" },
    ],
  },
  {
    slug: "progress",
    name: "Progress",
    description: "Shows how far a task has progressed.",
    examples: [
      { id: "basic", title: "With label" },
      { id: "custom-color", title: "Custom colors" },
    ],
  },
  {
    slug: "select",
    name: "Select",
    description: "A custom dropdown for choosing one option from a list.",
    examples: [
      { id: "basic", title: "With label" },
      { id: "groups", title: "Groups and separators" },
    ],
  },
  {
    slug: "separator",
    name: "Separator",
    description: "Visually separates content, horizontally or vertically.",
    examples: [{ id: "basic", title: "Horizontal and vertical" }],
  },
  {
    slug: "sheet",
    name: "Sheet",
    description: "A panel that slides in from the edge of the screen.",
    examples: [
      { id: "basic", title: "Form in a sheet" },
      { id: "sides", title: "Sides" },
    ],
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    description: "A placeholder shown while content is loading.",
    examples: [
      { id: "basic", title: "List item" },
      { id: "card", title: "Card" },
    ],
  },
  {
    slug: "switch",
    name: "Switch",
    description: "A toggle for on/off settings.",
    examples: [{ id: "basic", title: "Settings rows" }],
  },
  {
    slug: "table",
    layout: "full",
    name: "Table",
    description: "A responsive table for tabular data.",
    examples: [{ id: "basic", title: "Invoices" }],
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "Switch between related views without leaving the page.",
    examples: [{ id: "basic", title: "Basic" }],
  },
  {
    slug: "textarea",
    name: "Textarea",
    description: "A multi-line text field that grows with its content.",
    examples: [{ id: "basic", title: "With label" }],
  },
  {
    slug: "toast",
    name: "Toast",
    description: "Brief, non-blocking notifications. Powered by Sonner.",
    examples: [
      { id: "basic", title: "Basic", description: "Mount <Toaster /> once in your root layout, then call toast() anywhere." },
      { id: "types", title: "Types, actions and promises" },
    ],
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "A short hint shown on hover or keyboard focus.",
    examples: [{ id: "basic", title: "Basic" }],
  },
]

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug)
}
