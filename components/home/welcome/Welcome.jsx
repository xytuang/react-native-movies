import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './Welcome.styles'
import { icons, SIZES } from '../../../constants'

const movieTypes= ['full', 'part', 'contract']

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
    const router = useRouter()
    const [activeMovieType, setActive] = useState('1')
    

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello</Text>
                <Text style={styles.welcomeMessage}>Find your perfect movie</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                        placeholder='What are you looking for?'
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList 
                    data={movieTypes}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            style={styles.tab(activeMovieType, item)}
                            onPress={() => {
                                setActive(item)
                                router.push(`/search/${item}`)
                            }}
                        >
                            <Text style={styles.tabText(activeMovieType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{columnGap: SIZES.small}}
                    horizontal
                />

            </View>
        </View>
    )
}

export default Welcome