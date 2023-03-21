import styles from '../styles/login.module.scss'
import Link from 'next/link'
import { useSession,signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()

    return (
      <section className={styles.container}>
          <h1>INDEX PAGE</h1>
          <button><a href='/login'>Log-in</a></button>
          <button onClick={async () => signOut()}>LogOut</button>
        {session && <p>{session.user.name}</p>}
      </section>
    )
  }