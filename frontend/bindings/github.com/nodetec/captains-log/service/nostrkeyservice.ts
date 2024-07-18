// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "@wailsio/runtime";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

export function CreateNostrKey(nsec: string, npub: string, active: boolean, loggedIn: boolean): Promise<$models.NostrKey> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1139917670, nsec, npub, active, loggedIn) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function DeleteNostrKey(id: number): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(2873522469, id) as any;
    return $resultPromise;
}

export function GetNostrKey(id: number): Promise<$models.NostrKey> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1862764116, id) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function ListNostrKeys(): Promise<$models.NostrKey[]> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3075221463) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType1($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function UpdateNostrKey(id: number, nsec: string, npub: string, active: boolean, loggedIn: boolean): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3672862547, id, nsec, npub, active, loggedIn) as any;
    return $resultPromise;
}

// Private type creation functions
const $$createType0 = $models.NostrKey.createFrom;
const $$createType1 = $Create.Array($$createType0);
