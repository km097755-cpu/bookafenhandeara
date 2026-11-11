# Bookafé: site da taça de Ice Ninho

Atualizado em 11/11/2026 (versão 3).

Página única (`index.html` + pasta `fotos`). Conforme a pessoa rola, a taça de Ice Ninho se abre em seis partes. Cada parte é um grupo do cardápio e, dentro dele, a rolagem passa item por item (nome, preço e descrição em destaque).

## Fonte do conteúdo
PDF `Cardapio_Bookafe_A4.pdf` (duas páginas, enviadas como imagem em 11/11/2026): 26 produtos com descrição e preço. Fotos recortadas dessas imagens (baixa resolução). A lista fica no começo do script (`MENU`): é só editar lá para mudar item, preço ou descrição.

## Partes da taça
Cereja = Adicionais · Chantilly = Para completar · Bolas de sorvete = Ices · Taça = Cafés · Haste = Cappuccinos · Base = Chocolates.

## O que reage à rolagem e ao mouse
- Cada grupo dura mais ou menos rolagem conforme o número de itens (Ices, com 10, dura mais).
- O item ativo aparece grande no cartão; a lista mostra todos, o ativo aceso. No celular, o cartão mostra o item ativo e bolinhas de progresso.
- Nos Ices, as três bolas de sorvete mudam de cor: a do meio é o sabor do item ativo e as laterais são os vizinhos.
- Passar o mouse (ou focar com Tab) num item da lista mostra esse item em destaque.
- A rolagem nunca é presa. Pontos laterais levam direto a cada grupo.

## Antes de publicar
- Trocar `WHATSAPP_NUMBER` no início do script (hoje `5500000000000`, exemplo).
- Itens sem "P" aparecem só com "G" porque no PDF o preço está na coluna Grande: conferir.
- Fotos originais melhores no lugar dos recortes.
- Fontes do Google Fonts (precisa de internet).

## Testar
`node C:\Users\User\.claude\skills\scroll-craft\scripts\serve.mjs --root "C:\Users\User\Projetos I\bookafe-ice-ninho" --port 4500`, abrir http://localhost:4500 (ou abrir o `index.html` direto no Chrome).
