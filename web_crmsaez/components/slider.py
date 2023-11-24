import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles



def slider() -> rx.Component:
    return rx.box(
        rx.center(
            rx.flex(
                rx.image(src="imagen1.png", width=Size.IMAGE_WIDTH_SLIDER.value, height=Size.IMAGE_HEIGHT_SLIDER.value),
                rx.image(src="imagen2.png", width=Size.IMAGE_WIDTH_SLIDER.value, height=Size.IMAGE_HEIGHT_SLIDER.value),
                rx.image(src="imagen3.png", width=Size.IMAGE_WIDTH_SLIDER.value, height=Size.IMAGE_HEIGHT_SLIDER.value),
                rx.image(src="imagen4.png", width=Size.IMAGE_WIDTH_SLIDER.value, height=Size.IMAGE_HEIGHT_SLIDER.value),
                rx.image(src="imagen5.png", width=Size.IMAGE_WIDTH_SLIDER.value, height=Size.IMAGE_HEIGHT_SLIDER.value),
            width=Size.IMAGE_WIDTH_SLIDER.value,
            height=Size.IMAGE_HEIGHT_SLIDER.value,
            margin=Size.BIG.value,
            overflow="scroll",
            ),
        ),    
    width=styles.MAX_WIDTH,
    bg=styles.BG_COLOR,    
    )