import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import { Accordion, AccordionItem, TextContentHeading } from "primitives";

export function FAQs() {
  const { isMobile } = useMediaQuery();
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";
  return (
    <Section padding={sectionPadding} variant="stroke">
      <Flex container direction="column" alignSecondary="stretch" gap={flexGap}>
        <TextContentHeading
          align="center"
          heading="Heading"
          subheading="Subheading"
        />
        <Flex container type="third" alignPrimary="center">
          <FlexItem size="major">
            <Accordion>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
              </AccordionItem>
            </Accordion>
          </FlexItem>
        </Flex>
      </Flex>
    </Section>
  );
}
