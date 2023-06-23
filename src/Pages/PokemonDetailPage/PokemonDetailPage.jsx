import {
    ImageContainer,
    PokeImageFrontBack,
    PokeStatusName,
    PokeballDetailImage,
    PokemonDetailCard,
    PokemonDetailStyle,
    PokemonImage,
    StatsContainer,
    StatsPokemons,
    BaseStats,
    PokemonIdNameContainer,
    PokemonName,
    PokemonId,
    TypesContainer,
    BarProgress,
    MoveContainer,
} from "./PokemonDetailPageStyle"
import { pokemonCardColor } from "../../Utils/PokemonCardColor"
import { pokemonTypeCards } from "../../Utils/PokemonTypeCard"
import { PokemonType } from "../../Components/PokemonCard/PokemonCardStyle"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import pokeballCard from "../../assets/Img/pngwing.png"
import {
    Progress,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Tooltip,
} from "@chakra-ui/react"
import { PokeMove } from "../../Components/PokeMove/PokeMove"


export const PokemonDetailPage = () => {
    const { id } = useParams()
    const [pokemonDetail, setPokemonDetail] = useState({})
    useEffect(() => {
        getPokemon(id)
    }, [])
    const getPokemon = (id) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => {
                setPokemonDetail(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const changeBarProgressColor = (stats) => {
        if (stats <= 35) {
            return 'red'
        } else if (stats > 35 && stats <= 60) {
            return 'orange'
        } else if (stats > 60 && stats < 100) {
            return 'yellow'
        } else if (stats >= 100 && stats < 129) {
            return 'green'
        } else if (stats >= 130) {
            return 'cyan'
        }
    }

    let sumBaseStats = 0

    return (
        <PokemonDetailStyle >
            <h1>Detalhes</h1>
            {pokemonDetail.id &&
                <PokemonDetailCard
                    cardColor={pokemonCardColor(pokemonDetail.types[0].type.name)}
                >
                    <ImageContainer>
                        <PokeImageFrontBack
                            src={pokemonDetail.sprites.versions["generation-v"]["black-white"].animated.front_default
                            }
                        />
                        <PokeImageFrontBack
                            src={pokemonDetail.sprites.versions["generation-v"]["black-white"].animated.back_default
                            }
                        />
                    </ImageContainer>
                    <BaseStats>
                        <h1>Base Stats</h1>
                        <StatsContainer>
                            {pokemonDetail.stats.map((poke) => {
                                sumBaseStats += poke.base_stat
                                return (
                                    <StatsPokemons
                                        key={poke.id}
                                    >
                                        <PokeStatusName>{poke.stat.name}</PokeStatusName>
                                        <div>{poke.base_stat}</div>
                                        <BarProgress>
                                            <Progress
                                                max={200}
                                                style={
                                                    {
                                                        border: '1px solid black',
                                                        borderRadius: '2px'
                                                    }}
                                                colorScheme={changeBarProgressColor(poke.base_stat)}
                                                value={poke.base_stat}
                                            ></Progress>
                                        </BarProgress>
                                    </StatsPokemons>
                                )
                            })}
                            <div
                                style={{ marginLeft: '1rem' }}
                            >Total: {sumBaseStats}</div>
                        </StatsContainer>
                    </BaseStats>
                    <div>
                        <PokemonImage src={
                            pokemonDetail.sprites.other["official-artwork"].front_default
                        } />
                        <PokeballDetailImage src={pokeballCard} />
                    </div>
                    <div style={{ margin: "2rem" }}>
                        <PokemonIdNameContainer>
                            <PokemonId>
                                {pokemonDetail.id < 10
                                    ? '#0' + pokemonDetail.id
                                    : '#' + pokemonDetail.id}
                            </PokemonId>
                            <PokemonName>
                                {pokemonDetail.name}
                            </PokemonName>
                        </PokemonIdNameContainer>
                        <TypesContainer>
                            {pokemonDetail.types.map((type) => {
                                return<PokemonType
                                        key={type.id}
                                        src={pokemonTypeCards(type.type.name)}
                                    />
                            })}
                        </TypesContainer>
                        <MoveContainer>
                            <h1>Moves:</h1>
                            <TableContainer
                            style={{zIndex:"2", overflowY:"scroll"}}
                            >
                                <Table
                                    variant='striped' colorScheme="gray">
                                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                    <Thead >
                                        <Tr>
                                            <Th>Move</Th>
                                            <Th>Type</Th>
                                            <Th>Category</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {pokemonDetail.moves
                                        
                                        .sort((a, b) => {
                                            return a.move.name.localeCompare(b.move.name)
                                        })
                                        
                                        .map((move, index) => {
                                            return (
                                                index < 20 &&
                                                <PokeMove
                                                    move={move}
                                                    url={move.move.url}
                                                />
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </MoveContainer>
                    </div>
                </PokemonDetailCard>
            }


        </PokemonDetailStyle>
    )
}

