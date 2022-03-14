//import seedrandom from "../SeedRandom"

// Imports
//let rng = seedrandom()
// Properties
// Relationship score to be considered allied
const AlliedScore = 50
// Relationship score to be considered an enemy
const EnemyScore = -25


// Arrays used for various functionality of generating objects randomly
// Points to the urls needed to access generators
const randomDictionary : {[key : string] : string} = {"countryName" : "3hkuvlg5o3", "townName": "fantasy-town-name", "lastName":"0kyvx6xeox", "firstName":"eodnamegenerator"}
const governmentTypes : Array<string> = ["Thearchy", "Matriarchy", "Kritarchy", "Monarchy", "Democracy", "Patriarchy", "Meritocracy", "Theocracy", "Plutocracy", "Juntocracy", "Dictatorship", "Hendecarchy", "Anocracy"];
const truefalseArray : Array<boolean> = [true, false];
const genderArray : Array<string> = ['Male', 'Female'];
const countryName : Array<string> = ['Gwint','Dalva','Elwa','Lency','Givlich','Uandras','Murithi','Parissa','Illian','Modessa','Rassamm','Satna','Nemphre','Dagan','Thenol','Agaros','Davos','Laudine','Pteryces','Benuria','Treager','Biago','Drinar','Celia',"Q'orianka",'Perestan','Tobit','Fharl','Mhaorathil','Grabthroat','Daljinder','Vasilek','Selmyra','Rora','Corlandrion','Iliphel','Mirielle','Orgnir','Koraz','Kolkis','Xult','Farshad','Reissa','Nithanalor','Chiara','Loralla','Altier','Silnara','Zindelo','Jumanah','Kerzit','Hoswig','Drexel','Terenia','Phandorl','Phalaena','Petridalla','Jurrolos','Shanton','Galeann','Yagna','Danae','Zarik','Kren','Sistoni','Karis','Nurul','Sandalphon','Surdulica','Yrkoon','Karnitha','Loaun','Arolme','Olamun','Epim','Elangonel','Utaro','Lomela','Fulvia','Evalla','Delosar','Imrian','Melmoth','Zylphan','Nenjassik','Olwyn','Odiare','Solana','Melanthus','Tershalin','Wace','Porris','Crommach','Werrenir','Lofton','Zophas','Faedowin','Nefaratus','Uraloria','Alexius','Belaquo','Kaden','Nithian','Holloway','Fanette','Taetra','Shia','Elondrus','Haider','Dilmun','Mestil','Elmara','Agarth','Muhar','Giran','Ehlissa','Orlpar','Erene','Deidamia','Carados','Thandra','Raum','Phova','Jhirys','Ozella','Amalina','Mira','Karlirah','Xolondra','Kester','Golya','Quiana','Catterick','Jophiel','Xithin','Phaere','Sethor','Murdoc','Rao','Tethema','Haktla','Alonth','Tursla','Borich','Gamia','Nyrria','Micon','Imvanie','Thorash','Kennewick','Jereni','Caradas','Hashtur','Tamus','Givos','Vohalath','Norwena','Onesimos','Yarthin','Kesta','Nerith','Barlow','Xogah','Bronwen','Thonolan','Ashdown','Gorken','Chanista','Lakesh','Jeirick','Certes','Daltan','Veronis','Harlise','Songtorn','Morsallus','Musenda','Temphyr','Aleria','Eandroth','Kova','Selvil','Washio','Solea','Gweis','Peleus','Jelita','Vianne','Stebic','Guarionex','Zagros','Fennicia','Kaddok','Yoshara','Qipley','Fadilah','Kazoan','Drelaseth','Edarion','Delian','Grabthroat','Melando','Panagaris','Ulcrun','Lissaph','Melosha','Murkle','Faelon','Floradel','Merranyth','Eliomar','Silvius','Kjell','Tarathi','Mekalah','Dagmar','Lazaemon','Dynnwel','Velodia','Arkhosia','Alasta','Eldana','Imrunath','Philos','Shaster','Tholqra','Rayma','Ungris','Zaltec','Demtra','Ganek','Prydwen','Hamonah','Midir','Estirdalin','Marosanna','Dunbar','Vitigar','Olvori','Cynesige','Mira','Klynkrith','Melmoth','Ocallian','Selni','Athchos','Orazond','Arathor','Lembree','Sova','Shidara','Enmeshe','Narishna','Kereen','Locrinia','Cadwaller','Adarok','Zulkin','Galenun','Meldanen','Nari','Focar','Plemena','Seran','Marallina','Fostengar','Valnedra','Devadatta','Silvara','Maynor','Mimura','Gulec','Eldamar','Lya','Medhavi','Rhadamanthus','Ozro','Mokagkt','Viktal','Sivan','Ulda','Githan','Zandir','Padrig','Santosh','Indanath','Omalen','Jensin','Erlen','Imourad','Janwin','Raknor','Virago','Malena','Shiroda','Kiplo','Thalantyr','Salus','Meserach','Darif','Yavilana','Findocore','Randerford','Laitannen','Mayela','Yvain','Gaut','Morven','Jhanki','Kevaara','Genthore','Belen','Earthbearer','Genora','Melcer','Siljan','Thyris','Mantinea','Shoon','Minaret','Owaenvan','Siobhan','Dorna','Fadilah','Imare','Proctor','Anglean','Gumesindo','Delphine','Elazar','Hillel','Gemmala','Hiatea','Pressford','Raething','Acknar','Zutho','Jutoris','Emmech','Belirias','Valisteroi','Olamun','Hiatea','Munar','Bloodsworn','Anolda','Lorelle','Alemandra','Antal','Jerenesa','Amara','Arvel','Nazeen','Yaqob','Meir','Sethor','Akilah','Tarita','Quatriea','Thenemon','Travell','Cerigo','Llyrbele','Evaine','Firisara','Varci','Malarak','Vessa','Renwick','Banwell','Daelric','Grostliam','Sumpko','Thouria','Worch','Renzia','Kaveri','Slingsby','Oloizia','Ralien','Quicel','Tolard','Lischard','Kulenov','Drasus','Ibrech','Jhessail','Khemed','Arvel','Merian','Esadoa','Tual','Imayn','Mondro','Muhil','Sessibi','Bynarr','Girleen','Jagannath','Krazos','Janos','Caladan','Kaharine','Hildron','Ruven','Bakutis','Sungaea','Gorstalia','Quinnol','Ozangere','Oberon','Faedowin','Venextos','Janiel','Gokulnath','Rivenarra','Leona','Rufo','Losadunai','Melcer','Zerdali','Jharkor','Eormen','Omel','Raesdic','Kene','Flydian','Benelor','Ralna','Dasan','Jhomar','Yursil','Andalen','Malloi','Ruulam','Belgard','Endelia','Emathia','Herben','Astragalus','Lavarender','Ealfhelm','Ishkur','Matrim','Vunoon','Steelshadow','Pari','Lugo','Saigas','Dessetra','Kaushal','Faelon','Orlanthia','Fredegar','Rhab','Vashay','Orbakh','Ravienne','Aloraea','Getulio','Darota','Wampari','Lohar','Drelaseth','Maenala','Morasha','Narbon','Riza','Tarnesh','Delagoth','Rasp','Serria','Haduma','Baladi','Ketta','Artelas','Kesia','Isztea','Madsen','Iluska','Delio','Gamandril','Lantana','Kulmoris','Lentheus','Feorus','Deikov','Delamico','Mira','Nothnarg','Unnira','Gilvan','Tholie','Gnaceus','Dekovan','Chadra','Bodari','Kuswanto','Calabaz','Azden']
const townName : Array<string> = ['Duskmark','Hollowwick','Earthmore','Queens Burn','Deepgarden','Hawkwharf','Northvale','Starkshore','Timberveil','Silverwall','Dogspear','Dryshade','Sleetford','Elder Bourne','South Den','Basinpass','Fall View','Dryadhill','Shadowguard','Springmount','Slyharbor','Bridgemoor','Castleoak','Shadowhaven','Smooth Ness','Dewstone','Evercrest','Templestar','Rose Town','Brineshore','Moat Vault','Dryrun','Feycall','Direshore','Greyspell','Mudhold','Starguard','Woodmount','Kil Mire','Stoney Vault','Mythsquare','Oldrest','Quickmouth','Frostport','Chill Tide','Pureleap','Rimestall','Highgrasp','Basinstall','Timberfinger','Dusk Scar','Basinwich','Smallwharf','Stonelight','Pondwind','Dread Helm','Angelham','Dreadkeep','Barefell','Mutesummit','Houndsong','Eagleheart','Clawfrost','Grey Bourne','Boarchurch','Blackbarrow','Southmouth','Goldensong','Ghost Shield','Slyspell','Feysquare','Earthrun','New Mere','Smallbarrow','Amber Light','Bleakveil','Pureharbor','Everfell','Nightward','Barestorm','Kil Wich','Shoreforest','Direhill','Windspear','Temple Star','Bittermere','Brittlestar','Starport','Lordcrest','Crow Leap','Knighttemple','Hawkshade','Smallgrasp','Pine Pass','Scorchcreek','Laketemple','Storm Shore','Goblinbarrow','Blackdale','Hawkhelm','Mudpoint','Pearltower','Edgeshell','Stagtemple','Flatfort','Goldenforest','Southfair','Stillbreach','Midforest','East Light','Wolfpass','Brimglen','Ever Ham','Oldpost','Mill Chill','Runestar','Blackpost','Dewsummit','Earthend','Goblinmark','Newsister','Wellvale','Shroudmount','Shimmerheart','Rosemark','Edgemoor','Dryshore','Wyrm Temple','Brittle Hall','Southshield','Knightspire','Dewleap','Lostrock','Witchford','Swampcreek','Roseham','Dragonbleach','Mythmount','Shadowward','Dirtshell','Gloomshear','Brinewood','Springforest','Edge Town','Tallsummit','Goblinhelm','Quickmire','Moat Post','Swampkeep','Crag Helm','Sun Creek','Bell Breach','Old Tooth','Moonfall','Shadowtower','Wolfkeep','Honeypost','Scorchguard','Mudbleach','Goblinchill','Priestsquare','Bronzereach','North Temple','Cold Crest','Saltford','Elderport','Templeshire','Greenrest','Starhaunt','Wyvernmire','Smoothpass','Eversummit','Grimewich','Quickmond','Tide Bay','Elder Haunt','Summer Call','Bellspire','Tradespire','Oldmoat','Beast Song','Chillrun','Far Creek','Smallham','Emberrun','Ice Mark','Madchurch','Mutegrove','Sleekgrove','Elder Frost','Smoothvale','Ebonleap','Suncall','Quickoak','Madglen','Purepost','Shimmershire','Silkend','Flatveil','Treepoint','Iceleap','Crystal Fell','Gloom Fort','Houndwallow','Barebreak','Bitterhaven','Wyvern Tooth','Dryadwharf','Houndcliff','Dawnend','Swampwind','Quickburn','Monkfair','Kingsfrost','Mad Shire','Ramwatch','Dogmount','Dawnward','Mudguard','Eaglefork','Firemoor','Cragshade','Drywall','Sunmouth','Flathaunt','Lord Bourne','Bearoak','Timberhold','Gloomgrasp','Houndhill','Whitemoat','Wolfguard','Swamplight','Grimelight','Fairmount','Northguard','Smoothwich','Lastgate','Twovault','Mudknife','Brimmere','Redcall','Wildebreach','Shroudness','Coppersong','Stonecastle','Shorewallow','Windfork','Dreadward','Fallow Mark','Ashfrost','Tower Watch','Dirtcall','Ashguard','Gloomcliff','Knightwind','Shroudfinger','Dirtborn','Priestmire','Stillfinger','Grimescar','Moatmere','Lorddale','Edgebay','Lake Church','Witchport','Raven Shell','Bellstall','Pure Scar','Honeyhall','Steeptooth','Smooth Mouth','Fallmond','Tree Fell','Iron Glen','Drybreach','Stoney Mire','Eaglefell','Spellcairne','Brittlefort','Brinewatch','Rime Church','Duskcross','Ghostgard','Sleetvale','Wargarden','Bridgeknife','Drymoor','Blackwick','Bluefort','Springmount','Ravencrest','Bridgehaven','Pearl Mire','Hound Point','Twoforest','Gullstone','Bittermire','Widow Forest','Kingstower','Kil Wich','Shroudmark','Laststorm','Night Hal','Tidecreek','Bellmark','Grimefair','Eagle Stall','Shadowshield','Fallowvault','Ice Castle','Fearchurch','Riverwater','Castlestall','Star Fork','Shoregrasp','Craghill','Evershear','Iceflow','Tidepoint','Bearhall','Bearford','Two Castle','Shadeforest','Coldfair','Blackstall','Southwallow','Lordsummit','Moonham','Highmoor','Fall Grave','Templesister','Copper Bleach','Twoflow','Widow Wick','Skyshire','Smallhall','Pineshield','Greyvault','Warveil','Lastcastle','Boar Gate','Priestgrasp','Angelmouth','Deadrest','Summerhall','Brimfork','Curserest','Firegrasp','Knightcrest','Eaglestall','Rivervale','Shimmerbourne','Midkeep','Brimharbor','Chillham','Lostgrasp','Sly Moat','Whiteguard','Newmoor','Lake Burn','Boarbarrow','Rime Oak','Brimcliff','Pondharbor','Fordbreak','Ironvale','Claw Tower','Bellgrasp','Lost Mount','Wyrmhold','Slyveil','Edgefair','Brinereach','Ashcastle','Ironpass','Giant Oak','Templesister','Deepsister','Eagle Flow','Fairfrost','Shimmerwharf','Deer Mere','Shadowrun','Sleekbarrow','Cursesister','Flatreach','Quickgrasp','Stagbreak','Godssister','Sleet Keep','Lakeport','Pinewatch','Dead Tide','Giantbourne','Bell Gard','Tallmark','Icedale','Lord Hearth','Roguedale','Giantstall','Starshore','Fallowfork','God Hold','Beastgrave','Bearpass','Godsend','Wildgrove','Brim Fall','Greenbreach','Southvault','Highcastle','Swampburn','Witchgrave','Wolfwind','Quickshear','Mythness','Woodflow','Angel View','Wildeview','Dirtscar','Riverguard','Gloomtooth','Warshield','Shadowstar','Temple Gate','Stoneychurch','Silkwick','Silentrock','Bitter Rest','Pearlwater','Blaze Hearth','Sun Glen','Houndtemple','Staggrove','Warcross','Shroudstone','Honeyrock','Witchsong','Summervault','Goblinflow','Wolf Wind','Farknife','Ravenroost','Roguewick','Ghostshell','Silentharbor','Rosecastle','Towerwharf','Copper Mount','Moon View','Knightsquare','Summer Ford','Blueshade','Dawnhall','Hollowspear','Treeleap','Curse Wood','Ghostsong','Brittleflow','Blackmoat','Summerwind','Stormwharf','Flatfinger','Crowmore','Edgegarden','Wildehaunt','Chillcross','Small Bleach','Black Hal','Stoneyhal','Clawriver','Wildroost','Blaze Helm','Hawk Ward','Godpoint','Fordtide','Mudward','Ram Grove','Moatcreek','Moat Born','Amberfork','Starbarrow','Silentwater','Copper Point','Irontide','Edgetooth','Moat Shire','Ashrock','Goldspire','Moatfinger','Pondshear','Angelwich','Wildewallow','Ironchurch','Sky Den','Firewall','Bleakrest','Newspire','Farshore',]
const lastName : Array<string> = ['Richmond','Cason','Hale','Duff','Strain','Mays','Yates','Kaye','Flynn','Cobb','Smith','Pham','Call','Friend','Travis','Molina','Free','Cady','Morgan','Kelly','Strain','Zachary','Friend','Nash','Doyle','Roderick','Warren','Goodwin','Locke','Bailey','Bates','Collins','Bricker','Greene','Ward','Molina','Small','Peters','Isaac','Pope','Cooney','Knapp','Wilson','East','Arnold','Reed','Krueger','Nash','Hawkins','Settle','Porter','Nunez','Knight','Mayo','Bunting','Weber','Grey','Reid','Perry','Singh','Knight','Keener','Larson','Berry','Owens','Hill','Blankenship','Prince','Manning','Saxton','Swan','Eaton','Locke','Petersen','Branch','Vargas','Still','Arnold','Tan','Little','Paulson','Krueger','Logan','Mcgee','Mayo','Forbes','Sparks','Harper','Keener','Carr','Franklin','Fitzgerald','Lynn','Ramirez','Wiseman','Larsen','Navarro','Flowers','Clark','Smith','Friend','Small','Bess','Tan','Wade','Thomas','Valentine','Brown','Logan','Palmer','Cooney','Moe','Moss','Willis','Fitzpatrick','Molina','Weber','Warren','Call','Harper','Mace','Blankenship','Sellers','Church','Hill','Bills','Oliver','Goble','Warren','Moss','Hawkins','Smith','Wallis','Manning','Curtin','Moon','Fowler','Valentine','Duncan','Skinner','Larsen','Petersen','Beard','Porter','Beverly','Hodge','Bricker','Vail','Ruiz','Riley','Porter','Williams','Flores','Strain','Acosta','Manning','Vargas','Larson','Roller','Lindsay','Flynn','Prince','Sims','Walsh','Palmer','Willis','Root','Duke','Brock','Starling','Mendoza','Peck','Nall','Prince','Day','Fish','Beard','Hobbs','Christensen','Joy','Roller','Bills','Smallwood','Travis','Sloan','James','Dover','Vargas','Molina','Evans','Littleton','Lim','Harper','Skinner','Robins','Lim','Rhodes','Green','Levy','Sander','Coble','Green','Cooney','Ward','Strain','Hale','Swan','Mcbride','Ruby','Kennedy','Simms','Valentine','Tan','O’brien','Hair','Hook','Johnson','Moss','Bess','Ferguson','Petersen','Snider','Riley','Loving','Baker','Greene','White','Zachary','Zachary','Flores','Simpson','Mcbride','Prince','Levy','Reed','Cox','Church','Cummings','Morgan','Tom','Rhodes','Savage','Lyons','Robins','Cross','Archer','Ferris','Watt','Paulson','Tucker','Hill','Ruth','Foy','Saxton','Paulsen','Duke','Bean','Willis','Kirby','Rodriguez','Stack','Prince','Morgan','Mccormick','Foy','Orr','Gross','Grey','Reed','Sampson','Green','Hawkins','Porter','Wise','Hendrix','Simpson','Badger','Hernandez','Kemp','Hale','Goble','Goodwin','Graham','Mendoza','Fisher','Ferguson','Friend','Oliver','Sierra','Archer','Walsh','Lewis','Orr','West','Wolf','Petersen','Goodwin','Banks','Ball','Keener','Flowers','Skinner','Beverly','Moon','Krueger','Loving','Reid','Sloan','Archer','Watt','Baker','Hogg','Kirby','Free','Cooney','Petersen','Hendrix','Rodriguez','Petersen','Manning','Hodge','Qualls','Heath','Dover','Krueger','Flores','Baker','Combs','Christensen','Maldonado','White','Reid','Duff','Graham','Bauer','Forbes','Duffy','Young','Pearce','Bates','Hendrix','Collins','Harper','Mccoy','Cox','Mcbride','Branch','Fitzpatrick','Travis','Sherman','Louis','Perry','Crane','Badger','Glick','Moe','Wyatt','Washington','O’brien','Foy','Nall','Vega','Guthrie','Foy','Littleton','Davidson','Fitzpatrick','Thomas','Pierce','Garrison','Goble','Manning','Grabowski','Lindsay','Holt','Espinoza','Mccoy','Tucker','Moss','Wallis','Savage','Schmitt','Mcbride','Rodriguez','Nash','Silva','Peacock','Jones','Christensen','Smallwood','Roberts','Sierra','Mosely','Nguyen','Thomas','Couch','Flores','Baker','Still','Archer','Hernandez','English','Bills','Fitzpatrick','Christensen','Curtin','Loy','Schmitt','Stack','Thatcher','Duff','Reed','Mccormick','Davis','Sims','Louis','Logan','Duncan','Hernandez','Cross','Pierce','James','Richmond','Perez','Vines','Fowler','Anderson','Kirby','Lindsay','Geyer','Pierce','Greene','Smith','Head','Law','Heath','Poole','Joyner','Sharp','Healey','Anderson','Badger','Robins','Forbes','Cousins','Still','Sander','Noll','Pond','Joyner','Lyons','Church','Porter','Hamm','Tucker','Mays','Calhoun','Lim','Baker','Lewis','Graham','Moses','Sampson','Loy','Starling','Bates','Lyons','Collins','Ramirez','Sampson','Cox','Colson','Reno','Woody','Savage','Graham','Christensen','Bean','Ball','Bills','Fitzpatrick','Paulsen','Simpson','Hale','Holt','Starling','Porter','Mcgee','Ruth','Gill','Kaye','Doyle','Wiseman','Smallwood','Mccoy','Wiseman','Page','Hodge','Garrison','Noll']
const firstName : Array<string> = ['Chaeryrr','Bertale','Kalest','Sahack','Skelaughos','Mylat','Goorrir','Cerib','Beannos','Yeiny','Hohon','Joessorm','Qeti','Lorei','Ietuk','Neypon','Gewu','Nuikelm','Closh','Nafen','Hufe','Azuto','Azcer','Douldet','Rodathon','Delildal','Nafie','Burem','Jeendest','Vutaw','Voper','Iwgha','Rakogh','Reno','Bokam','Jeennusk','Guituk','Notu','Dan','Siaghild','Susan','Qauver','Lir','Crorm','Sorm','Tanou','Entald','Deraldet','Nyop','Nyenthell','Mieldaugh','Mozee','Nysaldord','Vet','Lootuk','Yyke','Ijufo','Peysat','Seressagh','Dare','Chaanor','Credia','Ufafo','Udel','Beelard','Deno','Woothack','Isugu','Pinir','Kimyrt','Ukwin','Tuiltach','Jutech','Udar','Verrak','Urys','Nalu','Sahitont','Mem','Snurie','Roudar','Ceetad','Tipo','Tolaront','Ghaaldirt','Wocha','Ijohy','Chau','Wage','Moushelm','Tolorak','Rayingal','Yeyla','Ibito','Vesey','Yistent','Jeph','Pikel','Qaistem','Geinys','Vorathash','Yhtia','Edel','Avor','Tinendym','Jymos','Dockath','Fesam','Afyti','Zeinnade','Snoya','Aikim','Cheengorr','Koler','Morengal','Nalich','Hitage','Oler','Veyen','Jeyrtit','Lim','Drim','Dyninaord','Honur','Ucrys','Keletash','Hines','Sanessok','Tiaangeld','Nysa','Cogod','Rilort','Dyningych','Touphet','Vyyam','Meepheld','Dynerilt','Jode','Keypough','Cheashald','Rakaleonn','Aleir','Radris','Dress','Rasinearr','Rhuki','Linn','Samdyn','Uryn','Qokill','Ekder','Nyissunt','Mir','Voemer','Lyeui','Ubuq','Brend','Hatoi','Wourrit','Sisa','Henal','Wuper','Bon','Seistat','Brofu','Skeli','Afol','Ekal','Honelmund','Iadan','Skelund','Ozep','Tigesh','Clock','Pole','Bucu','Delbur','Aylye','Cheemolt','Engit','Nultar','Rath','Tuphorm','Sahynt','Kusa','Siqu','Poitol','Cluge','Orus','Fito','Qopad','Wyyoo','Ceton','Loringit','Tiau','Nace','Seynenth','Pina','Rynuntel','Kanald','Gepust','Rasadynt','Gunt','Vourtelm','Iaren','Centh','Zatuk','Aughurn','Throsy','Tiaestolt','Jihin','Uskund','Dynay','Daypor','Winisat','Samorand','Zeld','Treve','Radia','Miemi','Foshaugh','Ienes','Meisam','Uisan','Whigou','Goerad','Peylter','Oehat','Houlor','Vis','Fina','Rakuntuch','Oyyro','Tuver','Lahyd','Ficheng','Rakoryrd','Soril','Keladeagh','Nestar','Rasird','Lorarop','Bifyl','Toitol','Coya','Racha','Kety','Jertunt','Rourrir','Dana','Rionaughugh','Sieshina','Wust','Poeker','Heyrest','Cechend','Nyui','Voriruld','Ceufo','Wan','Sulackyll','Sama','Zaykurn','Voradon','Neupald','Dap','Loruskoph','Vorsy','Yzskel','Dath','Alye','Mary','Haighild','Athusk','Pealtor','Osam','Woodan','Polechych','Kinageelt','Oother','Hesh','Threcie','Keellang','Ogha','Teyrtold','Hitof','Clard','Kilto','Gauchor','Cath','Tinengyph','Aihin','Theranal','Garroth','Moibaugh','Qulo','Paussem','Humos','Ibler','Ceylale','Peri','Teundiss','Kyll','Nowin','Rionasald','Tinteng','Fierdorm','Ziph','Lairten','Cheoi','Chryji','Kuku','Iskel','Pofa','Jeitol','Daysi','Kalroth','Naph','Polathonn','Zukij','Tonen','Aroth','Tasie','Nysi','Ukody','Mapald','Ceree','Polu','Qialdough','Chrimo','Uban','Suluntelt','Neheq','Nesachach','Ocafa','Jir','Tasock','Zhick','Tinisann','Rionost','Cerariss','Mupaf','Cieghust','Denusteth','Hinessent','Sanild','Gasty','Feihi','Nine','Ruirrend','Tiaawost','Nuitin','Baykal','Brep','Rayinauph','Contald','Laco','Stymi','Opray','Saulless','Aton','Riallos','Stroka','Rena','Weeltight','Rasae','Winemarr','Tiaissush','Raki','Phurd','Puitia','Therarind','Riasenth','Tehaph','Hiph','Tinineyp','Nolu','Veyge','Pagu','Parr','Ceymo','Wynisser','Qigh','Deltas','Beillough','Utut','Tadut','Turuck','Izad','Pock','Wynaldith','Tipiss','Palda','Zoiki','Lyeanar','Kines','Lasight','Lubay','Sony','Rysarick','Awis','Oder','Sibeld','Banadeend','Honardult','Kodik','Nuca','Yup','Whivou','Cyrod','Burra','Belgo','Kelentald','Oban','Auder','Dovam','Zimeld','Delild','Qauleld','Urug','Qaychum','Recugh','Dereldut','Garcer','Poili','Jaurrir','Kinqe','Nesuskess','Kimme','Nalackil','Byzo','Igagi','Qomyc','Beiray','Risadult','Zacoj','Aqir','Sera','Suika','Wyth','Seini','Eriz','Rako','Hatirem','Opyp','Draissib','Sahathund','Pererinn','Cybim','Bruteu','Tinoldych','Padyn','Yeshe','Zaegu','Suldu','Garustirt','Lussorm','Wyne','Sendom','Bano','Page','Lokui','Ylye','Yuindeng','Ujisi','Tanvor','Blin','Kaufo','Seror','Rysenthant','Radumas','Bald','Aveye','Serwa','Pidiz','Ooche','Lorormarr','Rilathel','Ruirtir','Sanundop','Tinineord','Cerlor','Ustight','Odom','Kaurdiss','Man','Yutur','Nalass','Zos','Zest','Sizu','Craugh','Vesim','Deryn','Umurn','Rakoe','Jeghard','Uhat','Murac','Jorm']



// Get random values functions
function ra(array : Array<any>) : any {
    return array[Math.floor(Math.random() * array.length)];
};

function r(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min)) + min;
};

// Returns a float (rounded to specified decimal place)
function rf(min : number, max : number, numberOfDecimal : number = 2 ) : number {
    return Math.floor(Math.random() * (max - min - 1)) + min + Number(Math.random().toFixed(numberOfDecimal));
};

// Variables for storing counts of objects (used to assign IDs)
let governementCount : number = 0;
let policyCount : number = 0;
let countryCount : number = 0;
let locationCount : number = 0;
let townCount : number = 0;
let biomeCount : number = 0;
let raceCount : number = 0;
let raceinteractionCount : number = 0;
let biomepreferenceCount : number = 0;
let countryinteractionCount : number = 0;
let raceeventCount : number = 0;
let personCount : number = 0;
let professionCount : number = 0;
let roadCount : number = 0;
let armyCount : number = 0; 
let battleCount : number = 0; 
let battleparticipantCount : number = 0; 
let personinteractionCount : number = 0;
let personeventCount : number = 0;

// Generates a Government, can automatically generate a random government if none is provided (still requires name)
export class Government
{
	public GovernmentId: number;
	public Name: string;
	public Type: string;
	public Cohesion: number;
	public Power: number;
	public Funds: number;
    public Policies: Array<Policy>;
    public CountryId: number

	public get Key(): String
	{   
       return this.Name;
	}

	constructor (Name_: string,Type_: string = ra(governmentTypes),Cohesion_: number = r(1,100),Power_: number = r(1,100),Funds_: number = r(10000,100000), CountryId_? : number)
	{
        
		this.GovernmentId = governementCount;
		this.Name = Name_;
		this.Type = Type_;
		this.Cohesion = Cohesion_;
		this.Power = Power_;
		this.Funds = Funds_;
        this.Policies = [];
        this.CountryId = CountryId_;
        governementCount++;
	}
}

// Policies are children of Governments. Requires a government and a description, enacted can generate using sysdate, cancelled is nullable
export class Policy
{
	public PolicyId: number;
	public GovernmentId: number;
	public Enacted: Date;
	public Canceled: Date;
	public Description: string;

	public get Key(): String
	{   
       return this.PolicyId.toString();
	}

	
	constructor (Government_: Government, Description_: string, Enacted_: Date = new Date(), Canceled_: Date)
	{
		this.PolicyId = policyCount;
		this.GovernmentId = Government_.GovernmentId;
		this.Enacted = Enacted_;	
		this.Canceled = Canceled_;
		this.Description = Description_;
        Government_.Policies.push(this);
        policyCount++;
	}
}

// Countries are top level objects that store a government and towns. It also has a single town as it's capital (stored as a number)
// Country has no requirements, all can be generated randomly, and if a government is not provided, it will generate one using country name + government type
// get/set Capital() will return the capital object using the Towns array / Capital Id, and set the capitalid using the town provided
// Use getAllies and getEnemies to get those consider allies and enemies of this country
export class Country
{
	public CountryId: number;
	public Name: string;
	public Size: number;
	public Landlocked: boolean;
	public Government: Government;
	public Innovation: number;
	private CapitalId: number;
    public Towns: Array<Town>;
	public CountryInteractions: Array<CountryInteraction>;

	public get Key(): String
	{   
       return this.Name;
	}

    public get Capital(): Town
	{   
        for (const town of this.Towns) {
            if (town.TownId == this.CapitalId) {
                return town;
            };
        };	
		
		return null;
	}

    public set Capital(val: Town)
	{
		this.CapitalId = val.TownId;
	}

	public getCountryIntreraction(countryId : number) : CountryInteraction {
		for (const countryInteraction of this.CountryInteractions) {
			if (countryInteraction.OtherCountry.CountryId == countryId) {
				return countryInteraction
			}
		}
		return null
	}

	public getAllies() : Array<Country> {
		let allies : Array<Country> = []
		for (const countryInteraction of this.CountryInteractions) {
            if (countryInteraction.Relationship >= AlliedScore && countryInteraction.OtherCountry.getCountryIntreraction(this.CountryId).Relationship >= AlliedScore)  {
                allies.push(countryInteraction.OtherCountry)
            };
        };	
		
		return allies
	}

	public getEnemies() : Array<Country> {
		let enemies : Array<Country> = []
		for (const countryInteraction of this.CountryInteractions) {
            if (countryInteraction.Relationship <= EnemyScore || countryInteraction.OtherCountry.getCountryIntreraction(this.CountryId).Relationship <= EnemyScore)  {
                enemies.push(countryInteraction.OtherCountry)
            };
        };	
		
		return enemies
	}

	constructor (Name_: string=ra(countryName),Size_: number=r(1,10),Landlocked_: boolean = ra(truefalseArray),Government_?: Government,Innovation_: number = r(1,100),Capital_?: Town)
	{
		this.CountryId = countryCount;
		this.Name = Name_;
		this.Size = Size_;
		this.Landlocked = Landlocked_;
        if (Government_ == null) {
            let gType : string = ra(governmentTypes)
            this.Government = new Government(Name_ + " " + gType, gType) 
            this.Government.CountryId = this.CountryId;           
        }
        else {
            this.Government = Government_;
        };
		
		this.Innovation = Innovation_;
		if (Capital_ != null) {
		this.CapitalId = Capital_.TownId; };
        this.Towns = [];
		this.CountryInteractions = [];
        countryCount++;
	}
}

// Used to express other countries opinions of each other. 
export class CountryInteraction
{
	public InteractionId: number;
	public Country: Country;
	public OtherCountry: Country;
	public Relationship: number
	public Status: string;
	public Immigration: string;
	public Trade: string;

	public get Key(): String
	{   
       return this.InteractionId.toString();
	}

	constructor (Country_: Country,OtherCountry_: Country, Relationship_ : number=r(-100,100), Status_: string="At Peace",Immigration_: string="Allowed",Trade_: string="Allowed")
	{
		this.InteractionId = countryinteractionCount;
		this.Country = Country_;
		this.OtherCountry = OtherCountry_;
		this.Relationship = Relationship_;
		this.Status = Status_;
		this.Immigration = Immigration_;
		this.Trade = Trade_;
		countryinteractionCount++;
	}
}



// Biomes are to be manually generated and are used by Towns and Races
export class Biome
{
	public BiomeId: number;
	public Name: string;

	public get Key(): String
	{   
       return this.Name;
	}

	constructor (Name_: string)
	{
		this.BiomeId = biomeCount;
		this.Name = Name_;
		biomeCount++;
	}
}



// Races require a name but otherwise are generated randomly
export class Race
{
	public RaceId: number;
	public Name: string;
	public Size: number;
	public MaxAge: number;
	public CombatMultiplier: number;
	public MagicMultiplier: number;
	public RaceInteractions: Array<RaceInteraction>
	public BiomePreferences: Array<BiomePreference>

	public get Key(): String
	{   
       return this.Name;
	}

	public getRaceRelationship(raceId : number) : number {
		for (const raceInteraction of this.RaceInteractions) {
			if (raceInteraction.OtherRace.RaceId == raceId) {
				return raceInteraction.Relationship
			}
		}
		return 0
	}

	public setRaceRelationship(raceId : number, changeTo : number){
		for (const raceInteraction of this.RaceInteractions) {
			if (raceInteraction.OtherRace.RaceId == raceId) {
				raceInteraction.Relationship = changeTo
			}
		}
		
	}

	public getBiomePreference(biome : string) : number {
		for (const biomeInteraction of this.BiomePreferences) {
			if (biomeInteraction.Biome.Name == biome) {
				return biomeInteraction.Preference
			}
		}
		return 0
	}

	public setBiomePreference(biome : string, changeTo : number) {
		for (const biomeInteraction of this.BiomePreferences) {
			if (biomeInteraction.Biome.Name == biome) {
				biomeInteraction.Preference = changeTo
			}
		}
	}


	public getAllies() : Array<Race> {
		let allies : Array<Race> = []
		for (const raceInteraction of this.RaceInteractions) {
            if (raceInteraction.Relationship >= AlliedScore && raceInteraction.OtherRace.getRaceRelationship(this.RaceId) >= AlliedScore)  {
                allies.push(raceInteraction.OtherRace)
            };
        };	
		
		return allies
	}

	public getEnemies() : Array<Race> {
		let enemies : Array<Race> = []
		for (const raceInteraction of this.RaceInteractions) {
            if (raceInteraction.Relationship <= EnemyScore || raceInteraction.OtherRace.getRaceRelationship(this.RaceId) <= EnemyScore)  {
                enemies.push(raceInteraction.OtherRace)
            };
        };	
		
		return enemies
	}

	constructor (Name_: string,Size_: number=r(1,3),MaxAge_: number=r(50,120),CombatMultiplier_: number=rf(0,2),MagicMultiplier_: number=rf(0,2))
	{
		this.RaceId = raceCount;
		this.Name = Name_;
		this.Size = Size_;
		this.MaxAge = MaxAge_;
		this.CombatMultiplier = CombatMultiplier_;
		this.MagicMultiplier = MagicMultiplier_;
		this.RaceInteractions = [];
		this.BiomePreferences = [];
		raceCount++;
	}
}

// Stores a relationship between two races, and stores how the first Race, Race, views the other race, OtherRace. 
// It can also store the change in a relationship such as a RaceEvent 
// Race and other Race are required, note is optional, relationship can be randomly generated
export class RaceInteraction
{
	public InteractionId: number;
	public Race: Race;
	public OtherRace: Race;
	public Relationship: number;
	public Note: string;

	public get Key(): String
	{   
       return this.InteractionId.toString();
	}

	constructor (Race_: Race,OtherRace_: Race, Relationship_: number = r(-100,100), Note_?: string)
	{
		this.InteractionId = raceinteractionCount;
		this.Race = Race_;
		this.OtherRace = OtherRace_;
		this.Relationship = Relationship_;
		this.Note = Note_;		
		raceinteractionCount++;
	}
}

// Stores an event between races. Requires a string declaring the event, and races involved. 
// Any effects from this event can be stored as a RaceInteraction and stored in the Event
export class RaceEvent
{
	public EventId: number;
	public Event: string;
	public Involved: Array<Race>;
	public Effects: Array<RaceInteraction>

	public get Key(): String
	{   
       return this.EventId.toString();
	}


	constructor (Event_: string, Involved_ : Array<Race>, Effects_?: Array<RaceInteraction>)
	{
		this.EventId = raceeventCount;
		this.Event = Event_;
		this.Involved = Involved_;
		this.Effects = Effects_;
		raceeventCount++;
	}
}

export class BiomePreference
{
	public PreferenceId: number;
	public Biome: Biome;
	public Race: Race;
	public Preference: number;

	public get Key(): String
	{   
       return this.PreferenceId.toString();
	}


	constructor (Biome_: Biome,Race_: Race,Preference_: number)
	{
		this.PreferenceId = biomepreferenceCount;
		this.Biome = Biome_;
		this.Race = Race_;
		this.Preference = Preference_;
		biomepreferenceCount++;
	}
}

// Locations are the top level class for storing objects referenced to by other objects. e.g a person can either be on a road or a town but not both
// Currently just stores the locationid
export class Location
{
	public LocationId: number;
	public Occupants: Array<Person>

	public getPerson(personId : Number) : Person {
		
		for (const person of this.Occupants) {
            if (person.PersonId == personId) {
                return person;
            };
        };		

		return null;
	}

	public removePerson(personId : Number) {
		
		this.Occupants = this.Occupants.filter(function(person){ 
            return person.PersonId != personId; 
        });

	}

	constructor ()
	{
		this.LocationId = locationCount;
		this.Occupants = [];
        locationCount++;
	}
}

// Town is a primary location object, requires a country and a biome, all other values can be generated randomly
// Stores Military (garrison) as an array, can use getFromGarrison/removeFromGarrison to use a personID. 
// If inserting, just use Town.Military.push() 
export class Town extends Location
{

	public TownId: number;
	public CountryId: number;
	public Name: string;
	public Food: number;
	public Resources: number;
	public Crime: number;
	public Corruption: number;
	public Biome: Biome;
	public Military: Array<Person>;
	public Education: number;
	public Funds: number;
	public Goods: number;

	public get Key(): String
	{   
       return this.Name;
	}

	public getFromGarrison(soldierId : Number) : Person {
		
		for (const soldier of this.Military) {
            if (soldier.PersonId == soldierId) {
                return soldier;
            };
        };		

		return null;
	}

	public removeFromGarrison(soldierId : Number) {
		
		this.Military = this.Military.filter(function(soldier){ 
            return soldier.PersonId != soldierId; 
        });

	}

	constructor (Country_: Country, Biome_: Biome, Military_: Array<Person>=[], Name_: string = ra(townName) ,Food_: number=r(1000,2000),Resources_: number=r(500,2000),Crime_: number=r(1,40), Corruption_: number=r(1,30), Education_: number=r(1,5),Funds_: number=r(1000,5000),Goods_: number=r(100,500))
	{
        super();
		this.TownId = townCount;
		this.CountryId = Country_.CountryId;		
		this.Name = Name_;
		this.Food = Food_;
		this.Resources = Resources_;
		this.Crime = Crime_;
		this.Corruption = Corruption_;
		this.Biome = Biome_;		
		this.Military = Military_;
		this.Education = Education_;
		this.Funds = Funds_;
		this.Goods = Goods_;
		Country_.Towns.push(this);
        townCount++;
	}
}

// Roads store the connections between towns and describe condition and danger levels
// Must have at least two towns in the Array provided
// If no name provided, it will use the first two towns in the array plus
// e.g TownName1 TownName2 Road
export class Road extends Location
{
	
	public RoadId: number;
	public Name: string;
	public Connections : Array<Town>;
	public Danger: number;
	public Condition: number;

	public get Key(): String
	{   
       return this.Name;
	}

	constructor (Connections_ : Array<Town>,RoadName_?: string,Danger_: number=r(1,10),Condition_: number=r(1,10))
	{
		super();
		this.RoadId = roadCount;
		this.Connections = Connections_;
		if (RoadName_ == null) {
			this.Name = Connections_[0].Name + " " + Connections_[1].Name + " Road" 
		}
		 else {
			this.Name = RoadName_;
		}
		this.Danger = Danger_;
		this.Condition = Condition_;
		roadCount++;
	}
}

// Army object stores soldiers as a cohesive object (used in battles) 
export class Army
{
	public ArmyId: number;
	public Country: Country;
	public General: Person;
	public Food: number;
	public Location: Location;
	public Soldiers: Array<Person>;
	public Battles: Array<Battle>;
	
	public get Key(): String
	{   
       return `Army led by ${this.General.Key}`;
	}
	public getSoldier(soldierId : Number) : Person {
		
		for (const soldier of this.Soldiers) {
            if (soldier.PersonId == soldierId) {
                return soldier;
            };
        };		

		return null;
	}

	public removeSoldier(soldierId : Number) {
		
		this.Soldiers = this.Soldiers.filter(function(soldier){ 
            return soldier.PersonId != soldierId; 
        });

	}

	public move(location : Location, locationDict: {[key : number] : Location}) {
		this.Location = location;
		this.General.move(location, locationDict);
		for (const soldier of this.Soldiers) {
           soldier.move(location, locationDict);
        };	
	}

	constructor (Country_: Country,General_: Person,Food_: number,Location_: Location)
	{
		this.ArmyId = armyCount;
		this.Country = Country_;
		this.General = General_;
		this.Food = Food_;
		this.Location = Location_;
		this.Soldiers = [];
		this.Battles = [];
		armyCount++;
	}
}

// Records a battle between two armies
export class Battle
{
	public BattleId: number;
	public Location: Location;
	public Participants: Array<BattleParticipant>;

	public get Key(): String
	{   
       return `Battle ${this.BattleId}`;
	}

	constructor (Location_: Location)
	{
		this.BattleId = battleCount;
		this.Location = Location_;
		this.Participants = [];
		battleCount++;
	}
}

// Records an army participating in a battle and the casualties that occured. 
export class BattleParticipant
{
	public PariticipantId: number;
	public Army: Army;	
	public Casulties: number;

	public get Key(): String
	{   
       return `PariticipantId ${this.PariticipantId}`;
	}

	constructor (Army_: Army,Battle_: Battle,Casulties_: number)
	{
		this.PariticipantId = battleparticipantCount;
		this.Army = Army_;
		this.Casulties = Casulties_;
		Battle_.Participants.push(this);
	}
}

// Used to store all the people we will have
export class Person
{
	public PersonId: number;
	public NationalityId: number;
	public LocationId: number;
	public Race: Race;
	public Wealth: number;
	public EducationLevel: number;
	public MilitaryTraining: number;
	public MagicLevel: number;
	public Born: Date;
	public Died: Date;
	public Sex: string;
	public Mother: Person;
	public Father: Person;
	public Boss: Person;
	public Profession: Profession;
	public FirstName: string;
	public LastName: string;

	public get Key(): String
	{   
       return `${this.FirstName} ${this.LastName}`;
	}

	public move(location:Location, locationDict: {[key : number] : Location}) {
		let previousLocation = locationDict[this.LocationId]
		previousLocation.removePerson(this.PersonId)
		this.LocationId = location.LocationId
		location.Occupants.push(this)
	}

	constructor (Nationality_: Country,Location_: Location,Race_: Race, Mother_?: Person,Father_?: Person,Profession_?: Profession, Boss_?: Person, Born_: Date=new Date(), Died_?: Date, FirstName_? : string, LastName_? : string, Sex_: string=ra(genderArray), MilitaryTraining_: number=0,MagicLevel_: number=r(0,2), Wealth_: number=r(10,200),EducationLevel_: number=r(1,6), )
	{
		this.PersonId = personCount;
		this.NationalityId = Nationality_.CountryId;
		this.LocationId = Location_.LocationId;
		Location_.Occupants.push(this);
		this.Race = Race_;
		this.Wealth = Wealth_;
		this.EducationLevel = EducationLevel_;
		this.MilitaryTraining = MilitaryTraining_;
		this.MagicLevel = MagicLevel_;
		this.Born = Born_;
		this.Died = Died_;
		this.Sex = Sex_;
		this.Mother = Mother_;
		this.Father = Father_;
		this.Boss = Boss_;
		this.Profession = Profession_;
		if (FirstName_ == null) {
			this.FirstName = ra(firstName)
		} else {
			this.FirstName = FirstName_
		}
		if (LastName_ == null) {
			if (Father_ != null) {
				this.LastName = Father_.LastName
			}
			else if (Mother_ != null) {
				this.LastName = Mother_.LastName

			}
			else {
				this.LastName = ra(lastName)
			}
			
		} else {
			this.LastName = LastName_
		}

		personCount++;
	}
}

// Stores professions, requirements
export class Profession
{
	public ProfessionId: number;
	public Name: string;
	public EducationRequirement: number;
	public MagicRequirement : number;
	public Pay: string;
	public MaxPerTown: number;
	public MaxPerCountry: number;

	public get Key(): String
	{   
       return this.Name;
	}

	constructor (Name_: string,EducationRequirement_: number, MagicRequirement_: number,Pay_: string,MaxPerTown_: number,MaxPerCountry_: number)
	{
		this.ProfessionId = professionCount;
		this.Name = Name_;
		this.EducationRequirement = EducationRequirement_;
		this.MagicRequirement = MagicRequirement_;
		this.Pay = Pay_;
		this.MaxPerTown = MaxPerTown_;
		this.MaxPerCountry = MaxPerCountry_;
		professionCount++;
	}
}

// Stores the relationship of one person with another, as well as showing 
// changes in relationship (can be stored in a PersonEvent object)
export class PersonInteraction
{
	public InteractionId: number;
	public Person: Person;
	public OtherPerson: Person;
	public Relationship: number;
	public Note : string;

	public get Key(): String
	{   
       return this.Note;
	}

	constructor (Person_: Person,OtherPerson_: Person,Relationship_: number, Note_ : string)
	{
		this.InteractionId = personinteractionCount;
		this.Person = Person_;
		this.OtherPerson = OtherPerson_;
		this.Relationship = Relationship_;
		personinteractionCount++;
	}
}


// Records events that happen between multiple people. Relationship changes can be saved here via PersonInteraction as well
export class PersonEvent
{
	public EventId: number;
	public Description: string;
	public Involved: Array<Person>;
	public Reactions: Array<PersonInteraction>;

	public get Key(): String
	{   
       return this.Description;
	}

	constructor (Description_: string, Involved_: Array<Person>, Reactions_:Array<PersonInteraction>)
	{
		this.EventId = personeventCount;
		this.Description = Description_;
		this.Involved = Involved_;
		this.Reactions = Reactions_;
		personeventCount++;
	}
}