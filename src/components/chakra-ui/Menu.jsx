import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  IconButton
} from "@chakra-ui/react";
import { CiMenuKebab, CiSettings  } from "react-icons/ci";
import {FiLogOut} from "react-icons/fi"

const MainMenu = ({ isOpen, onOpen, onClose }) => {
  return (
    <Menu 
        isOpen={isOpen} 
        onOpen={onOpen} 
        onClose={onClose}
    >
      <MenuButton
        as={IconButton}
        icon={<CiMenuKebab size={25}/>}
        aria-label="Menu"
        variant="ghost"
        size="lg"
        colorScheme="blue"
        // color="#00A3FF"
        className="md:hidden "
      />
      <Portal>
        <MenuList>
            <MenuItem 
                color="#00A3FF" 
                onClick={onClose}
                icon={<CiSettings size={20}/>}
            >
                Settings
            </MenuItem>
            <MenuItem 
                color="#00A3FF" 
                icon={<FiLogOut size={20}/>}  
                onClick={onClose}
            >
                Logout
            </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MainMenu;
