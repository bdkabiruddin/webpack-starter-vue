import {
    library,
    dom
}
from "@fortawesome/fontawesome-svg-core";
import {
    faAddressBook as fasAddressBook
} from "@fortawesome/free-solid-svg-icons";
import {
    faAddressBook as farAddressBook
} from "@fortawesome/free-regular-svg-icons";
import {
    faAbacus as fasAbacus
} from "./pro-solid-svg-icons";
import {
    faAbacus as farAbacus
} from "./pro-regular-svg-icons";
import {
    faAddressBook as falAddressBook,
    faAbacus as falAbacus
} from "./pro-light-svg-icons";
import {
    faAddressBook as fadAddressBook,
    faAbacus as fadAbacus
} from "./pro-duotone-svg-icons";

library.add(
    fasAddressBook, 
    farAddressBook, 
    falAddressBook, 
    fadAddressBook, 
    fasAbacus, 
    farAbacus, 
    falAbacus, 
    fadAbacus
    );
dom.watch();