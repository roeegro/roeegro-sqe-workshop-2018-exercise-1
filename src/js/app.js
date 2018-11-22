import $ from 'jquery';
import {parseCode,buildTable} from './code-analyzer';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        let records = buildTable(parsedCode.body);
        let table = $('table');
        table.empty();
        table.append(buildHtmlTable(records));

    });
});

function buildHtmlTable (records) {
    let result = '<table border=1>';
    let titles = ['line','type','name','condition','value'];
    result += '<thead><tr><th>line</th><th>type</th><th>Name</th><th>Condition</th><th>Value</th></tr></thead>';
    for(let  i = 0 ; i<records.length;i++){
        result += '<tr>';
        for(let j = 0;j<titles.length;j++) {
            result += '<td>' + (records[i][titles[j]]? records[i][titles[j]] : '') + '</td>';
        }
        result += '</tr>';
    }
    result += '</table>';
    return result;
}




















