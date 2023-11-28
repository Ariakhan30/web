import reflex as rx
from web_crmsaez.styles.styles import Size as Size
import web_crmsaez.styles.styles as styles



texto = "Con más de 30 años de experiencia en el sector, Cristaleria Manolo Saez S.L. se ha consolidado como líder en la fabricación e instalación de vidrio plano especializado. Nos enorgullecemos de ofrecer soluciones de vidrio de alta calidad y versatilidad que satisfacen las necesidades tanto de particulares como de empresas.\
Nuestro enfoque en la excelencia y la innovación nos ha llevado a especializarnos en diversos productos y servicios relacionados con el vidrio, abarcando desde vidrio de cámara hasta barandas de vidrio templado, mamparas de baño y acristalamiento de viviendas y locales comerciales."



def descripcion() -> rx.Component:
    return rx.vstack(
        rx.heading("Quiénes somos", font_size=Size.FONT_HEADER.value, color=styles.FONT_COLOR, margin_x=Size.BIG.value),
        rx.box(texto,
            padding=Size.DEFAULT.value,
            color=styles.FONT_COLOR,
            font_size=Size.FONT_SIZE_CONTENT.value,
        ),
        width=styles.DEFAULT_WIDTH,
        padding_y="70px",
        id="descripcion",    
    )        
    