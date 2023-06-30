import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacter } from "../redux/slice/characterSlice";
import { DetailModal } from "./DetailModal";
import { Box, Input, Button, Text, Spinner, Image } from "@chakra-ui/react";

const SearchView = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const { characters, loading, error } = useSelector((state) => state.character);

    const handleSearch = () => {
        dispatch(searchCharacter(query));
    };

    const handleCharacterClick = (character) => {
        console.log('character: ', character)
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    };

    return (
        <Box p={4}>
            <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                mb={4}
            />
            <Button colorScheme="teal" onClick={handleSearch} mb={4}>
                Search
            </Button>

            {loading && <Spinner size="sm" color="teal.500" />}
            {error && <Text color="red.500">Error: {error}</Text>}

            {characters.map((character) => (
                <Box
                    key={character.id}
                    bg="gray.100"
                    p={4}
                    mb={4}
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    onClick={() => handleCharacterClick(character)}
                >
                    <Image
                        src={character.image}
                        alt={character.name}
                        boxSize="100px"
                        mr={4}
                    />
                    <Box>
                        <Text fontSize="xl" fontWeight="bold">
                            {character.name}
                        </Text>
                    </Box>
                </Box>
            ))}
            {selectedCharacter && (
                <DetailModal
                    isOpen={!!selectedCharacter}
                    onClose={handleCloseModal}
                    character={selectedCharacter}
                />
            )}
        </Box>
    );
};

export default SearchView;
