import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { PhoneIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const drawer_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])

  const ref_contacto = useRef(null); refs['ref_contacto'] = ref_contacto;

  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box sx={{"bg": "white", "width": "display-width", "align": "center", "height": "auto"}}>
  <VStack sx={{"width": "100%", "overflow": "auto"}}>
  <Box sx={{"width": "100%", "bg": "white"}}>
  <HStack justify={`space-between`} sx={{"display": "flex", "width": "100%", "overflow": "auto"}}>
  <HStack spacing={`6vw`} sx={{"padding": ["0.6em", "0.9em", "1em", "2em"], "width": "100%", "overflow": "auto"}}>
  <Box sx={{"width": "5vw"}}>
  <Button onClick={(_e) => addEvents([Event("drawer_state.left", {})], (_e))} sx={{"width": ["3em", "4em", "6em", "8em"], "height": ["3em", "4em", "6em", "8em"], "padding": "0.5em", "borderRadius": "1em", "bg": "white", "color": "black"}}>
  <Image src={`/logo_comercial.png`} sx={{"width": ["3em", "4em", "6em", "8em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
</Button>
  <Drawer closeOnOverlayClick={true} isOpen={drawer_state.show_left} placement={`left`}>
  <DrawerOverlay sx={{"closeOnOverlayClick": true}}>
  <DrawerContent sx={{"bg": "rgba(0, 0, 0, 0.3)"}}>
  <DrawerHeader>
  <HStack justifyContent={`space-between`} sx={{"width": "100%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": "2em"}}>
  {`Menu`}
</Heading>
  <Button onClick={(_e) => addEvents([Event("drawer_state.left", {})], (_e))} sx={{"padding": "0.5em", "borderRadius": "1em", "bg": "white", "color": "black"}}>
  {`X`}
</Button>
</HStack>
</DrawerHeader>
  <DrawerBody>
  <VStack alignItems={`left`} spacing={`4vh`} sx={{"width": "100%", "overflow": "auto"}}>
  <Link as={NextLink} href={`/`}>
  {`Inicio`}
</Link>
  <Link as={NextLink} href={`/images`}>
  {`Galeria`}
</Link>
  <Link as={NextLink} href={`/#contacto`}>
  {`Contacto`}
</Link>
</VStack>
</DrawerBody>
</DrawerContent>
</DrawerOverlay>
</Drawer>
</Box>
  <Text sx={{"color": "black", "fontSize": ["0.6em", "0.9em", "1em", "2em"], "fontFamily": "ubuntu", "paddingLeft": "2em"}}>
  {`CRISTALERÍA MANOLO SÁEZ S.L.`}
</Text>
</HStack>
  <HStack justify={`right`} spacing={`4vw`} sx={{"padding": ["0.6em", "0.9em", "1em", "2em"], "width": "100%", "overflow": "auto"}}>
  <Image src={`/Origlass_logo.png`} sx={{"height": ["2em", "3em", "4em", "6em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Link as={NextLink} href={`tel:966750796`} isExternal={true} sx={{"color": "black", "fontSize": ["0.3em", "0.5em", "0.8em", "1em"]}}>
  <PhoneIcon/>
  {` 96 675 07 96`}
</Link>
</HStack>
</HStack>
</Box>
  <Box sx={{"width": "100%", "justify": "center", "padding": "1em", "bg": "lightgrey"}}>
  <Center>
  <SimpleGrid columns={[1, 2, 3]} spacingY={`2em`} sx={{"width": "80%"}}>
  <Image alt={`imagen1`} src={`/mampara1.jpg`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen2`} src={`/oficina.jpg`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen3`} src={`/imagen3.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen4`} src={`/imagen4.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen5`} src={`/imagen5.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen6`} src={`/imagen6.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen7`} src={`/imagen7.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen8`} src={`/imagen8.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen9`} src={`/imagen9.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen10`} src={`/imagen10.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen11`} src={`/imagen1.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
  <Image alt={`imagen12`} src={`/imagen2.png`} sx={{"height": "20em", "width": "30em", "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888"}}/>
</SimpleGrid>
</Center>
</Box>
  <Box id={`contacto`} ref={ref_contacto} sx={{"width": "100%"}}>
  <VStack justify={`center`} sx={{"marginY": "2em", "marginX": "0.5em", "width": "100%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Contacto`}
</Heading>
  <Center sx={{"display": "flex", "justify": "space-evenly", "width": "100%"}}>
  <HStack alignItems={`top`} justify={`center`} sx={{"marginTop": "2em", "width": "100%", "overflow": "auto"}}>
  <VStack sx={{"width": "100%", "overflow": "auto"}}>
  <Link as={NextLink} href={`https://maps.app.goo.gl/snWyGSsxES3ZZPmK7`}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Como Llegar`}
</Heading>
</Link>
  <Box as={`iframe`} element={`iframe`} src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.9649560712533!2d-0.8973572235360281!3d38.164253971889785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63bd42951c8bb3%3A0x53244d9273656126!2sCristaler%C3%ADa%20Manolo%20S%C3%A1ez%20S.L.!5e0!3m2!1ses!2ses!4v1698416391238!5m2!1ses!2ses`} sx={{"width": ["7em", "10em", "15em", "20em"], "height": ["7em", "10em", "15em", "20em"]}}/>
</VStack>
  <VStack sx={{"width": "100%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Direccion:`}
</Heading>
  <Text sx={{"color": "black", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"]}}>
  {`Calle Enrique Monsonis Domingo, nº8`}
</Text>
  <Text sx={{"color": "black", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"]}}>
  {`Poligono Industrial Virgen del Carmen, 03350 Cox`}
</Text>
  <Text sx={{"color": "black", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"]}}>
  {`ALICANTE / ESPAÑA`}
</Text>
</VStack>
  <VStack sx={{"width": "100%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Email`}
</Heading>
  <Link as={NextLink} href={`mailto:cristaleriamsaez@gmail.com`} sx={{"color": "black", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"]}}>
  {`cristaleriamsaez@gmail.com`}
</Link>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Telefono`}
</Heading>
  <Link as={NextLink} href={`tel:966750796`} sx={{"color": "black", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"]}}>
  {`966750796`}
</Link>
</VStack>
</HStack>
</Center>
</VStack>
</Box>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Galeria`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
