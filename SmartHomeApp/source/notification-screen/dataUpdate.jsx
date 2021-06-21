import database from '../database/data';

export default function update(doc_id, data){
    database.firestore.collection('notifications').doc(doc_id).update(data);
}