import{ useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import database from '../database/data';
// const [data, setData] = useState(null);
var data;
    database.firestore.collection('systems').doc('system').get().then((snapshot) => {
        // setData(snapshot.data().notifications);
        data = snapshot.data().notifications;
    });

export default data;