import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'

import styles from './popularmovies.style'
import { COLORS, SIZES } from '../../../constants'
import PopularMovieCard from '../../common/cards/popular/PopularMovieCard'

import useFetch from '../../../hook/useFetch'


const PopularMovies = () => {
    const router = useRouter()
    const {data, isLoading, error} = useFetch('get-most-popular-movies')
    console.log(data)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Movies</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? 
                <ActivityIndicator size="large" color={COLORS.primary}/> : error ? <Text>Something went wrong</Text>
                : <FlatList
                    data={[1,2,3,4]}
                    renderItem={({item}) => (
                        <PopularMovieCard item={item}/>
                    )}
                    keyExtractor={item => item?.id}
                    contentContainerStyle={{columnGap: SIZES.medium}}
                    horizontal

                />
            }
            </View>
            
        </View>
    )
}

export default PopularMovies