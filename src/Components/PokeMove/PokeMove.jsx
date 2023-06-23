import { Td, Tr, Tooltip, WrapItem } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { pokemonMoveImagem } from "../../Utils/PokemonMoveImage"
import { CategoryImage, TypeImage } from "./PokeMoveStyle"
import { pokemonTypeCards } from "../../Utils/PokemonTypeCard"
export const PokeMove = ({ move, url }) => {

    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    useEffect(() => {
        getMoves(url)
    }, [])

    const getMoves = async (url) => {
        try {
            const response = await axios
                .get(url)
            setType(response.data.type.name)
            setCategory(response.data.damage_class.name)

        } catch (err) {
            console.log(err.response)
        }
    }

    return (
        <Tr
        style={{zIndex:"2"}}
        >
            <Td
                style={{ textTransform: 'capitalize' }}
            > {move.move.name}</Td>
            <Td>
                {<TypeImage src={pokemonTypeCards(type)} />}
            </Td>
            <Td>
                <Tooltip label={category}>
                    {<CategoryImage 
                    src={pokemonMoveImagem(category)} 
                    />}
                </Tooltip>
            </Td>
        </Tr>
    )
}
