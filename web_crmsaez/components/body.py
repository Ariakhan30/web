import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles





class body():

    def __init__(self, image, title, text):
        self.image = image
        self.title = title
        self.text = text


    def body_left(self) -> rx.Component:
        return rx.box(
            rx.center(
                rx.hstack(
                    rx.image(src=self.image, 
                        width=Size.IMAGE_WIDTH.value, 
                        height=Size.IMAGE_HEIGHT.value,
                        border_radius=styles.BORDER_RADIUS
                    ),
                    rx.vstack(
                        rx.heading(self.title, font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR),
                        rx.text(self.text, 
                            font_size=Size.FONT_SIZE_CONTENT.value,
                            padding=Size.DEFAULT.value,
                            color=styles.FONT_COLOR,
                            width=styles.DEFAULT_WIDTH
                        ),
                        width=styles.DEFAULT_WIDTH
                    ),
                    width=styles.DEFAULT_WIDTH,
                    padding_y=Size.BIG.value,
                    align_items="center",
                    justify="center"
                ),
            ),
            bg=styles.BG_COLOR,
            width=styles.MAX_WIDTH,
        )

    def body_right(self) -> rx.Component:
        return rx.box(
            rx.center(
                rx.hstack(
                    rx.vstack(
                        rx.heading(self.title, font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR),
                        rx.text(self.text, 
                            padding=Size.DEFAULT.value,
                            font_size=Size.FONT_SIZE_CONTENT.value,
                            color=styles.FONT_COLOR,
                            width=styles.DEFAULT_WIDTH
                        ),
                        width=styles.DEFAULT_WIDTH
                    ),
                    rx.image(src=self.image, 
                        width=Size.IMAGE_WIDTH.value, 
                        height=Size.IMAGE_HEIGHT.value,
                        border_radius=styles.BORDER_RADIUS
                    ),
                    width=styles.DEFAULT_WIDTH,
                    padding_y=Size.BIG.value,
                    align_items="center",
                    justify="center"
                ),
            ),
            bg=styles.BG_COLOR_RIGHT,
            width=styles.MAX_WIDTH,
        )




