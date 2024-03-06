# language: pt

Funcionalidade: Item

    Contexto:         
        Dado cliquei no menu 'Cadastros'
        E cliquei no primeiro sub-menu 'Itens'
        E cliquei no segundo sub-menu 'Item'

    Cenário: Cadastrando um novo Item
        Quando clico no botão 'Novo' na tela de Item
        E preencho o campo 'Descrição' com o valor 'Novo Teste Automatizado' na tela de Item
        E seleciono o campo 'Tipo do Item' com o valor 'Produto Acabado' na tela de Item
        E seleciono o campo 'Unidade de Medida' com o valor 'Bombona' na tela de Item
        E seleciono o campo 'Origem da Mercadoria' com o valor '4' na tela de Item
        E seleciono o campo 'Inativo Para' com o valor 'Todos' na tela de Item
        E seleciono o campo 'Gênero do Item' com o valor 'Plantas vivas e produtos de floricultura' na tela de Item
        E seleciono o campo 'Configuração da Contabilização' com o valor '3' na tela de Item
        E seleciono o campo 'Marca' com o valor '5' na tela de Item
        E seleciono o campo 'Tipo Lote' com o valor 'Geral' na tela de Item
        E seleciono o campo 'Código do item para IPM' com o valor 'PRDISTRIBEE01' na tela de Item
        E preencho o campo 'Peso Líquido' com o valor '200,00' na tela de Item 
        E preencho o campo 'Peso Bruto' com o valor '285,45' na tela de Item
        E preencho o campo 'Informação Adicional' com o valor 'Teste' na tela de Item
        E seleciono o campo 'Tipo' com o valor 'Valor' na tela de Item
        E preencho o campo 'Margem Mínima' com o valor '4,0000' na tela de Item
        E preencho o campo 'Margem Esperada' com o valor '50,0000' na tela de Item
        E seleciono o campo 'NCM' com o valor '84833021' na tela de Item
        E seleciono o campo 'CEST' com o valor '2806300' na tela de Item
        E seleciono o campo 'Tributação ICMS' com o valor '11' na tela de Item
        E preencho o campo 'Estoque Mínimo' com o valor '555' na tela de Item
        E seleciono o campo 'Tributação PIS/COFINS' com o valor '8' na tela de Item
        E seleciono o campo 'Grupo' com o valor 'ESPECIALIDADES' na tela de Item
        E seleciono o campo 'Sub-Grupo' com o valor 'DESALOJANTES' na tela de Item
        E seleciono o campo 'Local de Estoque Padrão – Entradas' com o valor '2' na tela de Item
        E clico no botão 'Salvar' no Formulário de Item
        Então armazeno o valor do ID na tela de Item

    Cenário: Cadastrando um novo Item
        Dado que cliquei no botão 'Filtrar'
        Quando preencho o campo 'Código' do filtro com valor 'IDMARCA'
        E clico no botão Filtrar na janela de filtro
        E seleciono o registro com ultimo id
        E preencho o campo 'Descrição' com o valor 'Novo Teste Automatizado' na tela de Item
        E seleciono o campo 'Tipo do Item' com o valor 'Matéria-Prima' na tela de Item
        E seleciono o campo 'Unidade de Medida' com o valor 'Bloco' na tela de Item
        E preencho o campo 'Estoque Mínimo' com o valor '33' na tela de Item

     Cenário: Excluindo uma marca de item
        Dado que cliquei no botão 'Filtrar'
        E preencho o campo 'Código' do filtro com valor 'IDMARCA'
        E clico no botão Filtrar na janela de filtro

        E seleciono o registro com ultimo id
        E clico no botão 'Excluir' 