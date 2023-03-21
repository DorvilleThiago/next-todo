import styles from '../styles/login.module.scss'
import { useSession,signIn } from "next-auth/react"

export default function Login() {

  const { data: session } = useSession()

    return (
      <section className={styles.container}>
        <main>
          <form>
            <h1>LOGIN</h1>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email'/>
            </div>
            <div>
                <label htmlFor='pass'>Password</label>
                <input id='pass' type='password'/>
            </div>
            <button className='btn btn-primary'>Fazer login com credenciais</button>
          </form>
          <button className="btn btn-success" onClick={async() => signIn('google',{ callbackUrl: "http://localhost:3000"})}>Entrar com Google</button>
          <button className='btn btn-danger'><a href='/'>Voltar a página principal</a></button>
        </main>
      </section>
    )
  }