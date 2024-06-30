// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "@wailsio/runtime";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as sql$0 from "../../../../database/sql/models.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

export function CreateTag(name: string, color: sql$0.NullString, icon: sql$0.NullString, createdAt: string): Promise<$models.Tag> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1673117124, name, color, icon, createdAt) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function DeleteTag(id: number): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1066084529, id) as any;
    return $resultPromise;
}

export function GetTag(id: number): Promise<$models.Tag> & { cancel(): void } {
    let $resultPromise = $Call.ByID(2058995772, id) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function ListTags(): Promise<$models.Tag[]> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3082273913) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType1($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function UpdateTag(id: number, name: string, color: sql$0.NullString, icon: sql$0.NullString, createdAt: string): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(156168943, id, name, color, icon, createdAt) as any;
    return $resultPromise;
}

// Private type creation functions
const $$createType0 = $models.Tag.createFrom;
const $$createType1 = $Create.Array($$createType0);