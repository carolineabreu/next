import { Button, Card, CardBody, Divider, Heading, Image, Stack } from "@chakra-ui/react";
//import vase from "../../assets/angelina-jollivet-mNEpmNiFdXs-unsplash.jpg"
//import basket from "../../assets/lizzie-FRVhwfdOT9U-unsplash.jpg"

export default function CategoryCards() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <Card maxW='sm' h="min">
        <CardBody style={{ backgroundColor: "#FFF8F7" }}>
          <Image
            src='/linh-le-j05zD0YtZBw-unsplash.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            h="sm"
            maxWidth="256px"
          />
          <Stack mt='6' spacing='3' alignItems="center" style={{ backgroundColor: "#FFF8F7" }}>
            <Heading size='md' style={{ backgroundColor: "#FFF8F7" }}>Flower Vases</Heading>
            <Button variant='outline' color="#7B5733" borderColor="#7B5733" background="transparent" _hover={{ bg: "#f7f2ed" }}>
              Explore
            </Button>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      <Card maxW='sm' h="min">
        <CardBody style={{ backgroundColor: "#FFF8F7" }}>
          <Image
            src='/rock-earth-8AYJweoyems-unsplash.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            h="sm"
            maxWidth="256px"
          />
          <Stack mt='6' spacing='3' alignItems="center" style={{ backgroundColor: "#FFF8F7" }}>
            <Heading size='md' style={{ backgroundColor: "#FFF8F7" }}>Flower Baskets</Heading>
            <Button variant='outline' color="#7B5733" borderColor="#7B5733" background="transparent" _hover={{ bg: "#f7f2ed" }}>
              Explore
            </Button>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      <Card maxW='sm' h="min">
        <CardBody style={{ backgroundColor: "#FFF8F7" }}>
          <Image
            src="/demi-he-hPcxvCecdPI-unsplash.jpg"
            alt='flower bouquet'
            borderRadius='lg'
            h="sm"
            maxWidth="256px"
          />
          <Stack mt='6' spacing='3' alignItems="center" style={{ backgroundColor: "#FFF8F7" }}>
            <Heading size='md' style={{ backgroundColor: "#FFF8F7" }}>Flower Bouquets</Heading>
            <Button variant='outline' color="#7B5733" borderColor="#7B5733" background="transparent" _hover={{ bg: "#f7f2ed" }}>
              Explore
            </Button>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      <Card maxW='sm' h="min">
        <CardBody style={{ backgroundColor: "#FFF8F7" }}>
          <Image
            src="/gryffyn-m-OSBEqWnoDYo-unsplash.jpg"
            alt='potted plant'
            borderRadius='lg'
            h="sm"
            maxWidth="256px"
          />
          <Stack mt='6' spacing='3' alignItems="center" style={{ backgroundColor: "#FFF8F7" }}>
            <Heading size='md' style={{ backgroundColor: "#FFF8F7" }}>Potted Plants</Heading>
            <Button variant='outline' color="#7B5733" borderColor="#7B5733" background="transparent" _hover={{ bg: "#f7f2ed" }}>
              Explore
            </Button>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </div>
  )
}