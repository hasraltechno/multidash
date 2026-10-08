import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@multidash/ui/components/accordion"

// type="multiple" lets several sections stay open at once.
export default function AccordionMultiple() {
  return (
    <Accordion type="multiple" defaultValue={["shipping", "returns"]} className="w-full max-w-md">
      <AccordionItem value="shipping">
        <AccordionTrigger>Shipping</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Orders ship within 2 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Returns</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Return any item within 30 days for a full refund.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="warranty">
        <AccordionTrigger>Warranty</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          All products include a one-year warranty.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
