import { SignOut } from "../../context/AuthProvider"
import { withSSRAuth } from "../../utils/WithSSRAuth"

export default function Home(){
    return (
        <button onClick={() => SignOut() }>Sair</button>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    
    return {
        props: {

        }
    }
})