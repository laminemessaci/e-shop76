
import { ViewStyle } from 'react-native'
import type {ReactNativePaper} from 'react-native-paper'

interface IStyles {
  container:  (arg0: ReactNativePaper.Theme) =>  ViewStyle
}

const styles: IStyles = {
  container: theme=>({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  })
  
}

export default styles
