# Desafio Nginx com Nodejs

## Descrição
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

## O retorno da aplicação node.js para o nginx deverá ser:
```html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```
## Execution
```shell
git clone https://github.com/rvgoncalves/docker-desafio-nginx-com-nodejs.git

cd docker-desafio-nginx-com-nodejs

docker-compose up [-d]
```

### O App funcionando e disponível na porta: 8080
[http://localhost:8080](http://localhost:8080)
