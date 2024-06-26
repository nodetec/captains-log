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
import * as db$0 from "../db/models.js";

export function AddNoteToTrash(note: db$0.Note, tags: db$0.Tag[]): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3629355206, note, tags) as any;
    return $resultPromise;
}

export function CreateNote(title: string, content: string, notebookID: sql$0.NullInt64, statusID: sql$0.NullInt64, publishedAt: sql$0.NullString, eventId: sql$0.NullString): Promise<db$0.Note> & { cancel(): void } {
    let $resultPromise = $Call.ByID(718095870, title, content, notebookID, statusID, publishedAt, eventId) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function DeleteNote(id: number): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(2694105033, id) as any;
    return $resultPromise;
}

export function DeleteNoteFromTrash(id: number): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3062769697, id) as any;
    return $resultPromise;
}

export function GetNote(id: number): Promise<db$0.Note> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1682701374, id) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType0($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function GetNoteFromTrash(id: number): Promise<db$0.Trash> & { cancel(): void } {
    let $resultPromise = $Call.ByID(2404583840, id) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType1($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function ListNotes(notebookID: sql$0.NullInt64, limit: number, pageParam: number): Promise<db$0.Note[]> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3066540231, notebookID, limit, pageParam) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType2($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function ListNotesFromTrash(limit: number, pageParam: number): Promise<db$0.Trash[]> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3687280279, limit, pageParam) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType3($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

export function UpdateNote(params: db$0.UpdateNoteParams): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByID(3047331695, params) as any;
    return $resultPromise;
}

// Private type creation functions
const $$createType0 = db$0.Note.createFrom;
const $$createType1 = db$0.Trash.createFrom;
const $$createType2 = $Create.Array($$createType0);
const $$createType3 = $Create.Array($$createType1);
