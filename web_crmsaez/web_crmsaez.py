import reflex as rx
from web_crmsaez.components.navbar import navbar
from web_crmsaez.components.descripcion import descripcion
import web_crmsaez.components.instances as instances
from web_crmsaez.components.footer import footer
from web_crmsaez.components.slideshow import slideshow
from web_crmsaez.components.slider import slider
from web_crmsaez.components.galeria import galeria
import web_crmsaez.styles.styles as styles
from web_crmsaez.styles.styles import Size as Size
from web_crmsaez.components.header import header



def index() -> rx.Component:
    
    return rx.box(
        rx.vstack(
            #navbar(),
            header(),
            slider(),
            #slideshow(),
            descripcion(),
            instances.servicios.body_left(),
            instances.barandillas.body_right(),
            instances.laminar.body_left(),
            instances.monolitico.body_right(),
            instances.camara.body_left(),
            footer(),
            
        ),
        bg="white",
        width="display-width",
        align="center"
        
    )

def images() -> rx.Component:

    return rx.box(
        rx.vstack(
            navbar(),
            galeria(),
            footer(),
        ),
        bg="white",
        width="120em",
        align="center",
        height="auto"
    )

# Add state and page to the app.
app = rx.App(style=styles.BASE_STYLE)
app.add_page(index, title="Cristaleria Manolo Saez S.L.", description="Empresa dedicada a todo tipo de manfacturacion de vidrio plano")
app.add_page(images, title="Galeria", route="/images")
app.compile()
