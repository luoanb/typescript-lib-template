import axios from "axios";
import { xml2json } from "xml-js";
var xml = '<?xml version="1.0" encoding="utf-8"?>' + '<note importance="high" logged="true">' + "    <title>Happy</title>" + "    <todo>Work</todo>" + "    <todo>Play</todo>" + "</note>";
var result1 = xml2json(xml, { compact: true, spaces: 4 });
var result2 = xml2json(xml, { compact: false, spaces: 4 });
console.log(result1, "\n", result2);
const axiostest = axios.get("www.baidu.com").then((res) => {
  console.log(res);
});
export const yibao = { result1, result2, axiostest };
