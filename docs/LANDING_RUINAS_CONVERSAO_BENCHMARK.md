# LANDING: Ruínas dos Céus — revisão de conversão e narrativa (24/10/2026)

URL: https://dimensoesinfinitas.com/ciclo-de-jesed/ruinas-dos-ceus/

## Objetivo e diferenciação
A homepage vende a marca autoral; esta landing apresenta uma única história, convida o visitante a experimentar o capítulo gratuito e oferece acompanhamento voluntário do lançamento. Os CTAs ao capítulo são funcionais mesmo quando a newsletter não está ativa. Compra KDP/Bok2 só com links verificados após publicação.

## Referências observadas (estruturas, não conversão comprovada)
- https://murraywork.com/ — capa + promessa épica + CTA comprar/amostra + equipe/autor. Aplicação: amostra logo no hero.
- https://nickblade.com/ — experiência procurada pelo leitor + testemunhos e guia para o livro. Aplicação: seção "o que encontrará nestas páginas?" e reações beta corretamente identificadas.
- https://www.brynnorel.com/ — worldbuilding explicativo e newsletter com benefício. Aplicação: Etérea vista em cotidiano e a oportunidade de acompanhar novidades literárias.
- https://www.ajpeterson.com/ — newsletter promete novidades/ARCs/arte, com especificidade. Aplicação: explicar o benefício de acompanhar o lançamento, sem inventar bônus disponíveis.
- https://aedanhuebner.com/ — sample e alternativas de acompanhamento do projeto com textos separados. Aplicação: distinguir ação de leitura (sem e-mail) e inscrição (consentimento próprio).

**Não há métricas auditadas de conversão dessas referências**; não copiar números de usuários, visitas ou porcentagens como se fossem nossos.

## Estrutura implementada
1. Hero com capa oficial existente no repositório, premissa e CTA ao capítulo gratuito + navegação.
2. História / sinopse oficial integral: Etérea, Jokara, sinais do perigo, crenças e quedas, sem spoiler do destino pós-cataclismo.
3. Experiência: mundo, protagonista, mistério e consequências; CTA.
4. Ilha dos Pequenos: cotidiano com arte enviada pelo autor, CTA.
5. Amostra: benefício e uso do leitor, CTA.
6. Ciclo de Jesed: começar por qualquer volume e circularidade, ilustração do ciclo existente; CTA.
7. Leitura beta: Felipe, Augusto e Nanda com trechos/síntese identificados, nenhuma estrela sem notas verificadas; CTA.
8. Autor: retrato, biografia curta, assinatura centralizada.
9. FAQ: objeções reais e status editorial.
10. Newsletter opt-in, sem envio fictício (o JS verifica disponibilidade); link Instagram; CTA final ao capítulo.
11. Rodapé legal existente.

## Diretrizes
- Não chamar o gênero de romantasia; fantasia épica adulta.
- Não revelar sobrevivência de Jokara nem a superfície.
- Não atribuir notas ou falas inventadas à Nanda ou outros beta readers.
- Não capturar e-mail para liberar a amostra.
- Espaçamento compacto e cores alternadas. Compatibilidade mobile por CSS. Auditar visualmente em navegador real após deploy.
- A imagem do ciclo ainda usa WebP pequeno já presente no repositório. Precisa substituir pelo original anexado em alta resolução (1215 x 1295) para eliminar pixelização, **sem recriar imagem**.
- Cloudflare build a partir do GitHub; verificar deploy e assets efetivos antes de afirmar publicação.
