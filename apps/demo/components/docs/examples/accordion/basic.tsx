import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@multidash/ui/components/accordion"

export default function AccordionBasic() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is Multidash free?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Yes. The free version is MIT licensed — use it in personal and commercial projects.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Every component uses theme tokens, so light and dark mode work out of the box.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Yes. It follows the WAI-ARIA accordion pattern and works with the keyboard.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
