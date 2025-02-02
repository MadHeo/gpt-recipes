import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function CardUi({ key, url, title, description, img }) {
  return (
    <Button
      _hover={{ transform: "scale(1.01)" }}
      _active={{ transform: "scale(1)" }}
      transition={"all 0.1s"}
      boxShadow={"0px 8px 16px rgba(46, 46, 46, 0.16)"}
      bgColor={"#4A4A4A"}
      w={"360px"}
      h={"420px"}
      p={"0"}
      href={url}
      key={key}
      borderRadius={"30px"}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <Card w={"100%"} h={"100%"} bgColor={"#4A4A4A"} borderRadius={"30px"}>
        <CardHeader
          h={"240px"}
          p={"0"}
          borderRadius={"30px 30px 0 0"}
          objectFit={"contain"}
          overflow={"hidden"}
        >
          <Image src={img} alt={title} />
        </CardHeader>
        <CardBody h={"180px"} p={"20px"}>
          <VStack gap={"10px"} alignItems={"start"} p={"0 10px"}>
            <Text fontSize={"24px"} fontWeight={"bold"} color={"gray.100"}>
              {title}
            </Text>
            <Text fontSize={"16px"} fontWeight={"normal"} color={"gray.100"}>
              {description}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </Button>
  );
}
