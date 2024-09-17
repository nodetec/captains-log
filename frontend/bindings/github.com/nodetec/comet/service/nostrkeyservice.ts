// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "@wailsio/runtime";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

export function CreateNostrKey(nsec: string, npub: string, active: boolean): Promise<$models.NostrKey> & { cancel(): void } {
    let $resultPromise = $Call.ByID(450605574, nsec, npub, active) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function DeleteNostrKey(id: number): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(907990853, id) as any;
    return $resultPromise;
}

export function GetNostrKey(id: number): Promise<$models.NostrKey> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3016819188, id) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function ListNostrKeys(): Promise<$models.NostrKey[]> & { cancel(): void } {
    let $resultPromise = $Call.ByID(2591303287) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType1($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function UpdateNostrKey(id: number, nsec: string, npub: string, active: boolean): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3751870067, id, nsec, npub, active) as any;
    return $resultPromise;
}

// Private type creation functions
const $$createType0 = $models.NostrKey.createFrom;
const $$createType1 = $Create.Array($$createType0);