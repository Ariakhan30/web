from turtle import width
import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles



def slider() -> rx.Component:
    return rx.box(
        rx.center(
            rx.box(
                rx.image(src="imagen1.png", width="130em", left="0", object_fit="cover", position="sticky", scroll_snap_align="center"),
                rx.image(src="imagen2.png", width="130em", left="0", object_fit="cover", position="sticky", scroll_snap_align="center"),
                rx.image(src="imagen3.png", width="130em", left="0", object_fit="cover", position="sticky", scroll_snap_align="center"),
                rx.image(src="imagen4.png", width="130em", left="0", object_fit="cover", position="sticky", scroll_snap_align="center"),
                rx.image(src="imagen5.png", width="130em", left="0", object_fit="cover", position="sticky", scroll_snap_align="center"),
            aspect_ratio="16/10",
            display="flex", 
            width="60%",
            height=Size.IMAGE_HEIGHT_SLIDER.value,
            margin=Size.BIG.value,
            overflow="scroll",
            position="relative",
            scroll_snap_type="x mandatory",
            animation="slide 5s infinite"

            ),
        ),    
    width=styles.MAX_WIDTH,
    bg=styles.BG_COLOR,    
    )