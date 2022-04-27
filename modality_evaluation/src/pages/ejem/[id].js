 import {useRouter} from 'next/router'
export default function nombre () {
    return (
        <h1>
            {useRouter().query.id}
        </h1>
    )
}