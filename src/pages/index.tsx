import { GetStaticProps } from 'next';
import { firestore } from 'firebase-admin';
import styles from '../app/page.module.css'
import Firestore from '../lib/firestore/firestore';


interface Message {
    id: string; 
    product: string
}

interface HomeProps {
    message: Array<Message>;
}


export default function Home(props: HomeProps) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
        </p>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    let data: Message[] = [];
    try {
        const collectionRef: firestore.CollectionReference = Firestore.collection('myCollection');
        const entries: firestore.QuerySnapshot = await collectionRef.get();

        entries.forEach((entry: firestore.DocumentSnapshot) => {
            const messageData: Message = {
                id: entry.id,
                product: entry.data()?.product || ''
            };
            data.push(messageData);
        });
    } catch (e) {
        console.log('e', e);
    }
  
    return {
      props: {
        message: data,
      },
    };
  }