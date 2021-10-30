import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default App = () => {

    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState([]);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.cypress.io/todos?_limit=10')
                .then((resp) => resp.json())
                .then((json) => setDados(json))
                .catch(() => (alert('erro ao carregar a lista')))
                .finally(() => setCarregando(false))
        }, [])

    return (
        <View>
            {
                carregando ? <ActivityIndicator /> : (
                    <FlatList
                        data={dados}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.title}</Text>

                        )}
                    />
                )
            }
           
        </View>
    );
};
