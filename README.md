# ReductionValvesSystem

Neste sistema temos o objetivo criar um formulario no qual ao adicionar os dados de processo seja possivel calcular o diamentro apropriado de uma valvula de redução de pressão e gerar um dataSheet com as informaçoes da valvula.

Inicialmente o sistema deve receber os dados:

Fluido:(Agua, Ar Comprimido ou Vapor)
Pressão de Entrada:
Pressão de Saida:
Vazão Requerida(m³/h, Nm³/h ou m³/h, kg/h) - de acordo com fluido.
Determinar o Material( Ferro Fundido ou Aço Carbono)
Conexão: Rosca(Npt, ou BSPT), Flangles Adaptadas Ou Flangles(125#, 150#, 250#, 300#)

Após dar entrada desse parametros deve ser calculado e retornar o datasheet da Valvula.

### 1° Passo

Criação dos componentes pelo terminal

- Header (faixa vazia apenas visual)
- Footer (faixa vazia apenas visual)
- process-data ( Formulario para entrada dos dados de Processo)
- valveDataSheet ( apenas Criação do Component)

Criar Rotas em app-routing.
add FormsModule no arquivo app.module

### 1° Commit - Frist Components

### 2° Passo

Criado tabela de vapor saturado em Json
Criado serviço para calcular diametro da tubulação

Criado um componente para adicionar a Pressão relativa e Calcular os valores da tabela de valor saturado, de acordo com a pressão desejada.

### 2° Commit

### 3° Passo

Adicionado algumas alteraçoes de estilo melhorando Layout.

Criação de um serviço buscando deixar o calculo disponivel para outros componentes.
Além disso, desacoplando ficaria mais facil para futura manutenção.
Sendo assim fica separado o calculo de cada propriedade do Vapor Saturado.

### 3° Commit - Decoupling

### 4°Passo

### 4° Commit
