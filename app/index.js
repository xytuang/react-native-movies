import { useState } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import Welcome from '../components/home/welcome/Welcome'
import PopularMovies from '../components/home/popular/PopularMovies'




const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    ),
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={() => console.log('hi')}/>
                    <PopularMovies/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home