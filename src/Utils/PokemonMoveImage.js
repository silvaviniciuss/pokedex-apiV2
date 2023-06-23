import physical from "../assets/Img/MoveImage/move-physical.png"
import special from "../assets/Img/MoveImage/move-special.png"
import status from "../assets/Img/MoveImage/move-status.png"

export const pokemonMoveImagem = (type) => {
    switch(type) {
        case 'physical':
            return physical;
        case 'special':
            return special;
        case 'status':
            return status
    }
}
