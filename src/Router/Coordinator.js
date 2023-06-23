export const goToPokemonListPage = (navigate) => {
    return navigate('/')
}

export const goToPokedexPage = (navigate) => {
    return navigate('/pokedex/')
}

export const goToPokemonDetail = (navigate, id) => {
    return navigate(`/detalhes/${id}`)
}