
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Contact</AccordionTrigger>
        <AccordionContent>
          Email me at {"blake.wilson@quantinuum.com"}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )

}
