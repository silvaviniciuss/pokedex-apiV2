import axios from "axios"
import { useEffect, useState } from "react"

export const PokemonMegaEvolution = ({ species }) => {

    const [megaEvolution, setMegaEvolution] = useState({})

    useEffect(() => {
        getSpecies(species)
    }, [])

    const getSpecies = async (species) => {
        try {
            const res = await axios
                .get(species)
                if(res.data.forms_switchable) {
                    return <></>
                } else {
                    <img/>
                }
        } catch (err) {
            console.log(err.response)
        }
    }

    // console.log(megaEvolution)

    return (
        <>
        {/* {megaEvolution} */}
        </>
    )

}
