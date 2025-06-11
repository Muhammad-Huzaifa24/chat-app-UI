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
                px={{ base: 1, sm: 6 }}
                py={6}
                mx={{ base: 6, sm: 'auto' }}
                my={{ base: 6, sm: 'auto' }}
            >
                <ModalHeader mb={2}>
                    <div className="flex items-center justify-center gap-3 mt-4" >
                        <IoMdPersonAdd size={30} color="#00A3FF" />
                        <span className="text-2xl font-semibold text-black f-openSans">Add Contact</span>
                    </div>
                </ModalHeader>

                <ModalCloseButton />
                <ModalBody pb={4}>
                    <FormControl mb={8}>
                        {/* <FormLabel fontWeight="medium" color="black">Name</FormLabel> */}
                        <Input
                            placeholder="Enter name"
                            borderColor="#00A3FF"
                            focusBorderColor="#00A3FF"
                            _placeholder={{ color: "gray.400" }}
                            variant="flushed"
                        />
                    </FormControl>

                    <FormControl>
                        {/* <FormLabel fontWeight="medium" color="black">Phone</FormLabel> */}
                        <Input
                            placeholder="Enter phone number"
                            borderColor="#00A3FF"
                            focusBorderColor="#00A3FF"
                            _placeholder={{ color: "gray.400" }}
                            variant="flushed"
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter gap={'4'} mt={2}>

                    <Button
                        width={'full'}
                        bg="#00A3FF"
                        color="white"
                        _hover={{ bg: "#008DD6" }}
                        variant={'solid'}
                        rounded={'full'}
                    >
                        Add
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        color="black"
                        border="1px solid #00A3FF"
                        width={'full'}
                        rounded={'full'}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddContactModal;
