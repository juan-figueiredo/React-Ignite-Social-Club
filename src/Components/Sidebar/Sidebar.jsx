import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>

      <img className={styles.cover} 
      src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="cover-profile" 
      />

      <div className={styles.profile}>

        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/142360009?v=4"/> 
        <strong>Juan Figueiredo</strong>
        <span>Web Developer</span>

      </div>

      <footer>
        <a href="#"><PencilLine size={20}/> Edite seu perfil</a>
      </footer>
    </aside>
  )
}