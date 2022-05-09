import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';


export default function Home(props) {

  const [data, setData] = useState(props);

  const getData = async () => { 
    const result = await axios.get('http://localhost:3000/user')
    setData(result.data);
    // console.log(result.data);
  }
  useEffect(() => {
    getData();
    
  },[])
  const result = Object.values(JSON.parse(JSON.stringify(data)));
  const nameList = data.map((data,index) => <li key={data.index}>{data.name}</li>);

  return (
    <>
      <div>
        {nameList};
      </div>
    </>
  )
}
