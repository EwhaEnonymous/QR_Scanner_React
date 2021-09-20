import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import axios from 'axios';

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
            var qrData = data
            var jsonText = JSON.parse(qrData)
            console.log(jsonText.id)
            console.log(jsonText.deleted)
 
            axios.patch('https://www.ttockclinic.com/v1/paper/qr-usage-count', {
                id : jsonText.id,
                deleted : jsonText.deleted
            })
            .then(function (response){
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
            })
        }
    }
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
            </div>
            </center>

            <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            />

      </div>
    );
  }
  
  export default QRscanner;
  