import {useRouter} from "next/router";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь c email {query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
                <div>Email пользователя - {user.email}</div>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}
