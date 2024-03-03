import { Header } from "./Components/Header/Header";
import { Posts } from "./Components/Posts/Posts"; 
import { Sidebar } from "./Components/Sidebar/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts = [
{
  id: 1,
  author:{
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'CTO @ Rocketseat'
  },
  content: [
    { type: 'paragraph', content: 'Fala galera!' },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, um evento RocketSeat'},
    { type: 'link', content: 'jane.design/doctorcare' }
  ],
    publishedAt: new Date('2024-02-26 20:22:33'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, um evento RocketSeat'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
      publishedAt: new Date('2024-02-22 21:32:23'),
    },
];

function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

            {posts.map(post => (
      <Posts
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
      />
       ))}

        </main>
      </div>
    </div>
)
}

export default App
