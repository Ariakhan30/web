import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles

from enum import Enum


def footer() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Contacto", font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR),
            rx.center(
                rx.hstack(
                    rx.vstack(    
                        rx.link(
                            rx.heading("Como Llegar", font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR),
                            href="https://maps.app.goo.gl/snWyGSsxES3ZZPmK7",
                        ),
                        rx.box(
                            element="iframe",
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.9649560712533!2d-0.8973572235360281!3d38.164253971889785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63bd42951c8bb3%3A0x53244d9273656126!2sCristaler%C3%ADa%20Manolo%20S%C3%A1ez%20S.L.!5e0!3m2!1ses!2ses!4v1698416391238!5m2!1ses!2ses",
                            width=Size.MAP_SIZE.value,
                            height=Size.MAP_SIZE.value,
                        ),
                    ),
                    rx.vstack(
                        rx.heading("Direccion:", font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR),
                        rx.text("Calle Enrique Monsonis Domingo, nº8", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE_CONTENT.value),
                        rx.text("Poligono Industrial Virgen del Carmen, 03350 Cox", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE_CONTENT.value),
                        rx.text("ALICANTE / ESPAÑA", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE_CONTENT.value),
                    ),
                    rx.vstack(
                        rx.heading("Email", font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR),
                        rx.link("cristaleriamsaez@gmail.com", href="mailto:cristaleriamsaez@gmail.com", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE_CONTENT.value),
                        rx.heading("Telefono", font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR),
                        rx.link("966750796", href="tel:966750796", color=styles.FONT_COLOR, font_size=Size.FONT_SIZE_CONTENT.value),
                    ),
                margin_top=Size.BIG.value,
                align_items="top",
                justify="center"
                ),
            display="flex",
            justify="space-evenly",
            width=styles.MAX_WIDTH,
            ),
        margin_y=Size.BIG.value,
        margin_x=Size.SMALL.value, 
        justify="center"               
        ),    
    width=styles.MAX_WIDTH,
    id="contacto",
    )