# Auditoria de métricas dos 10 sites concorrentes (23/10/2026)

**Escopo**: domínios analisados previamente no arquivo `BENCHMARK_10_HOMES_AUTORES_E_WIREFRAME.md`. Objetivo: estimar **tráfego**, **audiência** e **eficiência comercial**, sem inferir volume de vendas pela aparência do site.

## Resultado verificável desta rodada
Foi tentada uma consulta em lote dos 11 domínios (10 concorrentes + dimensoesinfinitas.com) ao Ahrefs para DR, domínios referentes, backlinks, palavras-chave orgânicas, tráfego orgânico mensal e tráfego pago. **A ferramenta retornou `Insufficient plan`. Logo, nenhum número pode ser considerado medido ou estimado com Ahrefs nesta auditoria.**

Foram consultadas páginas públicas do Similarweb para alguns domínios, mas o acesso público não forneceu números verificáveis. A orientação oficial do Similarweb explica que sites de baixo tráfego apresentam “Not enough data”/N/A e isso **não significa tráfego zero**. Fonte: https://support.similarweb.com/hc/en-us/articles/207698639-What-does-Not-enough-data-mean e https://support.similarweb.com/hc/en-us/articles/5083358615313-Similarweb-Data-Methodology-FAQs .

### Matriz dos dez casos
| Site | Visitas mensais totais | Visitas mensais SEO | Leads mensais | Vendas atribuídas ao site | Observável da estratégia |
|---|---|---|---|---|---|
| kadenrlove.com | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Livro + varejista + ficção gratuita por email |
| derricksmythe.com | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Livros + newsletter + extras |
| jeremypmadsen.com | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Oferta grátis + livros + compra por formato |
| saskiamjohnson.com | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Livro em destaque + série + compra |
| maiziebennett.com | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Lançamento + newsletter + projetos |
| michaelvadney.com | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Livro + identidade de gênero + podcast |
| ashlioconnell.com | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Livro de estreia + compra + relacionamento |
| dsaletris.com.br | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Obras + links + extras |
| indieredfox.com.br | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Catálogo + filtros + comunidade |
| patriciacriado.com.br | NÃO VERIFICÁVEL | NÃO VERIFICÁVEL | NÃO PÚBLICO | NÃO PÚBLICO | Universo + livros + comunicação + comunidade |

**Cuidado:** algumas campanhas ou autores revelaram cópias vendidas, inscrições ou Kickstarter, mas esses números NÃO são tráfego do site, conversão da página nem vendas atribuídas a ela. Não transportar números de campanha para o website sem fonte específica.

## Métricas para validar uma home de autor na prática
1. **Visitas totais** por fonte (Analytics próprio ou medição terceiros confiável, com intervalo e país) e **orgânico estimado** separadamente. Não somar visitas globais orgânicas como se fossem total de visitantes.
2. **Origem qualificada**: Instagram/perfis literários, social, busca de marca, busca de gênero, referências de resenhistas.
3. **Exposição e cliques no CTA de amostra**: `sample_open / book_page_view`.
4. **Interesse na lista**: cadastros confirmados por visitas à página da obra, com consentimento.
5. **Intenção de compra**: cliques Kindle/Bok2 por visita à landing, atribuição aproximada por UTM; **venda real** no varejista continua em relatórios próprios.
6. **Evidências independentes**: resenhas legítimas datadas, contatos de criadores que publicaram, campanhas Kickstarter com data/meta/apoiadores e conteúdo orgânico externo. Não equivalem a tráfego do site.

## Placar nosso após publicação
| Indicador | Fonte | Primeiro acompanhamento |
|---|---|---|
| Sessões e origens por campanha | Cloudflare Web Analytics ou GA4 | Semanal |
| Busca/impressões/cliques | Search Console | Mensal |
| Cliques para amostra | Evento próprio | Semanal |
| Inscritos consentidos confirmados | Provedor de newsletter | Semanal |
| Cliques Amazon/Bok2 | Evento com UTM | Semanal |
| Vendas reais | KDP/Bok2 | Semanal |

## Decisão resultante
Não há base para dizer qual dos dez sites gera mais volume de tráfego ou mais vendas. O exemplo de um site não deve ser adotado por suposto sucesso estatístico não medido. **Aprovar wireframe por clareza da promessa e teste de tarefa**, não por estimativas inventadas.

Revisitar esta pesquisa se houver acesso a **Similarweb** com dados válidos ou upgrade de Ahrefs; registrar recorte temporal, país, tipo de visita, data de coleta e margem/limites da amostra. Mesmo nesses casos, sites independentes pequenos podem não ter dados suficientes.

Fontes:
- https://support.similarweb.com/hc/en-us/articles/207698639-What-does-Not-enough-data-mean
- https://docs.similarweb.com/api-v5/support-and-faq/68b3660110ed4447ddbb157f/68b5f6f7d688be390d72048c/68b5c0743726dd7779aea825
- https://support.similarweb.com/hc/en-us/articles/213856729-Top-Websites
