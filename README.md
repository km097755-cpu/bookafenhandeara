# Bookafé: cardápio que reage à rolagem

Atualizado em 12/11/2026 (versão 4: a taça de Ice Ninho saiu, a logo do Bookafé entrou no lugar).

Página única (`index.html` + pasta `fotos`). A logo fica no centro: só o traço do livro com a xícara e o nome BooKafé, em creme, sem fundo (`fotos/logo-bookafe-linha.png`, tirada da logo preta e branca enviada em 12/11; o fundo branco virou transparente). A logo vermelha (`fotos/logo-bookafe.png`) ficou só como ícone da aba. Conforme a pessoa rola, o cardápio aparece em seis grupos e, dentro de cada um, a rolagem passa item por item (nome, preço e descrição em destaque). A taça antiga está guardada no commit anterior do repo GitHub.

## Fonte do conteúdo
PDF `Cardapio_Bookafe_A4.pdf` (duas páginas, enviadas como imagem em 11/11/2026): 26 produtos com descrição e preço. Fotos recortadas dessas imagens (baixa resolução). A lista fica no começo do script (`MENU`): é só editar lá para mudar item, preço ou descrição.

## Grupos
Adicionais · Para completar · Ices · Cafés · Cappuccinos · Chocolates (etiquetas: Para o seu Ice, Geladas, Quentes).

## O que reage à rolagem e ao mouse
- Cada grupo dura mais ou menos rolagem conforme o número de itens (Ices, com 10, dura mais).
- O item ativo aparece grande no cartão; a lista mostra todos, o ativo aceso. No celular, o cartão mostra o item ativo e bolinhas de progresso.
- A logo vai para o lado oposto ao cartão (no celular fica em cima) e vira meia volta a cada troca de grupo; frente e verso são a mesma imagem, então nunca aparece espelhada. Na abertura e no fim volta ao centro.
- Nos Ices, a cor de cada sabor tinge o brilho do fundo.
- Passar o mouse (ou focar com Tab) num item da lista mostra esse item em destaque.
- A rolagem nunca é presa. Pontos laterais levam direto a cada grupo.
- Foto do cartão (Ices, Cafés, Cappuccinos, Chocolates) tem lupa: clique no PC ou toque no celular abre a foto grande (`<dialog class="zoom">`, função `openZoom`). Fecha com toque/clique em qualquer lugar, no X ou com Esc; a página não rola enquanto está aberta. As fotos atuais são pequenas (~250 px), então ampliadas ficam um pouco borradas: trocar por originais melhora.

## Antes de publicar
- WhatsApp: (17) 98113-1409 (`WHATSAPP_NUMBER = "5517981131409"`).
- Itens sem "P" aparecem só com "G" porque no PDF o preço está na coluna Grande: conferir.
- Fotos originais melhores no lugar dos recortes.
- Fontes do Google Fonts (precisa de internet).

