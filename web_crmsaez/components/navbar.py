import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles


class DrawerState(rx.State):
    show_left: bool = False
    show_top: bool = False

    def top(self):
        self.show_top = not (self.show_top)

    def left(self):
        self.show_left = not (self.show_left)


def navbar() -> rx.Component:
    return rx.box(
        rx.button(
            rx.image(src="/logo_comercial.png", width=Size.LOGO.value, border_radius=styles.BORDER_RADIUS),
            on_click=DrawerState.left,
            width=Size.LOGO.value,
            height=Size.LOGO.value,
        ),
        rx.drawer(
            rx.drawer_overlay(
                rx.drawer_content(
                    rx.drawer_header(
                        rx.hstack(
                            rx.heading("Menu", font_size=Size.BIG.value), 
                            rx.button("X", on_click=DrawerState.left),
                        justify_content="space-between",
                        ),
                    ),
                    rx.drawer_body(
                        rx.vstack(
                            rx.link("Inicio", href="/"),
                            rx.link("Galeria", href="/images"),
                            rx.link("Contacto", href="/#contacto"),
                        align_items="left",
                        spacing="4vh"
                        ),
                    ),
                bg="rgba(0, 0, 0, 0.3)",
                ),
            close_on_overlay_click=True,    
            ),
        placement="left",
        is_open=DrawerState.show_left,
        close_on_overlay_click=True,
        ),
    width="5vw",
    )
    