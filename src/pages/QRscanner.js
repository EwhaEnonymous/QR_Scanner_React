import React, {useState, useEffect} from 'react'
import {Fab} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import axios from 'axios';
import Modal from "./Modal";

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const [isShowing, setIsShowing] = useState(false);

    const handleScan = data => {
        if (data) {
            setQrscan(data)
            var qrData = data

            // String Split 
            const paper = qrData.split(' ');
            console.log(paper[0]) // deleted 
            console.log(paper[1]) // id
 
            axios.patch('https://www.ttockclinic.com/v1/paper/qr-usage-count', {
                id : paper[1],
                deleted : paper[0]
            })
            .then(function (response){
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
            })
            openModal()
        }
    }
    const openModal = () => {
        setIsShowing(true);
    }
    useEffect(() => {
        if (isShowing) {
            const notiTimer = setTimeout(() => {
                setIsShowing(false);
            }, 3000);
            return () => clearTimeout(notiTimer);
        }
    }, [isShowing]);
    
    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Scanner</span>
            
            <center>
            <div style={{marginTop:30}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
                <div>{isShowing && <Modal message="QR 스캔이 완료되었습니다." />}</div>
            </div>
            </center>
      </div>
    );
  }
  
  export default QRscanner;
  