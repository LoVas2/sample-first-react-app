import React from 'react'
import {StyleSheet, Button, TextInput, View, FlatList, Text} from "react-native";
import { searchMovies } from "../API/TMDBApi";
import FilmItem from "./FilmItem";

class Search extends React.Component {

    constructor(props) {
        super(props);
        // this._films = [];
        this.searchedText = ''
        this.state = { films: []}
    }


    _loadFilms() {
        console.log(this.searchedText)
        searchMovies(this.searchedText).then(data => {
            this.setState({
                films : data.results,
            })
        })
    }

    render() {
        console.log('RENDER')
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.text_input}
                    placeholder='Titre du film'
                    onChangeText={text => this.searchedText=text}/>
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={ (item) => item.id.toString()}
                    renderItem={ ({item}) => <FilmItem film={item} /> } />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1, marginTop: 50
    },
    text_input: {
        marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5
    }
})

export default Search
