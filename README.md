# restaurante_js
Aprimorando os conhecimentos em javascript

# A estrutura do projeto foi criado com Express
Ele ja da toda a organização de pastas que voce precisa.
Para isso precisamos instalar ele, melhor instalar globalmente.
Para fazer a geracao da extrutura temos que usar o express-generator.
npm install -g express-generator
Agora usaremos o comando express --ejs saboroso

# Projeto criado
Agora que o projeto foi criado entre na pasta princiapl.
Insatale as dependencia usando o comando npm install.
Adiciona o gitignore para não mandar a pasta node_modules.

# Subindo o servidor
usa o comando "set DEBUG=saboroso:* & npm start"

# Precisamos instalar tbm o bower
npm bower -g
depois que instalarmos o bower
rode o comando bower install dentro da pasta admin do projeto.

# Usando RedisStore
Temos que instalar 3 libs
1) - Redis
2) - connect-redis
3) - express-session;
Depois devemos baixar o instalador do redis.
E devemos configurar o redis client corretamente.
Assim iniciaremos o modo sessão.
versao do redis instalado no npm "npm install --save express-session connect-redis@3.3.3"

# Usando Formidable
Para recuperar os dados que vieram do formulario e mandar para o banco de dados.
npm install formidable.