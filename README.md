# 관리자용 QR Code Scanner

접수 및 대기인원 파악을 위해 사용되는 관리자용 QR Scanner. 



- __React UI Kit: [Material UI](https://material-ui.com/)__

    Install Material UI core:
    ```bash
    $ npm i @material-ui/core @material-ui/icons
    ```

- __Icons: [Material Design Icons](https://materialdesignicons.com/)__

    Install Material Design Icons:
    ```bash
    $ npm i @mdi/react @mdi/js @mdi/font
    ```

    Add these lines on `./public/index.html` head:
    ```html
    <!-- Roboto fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <!-- Material Icons fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    ```

- __QR Generator: [qrcode.react](https://www.npmjs.com/package/qrcode.react)__

    Install `qrcode.react`:
    ```bash
    $ npm i qrcode.react
    ```

- __QR Scanner: [react-qr-reader](https://www.npmjs.com/package/react-qr-reader)__

    Install `react-qr-reader`:
    ```bash
    $ npm i react-qr-reader
    ```





### Preview

- Home Page

<img width="559" alt="Home" src="https://user-images.githubusercontent.com/71377968/134800867-acdcbd03-6848-42e9-b213-cdbcb996067e.png">




- QR Scanner Page

<img width="296" alt="QRScanner" src="https://user-images.githubusercontent.com/71377968/134800969-1d9d9f3e-c3f9-4c3f-80d4-b8ab44930c5c.png">

- QR Scanned Page

<img width="328" alt="QRScanned" src="https://user-images.githubusercontent.com/71377968/134801017-1ad47708-2abb-41e2-a232-82a148517193.png">



### API

__PATCH: /paper/qr-usage-count__

<img width="743" alt="API" src="https://user-images.githubusercontent.com/71377968/134801034-0ebccd77-f4f5-4300-96a7-4330b9f9321f.png">

- 1회 스캔 시 waitings +1 update
- 2회 스캔 시 waitings -1 update
