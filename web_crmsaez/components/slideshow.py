import reflex as rx
from web_crmsaez.styles.styles import Size
import web_crmsaez.styles.styles as styles


def slideshow() -> rx.Component:

    return rx.box(
        rx.html("""
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="container__slider">
        <div class="container">
            <input type="radio" name="slider" id="item-1" checked>
            <input type="radio" name="slider" id="item-2">
            <input type="radio" name="slider" id="item-3">
    
            <div class="cards">
                <label class="card" for="item-1" id="selector-1">
                    <img class="slider" src="imagen9.png">
                </label>
                <label class="card" for="item-2" id="selector-2">
                    <img class="slider" src="imagen7.png">
                </label>
                <label class="card" for="item-3" id="selector-3">
                    <img class="slider" src="imagen4.png">
                </label>
            </div>
        </div>
    </div>

</body>
</html>
        """,

            ),
        align_content="center",
        justify_content="center",
        padding="50px",
        bg=styles.BG_COLOR,
        width=styles.MAX_WIDTH,
        height=Size.BOX_WIDTH.value,
        id="slideshow",
        margin_y="50px"
        
    
    )


        