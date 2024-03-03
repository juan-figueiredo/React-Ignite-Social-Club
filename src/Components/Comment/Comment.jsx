import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comment(){
  return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Diego</strong>
                <time title="27 de fevereiro às 09:31h" dateTime='2024-02-27 00:31:31'>Cerca de 1h atrás</time>
              </div>

              <button title='Deletar comentário'>
                <Trash size={24}/>
              </button>
            </header>

            <p>Muito bom dever, parabéns</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>2</span>
            </button>
          </footer>

        </div>
    </div>
  )
}