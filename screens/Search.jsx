import React, { useState } from "react";
import { View, Text, TouchableOpacity,TextInput,Image  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./search.Style";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import { SearchTile } from "../components";

const Search = () => {
  const [serachKey, setSearchKey] = useState();
  const [searchResult, setSearchResult] = useState([]);


  //http://192.168.100.34:3000/api/products/search/green
  const handleSearch = async() => {
    try {
      const response = await axios.get(`http://192.168.100.34:3000/api/products/search/${serachKey}`)
      setSearchResult(response.data)
    } catch (error) {
      console.log("fail to fetch ",error);
    }
  };
  

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={serachKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {
        searchResult.length === 0 ? (
          <View style={{flex:1}}>
            <Image source={require('../assets/images/Pose23.png')}
            style={styles.searchImage}
            />
          </View>
        ):(
          <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (<SearchTile item={item}/>)}
          style={{marginHorizontal:12}}
          />
        )
      }
    </SafeAreaView>
  );
};

export default Search;
