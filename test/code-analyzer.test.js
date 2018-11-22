/* eslint-disable no-console */
import assert from 'assert';
import {buildTable, record, init, parseCode} from '../src/js/code-analyzer';


let varDeclAST  = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "a",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        }
                    },
                    "init": null,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 5
                        }
                    }
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "b",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 9
                            }
                        }
                    },
                    "init": null,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 8
                        },
                        "end": {
                            "line": 1,
                            "column": 9
                        }
                    }
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "c",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 11
                            },
                            "end": {
                                "line": 1,
                                "column": 12
                            }
                        }
                    },
                    "init": null,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 11
                        },
                        "end": {
                            "line": 1,
                            "column": 12
                        }
                    }
                }
            ],
            "kind": "let",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 14
        }
    }
};
let varDeclAST_output = [new record (1, 'variable declaration', 'a', null,null) ,new record (1, 'variable declaration', 'b', null,null), new record (1, 'variable declaration', 'c', null,null) ];
let functionWithBody = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "identity",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 9
                    },
                    "end": {
                        "line": 1,
                        "column": 17
                    }
                }
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "number",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 19
                        },
                        "end": {
                            "line": 1,
                            "column": 25
                        }
                    }
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "Identifier",
                            "name": "number",
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 7
                                },
                                "end": {
                                    "line": 2,
                                    "column": 13
                                }
                            }
                        },
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 0
                            },
                            "end": {
                                "line": 2,
                                "column": 14
                            }
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 27
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "async": false,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 1
        }
    }
};
let functionWithBody_output = [ new record(1,'function declaration','identity',null,null) , new record(1,'variable declaration','number',null,null)
    ,new record(2,'return statement',null,null,'number')];
let ifElse_input = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "isThree",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 9
                    },
                    "end": {
                        "line": 1,
                        "column": 16
                    }
                }
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "a",
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 5
                                        }
                                    }
                                },
                                "init": {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3",
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 9
                                        }
                                    }
                                },
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 9
                                    }
                                }
                            }
                        ],
                        "kind": "let",
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 0
                            },
                            "end": {
                                "line": 2,
                                "column": 10
                            }
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                                "type": "Identifier",
                                "name": "a",
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 5
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 6
                                    }
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 10
                                    }
                                }
                            },
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 5
                                },
                                "end": {
                                    "line": 3,
                                    "column": 10
                                }
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 7
                                            },
                                            "end": {
                                                "line": 4,
                                                "column": 12
                                            }
                                        }
                                    },
                                    "loc": {
                                        "start": {
                                            "line": 4,
                                            "column": 0
                                        },
                                        "end": {
                                            "line": 4,
                                            "column": 13
                                        }
                                    }
                                }
                            ],
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 13
                                },
                                "end": {
                                    "line": 5,
                                    "column": 1
                                }
                            }
                        },
                        "alternate": {
                            "type": "IfStatement",
                            "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a",
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 10
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 11
                                        }
                                    }
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3",
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 14
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 15
                                        }
                                    }
                                },
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 10
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 15
                                    }
                                }
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "Literal",
                                            "value": false,
                                            "raw": "false",
                                            "loc": {
                                                "start": {
                                                    "line": 7,
                                                    "column": 7
                                                },
                                                "end": {
                                                    "line": 7,
                                                    "column": 12
                                                }
                                            }
                                        },
                                        "loc": {
                                            "start": {
                                                "line": 7,
                                                "column": 0
                                            },
                                            "end": {
                                                "line": 7,
                                                "column": 13
                                            }
                                        }
                                    }
                                ],
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 17
                                    },
                                    "end": {
                                        "line": 8,
                                        "column": 1
                                    }
                                }
                            },
                            "alternate": {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "loc": {
                                        "start": {
                                            "line": 9,
                                            "column": 12
                                        },
                                        "end": {
                                            "line": 9,
                                            "column": 16
                                        }
                                    }
                                },
                                "loc": {
                                    "start": {
                                        "line": 9,
                                        "column": 5
                                    },
                                    "end": {
                                        "line": 9,
                                        "column": 17
                                    }
                                }
                            },
                            "loc": {
                                "start": {
                                    "line": 6,
                                    "column": 5
                                },
                                "end": {
                                    "line": 9,
                                    "column": 17
                                }
                            }
                        },
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 0
                            },
                            "end": {
                                "line": 9,
                                "column": 17
                            }
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 19
                    },
                    "end": {
                        "line": 10,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "async": false,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 10,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 10,
            "column": 1
        }
    }
};
let ifElse_output = [new record(1,'function declaration','isThree',null,null) , new record(2,'variable declaration','a',null,'3'),
    new record(3,'if statement',null,'a < 3',null) , new record(4,'return statement',null,null,'false'),new record(6,'else if statement',null,'a > 3',null),
    new record(7,'return statement',null,null,'false'),new record(9,'return statement',null,null,'true')];
let test5_input = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "a",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        }
                    },
                    "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 9
                            }
                        }
                    },
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 9
                        }
                    }
                }
            ],
            "kind": "let",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 10
                }
            }
        },
        {
            "type": "WhileStatement",
            "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 8
                        },
                        "end": {
                            "line": 2,
                            "column": 9
                        }
                    }
                },
                "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 12
                        },
                        "end": {
                            "line": 2,
                            "column": 14
                        }
                    }
                },
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 8
                    },
                    "end": {
                        "line": 2,
                        "column": 14
                    }
                }
            },
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                                "type": "Identifier",
                                "name": "a",
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 1
                                    }
                                }
                            },
                            "prefix": false,
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 0
                                },
                                "end": {
                                    "line": 3,
                                    "column": 3
                                }
                            }
                        },
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 0
                            },
                            "end": {
                                "line": 3,
                                "column": 4
                            }
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 16
                    },
                    "end": {
                        "line": 4,
                        "column": 1
                    }
                }
            },
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 4,
            "column": 1
        }
    }
};
let test5_output = [new record (1,'variable declaration','a',null,'0'),
    new record(2,'while statement',null,'a < 10',null),new record(3,'update expression','a++',null,null)];
let test6_input = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "a",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        }
                    },
                    "init": null,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 5
                        }
                    }
                }
            ],
            "kind": "let",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 7
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 0
                        },
                        "end": {
                            "line": 2,
                            "column": 1
                        }
                    }
                },
                "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 4
                        },
                        "end": {
                            "line": 2,
                            "column": 5
                        }
                    }
                },
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 0
                    },
                    "end": {
                        "line": 2,
                        "column": 5
                    }
                }
            },
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 6
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 2,
            "column": 6
        }
    }
};
let test6_output = [new record(1,'variable declaration','a',null,null),new record(2,'assignment expression','a',null,'0')];
let let_input = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "a",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        }
                    },
                    "init": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                            "type": "Identifier",
                            "name": "n",
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 8
                                },
                                "end": {
                                    "line": 1,
                                    "column": 9
                                }
                            }
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 12
                                },
                                "end": {
                                    "line": 1,
                                    "column": 13
                                }
                            }
                        },
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 13
                            }
                        }
                    },
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 13
                        }
                    }
                }
            ],
            "kind": "let",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 15
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 15
        }
    }
};
let let_output = [ new record (1,'variable declaration','a',null,'n + 1')];
let parseCodeTest_input = "let a ;"
let parseCodeTest_output = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "a",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        }
                    },
                    "init": null,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 5
                        }
                    }
                }
            ],
            "kind": "let",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 7
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 7
        }
    }
} ;

let for_Input = {
    "type": "Program",
    "body": [
        {
            "type": "ForStatement",
            "init": {
                "type": "VariableDeclaration",
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "i",
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 8
                                },
                                "end": {
                                    "line": 1,
                                    "column": 9
                                }
                            }
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 12
                                },
                                "end": {
                                    "line": 1,
                                    "column": 13
                                }
                            }
                        },
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 13
                            }
                        }
                    }
                ],
                "kind": "let",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 4
                    },
                    "end": {
                        "line": 1,
                        "column": 14
                    }
                }
            },
            "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                    "type": "Identifier",
                    "name": "i",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 15
                        },
                        "end": {
                            "line": 1,
                            "column": 16
                        }
                    }
                },
                "right": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 17
                        },
                        "end": {
                            "line": 1,
                            "column": 18
                        }
                    }
                },
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 15
                    },
                    "end": {
                        "line": 1,
                        "column": 18
                    }
                }
            },
            "update": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "Identifier",
                    "name": "i",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 21
                        },
                        "end": {
                            "line": 1,
                            "column": 22
                        }
                    }
                },
                "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                        "type": "Identifier",
                        "name": "i",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 25
                            },
                            "end": {
                                "line": 1,
                                "column": 26
                            }
                        }
                    },
                    "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 29
                            },
                            "end": {
                                "line": 1,
                                "column": 30
                            }
                        }
                    },
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 25
                        },
                        "end": {
                            "line": 1,
                            "column": 30
                        }
                    }
                },
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 21
                    },
                    "end": {
                        "line": 1,
                        "column": 30
                    }
                }
            },
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                                "type": "Identifier",
                                "name": "i",
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 1
                                    }
                                }
                            },
                            "prefix": false,
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 0
                                },
                                "end": {
                                    "line": 2,
                                    "column": 3
                                }
                            }
                        },
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 0
                            },
                            "end": {
                                "line": 2,
                                "column": 4
                            }
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 31
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                }
            },
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 1
        }
    }
};
let for_output = [new record(1,'for statement',null,'let i = 1;i < 5;i = i + 1',null),new record(2,'update expression','i++',null,null)];

let ifWithoutElse_input = {
    "type": "Program",
    "body": [
        {
            "type": "IfStatement",
            "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 3
                    },
                    "end": {
                        "line": 1,
                        "column": 7
                    }
                }
            },
            "consequent": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "a",
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 5
                                        }
                                    }
                                },
                                "init": {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3",
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 9
                                        }
                                    }
                                },
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 9
                                    }
                                }
                            }
                        ],
                        "kind": "let",
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 0
                            },
                            "end": {
                                "line": 2,
                                "column": 10
                            }
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 8
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                }
            },
            "alternate": null,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 1
        }
    }
};
let ifWithoutElse_output = [new record(1,'if statement',null,'true',null),new record(2,'variable declaration','a',null,'3')];
let forWithoutInit_input = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "i",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        }
                    },
                    "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 9
                            }
                        }
                    },
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 9
                        }
                    }
                }
            ],
            "kind": "let",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 10
                }
            }
        },
        {
            "type": "ForStatement",
            "init": null,
            "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                    "type": "Identifier",
                    "name": "i",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 6
                        },
                        "end": {
                            "line": 2,
                            "column": 7
                        }
                    }
                },
                "right": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 8
                        },
                        "end": {
                            "line": 2,
                            "column": 9
                        }
                    }
                },
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 6
                    },
                    "end": {
                        "line": 2,
                        "column": 9
                    }
                }
            },
            "update": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "Identifier",
                    "name": "i",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 12
                        },
                        "end": {
                            "line": 2,
                            "column": 13
                        }
                    }
                },
                "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                        "type": "Identifier",
                        "name": "i",
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 16
                            },
                            "end": {
                                "line": 2,
                                "column": 17
                            }
                        }
                    },
                    "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 20
                            },
                            "end": {
                                "line": 2,
                                "column": 21
                            }
                        }
                    },
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 16
                        },
                        "end": {
                            "line": 2,
                            "column": 21
                        }
                    }
                },
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 12
                    },
                    "end": {
                        "line": 2,
                        "column": 21
                    }
                }
            },
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                                "type": "Identifier",
                                "name": "i",
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 1
                                    }
                                }
                            },
                            "prefix": false,
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 0
                                },
                                "end": {
                                    "line": 3,
                                    "column": 3
                                }
                            }
                        },
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 0
                            },
                            "end": {
                                "line": 3,
                                "column": 4
                            }
                        }
                    }
                ],
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 22
                    },
                    "end": {
                        "line": 4,
                        "column": 1
                    }
                }
            },
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 4,
            "column": 1
        }
    }
};
let forWithoutInit_output = [new record(1,'variable declaration','i',null,'1'),new record(2,'for statement',null,';i < 5;i = i + 1',null),new record(3,'update expression','i++',null,null)];
describe('The javascript parser', () => {
    it('parse script function test', () => {
        init();
        assert.deepEqual(
            parseCode(parseCodeTest_input),
            parseCodeTest_output);
    });
    it('function test', () => {
        init();
        assert.deepEqual(
            buildTable(functionWithBody.body),
            functionWithBody_output);
    });
    it ('variable declaration test' , () => {
        init();
        assert.deepEqual(buildTable(varDeclAST.body),varDeclAST_output);
    });
    it ('if-else test' , () => {
        init();
        assert.deepEqual(JSON.stringify(buildTable(ifElse_input.body)),JSON.stringify(ifElse_output));
    });
    it ('let with assignment test' , () => {
        init();
        assert.deepEqual(JSON.stringify(buildTable(let_input.body)),JSON.stringify(let_output));
    });
    it ('while,assignment,update test' , () => {
        init();
        assert.deepEqual(JSON.stringify(buildTable(test5_input.body)),JSON.stringify(test5_output));
    });
    it ('assignment test' , () => {
        init();
        assert.deepEqual(JSON.stringify(buildTable(test6_input.body)),JSON.stringify(test6_output));
    });
    it ('for test' , () => {
        init();
        assert.deepEqual(JSON.stringify(buildTable(for_Input.body)),JSON.stringify(for_output));
    });
    it ('for without init test' , () => {
        init();
        assert.deepEqual(JSON.stringify(buildTable(forWithoutInit_input.body)),JSON.stringify(forWithoutInit_output));
    });
    it ('if without else test' , () => {
        init();
        assert.deepEqual(JSON.stringify(buildTable(ifWithoutElse_input.body)),JSON.stringify(ifWithoutElse_output));
    });
});



