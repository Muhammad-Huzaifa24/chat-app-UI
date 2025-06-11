import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { IoMdPersonAdd } from "react-icons/io";

const AddContactModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                borderRadius="lg"
                px={{ base: 4, sm: 6 }}
                py={2}
                mx={{ base: 6, sm: 'auto' }}
                my={{ base: 6, sm: 'auto' }}
            >                <ModalHeader>
                    <div className="flex  items-center justify-center gap-3 mt-4" >
                        <IoMdPersonAdd size={30} color="#00A3FF" />
                        <span className="text-2xl font-semibold text-black f-inter">Add Contact</span>
                    </div>
                </ModalHeader>

                <ModalCloseButton />
                <ModalBody pb={4}>
                    <FormControl mb={4}>
                        <FormLabel fontWeight="medium" color="black">Name</FormLabel>
                        <Input
                            placeholder="Enter name"
                            borderColor="#00A3FF"
                            focusBorderColor="#00A3FF"
                            _placeholder={{ color: "gray.400" }}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel fontWeight="medium" color="black">Phone</FormLabel>
                        <Input
                            placeholder="Enter phone number"
                            borderColor="#00A3FF"
                            focusBorderColor="#00A3FF"
                            _placeholder={{ color: "gray.400" }}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose} color="black" border="1px solid #00A3FF">
                        Cancel
                    </Button>
                    <Button bg="#00A3FF" color="white" _hover={{ bg: "#008DD6" }}>
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddContactModal;
