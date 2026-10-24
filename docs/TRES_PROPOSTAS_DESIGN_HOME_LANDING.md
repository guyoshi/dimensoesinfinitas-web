# Propostas de design: Dimensões Infinitas (24/10/2026)

Este documento compara **três protótipos navegáveis** de duas páginas, **home** e **landing comercial Ruínas dos Céus**. Não são os layouts oficiais e não capturam e-mail. As páginas possuem `noindex` e uma faixa de aviso de prévia. A escolha visual deve ser aprovada antes de substituir os caminhos existentes. Os materiais narrativos usam a identidade real do livro, suas paisagens e a capa presente no repositório.

## A. CINEMATOGRÁFICO — "O céu era o lar deles"
- Home: https://dimensoesinfinitas.com/previews/cinematografico/
- Livro: https://dimensoesinfinitas.com/previews/cinematografico/ruinas/
- Referência de organização: Murray Work (capa + texto heroico + CTA de leitura).
- Preto-azulado, ouro e imagem panorâmica de Etérea no topo. Capa como objeto protagonista. Para uma estreia de fantasia adulta com forte impacto visual.
- Risco: fundo escuro excessivo pode competir com o detalhamento das imagens.
- Conversão: capa e CTA acima da dobra; explicação/ambientação; motivos para ler; capítulo gratuito; convite futuro à newsletter.

## B. EDITORIAL — "Cinco histórias. Um ciclo infinito"
- Home: https://dimensoesinfinitas.com/previews/editorial/
- Livro: https://dimensoesinfinitas.com/previews/editorial/ruinas/
- Referência de estratégia: Jeremy P. Madsen (amostra e proposta de leitura) e editoras independentes.
- Fundo marfim, tipografia clássica, blocos espaçosos em cores alternadas e capa menor.
- Mais institucional e durável para receber séries com gêneros diferentes.
- Risco: o hero pode não transmitir fantasia épica tão imediatamente quanto A e C.
- Conversão: textos claros, CTA direto à obra, landing com sinopse e leitura sem e-mail.

## C. PORTAL — "E se o céu não fosse o limite?"
- Home: https://dimensoesinfinitas.com/previews/portal/
- Livro: https://dimensoesinfinitas.com/previews/portal/ruinas/
- Referência de estratégia: Nick Blade (organização pela experiência desejada + jornada).
- Azuis minerais, contraste de grandes imagens e tipografia editorial. Equilibra identidade fantástica, navegação e diferentes universos.
- Risco: precisa cuidado para não transformar outros livros ainda não publicados em promessas prematuras.
- Conversão: chamar à descoberta, entregar profundidade progressiva e repetir CTA de amostra em intervalos relevantes.

## Sinopse: decisão editorial
**Home:** 1–2 frases (premissa, protagonista, conflito, mistério) + capa + CTA para landing. Não repetir a sinopse completa da quarta capa; a home atende também outros projetos.
**Landing:** texto integral aprovado da sinopse comercial, seguido de uma interpretação em temas do que a pessoa irá encontrar e CTA para ler o primeiro capítulo.
**Após publicação:** inserir links verdadeiros de KDP/Bok2 sem remover a amostra.

## Hierarquia de conversão
1. **Landing do livro:** conversão primária = leitor inicia capítulo gratuito.
2. Conversão secundária = subscrição confirmada da newsletter quando backend ativo, independentemente da leitura.
3. Pós-lançamento: compra por links verdadeiros (KDP/Bok2).
4. Métricas futuras: `click_sample`, `reader_start`, `newsletter_subscribe_confirmed`, `click_retailer`. Clique não equivale a venda.

## Pendências deliberadas
- Arte original do Ciclo de Jesed enviada pelo usuário tem 1215x1295 pixels e deve substituir o WebP atual de baixíssima resolução no repositório. Arquivo otimizado preparado em container, mas **não incorporado** ao GitHub; não declarar correção publicada.
- Nenhum depoimento com cinco estrelas sem registros reais.
- Newsletter não ativada; propostas não incluem formulário funcional fictício.
- Validar visual mobile/desktop em navegador com capturas. Os CSS contêm breakpoints, mas isso não equivale a teste visual.
- Trocar status do livro para à venda somente quando links reais existirem.

## Benchmarks
- https://murraywork.com/
- https://nickblade.com/
- https://www.jeremypmadsen.com/

## Critérios para decidir
- Impacto inicial: em 5 segundos, dá para identificar o livro e seu gênero?
- Escolha fácil: CTA do capítulo é imediatamente reconhecível?
- Personalidade: o visual distingue Dimensões Infinitas de um template?
- Expansão: home funciona quando houver outras obras publicadas?
- Mobile: capa, texto e ações mantêm a ordem correta?
- Performance: imagens dimensionadas e não carregadas acima do necessário?
