# Arquitetura planejada (não implementada)

## Separação entre site e portal
O site comercial promove livros e converte visitantes em leitores. O portal interativo contém conteúdo aprofundado; só terá ligação pública após revisão de spoilers e direitos. Alterações do portal não devem bloquear lançamentos.

## Rotas futuras (não existem ainda)
- `/` — livro de destaque e marca Dimensões Infinitas.
- `/livros/` — catálogo de obras publicadas e disponíveis.
- `/ciclo-de-jesed/` — pentalogia circular, contextualização sem spoilers.
- `/ciclo-de-jesed/ruinas-dos-ceus/` — landing comercial e amostra gratuita.
- `/sobre/` — autor.
- `/contato/` e `/privacidade/` — contato e política.
- `/en/` — futuro idioma inglês, somente quando houver conteúdo adequado.

## Regras
1. Evitar mudança no roteiro/cânone: o repositório dos livros é a fonte oficial.
2. Não incorporar arquivos inéditos ou revelar destinos de personagens em bundles públicos.
3. Privilegiar carregamento mobile, legibilidade e acessibilidade.
4. Preservar URLs estáveis; usar redirecionamentos ao substituir caminhos.
5. Para idiomas adicionais, rotas distintas, seletor manual e hreflang correspondente.
6. Medir cliques e cadastros sem confundir eventos com vendas.
7. Publicar apenas após revisão de material, links e privacidade.

## Hospedagem, infraestrutura e domínio
**Definição de arquitetura (23/10/2026):** domínio `dimensoesinfinitas.com` comprado pelo autor no Cloudflare. Escolha proposta: Cloudflare Pages (não GitHub Pages), integrado ao repositório público `guyoshi/dimensoesinfinitas-web`, produção via `main`, prévias em branches/PRs. **Conexão à conta, projeto Pages, DNS, SSL, deploy e site AINDA NÃO configurados**, pois não há sessão de Cloudflare autenticada nem aplicação publicada.

Sequência segura ao implementar: (1) criar arquivos reais do site e validar; (2) Cloudflare > Workers & Pages > Create application > Pages > Connect to Git > autorizar GitHub apenas para `dimensoesinfinitas-web` > selecionar `main`; (3) definir build conforme framework escolhido, nunca apontar para pasta inexistente; (4) conferir `*.pages.dev` em preview; (5) Pages > Custom domains > adicionar domínio raiz e `www`, deixar Cloudflare criar/validar DNS e certificado conforme estado real da zona; (6) testar HTTPS, redirecionamento canônico www/apex, robots, formulário e métricas. Fonte: https://developers.cloudflare.com/pages/get-started/git-integration/ ; https://developers.cloudflare.com/pages/configuration/custom-domains/ .

## Conversões e jornada
- **Pré-lançamento:** visita qualificada -> premissa/capa -> leitura livre de capítulo -> cadastro voluntário com consentimento e confirmação; sem popup invasivo ou cadastro forçado.
- **Lançamento:** mesma landing adiciona CTA de compra Kindle/Bok2. Newsletter permanece opção secundária.
- **Eventos:** `book_view`, `sample_open`, `newsletter_signup` (sucesso real após submissão), `kindle_click`, `bok2_click`; distinguir cliques de vendas apuradas nos painéis.
- O Instagram de autor `@guilhermeslanjos` direciona para a landing de Ruínas com UTM própria depois do site publicado.
- CTA da home: "Conheça Ruínas dos Céus"; da landing pré-lançamento: "Ler capítulo gratuito". Botões de compra só quando destinos funcionais.

