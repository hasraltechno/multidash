// Component docs registry. `slug` matches the file in packages/ui/src/components and
// each example id matches a file in components/docs/examples/<slug>/.

export type ComponentDoc = {
  slug: string
  name: string
  description: string
  examples: { id: string; title: string; description?: string }[]
}

export const componentDocs: ComponentDoc[] = [
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
    description: "Triggers an action. Six variants, five sizes, and can render as a link.",
    examples: [
      { id: "variants", title: "Variants" },
      { id: "sizes", title: "Sizes" },
      { id: "with-icon", title: "With icon and loading state" },
      { id: "as-link", title: "As a link", description: "Use asChild to apply button styles to another element." },
    ],
  },
  {
    slug: "card",
    name: "Card",
    description: "A container that groups related content and actions.",
    examples: [
      { id: "basic", title: "Header, content and footer" },
      { id: "with-action", title: "With header action" },
    ],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "A control that toggles between checked and unchecked.",
    examples: [{ id: "basic", title: "With label" }],
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
    slug: "progress",
    name: "Progress",
    description: "Shows how far a task has progressed.",
    examples: [
      { id: "basic", title: "With label" },
      { id: "custom-color", title: "Custom colors" },
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
    slug: "tooltip",
    name: "Tooltip",
    description: "A short hint shown on hover or keyboard focus.",
    examples: [{ id: "basic", title: "Basic" }],
  },
]

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug)
}
