import { message, Popconfirm, Table } from "antd"
import { ColumnsType } from "antd/es/table"
import Head from "next/head"
import { Content } from "../../components/Content"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { IPricesDTO, usePrices } from "../../hooks/usePrices"
import { MdOutlineRemoveCircleOutline } from 'react-icons/md'

import { withSSRAuth } from "../../utils/WithSSRAuth"
import { AiOutlineEdit } from "react-icons/ai"
import removePriceById from "../../services/removePriceById"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Combustiveis(){
    const router = useRouter()

    const [messageApi, contextHolder] = message.useMessage();
    const { prices, error, refetch } = usePrices();

    const handleDeletePrice = async (id: number) => {
        
        try {
            const response = await removePriceById(id);
            messageApi.open({
                type: 'success',
                content: 'Excluído com sucesso!',
            });
            refetch()
        } catch(e){
            // TODO: Handle error
            messageApi.open({
                type: 'error',
                content: 'Um erro inesperado ocorreu!',
            });
        }

    }

    const handleEditPrice = async (id: number) => {
        router.push(`combustiveis/${id}/edit`)
    }

    const columns: ColumnsType<IPricesDTO> = [
        {
            title: 'Combustível',
            dataIndex: 'combustivel',
            key: 'combustivel',
        },
        {
            title: 'Cidade',
            dataIndex: 'cidade',
            key: 'cidade',
        },
        {
            title: 'Preco',
            dataIndex: 'preco',
            key: 'preco',
        },
        {
            title: 'Criado em',
            dataIndex: 'createdAt',
            key: 'createdAt',
            responsive: ['lg'],
        },
        {
            title: 'Atualizado em',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            responsive: ['lg'],
        },
        {
            title: 'Ações',
            dataIndex: 'action',
            key: 'action',
            fixed: 'right',
            render: (_, record) => (
                <div className="flex gap-[2px] text-[16px]">
                    <Popconfirm
                        title="Você tem certeza que deseja excluir esse registro?"
                        onConfirm={() => handleDeletePrice(record.id)}
                        onCancel={() => {}}
                        okText="Sim"
                        cancelText="Não"
                        okButtonProps={
                            {
                                className: 'bg-blue'
                            }
                        }
                    >
                        <MdOutlineRemoveCircleOutline className="cursor-pointer hover:text-orange-800" />
                    </Popconfirm>
                    <AiOutlineEdit className="cursor-pointer hover:text-orange-800" onClick={() => handleEditPrice(record.id)}/>
                </div>
            )

        }
    ]
    

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
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Combustiveis</h1>
                        <div className="flex flex-col w-full mt-12">
                            <Link href='/combustiveis/create' className='self-end'>
                                <button className="mb-4 mr-5 bg-orange-800 text-white px-4 py-[8px] rounded hover:brightness-90">Adicionar</button>
                            </Link>
                            <Table pagination={{ pageSize: 5 }} columns={columns} dataSource={prices}/>
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