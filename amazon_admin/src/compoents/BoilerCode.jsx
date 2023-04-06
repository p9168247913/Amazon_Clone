import React, { useState } from 'react'
import { deleteAPI } from '../AllAPIFect'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,

} from '@chakra-ui/react'
import axios from 'axios'

const BoilerCode = ({ imglink, name, MRP, id, handlaingDelete, handlingPatch, _id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [price, setPrice] = useState("")

    const handelEdit = (_id) => {
        // handlingPatch(_id, payload)
        console.log(_id)
    }
    const handelDelete = (id) => {
        handlaingDelete(id)
        // console.log(indVa)
    }

    const handleUpdate = (value) => {
        let payload = { MRP: +(price) }
        handlingPatch(value, payload)
        // console.log('checking')
        // axios.patch(`https://localhost:8080/telivision/63fb0196145bd569a0c66c19`, {
        //     MRP: 20000
        // })
        //     .then((res) => {
        //         console.log(res)
        //     }).catch((e) => {
        //         console.log(e)
        //     })

        // console.log(value, payload)
    }
    return (
        <div style={{ height: "600px", paddingBottom: "-50px" }} className='boliderCode-contaier'>
            <div style={{ marginBottom: "15px" }}>
                <div style={{ height: "300px", }}>
                    <img style={{ height: "100%", width: "100%" }} src={imglink} alt={name} />
                </div>
                <div style={{ height: "130px", marginBottom: "15px" }}>
                    <h3 >{name}</h3>
                    <h4>Price:- {MRP}/-</h4>

                </div>
            </div>
            <div style={{ paddingTop: "25px", paddingBottom: "-25px", display: "flex", justifyContent: "space-around", marginTop: '50px', height: "70px" }}>
                {/* <button style={{border: "none",backgroundColor:"#2e8b57  ", height:'50px', width:"35%",fontSize:"25px", color:"white", borderRadius:"10px", fontWeight:"bolder"}}  onClick={()=>handelEdit(id)}>Edit</button> */}
                <button style={{ border: "none", backgroundColor: "orange", height: '50px', width: "35%", fontSize: "25px", color: "white", borderRadius: "10px", fontWeight: "bolder" }} onClick={() => handelDelete(id)}>Delete</button>
                <>
                    <Button style={{ border: "none", backgroundColor: "#2e8b57  ", height: '50px', width: "35%", fontSize: "25px", color: "white", borderRadius: "10px", fontWeight: "bolder" }} onClick={onOpen}>Edit</Button>

                    <Modal isOpen={isOpen} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                            </ModalBody>
                            <Input value={price} placeholder='Input Price' onChange={(e) => setPrice(e.target.value)} />
                            <Button onClick={() => handleUpdate(_id)}>SAVE</Button>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost'>Secondary Action</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>                 </>
            </div>
        </div>
    )
}

export default BoilerCode