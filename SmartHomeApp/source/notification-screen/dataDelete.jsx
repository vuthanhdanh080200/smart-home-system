import database from '../database/data';

export default function remove(doc_id){
    database.firestore.collection('notifications').doc(doc_id).delete();
}