API Calcula valor da ligacao:

Cliente/Servidor  

Página web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
problema.

Baixar robo 3t e postman

Iniciar robo 3t port: 27017 rodar(mongod)

Roda a aplicação
    $npm start 

Postman: (rodar comando separadamente JSON)

User:
    localhost:3000/api/register
    {
        "name": "Pedro",
        "email": "ordep@ordep.com",
        "phone": "98989898",
        "password": "123456"
    }

    localhost:3000/api/login
    {
        "username": "ordep@ordep.com",
        "password": "123456"
    }

Product:

    localhost:3000/api/produto/store
    {
        "nome": "Fale mais 30",
        "tempo": "30"
    }
    {
        "nome": "Fale mais 60",
        "tempo": "60"
    }
    {
        "nome": "Fale mais 120",
        "tempo": "120"
    }

Tarifa:

    localhost:3000/api/tarifa/store
    {
        "origem": "11",
        "destino": "16",
        "tarifa": "1.90"
    }
    {
        "origem": "16",
        "destino": "11",
        "tarifa": "2.90"
    }
    {
        "origem": "11",
        "destino": "17",
        "tarifa": "1.70"
    }
    {
        "origem": "17",
        "destino": "11",
        "tarifa": "2.70"
    }
    {
        "origem": "11",
        "destino": "18",
        "tarifa": "0.90"
    }
    {
        "origem": "18",
        "destino": "11",
        "tarifa": "1.90"
    }
