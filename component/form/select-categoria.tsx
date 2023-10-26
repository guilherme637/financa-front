import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {categoria} from "@/service/forms/select/categoria";

export default function SelectCategoria() {
    return (
        <div className="flex flex-col gap-1">
            <Select
                label="Categoria"
            >
                {categoria.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
