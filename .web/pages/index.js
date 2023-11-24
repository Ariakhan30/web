import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { PhoneIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const button_state = useContext(StateContext)
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

  const ref_slideshow = useRef(null); refs['ref_slideshow'] = ref_slideshow;
  const ref_contactos = useRef(null); refs['ref_contactos'] = ref_contactos;
  const ref_descripcion = useRef(null); refs['ref_descripcion'] = ref_descripcion;

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
  <Box sx={{"bg": "white", "width": "display-width", "align": "center"}}>
  <VStack sx={{"width": "100%", "overflow": "auto"}}>
  <Box sx={{"width": "100%", "bg": "white"}}>
  <HStack justify={`space-between`} sx={{"display": "flex", "width": "100%", "overflow": "auto"}}>
  <HStack sx={{"padding": ["0.6em", "0.9em", "1em", "2em"], "width": "100%", "overflow": "auto"}}>
  <Image src={`logo_comercial.png`} sx={{"width": ["2.5em", "4em", "6em", "8em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888", "borderWidth": "1px", "borderColor": "#888888"}}/>
  <Text sx={{"color": "black", "fontSize": ["0.6em", "0.9em", "1em", "2em"], "fontFamily": "ubuntu"}}>
  {`CRISTALERÍA MANOLO SÁEZ S.L.`}
</Text>
</HStack>
  <HStack justify={`right`} sx={{"padding": ["0.6em", "0.9em", "1em", "2em"], "width": "100%", "overflow": "auto"}}>
  <Image src={`Origlass_logo.png`} sx={{"height": ["2em", "3em", "4em", "6em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888", "borderWidth": "1px", "borderColor": "#888888"}}/>
  <Link as={NextLink} href={`tel:966750796`} isExternal={true} sx={{"color": "black", "fontSize": ["0.3em", "0.5em", "0.8em", "1em"]}}>
  <PhoneIcon/>
  {` 96 675 07 96`}
</Link>
</HStack>
</HStack>
</Box>
  <Box id={`slideshow`} ref={ref_slideshow} sx={{"alignContent": "center", "justifyContent": "center", "padding": "50px", "bg": "lightgrey", "width": "100%", "height": ["40%", "60%", "80%", "100%"], "marginY": "50px"}}>
  <Box dangerouslySetInnerHTML={{"__html": "\n<!DOCTYPE html>\n<html>\n<head>\n    <link rel=\"stylesheet\" href=\"estilos.css\">\n</head>\n<body>\n    <div class=\"container__slider\">\n        <div class=\"container\">\n            <input type=\"radio\" name=\"slider\" id=\"item-1\" checked>\n            <input type=\"radio\" name=\"slider\" id=\"item-2\">\n            <input type=\"radio\" name=\"slider\" id=\"item-3\">\n    \n            <div class=\"cards\">\n                <label class=\"card\" for=\"item-1\" id=\"selector-1\">\n                    <img class=\"slider\" src=\"imagen9.png\">\n                </label>\n                <label class=\"card\" for=\"item-2\" id=\"selector-2\">\n                    <img class=\"slider\" src=\"imagen7.png\">\n                </label>\n                <label class=\"card\" for=\"item-3\" id=\"selector-3\">\n                    <img class=\"slider\" src=\"imagen4.png\">\n                </label>\n            </div>\n        </div>\n    </div>\n\n</body>\n</html>\n        "}}/>
</Box>
  <VStack id={`descripcion`} ref={ref_descripcion} sx={{"width": "80%", "paddingY": "70px", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black", "marginX": "2em"}}>
  {`Quiénes somos`}
</Heading>
  <Box sx={{"padding": "1em", "color": "black", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"], "width": "100%"}}>
  {`Con más de 30 años de experiencia en el sector, Cristaleria Manolo Saez S.L. se ha consolidado como líder en la fabricación e instalación de vidrio plano especializado. Nos enorgullecemos de ofrecer soluciones de vidrio de alta calidad y versatilidad que satisfacen las necesidades tanto de particulares como de empresas.Nuestro enfoque en la excelencia y la innovación nos ha llevado a especializarnos en diversos productos y servicios relacionados con el vidrio, abarcando desde vidrio de cámara hasta barandas de vidrio templado, mamparas de baño y acristalamiento de viviendas y locales comerciales.`}
</Box>
</VStack>
  <Box sx={{"bg": "lightgrey", "width": "100%"}}>
  <Center>
  <HStack alignItems={`center`} justify={`center`} sx={{"width": "80%", "paddingY": "2em", "overflow": "auto"}}>
  <Image src={`camara_composicion.jpg`} sx={{"width": ["10em", "20em", "30em", "40em"], "height": ["7em", "15em", "20em", "25em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888", "borderWidth": "1px", "borderColor": "#888888"}}/>
  <VStack sx={{"width": "80%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Fabricamos Doble Acristalamiento`}
</Heading>
  <Text sx={{"fontSize": ["0.5em", "0.7em", "0.8em", "1em"], "padding": "1em", "color": "black", "width": "80%"}}>
  {`Nuestra empresa ofrece vidrio de cámara, un producto que proporciona aislamiento térmico y acústico superior. Esto resulta en un ambiente interior más confortable y eficiente en términos energéticos. Nuestros productos ayudan a reducir los costos de climatización y contribuyen a la sostenibilidad`}
</Text>
</VStack>
</HStack>
</Center>
</Box>
  <Box sx={{"bg": "white", "width": "100%"}}>
  <Center>
  <HStack alignItems={`center`} justify={`center`} sx={{"width": "80%", "paddingY": "2em", "overflow": "auto"}}>
  <VStack sx={{"width": "80%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Vidrio Templado`}
</Heading>
  <Text sx={{"padding": "1em", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"], "color": "black", "width": "80%"}}>
  {`Además, nuestras barandas de vidrio templado no solo aportan un toque de elegancia y modernidad a cualquier espacio, sino que también garantizan la seguridad de los usuarios.`}
</Text>
</VStack>
  <Image src={`barandilla2.jpeg`} sx={{"width": ["10em", "20em", "30em", "40em"], "height": ["7em", "15em", "20em", "25em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888", "borderWidth": "1px", "borderColor": "#888888"}}/>
</HStack>
</Center>
</Box>
  <Box sx={{"bg": "lightgrey", "width": "100%"}}>
  <Center>
  <HStack alignItems={`center`} justify={`center`} sx={{"width": "80%", "paddingY": "2em", "overflow": "auto"}}>
  <Image src={`vidrio_laminado.jpg`} sx={{"width": ["10em", "20em", "30em", "40em"], "height": ["7em", "15em", "20em", "25em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888", "borderWidth": "1px", "borderColor": "#888888"}}/>
  <VStack sx={{"width": "80%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Seguridad con vidrio Laminado`}
</Heading>
  <Text sx={{"fontSize": ["0.5em", "0.7em", "0.8em", "1em"], "padding": "1em", "color": "black", "width": "80%"}}>
  {`El vidrio laminado de seguridad ofrece varias ventajas. Proporciona una mayor resistencia mecánica y seguridad.    Filtra más del 95% de los rayos ultravioletas (UV), protegiendo contra la degradación del color.    En caso de rotura, los fragmentos tienden a adherirse a la capa intermedia, reduciendo el riesgo de lesiones.    También contribuye a la reducción del ruido y es eficiente energéticamente`}
</Text>
</VStack>
</HStack>
</Center>
</Box>
  <Box sx={{"bg": "white", "width": "100%"}}>
  <Center>
  <HStack alignItems={`center`} justify={`center`} sx={{"width": "80%", "paddingY": "2em", "overflow": "auto"}}>
  <VStack sx={{"width": "80%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Vidrio Monolitico`}
</Heading>
  <Text sx={{"padding": "1em", "fontSize": ["0.5em", "0.7em", "0.8em", "1em"], "color": "black", "width": "80%"}}>
  {`El vidrio monolítico es un material transparente, versátil y duradero.    Está formado por una única hoja de vidrio sólido sin capas intermedias.    Ofrece claridad visual, no altera colores y permite el paso de luz.    Es resistente al impacto y ofrece aislamiento térmico y acústico.    Su diseño flexible permite fabricarlo en diferentes formas y tamaños.    Es económico debido a su proceso de fabricación sencillo`}
</Text>
</VStack>
  <Image src={`vidrio_monolitico.jpeg`} sx={{"width": ["10em", "20em", "30em", "40em"], "height": ["7em", "15em", "20em", "25em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888", "borderWidth": "1px", "borderColor": "#888888"}}/>
</HStack>
</Center>
</Box>
  <Box sx={{"bg": "lightgrey", "width": "100%"}}>
  <Center>
  <HStack alignItems={`center`} justify={`center`} sx={{"width": "80%", "paddingY": "2em", "overflow": "auto"}}>
  <Image src={`doble_acristalamiento.jpg`} sx={{"width": ["10em", "20em", "30em", "40em"], "height": ["7em", "15em", "20em", "25em"], "borderRadius": "10", "boxShadow": "7px 7px 5px  #888888", "borderWidth": "1px", "borderColor": "#888888"}}/>
  <VStack sx={{"width": "80%", "overflow": "auto"}}>
  <Heading sx={{"fontSize": ["0.6em", "0.9em", "1em", "2em"], "color": "black"}}>
  {`Configura el vidrio a tus necesidades`}
</Heading>
  <Text sx={{"fontSize": ["0.5em", "0.7em", "0.8em", "1em"], "padding": "1em", "color": "black", "width": "80%"}}>
  {`El doble acristalamiento ofrece varias ventajas. Mejora el aislamiento térmico y acústico, lo que puede resultar en ahorros de energía a largo plazo.    También reduce la condensación en el ambiente y minimiza la contaminación acústica exterior.    En cuanto a la configurabilidad, el grosor de los cristales y la cámara de aire pueden variar, lo que afecta a su eficacia`}
</Text>
</VStack>
</HStack>
</Center>
</Box>
  <Box id={`contactos`} ref={ref_contactos} sx={{"width": "100%"}}>
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
  {`Cristaleria Manolo Saez S.L.`}
</title>
  <meta content={`Empresa dedicada a todo tipo de manfacturacion de vidrio plano`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
