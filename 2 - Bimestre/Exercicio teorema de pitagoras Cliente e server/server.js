const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir qualquer origem
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' permite qualquer origem
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//se vier uma requisição POST para a rota /calcular-hipotenusa, o servidor irá processar os catetos recebidos e enviar uma resposta de volta ao cliente.
app.post('/calcular-hipotenusa', (req, res) => {
    const { cateto1, cateto2 } = req.body;
    console.log(`os catetos recebidos são: ${cateto1} e ${cateto2}`);
    const hipotenusa = Math.hypot(cateto1, cateto2);
    console.log(`A hipotenusa calculada é: ${hipotenusa}`);
    let resposta = `A hipotenusa para os catetos digitados é: ${hipotenusa}`;
    res.send(resposta);
});

const obterIP = () => {
    const interfaces = os.networkInterfaces();
    for (let nomeInterface in interfaces) {
        for (let info of interfaces[nomeInterface]) {
            if (info.family === 'IPv4' && !info.internal) return info.address;
        }
    }
    return 'localhost';
};

const ip = obterIP()

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
})
