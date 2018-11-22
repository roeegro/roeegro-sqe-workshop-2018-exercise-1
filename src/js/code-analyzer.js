/* eslint-disable no-console */
import * as esprima from 'esprima';
import * as escodegen from 'escodegen';

const parseCode = (codeToParse) => {
    return esprima.parseScript(codeToParse, {loc: true});
};

let records = [];
let elseFlag = false;

function init() {
    records = [];
}

class record {
    constructor(_line, _type, _name, _condition, _value) {
        this.line = _line;
        this.type = _type;
        this.name = _name;
        this.condition = _condition;
        this.value = _value;
    }
}

function buildTable(body) {
    let i = 0;
    for (; i < body.length; i++) {
        parse(body[i]);
    }
    return records;
}

function parse(element) {
    let type = element.type;
    let handlersNames = ['FunctionDeclaration', 'ReturnStatement', 'IfStatement', 'WhileStatement', 'VariableDeclaration', 'ForStatement', 'BlockStatement'];
    let handlers = [FunctionDeclaration, ReturnStatement, IfStatement, WhileStatement, VariableDeclaration, ForStatement, BlockStatement];
    let expressionsNames = ['AssignmentExpression', 'UpdateExpression'];
    let expressions = [AssignmentExpression, UpdateExpression];
    if (handlersNames.includes(type)) {
        handlers[handlersNames.indexOf(type)](element);
    } else {
        let func = expressions[expressionsNames.indexOf(element.expression.type)];
        func(element.expression);
    }
}

function BlockStatement(node) {
    for (let i = 0; i < node.body.length; i++) {
        parse(node.body[i]);
    }
}

function FunctionDeclaration(node) {
    //TODO : Check function declaration method.
    //Assume we have only identifier parameters.
    records.push(new record(node.loc.start.line, 'function declaration', node.id.name, null, null));
    let i = 0;
    let paramList = node.params;
    for (; i < paramList.length; i++) {
        records.push(new record(paramList[i].loc.start.line, 'variable declaration', escodegen.generate(paramList[i]), null, null));
    }
    let body = node.body.body; //access to the body's content.
    buildTable(body);
}

function ReturnStatement(node) {
    //TODO: Check return statement.
    records.push(new record(node.loc.start.line, 'return statement', null, null, escodegen.generate(node.argument)));
}

function IfStatement(node) {
    if (elseFlag) {
        records.push(new record(node.test.loc.start.line, 'else if statement', null, escodegen.generate(node.test), null));
    } else {
        records.push(new record(node.test.loc.start.line, 'if statement', null, escodegen.generate(node.test), null));
    }
    parse(node.consequent);
    if (node.alternate !== null) {
        elseFlag = true;
        parse(node.alternate);
        elseFlag = false;
    }
}

function UpdateExpression(node) {
    //TODO : Check update.
    records.push(new record(node.loc.start.line, 'update expression', escodegen.generate(node), null, null));
}

function AssignmentExpression(node) {
    //TODO: check assignment expression method.
    records.push(new record(node.loc.start.line, 'assignment expression', escodegen.generate(node.left), null, escodegen.generate(node.right)));
}

function WhileStatement(node) {
    //TODO : Check while method.
    let testName = escodegen.generate(node.test);
    records.push(new record(node.loc.start.line, 'while statement', null, testName, null));
    let body = node.body.body;
    buildTable(body); //recursive.
}

function VariableDeclaration(node) {
    //TODO: Check variable declaration method.
    let i = 0;
    let declarationsList = node.declarations;
    let name;
    let value;
    for (; i < declarationsList.length; i++) {
        name = declarationsList[i].id.name;
        if (declarationsList[i].init !== null) {
            value = escodegen.generate(declarationsList[i].init);
            records.push(new record(node.loc.start.line, 'variable declaration', name, null, value));
        } else
            records.push(new record(node.loc.start.line, 'variable declaration', name, null, null));
    }
    //console.log(records);
}

function ForStatement(node) {
    let condition = '';
    if (node.init !== null)
        condition = escodegen.generate(node.init) + escodegen.generate(node.test) + ';' + escodegen.generate(node.update);
    else {
        condition = ';' + escodegen.generate(node.test) + ';' + escodegen.generate(node.update);
    }
    records.push(new record(node.loc.start.line, 'for statement', null, condition, null));
    buildTable(node.body.body);
}

export {parseCode, buildTable, record, init};