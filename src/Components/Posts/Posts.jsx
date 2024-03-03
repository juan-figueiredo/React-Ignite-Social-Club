import styles from './Posts.module.css';
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar';

export function Posts(props){
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://avatars.githubusercontent.com/maykbrito"/>
          <div className={styles.authorInfo}>
            <strong>Mayk Brito</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="27 de fevereiro ás 23:06" dateTime='2024-02-27 23:05:22'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraaa, estou testando essa nova rede social que promete muito!</p>
        <p>Muito legal vê a evolução disso aqui, um projeto muito top criado por mim!</p>
        <p><a href="#">mkb.design/webdesigner</a></p>{'  '} 
        <p><a href="#">#novoprojeto</a> {'  '}  <a href="">#vaidarbom</a></p>{'  '} 
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário'/>

        <footer>
         <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>

    </article>
  )
};