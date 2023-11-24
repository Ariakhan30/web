import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles


def navbar():
    return rx.hstack(
        rx.center(
            rx.image(src="/logo_comercial.png", widht="8em", height="8em", border_radius=styles.BORDER_RADIUS),
            rx.text(rx.link("CRISTALERIA MANOLO SAEZ S.L.", href="/"), padding_x=Size.DEFAULT.value, font_size="1.5em", font_family="ubuntu", color=styles.FONT_COLOR),
            rx.text(rx.link("Inicio", href="/"), padding_x=Size.DEFAULT.value, font_size=Size.DEFAULT.value, font_weight="bold", color=styles.FONT_COLOR),
            rx.text(rx.link("Informacion", href="/#descripcion"), padding_x=Size.DEFAULT.value, font_size=Size.DEFAULT.value, font_weight="bold", color=styles.FONT_COLOR),
            rx.text(rx.link("Galeria", href="/images"), padding_x=Size.DEFAULT.value, font_size=Size.DEFAULT.value, font_weight="bold", color=styles.FONT_COLOR),
            rx.text(rx.link("Servicios", href="/#servicios"), padding_x=Size.DEFAULT.value, font_size=Size.DEFAULT.value, font_weight="bold", color=styles.FONT_COLOR),
            rx.text(rx.link("Contacto", href="/#contactos"), padding_x=Size.DEFAULT.value, font_size=Size.DEFAULT.value, font_weight="bold", color=styles.FONT_COLOR),
            rx.image(src="/Origlass_logo.png", widht="8em", height="6em", border_radius=styles.BORDER_RADIUS, box_shadow="0px 0px 0px"),
            rx.link(rx.icon(tag="phone"),
                " 966750796", href="tel:966750796",
                color=styles.FONT_COLOR, is_external=True, padding_x=Size.DEFAULT.value),
            width=styles.MAX_WIDTH,
            top="0"
        ),
        spacing="space-between",
        bg="white",
        width=styles.MAX_WIDTH,
        height="10em",
        z_index="999",
        
    )