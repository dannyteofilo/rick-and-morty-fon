import React from "react";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image, Text, Link } from "@chakra-ui/react";

export const DetailModal = ({ isOpen, onClose, character }) => {
    console.log(character)
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{character.name}</ModalHeader>
                <ModalCloseButton color="white" _hover={{ color: "gray.300" }} />
                <ModalBody>
                    <Image
                        src={character.image}
                        alt={character.name}
                        borderRadius="md"
                        boxShadow="md"
                        mb={4}
                        transition="opacity 0.3s ease"
                        _hover={{ opacity: 0.8 }}
                    />

                    <Text color="gray.700" fontWeight="bold" mb={2}>Status: {character.status}</Text>
                    <Text color="gray.700" fontWeight="bold" mb={2}>Species: {character.species}</Text>
                    <Text color="gray.700" fontWeight="bold" mb={2}>Gender: {character.gender}</Text>
                    <Text color="gray.700" fontWeight="bold" mb={2}>Origin: {character.origin.name}</Text>
                    <Text color="gray.700" fontWeight="bold" mb={2}>Location: <Link href={character.location.url} target="_blank" rel="noopener">{character.location.name}</Link></Text>
                    <Text color="gray.700" fontWeight="bold" mb={2}>Episode: <Link href={character.episode[0]} target="_blank" rel="noopener">{character.episode[0]}</Link></Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

