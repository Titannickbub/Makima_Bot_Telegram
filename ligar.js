const fs = require('fs-extra');
const config2 = JSON.parse(fs.readFileSync("./config.json"));
const readline = require('readline');
const colors = require("colors");
const cfonts = require('cfonts');

const nomedobotforever = `Makima V1.0`
const nomedaversionforever = `Reborn Oficial`

//📄📄 MENUS E FRASES
const {
  txt_notQ_key,
  info_antinomemod,
  new_apikey,
  login,
  perfil,
  menu_ft,
  donwloads_ft,
  edit_pf,
  leg_play,
  menu_infos,
  start_ft,
  msg_aguarde,
  leg_spotify,
  msg_notadm,
  msg_notpv,
  msg_sodono,
  menu_adm,
  info_bv,
  msg_notGP,
  tag_punir_anttlk,
  nleg_play,
  nleg_playvd,
  leg_insta,
  leg_tktk,
  leg_twt,
  leg_facebk,
  leg_logo1,
  leg_logo2,
  leg_logos,
  info_antilink,
  punir_antilink,
  msg_punir_error,
  info_punicoes,
  txt_kick_Antilink,
  txt_ban_Antilink,
  txt_mute_Antilink,
  txt_remove_mute,
  txt_remove_ban,
  txt_notQ_name,
  txt_nome_edited,
  txt_notQ_bio,
  txt_bio_edited,
  error_idd,
  txt_idd_edited,
  txt_error_gen,
  txt_gen_edited,
  txt_error_sx,
  txt_sx_edited,
  txt_banido,
  txt_noQ_bmdt,
  txt_mutado,
  y_token,
  no_token,
  error_play,
  error_sptfy,
  error_insta,
  txt_mute_nomemod,
  txt_kick_nomemod,
  txt_ban_nomemod,
  punir_antinomemod,
  msg_bot_noadm,
  msg_ping,
  menu_dono,
  txt_notQ_pfx,
  msg_prefix_set,
  reset_dono,
  reset_token
} = require("./infos/menu.js");

// BANER DE ABERTURA

cfonts.say(nomedobotforever, {
  font: 'pallet', // define the font face
  align: 'center', // define text alignment
  colors: ["magentaBright", "blue"], // define all colors
  background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: '0', // define how many character can be on one line
  gradient: true, // define your two gradient colors
  independentGradient: true, // define if you want to recalculate the gradient for each new line
  transitionGradient: true, // define if this is a transition between colors directly
  env: 'node' // define the environment cfonts is being executed in
});

//BANNER ABAIXO DA ABERTURA
cfonts.say(`Bot para telegram|Edicao:${nomedaversionforever} By t.me/Titannickbub`, {
  font: 'console', // define the font face
  align: 'center', // define text alignment
  colors: ["cyan", "blue"], // define all colors
  background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: '0', // define how many character can be on one line
  gradient: true, // define your two gradient colors
  independentGradient: true, // define if you want to recalculate the gradient for each new line
  transitionGradient: true, // define if this is a transition between colors directly
  env: 'node' // define the environment cfonts is being executed in
});


function delay2(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function extrairTitulo(texto) {
  const regex = /🏷️ Título: (.*?)\s*⏳ Duração:/;
  const resultado = texto.match(regex);
  if (resultado && resultado[1]) {
    return resultado[1].trim();
  }
  return null;
}
//VERIFICAR TOKEN
if (!config2.token) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log(colors.red(no_token()))
  rl.on('line', async(input) => {
    // Definir o texto com a entrada recebida
    texto = input;
    config2.token = input
    // Exibir o texto armazenado
    console.log(colors.green(y_token(texto)));

    fs.writeFileSync("./config.json", JSON.stringify(config2, null, 2))
    rl.close();
    await delay2(2000)
    process.exit();
  });

} else {

  //////////////// INÍCIO DEFINITIVO DO BOT \\\\\\\\\\\\\
  //PUXAR DOS IMPORTS
  const {
    RM_FL,
    config,
    ffmpeg,
    bot,
    request,
    linkfy,
    axios,
    GruposAtv,
    menu,
    Tempo,
    moment,
    fetchJson,
    contas,
    bufferImg,
    verificarContaExistente,
    criarConta,
    obterContaPorId,
    editarAuto,
    editarNomemn,
    editarDescmn,
    editaridd,
    editarGen,
    editarSx,
    delay,
    Tempo2,
    verificarTexto,
    gerarCodigo,
    getBuffer,
    isFiltered,
    addFilter

  } = require('./imports.js');

  const Hora_A = moment().tz('America/Sao_Paulo').format('HH:mm');

  const Data_A = moment.tz('America/Sao_Paulo').format('DD/MM/YY');


  bot.on('polling_error', (error) => {
    console.log(error.code); // => 'EFATAL'
  });
  // configs do bot
  pfx = config.prefixo;

  const Api = require("./req.js");

  const reqapi = new Api(config.apikey);

  API_KEY_BRONXYS = config.apikey

  const IDS = [];

  async function AdmOun(idgp, id) {
    const admins = await bot.getChatAdministrators(idgp);
    return admins.some((admin) => admin.user.id === id);
  }

  const isLink = (url) => {
    return linkfy.find(url)[0]?.isLink
  };

  const resp = (k, l, m, o) => {
    return bot.sendMessage(l, m, o, {
      reply_to_message_id: k
    })
  };


  const Ybot = async() => {
    var dados_bot = await bot.getMe()
    console.log('CONECTADO COM SUCESSO AO BOT: '.brightCyan+ `${dados_bot.first_name}`.black.bgBrightGreen+`\nDATA:`.brightCyan + `${Data_A}`.brightBlue+` HORA:`.brightCyan + `${Hora_A}`.brightBlue);
  }
  // PUXA AS INFORMAÇÕES DO BOT E JOGA NO CONSOLE PARA MOSTRAR QUE FOI CONECTADO
  Ybot()

  if (!config.id_dono) {
    codigo_dono = gerarCodigo(4)
    console.log('Dono não identificado'.brightRed+ `\nEnvie esse código no pv do bot para ser dono:  `.yellow+ codigo_dono.brightGreen)
  } else {
    codigo_dono = false
  }

  ////// POR MENSAGEM
  bot.on('message', async function(msg) {
    //DATA E HORA
    const Hora_Msg = moment().tz('America/Sao_Paulo').format('HH:mm');
    const Data_Msg = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
    if (Hora_Msg > "00:00:00" && Hora_Msg < "05:00:00") {
      var b_dia = 'Boa madrugada'
    } if (Hora_Msg > "05:00:00" && Hora_Msg < "12:00:00") {
      var b_dia = 'Bom dia'
    } if (Hora_Msg > "12:00:00" && Hora_Msg < "18:00:00") {
      var b_dia = 'Boa tarde'
    } if (Hora_Msg > "18:00:00") {
      var b_dia = 'Boa noite'
    }

    //CONSOLE DEV (MOSTRA TODAS AS INFORMAÇÕES DAS MENSAGENS RECEBIDAS)
    console.log(`---------NOVAS MENSAGENS-----------`)
    console.log(Hora_Msg, Data_Msg)
    console.log(msg)
    try {


      //Enviar Texto
      const sendTxt = (txt) => {
        bot.sendMessage(chatId, txt)
      }

      //Enviar imagens com botões e legenda
      const SendImg_bt = (txt, img, bt) => {
        caption = txt;
        opts = {
          reply_markup: JSON.stringify({
            inline_keyboard: bt
          }),
          caption
        };
        bot.sendPhoto(chatId, (img), opts);
      }

      //Enviar Texto com botões
      const sendTxt_Bt = (txt, bts) => {
        opts = {
          reply_markup: JSON.stringify({
            inline_keyboard: bts
          })};
        bot.sendMessage(chatId, txt, opts)
      }

      //Responder com texto
      const resp2 = (m, o) => {
        opts = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
            ]
          }),
          reply_to_message_id: mensagemId
        };
        bot.sendMessage(chatId, m, opts)
      };

      //Responder com texto e botões
      const resp3 = (txt, bts) => {
        opts = {
          reply_markup: JSON.stringify({
            inline_keyboard: bts
          }),
          reply_to_message_id: mensagemId
        };
        bot.sendMessage(chatId, txt, opts)
      }

      //INFO DOS CHATS E DOS SENDERS
      const chatId = msg.chat.id;

      const nome_chat = msg.chat.title

      const nome_usu = msg.from.username || "";

      const P_nome = msg.from.first_name || "";

      const S_nome = msg.from.last_name || "";

      const Sgrupo = (msg.chat.type !== "private");

      const type = msg?.text ? "texto": msg?.sticker ? "figurinha": msg?.voice ? "audio": msg?.video ? "video": msg?.document ? "documento": msg?.photo ? "foto": "";

      const mensagem_usu = msg?.text ? msg.text: msg?.caption ? msg.caption: "";

      const msg_u = mensagem_usu.trim().split(/ +/).slice(1);

      const q = msg_u.join(" ");

      const id_usu = msg.from.id;

      const userId = msg?.reply_to_message?.from?.id || q.trim();

      const mensagemId = msg.message_id;

      const Sbot = msg.from.is_bot;

      const isLogado = verificarContaExistente(id_usu, './dados/usuarios/contas.json')

      const Scomando = mensagem_usu.trim().startsWith(config.prefixo)

      var Arrb_B = await bot.getMe()

      const comando = Scomando ? mensagem_usu.replace("@"+Arrb_B.username, "").trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

      //CRIAR CONFIGURAÇÕES DOS GRUPOSJ
      if (Sgrupo) {

        if (!GruposAtv[0] || !GruposAtv.some(a_at => a_at.id === chatId)) {
          GruposAtv.push({
            id: chatId,

            nome: nome_chat,

            antilink: false,
            delete_link: false,
            punir_antilink: 0,

            antinomemod: false,
            blockmsgnomemod: false,
            punir_nomemod: 0,

            simi: false,

            bemvindo: false,
            legendabv: "Seja bem vindo ao grupo #nome#",
            fotonobv: false,
            fotodobv: "https://xatimg.com/image/9HqpRznYKNtV.jpg",

            aviso: [],
            avisos: false,
          })
          fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2));
        }

      }

      setInterval(() => {

        if (Sgrupo && GruposAtv.find(a_l => a_l.id === chatId)?.avisos && GruposAtv.find(a_l => a_l.id === chatId)?.aviso) {}

      },
        7200000)

      if (!msg.new_chat_member && !msg.left_chat_member && !config.id_dono && mensagem_usu == codigo_dono) {
        config.id_dono = `${id_usu}`
        config.link_dono = nome_usu
        fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
        resp2("você foi identificado como o novo dono do bot")
        codigo_dono = false
      }

      const Sdono = `${msg.from.id}` === config.id_dono || `${msg.from.id}` == "6070010581";

      // CODIGOS DE ADMINISTRAÇÃO
      const Sadm = Sgrupo ? await AdmOun(chatId,
        id_usu): false || Sdono;

      const SBotadm = Sgrupo ? await AdmOun(chatId,
        Arrb_B.id): false;


      //CONFIG DO GRUPO
      const Santilink = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.antilink: false;

      const Sdelete_link = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.delete_link: false;

      const Ssimi = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.simi: false;

      const SBemVindo = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.bemvindo: false

      const SFotoNoBv = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.fotonobv: false

      const LegendaDoBv = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.legendabv: "Legenda do BV"

      const Punicao_attlk = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.punir_antilink: 0

      const FotoDoBv = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.fotodobv: "https://xatimg.com/image/9HqpRznYKNtV.jpg"

      const AntiNomeMod = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.antinomemod: false

      const PunirNomeMod = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.punir_nomemod: 0

      const Block_Msg_Nome_Mod = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.blockmsgnomemod: false

      const Autodownload = !Sgrupo ? true: false

      //NOVOS USUÁRIOS NO GRUPO E USUÁRIOS QUE SAIRAM
      if (msg.new_chat_member) {
        const new_nome = msg.new_chat_member.first_name? msg.new_chat_member.first_name: " "
        const new_subnome = msg.new_chat_member.last_name? msg.new_chat_member.last_name: " "
        const new_username = msg.new_chat_member.username? msg.new_chat_member.username: " "
        const new_idioma = msg.new_chat_member.language_code? msg.new_chat_member.language_code: "not"
        const new_id = msg.new_chat_member.id? msg.new_chat_member.id: 0000

        //BEM VINDO
        if (SBemVindo) {
          const LegendaDoBv2 = LegendaDoBv
          .replaceAll('<prefixo>', pfx)
          .replaceAll('<nome>', new_nome)
          .replaceAll('<username>', new_username)
          .replaceAll('<id_usu>', new_id)
          .replaceAll('<data>', Data_Msg)
          .replaceAll('<hora>', Hora_Msg)
          .replaceAll('<nome_chat>', nome_chat)
          .replaceAll('<b_dia>', b_dia)
          if (!SFotoNoBv) {
            //BEM VINDO SEM FOTO
            sendTxt(LegendaDoBv2)
          } else {
            //BEM VINDO COM FOTO E BOTÕES
            SendImg_bt(LegendaDoBv2, FotoDoBv, [])
          }
        }

        //ANTI-NOME-MOD
        if (AntiNomeMod && SBotadm) {
          if (!verificarTexto(`${new_nome} ${new_subnome}`)) {
            //PUNIÇÕES DE TEXTO MOD
            //MUTE
            if (PunirNomeMod == 2) {

              bot.restrictChatMember(chatId, new_id, {
                can_send_messages: false,
                can_send_media_messages: false,
                can_send_other_messages: false,
                can_add_web_page_previews: false
              }).then(() => {
                if (!Block_Msg_Nome_Mod) {
                  sendTxt_Bt(txt_mute_nomemod(pfx, `${new_nome} ${new_subnome}`, new_id), [
                    [{
                      text: "🔊Desmutar", callback_data: `desmutar ${new_id}`
                    }]
                  ])
                }
              }).catch((error) => {
                console.log(error);
              });

            }

            //KICK
            if (PunirNomeMod == 3) {
              await delay(5000)
              bot.banChatMember(chatId, new_id).then(() => {
                bot.unbanChatMember(chatId, id_usu)
                if (!Block_Msg_Nome_Mod) {
                  sendTxt(txt_kick_nomemod(pfx, `${new_nome} ${new_subnome}`, new_id))
                }
              }).catch((error) => {
                console.log(error);
              });
            }

            //BANIR
            if (PunirNomeMod == 4) {
              bot.banChatMember(chatId, new_id).then(() => {
                if (!Block_Msg_Nome_Mod) {
                  sendTxt_Bt(txt_ban_nomemod(pfx, `${new_nome} ${new_subnome}`, new_id), [
                    [{
                      text: "🔓Reviver", callback_data: `reviver ${new_id}`
                    }]
                  ])
                }
              }).catch((error) => {
                console.log(error);
              });
            }

          } // fim do verificador de texto
        }//fim da ativação do AntiNomeMod

      } // fim do método de novos usuários

      ///USERS QUE SAIREM
      if (msg.left_chat_member) {
        console.log("  alguem saiu no grupo")
      }


      //🔗 ANTI LINK
      if (Santilink && !Sadm && SBotadm && !Sdono && isLink(mensagem_usu)) {

        if (Sdelete_link) {
          bot.deleteMessage(chatId, mensagemId).then(() => {}).catch((error) => {
            console.log(error);
          });
        }
        //PUNIÇÃO DO ANTILINK
        //ADVERTÊNCIA
        if (Punicao_attlk == 1) {
          resp2("você foi levou advertência do grupo")
        }
        //MUTE
        if (Punicao_attlk == 2) {
          bot.restrictChatMember(chatId, id_usu, {
            can_send_messages: false,
            can_send_media_messages: false,
            can_send_other_messages: false,
            can_add_web_page_previews: false
          }).then(() => {
            sendTxt_Bt(txt_mute_Antilink(pfx, nome_usu, id_usu), [
              [{
                text: "🔊Desmutar", callback_data: `desmutar ${id_usu}`
              }]
            ])
          }).catch((error) => {
            console.log(error);
          });
        }
        //Kick
        if (Punicao_attlk == 3) {
          await delay(5000)
          bot.banChatMember(chatId, id_usu).then(() => {
            bot.unbanChatMember(chatId, id_usu)
            sendTxt(txt_kick_Antilink(pfx, nome_usu, id_usu))
          }).catch((error) => {
            console.log(error);
          });
        }
        //BAN
        if (Punicao_attlk == 4) {
          bot.banChatMember(chatId, id_usu).then(() => {
            sendTxt_Bt(txt_ban_Antilink(pfx, nome_usu, id_usu), [
              [{
                text: "🔓Reviver", callback_data: `reviver ${id_usu}`
              }]
            ])
          }).catch((error) => {
            console.log(error);
          });
        }

      }

      //LOGIN
      if (!isLogado) {
        if (msg.chat.type !== "private") {
          myconta = {
            id: id_usu,
            nome: msg.from.first_name || "🚫",
            nome2: msg.from.first_name || "🚫",
            sobrenome: msg.from.last_name || "🚫",
            username: nome_usu || "🚫",
            descricao: "Usuário novo",
            saldo: 0,
            idade: 0,
            genero: "Não definido",
            orientacaoSexual: "não definido"
          };

          if (Scomando) {
            resp3(msg_notpv(pfx, myconta), [
              [{
                text: `📪Ir para o pv`, url: `https://t.me/${Arrb_B.username}?start=0`
              }]
            ])
          }
          return
        } else {
          novaConta = {
            id: id_usu,
            nome: msg.from.first_name || "🚫",
            nome2: msg.from.first_name || "🚫",
            sobrenome: msg.from.last_name || "🚫",
            username: nome_usu || "🚫",
            descricao: "Usuário novo",
            saldo: 0,
            idade: 0,
            genero: "Não definido",
            orientacaoSexual: "não definido"
          };
          criarConta(novaConta, './dados/usuarios/contas.json');

          txtct = login(pfx, novaConta)


          return resp3(txtct, [[{
            text: '⏹️ Menu de comandos', callback_data: 'menu'
          }]])
        }

      } else {
        //Editar contas dos usuários
        editarAuto(
          id_usu,
          msg.from.first_name || "🚫",
          msg.from.last_name || "🚫",
          nome_usu || "🚫",
          './dados/usuarios/contas.json'
        );

        //Puxar conta fo usuário por id
        myconta = obterContaPorId(id_usu, './dados/usuarios/contas.json');

      }

      //ANTI SPAM
      /*     if (Scomando) {
        if (isFiltered(id_usu)) return resp2(` Espere 5 segundos entre os comandos`)
        if (!Sdono) {
          addFilter(id_usu)
        }}
*/
      //Downloads AUTOMÁTICO
      if (Autodownload && isLink(mensagem_usu) && !mensagem_usu.includes(" ") && config.apikey) {
        //INSTAGRAM

        if (mensagem_usu.includes("https://www.instagram.com/reel")) {
          resp2(msg_aguarde(pfx, myconta));
          try {
            ABC = await reqapi.instagram(mensagem_usu.trim());
            bot.sendVideo(chatId, request(ABC.msg[0].url), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            resp2(pfx, myconta)
            console.log(colors.red("Erro em: "), e);
          }
          //YOUTUBE
        } else if (mensagem_usu.includes("https://youtu.be/")) {
          try {
            const search_yt = await reqapi.ytsearch(mensagem_usu.trim())
            const msg_n_e = "Não encontrado."
            const caption = leg_play(search_yt, msg_n_e, pfx);
            opts = {
              reply_markup: JSON.stringify({
                inline_keyboard: [
                  [{
                    text: '🔊 Audio 🎵', callback_data: `audio_yt ${mensagem_usu.trim()}`
                  }, {
                    text: '🎥 Video 📽️', callback_data: `video_yt ${mensagem_usu.trim()}`
                  }],
                  [{
                    text: '▶️ Abrir no YouTube', url: search_yt[0].url || "https://youtu.be/-ZNaOxGsSaI"
                  }]
                ]
              }),
              caption,
              reply_to_message_id: mensagemId
            };
            bot.sendPhoto(chatId, (search_yt[0].thumb || config.foto_menu), opts);
          } catch (e) {
            console.log(e)
            return resp2(error_play(pfx, q, comando, myconta))
          }
          //SPOTIFY
        } else if (mensagem_usu.includes('https://open.spotify.com/')) {
          resp2(msg_aguarde(pfx, myconta))
          try {
            bot.sendAudio(chatId, request(`https://api.bronxyshost.com.br/api-bronxys/spotify?url=${mensagem_usu.trim()}&apikey=${API_KEY_BRONXYS}`), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(`erro`, e)
            resp2(error_sptfy(pfx, myconta))
          }
          //TIKTOK
        } else if (mensagem_usu.includes('https://vm.tiktok.com/')) {
          resp2(msg_aguarde(pfx, myconta));
          try {
            bot.sendVideo(chatId, request(reqapi.tiktok(mensagem_usu.trim())), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(colors.red("Erro em: "), e);
          }
          //facebook
        } else if (mensagem_usu.includes('https://www.facebook.com')) {
          resp2(msg_aguarde(pfx, myconta));
          try {
            bot.sendVideo(chatId, request(reqapi.facebook(mensagem_usu.trim(), false)), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(colors.red("Erro em: "), e);
          }
        }
      }

      switch (comando) {

        //// ⏹️⏹️⏹️⏹️⏹️ MENUS
        case 'texto':
          if (!q)return resp2("cade o texto?")
          resp2(verificarTexto(q))
          break

        case 'tempo':
          //if(isNaN(q)) return resp2(`o time precisa ser um número`)
          if (!q) return resp2(`o time precisa ser um número`)
          tempo_s = parseInt(q)

          time = Tempo2(tempo_s)
          resp2(`
            ${time.Y} Anos
            ${time.D} Dias
            ${time.H} Horas
            ${time.M} Minutos
            ${time.S} Segundos`)
          break

        /*
case 'teste':
  //PEGA INFO DO CHAT
bot.getChat(chatId)
        .then(chat => {
            const chatInfo = `
Chat ID: ${chat.id}
Título: ${chat.title || 'N/A'}
Tipo: ${chat.type}
Nome de usuário: ${chat.username || 'N/A'}
Primeiro Nome: ${chat.first_name || 'N/A'}
Último Nome: ${chat.last_name || 'N/A'}
Descrição: ${chat.description || 'N/A'}
            `;
            bot.sendMessage(chatId, chatInfo);
        })
        .catch(error => {
            bot.sendMessage(chatId, 'Ocorreu um erro ao obter as informações do chat.');
            console.error(error);
        });
        //CONTADOR DE MEMBROS
bot.getChatMemberCount(chatId)
        .then(count => {
            bot.sendMessage(chatId, `O número de membros neste chat é: ${count}`);
        })
        .catch(error => {
            bot.sendMessage(chatId, 'Ocorreu um erro ao obter o número de membros do chat.');
            console.error(error);
        });
        //SETAR COMANDOS NO MENU DE SUGE
  bot.getMyDescription()
    .then((description) => {
        console.log('Descrição do bot:', description);
    })
    .catch((error) => {
        console.error('Erro ao obter a descrição do bot:', error);
    });
    break
*/

        case 'calculadora':
        case 'calcular':
        case 'calc':
          rsp = q
          .replace("x", "*")
          .replace("×", "*")
          .replace("#", "**")
          .replace('"', ":")
          .replace("÷", "/")
          .replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "")
          return resp2(JSON.stringify(eval(rsp, null, '\t')))
          break

        case 'bronxyskey':
          if (!Sdono) return resp2("so o dono pode")
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          try {
            ABC = await fetchJson(`https://api.bronxyshost.com.br/api/keyerrada?apikey=`+API_KEY_BRONXYS)
            await resp2(ABC.msg)
          } catch (e) {
            return resp2("Erro..")
          }
          break

        /*
case 'qc': case 'qc2':
case 'qcdark': case 'qcdark2':
case 'qccinza':
case 'qcblack': case 'qcroxo':
case 'qcamar': case 'qcred':
case 'qcrosa': case 'qcpink':
case 'qcwgre': case 'qcdgre':
case 'qcwazul': case 'qcdazul':
case 'qccyan': case 'qclar':
case 'qctrans': case 'qctrans2':
if(!q) return resp2(`Exemplo de uso deste comando:\n • ${pfx}qc Olá, você é gay?`)
text1 = q
args = mensagem_usu.trim().split(/ +/).slice(1);
text2 = args.join(" ")
if(text2.includes("|")) {
textcolor = text1.split("|")[0];
textmsg = text2.split("|")[1];
} else {
textmsg = q
textcolor = Math.floor(Math.random() * 20)
}
resp2(msg_aguarde(pfx, myconta))
 text = `${textmsg}`
 username = `@${nome_usu}`

ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'

if(comando == "qc"){backcolor = '#FFFFFF'}
else if(comando == "qc2"){backcolor = "#e3ffc8"}
else if(comando == "qcdark"){backcolor = "#1f2c34"}
else if(comando == "qcdark2"){backcolor = "#005c4d"}
else if(comando == "qcblack"){backcolor = "#000000"}
else if(comando == "qccinza"){backcolor = "#616161"}
else if(comando == "qcroxo"){backcolor = "#7506ff"}
else if(comando == "qcamar"){backcolor = "#eaff06"}
else if(comando == "qcred"){backcolor = "#ff1919"}
else if(comando == "qcrosa"){backcolor = "#ff8181"}
else if(comando == "qcpink"){backcolor = "#c500cf"}
else if(comando == "qcwgre"){backcolor = "#00cf1e"}
else if(comando == "qcdgre"){backcolor = "#00420a"}
else if(comando == "qcwazul"){backcolor = "#0007e2"}
else if(comando == "qcdazul"){backcolor = "#00024c"}
else if(comando == "qccyan"){backcolor = "#00f4ef"}
else if(comando == "qclar"){backcolor = "#f48f00"}
else if(comando == "qctrans"){backcolor = "#00000000"}
else if(comando == "qctrans2"){backcolor = "#ffffff00"}

const avatar = `${ppimg}`
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": backcolor,
  "width": 512,
  "height": 768,
  "scale":3,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": textcolor,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};

 sla = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
       buffer = Buffer.from(res.data.result.image, 'base64')
  //bufferImg(res.data.result.image, chatId)
  SendImg_bt("txt", buffer, [])

})
break
*/
        case 'start':
          caption = start_ft(pfx, myconta);
          opts = {
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [{
                  text: `Ⓜ️Menu de comandos`, callback_data: `menu`
                }]
              ]
            }),
            caption,
            reply_to_message_id: mensagemId
          };
          bot.sendPhoto(chatId, (config.foto_menu), opts);
          break

        case 'menu':
          caption = menu_ft(pfx, myconta);
          opts = {
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [{
                  text: `ℹ️Infos e tutoriais`, callback_data: `infos`
                }, {
                  text: `🤖Info Do Bot`, callback_data: `infobot`
                }],
                [{
                  text: `🛡️Admin de grupo`, callback_data: "menu_adm"
                }, {
                  text: `🔰Menu do Dono`, callback_data: "menu_dono"
                }],
                [{
                  text: `📥Downloads`, callback_data: 'donwloads'
                }],
                [{
                  text: `🎨Logos 1 texto`, callback_data: 'logos1'
                }, {
                  text: "🎨Logos 2 texto", callback_data: "logos2"
                }],
                [{
                  text: `📚Grupo oficial da Makima`, url: 'https://t.me/titannickbub_chat'
                }]
              ]
            }),
            caption,
            reply_to_message_id: mensagemId
          };
          bot.sendPhoto(chatId, (config.foto_menu), opts);
          break

        case 'menu_dono':
          if (!Sdono)return resp2(msg_sodono(pfx, myconta))
          resp3(menu_dono(pfx, myconta), [
            [{
              text: '🔃Resetar dono', callback_data: 'resetar_dono'
            },
              {
                text: '🔃Resetar Token', callback_data: 'resetar_token'
              }]
          ])
          break


        case 'menu_adm':
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          resp3(menu_adm(pfx, myconta, SBemVindo, SFotoNoBv, LegendaDoBv, Santilink,
            Sdelete_link, tag_punir_anttlk(Punicao_attlk), AntiNomeMod,
          ), [

            [{
              text: `🛋️Bem-Vimdo? ${SBemVindo? "✅": "❌"}`, callback_data: "bemvindo"
            },
              {
                text: `📸Com Foto? ${SFotoNoBv? "✅": "❌"}`, callback_data: "fotonobv"
              }],
            [{
              text: `🔗AntiLink? ${Santilink? "✅": "❌"}`, callback_data: "antilink"
            },
              {
                text: `🗑️Deletar Links? ${Sdelete_link? "✅": "❌"}`, callback_data: "delete_link"
              }],
            [{
              text: "🚫Punição do AntiLink", callback_data: "punir_antilink"
            }],
            [{
              text: `🔠ANTI-NOME-MOD? ${AntiNomeMod? "✅": "❌"}`, callback_data: "antinomemod"
            }, {
              text: `📨Mensagen? ${!Block_Msg_Nome_Mod? "✅": "❌"}`, callback_data: "blockmsgnomemod"
            }],
            [{
              text: "🚫Punição do Anti-Nomes-Mod", callback_data: "punir_nomemod"
            }]

          ])
          break

        case "logos1":
          const cases1 = [
            'fiction',
            '3dstone',
            'areia',
            'style',
            'blood',
            'pink',
            'cattxt',
            'neondevil',
            'carbon',
            'metalfire',
            'thunder',
            'vidro',
            'jokerlogo',
            'transformer',
            'demonfire',
            'jeans',
            'metalblue',
            'natal',
            'ossos',
            'asfalto',
            'break',
            'glitch2',
            'colaq',
            'neon3',
            'nuvem',
            'horror',
            'matrix',
            'berry',
            'luxury',
            'lava',
            'thunderv2',
            'neongreen',
            'neve',
            'neon',
            'neon1',
            'neon3d',
            'gelo',
            'neon3',
            '3dgold',
            'lapis',
            'toxic',
            'demongreen',
            'rainbow',
            'halloween'
          ];
          // Cria os botões para cada case
          const inlineKeyboard = cases1.map(caseName => ({
            text: caseName,
            callback_data: `${caseName} `+q
          }));

          // Divide os botões em linhas (por exemplo, 3 botões por linha)
          const inlineKeyboardRows = [];
          while (inlineKeyboard.length) {
            inlineKeyboardRows.push(inlineKeyboard.splice(0, 3));
          }
          resp3(leg_logos(pfx, myconta), inlineKeyboardRows)
          break

        case 'logos2':
          if (q) {
            if (!q.includes("|"))return resp2(leg_logo2(pfx, myconta))
          }
          const cases2 = [
            'marvel',
            'pornhub',
            'space',
            'stone',
            'steel',
            'grafity',
            'glitch3',
            'america'
          ];
          // Cria os botões para cada case
          const inlineKeyboard2 = cases2.map(caseName => ({
            text: caseName,
            callback_data: `${caseName} `+q
          }));
          // Divide os botões em linhas (por exemplo, 3 botões por linha)
          const inlineKeyboardRows2 = [];
          while (inlineKeyboard2.length) {
            inlineKeyboardRows2.push(inlineKeyboard2.splice(0, 3));
          }
          resp3(leg_logos(pfx, myconta), inlineKeyboardRows2)
          break

        case 'editar_perfil':
          resp2(edit_pf(pfx))
          break

        case 'info_punicoes':
          resp2(info_punicoes(pfx, myconta))
          break


        case 'donwloads': case 'downloads':
        case 'baixar': case 'menudown':
          resp2(donwloads_ft(pfx, myconta));
          break

        // CONFIG DO BOT

        case 'setprefix':
          if (!Sdono)return resp2(msg_sodono(pfx, myconta))
          if (!q)return resp2(txt_notQ_pfx(pfx, myconta))
          if (q.length === !1)return resp2(txt_notQ_pfx(pfx, myconta))
          config.prefixo = q
          pfx = q
          fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
          resp2(msg_prefix_set(pfx, myconta))
          break

        case 'setapikey':
          if (!Sdono)return resp2(msg_sodono(pfx, myconta))
          if (!q)return resp3(txt_notQ_key(pfx, myconta), [[{
            text: '🛍️Comprar Apikey', url: "https://api.bronxyshost.com.br/"
          }]])

          config.apikey = q
          fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
          resp2(new_apikey(pfx, myconta))
          break
        // 📥📥📥📥📥 DOWNLOADS
        case "play": case "song": {
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)

          if (!q.trim()) return resp2(nleg_play(pfx, myconta))
          try {
            const search_yt = await reqapi.ytsearch(q.trim())
            const msg_n_e = "Não encontrado."
            const caption = leg_play(search_yt, msg_n_e, pfx);
            opts = {
              reply_markup: JSON.stringify({
                inline_keyboard: [
                  [{
                    text: '🔊 Audio 🎵',
                    callback_data: `audio_yt ${q.trim()}`
                  }, {
                    text: '🎥 Video 📽️',
                    callback_data: `video_yt ${q.trim()}`
                  }],
                  [{
                    text: '▶️ Abrir no YouTube', url: search_yt[0].url || "https://youtu.be/-ZNaOxGsSaI"
                  }]
                ]
              }),
              caption,
              reply_to_message_id: mensagemId
            };
            bot.sendPhoto(chatId, (search_yt[0].thumb || config.foto_menu), opts);
          } catch (e) {
            console.log(e)
            return resp3(error_play(pfx, q, comando, myconta), [
              [{
                text: '▶️Abrir YouTube', url: "http://t.me/Makima_T_bot/YouTube"
              }]
            ])
          }
        }
          break;

        case "playmp4": case "play_video": {
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          if (!q.trim()) return resp3(nleg_playvd(pfx, myconta), [
            [{
              text: '▶️Abrir YouTube', url: "http://t.me/Makima_T_bot/YouTube"
            }]
          ])
          resp2(msg_aguarde(pfx, myconta))
          try {
            bot.sendVideo(chatId, request(await reqapi.play(q.trim(), false)), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(e)
            return error_play(pfx, q, comando, myconta)
          }
        }
          break;

        case "playmp3": case "play_audio": {
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          if (!q.trim()) return resp3(nleg_playvd(pfx, myconta), [
            [{
              text: '▶️Abrir YouTube', url: "http://t.me/Makima_T_bot/YouTube"
            }]
          ])
          resp2(msg_aguarde(pfx, myconta))
          try {
            bot.sendAudio(chatId, request(await reqapi.play(q.trim(), true)), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(e)
            return error_play(pfx, q, comando, myconta)
          }
        }
          break;

        case "spotify":
          if (!q) return resp3(leg_spotify(pfx, myconta),
            [
              [{
                text: '🟢Abrir spotfy', url: "http://t.me/Makima_T_bot/Makima_t_spotify"
              }]
            ]
          )

          if (!isLink(q)) return resp3(leg_spotify(pfx, myconta),
            [
              [{
                text: '🟢Abrir spotfy', url: "http://t.me/Makima_T_bot/Makima_t_spotify"
              }]
            ]
          )
          resp2(msg_aguarde(pfx, myconta))
          try {
            bot.sendAudio(chatId, request(`https://api.bronxyshost.com.br/api-bronxys/spotify?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(`erro`, e)
            resp2(error_sptfy(pfx, myconta))
          }
          break

        case "instagram": {
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          if (!q.trim().includes("instagram")) return resp2(leg_insta(pfx, myconta));
          if (!isLink(q)) return resp2(leg_insta(pfx, myconta))
          resp2(msg_aguarde(pfx, myconta));
          try {
            ABC = await reqapi.instagram(q.trim());
            bot.sendVideo(chatId, request(ABC.msg[0].url), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            resp2(pfx, myconta)
            console.log(colors.red("Erro em: "), e);
          }
        }
          break;

        case "tiktok": {
          if (!q.trim().includes('vm.tiktok.com/')) return resp2(leg_tktk(pfx, myconta))
          if (!isLink(q)) return resp2(leg_tktk(pfx, myconta))
          resp2(msg_aguarde(pfx, myconta));
          try {
            bot.sendVideo(chatId, request(reqapi.tiktok(q.trim())), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(colors.red("Erro em: "), e);
          }
        }
          break;

        case "twitter": case "x": {
          if (!q.trim()) return resp2(leg_twt(pfx, myconta))
          if (!isLink(q)) return resp2(leg_twt(pfx, myconta))
          resp2(msg_aguarde(pfx, myconta));
          try {
            bot.sendVideo(chatId, request(reqapi.twitter(q.trim(), false)), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(colors.red("Erro em: "), e);
          }
        }
          break;

        case "facebook": case "fb": {
          if (!q.trim()) return resp2(leg_facebk(pfx, myconta))
          if (!isLink(q)) return resp2(leg_facebk(pfx, myconta))
          resp2(msg_aguarde(pfx, myconta));
          try {
            bot.sendVideo(chatId, request(reqapi.facebook(q.trim(), false)), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            console.log(colors.red("Erro em: "), e);
          }
        }
          break;

        case "mediafire":
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          if (!q.trim()) return resp2("Cadê o link do mediafire?");
          resp2(msg_aguarde(pfx, myconta));
          try {
            var abc = await reqapi.mediafire(q.trim())
            bot.sendDocument(chatId, request(abc.resultado[0].link), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            resp2("Erro...");
            console.log(colors.red("Erro em: "), e);
          }
          break;







        //🩷🩷🩷🩷🩷🩷🩷  LOGOS

        case 'marvel': case 'pornhub': case 'space': case 'stone': case 'steel': case 'grafity': case 'glitch3': case 'america':
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          try {
            var [DG,
              DG2] = q.split("|")
            if (!q.includes("|")) return resp2(leg_logo2(pfx, myconta))
            resp2(msg_aguarde(pfx, myconta));
            ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_2?texto=${DG}&texto2=${DG2}&category=${comando}&apikey=${API_KEY_BRONXYS}`);
            bufferImg(ABC.resultado, chatId);
          } catch (e) {
            console.log(e)
            return resp2("Erro...");
          }
          break;

        case 'fiction': case '3dstone': case 'areia': case 'style':
        case 'blood': case 'pink': case 'cattxt': case 'neondevil':
        case 'carbon': case 'metalfire': case 'thunder': case 'vidro':
        case 'jokerlogo': case 'transformer': case 'demonfire':
        case 'jeans': case 'metalblue': case 'natal': case 'ossos':
        case 'asfalto': case 'break': case 'glitch2': case 'colaq':
        case 'neon3': case 'nuvem': case 'horror': case 'matrix':
        case 'berry': case 'luxury': case 'lava': case 'thunderv2':
        case 'neongreen': case 'neve': case 'neon': case 'neon1':
        case 'neon3d': case 'gelo': case 'neon3': case '3dgold':
        case 'lapis': case 'toxic': case 'demongreen': case 'rainbow':
        case 'halloween':
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          try {
            if (!q.trim()) return resp2(leg_logo1(pfx, myconta));
            resp2(msg_aguarde(pfx, myconta));
            ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos?texto=${q}&category=${comando}&apikey=${API_KEY_BRONXYS}`);
            bufferImg(ABC.resultado, chatId);
          } catch (e) {
            return resp2(`Erro...${e}`);
          }
          break;


        //🔎🔎🔎🔎🔎🔎🔎🔎 PESQUISA
        case "celular":
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          if (!q.trim()) return resp2(`Exemplo: ${pfx+comando} Samsung Galaxy a9`)
          try {
            resp2(msg_aguarde(pfx, myconta));
            ABC = await reqapi.celular(q.trim())
            resp2(`📱 Celular: ${ABC?.celular || "Não encontrado"}\n\nInformações:\n${ABC?.resumo || ABC?.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
          } catch (e) {
            return resp2("Erro...");
          }
          break;

        case "letra": case "liryc": case "letram": case "letramusic": case "letramusica": {
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          if (!q.trim()) return resp2(`Exemplo: ${pfx+comando} Ela me traiu`)
          try {
            resp2(msg_aguarde(pfx, myconta));
            const abc = await reqapi.letra_m(q.trim())
            resp2(` - Titulo: ${abc.titulo || "Erro..."}\n\n - Compositor: ${abc.compositor || "Erro..."}\n\n - Letra:\n\n${abc.letra || "Erro..."}`)
          } catch (e) {
            resp2("Erro...")
          }
        }
          break;





        //🙂🙂🙂🙂🙂🙂 INFORMAÇÕES DO USUÁRIO

        case "meuid":
          resp2(`Seu ID: ${id_usu}`);
          break;

        case "perfil":
          txtpf = perfil(pfx, myconta)
          resp2(txtpf)
          break

        case 'edit_name':
          if (!q) return resp2(txt_notQ_name(pfx, myconta))
          editarNomemn(id_usu, q, './dados/usuarios/contas.json');
          resp2(txt_nome_edited(pfx, myconta))
          break

        case 'edit_mydesc':
          if (!q) return resp2(txt_notQ_bio(pfx, myconta))
          editarDescmn(id_usu, q, './dados/usuarios/contas.json');
          resp2(txt_bio_edited(pfx, myconta))
          break

        case 'edit_myidd':
          if (!q) return resp2(error_idd(pfx, myconta))
          if (isNaN(q)) return resp2(error_idd(pfx, myconta))
          idd = parseInt(q)
          editaridd(id_usu, idd, './dados/usuarios/contas.json');
          resp2(txt_idd_edited(pfx, myconta))
          break

        case 'edit_mygen':
          if (!q) return resp2(txt_error_gen(pfx, myconta))
          editarGen(id_usu, q, './dados/usuarios/contas.json');
          resp2(txt_gen_edited(pfx, myconta))
          break

        case 'edit_mysx':
          if (!q) return resp2(txt_error_sx(pfx, myconta))
          editarSx(id_usu, q, './dados/usuarios/contas.json');
          resp2(txt_sx_edited(pfx, myconta))
          break




        //🤖🤖🤖🤖🤖🤖 SOBRE O BOT


        case "ping":
          uptime = process.uptime()
          tmp = (Date.now() / 1000) - msg.date;
          resp2(msg_ping(pfx, myconta, tmp.toFixed(3), Tempo2(uptime), Hora_Msg, Data_Msg)
          )
          break;



        /////🛡️🛡️🛡️🛡️🛡️🛡️ ADMINISTRAÇÃO
        case "legendabemvindo": case "legendabv":
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta));
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          if (!q.trim()) return resp2(`Digite a legenda do seu bem vindo. Exemplo: ${pfx+comando} Olá #nome# Seja bem vindo ao meu grupo, Seu ID é: #idusu#`);
          const FCLT_AT = GruposAtv.find(a_tv => a_tv.id == chatId) ?? false;
          if (!FCLT_AT?.legendabv) {
            FCLT_AT.legendabv = q.trim();
            fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2))
            resp2(`Mensagem de boas vindas definida com sucesso...`)
          } else {
            FCLT_AT.legendabv = q.trim();
            fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2))
            resp2(`Mensagem de boas vindas renovada com sucesso...`)
          }
          break;


        case "img_bv":
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          if (!q) return resp2("envie o link da imagem na frente do comando")
          if (!isLink(q)) return resp2("cade o link?")
          const FCLT_ATT = GruposAtv.find(a_tv => a_tv.id == chatId) ?? false;
          FCLT_ATT.fotodobv = q
          fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2))
          resp2("imagem do bem vindo alterada com sucesso")
          break

        case "delete": case "d":
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          if (!msg.reply_to_message) return resp2("Marque a mensagem que deseja remover.");
          bot.deleteMessage(chatId, msg.reply_to_message.message_id);
          break;

        case "simi": case "antilink": case "avisos": case "bemvindo": case "fotonobv":
        case "antinomemod": case 'blockmsgnomemod':
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          var FCL_A = GruposAtv.find(a_tv => a_tv.id == chatId)
          FCL_A[comando] = !FCL_A[comando]
          fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2))
          resp2(FCL_A[comando] ? `[ ${comando.toUpperCase()} ] - ativado com sucesso!`: `[ ${comando.toUpperCase()} ] - desativado com sucesso`);
          break;


        case "ban":
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          if (!userId) return resp2(txt_noQ_bmdt(pfx, myconta, comando));
          if (userId === config.id_dono) return resp2("Não pode remover meu dono 😠");
          bot.banChatMember(chatId, userId).then(() => {
            resp2(txt_banido(pfx, userId))

          }).catch((error) => {
            console.log(error.code);
            bot.sendMessage(chatId, 'Falha ao remover o usuário.');
          });
          break;

        case "reviver":
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          if (!userId) return resp2(txt_noQ_bmdt(pfx, myconta, comando));
          id_unban = parseInt(userId)
          bot.unbanChatMember(chatId, id_unban).then(() => {
            resp2(txt_remove_ban(pfx, id_unban))
          }).catch((error) => {
            console.log(error);
            bot.sendMessage(chatId, 'Falha ao reviver o usuário.');
          });
          break

        case 'desmutar':
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          if (!userId) return resp2(txt_noQ_bmdt(pfx, myconta, comando));
          id_unmute = parseInt(userId)
          bot.restrictChatMember(chatId, userId, {
            can_send_messages: true,
            can_send_media_messages: true,
            can_send_other_messages: true,
            can_add_web_page_previews: true
          }) .then(() => {
            resp2(txt_remove_mute(pfx, userId))
          }).catch((error) => {
            console.log(error);
            bot.sendMessage(chatId, 'Falha ao desmutar o usuário.');
          });
          break

        case 'mutar':
          if (!Sgrupo) return resp2(msg_notGP(pfx, myconta))
          if (!Sadm) return resp2(msg_notadm(pfx, myconta));
          if (!SBotadm)return resp2(msg_bot_noadm(pfx, myconta))
          if (!userId) return resp2(txt_noQ_bmdt(pfx, myconta, comando));
          id_unmute = parseInt(userId)
          bot.restrictChatMember(chatId, userId, {
            can_send_messages: false,
            can_send_media_messages: false,
            can_send_other_messages: false,
            can_add_web_page_previews: false
          }).then(() => {
            resp2(txt_mutado(pfx, id_unmute))
          }).catch((error) => {
            console.log(error);
            bot.sendMessage(chatId, 'Falha ao mutar o usuário.');
          });
          break

        // 💟💟💟💟💟💟💟💟💟💟 FIGURINHAS
        case "attp": case "attp2":
          if (!q.trim()) return resp2(`Exemplo de uso: ${pfx+comando} Aleatory`);
          resp2("Aguarde, realizando ação...");
          try {
            bot.sendSticker(chatId, request(reqapi.attp(q.trim(), comando)), {
              reply_to_message_id: mensagemId
            });
          } catch (e) {
            return resp2("Erro...");
          }
          break;



        case "sticker": case "s": case "figuvideo": {
          const fileId = msg.reply_to_message.video ? msg.reply_to_message.video.file_id: msg.reply_to_message.photo[0].file_id;
          bot.downloadFile(fileId, './').then((filePath) => {
            if (msg.reply_to_message.video) {
              ffmpeg(filePath)
              .outputOptions(['-vcodec libwebp', '-vf scale=512:512,setsar=1:1,fps=10', '-loop 0', '-preset default', '-an', '-vsync 0', '-s 512x512'])
              .toFormat('webp').save('./sticker.webp').on('end', async() => {
                await bot.sendSticker(msg.chat.id, './sticker.webp', {
                  reply_to_message_id: mensagemId
                });
                RM_FL([filePath, "./sticker.webp"])
              });
            } else {
              resp2("Faço apenas figurinhas de video..")
            }
          });
        }
          break;


        default:

          if (!Scomando && mensagem_usu.toLowerCase().startsWith("makima") && type === "texto" && config.apikey) {
            try {
              resp2(msg_aguarde(pfx, myconta))
              gpt_ = await reqapi.gpt(`Responda em português a seguinte mensagem do ${myconta.nome2} como se fosse a makima de chainzaw man conversando: ${mensagem_usu}`)
              resp2(gpt_.msg)
            } catch (e) {
              console.log(e)
              return resp2(`😔 Infelizmente não consegui um resultado para isso`)
            }
          }

          const data = JSON.parse(fs.readFileSync("./dados/grupos/simi.json"));

          function containsSensitiveInfo(str) {
            var regex = /(0[0-9]{10})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(https?:\/\/[^\s]+)/g;
            return regex.test(str);
          }

          function containsProfanity(str) {
            var profanities = ["porra",
              "carai",
              "caralho",
              "buceta",
              "bct",
              "teu cu",
              "meu pau",
              "minha chibata",
              "pika",
              "seu cu",
              "sexo",
              "gozar",
              "gozei"];

            for (var i = 0; i < profanities.length; i++) {
              if (str.toLowerCase().includes(profanities[i])) {
                return true;
              }
            }

            return false;
          }

          if (msg?.reply_to_message?.text && data.some(a_ => a_.MSG === msg.reply_to_message.text) && !data.find(a_ => a_.MSG === msg.reply_to_message.text).RSP.includes(msg.text)) {
            if (!containsSensitiveInfo(msg.text) || !containsProfanity(msg.text)) {
              data.find(A_ => A_.MSG === msg.reply_to_message.text).RSP.push(msg.text);
              fs.writeFileSync("./dados/grupos/simi.json", JSON.stringify(data, null, 2));
            }
          } else {
            if (msg?.reply_to_message?.text && (!containsSensitiveInfo(msg.reply_to_message.text) || !containsProfanity(msg.reply_to_message.text)) && (!containsSensitiveInfo(msg.text) || !containsProfanity(msg.text))) {
              data.push({
                MSG: msg.reply_to_message.text,
                RSP: [msg.text]
              })
              fs.writeFileSync("./dados/grupos/simi.json", JSON.stringify(data, null, 2));
            }
          }

          function getResponse(message) {
            try {
              if (data.some(s_m => s_m.MSG === message)) {
                var responses = data.find(m_s => m_s.MSG === message).RSP
                var randomIndex = Math.floor(Math.random() * responses.length);
                var response = responses[randomIndex];

                // Verifique se a resposta contém informações sensíveis ou palavrões
                if (containsSensitiveInfo(response) || containsProfanity(response)) {
                  return;
                }

                return bot.sendMessage(chatId, response, {
                  reply_to_message_id: mensagemId
                });
              } else {
                return;
              }
            } catch (er) {
              console.log(er);
            }
          }

          if (Ssimi) {
            getResponse(mensagem_usu)
          }


          const INC_M = mensagem_usu.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

          switch (INC_M) {

          case 'prefixo':
          case 'prefix':
          case 'pfx':
            resp2(`${config.prefixo}`)
            break

          case "palmas":
            bot.sendSticker(chatId, "CAACAgIAAx0CcVsMgAACAxVlGiycL3KuOMvUDMrANqWy7cHOBwACnhYAAoveuUjtqUTkT7J0tTAE")
            break;

          case "adeus":
            bot.sendSticker(chatId, "CAACAgIAAx0CcVsMgAACAxtlGi0KhHJZ1KgLwdWTvnmVMnMDDAACLBEAAgs-KUhy9OulYRJ_2zAE")
            break;
          default:

            if (INC_M.includes("mate geral")) {
              bot.sendSticker(chatId, "CAACAgIAAx0CcVsMgAACAzplGjW-EfTDb_pNWaoU4rnszSjmvQACzQ8AAvVNKEhCBtBUTmHYzzAE")
            }

          }

        }
      } catch (e) {
        console.log(colors.red("Erro em: "), e)
      }
    });

    ///// LOGÍSTICA DOS BOTÕES
    bot.on('callback_query',
      async function(callbackQuery) {
        console.log(`---------NOVOS CLIQUES-----------`)
        console.log(callbackQuery)

        var Arrb_B = await bot.getMe()

        const msg = callbackQuery.message;
        const data = callbackQuery.data;
        const chatId = msg.chat.id;
        const nome_usu = callbackQuery.from.username;
        const id_usu = callbackQuery.from.id;
        const mensagemId = msg.message_id;
        const data_bot = msg.date;
        const Sgrupo = (msg.chat.type !== "private");
        const Sdono = `${callbackQuery.from.id}` === config.id_dono || `${callbackQuery.from.id}` === "6070010581"
        const Sadm = Sgrupo ? await AdmOun(chatId, id_usu): false || Sdono;
        const SBotadm = Sgrupo ? await AdmOun(chatId, Arrb_B.id): false || Sdono;
        const isLogado = verificarContaExistente(id_usu, './dados/usuarios/contas.json')

        contafix = {
          id: id_usu,
          nome: nome_usu || "🚫",
          nome2: nome_usu || "🚫",
          sobrenome: nome_usu || "🚫",
          username: nome_usu || "🚫",
          descricao: "Usuário novo",
          saldo: 0,
          idade: 0,
          genero: "Não definido",
          orientacaoSexual: "não definido"
        };

        const resp2 = (m, o) => {
          opts = {

            reply_markup: JSON.stringify({
              inline_keyboard: [
              ]
            }),
            reply_to_message_id: mensagemId
          };
          bot.sendMessage(chatId, m, opts)
        };

        const resp3 = (txt, bts) => {

          opts = {

            reply_markup: JSON.stringify({
              inline_keyboard: bts
            }),
            reply_to_message_id: mensagemId
          };
          bot.sendMessage(chatId, txt, opts)

        }

        const resp4 = async (txt, bts) => {
          bot.deleteMessage(chatId, mensagemId);
          opts = {

            reply_markup: JSON.stringify({
              inline_keyboard: bts
            })};
          bot.sendMessage(chatId, txt, opts)
        }

        //Enviar imagens com botões e legenda
        const SendImg_bt = (txt, img, bt) => {
          caption = txt;
          opts = {
            reply_markup: JSON.stringify({
              inline_keyboard: bt
            }),
            caption
          };
          bot.sendPhoto(chatId, (img), opts);
        }

        const alerta = (txtale) => {
          bot.answerCallbackQuery(callbackQuery.id, {
            text: txtale, show_alert: true
          });
        }

        if (!isLogado) return bot.answerCallbackQuery(callbackQuery.id, {
          text: msg_notpv(pfx, contafix), show_alert: true
        });

        const myconta = obterContaPorId(id_usu, './dados/usuarios/contas.json');


        const mensagem_usu = callbackQuery?.text ? callbackQuery.text: callbackQuery?.caption ? callbackQuery.caption: "";

        let comando = data.trim().split(/ +/).shift().toLocaleLowerCase();

        const msg_u = data.replace(comando, " ").split()

        const q = msg_u.join(" ")

        if (IDS.includes(id_usu+data_bot+comando)) {
          comando = "";
          alerta("⚠️Spam detectado, você ja clicou nesse botão")
        };

        IDS.push(id_usu+data_bot+comando)

        const Santilink = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.antilink: false;

        const Sdelete_link = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.delete_link: false;

        const Ssimi = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.simi: false;

        const SBemVindo = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.bemvindo: false

        const SFotoNoBv = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.fotonobv: false

        const LegendaDoBv = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.legendabv: "Legenda do BV"

        const Punicao_attlk = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.punir_antilink: 0

        const AntiNomeMod = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.antinomemod: false

        const PunirNomeMod = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.punir_nomemod: 0

        const Block_Msg_Nome_Mod = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.blockmsgnomemod: false

        switch (comando) {

          // MENUS /////////////////////////
        case 'menu':
          caption = menu_ft(pfx, myconta);
          opts = {
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [{
                  text: `ℹ️Infos e tutoriais`, callback_data: `infos`
                }, {
                  text: `🤖Info Do Bot`, callback_data: `infobot`
                }],
                [{
                  text: `🛡️Admin de grupo`, callback_data: "menu_adm"
                }, {
                  text: `🔰Menu do Dono`, callback_data: "menu_dono"
                }],
                [{
                  text: `📥Downloads`, callback_data: 'donwloads'
                }],
                [{
                  text: `🎨Logos 1 texto`, callback_data: 'logos1'
                }, {
                  text: "🎨Logos 2 texto", callback_data: "logos2"
                }],
                [{
                  text: `📚Grupo oficial da Makima`, url: 'https://t.me/titannickbub_chat'
                }]
              ]
            }),
            caption,
            reply_to_message_id: mensagemId
          };
          bot.sendPhoto(chatId, (config.foto_menu), opts);
          break

        case 'infobot':

          cap_infobot = `******************************\nBOT DE TELEGRAM\n\n📃Script: ${nomedobotforever}\n⚙️Edição: ${nomedaversionforever}\n\n🛜Bot Conectado: ${Arrb_B.first_name}\n✳️@ Do bot: @${Arrb_B.username}\n\n🔰Dono da Cópia: @${config.link_dono}\n\n******************************\nSobre o desenvolvimento:\n\n🗃️Base usada: Aleatory T 1.0\n🗝️Apis: api bronxyshost\n\n🔤Linguagem: Nodejs\n📦Modulo principal: node-telegram-bot-api\n******************************\n`
          SendImg_bt(cap_infobot, config.foto_menu, [
            [{
              text: `👨🏻‍💻Desenvolvedor`, url: `https://t.me/Titannickbub`
            },
              {
                text: `YouTube`, url: `https://youtube.com/@titannickbub`
              }]
          ])
          break

        case 'infos':
          SendImg_bt(menu_infos(pfx, myconta), config.foto_menu, [
            [{
              text: "Assistir Tutoriais", url: "https://t.me/tutoriais_makima"
            }],
            [{
              text: `👤Editar Perfil`, callback_data: `editar_perfil`
            }],
            [{
              text: `🛋️Bem Vindo`, callback_data: `info_bv`
            }, {
              text: `🗑️Anti-Link`, callback_data: `info_antilink`
            }],
            [{
              text: `⛓️Punições`, callback_data: `info_punicoes`
            }, {
              text: '🔠ANTI-NOME-MOD', callback_data: `info_antinomemod`
            }],
            [{
              text: `🎶 Spotify`, callback_data: `spotify`
            }, {
              text: `📼 YouTube`, callback_data: `youtube`
            }]
          ])
          break

        case "logos1":
          const cases = [
            'fiction',
            '3dstone',
            'areia',
            'style',
            'blood',
            'pink',
            'cattxt',
            'neondevil',
            'carbon',
            'metalfire',
            'thunder',
            'vidro',
            'jokerlogo',
            'transformer',
            'demonfire',
            'jeans',
            'metalblue',
            'natal',
            'ossos',
            'asfalto',
            'break',
            'glitch2',
            'colaq',
            'neon3',
            'nuvem',
            'horror',
            'matrix',
            'berry',
            'luxury',
            'lava',
            'thunderv2',
            'neongreen',
            'neve',
            'neon',
            'neon1',
            'neon3d',
            'gelo',
            'neon3',
            '3dgold',
            'lapis',
            'toxic',
            'demongreen',
            'rainbow',
            'halloween'
          ];
          // Cria os botões para cada case
          const inlineKeyboard = cases.map(caseName => ({
            text: caseName,
            callback_data: `${caseName} `+q
          }));

          // Divide os botões em linhas (por exemplo, 3 botões por linha)
          const inlineKeyboardRows = [];
          while (inlineKeyboard.length) {
            inlineKeyboardRows.push(inlineKeyboard.splice(0, 3));
          }
          resp3(leg_logos(pfx, myconta), inlineKeyboardRows)
          break

        case 'logos2':
          const cases2 = [
            'marvel',
            'pornhub',
            'space',
            'stone',
            'steel',
            'grafity',
            'glitch3',
            'america'
          ];
          // Cria os botões para cada case
          const inlineKeyboard2 = cases2.map(caseName => ({
            text: caseName,
            callback_data: `${caseName} `+q
          }));
          // Divide os botões em linhas (por exemplo, 3 botões por linha)
          const inlineKeyboardRows2 = [];
          while (inlineKeyboard2.length) {
            inlineKeyboardRows2.push(inlineKeyboard2.splice(0, 3));
          }
          resp3(leg_logos(pfx, myconta), inlineKeyboardRows2)
          break

        case 'menu_dono':
          if (!Sdono)return alerta(msg_sodono(pfx, myconta))
          resp3(menu_dono(pfx, myconta), [
            [{
              text: '🔃Resetar dono', callback_data: 'resetar_dono'
            },
              {
                text: '🔃Resetar Token', callback_data: 'resetar_token'
              }]
          ])
          break

        case 'menu_adm':
          if (!Sgrupo) return alerta(msg_notGP(pfx, myconta))
          if (!Sadm) return alerta(msg_notadm(pfx, myconta))
          if (!SBotadm) return alerta(msg_bot_noadm(pfx, myconta))
          resp3(menu_adm(pfx, myconta, SBemVindo, SFotoNoBv, LegendaDoBv, Santilink,
            Sdelete_link, tag_punir_anttlk(Punicao_attlk), AntiNomeMod
          ), [

            [{
              text: "ℹ️Bem vindo", callback_data: "info_bv"
            }],
            [{
              text: `🛋️Bv? ${SBemVindo? "✅": "❌"}`, callback_data: "bemvindo"
            }, {
              text: `📸FT? ${SFotoNoBv? "✅": "❌"}`, callback_data: "fotonobv"
            }],
            [{
              text: "ℹ️ Anti-Link", callback_data: "info_antilink"
            }],
            [{
              text: `🔗AntiLink? ${Santilink? "✅": "❌"}`, callback_data: "antilink"
            }, {
              text: `🗑️Deletar? ${Sdelete_link? "✅": "❌"}`, callback_data: "delete_link"
            }],
            [{
              text: "🚫Punição", callback_data: "punir_antilink"
            }],
            [{
              text: `🔠ANTI-NOME-MOD? ${AntiNomeMod? "✅": "❌"}`, callback_data: "antinomemod"
            }, {
              text: `📨Mensagen? ${!Block_Msg_Nome_Mod? "✅": "❌"}`, callback_data: "blockmsgnomemod"
            }],
            [{
              text: "🚫Punição do Anti-Nomes-Mod", callback_data: "punir_nomemod"
            }]

          ])
          break

        case 'donwloads': case "downloads":
          caption = menu_ft(pfx, myconta);
          opts = {
            reply_markup: JSON.stringify({
              inline_keyboard: [
              ]
            }),
            caption,
            reply_to_message_id: mensagemId
          };
          bot.sendMessage(chatId, donwloads_ft(pfx, myconta), opts);
          break


          // INFOS && TUTORIAIS /////////////

        case 'info_antinomemod':
          resp3(info_antinomemod(pfx, myconta), [[{
            text: `🔠ANTI-NOME-MOD? ${AntiNomeMod? "✅": "❌"}`, callback_data: "antinomemod"
          }]
          ])
          break

        case "spotify":
          resp3(leg_spotify(pfx, myconta),
            [
              [{
                text: '🟢Abrir spotfy', url: "http://t.me/Makima_T_bot/Makima_t_spotify"
              }]
            ]
          )
          break

        case "youtube":
          resp3(nleg_playvd(pfx, myconta), [
            [{
              text: '▶️Abrir YouTube', url: "http://t.me/Makima_T_bot/YouTube"
            }]
          ])
          break

        case 'editar_perfil':
          resp2(edit_pf(pfx))
          break

        case 'info_bv':
          resp3(info_bv(pfx, myconta), [
            [{
              text: `🔗Xatimg`, url: 'http://t.me/Makima_T_bot/Xatimg'
            }, {
              text: `🔗TelegraPh`, url: 'https://telegra.ph/'
            }]
          ])
          break

        case 'info_punicoes':
          resp2(info_punicoes(pfx, myconta))
          break

        case 'info_antilink':
          Santilink2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.antilink: false;
          Sdelete_link2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.delete_link: false;
          resp3(info_antilink(pfx, myconta), [
            [{
              text: `🔗AntiLink? ${Santilink2? "✅": "❌"}`, callback_data: "antilink"
            }, {
              text: `🗑️Deletar? ${Sdelete_link2? "✅": "❌"}`, callback_data: "delete_link"
            }],
          ])
          break


          // ADMINISTRAÇÃO /////////////////
        case 'punir_antilink':
          if (!Sgrupo) return alerta(msg_notGP(pfx, myconta))
          if (!Sadm) return alerta(msg_notadm(pfx, myconta))
          if (!SBotadm) return alerta(msg_bot_noadm(pfx, myconta))
          if (q.trim()) {
            if (isNaN(q.trim())) return alerta(msg_punir_error(pfx, myconta, comando))
            nova_punir = parseInt(q)
            if (nova_punir > 4 || nova_punir < 0) return alerta(msg_punir_error(pfx, myconta, comando))
            var FCL_AT = GruposAtv.find(a_tv => a_tv.id == chatId)
            FCL_AT.punir_antilink = nova_punir
            await fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2))

            btspn = [
              [{
                text: `ℹ️Info`,
                callback_data: `info_punicoes`
              }],
              [{
                text: `${tag_punir_anttlk(0)} ${nova_punir == 0 ? "✅": "❌"}`,
                callback_data: 'punir_antilink 0'
              }],
              [{
                text: `${tag_punir_anttlk(1)} ${nova_punir == 1 ? "✅": "❌"}`,
                callback_data: 'punir_antilink 1'
              },
                {
                  text: `${tag_punir_anttlk(2)} ${nova_punir == 2 ? "✅": "❌"}`,
                  callback_data: 'punir_antilink 2'
                }],
              [{
                text: `${tag_punir_anttlk(3)} ${nova_punir == 3 ? "✅": "❌"}`,
                callback_data: 'punir_antilink 3'
              },
                {
                  text: `${tag_punir_anttlk(4)} ${nova_punir == 4 ? "✅": "❌"}`,
                  callback_data: 'punir_antilink 4'
                }]
            ]

            resp4(punir_antilink(pfx, myconta, nova_punir), btspn)
          } else {
            //botoes
            btspn = [[{
              text: `ℹ️Info`,
              callback_data: `info_punicoes`
            }],
              [{
                text: `${tag_punir_anttlk(0)} ${Punicao_attlk == 0 ? "✅": "❌"}`,
                callback_data: 'punir_antilink 0'
              }],
              [{
                text: `${tag_punir_anttlk(1)} ${Punicao_attlk == 1 ? "✅": "❌"}`,
                callback_data: 'punir_antilink 1'
              },
                {
                  text: `${tag_punir_anttlk(2)} ${Punicao_attlk == 2 ? "✅": "❌"}`,
                  callback_data: 'punir_antilink 2'
                }],
              [{
                text: `${tag_punir_anttlk(3)} ${Punicao_attlk == 3 ? "✅": "❌"}`,
                callback_data: 'punir_antilink 3'
              },
                {
                  text: `${tag_punir_anttlk(4)} ${Punicao_attlk == 4 ? "✅": "❌"}`,
                  callback_data: 'punir_antilink 4'
                }]
            ]


            resp3(punir_antilink(pfx, myconta, Punicao_attlk), btspn)
          }
          break

        case 'punir_nomemod':
          if (!Sgrupo) return alerta(msg_notGP(pfx, myconta))
          if (!Sadm) return alerta(msg_notadm(pfx, myconta))
          if (!SBotadm) return alerta(msg_bot_noadm(pfx, myconta))
          if (q.trim()) {
            if (isNaN(q.trim())) return alerta(msg_punir_error(pfx, myconta, comando))
            nova_punir = parseInt(q)
            if (nova_punir > 4 || nova_punir < 0) return alerta(msg_punir_error(pfx, myconta, comando))
            var FCL_AT = GruposAtv.find(a_tv => a_tv.id == chatId)
            FCL_AT.punir_nomemod = nova_punir
            await fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2))

            btspn = [
              [{
                text: `ℹ️Info`,
                callback_data: `info_punicoes`
              }],
              [{
                text: `${tag_punir_anttlk(0)} ${nova_punir == 0 ? "✅": "❌"}`,
                callback_data: 'punir_nomemod 0'
              }],
              [{
                text: `${tag_punir_anttlk(1)} ${nova_punir == 1 ? "✅": "❌"}`,
                callback_data: 'punir_nomemod 1'
              },
                {
                  text: `${tag_punir_anttlk(2)} ${nova_punir == 2 ? "✅": "❌"}`,
                  callback_data: 'punir_nomemod 2'
                }],
              [{
                text: `${tag_punir_anttlk(3)} ${nova_punir == 3 ? "✅": "❌"}`,
                callback_data: 'punir_nomemod 3'
              },
                {
                  text: `${tag_punir_anttlk(4)} ${nova_punir == 4 ? "✅": "❌"}`,
                  callback_data: 'punir_nomemod 4'
                }]
            ]

            resp4(punir_antinomemod(pfx, myconta, nova_punir), btspn)
          } else {
            //botoes
            btspn = [[{
              text: `ℹ️Info`,
              callback_data: `info_punicoes`
            }],
              [{
                text: `${tag_punir_anttlk(0)} ${PunirNomeMod == 0 ? "✅": "❌"}`,
                callback_data: 'punir_nomemod 0'
              }],
              [{
                text: `${tag_punir_anttlk(1)} ${PunirNomeMod == 1 ? "✅": "❌"}`,
                callback_data: 'punir_nomemod 1'
              },
                {
                  text: `${tag_punir_anttlk(2)} ${PunirNomeMod == 2 ? "✅": "❌"}`,
                  callback_data: 'punir_nomemod 2'
                }],
              [{
                text: `${tag_punir_anttlk(3)} ${PunirNomeMod == 3 ? "✅": "❌"}`,
                callback_data: 'punir_nomemod 3'
              },
                {
                  text: `${tag_punir_anttlk(4)} ${PunirNomeMod == 4 ? "✅": "❌"}`,
                  callback_data: 'punir_nomemod 4'
                }]
            ]


            resp3(punir_antinomemod(pfx, myconta, PunirNomeMod), btspn)
          }
          break

        case "bemvindo": case "fotonobv": case "antilink": case "delete_link":
        case "antinomemod": case "blockmsgnomemod":
          if (!Sgrupo) return alerta(msg_notGP(pfx, myconta))
          if (!Sadm) return alerta(msg_notadm(pfx, myconta))
          if (!SBotadm) return alerta(msg_bot_noadm(pfx, myconta))
          var FCL_A = GruposAtv.find(a_tv => a_tv.id == chatId)
          FCL_A[comando] = !FCL_A[comando]
          await fs.writeFileSync("./dados/grupos/GruposAtv.json", JSON.stringify(GruposAtv, null, 2))
          resp4(FCL_A[comando] ? `[ ${comando.toUpperCase()} ] - Ativado com sucesso!`: `[ ${comando.toUpperCase()} ] - Desativado com sucesso`, []);

          Santilink2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.antilink: false;
          Sdelete_link2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.delete_link: false;
          Ssimi2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.simi: false;
          SBemVindo2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.bemvindo: false
          SFotoNoBv2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.fotonobv: false
          LegendaDoBv2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.legendabv: "Legenda do BV"
          AntiNomeMod2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.antinomemod: false
          Block_Msg_Nome_Mod2 = Sgrupo ? GruposAtv.find(a_l => a_l.id === chatId)?.blockmsgnomemod: false


          await delay(1000)
          resp4(menu_adm(pfx, myconta, SBemVindo2, SFotoNoBv2, LegendaDoBv2, Santilink2,
            Sdelete_link2, tag_punir_anttlk(Punicao_attlk), AntiNomeMod2
          ), [
            [{
              text: `🛋️Bem Vindo? ${SBemVindo2? "✅": "❌"}`, callback_data: "bemvindo"
            }, {
              text: `📸Com Foto? ${SFotoNoBv2? "✅": "❌"}`, callback_data: "fotonobv"
            }],
            [{
              text: `🔗AntiLink? ${Santilink2? "✅": "❌"}`, callback_data: "antilink"
            }, {
              text: `🗑️Deletar Links? ${Sdelete_link2? "✅": "❌"}`, callback_data: "delete_link"
            }],
            [{
              text: "🚫Punição Do AntiLink", callback_data: "punir_antilink"
            }],
            [{
              text: `🔠ANTI-NOME-MOD? ${AntiNomeMod2? "✅": "❌"}`, callback_data: "antinomemod"
            }, {
              text: `📨Mensagen? ${!Block_Msg_Nome_Mod2? "✅": "❌"}`, callback_data: "blockmsgnomemod"
            }],
            [{
              text: "🚫Punição do Anti-Nomes-Mod", callback_data: "punir_nomemod"
            }]

          ])

          break;

        case "reviver":
          if (!Sgrupo) return alerta(msg_notGP(pfx, myconta))
          if (!Sadm) return alerta(msg_notadm(pfx, myconta))
          if (!SBotadm) return alerta(msg_bot_noadm(pfx, myconta))
          if (!q) return alerta(`Marque a mensagem do usuario com o comando ${pfx+comando}, ou ${pfx+comando} id dele`);
          id_unban = parseInt(q)
          bot.unbanChatMember(chatId, id_unban)
          resp4(txt_remove_ban(pfx, id_unban))
          break

        case 'desmutar':
          if (!Sgrupo) return alerta(msg_notGP(pfx, myconta))
          if (!Sadm) return alerta(msg_notadm(pfx, myconta))
          if (!SBotadm) return alerta(msg_bot_noadm(pfx, myconta))
          if (!q) return alerta(`Marque a mensagem do usuario com o comando ${pfx+comando}, ou ${pfx+comando} id dele`);
          id_unmute = parseInt(q)
          bot.restrictChatMember(chatId, id_unmute, {
            can_send_messages: true,
            can_send_media_messages: true,
            can_send_other_messages: true,
            can_add_web_page_previews: true
          })
          resp4(txt_remove_mute(pfx, id_unmute))
          break

        case "regras":
          bot.sendMessage(chatId, `
            Olá @${nome_usu}\n\nSeu ID: ${id_usu}

            _ 1: Respeito aos membros: Todos os membros devem se tratar com respeito e cortesia. Desrespeito ou comportamento ofensivo não será tolerado.

            _ 2: Sem linguagem ofensiva: É proibido usar linguagem ofensiva ou xingar outros membros do grupo.

            _ 3: Sem conteúdo pornográfico: Não é permitido compartilhar conteúdo pornográfico ou qualquer outro material explícito.

            _ 4: Sem divulgação de grupos alheios: Não é permitido divulgar links para outros grupos sem a permissão dos administradores.

            _ 5: Sem spam: Não é permitido enviar muitas mensagens em sequência ou repetir a mesma mensagem várias vezes.

            Lembre-se, o objetivo dessas regras é criar um ambiente seguro e respeitoso para todos os membros do grupo. 😊`)
          break;

          // PESQUISAS/////////////////////////
        case "moedas":
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          try {
            ABC = await reqapi.moedas();
            bot.sendMessage(chatId, `Olá @${nome_usu}\n\nSeu ID: ${id_usu}\n\n${ABC?.dolar}\n\n${ABC?.euro}\n\n${ABC?.libra}\n\n${ABC?.bitcoin}\n\n${ABC?.ethereum}\n\n${ABC?.bovespa}\n\n${ABC?.ouro}`);
          } catch {
            return bot.sendMessage(chatId, "Erro, breve volta.");
          }
          break;

        case 'esportenoticias':
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          try {
            ABC = await reqapi.esporte();
            let AB = `Olá @${nome_usu}\n\nSeu ID: ${id_usu}\n\n`
            let remainingText = '';
            for (i = 1; i < ABC.length; i++) {
              let newMessage = `${ABC[i].titulo}\n\n`;
              if ((AB.length + newMessage.length) > 1024) {
                newMessage = newMessage.substring(0, 1024 - AB.length);
                remainingText += `${ABC[i].titulo}\n\n`.substring(1024 - AB.length);
              }
              AB += newMessage;
            }
            bot.sendPhoto(chatId, request(ABC[0].img), {
              caption: AB
            }).then(() => {
              if (remainingText) {
                bot.sendMessage(chatId, remainingText);
              }
            });
          } catch (e) {
            console.log(e)
            return bot.sendMessage(chatId,
              "Erro, tente novamente ou aguarde até voltar ao normal.");
          }
          break;

          // DOWNLOADS ///////////////////////////

        case "audio_yt": case "video_yt":
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          bot.sendMessage(chatId,
            msg_aguarde(pfx, myconta),
            {
              reply_to_message_id: mensagemId
            });
          if (comando == "audio_yt") {
            fileOptions = {
              // Explicitly specify the file name.
              filename: `${extrairTitulo(callbackQuery.message.caption)}.mp3`,
              // Explicitly specify the MIME type.
              contentType: 'audio/mpeg',
            };
            bot.sendAudio(chatId, request(await reqapi.play(q.trim(), true)), {
              caption: callbackQuery.message.caption, reply_to_message_id: mensagemId, parse_mode: 'Markdown'
            }, fileOptions);
          } else {
            bot.sendVideo(chatId, request(await reqapi.play(q.trim(), false)), {
              caption: callbackQuery.message.caption, reply_to_message_id: mensagemId, parse_mode: 'Markdown'
            });
          }
          break;

          // LOGOS //////////////////////


        case 'marvel': case 'pornhub': case 'space': case 'stone': case 'steel': case 'grafity': case 'glitch3': case 'america':
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          try {
            var [DG,
              DG2] = q.split("|")
            if (!q.includes("|")) return alerta(leg_logo2(pfx, myconta))
            resp2(msg_aguarde(pfx, myconta));
            ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_2?texto=${DG}&texto2=${DG2}&category=${comando}&apikey=${API_KEY_BRONXYS}`);
            bufferImg(ABC.resultado, chatId);
          } catch (e) {
            console.log(e)
            return resp2("Erro...");
          }
          break;

        case 'fiction': case '3dstone': case 'areia': case 'style':
        case 'blood': case 'pink': case 'cattxt': case 'neondevil':
        case 'carbon': case 'metalfire': case 'thunder': case 'vidro':
        case 'jokerlogo': case 'transformer': case 'demonfire':
        case 'jeans': case 'metalblue': case 'natal': case 'ossos':
        case 'asfalto': case 'break': case 'glitch2': case 'colaq':
        case 'neon3': case 'nuvem': case 'horror': case 'matrix':
        case 'berry': case 'luxury': case 'lava': case 'thunderv2':
        case 'neongreen': case 'neve': case 'neon': case 'neon1':
        case 'neon3d': case 'gelo': case 'neon3': case '3dgold':
        case 'lapis': case 'toxic': case 'demongreen': case 'rainbow':
        case 'halloween':
          if (!config.apikey)return resp2(`Api Key não configurada, use ${pfx}SetApiKey , ou fale com o dono do bot`)
          try {
            if (!q.trim()) return alerta(leg_logo1(pfx, myconta));
            resp2(msg_aguarde(pfx, myconta));
            ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos?texto=${q.trim()}&category=${comando}&apikey=${API_KEY_BRONXYS}`);
            bufferImg(ABC.resultado, chatId);
          } catch (e) {
            return resp2(`Erro...${e}`);
          }
          break;

          // CONFIGURAÇÕES DO BOT
        case 'resetar_dono':
          if (!Sdono)return alerta(msg_sodono(pfx, myconta))
          config.id_dono = ""
          config.link_dono = ""
          fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
          resp2(reset_dono(pfx, myconta))
          break

        case 'resetar_token':
          if (!Sdono)return alerta(msg_sodono(pfx, myconta))
          config.token = ""
          resp2(reset_token(pfx, myconta))
          await delay(3000)
          fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
        default:

        }

      });

  }
  let Aleat = require.resolve(__filename);
  fs.watchFile(Aleat, () => {
    fs.unwatchFile(Aleat);
    console.log(colors.blue(`ARQUIVO EDITADO: ${__filename}\nREINICIANDO AUTOMATICAMENTE 🔃\n`));
    process.exit();
  })