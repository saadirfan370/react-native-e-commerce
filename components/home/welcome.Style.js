import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    welcometxt:(color,top) =>({
        fontFamily:"bold",
        fontSize:SIZES.xxLarge - 14,
        marginTop: top,
        color:color,
        marginHorizontal:SIZES.small
    }),
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:SIZES.small,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:45 
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
        width:'100%',
        height:"100%",
        paddingHorizontal:SIZES.small,

    },
    searchbtn:{
        width:50,
        height:'100%',
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary,
    },
    carouselContainer:{
        flex:1,
        alignItems:"center"
    }
})

export default styles;