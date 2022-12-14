import { Form, Input, InputNumber, message, Select, Spin } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Content } from "../../../components/Content";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import createPrices from "../../../services/createPrices";
import getPriceById from "../../../services/getPriceById";
import updatePrices from "../../../services/updatePrices";
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

interface Props {
    initialPrice: number,
    initialFuel: string,
    initialCity: string
}

export default function Edit({ initialCity, initialFuel, initialPrice } : Props){
    const router = useRouter();
    const { id } = router.query;

    const [price, setPrice] = useState(initialPrice);
    const [fuel, setFuel] = useState(initialFuel);
    const [city, setCity] = useState(initialCity);

    const [messageApi, contextHolder] = message.useMessage();


    const handleSelectChange = (value: any) => {
        setFuel(value.value)
    };

    const handleSubmit = async () => {
        try {
            const create = id && await updatePrices({
                city, fuel, price,
                id: Number(id)
            })
            create && messageApi.open({
                type: 'success',
                content: 'Atualizado com sucesso!',
            });
            router.push('/combustiveis')
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
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Editar combustiveis</h1>
                        <div className="flex flex-col w-full mt-12">
                            <Link href='/combustiveis/' className='self-end'>
                                <button className="mb-4 mr-5 bg-orange-800 text-white px-4 py-[8px] rounded hover:brightness-90">Voltar</button>
                            </Link>
                            <Form className='flex flex-wrap w-full px-6 lg:px-12 mt-4' initialValues={
                                {
                                    city,
                                    price,
                                    fuel

                                }
                            }>
                                <label>Cidade:</label>
                                <Form.Item
                                    className="w-full"
                                    name="city"
                                    rules={[{ required: true, message: 'Por favor, informe a cidade' }]}
                                >
                                    <Input className="py-3 font-serif h-12" placeholder='Digite o nome da cidade' defaultValue={city} onChange={(e) => setCity(e.target.value)} />
                                </Form.Item>
                                <label>Pre??o:</label>
                                <Form.Item
                                    className="w-full"
                                    name="price"
                                    rules={[{ required: true, message: 'Por favor, informe o valor' }]}
                                >
                                    <InputNumber
                                        className="py-3 font-serif w-f w-full h-12"
                                        placeholder='Digite o pre??o' 
                                        defaultValue={price}
                                        onChange={(value: number) => setPrice(value)}
                                        formatter={currencyFormatter(price)}
                                        parser={currencyParser}
                                    />
                                </Form.Item>
                                <label>Combust??vel:</label>
                                <Form.Item
                                    className="w-full"
                                    name="combustivel"
                                    rules={[{ required: true, message: 'Por favor, informe o valor' }]}
                                >
                                    <Select
                                        labelInValue
                                        showSearch
                                        notFoundContent={'N??o encontrado'}
                                        defaultValue={initialFuel}
                                        onChange={handleSelectChange}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                          }
                                        options={options}
                                    />
                                </Form.Item>
                                <button onClick={handleSubmit} className="mb-4 mr-5 bg-purple-800 text-white px-4 py-[8px] rounded hover:brightness-90">Atualizar</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Content >
        </>
    )
}


export const getServerSideProps = withSSRAuth(async (ctx) => {
    const { params } = ctx

    const response = params && await getPriceById(Number(params.id));

    return {
        props: {
            initialCity: response?.cidade,
            initialFuel: response?.combustivel,
            initialPrice: response?.preco
        }
    }
})