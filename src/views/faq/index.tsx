import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "@/components/Card/Card";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import faqJsonData from "@/utils/faq.json";

export default function FAQ() {

  const titleColor = useColorModeValue("secondaryGray.900", "white");
  const textColor = useColorModeValue("secondaryGray.800", "whiteAlpha.700");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card
        flexDirection="column"
        w="100%"
        px="20px"
        overflowX={{ sm: "hidden", lg: "hidden" }}
      >
        <Accordion defaultIndex={[0]}>
          {faqJsonData.map((item: any, i: any) => (
            <AccordionItem key={i}>
              <h2>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text color={titleColor} fontSize="lg" textAlign={'start'} textTransform={"capitalize"}>{item.title}</Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text color={textColor}>{item.description}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </Box>
  );
}