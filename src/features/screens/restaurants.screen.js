import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantsScreenView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchItem, setSearchItem] = React.useState();
  return (
    <RestaurantsScreenView>
      <SearchView>
        <Searchbar
          placeholder="search"
          onChangeText={(text) => {
            setSearchItem(text);
          }}
          value={searchItem}
        />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </RestaurantsScreenView>
  );
};
