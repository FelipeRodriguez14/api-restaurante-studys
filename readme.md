Esse projeto foi construído para consolidar o aprendizado em 
construção de API RestFull utilizando a stack:

- Node
- TypeScript
- Zod 
- Knex
- SQLite

REGRA DE NEGÓCIO

A regra de négocio desenvolvida tem a ideia de construir
um sistema de gerenciamente de pedidos de um restaurante, ou 
qualquer estabelecimento semelhante. O principal objetivo é controlar
a abertura e fechamentos das mesas conforme os clientes chegam, e ter o 
controle do que foi consumido, do tempo de permanência e de quanto foi vendido
em cada mesa.

As principais entidades do banco de dados são:

PRODUTOS (Products)
PEDIDOS (Orders)
MESAS (Tables)

Como essas entidades possuem relacionamente N : N entre si, foi - se 
criado duas tabela associativas no banco de dados para que possamos ter o 
controle desse relacionamento.

products - order: Para fazer o gerenciamento de todos os produtos vendidos
dentro de um pedido.

session-tables: Para ter o controle sobre o tempo de permanência
do cliente. A ideia é relacionar o pedido com a mesa, e registrar o tempo de 
abertura e fechamento da mesa, para que possa ser definido o tempo de permanência
do cliente.

A API foi construída somente para fins didáticos, por isso em seu momento atual se 
encontra incompleta. O objetivo é trabalhar futuramente, para que possa ser atendido
todos os requisitos e propostas iniciais.

FUNCIONALIDADES QUE AINDA NÃO FORAM  CRIADAS

- Controle do tempo de permanência do cliente.
- Alimentar a tabela de session-tables.
- Construir autenticação para os endpoints. 
