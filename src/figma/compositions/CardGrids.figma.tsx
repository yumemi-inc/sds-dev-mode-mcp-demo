import { figma } from "@figma/code-connect";
import { Flex, FlexItem, Section } from "layout";

figma.connect(Section, "<FIGMA_SECTIONS_CARD_GRID_ICON>", {
  props: {
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    padding: figma.enum("Platform", { Desktop: "1200", Mobile: "600", "Extra Large": "1600", "Ultra Large": "4000" }),
    top: figma.children("Text Content Heading"),
    cards: figma.children("Card"),
  },
  example: ({ gap, top, cards, padding }) => (
    <Section padding={padding}>
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        {top}
        <FlexItem>
          <Flex wrap gap={gap}>
            {cards}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});

figma.connect(Section, "<FIGMA_SECTIONS_CARD_GRID_TESTIMONIALS>", {
  props: {
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    padding: figma.enum("Platform", { Desktop: "1200", Mobile: "600", "Extra Large": "1600", "Ultra Large": "4000" }),
    top: figma.children("Text Content Heading"),
    cards: figma.children("Testimonial Card"),
  },
  example: ({ gap, top, cards, padding }) => (
    <Section padding={padding}>
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        {top}
        <FlexItem>
          <Flex wrap type="third" gap={gap}>
            {cards}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});

figma.connect(Section, "<FIGMA_SECTIONS_CARD_GRID_CONTENT_LIST>", {
  props: {
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    padding: figma.enum("Platform", { Desktop: "1200", Mobile: "600", "Extra Large": "1600", "Ultra Large": "4000" }),
    top: figma.children("Text Content Heading"),
    cards: figma.children("Card"),
  },
  example: ({ gap, top, cards, padding }) => (
    <Section padding={padding}>
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        {top}
        <FlexItem>
          <Flex wrap direction="column" gap={gap}>
            {cards}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});

figma.connect(Section, "<FIGMA_SECTIONS_CARD_GRID_IMAGE>", {
  props: {
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    padding: figma.enum("Platform", { Desktop: "1200", Mobile: "600", "Extra Large": "1600", "Ultra Large": "4000" }),
    top: figma.children("Text Content Heading"),
    cards: figma.children("Card"),
  },
  example: ({ gap, top, cards, padding }) => (
    <Section padding={padding}>
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        {top}
        <FlexItem>
          <Flex wrap type="third" gap={gap}>
            {cards}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});


figma.connect(Section, "<FIGMA_SECTIONS_CARD_GRID_REVIEWS>", {
  props: {
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    padding: figma.enum("Platform", { Desktop: "1200", Mobile: "600", "Extra Large": "1600", "Ultra Large": "4000" }),
    top: figma.children("Text Heading"),
    cards: figma.children("Review Card"),
  },
  example: ({ gap, top, cards, padding }) => (
    <Section padding={padding}>
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        {top}
        <FlexItem>
          <Flex wrap type="third" gap={gap}>
            {cards}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});
