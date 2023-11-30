import reflex as rx 
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles
from web_crmsaez.components.navbar import navbar


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.hstack(
                navbar(),                
                rx.text("CRISTALERÍA MANOLO SÁEZ S.L.", color=styles.FONT_COLOR, font_size=Size.FONT_HEADER.value, font_family="ubuntu", padding_left=Size.BIG.value),
            padding=Size.FONT_HEADER.value,
            spacing="6vw"
            ),
            rx.hstack(    
                rx.image(src="/Origlass_logo.png", height=Size.ORIGLASS.value, border_radius=styles.BORDER_RADIUS),
                rx.link(rx.icon(tag="phone"),
                    " 96 675 07 96", href="tel:966750796",
                    color=styles.FONT_COLOR, font_size=Size.FONT_SIZE.value, is_external=True),
            justify="right",  
            padding=Size.FONT_HEADER.value, 
            spacing="4vw"     
            ),
        display="flex",
        justify="space-between",
        ),
        rx.hstack(
            rx.link("Inicio", href="/", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE.value),
            rx.link("Galeria", href="/images", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE.value),
            rx.link("Contacto", href="/#contacto", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE.value),
            justify="space-evenly",    
        ),
    width=styles.MAX_WIDTH,
    bg=styles.BG_COLOR_RIGHT,
    )