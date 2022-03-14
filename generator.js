//import seedrandom from "./SeedRandom"

// Imports
//let rng = new Math.seedrandom()
//console.log(rng())
// "countryName" : "3hkuvlg5o3", "townName": "fantasy-town-name", "lastName":"0kyvx6xeox"
const randomDictionary = {"firstName":"eodnamegenerator"};

async function generateNames() {
    for (const [key, value] of Object.entries(randomDictionary)) {
        let str = key + " = [";
        for (let i = 0; i < 500; i++) {
            let name = await getRandomName(key);
            str += "'" + name +  "',";
          }
        str += "]";
        console.log(str);
    };	
}

async function callApi(url) {
    
    let response = await fetch(url);
    let data = await response.text();
    return data;
}; 

async function getRandomName(type) {
    let url = "https://eastern-joyous-atrociraptor.glitch.me/api?generator=";
    url += randomDictionary[type] + "&list=output";
    let text = await callApi(url);
    return text;
   
}

//generateNames()

function markovChainGenerator(textArr) {
    const markovChain = {};
  for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i].toLowerCase().replace(/[\W_]/, "")
      if (!markovChain[word]) {
        markovChain[word] = []
        }
      if (textArr[i + 1]) {
        markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, ""));
  }
  }
  return markovChain
  }

  const firstName = ['Chaeryrr','Bertale','Kalest','Sahack','Skelaughos','Mylat','Goorrir','Cerib','Beannos','Yeiny'] 
// ,'Hohon','Joessorm','Qeti','Lorei','Ietuk','Neypon','Gewu','Nuikelm','Closh','Nafen','Hufe','Azuto','Azcer','Douldet','Rodathon','Delildal','Nafie','Burem','Jeendest','Vutaw','Voper','Iwgha','Rakogh','Reno','Bokam','Jeennusk','Guituk','Notu','Dan','Siaghild','Susan','Qauver','Lir','Crorm','Sorm','Tanou','Entald','Deraldet','Nyop','Nyenthell','Mieldaugh','Mozee','Nysaldord','Vet','Lootuk','Yyke','Ijufo','Peysat','Seressagh','Dare','Chaanor','Credia','Ufafo','Udel','Beelard','Deno','Woothack','Isugu','Pinir','Kimyrt','Ukwin','Tuiltach','Jutech','Udar','Verrak','Urys','Nalu','Sahitont','Mem','Snurie','Roudar','Ceetad','Tipo','Tolaront','Ghaaldirt','Wocha','Ijohy','Chau','Wage','Moushelm','Tolorak','Rayingal','Yeyla','Ibito','Vesey','Yistent','Jeph','Pikel','Qaistem','Geinys','Vorathash','Yhtia','Edel','Avor','Tinendym','Jymos','Dockath','Fesam','Afyti','Zeinnade','Snoya','Aikim','Cheengorr','Koler','Morengal','Nalich','Hitage','Oler','Veyen','Jeyrtit','Lim','Drim','Dyninaord','Honur','Ucrys','Keletash','Hines','Sanessok','Tiaangeld','Nysa','Cogod','Rilort','Dyningych','Touphet','Vyyam','Meepheld','Dynerilt','Jode','Keypough','Cheashald','Rakaleonn','Aleir','Radris','Dress','Rasinearr','Rhuki','Linn','Samdyn','Uryn','Qokill','Ekder','Nyissunt','Mir','Voemer','Lyeui','Ubuq','Brend','Hatoi','Wourrit','Sisa','Henal','Wuper','Bon','Seistat','Brofu','Skeli','Afol','Ekal','Honelmund','Iadan','Skelund','Ozep','Tigesh','Clock','Pole','Bucu','Delbur','Aylye','Cheemolt','Engit','Nultar','Rath','Tuphorm','Sahynt','Kusa','Siqu','Poitol','Cluge','Orus','Fito','Qopad','Wyyoo','Ceton','Loringit','Tiau','Nace','Seynenth','Pina','Rynuntel','Kanald','Gepust','Rasadynt','Gunt','Vourtelm','Iaren','Centh','Zatuk','Aughurn','Throsy','Tiaestolt','Jihin','Uskund','Dynay','Daypor','Winisat','Samorand','Zeld','Treve','Radia','Miemi','Foshaugh','Ienes','Meisam','Uisan','Whigou','Goerad','Peylter','Oehat','Houlor','Vis','Fina','Rakuntuch','Oyyro','Tuver','Lahyd','Ficheng','Rakoryrd','Soril','Keladeagh','Nestar','Rasird','Lorarop','Bifyl','Toitol','Coya','Racha','Kety','Jertunt','Rourrir','Dana','Rionaughugh','Sieshina','Wust','Poeker','Heyrest','Cechend','Nyui','Voriruld','Ceufo','Wan','Sulackyll','Sama','Zaykurn','Voradon','Neupald','Dap','Loruskoph','Vorsy','Yzskel','Dath','Alye','Mary','Haighild','Athusk','Pealtor','Osam','Woodan','Polechych','Kinageelt','Oother','Hesh','Threcie','Keellang','Ogha','Teyrtold','Hitof','Clard','Kilto','Gauchor','Cath','Tinengyph','Aihin','Theranal','Garroth','Moibaugh','Qulo','Paussem','Humos','Ibler','Ceylale','Peri','Teundiss','Kyll','Nowin','Rionasald','Tinteng','Fierdorm','Ziph','Lairten','Cheoi','Chryji','Kuku','Iskel','Pofa','Jeitol','Daysi','Kalroth','Naph','Polathonn','Zukij','Tonen','Aroth','Tasie','Nysi','Ukody','Mapald','Ceree','Polu','Qialdough','Chrimo','Uban','Suluntelt','Neheq','Nesachach','Ocafa','Jir','Tasock','Zhick','Tinisann','Rionost','Cerariss','Mupaf','Cieghust','Denusteth','Hinessent','Sanild','Gasty','Feihi','Nine','Ruirrend','Tiaawost','Nuitin','Baykal','Brep','Rayinauph','Contald','Laco','Stymi','Opray','Saulless','Aton','Riallos','Stroka','Rena','Weeltight','Rasae','Winemarr','Tiaissush','Raki','Phurd','Puitia','Therarind','Riasenth','Tehaph','Hiph','Tinineyp','Nolu','Veyge','Pagu','Parr','Ceymo','Wynisser','Qigh','Deltas','Beillough','Utut','Tadut','Turuck','Izad','Pock','Wynaldith','Tipiss','Palda','Zoiki','Lyeanar','Kines','Lasight','Lubay','Sony','Rysarick','Awis','Oder','Sibeld','Banadeend','Honardult','Kodik','Nuca','Yup','Whivou','Cyrod','Burra','Belgo','Kelentald','Oban','Auder','Dovam','Zimeld','Delild','Qauleld','Urug','Qaychum','Recugh','Dereldut','Garcer','Poili','Jaurrir','Kinqe','Nesuskess','Kimme','Nalackil','Byzo','Igagi','Qomyc','Beiray','Risadult','Zacoj','Aqir','Sera','Suika','Wyth','Seini','Eriz','Rako','Hatirem','Opyp','Draissib','Sahathund','Pererinn','Cybim','Bruteu','Tinoldych','Padyn','Yeshe','Zaegu','Suldu','Garustirt','Lussorm','Wyne','Sendom','Bano','Page','Lokui','Ylye','Yuindeng','Ujisi','Tanvor','Blin','Kaufo','Seror','Rysenthant','Radumas','Bald','Aveye','Serwa','Pidiz','Ooche','Lorormarr','Rilathel','Ruirtir','Sanundop','Tinineord','Cerlor','Ustight','Odom','Kaurdiss','Man','Yutur','Nalass','Zos','Zest','Sizu','Craugh','Vesim','Deryn','Umurn','Rakoe','Jeghard','Uhat','Murac','Jorm']
let chain =  markovChainGenerator(firstName);
console.log(chain);