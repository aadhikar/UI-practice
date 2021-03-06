import {Component} from "angular2/core";

@Component({
   selector:'my-list',
   templateUrl:'./app/metadata_app.component.html',
   styleUrls: ['./app/metadata_app.component.css']
})
export class ItemComponent{
   public itemList = [
      {country: "Afghanistan ", region: "ASIA (EX. NEAR EAST)", population: "31056997"},
{country: "Albania ", region: "EASTERN EUROPE", population: "3581655"},
{country: "Algeria ", region: "NORTHERN AFRICA", population: "32930091"},
{country: "American Samoa ", region: "OCEANIA", population: "57794"},
{country: "Andorra ", region: "WESTERN EUROPE", population: "71201"},
{country: "Angola ", region: "SUB-SAHARAN AFRICA", population: "12127071"},
{country: "Anguilla ", region: "LATIN AMER. & CARIB", population: "13477"},
{country: "Antigua & Barbuda ", region: "LATIN AMER. & CARIB", population: "69108"},
{country: "Argentina ", region: "LATIN AMER. & CARIB", population: "39921833"},
{country: "Armenia ", region: "C.W. OF IND. STATES", population: "2976372"},
{country: "Aruba ", region: "LATIN AMER. & CARIB", population: "71891"},
{country: "Australia ", region: "OCEANIA", population: "20264082"},
{country: "Austria ", region: "WESTERN EUROPE", population: "8192880"},
{country: "Azerbaijan ", region: "C.W. OF IND. STATES", population: "7961619"},
{country: "Bahamas, The ", region: "LATIN AMER. & CARIB", population: "303770"},
{country: "Bahrain ", region: "NEAR EAST", population: "698585"},
{country: "Bangladesh ", region: "ASIA (EX. NEAR EAST)", population: "147365352"},
{country: "Barbados ", region: "LATIN AMER. & CARIB", population: "279912"},
{country: "Belarus ", region: "C.W. OF IND. STATES", population: "10293011"},
{country: "Belgium ", region: "WESTERN EUROPE", population: "10379067"},
{country: "Belize ", region: "LATIN AMER. & CARIB", population: "287730"},
{country: "Benin ", region: "SUB-SAHARAN AFRICA", population: "7862944"},
{country: "Bermuda ", region: "NORTHERN AMERICA", population: "65773"},
{country: "Bhutan ", region: "ASIA (EX. NEAR EAST)", population: "2279723"},
{country: "Bolivia ", region: "LATIN AMER. & CARIB", population: "8989046"},
{country: "Bosnia & Herzegovina ", region: "EASTERN EUROPE", population: "4498976"},
{country: "Botswana ", region: "SUB-SAHARAN AFRICA", population: "1639833"},
{country: "Brazil ", region: "LATIN AMER. & CARIB", population: "188078227"},
{country: "British Virgin Is. ", region: "LATIN AMER. & CARIB", population: "23098"},
{country: "Brunei ", region: "ASIA (EX. NEAR EAST)", population: "379444"},
{country: "Bulgaria ", region: "EASTERN EUROPE", population: "7385367"},
{country: "Burkina Faso ", region: "SUB-SAHARAN AFRICA", population: "13902972"},
{country: "Burma ", region: "ASIA (EX. NEAR EAST)", population: "47382633"},
{country: "Burundi ", region: "SUB-SAHARAN AFRICA", population: "8090068"},
{country: "Cambodia ", region: "ASIA (EX. NEAR EAST)", population: "13881427"},
{country: "Cameroon ", region: "SUB-SAHARAN AFRICA", population: "17340702"},
{country: "Canada ", region: "NORTHERN AMERICA", population: "33098932"},
{country: "Cape Verde ", region: "SUB-SAHARAN AFRICA", population: "420979"},
{country: "Cayman Islands ", region: "LATIN AMER. & CARIB", population: "45436"},
{country: "Central African Rep. ", region: "SUB-SAHARAN AFRICA", population: "4303356"},
{country: "Chad ", region: "SUB-SAHARAN AFRICA", population: "9944201"},
{country: "Chile ", region: "LATIN AMER. & CARIB", population: "16134219"},
{country: "China ", region: "ASIA (EX. NEAR EAST)", population: "1313973713"},
{country: "Colombia ", region: "LATIN AMER. & CARIB", population: "43593035"},
{country: "Comoros ", region: "SUB-SAHARAN AFRICA", population: "690948"},
{country: "Congo, Dem. Rep. ", region: "SUB-SAHARAN AFRICA", population: "62660551"},
{country: "Congo, Repub. of the ", region: "SUB-SAHARAN AFRICA", population: "3702314"},
{country: "Cook Islands ", region: "OCEANIA", population: "21388"},
{country: "Costa Rica ", region: "LATIN AMER. & CARIB", population: "4075261"},
{country: "Cote d'Ivoire ", region: "SUB-SAHARAN AFRICA", population: "17654843"},
{country: "Croatia ", region: "EASTERN EUROPE", population: "4494749"},
{country: "Cuba ", region: "LATIN AMER. & CARIB", population: "11382820"},
{country: "Cyprus ", region: "NEAR EAST", population: "784301"},
{country: "Czech Republic ", region: "EASTERN EUROPE", population: "10235455"},
{country: "Denmark ", region: "WESTERN EUROPE", population: "5450661"},
{country: "Djibouti ", region: "SUB-SAHARAN AFRICA", population: "486530"},
{country: "Dominica ", region: "LATIN AMER. & CARIB", population: "68910"},
{country: "Dominican Republic ", region: "LATIN AMER. & CARIB", population: "9183984"},
{country: "East Timor ", region: "ASIA (EX. NEAR EAST)", population: "1062777"},
{country: "Ecuador ", region: "LATIN AMER. & CARIB", population: "13547510"},
{country: "Egypt ", region: "NORTHERN AFRICA", population: "78887007"},
{country: "El Salvador ", region: "LATIN AMER. & CARIB", population: "6822378"},
{country: "Equatorial Guinea ", region: "SUB-SAHARAN AFRICA", population: "540109"},
{country: "Eritrea ", region: "SUB-SAHARAN AFRICA", population: "4786994"},
{country: "Estonia ", region: "BALTICS", population: "1324333"},
{country: "Ethiopia ", region: "SUB-SAHARAN AFRICA", population: "74777981"},
{country: "Faroe Islands ", region: "WESTERN EUROPE", population: "47246"},
{country: "Fiji ", region: "OCEANIA", population: "905949"},
{country: "Finland ", region: "WESTERN EUROPE", population: "5231372"},
{country: "France ", region: "WESTERN EUROPE", population: "60876136"},
{country: "French Guiana ", region: "LATIN AMER. & CARIB", population: "199509"},
{country: "French Polynesia ", region: "OCEANIA", population: "274578"},
{country: "Gabon ", region: "SUB-SAHARAN AFRICA", population: "1424906"},
{country: "Gambia, The ", region: "SUB-SAHARAN AFRICA", population: "1641564"},
{country: "Gaza Strip ", region: "NEAR EAST", population: "1428757"},
{country: "Georgia ", region: "C.W. OF IND. STATES", population: "4661473"},
{country: "Germany ", region: "WESTERN EUROPE", population: "82422299"},
{country: "Ghana ", region: "SUB-SAHARAN AFRICA", population: "22409572"},
{country: "Gibraltar ", region: "WESTERN EUROPE", population: "27928"},
{country: "Greece ", region: "WESTERN EUROPE", population: "10688058"},
{country: "Greenland ", region: "NORTHERN AMERICA", population: "56361"},
{country: "Grenada ", region: "LATIN AMER. & CARIB", population: "89703"},
{country: "Guadeloupe ", region: "LATIN AMER. & CARIB", population: "452776"},
{country: "Guam ", region: "OCEANIA", population: "171019"},
{country: "Guatemala ", region: "LATIN AMER. & CARIB", population: "12293545"},
{country: "Guernsey ", region: "WESTERN EUROPE", population: "65409"},
{country: "Guinea ", region: "SUB-SAHARAN AFRICA", population: "9690222"},
{country: "Guinea-Bissau ", region: "SUB-SAHARAN AFRICA", population: "1442029"},
{country: "Guyana ", region: "LATIN AMER. & CARIB", population: "767245"},
{country: "Haiti ", region: "LATIN AMER. & CARIB", population: "8308504"},
{country: "Honduras ", region: "LATIN AMER. & CARIB", population: "7326496"},
{country: "Hong Kong ", region: "ASIA (EX. NEAR EAST)", population: "6940432"},
{country: "Hungary ", region: "EASTERN EUROPE", population: "9981334"},
{country: "Iceland ", region: "WESTERN EUROPE", population: "299388"},
{country: "India ", region: "ASIA (EX. NEAR EAST)", population: "1095351995"},
{country: "Indonesia ", region: "ASIA (EX. NEAR EAST)", population: "245452739"},
{country: "Iran ", region: "ASIA (EX. NEAR EAST)", population: "68688433"},
{country: "Iraq ", region: "NEAR EAST", population: "26783383"},
{country: "Ireland ", region: "WESTERN EUROPE", population: "4062235"},
{country: "Isle of Man ", region: "WESTERN EUROPE", population: "75441"},
{country: "Israel ", region: "NEAR EAST", population: "6352117"},
{country: "Italy ", region: "WESTERN EUROPE", population: "58133509"},
{country: "Jamaica ", region: "LATIN AMER. & CARIB", population: "2758124"},
{country: "Japan ", region: "ASIA (EX. NEAR EAST)", population: "127463611"},
{country: "Jersey ", region: "WESTERN EUROPE", population: "91084"},
{country: "Jordan ", region: "NEAR EAST", population: "5906760"},
{country: "Kazakhstan ", region: "C.W. OF IND. STATES", population: "15233244"},
{country: "Kenya ", region: "SUB-SAHARAN AFRICA", population: "34707817"},
{country: "Kiribati ", region: "OCEANIA", population: "105432"},
{country: "Korea, North ", region: "ASIA (EX. NEAR EAST)", population: "23113019"},
{country: "Korea, South ", region: "ASIA (EX. NEAR EAST)", population: "48846823"},
{country: "Kuwait ", region: "NEAR EAST", population: "2418393"},
{country: "Kyrgyzstan ", region: "C.W. OF IND. STATES", population: "5213898"},
{country: "Laos ", region: "ASIA (EX. NEAR EAST)", population: "6368481"},
{country: "Latvia ", region: "BALTICS", population: "2274735"},
{country: "Lebanon ", region: "NEAR EAST", population: "3874050"},
{country: "Lesotho ", region: "SUB-SAHARAN AFRICA", population: "2022331"},
{country: "Liberia ", region: "SUB-SAHARAN AFRICA", population: "3042004"},
{country: "Libya ", region: "NORTHERN AFRICA", population: "5900754"},
{country: "Liechtenstein ", region: "WESTERN EUROPE", population: "33987"},
{country: "Lithuania ", region: "BALTICS", population: "3585906"},
{country: "Luxembourg ", region: "WESTERN EUROPE", population: "474413"},
{country: "Macau ", region: "ASIA (EX. NEAR EAST)", population: "453125"},
{country: "Macedonia ", region: "EASTERN EUROPE", population: "2050554"},
{country: "Madagascar ", region: "SUB-SAHARAN AFRICA", population: "18595469"},
{country: "Malawi ", region: "SUB-SAHARAN AFRICA", population: "13013926"},
{country: "Malaysia ", region: "ASIA (EX. NEAR EAST)", population: "24385858"},
{country: "Maldives ", region: "ASIA (EX. NEAR EAST)", population: "359008"},
{country: "Mali ", region: "SUB-SAHARAN AFRICA", population: "11716829"},
{country: "Malta ", region: "WESTERN EUROPE", population: "400214"},
{country: "Marshall Islands ", region: "OCEANIA", population: "60422"},
{country: "Martinique ", region: "LATIN AMER. & CARIB", population: "436131"},
{country: "Mauritania ", region: "SUB-SAHARAN AFRICA", population: "3177388"},
{country: "Mauritius ", region: "SUB-SAHARAN AFRICA", population: "1240827"},
{country: "Mayotte ", region: "SUB-SAHARAN AFRICA", population: "201234"},
{country: "Mexico ", region: "LATIN AMER. & CARIB", population: "107449525"},
{country: "Micronesia, Fed. St. ", region: "OCEANIA", population: "108004"},
{country: "Moldova ", region: "C.W. OF IND. STATES", population: "4466706"},
{country: "Monaco ", region: "WESTERN EUROPE", population: "32543"},
{country: "Mongolia ", region: "ASIA (EX. NEAR EAST)", population: "2832224"},
{country: "Montserrat ", region: "LATIN AMER. & CARIB", population: "9439"},
{country: "Morocco ", region: "NORTHERN AFRICA", population: "33241259"},
{country: "Mozambique ", region: "SUB-SAHARAN AFRICA", population: "19686505"},
{country: "Namibia ", region: "SUB-SAHARAN AFRICA", population: "2044147"},
{country: "Nauru ", region: "OCEANIA", population: "13287"},
{country: "Nepal ", region: "ASIA (EX. NEAR EAST)", population: "28287147"},
{country: "Netherlands ", region: "WESTERN EUROPE", population: "16491461"},
{country: "Netherlands Antilles ", region: "LATIN AMER. & CARIB", population: "221736"},
{country: "New Caledonia ", region: "OCEANIA", population: "219246"},
{country: "New Zealand ", region: "OCEANIA", population: "4076140"},
{country: "Nicaragua ", region: "LATIN AMER. & CARIB", population: "5570129"},
{country: "Niger ", region: "SUB-SAHARAN AFRICA", population: "12525094"},
{country: "Nigeria ", region: "SUB-SAHARAN AFRICA", population: "131859731"},
{country: "N. Mariana Islands ", region: "OCEANIA", population: "82459"},
{country: "Norway ", region: "WESTERN EUROPE", population: "4610820"},
{country: "Oman ", region: "NEAR EAST", population: "3102229"},
{country: "Pakistan ", region: "ASIA (EX. NEAR EAST)", population: "165803560"},
{country: "Palau ", region: "OCEANIA", population: "20579"},
{country: "Panama ", region: "LATIN AMER. & CARIB", population: "3191319"},
{country: "Papua New Guinea ", region: "OCEANIA", population: "5670544"},
{country: "Paraguay ", region: "LATIN AMER. & CARIB", population: "6506464"},
{country: "Peru ", region: "LATIN AMER. & CARIB", population: "28302603"},
{country: "Philippines ", region: "ASIA (EX. NEAR EAST)", population: "89468677"},
{country: "Poland ", region: "EASTERN EUROPE", population: "38536869"},
{country: "Portugal ", region: "WESTERN EUROPE", population: "10605870"},
{country: "Puerto Rico ", region: "LATIN AMER. & CARIB", population: "3927188"},
{country: "Qatar ", region: "NEAR EAST", population: "885359"},
{country: "Reunion ", region: "SUB-SAHARAN AFRICA", population: "787584"},
{country: "Romania ", region: "EASTERN EUROPE", population: "22303552"},
{country: "Russia ", region: "C.W. OF IND. STATES", population: "142893540"},
{country: "Rwanda ", region: "SUB-SAHARAN AFRICA", population: "8648248"},
{country: "Saint Helena ", region: "SUB-SAHARAN AFRICA", population: "7502"},
{country: "Saint Kitts & Nevis ", region: "LATIN AMER. & CARIB", population: "39129"},
{country: "Saint Lucia ", region: "LATIN AMER. & CARIB", population: "168458"},
{country: "St Pierre & Miquelon ", region: "NORTHERN AMERICA", population: "7026"},
{country: "Saint Vincent and the Grenadines ", region: "LATIN AMER. & CARIB", population: "117848"},
{country: "Samoa ", region: "OCEANIA", population: "176908"},
{country: "San Marino ", region: "WESTERN EUROPE", population: "29251"},
{country: "Sao Tome & Principe ", region: "SUB-SAHARAN AFRICA", population: "193413"},
{country: "Saudi Arabia ", region: "NEAR EAST", population: "27019731"},
{country: "Senegal ", region: "SUB-SAHARAN AFRICA", population: "11987121"},
{country: "Serbia ", region: "EASTERN EUROPE", population: "9396411"},
{country: "Seychelles ", region: "SUB-SAHARAN AFRICA", population: "81541"},
{country: "Sierra Leone ", region: "SUB-SAHARAN AFRICA", population: "6005250"},
{country: "Singapore ", region: "ASIA (EX. NEAR EAST)", population: "4492150"},
{country: "Slovakia ", region: "EASTERN EUROPE", population: "5439448"},
{country: "Slovenia ", region: "EASTERN EUROPE", population: "2010347"},
{country: "Solomon Islands ", region: "OCEANIA", population: "552438"},
{country: "Somalia ", region: "SUB-SAHARAN AFRICA", population: "8863338"},
{country: "South Africa ", region: "SUB-SAHARAN AFRICA", population: "44187637"},
{country: "Spain ", region: "WESTERN EUROPE", population: "40397842"},
{country: "Sri Lanka ", region: "ASIA (EX. NEAR EAST)", population: "20222240"},
{country: "Sudan ", region: "SUB-SAHARAN AFRICA", population: "41236378"},
{country: "Suriname ", region: "LATIN AMER. & CARIB", population: "439117"},
{country: "Swaziland ", region: "SUB-SAHARAN AFRICA", population: "1136334"},
{country: "Sweden ", region: "WESTERN EUROPE", population: "9016596"},
{country: "Switzerland ", region: "WESTERN EUROPE", population: "7523934"},
{country: "Syria ", region: "NEAR EAST", population: "18881361"},
{country: "Taiwan ", region: "ASIA (EX. NEAR EAST)", population: "23036087"},
{country: "Tajikistan ", region: "C.W. OF IND. STATES", population: "7320815"},
{country: "Tanzania ", region: "SUB-SAHARAN AFRICA", population: "37445392"},
{country: "Thailand ", region: "ASIA (EX. NEAR EAST)", population: "64631595"},
{country: "Togo ", region: "SUB-SAHARAN AFRICA", population: "5548702"},
{country: "Tonga ", region: "OCEANIA", population: "114689"},
{country: "Trinidad & Tobago ", region: "LATIN AMER. & CARIB", population: "1065842"},
{country: "Tunisia ", region: "NORTHERN AFRICA", population: "10175014"},
{country: "Turkey ", region: "NEAR EAST", population: "70413958"},
{country: "Turkmenistan ", region: "C.W. OF IND. STATES", population: "5042920"},
{country: "Turks & Caicos Is ", region: "LATIN AMER. & CARIB", population: "21152"},
{country: "Tuvalu ", region: "OCEANIA", population: "11810"},
{country: "Uganda ", region: "SUB-SAHARAN AFRICA", population: "28195754"},
{country: "Ukraine ", region: "C.W. OF IND. STATES", population: "46710816"},
{country: "United Arab Emirates ", region: "NEAR EAST", population: "2602713"},
{country: "United Kingdom ", region: "WESTERN EUROPE", population: "60609153"},
{country: "United States ", region: "NORTHERN AMERICA", population: "298444215"},
{country: "Uruguay ", region: "LATIN AMER. & CARIB", population: "3431932"},
{country: "Uzbekistan ", region: "C.W. OF IND. STATES", population: "27307134"},
{country: "Vanuatu ", region: "OCEANIA", population: "208869"},
{country: "Venezuela ", region: "LATIN AMER. & CARIB", population: "25730435"},
{country: "Vietnam ", region: "ASIA (EX. NEAR EAST)", population: "84402966"},
{country: "Virgin Islands ", region: "LATIN AMER. & CARIB", population: "108605"},
{country: "Wallis and Futuna ", region: "OCEANIA", population: "16025"},
{country: "West Bank ", region: "NEAR EAST", population: "2460492"},
{country: "Western Sahara ", region: "NORTHERN AFRICA", population: "273008"},
{country: "Yemen ", region: "NEAR EAST", population: "21456188"},
{country: "Zambia ", region: "SUB-SAHARAN AFRICA", population: "11502010"},
{country: "Zimbabwe ", region: "SUB-SAHARAN AFRICA", population: "12236805"}
   ];
}
