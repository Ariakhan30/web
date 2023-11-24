import reflex as rx
from enum import Enum

# Constants
MAX_WIDTH = "100%"
DEFAULT_WIDTH = "80%"
MEDIUM_WIDTH = "50%"
SMALL_WIDTH = "30%"
BORDER_RADIUS = "10"
BG_COLOR = "lightgrey"
BG_COLOR_RIGHT = "white"
FONT_COLOR = "black"



# Sizes


class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    FONT_HEADER = ["0.6em", "0.9em", "1em", "2em"]
    FONT_SIZE = ["0.3em", "0.5em", "0.8em", "1em"]
    FONT_SIZE_CONTENT = ["0.5em", "0.7em", "0.8em", "1em"]
    BIG = "2em"
    LOGO = ["2.5em", "4em", "6em", "8em"]
    ORIGLASS = ["2em", "3em", "4em", "6em"]
    IMAGE_WIDTH = ["10em", "20em","30em", "40em"]
    IMAGE_HEIGHT = ["7em", "15em","20em", "25em"]
    BOX_WIDTH = ["40%", "60%", "80%", "100%"]
    HEADER_SIZE = ["1.5em", "2em", "3em", "4em"]
    MAP_SIZE = ["7em", "10em","15em", "20em"]
    IMAGE_WIDTH_SLIDER = ["20em", "40em","60em", "80em"]
    IMAGE_HEIGHT_SLIDER = ["15em", "25em","30em", "35em"]


# Styles


BASE_STYLE = {
    rx.Box: {
        "width": MAX_WIDTH,
    },

    rx.Hstack: {
        "width": MAX_WIDTH,
        "overflow": "auto",
    },

    rx.Vstack: {
        "width": MAX_WIDTH,
        "overflow": "auto",
    },

    rx.Button: {
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "bg": "white",
        "color": "black",
        "border_width": "1px",
        "border_color": "#888888",
        "box_shadow": "5px 5px 3px #888888",
    },
    rx.Image: {
        "border_radius": Size.DEFAULT.value,
        "box_shadow": "7px 7px 5px  #888888",
        "border_width": "1px",
        "border_color": "#888888",
             
    }
    #rx.Link: {
    #    "text_decoration": "none",
    #    "_hover": {}
    #}
}

