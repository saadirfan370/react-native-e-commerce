import { StyleSheet } from "react-native";
import { SIZES,COLORS } from "../../constants";


const styles1 = StyleSheet.create({
    container:{
        marginTop:SIZES.medium,
        // marginBottom: -SIZES.xSmall,
        marginHorizontal:12,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    headerTitle:{
        fontFamily:"semibold",
        fontSize:SIZES.xLarge -2,
        
    }
})
export default styles1;