import { View, Text, Image } from 'react-native'
import Swiper from 'react-native-swiper';

import React, { useEffect, useState } from 'react'
import { SCREEN_HEIGHT } from '../../constants';
import { useTheme } from '../../theme/ThemeProvider';

type BannerProps = {

};

const Banner: React.FC<BannerProps> = (props) => {
const [bannerData, setBannerData] = useState<any>([])
const theme = useTheme();


  useEffect(() => {

    setBannerData([
      {
        id: 1,
        image: "https://media.istockphoto.com/id/1179859221/fr/photo/dame-%C3%A9motionnelle-dans-les-surprises-robe-et-d%C3%A9place-les-mains-%C3%A0-face.jpg?s=2048x2048&w=is&k=20&c=8sUB4dLX5Myejys0OLjeXITvvOUjQL1My2xqL0f9-8E=",
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/1435042650/fr/photo/paire-de-chaussures-de-sport-blanches-en-plus-des-jambes-dune-femme-daffaires.jpg?s=2048x2048&w=is&k=20&c=whXOXwgleNx0R8FL9TVuDDitiS7TyqOJH1YGtfV1Cyc=",
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/1160431732/fr/photo/robe-heureuse-de-femme-choisissant-fille-attirante-retenant-des-v%C3%AAtements-dor-sur-le-hanger.jpg?s=2048x2048&w=is&k=20&c=Gct9To55-YdtvT8S_1Qy6wDe2RKQHTpNPKx4SzOMWSU=",
      },
    ])

    return () => {
setBannerData([])
    }


  }, [])
  return (
    <View style={{ height: SCREEN_HEIGHT / 4 }}>
     <View>
      <Swiper
        autoplay
        horizontal
        style={{ height:SCREEN_HEIGHT / 4 }}
        dotColor="white"
        activeDotColor={theme.colors.primary}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
        }}
        activeDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
        }}
        
        >
        {bannerData.map((item: any) => (
          <View key={item.id}>
            <Image
              source={{ uri: item.image }}
              style={{ height: 200, width: "100%" }}
            />
          </View>
        ))}
      </Swiper>
     </View>
    </View>
  );
};
export default Banner