import reflex as rx 
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles



def header() -> rx.Component:
    return rx.box(
        rx.hstack(
        rx.image(src="logo_comercial.png", width=Size.LOGO.value, border_radius=styles.BORDER_RADIUS, margin_x=Size.HEADER_SIZE.value),
        rx.text("CRISTALERÍA MANOLO SÁEZ S.L.", color=styles.FONT_COLOR, font_size=Size.FONT_HEADER.value, font_family="ubuntu", padding_right=Size.HEADER_SIZE.value),
        rx.image(src="Origlass_logo.png", height=Size.ORIGLASS.value, border_radius=styles.BORDER_RADIUS, margin_x=Size.HEADER_SIZE.value),
        rx.link(rx.icon(tag="phone"),
                " 96 675 07 96", href="tel:966750796",
                color=styles.FONT_COLOR, font_size=Size.FONT_SIZE.value, is_external=True, padding_x=Size.HEADER_SIZE.value),
        display="flex",
        justify="space-evenly",
        
        ),
        width="display-width",
        bg=styles.BG_COLOR_RIGHT,

    )