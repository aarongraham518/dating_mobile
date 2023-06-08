import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserMini } from "../components/UserMini";
import { Searchbar } from "react-native-paper";
import { Greeting } from "../components/Greeting";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const getUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_start=0&_limit=8"
    );
    const userData = await response.json();

    setUsers(userData);
  };

  useEffect(() => {
    getUsers();
    console.log(users, 'ARE THE USER OBJECT');
  }, []);

  let filteredUsers = users.filter((user) => user.name.includes(search.toLowerCase()))

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Greeting />
      </View>

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search Users..."
          placeholderTextColor="white"
          style={styles.bckGrnd}
          color="white"
          iconColor="white"
          onChangeText={(e) => setSearch(e)}

          // onChangeText={(e) => setUsers((prevValue) => [...prevValue, ...users.filter((item) => item.name.toLowerCase().includes(e.toLowerCase()))])}
          
          // value={search}
        />
      </View>

      <View>
        {filteredUsers.map((data) => (
          <UserMini
            key={data.id}
            id={data.id}
            realName={data.name}
            city={data.address.city}
            userName={data.username}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingLeft: 15,
    paddingRight: 15,
  },
  greetingContainer: {
    marginTop: "12%",
    marginBottom: 20,
    height: "7%",
  },
  bckGrnd: {
    backgroundColor: "#1e1d1d",
    color: "white",
  },
});
