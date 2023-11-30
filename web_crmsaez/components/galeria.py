import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles



def galeria() -> rx.Component:
    return rx.box(
        rx.center(
            rx.responsive_grid(    
                rx.image(src="/mampara1.jpg", alt="imagen1", height="20em", width="30em"),
                rx.image(src="/oficina.jpg", alt="imagen2", height="20em", width="30em"),
                rx.image(src="/imagen3.png", alt="imagen3", height="20em", width="30em"),
                rx.image(src="/imagen4.png", alt="imagen4", height="20em", width="30em"),
                rx.image(src="/imagen5.png", alt="imagen5", height="20em", width="30em"),
                rx.image(src="/imagen6.png", alt="imagen6", height="20em", width="30em"),
                rx.image(src="/imagen7.png", alt="imagen7", height="20em", width="30em"),
                rx.image(src="/imagen8.png", alt="imagen8", height="20em", width="30em"),
                rx.image(src="/imagen9.png", alt="imagen9", height="20em", width="30em"),
                rx.image(src="/imagen10.png", alt="imagen10", height="20em", width="30em"),
                rx.image(src="/imagen1.png", alt="imagen11", height="20em", width="30em"),
                rx.image(src="/imagen2.png", alt="imagen12", height="20em", width="30em"),
            columns=[1, 2, 3],
            spacing_y=Size.BIG.value,
            width=styles.DEFAULT_WIDTH,
            ),
        ),
    width=styles.MAX_WIDTH,
    justify="center",
    padding=Size.DEFAULT.value,
    bg=styles.BG_COLOR,
    )