import axios from "axios";
import { useEffect, useState } from "react";
import {
  SearchBarWrapper,
  Input,
  SearchIcon,
  Wrapper,
  ResultsContainer,
  UserResult,
  HideTransitionBlock,
} from "../styles/searchbar.style";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");
  const [usersData, setUsersData] = useState([]);

  const handleInput = (e) => setInputText(e.target.value);
  console.log(usersData);

  useEffect(() => {
    if (inputText.length > 2) {
      axios
        .get(`http://localhost:5000/users`, {
          params: {
            username: inputText,
          },
        })
        .then(({ data }) => setUsersData(data))
        .catch(console.dir);
    } else {
      setUsersData([]);
    }
  }, [inputText]);

  return (
    <SearchBarWrapper>
      <HideTransitionBlock />
      <Input
        minLength={3}
        debounceTimeout={300}
        onChange={handleInput}
        placeholder="Search for people"
      />
      <SearchIcon />
      {usersData.length > 0 && (
        <ResultsContainer>
          {usersData.map((user, index) => (
            <UserResult key={user.username + index}>
              <h5>{user.username}</h5>
              <img src={user.pictureUrl} alt="avatar" />
            </UserResult>
          ))}
        </ResultsContainer>
      )}
    </SearchBarWrapper>
  );
}