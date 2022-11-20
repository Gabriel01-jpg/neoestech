import { Form, Input, InputNumber, message, Select, Spin } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Content } from "../../../components/Content";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import createPrices from "../../../services/createPrices";
import { currencyFormatter, currencyParser } from "../../../utils/Helpers/currencyParser";
import { withSSRAuth } from "../../../utils/WithSSRAuth";


const options = [
    {
        label: 'GASOLINA',
        value: 'GASOLINA'
    },
    {
        label: 'ETANOL',
        value: 'ETANOL'
    },
    {
        label: 'DIESEL',
        value: 'DIESEL'
    },
    {
        label: 'GNV',
        value: 'GNV'
    },
]

export default function Create(){
    const [price, setPrice] = useState(0);
    const [fuel, setFuel] = useState('');
    const [city, setCity] = useState('');

    const [messageApi, contextHolder] = message.useMessage();


    const handleSelectChange = (value: any) => {
        setFuel(value.value)
    };

    const handleSubmit = async () => {
        try {
            const create = await createPrices({
                city, fuel, price
            })
            create && messageApi.open({
                type: 'success',
                content: 'Incluído com sucesso!',
            });
        } catch(e){
            messageApi.open({
                type: 'error',
                content: 'Um erro inesperado ocorreu!',
            });
        }
    }

    return (
        <>
            <Head>
                <title>Neo Estech - Combustiveis</title>
            </Head>
            <Content>
                {contextHolder}
                <Header />
                <div className="flex w-full h-[calc(100vh-7.5rem)]">
                    <Sidebar />
                    <div className="flex flex-col bg-white max-h-full w-full rounded-2xl lg:my-6">
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Criar combustiveis</h1>
                        <div className="flex flex-col w-full mt-12">
                            <Link href='/combustiveis/' className='self-end'>
                                <button className="mb-4 mr-5 bg-orange-800 text-white px-4 py-[8px] rounded hover:brightness-90">Voltar</button>
                            </Link>
                            <Form className='flex flex-wrap w-full px-6 lg:px-12 mt-4'>
                                <label>Cidade:</label>
                                <Form.Item
                                    className="w-full"
                                    name="cidade"
                                    rules={[{ required: true, message: 'Por favor, informe a cidade' }]}
                                >
                                    <Input className="py-3 font-serif h-12" placeholder='Digite o nome da cidade' onChange={(e) => setCity(e.target.value)} />
                                </Form.Item>
                                <label>Preço:</label>
                                <Form.Item
                                    className="w-full"
                                    name="price"
                                    rules={[{ required: true, message: 'Por favor, informe o valor' }]}
                                >
                                    <InputNumber
                                        className="py-3 font-serif w-f w-full h-12"
                                        placeholder='Digite o preço' 
                                        defaultValue={price}
                                        onChange={(value: number) => setPrice(value)}
                                        formatter={currencyFormatter(price)}
                                        parser={currencyParser}
                                    />
                                </Form.Item>
                                <label>Combustível:</label>
                                <Form.Item
                                    className="w-full"
                                    name="combustivel"
                                    rules={[{ required: true, message: 'Por favor, informe o valor' }]}
                                >
                                    <Select
                                        labelInValue
                                        showSearch
                                        notFoundContent={'Não encontrado'}
                                        onChange={handleSelectChange}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                          }
                                        options={options}
                                    />
                                </Form.Item>
                                <button onClick={handleSubmit} className="mb-4 mr-5 bg-purple-800 text-white px-4 py-[8px] rounded hover:brightness-90">Incluir</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Content >
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    
    return {
        props: {

        }
    }
})