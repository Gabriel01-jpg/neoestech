import { Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

export function Search(){
    return (
        <div className="w-full max-w-[48rem] h-10 hidden font-serif lg:flex">
            <Input placeholder="Digite aqui o que procura." prefix={<AiOutlineSearch />} />
        </div>
    )
}