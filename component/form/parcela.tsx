import React, {useState} from "react";
import {Button, Input, useDisclosure} from "@nextui-org/react";

export default function Parcela() {
    const [isOpen, setIsOpen] = useState(true);

    function setIsOpenValue(value) {
        setIsOpen(value);
    }

    return (
        <>
            <span hidden={!isOpen}>
                <Button onClick={()=>setIsOpenValue(false)} color="dark" className="text-red-500">Parcelas pagas ?</Button>
            </span>
            <div hidden={isOpen}>
                <Input
                    label="Parcela"
                    labelPlacement="outside"
                    placeholder="Informe a data da compra"
                    variant="bordered"
                    type="number"
                    isRequired
                    endContent={
                        <Button onClick={()=>setIsOpenValue(true)} color="dark">X</Button>
                    }
                />
            </div>
        </>
    );
}