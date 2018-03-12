export interface Typed {
    type: string | Typed[];
    subtype?: Typed;
    nullable?: 1;
    "type-original"?: string;
    "override-type"?: string;
}

export interface Param extends Typed {
    name: string;
    optional?: 1;
    variadic?: 1;
    "treat-null-as"?: string;
}

export interface Signature extends Typed {
    param?: Param[];
    "param-min-required"?: number,
}

export interface Member extends Typed {
    name: string;
    default?: string;
    required?: 1;
    "override-type"?: string;
    specs?: string;
}

export interface Property extends Typed {
    name: string;
    "event-handler"?: string;
    "read-only"?: 1;
    replaceable?: string;
    "put-forwards"?: string;
    stringifier?: 1;
    tags?: string;
    "property-descriptor-not-enumerable"?: string;
    "content-attribute"?: string;
    "content-attribute-reflects"?: string;
    "content-attribute-value-syntax"?: string;
    "content-attribute-enum-values"?: string;
    "content-attribute-aliases"?: string;
    "content-attribute-boolean"?: string;
    "css-property"?: string;
    "css-property-enum-values"?: string;
    "css-property-initial"?: string;
    "css-property-value-syntax"?: string;
    "css-property-shorthand"?: string;
    "css-property-subproperties"?: string;
    "css-property-animatable"?: string;
    "css-property-aliases"?: string;
    "lenient-this"?: string;
    "treat-null-as"?: string;
    "event-handler-map-to-window"?: string;
    static?: 1;
    comment?: string;
    "override-type"?: string;
    required?: 1;
    specs?: string;
    deprecated?: 1;
    interop?: 1;
    exposed?: string;
    constant?: 1;
}

export interface Event {
    name: string;
    type: string;
    dispatch?: string;
    "skips-window"?: string;
    bubbles?: 1;
    cancelable?: 1;
    follows?: string;
    precedes?: string;
    tags?: string;
    aliases?: string;
    specs?: string;
}

export interface Method {
    name: string;
    tags?: string;
    static?: 1;
    getter?: 1;
    stringifier?: 1;
    serializer?: 1;
    "serializer-info"?: string;
    comment?: string;
    "override-signatures"?: string[];
    "additional-signatures"?: string[];
    specs?: string;
    exposed?: string;
    deprecated?: 1;
    signature: Signature[];
}

export interface CallbackFunction {
    name: string;
    callback: 1;
    signature: Signature[];
    tags?: string;
    "override-signatures"?: string[];
    specs?: string;
}

export interface Constructor {
    signature: Signature[];
    comment?: string;
    specs?: string;
}

export interface NamedConstructor {
    name: string;
    signature: Signature[];
    specs?: string;
}

export interface Constant extends Typed {
    name: string;
    value: string;
    tags?: string
    exposed?: string;
    specs?: string;
}

export interface ParsedAttribute{
    "enum-values"?: string;
    name: string;
    "value-syntax"?: string;
}

export interface Element {
    name: string;
    namespace?: string;
    "html-self-closing"?: string;
    specs?: string;
}

export interface Interface {
    name: string;
    extends: string;
    constants?: {
        constant: Record<string, Constant>;
    }
    methods: {
        method: Record<string, Method>;
    }
    events?: {
        event: Event[];
    }
    properties?: {
        property: Record<string, Property>;
    }
    constructor?: Constructor;
    "secure-context"?: string;
    implements?: string[];
    static?: 1;
    "anonymous-methods"?: {
        method: Method[];
    }
    "anonymous-content-attributes"?: {
        parsedattribute: ParsedAttribute[];
    }
    element?: Element[];
    "named-constructor"?: NamedConstructor;
    "override-builtins"?: string;
    exposed?: string;
    tags?: string;
    "implicit-this"?: string;
    "primary-global"?: string;
    "no-interface-object"?: string;
    global?: string;
    "type-parameters"?: string[];
    "overide-index-signatures"?: string[];
    specs?: string;
    iterable?: "value" | "pair" | "pair-iterator";
}

export interface Enum {
    name: string;
    value: string[];
    specs?: string;
}

export interface TypeDef {
    "new-type": string;
    type: string;
    "override-type"?: string;
}

export interface Dictionary {
    name: string;
    extends: string;
    members: {
        member: Record<string, Member>;
    }
    specs?: string;
    "type-parameters"?: string[];
}

export interface WebIdl {
    "callback-functions"?: {
        "callback-function": Record<string, CallbackFunction>;
    },
    "callback-interfaces"?: {
        interface: Record<string, Interface>;
    }
    dictionaries?: {
        dictionary: Record<string, Dictionary>;
    }
    enums?: {
        enum: Record<string, Enum>;
    }
    interfaces?: {
        interface: Record<string, Interface>;
    }
    mixins?: {
        mixin: Record<string, Interface>;
    }
    typedefs?: {
        typedef: TypeDef[];
    }
}
