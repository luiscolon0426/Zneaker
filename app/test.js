const express = require('express')
const axios = require('axios')

const app = express()

let path = "https://api.github.com/repos/DavidDaniel1996/holbertonschool-higher_level_programming/contents/0x00-python-hello_world/0-run"

axios.get(path).then(res => {
    let data = (res.data.content)
    let buff = new Buffer.from(data, 'base64')
    let text = buff.toString('ascii')

    console.log(text)
    // console.log(data)
})

// let data = "IyEvYmluL2Jhc2gKcHl0aG9uMyAkUFlGSUxFCg==\n"
