'use client';

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import SelectCategoria from "@/component/form/select-categoria";
import Parcela from "@/component/form/parcela";

export default function App() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <Button onPress={onOpen} color="dark">Adicionar</Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 text-center">Adicionar Conta</ModalHeader>
                                <ModalBody>
                                    <Input
                                        label="Conta"
                                        labelPlacement="outside"
                                        placeholder="Informe o nome da conta"
                                        variant="bordered"
                                        type="text"
                                        isRequired
                                    />
                                    <Input
                                        label="Valor"
                                        placeholder="0.00"
                                        labelPlacement="outside"
                                        startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">$</span>
                                            </div>
                                        }
                                        endContent={
                                            <div className="flex items-center">
                                                <label className="sr-only" htmlFor="currency">
                                                    Currency
                                                </label>
                                                <select
                                                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                                                    id="currency"
                                                    name="currency"
                                                >
                                                    <option>BR</option>
                                                    <option>EUR</option>
                                                </select>
                                            </div>
                                        }
                                        type="number"
                                        isRequired
                                    />
                                    <Parcela/>
                                    <Input
                                        autoFocus
                                        label="Data"
                                        placeholder="Informe a data da compra"
                                        variant="bordered"
                                        type="date"
                                        isRequired
                                    />
                                    <h4>Situação</h4>

                                    <div className="flex m-2 justify-center">
                                        <div className="flex m-2">
                                            <Checkbox
                                                classNames={{
                                                    label: "text-small",
                                                }}
                                                isRequired
                                            >
                                                Pago
                                            </Checkbox>
                                        </div>
                                        <div className="flex m-2">
                                            <Checkbox
                                                classNames={{
                                                    label: "text-small",
                                                }}
                                                isRequired
                                            >
                                                Pago
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <SelectCategoria />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Sign in
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </NextThemesProvider>
        </NextUIProvider>
    );
}
