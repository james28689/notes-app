
import React, {createContext, useReducer} from "react";
import Reducer from './reducer'

var d = new Date();

const initialState = {
    selected: 1,
    loggedIn: false,
    selectedDay: d.getDay(),
    apiKey: null,
    theme: "light",

    NotesData: [
        // { id: 1, parentId: null, name: "School", type: "folder" },
        // { id: 2, parentId: 1,    name: "Computing", type: "folder" },
        // { id: 4, parentId: 1,    name: "Exams", type: "folder" },
        // { id: 6, parentId: 4,    name: "Exam Timetable", type: "file", content: "test content"},


        // {id: "301463553868562951", userID: "299233585396711937", parentId: null, name: "School"}

        // { id: 2680451359851911008, parentId: 2, name:"Communication Basics", type: "file", content:`<h1>Communication Basics</h1><h2>Synchronous vs Asynchronous</h2><p>In Sync communication, streams of bits are transferred over a communication channel at a constant rate. The transmitter and receiver are synchronised using a clock signal.</p><p>In Async, there is on clock, so start and stop bits are used to control the communication.  Data is transmitted when its available, rather than at specific intervals.</p><p>Sync allows for more data to be transferred over time because start and stop bits are not required.</p><h2>Serial vs Parallel</h2><p>Serial transfers bits one by one over a single wire.</p><p>Parallel transfers multiple bits at once, over multiple wires.  This type of communication is not reliable over long distances and is therefore only used inside the computer.  For example in buses.</p><h2>Issues with parallel</h2><h3>Crosstalk</h3><p>Skew occurs when EM interference between wires that are in proximity results in transmitting corrupted data  that will need to be re-sent.</p><h3>Skew</h3><p>Occurs when data in parallel links are transmitted at different speeds, this causes data to to fall out of sync.</p>` }, 
        // { id: 7883411916000173039, parentId: 2, name:"Databases", type: "file", content:'<h1>Databases</h1><p>Keys are underlined.</p><p>Primary Key - The index of a table and therefore unique.  The "one" part of a "one to many" relationship.</p><p>Foreign Key - The attribute on the many side of the relationship that links to the primary key of a separate table.</p><h3>Normalisation</h3><p>converts flat files to relational databases.</p><p>Removes redundant data, making the database more effiecient.</p><h3>First Normal Form:</h3><ol><li>Eliminate duplicate columns.</li><li>remove groups of repeating data. (If one cell has multiple values within it, the entire row should be duplicated with each value in a separate row.)</li><li>Identify the Primary Key (this can be a composite key formed of many columns)</li><li>Separate out any attributes that are not atomic into separate attributes. (E.g. splitting name into first and surname columns).</li></ol><h3>Second Normal Form:</h3><ol><li>Ensure data is in 1NF</li><li>Remove any partial dependencies. (only happens in a composite key was used as the primary key). This can be spotted by moving from left to right and determining if data repeats in the column and if the column can be used to infer info about a later column.</li><li>Fix any many to many relationships you find. When many to many relationships are found, the data should instead be linked by a new table storing the primary keys of both original tables. In this new linking table the primary key is a composite key of both foreign keys.</li></ol><h3>Third Normal Form</h3><ol><li>Check data is in 2NF</li><li>check there are no "non-key dependencies" (every non-key field must depend on only the key)</li></ol><h2>SQL</h2><p>```SELECT field FROM table WHERE field = value ORDER BY field</p><p>```</p><p>```INSERT INTO tableName (FieldName, FieldName2) VALUES (val1, val2);</p><p>```</p><p>```UPDATE tableName SET field = 15 WHERE field = “value” OR field = “value2”;</p><p>```</p><p>```CREATE TABLE tblBooking (ClientId INT,PartyDate DATE,PartyTime TIME,Venue VARCHAR(30),PartyType VARCHAR(12),Children INT,FOREIGN KEY (ClientId REFERENCES tblClient.ClientId),PRIMARY KEY(ClientId, PartyDate));</p><p>```</p>' }, 
        // { id: -4860862260586656682, parentId: 2, name:"Network Layer Model", type: "file", content:`<h1>Network Layer Model</h1><h2>TCP IP Stack</h2><h3>Application Layer</h3><p>Protocols and methods that are used to provide user interfaces for applications. Examples of protocols user here are HTTP, HTTPS, POP3. SMTP, IMAP.</p><h3>Transport Layer</h3><p>Divides data into packets. Packets have a number so thy can be reassembled by the receiver. This is where TCP and UDP are mangaged. (TCP Segments)</p><h3>Network Layer</h3><p>Adds the sender and recipients IP address to each packet. (IP Packets)</p><h3>Link Layer</h3><p>Transports packets across the network, this layer includes physical hardware. (Ethernet Frames)</p><h2>Subnets</h2><p>A subnet mask is used to determine if two devices are on the same network.  This is done by performing a Bitwize and with the IP address and the subnet mask.  This has the effect of removing the device's specific IP and getting the general network's IP.  192.168.0.32 with a subnet mask 255.255.255.0 gives 192.168.0.0.</p><p>Subnets are used to split a network into parts, this is done to speed up the network by reducing shared bandwidth.</p><h2>Non-Routable IPs</h2><p>IPs within private networks can't be routed by internet routers, this allows the number of devices that can be used with IPv4 to increase but means that data destined for a separate network must be translated using NAT.</p><h2>Network Address Translation (NAT)</h2><p>The edge router holds a pool of public IP addresses (or only one).  Any packet heading outside the network has its private IP swapped for the public IP and is then sent on.   This allows an entire private network to run on a signal public IP.</p><h2>Dynamic Host Configuration Protocol (DHCP)</h2><p>DHCP dynamically assigns private IPs within a network.</p><ol><li>Discovery - The new device broadcasts a discover network over the network.</li><li>Offer - The DHCP server offers the client an IP.</li><li>Request - The client sends a message to the DHCP server requesting an offered IP address.</li><li>Acknowledgement - The DHCP server replies acknowledging that the IP has been allocated.</li></ol><h2>Ports</h2><p>Routers can be programmed to forward traffic from the internet to a specific device's private IP address.  This gives it access to the internet as if it is using the edge router's public IP.</p>` }, 
        // { id: 3588135963777352420, parentId: 2, name:"Hardware", type: "file", content:`<h1>Hardware</h1><h2>Buses</h2><p>Data Bus - connects to the main memory and the processor.</p><p>Address bus - connects to the processor and the RAM.</p><p>Control Bis connects to all components to share control signals.</p><h2>The Processor</h2><h3>The ALU</h3><p>Performs all calculations and logical bitwise operations.</p><h3>The Control Unit</h3><p>Decodes opcodes into control signals that are then sent to other parts of the processor.</p><h3>Clock</h3><p>Keeps all parts of the processor syncropnised.</p><h3>Registers</h3><p><strong>Dedicated or special-purpose registers</strong> are processor-based registers that are used for a specific purpose. The registers used in the fetch-decode-execute cycle are special purpose registers because each one of them has a specific role to play in each phase of the fetch-decode-execute cycle. Their roles are specified below:</p><ul><li><strong>Program counter (PC)</strong>: Holds the address of the next instruction to be executed by the processor.</li><li><strong>Current instruction register (CIR)</strong>: Holds the current instruction that the processor is executing.</li><li><strong>Status register (SR)</strong>: Used to store information about the result of the last instruction that the ALU executed. Each bit within the status register acts as a flag to indicate if an <strong>error or exception</strong> has occurred within the process, or to enable or disable <strong>interrupts</strong> to be raised:</li><li>An error or exception is when the result of a calculation requires further action. For example, it signifies if the result of a calculation is negative or zero, or if a calculation produced an overflow or/and a carry.</li><li>An interrupt is an event outside of the program process which requires the attention of the processor. For example, indicating a hardware malfunction.</li><li><strong>Memory address register (MAR)</strong>: Temporarily holds the address of the memory location (in main memory) that the processor needs to access, either to read from (i.e. load data) or write (i.e. store data) to.</li><li><strong>Memory buffer register (MBR)/memory data register (MDR)</strong>: Temporarily holds the data (data values or instructions) that are read from or written to the main memory.</li><li><strong>Accumulator</strong>: Stores the result of any calculation processed by the ALU. The processor accesses other general purpose registers where temporary values are stored while calculations are completed. Any result resides in the accumulator.</li></ul><h2>Fetch Decode Execute Cycle</h2><p>An instruction is fetched from RAM based on the value of the program counter and stored in the instruction register.</p><p>The value of the program counter is incremented.</p><p>The CU splits the instruction into an opcode and operand.</p><p>The opcode is used to set control signals for the next clock pulse.</p><p>on the next clock pulse the instruction is executed.</p>` }, 
        // { id: 2052594543922764366, parentId: 2, name:"Binary Operations", type: "file", content:`<h1>Binary Operations</h1><h2>Floating Point</h2><p>Floating Point numbers are the equivalent of standard form in binary they are therefore in the form $x.2^y$.</p><p>The number is split into the mantissa and exponent, both are stored in two's complement.</p><p>When using floating point numbers they must be in normal form. </p><ul><li>If negative, the number must start 1.</li><li>If positive, the number must start 0.</li></ul><h2>Normalisation</h2><p>When using floating point, all values must be normalised.  This means that the binary point should be shifted as far left as possible without changing the value of the number.</p><p>1.110111*2^0 is the same as 1.0111 * 2^-2 and therefore it should be written as such.</p><h2>Overflow and Underflow</h2><p>Overflow occurs when the result of a calculation is larger that can be stored in the allocated bits.  This occurs is the exponent is too large or too small.</p><p>Underflow occurs when a value is too small to be represented by the allocated bits.</p>` }, 
        // { id: 2425428532234564187, parentId: 2, name:"Functions, Sets and Infinity", type: "file", content:`<h1>Functions, Sets and Infinity</h1><h2>Sets</h2><p>Real Numbers - Any non-imaginary value.</p><p>Rational - Any value that can be expressed as as fraction.</p><p>Integer - Positive of negative</p><p>Natural - Positive integers.</p><h2>Functions, Domain and Co-domain</h2><p>The domain of a function is any value it will take as an input.  The outputs of the function are called the range, which is selected from a larger group of values known as the co domain.</p><p>For example:</p><p>f(x) = 1/x</p><p>The function takes any value but 0.</p><p>It outputs any value but 0.</p><p>The outputs come from the larger set, the real numbers.</p>` }, 
        // { id: -6551053483453856062, parentId: 2, name:"OS and Resource Management", type: "file", content:`<h1>OS and Resource Management</h1><p>The OS is responsible for managing the allocation of resources to different programs, as well as for providing a user interface the the user.</p><h2>Resource Management</h2><ul><li>Memory Allocation</li><li>Processor Time Allocation</li><li>Storage Allocation</li></ul><h2>Other Functions</h2><ul><li>Disk Defragmentation</li><li>User Interface</li></ul><h2>Classes of Software</h2><ul><li>OS - Operating System, A collection of programs required to control the operation of computer hardware.</li><li>Utility Programs, Software to support the efficient running of the computer. (E.g. Antivirus)</li><li>Libraries, Prewritten implementations of common problems provided to make writing new programs easier.</li><li>Translators, Compilers, Interpreters and Assemblers.</li></ul><h2>Interrupts</h2><p>Interrupts are used to signal that urgent attention is required.  When an interrupt is received it stops its current work and handles the interrupt.</p>` }, 
        // { id: 1514985262711557980, parentId: 2, name:"Logic and Boolean Algebra", type: "file", content:`<h1>Logic and Boolean Algebra</h1><p><img alt="Logic%20and%20Boolean%20Algebra%205338a86040d443868f36de611bd3f6f0/Untitled.png" src="Logic%20and%20Boolean%20Algebra%205338a86040d443868f36de611bd3f6f0/Untitled.png" /></p><p><img alt="Logic%20and%20Boolean%20Algebra%205338a86040d443868f36de611bd3f6f0/Untitled%201.png" src="Logic%20and%20Boolean%20Algebra%205338a86040d443868f36de611bd3f6f0/Untitled%201.png" /></p>` }, 
        // { id: 5091857577484086753, parentId: 2, name:"Ciphers, Key Exchange", type: "file", content:`<h1>Ciphers, Key Exchange</h1><h2>Ciphers</h2><p>When sharing data, privacy is valuable.  This can be achieved using encryption.</p><h2>Vernam Cipher</h2><p>This cipher takes the plaintext and xors it with a key known to both parties.  When the recipient receives the message they xor it with the key again to decrypt it.</p><h2>Key Exchange</h2><p>When communicating securely, both parties need to know the key.  This can be avoided using an aymetric encryption scheme.</p><p>This means that a public key can be used to encrypt the message while a private key is used to decrypt it.</p><p>A is sending to B</p><p>A uses B's public key to encrypt the message, then sends it to B.</p><p>B uses their private key to decrypt the message, removing the need for key exchange.</p>` }, 
        
    ],
    openFile: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;