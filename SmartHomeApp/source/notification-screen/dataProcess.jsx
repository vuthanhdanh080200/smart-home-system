import { useEffect, useState } from "react";
import database from '../database/data';

export default function dataProcess(){
    const [DATA, setData] = useState(null);
    useEffect(() => {
      database.firestore.collection('notifications').get().then((snapshot) => {
        var data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data())
        });
        setData({data});
      });
    });
  
    var data = [];
    if(DATA != null){
      DATA.data.forEach((ele)=>{
        let id = ele.id;
        let title = ele.content.title;
  
        let time = ele.time.toDate();
  
        let date = time.getDate().toString();
  
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let month = months[time.getMonth()];
  
        let year = time.getFullYear().toString();
  
        let hour = time.getHours().toString();
        let minute = time.getMinutes().toString();
        let second =time.getSeconds().toString();
  
        let fullTime = month + " " + date + " " + year + " at " + hour + ":" + minute + ":" + second;
        
        let content = ele.content.content;
        data.push({id: id, title: title, content: content, time: fullTime})
      })
    }
    return data;
}